// Empfaengt Etsy-Webhook "order.paid", prueft die Signatur und legt die Bestellung an.
// Secrets: ETSY_WEBHOOK_SECRET (whsec_...), SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY (automatisch).
// Welche Angebote zum Konfigurator gehoeren und wie viele Kisten sie geben, steht in der Tabelle `listings`
// (pflegt Mike im Admin). Andere Shop-Artikel geben 0 Kisten; Bestellungen nur mit solchen Artikeln werden ignoriert.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

const b64 = (u8: Uint8Array) => btoa(String.fromCharCode(...u8));
const unb64 = (s: string) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

async function verify(req: Request, raw: string): Promise<boolean> {
  const id = req.headers.get("webhook-id"), ts = req.headers.get("webhook-timestamp"), sig = req.headers.get("webhook-signature");
  if (!id || !ts || !sig) return false;
  if (Math.abs(Date.now() / 1000 - Number(ts)) > 300) return false; // Replay-Schutz
  const secret = (Deno.env.get("ETSY_WEBHOOK_SECRET") ?? "").replace(/^whsec_/, "");
  if (!secret) return false;
  const key = await crypto.subtle.importKey("raw", unb64(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const mac = b64(new Uint8Array(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(`${id}.${ts}.${raw}`))));
  // Header kann mehrere Signaturen enthalten: "v1,<base64> v1,<base64>"
  return sig.split(" ").some((s) => s.split(",")[1] === mac);
}

Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("ok");
  const raw = await req.text();
  if (!(await verify(req, raw))) return new Response("bad signature", { status: 401 });
  const body = JSON.parse(raw);
  const type = body.type ?? body.event_type ?? body.event;
  if (type !== "order.paid") return new Response("ignored");
  // Die genaue Payload-Struktur ist bei Etsy nicht ueberall dokumentiert -> tolerant lesen.
  const d = body.data ?? body;
  const receipt = String(d.receipt_id ?? d.order_id ?? d.id ?? (d.resource_url ?? "").split("/").pop() ?? "");
  if (!receipt) { console.error("no receipt id, fields:", Object.keys(d).join(",")); return new Response("no receipt", { status: 400 }); }
  const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const { data: lst } = await sb.from("listings").select("listing_id,title,product,credits").eq("active", true);
  const known = new Map((lst ?? []).map((l: any) => [String(l.listing_id), l]));
  const qty = (q: unknown) => Math.max(1, Math.min(100, Number(q) | 0 || 1));
  const tx: any[] | null = Array.isArray(d.transactions) ? d.transactions : null;
  const items = tx?.map((t) => {
    const lid = String(t.listing_id ?? ""), l: any = known.get(lid), q = qty(t.quantity);
    return { listing_id: lid, title: String(t.title ?? l?.title ?? "").slice(0, 120), qty: q, product: l?.product ?? null, credits: l ? l.credits * q : 0 };
  }) ?? null;
  let credits = 0, status = "ok";
  if (items && items.length && known.size) {
    credits = items.reduce((a, i) => a + i.credits, 0);
    if (!credits) { console.log("order.paid", receipt, "ohne Konfigurator-Artikel -> ignoriert"); return new Response("ignored"); }
  } else {
    // Artikel nicht mitgeschickt oder noch keine Angebote eingetragen: nicht raten, im Admin pruefen lassen
    status = "pruefen";
    console.log("order.paid", receipt, "Artikel unbekannt -> pruefen; fields:", Object.keys(d).join(","), "tx:", tx ? tx.length : "keine");
  }
  console.log("order.paid", receipt, "items", items?.length ?? 0, "credits", credits, "status", status);
  const { error } = await sb.from("orders").upsert({ source: "etsy", receipt_id: receipt, listing_id: items?.[0]?.listing_id || null, credits, items, status }, { onConflict: "receipt_id", ignoreDuplicates: true });
  if (error) { console.error(error); return new Response("db error", { status: 500 }); }
  return new Response("ok");
});
