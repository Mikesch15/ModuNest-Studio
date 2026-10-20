// Empfaengt Etsy-Webhook "order.paid", prueft die Signatur und legt die Bestellung an.
// Secrets: ETSY_WEBHOOK_SECRET (whsec_...), SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY (automatisch),
//          DEFAULT_CREDITS (Kisten pro Kauf, z.B. 6), optional LISTING_CREDITS='{"123456":10}'
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
  if (!receipt) { console.error("no receipt id in payload", raw); return new Response("no receipt", { status: 400 }); }
  const listing = String(d.listing_id ?? d.listing_ids?.[0] ?? d.transactions?.[0]?.listing_id ?? "");
  // Guthaben = Kisten. Pro gekauftem Stueck DEFAULT_CREDITS bzw. LISTING_CREDITS[listing_id], mal Menge.
  // Format der Etsy-Meldung unverifiziert: liest transactions[].quantity, sonst quantity, sonst 1.
  const def = Number(Deno.env.get("DEFAULT_CREDITS") ?? 6) || 6;
  let map: Record<string, number> = {};
  try { map = JSON.parse(Deno.env.get("LISTING_CREDITS") ?? "{}"); } catch (_) {}
  const per = (l: string) => Number(map[l]) || def;
  const qty = (q: unknown) => Math.max(1, Math.min(100, Number(q) | 0 || 1));
  const tx = Array.isArray(d.transactions) ? d.transactions : [];
  let credits = tx.length ? tx.reduce((a: number, t: any) => a + per(String(t.listing_id ?? listing)) * qty(t.quantity), 0) : per(listing) * qty(d.quantity);
  if (!(credits > 0)) credits = def;
  console.log("order.paid", receipt, "listing", listing, "tx", tx.length, "credits", credits);
  const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const { error } = await sb.from("orders").upsert({ source: "etsy", receipt_id: receipt, listing_id: listing || null, credits }, { onConflict: "receipt_id", ignoreDuplicates: true });
  if (error) { console.error(error); return new Response("db error", { status: 500 }); }
  return new Response("ok");
});
