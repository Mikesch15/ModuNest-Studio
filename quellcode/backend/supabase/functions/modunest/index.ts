// API fuer den Konfigurator: /redeem, /consume (Guthaben = Kisten), /admin/create, /admin/list, /admin/add,
//   /admin/listings, /admin/listing (speichern), /admin/listing-del (Konfigurator-Angebote fuer den Etsy-Webhook),
//   /admin/etsy-start, /etsy-callback, /admin/etsy-status, /admin/etsy-fetch, /admin/etsy-lookup (Etsy-Verbindung, siehe ../_shared/etsy.ts)
// Secrets: TOKEN_SECRET (lange Zufallszeichenfolge), ADMIN_KEY, ALLOWED_ORIGIN (z.B. https://deinname.github.io),
//          SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY (automatisch)
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { accessToken, authorizeUrl, clientId, etsyConfigured, etsyGet, evaluate, receiptTransactions, redirectUri, saveToken, tokenRequest } from "../_shared/etsy.ts";

const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
const ORIGIN = Deno.env.get("ALLOWED_ORIGIN") ?? "*";
const TTL = 12 * 3600 * 1000; // Sitzung 12 h
// Kunden-Aufrufe nur von ALLOWED_ORIGIN; Admin-Aufrufe (durch ADMIN_KEY geschuetzt) von ueberall,
// damit admin.html auch lokal geoeffnet funktioniert (Origin "null").
const corsFor = (origin: string) => ({ "access-control-allow-origin": origin, "access-control-allow-headers": "content-type, x-admin-key", "access-control-allow-methods": "POST, GET, OPTIONS", "vary": "origin" });

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
const rnd = (n: number) => b64u(crypto.getRandomValues(new Uint8Array(n)));
// Rueckkehr nach der Etsy-Anmeldung: Code gegen Tokens tauschen, Shop merken, zurueck in den Admin.
async function etsyCallback(u: URL) {
  const { data: a } = await sb.from("etsy_auth").select("state,verifier,ret,started_at").eq("id", 1).maybeSingle();
  const back = (q: string) => new Response(null, { status: 302, headers: { location: (a?.ret || ORIGIN + "/ModuNest-Studio/admin/") + "?etsy=" + q } });
  const err = u.searchParams.get("error"); if (err) return back("abgebrochen");
  if (!a?.state || u.searchParams.get("state") !== a.state || Date.now() - new Date(a.started_at).getTime() > 15 * 60 * 1000) return back("ungueltig");
  try {
    const j = await tokenRequest({ grant_type: "authorization_code", redirect_uri: redirectUri(), code: u.searchParams.get("code") ?? "", code_verifier: a.verifier });
    const me = await etsyGet(sb, "/users/me", j.access_token);
    let shop_name = "";
    try { shop_name = (await etsyGet(sb, `/shops/${me.shop_id}`, j.access_token)).shop_name ?? ""; } catch (_) { /* nur Anzeige */ }
    await saveToken(sb, j, { shop_id: String(me.shop_id ?? ""), shop_name, state: null, verifier: null });
    return back("ok");
  } catch (e) { console.error("etsy-callback", (e as Error).message); return back("fehler"); }
}
const newCode = () => { const a = crypto.getRandomValues(new Uint8Array(12)); return Array.from(a, (x) => ALPHA[x % 32]).join(""); };

Deno.serve(async (req) => {
  const path = new URL(req.url).pathname.split("/").filter(Boolean).slice(1).join("/"); // nach /modunest
  const cors = corsFor(path.startsWith("admin/") ? (req.headers.get("origin") ?? "*") : ORIGIN);
  const json = (o: unknown, status = 200) => new Response(JSON.stringify(o), { status, headers: { ...cors, "content-type": "application/json" } });
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  if (path === "etsy-callback") return etsyCallback(new URL(req.url));
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
    if (data.status === "pruefen") return json({ error: "pending" }, 409); // Etsy-Bestellung noch nicht von Mike geprueft
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
      // Produkt (z.B. "modunest"): Gratis-Korrekturen nur innerhalb desselben Produkts; Guthaben gilt fuer alle Produkte
      const product = String(b.product ?? "modunest").replace(/[^a-z0-9-]/g, "").slice(0, 40) || "modunest";
      const { data: prev } = await sb.from("exports").select("dims").eq("order_id", p.id).eq("product", product).gte("at", new Date(Date.now() - FREE_MS).toISOString());
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
      await sb.from("exports").insert(rec.map((dims) => ({ order_id: p.id, product, dims })));
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
      const { error } = await sb.from("orders").insert({ source: "manual", code, credits: Math.max(1, Number(b.credits) | 0 || 6), note: String(b.note ?? "").slice(0, 200) });
      return error ? json({ error: error.message }, 500) : json({ code });
    }
    if (path === "admin/list") {
      const { data } = await sb.from("orders").select("source,receipt_id,code,credits,used,note,items,status,created_at").order("created_at", { ascending: false }).limit(200);
      return json({ orders: data });
    }
    if (path === "admin/add") { // Etsy-Bestellung von Hand nachtragen oder Kisten-Gesamtzahl aendern: { receipt_id, credits }
      const rid = norm(b.receipt_id); if (!/^\d{6,}$/.test(rid)) return json({ error: "receipt" }, 400);
      const { error } = await sb.from("orders").upsert({ source: "etsy", receipt_id: rid, credits: Math.max(1, Number(b.credits) | 0 || 6), note: "manuell", status: "ok" }, { onConflict: "receipt_id" });
      return error ? json({ error: error.message }, 500) : json({ ok: true });
    }
    if (path === "admin/listings") {
      const { data } = await sb.from("listings").select("listing_id,title,product,credits,active,created_at").order("created_at");
      return json({ listings: data ?? [] });
    }
    if (path === "admin/listing") { // { listing_id, title, product, credits, active }
      const lid = String(b.listing_id ?? "").replace(/\D/g, ""); if (lid.length < 6) return json({ error: "listing" }, 400);
      const row = { listing_id: lid, title: String(b.title ?? "").slice(0, 120), product: String(b.product ?? "modunest").replace(/[^a-z0-9-]/g, "").slice(0, 40) || "modunest", credits: Math.max(0, Math.min(500, Number(b.credits) | 0)), active: b.active !== false };
      const { error } = await sb.from("listings").upsert(row, { onConflict: "listing_id" });
      return error ? json({ error: error.message }, 500) : json({ ok: true });
    }
    if (path === "admin/listing-del") {
      const { error } = await sb.from("listings").delete().eq("listing_id", String(b.listing_id ?? ""));
      return error ? json({ error: error.message }, 500) : json({ ok: true });
    }
    if (path === "admin/etsy-start") { // { ret: Adresse der Admin-Seite }
      if (!etsyConfigured()) return json({ error: "etsy-secrets" }, 400);
      const ret = String(b.ret ?? ""), state = rnd(16), verifier = rnd(48);
      const challenge = b64u(new Uint8Array(await crypto.subtle.digest("SHA-256", enc.encode(verifier))));
      const { error } = await sb.from("etsy_auth").upsert({ id: 1, state, verifier, started_at: new Date().toISOString(), ret: ORIGIN !== "*" && ret.startsWith(ORIGIN) ? ret.split("?")[0] : null });
      if (error) return json({ error: error.message }, 500);
      const q = new URLSearchParams({ response_type: "code", client_id: clientId(), redirect_uri: redirectUri(), scope: "transactions_r shops_r", state, code_challenge: challenge, code_challenge_method: "S256" });
      return json({ url: authorizeUrl + "?" + q, redirect_uri: redirectUri() });
    }
    if (path === "admin/etsy-status") { // erneuert dabei das Token -> Verbindung bleibt aktiv, solange der Admin ab und zu geoeffnet wird
      const { data: a } = await sb.from("etsy_auth").select("refresh_token,refreshed_at,shop_id,shop_name").eq("id", 1).maybeSingle();
      const st: Record<string, unknown> = { configured: etsyConfigured(), connected: !!a?.refresh_token, shop_id: a?.shop_id ?? null, shop_name: a?.shop_name ?? null, redirect_uri: redirectUri() };
      if (a?.refresh_token) {
        try { if (Date.now() - new Date(a.refreshed_at).getTime() > 24 * 3600 * 1000) await accessToken(sb, true); st.ok = true; }
        catch (e) { st.ok = false; st.problem = (e as Error).message; }
        const { data: c } = await sb.from("etsy_auth").select("refreshed_at").eq("id", 1).maybeSingle();
        st.valid_until = new Date(new Date(c?.refreshed_at).getTime() + 90 * 24 * 3600 * 1000).toISOString();
      }
      return json(st);
    }
    if (path === "admin/etsy-lookup") { // { receipt_id }: nur nachschlagen (Test der Etsy-Verbindung), speichert nichts
      const rid = norm(b.receipt_id); if (!/^\d{6,}$/.test(rid)) return json({ error: "receipt" }, 400);
      try { const tx = await receiptTransactions(sb, rid); const r = await evaluate(sb, tx); return json({ ok: true, items: r.items, credits: r.credits, status: r.status }); }
      catch (e) { return json({ error: "etsy", detail: (e as Error).message }, 502); }
    }
    if (path === "admin/etsy-fetch") { // { receipt_id }: Artikel einer Bestellung bei Etsy holen und neu berechnen
      const rid = norm(b.receipt_id); if (!/^\d{6,}$/.test(rid)) return json({ error: "receipt" }, 400);
      let tx: any[];
      try { tx = await receiptTransactions(sb, rid); } catch (e) { return json({ error: "etsy", detail: (e as Error).message }, 502); }
      const r = await evaluate(sb, tx);
      const status = r.status === "ok" && r.credits > 0 ? "ok" : "pruefen";
      const { error } = await sb.from("orders").update({ items: r.items, credits: r.credits, status, note: status === "ok" ? null : "keine Konfigurator-Artikel gefunden" }).eq("receipt_id", rid);
      return error ? json({ error: error.message }, 500) : json({ ok: true, credits: r.credits, status, items: r.items });
    }
  }
  return json({ error: "notfound" }, 404);
});
