# ModuNest – Freischaltung einrichten (Anleitung)

Ziel: Käufer bezahlen bei Etsy → Etsy meldet die Bestellung an deinen Server → der Käufer gibt im Konfigurator seine **Etsy-Bestellnummer** ein und kann Dateien exportieren (pro Bestellung eine feste Anzahl **Kisten**; jede Kiste/Modul zählt 1, Korrekturen bis 5 mm pro Mass sind 24 h gratis).

Du kannst sofort mit der **Notlösung** (Schritt 5) starten und Etsy später dazuschalten.

## 1. Supabase (ca. 10 Min.)
1. supabase.com → **New project** (eigenes Projekt, nicht das vom Regierapport). Region z.B. Frankfurt. Datenbank-Passwort notieren.
2. Im Projekt: **SQL Editor** → Inhalt von `supabase/schema.sql` einfügen → **Run**.
3. **Project Settings → API**: Projekt-URL notieren (`https://XXXX.supabase.co`).
4. Zugriff für mich (optional): Wenn du willst, dass ich Tabellen und Funktionen direkt einrichte, verbinde mir das neue Projekt in der Sitzung. Sonst Schritt 5–6 selbst.

## 2. Funktionen veröffentlichen
Auf deinem PC (einmalig `npm i -g supabase`, dann `supabase login`):
```
supabase link --project-ref XXXX
supabase functions deploy modunest --no-verify-jwt
supabase functions deploy etsy-webhook --no-verify-jwt
```
(`--no-verify-jwt` ist nötig, weil der Konfigurator und Etsy ohne Supabase-Anmeldung zugreifen. Die Funktionen prüfen selbst Signatur bzw. Token.)

## 3. Geheimnisse setzen
```
supabase secrets set TOKEN_SECRET=<lange Zufallsfolge, 40+ Zeichen>
supabase secrets set ADMIN_KEY=<dein Admin-Passwort>
supabase secrets set ALLOWED_ORIGIN=https://<deine-seite>   # Adresse, wo der Konfigurator liegt
supabase secrets set DEFAULT_CREDITS=6                       # Kisten pro gekauftem Stück (× Menge)
```
Später, nach Etsy-Freigabe: `ETSY_WEBHOOK_SECRET=whsec_...`
Pro Angebot unterschiedlich: `LISTING_CREDITS={"123456789":10}` (Etsy-Listing-ID → Kisten pro Stück).

## 4. Konfigurator veröffentlichen
1. In `ModuNest-Studio-*.html` am Anfang des Skripts die Zeile `const CONFIG={requireCode:false,api:''};` ändern zu
   `const CONFIG={requireCode:true,api:'https://XXXX.supabase.co/functions/v1/modunest'};`
2. Datei als `index.html` bei Cloudflare Pages (Drag-and-drop) oder GitHub Pages hochladen.
3. Die Adresse als `ALLOWED_ORIGIN` (Schritt 3) eintragen.

## 5. Notlösung: Codes von Hand
Datei `admin.html` **lokal** öffnen (nicht hochladen), API-URL (`…/functions/v1/modunest`) und Admin-Passwort eintragen. «Code erzeugen» → Code z.B. `ABCD-EFGH-JKMN`. Diesen Code schickst du dem Käufer per Etsy-Nachricht. Etsy-Bestellungen kannst du dort auch von Hand eintragen («Etsy-Bestellnummer von Hand eintragen»).

## 6. Etsy automatisch anbinden
1. etsy.com/developers → **Create an app**. Beschreibung: «Freischaltung digitaler Produkte (Konfigurator) für meinen eigenen Shop». Freigabe abwarten (Dauer unbekannt).
2. Webhook anlegen: Callback-URL `https://XXXX.supabase.co/functions/v1/etsy-webhook`, Ereignis **order.paid**. Das Signatur-Geheimnis (`whsec_…`) als `ETSY_WEBHOOK_SECRET` setzen (Schritt 3).
3. **Testkauf** mit einem eigenen 100-%-Gutschein-Artikel und prüfen, ob in der Tabelle `orders` (Supabase → Table Editor) eine Zeile entsteht. Falls nicht: Supabase → Edge Functions → `etsy-webhook` → Logs ansehen und mir den Eintrag schicken. Die genaue Datenstruktur von Etsy ist nicht überall dokumentiert, die Funktion ist deshalb tolerant geschrieben, aber ungetestet.

## 7. Etsy-Angebot
Digitales Produkt mit einem PDF zum Download (Etsy verlangt eine Datei). Inhalt des PDFs:
- Link zum Konfigurator
- «Gib deine Etsy-Bestellnummer ein (steht in deiner Bestellbestätigung unter Bestellungen). Du kannst damit N Konfigurationen exportieren.»
- Druckhinweise (P1S, AMS, ohne Stützen) und Lizenz (nur persönliche Nutzung, kein Weiterverkauf der Dateien)

## 8. Rechtliches (kurz)
Gespeichert werden Bestellnummer, Anzahl Exporte und für den Missbrauchsschutz kurzzeitig die IP-Adresse. Das gehört in eine kurze Datenschutzerklärung und ein Impressum. Etsy-Regeln zu digitalen Produkten und externen Links bitte selbst nochmals lesen.

## Grenzen (ehrlich)
- Die Dateien werden weiter im Browser des Käufers berechnet. Die Prüfung stoppt normales Weitergeben, aber wer den Programmcode ändert, kann sie umgehen. Echten Schutz gäbe erst Berechnung auf einem Server («Stufe 2»), das ist ein späterer Umbau.
- Ungetestet gegen echtes Supabase und echtes Etsy: die Server-Funktionen. Getestet ist nur der Konfigurator-Teil mit einem simulierten Server.
- Die Bestellnummer ist keine geheime Zahl. Schutz bieten Versuchsbegrenzung (10 pro 15 Min. und IP) und die Exportzählung.


## Etsy-Verbindung (damit der Server sieht, WAS gekauft wurde)
Etsy meldet bei einer bezahlten Bestellung nur die Bestellnummer. Die gekauften Artikel holt der Server über die Etsy-API – dafür braucht er einmalig deine Erlaubnis (nur Lesen von Bestellungen).

1. **App-Schlüssel holen:** etsy.com/developers/your-apps → App «modunest-studio» → dort stehen **Keystring** und **Shared Secret** (Auge-Symbol zum Anzeigen). Nicht in einen Chat kopieren.
2. **Rücksprung-Adresse eintragen:** In den App-Einstellungen bei Etsy die Callback-/Redirect-Adresse hinzufügen:
   `https://sfoscpgsumukhihkdutw.supabase.co/functions/v1/modunest/etsy-callback`
   (Falls es dieses Feld nicht gibt: weiter mit 3. – meldet der Admin danach «Etsy hat die Verbindung abgelehnt», fehlt genau dieser Eintrag.)
3. **Secrets in Supabase:** Dashboard → Edge Functions → Secrets → zwei neue Einträge:
   `ETSY_KEYSTRING` = Keystring, `ETSY_SHARED_SECRET` = Shared Secret. Speichern.
4. **Verbinden:** Admin öffnen (https://mikesch15.github.io/ModuNest-Studio/admin/) → Abschnitt «Etsy-Verbindung» → «Mit Etsy verbinden» → bei Etsy anmelden und **Zugriff erlauben** → du landest wieder im Admin mit «✓ Etsy ist verbunden».
5. **Angebote eintragen:** Abschnitt «Konfigurator-Angebote».

Die Verbindung erneuert sich bei jedem Öffnen des Admins (spätestens alle 90 Tage einmal öffnen). Bestellungen, die vor der Verbindung kamen, im Admin mit «Bei Etsy abrufen» nachholen.
