# ModuNest Studio – Projektübersicht für Claude Code

Besitzer: Mike (Schweiz, spricht Deutsch). **Antworten auf Deutsch, knapp, token-sparend, ehrlich über Ungetestetes.**

## Produkt
Offline-fähige **Einzeldatei-HTML-App** (kein Framework, keine Abhängigkeiten) zum Konfigurieren modularer Aufbewahrungsboxen. Käufer (Etsy) konfiguriert, exportiert STL (ZIP) oder mehrfarbiges 3MF für Bambu Studio (Drucker: Bambu Lab P1S + AMS, Bett 256 mm). Verkauf über Etsy, Zahlung nur dort. Alles muss **ohne Stützen** druckbar sein, wenn möglich ohne Zusatzmaterial (keine Magnete).

## Repo & Build
- Live: **https://mikesch15.github.io/ModuNest-Studio/** (GitHub Pages, Branch `main`, Ordner `/`). Mike will, dass Änderungen direkt auf `main` gehen.
- Erzeugte Dateien (nie von Hand ändern): `app/index.html` (Produktauswahl; bei nur 1 Produkt Weiterleitung), `app/<produkt>/index.html` (z. B. `app/modunest/`), `admin/index.html`, `app/manifest.webmanifest`, `admin/manifest.webmanifest`, `sw.js`, `icons/*`; `index.html` und `<produkt>/index.html` sind nur Weiterleitungen (alte Links).
- `config.js` (von Hand): Server-Einstellung `window.MN_CONFIG` (requireCode + API-URL), wird von Produktseiten (`../../config.js`) und Admin (`../config.js`) geladen. Ohne config.js: Testmodus.
```
cd quellcode && python3 assemble.py   # baut alles (braucht Pillow für die Icons); dist/<produkt>.html für Tests
```
- **Installierbar (PWA):** App-Kennung `id` absolut (`/ModuNest-Studio/app/modunest-studio` bzw. `/ModuNest-Studio/admin/modunest-admin`, Konstante `SITE` in assemble.py; am 21.10. neu vergeben, weil ein hängender Android-Installationseintrag zur alten Kennung blockierte; start_url direkt auf die Produktseite, solange nur 1 Produkt) – `./` wird gegen die Domain aufgelöst und kollidiert mit anderen Apps auf mikesch15.github.io. App-Bereiche (scope) dürfen sich nicht verschachteln (Android: «App konnte nicht geöffnet werden») → Konfigurator unter `app/`, Admin unter `admin/`. App-Symbole als RGBA-PNG (Paletten-PNG führten zu «Web-App konnte nicht installiert werden»), Symbol-Links mit `?v=`. Konfigurator (Manifest `app/manifest.webmanifest`, Scope `app/`) und Admin (eigenes Manifest in `admin/`, dunkles Icon) teilen sich `sw.js` (immer zuerst Netz, offline aus Zwischenspeicher; Version = Hash aller Ausgaben; fremde Domains wie Supabase nie gecacht).
- Admin-Zugang im Konfigurator: Knopf «Admin» im Kopf nur, wenn auf dem Gerät `mna-key` gespeichert ist; sonst 5× schnell aufs Logo tippen.
- Admin liegt öffentlich unter `admin/` (noindex). Unbedenklich: keine Geheimnisse, ohne ADMIN_KEY nutzlos. Server erlaubt für admin/* jede Origin, für Kunden-Aufrufe nur ALLOWED_ORIGIN. admin/add setzt die Kisten-Gesamtzahl (upsert), nur Ziffern ≥6.

## Struktur für mehrere Produkte (`quellcode/`)
- `kern/` – gemeinsam: `src_sign.html` (Kern-Slices: Marching Squares, extrude, zip, Renderer, `mk`, `weld`; nur bei Kernänderungen anfassen), `head.html` (HTML/CSS, Look «Art vom Hof»), `texte.js` (allg. Texte `L`, `lang`, `tr`/`trf`; Platzhalter `{U}`/`{UP}`/`{U1}` = Einheit des Produkts), `shell.js` (App-Rahmen: Karten, ⓘ, Sprache, Vorschau-Steuerung, `arrangePrint`, 3MF, Anleitung, SW-Registrierung), `gate.js` (Freischaltung, Warenkorb, Abrechnung), `start.html`, `admin.html`, `sw.js`, `fonts/`, `logo.webp` (klein, eingebettet), `logo-gross.webp` (Quelle für Icons).
- `produkte/<id>/` – `produkt.json` (id, name/text DE+EN, `dateien` = Reihenfolge der JS-Dateien), die JS-Dateien, optional `bild.webp` (Kachel auf der Startseite), `tests/`.
- **Vertrag Produkt → Kern** (in der letzten Produktdatei): globale `S` (Zustand mit view/hide/mode), `PRODUCT={id,name,file,store,unit:{one,n,many},build(res,tol)->{ok,err,parts,units},snap,applySnap,snapName,snapCount,snapInfo,onChange?,color?}`, Funktionen `ui()` (Karten bauen, `cartCard()` aufrufen), `present(reframe)`, `arrange(parts,mode)` (für 'print' → `arrangePrint`). `units` = je abgerechneter Einheit die Masse (Gratis-Korrektur ±5 mm). `store` = localStorage-Präfix (modunest: `mn` → `mn-state`, `mn-cart`). Texte mit `Object.assign(L,{...})`.
- **Neues Produkt:** Ordner `produkte/<id>/` nach Vorbild modunest anlegen, `produkt.json` + Dateien, bauen. Startseite zeigt dann automatisch die Auswahl, jede Produktseite einen ⌂-Knopf. Server: `consume` bekommt `product`; Guthaben (orders) gilt für alle Produkte, Gratis-Korrekturen nur innerhalb des Produkts (`exports.product`).

## ModuNest-Dateien (`produkte/modunest/`)
- `planner.js` – Planer: `planSolve` (Reihenpackung, Validierung, Kontaktflächen `ti` mit Nachbarhöhe, Schlüsselpositionen), `slotsFor`, `effPlan` (Einzelbox = Planer mit 1 Modul).
- `geo2.js` – Geometrie: `buildMod` (Box/Hoch/Schublade, Deckel plug/slide/hinge, Trennwände, Einsatz, Hohlkehle FR, Texturen, höhenabhängig scharfe Ecken `cornerHc`), `fillerParts` (Füllstücke), `buildPlan`.
- `geo.js` – Konstanten (FOOT, POCK, RK…), `keyShape` (Schmetterlings-Schlüssel), `lidTris`, `cellRects`, Passungstest. `buildAll` ist Legacy.
- `produkt.js` – Texte, Zustand `S`/`PL`, Oberfläche (`ui`, `buildPlanUI`, `renderMods`), `presentPlan`, `arrange`, `PRODUCT`.
- `tests/` – Playwright-Skripte; Chromium unter /opt/pw-browsers; Pfade anpassen: /home/claude/mn/dist/modunest-studio.html → quellcode/dist/modunest.html, playwright z. B. aus /opt/node22/lib/node_modules. p21 simuliert noch die alte Abrechnung. Wichtig: `p18.mjs` (Geometrie; Ausgabe beim Umbau 21.10. identisch), `p19.mjs` (Screenshots), `p11.mjs` (Planer, Verbinder-Ecken).
- `quellcode/backend/` – Supabase: `schema.sql`, Edge Functions `modunest` (redeem/consume/admin) und `etsy-webhook`, `ANLEITUNG.md`.

## Geometrie-Konventionen (wichtig)
- Eigenes Raster: Canvas → Marching Squares → Douglas-Peucker → Polygon-Triangulation. Aussenringe CCW, Löcher CW. Übereinandergestapelte Bänder (`extrude(ring,z0,z1)`) erzeugen mehrere Hüllen → `openEdges` zählt viel (bekannt, Bambu-Verhalten ungeprüft).
- `marching()` spiegelt y; in `buildMod` korrigiert `ringW` per `scale(1,-1)`. Danach gilt: Zeichenkoordinaten = Weltkoordinaten, Vorderseite = −y ('T'), hinten +y ('B'). Planer-y wächst nach hinten; vorderste Reihe y=0.
- Ecken c0..c3 = vorne-links, vorne-rechts, hinten-rechts, hinten-links. Radius pro Ecke und Höhe: scharf bis `cornerHc` (Höhe des niedrigeren Nachbarn), darüber rund.
- Verbinder: Schmetterlings-Schlüssel, von unten einsteckbar (Module beim Zusammenbau umgedreht); Taschen unten offen, oben geschlossen bei z=Lk+.3. Kein Halt gegen Herausfallen (offen).
- Schubladenbox (2.7): Gehäuse aufrecht, oben offen, Schienen mit 45°-Unterseite je Schublade (>1), separater Deckel (Nut/Feder, Druck mit Aussenseite unten, `pf`), Schubladen flach mit runder Front (Fingermulde mit 45°-Decke). Mind. 26 mm Fachhöhe pro Schublade bei >1.
- Hohlkehle Wand→Boden (2.8): `FR=min(2,wall-.6)`, 4 Stufen; Einsatz, Trennwände und unterste Schublade sind unten entsprechend angepasst.
- Teile haben `asm` (Funktionen für Montageansicht), optional `qty`, `pf` (Druckausrichtung).

## Bedienhilfe
Erstbesuch: Anleitung «So funktioniert's» (`#help`, localStorage `mn-help`), wieder öffnen mit «?» im Kopf. Jede Karte mit Text `L['i_'+Titelschlüssel]` bekommt automatisch einen ⓘ-Knopf (`addInfo` in kern/shell.js). Neue Karte → `i_<key>` in den Produkttexten ergänzen. Hinweis in der 3D-Ansicht (`.vhint`) verschwindet nach erster Berührung.

## Freischaltung / Etsy
Käufer gibt Etsy-**Bestellnummer** (oder Admin-Code) ein → Server prüft → Sitzungstoken → Abbuchung pro **Kiste** (Modul) beim Download. Korrekturen innerhalb 24 h gratis, wenn jede Kiste zu einer bezahlten passt (je Mass ±5 mm, Vergleich mit bezahlter Fassung; Tabelle `exports`). Webhook: nur Angebote aus Tabelle `listings` (Mike pflegt sie im Admin: Nummer, Bezeichnung, Produkt, Kisten/Stück, aktiv) zählen, Kisten = Σ Menge × credits; andere Shop-Artikel 0, Bestellung ohne Konfigurator-Artikel wird ignoriert. Fehlen die Artikel in der Etsy-Meldung oder ist `listings` leer → Bestellung mit `status='pruefen'` (credits 0, Einlösen gibt `pending`), Mike gibt im Admin frei (admin/add setzt status ok). `orders.items` speichert die Artikel. DEFAULT_CREDITS/LISTING_CREDITS werden nicht mehr benutzt. IP-Versuche werden per pg_cron nach 7 Tagen gelöscht. Etsy-App ist freigegeben; Webhook `order.paid` → `etsy-webhook`. Supabase-Projekt «ModuNest Studio» (ref `sfoscpgsumukhihkdutw`, eu-west-1): Tabellen `orders`, `attempts`, `exports`; Funktionen `modunest` und `etsy-webhook` (beide **verify_jwt=false**). Secrets setzt Mike selbst im Dashboard (TOKEN_SECRET, ADMIN_KEY, ALLOWED_ORIGIN=https://mikesch15.github.io, ETSY_WEBHOOK_SECRET). Tabellen zusätzlich: `listings`, `etsy_auth`. Andere Supabase-Projekte von Mike (Spengler-Digital, Tulpenweg-Sanierung) nie anfassen. Etsy-Webhook-Meldungen enthalten laut Quellen nur `event_type`, `resource_url`, `shop_id` → Artikel werden per Etsy-API geholt (`_shared/etsy.ts`, gemeinsam für beide Funktionen; Deploy mit Datei `../_shared/etsy.ts`): OAuth mit PKCE (Scopes transactions_r shops_r), Start `admin/etsy-start`, Rücksprung `modunest/etsy-callback`, Tokens in Tabelle `etsy_auth` (Refresh 90 Tage, wird bei `admin/etsy-status` = Öffnen des Admins erneuert), `admin/etsy-fetch` holt eine Bestellung nach. Header `x-api-key: KEYSTRING:SHARED_SECRET` (seit 18.01.2026 Pflicht). Secrets zusätzlich: ETSY_KEYSTRING, ETSY_SHARED_SECRET. Anleitung für Mike: `quellcode/backend/ANLEITUNG.md`. Etsy-Verbindung am 21.10. echt hergestellt (Shop ArtvomHof, shop_id 34300009; Token-Erneuerung funktioniert). **Offen:** Etsy-Testkauf (Webhook + Abruf der Artikel echt noch ungetestet), Konfigurator-Angebote in `listings` eintragen.

## Offene Punkte / Ideen
- Realer Druck- und Bambu-Studio-Test (3MF mit mehreren Hüllen, „offene Kanten“), Passung Verbinder/Schubladen/Deckel/Einsatz.
- Halt der Verbinder von unten (Rastung), Passungs-Teststück an neue Taschenform anpassen.
- Stufe 2 Schutz: Dateien serverseitig erzeugen (headless Chromium), öffentliche Vorschau grob.
- Etsy-PDF: `quellcode/etsy/anleitung_pdf.py` (fertig, ohne Platzhalter; Lizenz: kein Weiterverkauf). Datenschutz: `kern/datenschutz.html` → `app/datenschutz/`, verlinkt in allen Fussnoten. Impressum: `kern/impressum.html` → `app/impressum/` (Mike Ledermann, Art vom Hof, Papillonallee 7b, 3172 Niederwangen BE, artvomhof@gmail.com; keine UID, kein Telefon; Shop etsy.com/shop/ArtvomHof). Bestellungen werden per pg_cron nach 2 Jahren gelöscht. Etsy-Hinweis (Marke/API nicht zertifiziert) in allen Fussnoten.
- Fotos der gedruckten Teile für Etsy.
- Füllstück nur für Kreuz-/T-Stösse; Randkerben nicht gefüllt.
