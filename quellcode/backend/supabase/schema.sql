-- ModuNest: Bestellungen / Codes. Zugriff nur ueber die Edge Functions (service role).
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  source text not null check (source in ('etsy','manual')),
  receipt_id text unique,          -- Etsy-Bestellnummer (nur bei source='etsy')
  code text unique,                -- Einmalcode (nur bei source='manual')
  listing_id text,
  credits int not null default 3 check (credits >= 0),
  used int not null default 0 check (used >= 0),
  note text,
  created_at timestamptz not null default now()
);
create table if not exists public.attempts (
  id bigint generated always as identity primary key,
  ip text not null,
  at timestamptz not null default now()
);
create index if not exists attempts_ip_at on public.attempts (ip, at);
alter table public.orders enable row level security;
alter table public.attempts enable row level security;
-- bewusst keine Policies: nur service_role (Edge Functions) darf lesen/schreiben.

-- Atomar Exporte abbuchen. Gibt verbleibende Exporte zurueck oder -1 wenn nicht genug.
create or replace function public.consume_credits(p_id uuid, p_n int)
returns int language plpgsql security definer set search_path = public as $$
declare left_ int;
begin
  update orders set used = used + p_n where id = p_id and used + p_n <= credits
    returning credits - used into left_;
  if left_ is null then return -1; end if;
  return left_;
end $$;
revoke all on function public.consume_credits(uuid, int) from public, anon, authenticated;

-- IP-Adressen der Freischalt-Versuche taeglich nach 7 Tagen loeschen (Datenschutz)
create extension if not exists pg_cron;
select cron.schedule('modunest-attempts-cleanup', '17 3 * * *', $$delete from public.attempts where at < now() - interval '7 days'$$);

-- Bezahlte Konfigurationen (Kistenmasse) fuer Gratis-Korrekturen innerhalb 24 h
create table if not exists public.exports (
  id bigint generated always as identity primary key,
  order_id uuid not null references public.orders(id) on delete cascade,
  dims jsonb not null,             -- [[lang,kurz,hoch],...] je Kiste
  at timestamptz not null default now()
);
create index if not exists exports_order_at on public.exports (order_id, at);
alter table public.exports enable row level security;
select cron.schedule('modunest-exports-cleanup', '23 3 * * *', $$delete from public.exports where at < now() - interval '2 days'$$);

-- Mehrere Produkte: Gratis-Korrekturen je Produkt
alter table public.exports add column if not exists product text not null default 'modunest';
create index if not exists exports_order_product_at on public.exports (order_id, product, at);

-- Konfigurator-Angebote (pflegt Mike im Admin): nur diese Etsy-Angebote geben Kisten (credits pro Stueck)
create table if not exists public.listings (
  listing_id text primary key,
  title text not null default '',
  product text not null default 'modunest',
  credits int not null default 6 check (credits >= 0),
  active boolean not null default true,
  created_at timestamptz not null default now()
);
alter table public.listings enable row level security;
-- Bestellungen: gekaufte Artikel und Status ('ok' | 'pruefen' = Artikel unbekannt, Mike gibt im Admin frei)
alter table public.orders add column if not exists items jsonb;
alter table public.orders add column if not exists status text not null default 'ok';

-- Etsy-Verbindung (OAuth, nur Lesen von Bestellungen): eine Zeile, nur service role (Edge Functions)
create table if not exists public.etsy_auth (
  id int primary key default 1 check (id = 1),
  access_token text, refresh_token text, expires_at timestamptz, refreshed_at timestamptz,
  shop_id text, shop_name text,
  state text, verifier text, ret text, started_at timestamptz
);
alter table public.etsy_auth enable row level security;

-- Bestellungen nach 2 Jahren loeschen (exports per Fremdschluessel mit)
select cron.schedule('modunest-orders-cleanup', '41 3 * * *', $$delete from public.orders where created_at < now() - interval '2 years'$$);

-- Guthaben je Produkt: per = { produkt: Kisten } aus den gekauften Angeboten (null = gilt fuer alle Produkte), pused = verbraucht
alter table public.orders add column if not exists per jsonb;
alter table public.orders add column if not exists pused jsonb not null default '{}';
create or replace function public.consume_credits2(p_id uuid, p_n int, p_product text)
returns int language plpgsql security definer set search_path = public as $$
declare o orders%rowtype; cap int := null; usedp int;
begin
  select * into o from orders where id = p_id for update;
  if not found or o.used + p_n > o.credits then return -1; end if;
  usedp := coalesce((o.pused->>p_product)::int, 0);
  if o.per is not null then
    cap := coalesce((o.per->>p_product)::int, 0);
    if usedp + p_n > cap then return -1; end if;
  end if;
  update orders set used = used + p_n, pused = jsonb_set(coalesce(pused, '{}'), array[p_product], to_jsonb(usedp + p_n)) where id = p_id;
  return case when cap is null then o.credits - o.used - p_n else least(o.credits - o.used - p_n, cap - usedp - p_n) end;
end $$;
revoke all on function public.consume_credits2(uuid, int, text) from public, anon, authenticated;

-- Freigabe der Produkte/Optionen (Admin -> Produkte), oeffentlich lesbar ueber /config
create table if not exists public.settings (key text primary key, value jsonb not null default '{}', updated_at timestamptz not null default now());
alter table public.settings enable row level security;
insert into public.settings(key,value) values ('site','{"products":{"modunest":{"status":"live","off":[]},"namenspuzzle":{"status":"test","off":[]}}}') on conflict (key) do nothing;
-- alte Bestellungen ohne Produkt-Aufteilung -> ModuNest (21.10.2026)
update public.orders set per = jsonb_build_object('modunest', credits), pused = jsonb_build_object('modunest', used) where per is null and status = 'ok' and credits > 0;
