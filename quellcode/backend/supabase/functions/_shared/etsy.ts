// Etsy-Anbindung, gemeinsam fuer `modunest` (Admin, Verbinden) und `etsy-webhook`.
// Secrets: ETSY_KEYSTRING und ETSY_SHARED_SECRET (Etsy -> Your Apps). Seit 18.01.2026 verlangt Etsy beide im x-api-key.
// Die OAuth-Tokens (Lesen der Bestellungen, Scope transactions_r) liegen in Tabelle etsy_auth (nur service role).
const API = "https://api.etsy.com/v3";
const KEY = () => Deno.env.get("ETSY_KEYSTRING") ?? "";
const SECRET = () => Deno.env.get("ETSY_SHARED_SECRET") ?? "";
export const etsyConfigured = () => !!KEY() && !!SECRET();
export const clientId = () => KEY();
export const redirectUri = () => `${Deno.env.get("SUPABASE_URL")}/functions/v1/modunest/etsy-callback`;
export const authorizeUrl = "https://www.etsy.com/oauth/connect";

export async function tokenRequest(params: Record<string, string>) {
  const r = await fetch(`${API}/public/oauth/token`, { method: "POST", headers: { "content-type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ client_id: clientId(), ...params }) });
  const j: any = await r.json().catch(() => ({}));
  if (!r.ok || !j.access_token) throw new Error("token: " + (j.error_description ?? j.error ?? r.status));
  return j;
}
export async function saveToken(sb: any, j: any, extra: Record<string, unknown> = {}) {
  const { error } = await sb.from("etsy_auth").upsert({ id: 1, access_token: j.access_token, refresh_token: j.refresh_token, expires_at: new Date(Date.now() + (Number(j.expires_in) || 3600) * 1000).toISOString(), refreshed_at: new Date().toISOString(), ...extra });
  if (error) throw new Error("db: " + error.message);
}
// Gueltiges Access-Token; erneuert es bei Bedarf (der Refresh-Token gilt 90 Tage und wird dabei mit erneuert).
export async function accessToken(sb: any, force = false): Promise<string | null> {
  const { data: a } = await sb.from("etsy_auth").select("access_token,refresh_token,expires_at").eq("id", 1).maybeSingle();
  if (!a?.refresh_token) return null;
  if (!force && a.access_token && new Date(a.expires_at).getTime() > Date.now() + 60_000) return a.access_token;
  const j = await tokenRequest({ grant_type: "refresh_token", refresh_token: a.refresh_token });
  await saveToken(sb, j);
  return j.access_token;
}
export async function etsyGet(sb: any, path: string, token?: string) {
  const t = token ?? await accessToken(sb);
  if (!t) throw new Error("nicht mit Etsy verbunden");
  const r = await fetch(API + "/application" + path, { headers: { "x-api-key": `${KEY()}:${SECRET()}`, authorization: "Bearer " + t } });
  const j: any = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(`etsy ${r.status}: ${j.error ?? ""}`);
  return j;
}
// Gekaufte Artikel einer Bestellung bei Etsy abfragen
export async function receiptTransactions(sb: any, receipt: string, shopId?: string): Promise<any[]> {
  let shop = shopId;
  if (!shop) { const { data: a } = await sb.from("etsy_auth").select("shop_id").eq("id", 1).maybeSingle(); shop = a?.shop_id; }
  if (!shop) throw new Error("Shop unbekannt");
  const r = await etsyGet(sb, `/shops/${shop}/receipts/${receipt}`);
  return Array.isArray(r.transactions) ? r.transactions : [];
}
// Artikel -> Kisten nach Tabelle listings. status 'pruefen', wenn Artikel unbekannt oder noch keine Angebote eingetragen.
export async function evaluate(sb: any, tx: any[] | null) {
  const { data: lst } = await sb.from("listings").select("listing_id,title,product,credits").eq("active", true);
  const known = new Map((lst ?? []).map((l: any) => [String(l.listing_id), l]));
  const qty = (q: unknown) => Math.max(1, Math.min(100, Number(q) | 0 || 1));
  const items = tx?.map((t) => {
    const lid = String(t.listing_id ?? ""), l: any = known.get(lid), q = qty(t.quantity);
    return { listing_id: lid, title: String(t.title ?? l?.title ?? "").slice(0, 120), qty: q, product: l?.product ?? null, credits: l ? l.credits * q : 0 };
  }) ?? null;
  const known_ok = !!(items && items.length && known.size);
  const credits = known_ok ? items!.reduce((a, i) => a + i.credits, 0) : 0;
  return { items, credits, status: known_ok ? "ok" : "pruefen", relevant: !known_ok || credits > 0 };
}
