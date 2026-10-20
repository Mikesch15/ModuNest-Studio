// API fuer den Konfigurator: /redeem, /consume (Guthaben = Kisten), /admin/create, /admin/list, /admin/add
// Secrets: TOKEN_SECRET (lange Zufallszeichenfolge), ADMIN_KEY, ALLOWED_ORIGIN (z.B. https://deinname.github.io),
//          SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY (automatisch)
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
const ORIGIN = Deno.env.get("ALLOWED_ORIGIN") ?? "*";
const TTL = 12 * 3600 * 1000; // Sitzung 12 h
const cors = { "access-control-allow-origin": ORIGIN, "access-control-allow-headers": "content-type, x-admin-key", "access-control-allow-methods": "POST, GET, OPTIONS" };
const json = (o: unknown, status = 200) => new Response(JSON.stringify(o), { status, headers: { ...cors, "content-type": "application/json" } });

const enc = new TextEncoder();
const b64u = (u8: Uint8Array) => btoa(String.fromCharCode(...u8)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const unb64u = (s: string) => Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0));
const hk = () => crypto.subtle.importKey("raw", enc.encode(Deno.env.get("TOKEN_SECRET")!), { name: "HMAC", hash: "SHA-256" }, false, ["sign", "verify"]);
async function sign(p: object) { const body = b64u(enc.encode(JSON.stringify(p))); return body + "." + b64u(new Uint8Array(await crypto.subtle.sign("HMAC", await hk(), enc.encode(body)))); }
async function check(t: string) {
  const [body, sig] = (t ?? "").split("."); if (!body || !sig) return null;
  if (!(await crypto.subtle.verify("HMAC", await hk(), unb64u(sig), enc.encode(body)))) return null;
  const p = JSON.parse(new TextDecoder().decode(unb64u(body))); return p.exp > Date.now() ? p : null;
}
const norm = (c: string) => String(c ?? "").toUpperCase().replace(/[^A-Z0-9]/g, "");
const ALPHA = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const FREE_MS = 24 * 3600 * 1000, TOL = 5.01;
// Ordnet jeder neuen Kiste eine noch freie bezahlte Kiste zu, deren Masse alle innerhalb TOL liegen.
// Rueckgabe: fuer jede neue Kiste die bezahlten Masse (oder null = muss bezahlt werden).
function match(paid: number[][], b: number[][]) {
  const used = new Array(paid.length).fill(false);
  return b.map((m) => { const j = paid.findIndex((q, k) => !used[k] && Array.isArray(q) && q.every((v, t) => Math.abs(v - m[t]) <= TOL)); if (j < 0) return null; used[j] = true; return paid[j]; });
}
const newCode = () => { const a = crypto.getRandomValues(new Uint8Array(12)); return Array.from(a, (x) => ALPHA[x % 32]).join(""); };

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  const path = new URL(req.url).pathname.split("/").filter(Boolean).slice(1).join("/"); // nach /modunest
  const ip = (req.headers.get("x-forwarded-for") ?? "?").split(",")[0].trim();
  let b: any = {}; try { b = await req.json(); } catch (_) {}

  if (path === "redeem") {
    const since = new Date(Date.now() - 15 * 60 * 1000).toISOString();
    const { count } = await sb.from("attempts").select("id", { count: "exact", head: true }).eq("ip", ip).gte("at", since);
    if ((count ?? 0) >= 10) return json({ error: "rate" }, 429);
    await sb.from("attempts").insert({ ip });
    const c = norm(b.code); if (c.length < 6) return json({ error: "bad" }, 404);
    // Etsy-Bestellnummer (nur Ziffern) ODER manueller Code
    const q = /^\d+$/.test(c) ? sb.from("orders").select("*").eq("receipt_id", c) : sb.from("orders").select("*").eq("code", c);
    const { data } = await q.maybeSingle();
    if (!data) return json({ error: "bad" }, 404);
    const exp = Date.now() + TTL;
    return json({ token: await sign({ id: data.id, exp }), left: data.credits - data.used, exp });
  }
  if (path === "consume") {
    const p = await check(b.token); if (!p) return json({ error: "token" }, 401);
    // Neu: cfgs = je Konfiguration die Kistenmasse [[lang,kurz,hoch],...]; 1 Kiste = 1 Guthaben.
    // Korrektur innerhalb 24 h: Kisten, die zu einer schon bezahlten Kiste derselben frueheren Konfiguration passen
    // (jedes Mass max. TOL mm anders), sind gratis; nur die uebrigen kosten. Verglichen wird immer mit den bezahlten
    // Massen (die werden weitergetragen), damit man nicht schrittweise wegschieben kann.
    if (Array.isArray(b.cfgs)) {
      const cfgs: number[][][] = b.cfgs.slice(0, 50).map((c: any) => (Array.isArray(c) ? c.slice(0, 100) : []).map((m: any) => [0, 1, 2].map((k) => Number(m?.[k]) || 0))).filter((c: number[][]) => c.length);
      if (!cfgs.length) return json({ error: "bad" }, 400);
      const { data: prev } = await sb.from("exports").select("dims").eq("order_id", p.id).gte("at", new Date(Date.now() - FREE_MS).toISOString());
      const free: number[] = [], rec: number[][][] = [];
      let n = 0;
      cfgs.forEach((c, i) => {
        let best = c.map(() => null as number[] | null);
        for (const e of prev ?? []) { if (!Array.isArray(e.dims)) continue; const m = match(e.dims, c); if (m.filter(Boolean).length > best.filter(Boolean).length) best = m; }
        const k = best.filter((x) => !x).length;
        if (!k) free.push(i); else { n += k; rec.push(c.map((m, j) => best[j] ?? m)); }
      });
      if (!n) { const { data: o } = await sb.from("orders").select("credits,used").eq("id", p.id).single(); return json({ left: o ? o.credits - o.used : 0, n: 0, free }); }
      const { data } = await sb.rpc("consume_credits", { p_id: p.id, p_n: n });
      if (data === -1 || data == null) {
        const { data: o } = await sb.from("orders").select("credits,used").eq("id", p.id).single();
        return json({ error: "credits", left: o ? o.credits - o.used : 0, need: n }, 402);
      }
      await sb.from("exports").insert(rec.map((dims) => ({ order_id: p.id, dims })));
      return json({ left: data, n, free });
    }
    // alt (Version <= 2.9): n Exporte
    const n = Math.max(1, Math.min(50, Number(b.n) | 0));
    const { data } = await sb.rpc("consume_credits", { p_id: p.id, p_n: n });
    if (data === -1 || data == null) {
      const { data: o } = await sb.from("orders").select("credits,used").eq("id", p.id).single();
      return json({ error: "credits", left: o ? o.credits - o.used : 0 }, 402);
    }
    return json({ left: data });
  }
  if (path.startsWith("admin/")) {
    if (req.headers.get("x-admin-key") !== Deno.env.get("ADMIN_KEY")) return json({ error: "auth" }, 401);
    if (path === "admin/create") {
      const code = newCode();
      const { error } = await sb.from("orders").insert({ source: "manual", code, credits: Math.max(1, Number(b.credits) | 0 || 3), note: String(b.note ?? "").slice(0, 200) });
      return error ? json({ error: error.message }, 500) : json({ code });
    }
    if (path === "admin/list") {
      const { data } = await sb.from("orders").select("source,receipt_id,code,credits,used,note,created_at").order("created_at", { ascending: false }).limit(200);
      return json({ orders: data });
    }
    if (path === "admin/add") { // Etsy-Bestellung von Hand nachtragen: { receipt_id, credits }
      const { error } = await sb.from("orders").upsert({ source: "etsy", receipt_id: norm(b.receipt_id), credits: Number(b.credits) | 0 || 3, note: "manuell" }, { onConflict: "receipt_id" });
      return error ? json({ error: error.message }, 500) : json({ ok: true });
    }
  }
  return json({ error: "notfound" }, 404);
});
