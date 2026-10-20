# ModuNest Studio – Projektübersicht für Claude Code

Besitzer: Mike (Schweiz, spricht Deutsch). **Antworten auf Deutsch, knapp, token-sparend, ehrlich über Ungetestetes.**

## Produkt
Offline-fähige **Einzeldatei-HTML-App** (kein Framework, keine Abhängigkeiten) zum Konfigurieren modularer Aufbewahrungsboxen. Käufer (Etsy) konfiguriert, exportiert STL (ZIP) oder mehrfarbiges 3MF für Bambu Studio (Drucker: Bambu Lab P1S + AMS, Bett 256 mm). Verkauf über Etsy, Zahlung nur dort. Alles muss **ohne Stützen** druckbar sein, wenn möglich ohne Zusatzmaterial (keine Magnete).

## Repo & Build
- Live: **https://mikesch15.github.io/ModuNest-Studio/** (GitHub Pages, Branch `main`, Ordner `/`). Mike will, dass Änderungen direkt auf `main` gehen.
- `index.html` = fertige App (gebaut), `config.js` = Server-Einstellung (`window.MN_CONFIG`, requireCode + API-URL). Ohne config.js: Testmodus.
- Quellcode in `quellcode/`. `quellcode/backend/admin.html` und `dist/` sind absichtlich nicht im Repo (.gitignore).
```
cd quellcode && python3 assemble.py   # baut dist/modunest-studio.html UND ../index.html
```
Version 2.9 + Änderungen vom 20.10.2026 (Kisten-Abrechnung, Design «Art vom Hof», Anleitung/ⓘ-Erklärungen).
`src_sign.html` ist nur noch Quelle für Kern-Slices (Marching Squares, extrude/cap/walls, zip, Renderer, `mk`, `weld`); nicht direkt ändern, ausser Kern.

## Dateien
- `planner.js` – Planer: `planSolve` (Reihenpackung, Validierung, Kontaktflächen `ti` mit Nachbarhöhe, Schlüsselpositionen), `slotsFor`, `effPlan` (Einzelbox = Planer mit 1 Modul).
- `geo2.js` – Geometrie: `buildMod` (Box/Hoch/Schublade, Deckel plug/slide/hinge, Trennwände, Einsatz, Hohlkehle FR, Texturen, höhenabhängig scharfe Ecken `cornerHc`), `fillerParts` (Füllstücke), `buildPlan`.
- `geo.js` – Konstanten (FOOT, POCK, RK…), `keyShape` (Schmetterlings-Schlüssel), `lidTris`, `cellRects`, Passungstest. `buildAll` ist Legacy.
- `ui.js` – Texte `L` (DE/EN), Zustand `S`, Planer-Standard `PL`.
- `app.js` – Anordnung (`arrange`), Vorschau, UI-Karten, Export (STL/3MF), Ansicht-Schalter (`S.hide`).
- `gate.js` – Freischaltung gegen Server (`CONFIG.requireCode/api`), Warenkorb (`CART`, ZIP-Export).
- `head.html` – HTML/CSS (Look «Art vom Hof»: Tinte auf Papier, Schreibschrift `Script` = Dancing Script/OFL, runde Formen; Logo `logo.webp` (farbig, rund freigestellt) wird von assemble.py einmal als `LOGO` eingebettet) und `CONFIG` (aus config.js/`window.MN_CONFIG`, sonst Testmodus).
- `backend/` – Supabase: `schema.sql`, Edge Functions `modunest` (redeem/consume/admin) und `etsy-webhook`, `admin.html`, `ANLEITUNG.md`.
- `tests/` – Playwright-Skripte (p*.mjs, t*.mjs); nutzen Chromium unter /opt/pw-browsers; Pfade anpassen: /home/claude/mn/ → quellcode/, playwright z. B. aus /opt/node22/lib/node_modules. p21 simuliert noch die alte Abrechnung (n statt cfgs). Wichtige: `p18.mjs` (Geometrie-Bau/Teileliste/Volumen/offene Kanten), `p19.mjs` (Screenshots), `p21.mjs` (Gate/Warenkorb mit simuliertem Server), `p11.mjs` (Planer-Konfigurationen, Verbinder-Eckencheck).

## Geometrie-Konventionen (wichtig)
- Eigenes Raster: Canvas → Marching Squares → Douglas-Peucker → Polygon-Triangulation. Aussenringe CCW, Löcher CW. Übereinandergestapelte Bänder (`extrude(ring,z0,z1)`) erzeugen mehrere Hüllen → `openEdges` zählt viel (bekannt, Bambu-Verhalten ungeprüft).
- `marching()` spiegelt y; in `buildMod` korrigiert `ringW` per `scale(1,-1)`. Danach gilt: Zeichenkoordinaten = Weltkoordinaten, Vorderseite = −y ('T'), hinten +y ('B'). Planer-y wächst nach hinten; vorderste Reihe y=0.
- Ecken c0..c3 = vorne-links, vorne-rechts, hinten-rechts, hinten-links. Radius pro Ecke und Höhe: scharf bis `cornerHc` (Höhe des niedrigeren Nachbarn), darüber rund.
- Verbinder: Schmetterlings-Schlüssel, von unten einsteckbar (Module beim Zusammenbau umgedreht); Taschen unten offen, oben geschlossen bei z=Lk+.3. Kein Halt gegen Herausfallen (offen).
- Schubladenbox (2.7): Gehäuse aufrecht, oben offen, Schienen mit 45°-Unterseite je Schublade (>1), separater Deckel (Nut/Feder, Druck mit Aussenseite unten, `pf`), Schubladen flach mit runder Front (Fingermulde mit 45°-Decke). Mind. 26 mm Fachhöhe pro Schublade bei >1.
- Hohlkehle Wand→Boden (2.8): `FR=min(2,wall-.6)`, 4 Stufen; Einsatz, Trennwände und unterste Schublade sind unten entsprechend angepasst.
- Teile haben `asm` (Funktionen für Montageansicht), optional `qty`, `pf` (Druckausrichtung).

## Bedienhilfe
Erstbesuch: Anleitung «So funktioniert's» (`#help`, localStorage `mn-help`), wieder öffnen mit «?» im Kopf. Jede Karte mit Text `L['i_'+Titelschlüssel]` bekommt automatisch einen ⓘ-Knopf (`addInfo` in app.js). Neue Karte → `i_<key>` in ui.js ergänzen. Hinweis in der 3D-Ansicht (`.vhint`) verschwindet nach erster Berührung.

## Freischaltung / Etsy
Käufer gibt Etsy-**Bestellnummer** (oder Admin-Code) ein → Server prüft → Sitzungstoken → Abbuchung pro **Kiste** (Modul) beim Download. Korrekturen innerhalb 24 h gratis, wenn jede Kiste zu einer bezahlten passt (je Mass ±5 mm, Vergleich mit bezahlter Fassung; Tabelle `exports`). Webhook: Kisten = Menge × (LISTING_CREDITS[listing] oder DEFAULT_CREDITS). IP-Versuche werden per pg_cron nach 7 Tagen gelöscht. Live: https://mikesch15.github.io/ModuNest-Studio/ (Repo Mikesch15/ModuNest-Studio: index.html + config.js). Etsy-App ist freigegeben; Webhook `order.paid` → `etsy-webhook`. Supabase-Projekt «ModuNest Studio» (ref `sfoscpgsumukhihkdutw`, eu-west-1): Tabellen `orders`, `attempts`, `exports`; Funktionen `modunest` und `etsy-webhook` (beide **verify_jwt=false**). Secrets setzt Mike selbst im Dashboard (TOKEN_SECRET, ADMIN_KEY, ALLOWED_ORIGIN=https://mikesch15.github.io, DEFAULT_CREDITS=6, ETSY_WEBHOOK_SECRET). Andere Supabase-Projekte von Mike (Spengler-Digital, Tulpenweg-Sanierung) nie anfassen. **Offen:** Etsy-Testkauf (Payload-Format von Etsy unverifiziert, Funktion liest tolerant; danach Logs prüfen).

## Offene Punkte / Ideen
- Realer Druck- und Bambu-Studio-Test (3MF mit mehreren Hüllen, „offene Kanten“), Passung Verbinder/Schubladen/Deckel/Einsatz.
- Halt der Verbinder von unten (Rastung), Passungs-Teststück an neue Taschenform anpassen.
- Stufe 2 Schutz: Dateien serverseitig erzeugen (headless Chromium), öffentliche Vorschau grob.
- Etsy-Angebot: PDF mit Link + Anleitung + Lizenz (Entwurf existiert); Fotos der gedruckten Teile; Datenschutz/Impressum (Entwürfe, Mike füllt Platzhalter aus, dann als Seiten einbauen).
- Füllstück nur für Kreuz-/T-Stösse; Randkerben nicht gefüllt.
