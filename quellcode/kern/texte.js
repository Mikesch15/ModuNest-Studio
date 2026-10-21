/* ================= Kern: allgemeine Texte (DE/EN) =================
   Produkte ergaenzen/ueberschreiben L mit Object.assign(L,{...}).
   Platzhalter fuer die Einheit des Produkts (PRODUCT.unit): {U} = "Kiste(n)", {UP} = "Kisten", {U1} = "Kiste (Modul)". */
const L={
 help1:['Stelle oben dein Produkt zusammen.','Configure your product above.'],
 help2:['Die 3D-Vorschau zeigt jede Änderung sofort.','The 3D preview updates instantly.'],
 help3:['Unter «Herunterladen» holst du die Dateien. Dafür brauchst du die Bestellnummer deines Etsy-Kaufs.','Get your files under «Download». You need the order number of your Etsy purchase.'],
 help4:['Öffne die 3MF-Datei in Bambu Studio (oder die STL-Dateien in deinem Slicer).','Open the 3MF file in Bambu Studio (or the STL files in your slicer).'],
 helpTip:['Bei jedem Abschnitt erklärt dir das ⓘ, was die Einstellungen bewirken.','In every section, the ⓘ explains what the settings do.'],
 home:['Alle Produkte','All products'],
 privacy:['Datenschutz','Privacy policy'],
 etsyNote:['Der Begriff «Etsy» ist eine Marke von Etsy, Inc. Diese Anwendung nutzt die Etsy-API, ist aber nicht von Etsy, Inc. unterstützt oder zertifiziert.','The term “Etsy” is a trademark of Etsy, Inc. This application uses the Etsy API but is not endorsed or certified by Etsy, Inc.'],
 helpBtn:['Anleitung','Help'],
 helpT:['So funktioniert’s','How it works'],
 helpGo:['Los geht’s','Let’s go'],
 infoBtn:['Erklärung','Explanation'],
 viewHint:['Ziehen: drehen · Zoom: 2 Finger/Mausrad · Doppeltipp: zurück','Drag: rotate · Zoom: 2 fingers/wheel · Double-tap: reset'],
 gateHelp:['Die Bestellnummer findest du bei Etsy unter «Käufe» (Profil → Käufe und Bewertungen) oder in der Bestätigungs-E-Mail.','You find the order number on Etsy under «Purchases» (profile → Purchases and reviews) or in the confirmation e-mail.'],
 i_cart:['Ist der Warenkorb leer, lädt der Knopf die aktuelle Konfiguration herunter. Möchtest du mehrere verschiedene Konfigurationen, lege sie mit «+ Zum Warenkorb hinzufügen» ab und lade alle zusammen als ein ZIP herunter. Mit ↺ holst du eine Konfiguration zurück in den Editor.','If the cart is empty, the button downloads the current configuration. For several different configurations, add them with «+ Add to cart» and download them all as one ZIP. ↺ loads a configuration back into the editor.'],
 asm:['Zusammengebaut','Assembled'],
 print:['Druckanordnung','Print layout'],
 busy:['Berechne …','Computing …'],
 exporting:['Export wird berechnet …','Building export …'],
 gateT:['Freischalten','Unlock'],
 gateD:['Gib deine Etsy-Bestellnummer (oder deinen Code) ein, um Dateien herunterzuladen.','Enter your Etsy order number (or your code) to download files.'],
 gateB:['Freischalten','Unlock'],
 gatePending:['Deine Bestellung ist angekommen und wird noch kurz geprüft. Bitte versuche es später nochmal oder schreib mir über Etsy.','Your order has arrived and is still being checked. Please try again later or message me on Etsy.'],
 gateBad:['Nummer oder Code ungültig.','Invalid number or code.'],
 gateRate:['Zu viele Versuche. Bitte später erneut versuchen.','Too many attempts. Please try again later.'],
 gateNet:['Keine Verbindung zum Server.','Cannot reach the server.'],
 gateCfg:['Freischaltung ist nicht eingerichtet.','Unlock service is not configured.'],
 gateEmpty:['Nicht genug {UP} übrig für diese Bestellung.','Not enough {UP} left for this order.'],
 demoMode:['Testmodus: Export ist frei.','Test mode: export is free.'],
 notUnlocked:['Noch nicht freigeschaltet (Vorschau ist frei).','Not unlocked yet (preview is free).'],
 creditLeft:['Freigeschaltet: noch {0} {U}.','Unlocked: {0} {U} left.'],
 charged:['{0} {U} abgebucht.','{0} {U} charged.'],
 chargedFree:['{0} Konfiguration(en) gratis (Korrektur innerhalb 24 h).','{0} configuration(s) free (correction within 24 h).'],
 cart:['Herunterladen','Download'],
 cartHint:['Jede {U1} zählt 1. Korrekturen sind 24 h lang gratis: gleiche Anzahl, jedes Mass max. 5 mm anders, andere Einstellungen frei. Das ZIP enthält je Konfiguration eine 3MF-Datei (Bambu Studio) und einzelne STL-Dateien.','Each {U1} counts 1. Corrections are free for 24 h: same number, each dimension within 5 mm, other settings free. The ZIP contains one 3MF file (Bambu Studio) and separate STL files per configuration.'],
 cartName:['Name','Name'],
 cartDel:['Entfernen','Remove'],
 cartExpN:['⬇ Warenkorb herunterladen ({0} {U})','⬇ Download cart ({0} {U})'],
 cartExpOne:['⬇ Aktuelle Konfiguration herunterladen ({0} {U})','⬇ Download current configuration ({0} {U})'],
 addCart:['+ Zum Warenkorb hinzufügen','+ Add to cart'],
 cartExp:['Warenkorb herunterladen (ZIP)','Download cart (ZIP)'],
 cartEmpty:['Warenkorb ist leer.','Cart is empty.'],
 cartLoad:['Laden','Load'],
 i_colors:['Die Farben sind für die Vorschau und werden in der 3MF-Datei als Vorschlag für Bambu Studio mitgegeben. Die echte Farbe bestimmt dein Filament.','Colours are for the preview and are passed to Bambu Studio in the 3MF file as a suggestion. The real colour depends on your filament.'],
 i_vis:['Blendet Teile in der Vorschau aus, damit du hineinsehen kannst. Der Download enthält immer alle Teile.','Hides parts in the preview so you can look inside. The download always contains all parts.'],
 colors:['Farben (Vorschau & 3MF)','Colours (preview & 3MF)'],
 vis:['Ansicht: Teile ein-/ausblenden','View: show / hide parts']
};
let lang=(navigator.language||'de').toLowerCase().startsWith('de')?0:1;
try{const l=localStorage.getItem('mn-lang');if(l!==null)lang=+l}catch(e){}
const unitTxt=s=>{if(typeof PRODUCT==='undefined'||!PRODUCT.unit)return s;const u=PRODUCT.unit;return s.replace(/\{U1\}/g,u.one[lang]).replace(/\{UP\}/g,u.many[lang]).replace(/\{U\}/g,u.n[lang])};
const tr=k=>unitTxt((L[k]||[k,k])[lang]);
const trf=(k,...a)=>tr(k).replace(/\{(\d)\}/g,(_,i)=>a[i]);
