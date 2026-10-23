# ModuNest Studio – Kurzüberblick für Claude Code
Besitzer Mike (Schweiz). **Deutsch, knapp, token-sparend, ehrlich über Ungetestetes.** Änderungen direkt auf `main` pushen.
Details/Geschichte: `quellcode/NOTIZEN.md` – **nur gezielt** lesen (grep), nicht ganz.

## Token sparen (verbindlich)
- Prüfen: `node quellcode/tools/check.mjs` (baut, testet beide Produkte + Admin, vergleicht Geometrie mit `tools/baseline.txt`, gibt nur Abweichungen aus). Nach gewollter Geometrie-Änderung `--update`. Bild: `… check.mjs shot <modunest|namenspuzzle|admin> ['{"S":{…}}']` → /tmp/mn-shot.png. Keine eigenen Test-Skripte neu schreiben.
- Server-Funktionen **nicht** per MCP mit ganzem Dateiinhalt deployen: pushen genügt, GitHub Action `supabase-deploy.yml` veröffentlicht `modunest` + `etsy-webhook` (Secret SUPABASE_ACCESS_TOKEN). Nur falls die Action fehlschlägt, per MCP.
- Dateien mit langen Zeilen nie ganz lesen: `grep -n`, dann `sed -n` mit `cut -c1-300`. Erzeugte Dateien (`app/`, `admin/index.html`, `sw.js`, `icons/`, `index.html`, `<produkt>/index.html`, `dist/`) nie lesen/ändern.
- Antworten an Mike kurz; Bilder nur, wenn sie etwas zeigen.

## Build & Struktur
`cd quellcode && python3 assemble.py` (Pillow) → Seiten unter `app/<produkt>/`, `app/` (Auswahl), `admin/`, `sw.js`, `icons/`. Live: https://mikesch15.github.io/ModuNest-Studio/
- `kern/`: `src_sign.html` (Geometrie-Kern: marching, extrude, cap/walls, plateWithPocket, zip, 3MF, Renderer), `head.html` (CSS, CONFIG, SITE/featOn), `texte.js`, `shell.js` (Rahmen, Produkt-Freigabe), `gate.js` (Freischaltung, Warenkorb), `start.html`, `admin.html`, `datenschutz.html`, `impressum.html`, `sw.js`.
- `produkte/<id>/`: `produkt.json` (name, text, dateien, features), JS. Vertrag: globale `S`, `PRODUCT={id,name,file,store,unit,build(res,tol)->{ok,err,parts,units},snap…}`, `ui()`, `present()`, `arrange()`. Texte `Object.assign(L,{…})`, Karten-Info `i_<key>`.
- modunest-UI (22.10.): Startauswahl Schublade/Einzelbox (`S.step='start'` bei Erstbesuch), 3 Schritte (`S.step` 1–3, Karten mit `data-st`), Einfach/Experte (`S.expert`, Felder mit Klasse `xp` nur ausgeblendet), Fach-Vorlagen setzen cols/rows, Meldungen mit Stufe Fehler/Warnung/Hinweis. Nur Oberfläche; Geometrie/Planer/Export unverändert.
- Kern-Komfort (22.10.): Regler mit Zahlenfeld (`rng`), Rückgängig (`HIST`, Knopf ↶), Link teilen (`#c=` = PRODUCT.snap, `onShared`), Masse in der Vorschau (`#dims`, PRODUCT.dimKeys), Antippen (`PRODUCT.pick`, Teile mit `.mod`), Hinweis nach Download (`showNext`, Texte next1–3), Einfach/Experte für alle (`.xp`, `expertBar`). Renderer-Erweiterung per assemble-Replace (VIEW, hl, onDraw). ModuNest: Vorlagen `TPL`, Draufsicht, Schätzung pro Kiste (30 g/h). Eigene Anordnung: in der Draufsicht ziehen (einrasten 6 mm), `PL.manual` + je Kiste `px/py/prot` (übernimmt beim ersten Ziehen die gestreckten Masse); planSolve prüft dann nur (eOut, eOverlap, Schublade vorne), Verbinder wie gehabt aus Kontaktflächen; «Automatisch anordnen» löscht die Positionen.
- Front-Merkmale je Kiste (geo2 `fcAt`/`zfc`/`band`, nur Box/hoch ohne Schiebe-/Klappdeckel): `m.grip` Griffmulde (halbrund, oben offen), `m.scoop` Schaufel innen (Rampe Boden→Vorderwand, r≤25), `m.flabel` Gravur vorne (0.6 mm, 0.4-mm-Bänder → viele Dreiecke). Ohne Merkmale Geometrie unverändert.
- modunest: `planner.js` (planSolve), `geo2.js` (buildMod, buildPlan), `geo.js` (Konstanten, keyShape, keyTris (gerade, Spitze abgestuft), fitTestTris), `produkt.js` (UI). Optionen: plan, drawer, tall, slide, hinge, tex.
- Gemeinsam: `kern/figuren.js` (pzLetter, PZ_SHAPES 23 Figuren in 0..100 SVG-Koordinaten mit Gravur, pzShape, pzDeep Greifknopf, reliefBody, fitFont, pzText), `kern/puzzle.js` (Puzzle-Texte, buildPuzzle mit Figuren-Reihen S.perRow/S.maxShapes/S.Hs, buildPzTest, arrange/present). Einbinden per `dateien: ["../../kern/…"]`.
- namenspuzzle (Optionen figuren, gravur), hofpuzzle (nur Figuren, Titel-Gravur; Option gravur), schild (Platte+Relief als 1 Körper, Vorschau 2-farbig über `prev`, Farbwechsel-Hinweis; Optionen figur, script, formen), stecker (Set bis 12 Namen, je Stecker 1 Körper; Optionen symbol, script).
- Neue Produkte: `produkt.json` «standard»: "test" = Status, solange im Admin nichts gespeichert ist (kein Supabase nötig). Namenspuzzle in settings auf test; hofpuzzle/schild/stecker per standard test.
- Geometrie: Aussenringe CCW, Löcher CW; alles ohne Stützen druckbar; Bett 256 mm (Brett ≤ 250).

## Server (Supabase «ModuNest Studio», ref sfoscpgsumukhihkdutw – andere Projekte nie anfassen)
`quellcode/backend/supabase/`: `schema.sql`, functions `modunest` (redeem, left, config, consume, admin/*) und `etsy-webhook`, gemeinsam `_shared/etsy.ts`; beide verify_jwt=false. Tabellen orders (per/pused = Guthaben je Produkt, status ok|pruefen|gesperrt), exports, listings, settings (site: Produkt-Status live|test|aus + off-Optionen), etsy_auth, attempts. RPC consume_credits2. Secrets setzt Mike selbst; nie Secrets ausgeben. Etsy verbunden (Shop ArtvomHof); echter Testkauf 23.10. bestätigt (Webhook legt Bestellung an, Download verbraucht, Überzug verweigert).

## Offen
Reale Drucktests (Passung, Verbinder-Passung, Puzzle-Gravur), Etsy-Angebote einstellen + in `listings` eintragen, Namenspuzzle auf «live» wenn fertig.
