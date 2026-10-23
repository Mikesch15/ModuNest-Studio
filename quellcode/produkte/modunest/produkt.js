/* ================= ModuNest: Texte und Zustand ================= */
Object.assign(L,{ // Texte fuer ModuNest (Kisten)
 cartHint:['Jede {U1} zählt 1. Korrekturen sind 24 h lang gratis: gleiche Anzahl Kisten, jedes Mass max. 5 mm anders (Deckel, Trennwände usw. frei). Das ZIP enthält je eine 3MF-Datei (Bambu Studio) und einzelne STL-Dateien.','Each {U1} counts 1. Corrections are free for 24 h: same number of boxes, each dimension within 5 mm (lids, dividers etc. free). The ZIP contains one 3MF file (Bambu Studio) and separate STL files per configuration.'],
help1:['Wähle zu Beginn «Schublade» (mehrere Kisten, die zusammen einen Platz füllen) oder «Einzelbox». Oben führen dich drei Schritte bis zum Download.','Start by choosing «Drawer» (several boxes that fill a space together) or «Single box». Three steps at the top guide you to the download.'],
help2:['Gib die Masse in Millimetern ein und passe Fächer, Deckel und Aussehen an. Die 3D-Vorschau zeigt jede Änderung sofort.','Enter the size in millimetres and adjust compartments, lids and look. The 3D preview updates instantly.'],
help3:['Unter «Herunterladen» holst du die Dateien. Dafür brauchst du die Bestellnummer deines Etsy-Kaufs. Jede Kiste zählt 1.','Get your files under «Download». You need the order number of your Etsy purchase. Each box counts 1.'],
help4:['Öffne die 3MF-Datei in Bambu Studio (oder die STL-Dateien in deinem Slicer) und drucke ohne Stützen.','Open the 3MF file in Bambu Studio (or the STL files in your slicer) and print without supports.'],
 helpTip:['Tipp: Drucke zuerst das kleine Passungs-Teststück (ganz unten). Bei jedem Abschnitt erklärt dir das ⓘ, was die Einstellungen bewirken.','Tip: print the small fit test piece first (at the bottom). In every section, the ⓘ explains what the settings do.'],
 i_mode:['Einzelbox: eine einzelne Kiste, innen in Fächer aufgeteilt. Planer: mehrere Kisten, die zusammen einen vorhandenen Platz füllen (z. B. eine Schublade oder ein Regalfach). Sie werden mit kleinen Verbindern zusammengehalten.','Single box: one box, divided into compartments. Planner: several boxes that together fill an existing space (e.g. a drawer or shelf). They are held together with small connectors.'],
 i_space:['Einzelbox: die Aussenmasse der Kiste. Planer: der Platz, der gefüllt werden soll – miss z. B. das Innenmass deiner Schublade und ziehe 1–2 mm Luft ab. «Platz ausfüllen» streckt die Kisten, bis kein Spalt bleibt.','Single box: the outer size of the box. Planner: the space to fill – e.g. measure the inside of your drawer and subtract 1–2 mm. «Fill the space» stretches the boxes so no gap is left.'],
 i_plmods:['Art: normale Box, hoher Behälter oder Schubladenbox. Spalten/Reihen: feste Fächer. Trennwände: herausnehmbare Wände (nur ohne Fächer). Deckel: Steck-, Schiebe- oder Klappdeckel. Einsatz-Tablett: flache Schale, die oben in der Box liegt. Die Beschriftung erscheint auf dem Steckdeckel. Im Planer fügst du mit den Knöpfen weitere Kisten hinzu.','Type: normal box, tall container or drawer box. Columns/rows: fixed compartments. Dividers: removable walls (only without compartments). Lid: plug-in, sliding or hinged. Insert tray: a shallow tray resting in the top of the box. The label appears on the plug-in lid. In the planner, add more boxes with the buttons.'],
 i_plset:['Wandstärke: dicker = stabiler, braucht mehr Filament. Eckenradius: wie rund die Ecken sind. Stapelbar: Fuss und Rand, damit Kisten sicher aufeinander stehen. Scharfe Ecken an Nähten: keine Ritzen zwischen Nachbarkisten. Füllstücke: kleine Teile für Lücken, wo mehrere Ecken zusammenkommen. Zusammenbau: Kisten umgedreht nebeneinander legen und die Verbinder von oben in die Taschen an den Nähten drücken – die schmale Spitze zuerst – bis er bündig ist. Er hält durch die Passung. Oberfläche: Muster auf den freien Aussenseiten.','Wall thickness: thicker = sturdier, uses more filament. Corner radius: how round the corners are. Stackable: foot and rim so boxes sit securely on top of each other. Sharp corners at seams: no gaps between neighbouring boxes. Fillers: small parts for gaps where several corners meet. Assembly: place the boxes upside down side by side and press the connectors into the pockets at the seams – narrow tip first – until it sits flush. The fit holds it in place. Surface: pattern on the free outer sides.'],
 i_plmsg:['Hier prüft die App, ob alles passt und druckbar ist. Rote Meldungen musst du beheben (z. B. Masse ändern), sonst ist der Download gesperrt.','The app checks here whether everything fits and is printable. Red messages must be fixed (e.g. change sizes), otherwise downloading is blocked.'],
 i_fit:['Jeder Drucker druckt etwas anders. Das Teststück zeigt, welches Spiel bei dir passt; die gewählte Nummer gilt dann für Verbinder, Deckel und Schubladen.','Every printer prints slightly differently. The test piece shows which clearance suits yours; the chosen number then applies to connectors, lids and drawers.'],
 tag:['Dein Ordnungssystem. Deine Masse. Dein Druck.','Your storage system. Your size. Your print.'],
 dims:['Aussenmasse','Outer size'],width:['Breite','Width'],depth:['Tiefe','Depth'],height:['Höhe','Height'],wall:['Wandstärke','Wall thickness'],corners:['Eckenradius','Corner radius'],
 layout:['Innenaufteilung','Compartments'],cols:['Spalten','Columns'],rows:['Reihen','Rows'],layoutHint:['Bei aktivem Einsatz-Tablett gilt die Aufteilung für den Einsatz.','With the insert tray enabled, this layout applies to the tray.'],
 modules:['Module','Modules'],stack:['Stapelbar (Fuss + Steckrand)','Stackable (foot + rim)'],conn:['Seitliche Verbinder (Schmetterling-Schlüssel)','Side connectors (butterfly keys)'],lid:['Deckel','Lid'],
 tray:['Einsatz-Tablett (herausnehmbar)','Removable insert tray'],trayH:['Einsatzhöhe','Insert height'],label:['Deckel-Beschriftung (optional)','Lid label (optional)'],
 cBox:['Box','Box'],cLid:['Deckel','Lid'],cTray:['Einsatz','Insert'],cKey:['Verbinder / Füllstücke','Connectors / fillers'],
 fit:['Passung testen','Test the fit'],fitText:['1. Teststück drucken. 2. Den Schlüssel in jede Nut schieben. 3. Die Nummer wählen, bei der der Schlüssel mit etwas Druck hineingeht und nicht wackelt.','1. Print the test piece. 2. Slide the key into each slot. 3. Pick the number where the key goes in with a little pressure and does not wobble.'],
 fitDl:['Teststück herunterladen (STL)','Download test piece (STL)'],fitPick:['Gewählte Passung (1 stramm … 5 locker)','Chosen fit (1 tight … 5 loose)'],
 sVol:['Innenvolumen','Inner volume'],sCell:['Fach (innen)','Compartment'],sMat:['Filament max.','Filament max.'],sParts:['Teile','Parts'],sKeys:['Verbinder','Connectors'],
 b3mf:['3MF exportieren','Export 3MF'],bstl:['STL (ZIP)','STL (ZIP)'],
 warnBed:['Die Teile passen nicht auf das 256-mm-Druckbett des P1S.','The parts do not fit the 256 mm bed of the P1S.'],
 warnCell:['Sehr kleines Fach (unter 15 mm).','Very small compartment (under 15 mm).'],
 warnTray:['Hinweis: Box hat nur ein grosses Fach, die Aufteilung gilt für den Einsatz.','Note: the box has one large compartment; the layout applies to the insert.'],
 mode:['Modus','Mode'],mSingle:['Einzelbox','Single box'],mPlan:['Schublade (Planer)','Drawer (planner)'],space:['Platz / Aussenmasse','Space / outer size'],fill:['Platz ausfüllen (Module strecken)','Fill the space (stretch modules)'],plmods:['Modul(e)','Module(s)'],randFill:['🎲 Zufällig füllen','🎲 Random fill'],randQ:['Alle Kisten durch eine neue, zufällige Aufteilung ersetzen? (Mit ↶ rückgängig machen)','Replace all boxes with a new random layout? (Undo with ↶)'],add_box:['+ Box','+ Box'],add_tall:['+ Hoher Behälter','+ Tall container'],add_drawer:['+ Schublade','+ Drawer'],plset:['Bauweise','Construction'],plmsg:['Prüfung','Check'],
 mW:['Breite','Width'],mD:['Tiefe','Depth'],mH:['Höhe','Height'],divN:['Trennwände','Dividers'],lidPlug:['Deckel','Lid'],typeSel:['Art','Type'],lidSel:['Deckel','Lid'],filler:['Füllstücke für eingeschlossene Ecken (optional)','Filler pieces for enclosed corners (optional)'],sharpSeam:['Ecken an Nähten scharf bis zur Nachbarhöhe (kein Schmutz in den Fugen)','Sharp corners at seams up to the neighbour height (no dirt in the gaps)'],_old:['Ecken an Nähten scharf (kein Schmutz in den Fugen)','Sharp corners at seams (no dirt in the gaps)'],sbtype:['Art der Box','Box type'],tBox:['Box mit Fächern','Box with compartments'],tDrawer:['Schubladenbox','Drawer box'],nDrawers:['Schubladen','Drawers'],nDr:['Schubladen übereinander','Drawers stacked'],iDrw:['{0}: zu niedrig für mehr Schubladen, es sind {1}.','{0}: too low for more drawers; using {1}.'],tex:['Oberfläche (freie Aussenseiten)','Surface (free outer sides)'],tx_none:['glatt','smooth'],tx_ribs:['Rillen','Ribs'],tx_waves:['Wellen','Waves'],tx_facets:['Facetten','Facets'],lid_none:['ohne Deckel','no lid'],lid_plug:['Steckdeckel','Plug lid'],lid_slide:['Schiebedeckel','Sliding lid'],lid_hinge:['Klappdeckel','Hinged lid'],iPin:['{0}: Scharnierstift mitdrucken oder ein Stück 1,75-mm-Filament ({1} mm) einfädeln.','{0}: print the hinge pin or thread a piece of 1.75 mm filament ({1} mm).'],eDrawer:['Schubladen müssen in der vordersten Reihe liegen (Vorderseite frei). Verkleinere die Schubladen oder vergrössere die Breite.','Drawers must sit in the front row (front side free). Make the drawers narrower or the space wider.'],drawerBtn:['+ Schublade','+ Drawer'],iPlates:['Dieser Plan braucht ca. {0} Druckplatten. In Bambu Studio die Teile mit «Anordnen» auf Platten verteilen.','This plan needs about {0} build plates. In Bambu Studio use “Arrange” to spread the parts.'],eLidH:['{0}: für diesen Deckel ist die Höhe zu klein (mind. 35 mm). → Erhöhe die Kiste oder wähle einen anderen Deckel.','{0}: too low for this lid (min. 35 mm). → Make the box taller or choose another lid.'],iSlide:['{0}: Schiebedeckel braucht eine freie Vorderseite (unten im Plan), sonst lässt er sich nicht herausziehen.','{0}: the sliding lid needs a free front side, otherwise it cannot be pulled out.'],iHinge:['{0}: Klappdeckel braucht oben freien Platz zum Aufklappen.','{0}: the hinged lid needs free space above to swing open.'],del:['Entfernen','Remove'],t_box:['Box','Box'],t_tall:['Hoher Behälter','Tall container'],t_drawer:['Schublade','Drawer'],sMods:['Module','Modules'],
 eEmpty:['Füge mindestens ein Modul hinzu.','Add at least one module.'],eTall:['{0}: Höhe {1} mm ist grösser als der Platz ({2} mm). → Verringere die Höhe der Kiste oder erhöhe die Platzhöhe.','{0}: height {1} mm exceeds the space ({2} mm). → Reduce the box height or increase the space height.'],eSmall:['{0}: zu klein (mind. {1}×{2}×{3} mm). → Vergrössere die Kiste.','{0}: too small (min. {1}×{2}×{3} mm). → Make the box larger.'],eBig:['{0} passt nicht in den Platz. → Verkleinere die Kiste oder vergrössere den Platz.','{0} does not fit the space. → Make the box smaller or the space larger.'],eArea:['Die Module brauchen {0} cm² Grundfläche, verfügbar sind {1} cm². → Entferne oder verkleinere Kisten oder vergrössere den Platz.','The modules need {0} cm² of floor area; only {1} cm² available. → Remove or shrink boxes, or enlarge the space.'],eNoFit:['Die Module lassen sich nicht überlappungsfrei anordnen. Verkleinere ein Modul oder vergrössere den Platz.','The modules cannot be arranged without overlap. Shrink a module or enlarge the space.'],iFree:['{0} cm² bleiben frei. „Platz ausfüllen“ streckt die Module.','{0} cm² stay free. “Fill the space” stretches the modules.'],iShort:['{0} und {1} berühren sich nur kurz, dort gibt es keine Steckverbindung.','{0} and {1} touch only briefly; no connector there.'],okFit:['Alles passt: {0} Module, {1} Verbinder.','Everything fits: {0} modules, {1} connectors.'],
 cartMods:['Plan, {0} Kisten','Plan, {0} boxes'],cartOne:['Einzelbox','Single box'],
 tplT:['Oder starte mit einer Vorlage:','Or start from a template:'],tp_besteck:['Besteckschublade','Cutlery drawer'],tp_gewuerz:['Gewürzschublade','Spice drawer'],tp_bastel:['Bastelkiste','Craft box'],tp_desk:['Schreibtisch','Desk drawer'],
 grip:['Griffmulde vorne (zum Herausheben)','Finger notch at the front (to lift out)'],scoop:['Schaufel-Front innen (Kleinteile leicht greifen)','Scoop front inside (easy to grab small parts)'],flabel:['Beschriftung vorne (graviert, optional)','Front label (engraved, optional)'],
 stretched:['«Platz ausfüllen» streckt diese Kiste auf {0} × {1} mm.','«Fill the space» stretches this box to {0} × {1} mm.'],
 cartShort:['Jede Kiste zählt 1. Kleine Korrekturen sind 24 h gratis (Details im ⓘ). Tipp: zuerst das Passungs-Teststück drucken.','Each box counts 1. Small corrections are free for 24 h (details in ⓘ). Tip: print the fit test piece first.'],
 statLine:['{0} Kisten · ≈ {1} g Filament','{0} boxes · ≈ {1} g filament'],statOne:['1 Box · ≈ {0} g Filament','1 box · ≈ {0} g filament'],
 topTs:['Draufsicht (vorne unten) – Kiste antippen zum Bearbeiten','Top view (front at bottom) – tap a box to edit'],
 topT:['Draufsicht (vorne unten) – antippen zum Bearbeiten, ziehen zum Verschieben','Top view (front at bottom) – tap to edit, drag to move'],
 eOverlap:['{0} und {1} überlappen. → Eine der Kisten verschieben oder verkleinern.','{0} and {1} overlap. → Move or shrink one of the boxes.'],
 eOut:['{0} ragt über den Platz hinaus. → Kiste verschieben oder verkleinern.','{0} sticks out of the space. → Move or shrink the box.'],
 autoArr:['Automatisch anordnen','Arrange automatically'],rotBtn:['↻ Ausgewählte Kiste drehen','↻ Rotate selected box'],manualOn:['Eigene Anordnung – Kisten rasten an Rand und Nachbarn ein (dort entstehen Verbinder).','Custom layout – boxes snap to edges and neighbours (connectors are placed there).'],
 perBox:['Filament pro Kiste (höchstens, bei voller Füllung):','Filament per box (maximum, at full infill):'],
 pickHint:['Tipp: Kiste in der 3D-Vorschau antippen, um sie zu bearbeiten.','Tip: tap a box in the 3D preview to edit it.'],
 startQ:['Was möchtest du organisieren?','What would you like to organise?'],startD:['Wähle, womit du beginnen möchtest. Du kannst später wechseln, ohne deine Werte zu verlieren.','Choose how to start. You can switch later without losing your values.'],
 pickPlan:['Schublade','Drawer'],pickPlanD:['Plane mehrere Boxen passend zu deiner Schublade oder deinem Regalfach.','Plan several boxes to fit your drawer or shelf.'],
 pickOne:['Einzelbox','Single box'],pickOneD:['Erstelle eine einzelne Box mit deinen Wunschmassen und deiner gewünschten Aufteilung.','Create a single box with your dimensions and compartments.'],
 step1:['1 Auswählen','1 Choose'],step2:['2 Konfigurieren','2 Configure'],step3:['3 Prüfen & exportieren','3 Check & export'],
 next:['Weiter →','Next →'],back:['← Zurück','← Back'],change:['Auswahl ändern','Change'],
 youPlan:['Du planst: {0}','You are planning: {0}'],
 spacePlan:['Innenmasse der Schublade / des Fachs','Inside size of the drawer / shelf'],spaceOne:['Aussenmasse der Box','Outer size of the box'],
 i_spacePlan:['Miss innen von Wand zu Wand (Breite und Tiefe) und die nutzbare Höhe bis zur Unterkante darüber. Ziehe 1–2 mm Luft ab, damit die Kisten nicht klemmen. «Platz ausfüllen» streckt die Kisten, bis kein Spalt bleibt.','Measure inside from wall to wall (width and depth) and the usable height. Subtract 1–2 mm so the boxes do not jam. «Fill the space» stretches the boxes so no gap is left.'],
 i_spaceOne:['Die Masse gelten aussen, inklusive Wand, Fuss und Rand. Die Fächer innen ergeben sich daraus.','The size is measured outside, including walls, foot and rim. The compartments inside follow from it.'],
 measureTip:['Tipp: innen messen, 1–2 mm Luft abziehen.','Tip: measure inside, subtract 1–2 mm.'],
 preset:['Fächer','Compartments'],pr_1:['keine','none'],pr_4:['4','4'],pr_6:['6','6'],pr_9:['9','9'],
 i_uiMode:['Einfach zeigt nur das Wichtigste. Experte zeigt zusätzlich Wandstärke, Ecken, Stapelbarkeit, Trennwände, Einsatz, Beschriftung, Oberfläche und Sichtbarkeit. Deine Werte bleiben beim Wechsel erhalten.','Simple shows only the essentials. Expert also shows wall thickness, corners, stacking, dividers, insert, label, surface and visibility. Your values are kept when switching.'],
 lvE:['Fehler','Error'],lvW:['Warnung','Warning'],lvI:['Hinweis','Note'],lvO:['OK','OK'],
 sumOne:['Einzelbox {0} × {1} × {2} mm (aussen)','Single box {0} × {1} × {2} mm (outside)'],sumPlan:['{0} Kisten · belegt {1} von {2} cm²','{0} boxes · {1} of {2} cm² used'],blocked:['Download gesperrt, bis die Fehler behoben sind.','Download blocked until the errors are fixed.'],
 expHint:['Das ZIP enthält eine 3MF-Datei für Bambu Studio (mit Farben) und alle Teile als STL-Dateien für andere Slicer.','The ZIP contains a 3MF file for Bambu Studio (with colours) and all parts as STL files for other slicers.'],
 cartExpOne:['⬇ Herunterladen: 3MF + STL ({0} {U})','⬇ Download: 3MF + STL ({0} {U})'],
 i_plmsg:['Hier prüft die App, ob alles passt und druckbar ist. Fehler (rot) musst du beheben, sonst ist der Download gesperrt. Warnungen solltest du prüfen, Hinweise sind nur Informationen.','The app checks whether everything fits and is printable. Errors (red) must be fixed, otherwise download is blocked. Check warnings; notes are information only.'],
});
const S={sharpSeam:true,filler:false,tex:'none',mode:'single',W:140,D:110,H:65,wall:2,cols:2,rows:2,r:6,stack:true,conn:true,lid:true,tray:false,trayH:22,label:'',fit:3,view:'asm',cBox:'#9cae94',cLid:'#d2b49f',cTray:'#c9a18b',cKey:'#c9825b'};
let FRESH=true;try{const st=localStorage.getItem('mn-state');FRESH=!st;Object.assign(S,JSON.parse(st||'{}'))}catch(e){}
// Bedienung (nur Oberflaeche, nicht Teil der Konfiguration): step 'start'|1|2|3, expert = alle Einstellungen sichtbar
if(FRESH)S.step='start';else if(!S.step)S.step=1;S.expert=!!S.expert;
S.mode=S.mode||'single';if(S.plan)PL=S.plan;else S.plan=PL;PL.one=PL.one||{type:'box',div:0,lid:'plug',cols:2,rows:2,tray:false,trayH:22,label:''};if(S.mode==='single'&&!PL.alt){PL.alt={W:PL.W,D:PL.D,H:PL.H};PL.W=140;PL.D=110;PL.H=65}
const FONTS={modern:'KFModern'};
const B=(w,d,h,o={})=>({type:'box',w,d,h,div:0,lid:'none',cols:1,rows:1,...o});
const TPL={besteck:{W:300,D:420,H:60,mods:[B(75,280,55),B(75,280,55),B(75,280,55),B(75,280,55),B(300,130,55,{cols:3})]},
 gewuerz:{W:400,D:450,H:90,mods:Array.from({length:12},()=>B(100,150,80))},
 bastel:{W:300,D:200,H:120,mods:[{...B(100,100,110),type:'tall'},{...B(100,100,110),type:'tall'},B(100,200,60,{rows:2}),B(100,100,60,{lid:'plug'}),B(100,100,60,{lid:'plug'})]},
 desk:{W:360,D:300,H:50,mods:[B(120,150,45,{cols:2,rows:2}),B(120,150,45),B(120,150,45,{cols:3}),B(60,150,45),B(60,150,45),B(120,150,45),B(120,150,45,{rows:2})]}};
function applyTpl(id){const t=TPL[id];if(S.mode!=='plan'){S.mode='plan';PRODUCT.onChange()}Object.assign(PL,{W:t.W,D:t.D,H:t.H,fill:true,manual:false});PL.mods=JSON.parse(JSON.stringify(t.mods));FRESH=false;S.step=2;lastDim=null;BASE=null;lastN=null;changed();buildUI()}
let SEL=null; // angetippte Kiste (Index im Plan)
// Plan: aendern sich Platz oder Kisten (Masse, Art, Anzahl), wird automatisch neu angeordnet; nur Verschieben/Drehen behaelt die eigene Anordnung
const layoutSig=()=>JSON.stringify([PL.W,PL.D,PL.H,PL.fill,(PL.mods||[]).map(m=>[m.type,m.w,m.d,m.h])]);let lastSig=null,MOVED=false,lastDim=S.mode==='plan'?[PL.W,PL.D,PL.H]:null,BASE=null,lastN=S.mode==='plan'?PL.mods.length:null;
// Zufaellige Aufteilung in Reihen (wie der Planer anordnet): Reihentiefen und Kistenbreiten je 45..150 mm, gelegentlich Faecher/Schaufel/Griffmulde/hoher Behaelter; nur gueltige Plaene
function randomFill(){const r5=v=>Math.round(v/5)*5,mn=45,mx=150,h=Math.max(20,PL.H-5);
 const parts=L=>{const n=Math.max(Math.ceil(L/mx),Math.min(Math.floor(L/mn),Math.ceil(L/mx)+Math.floor(Math.random()*3))),w=Array.from({length:n},()=>.6+Math.random());const sm=w.reduce((a,b)=>a+b,0);
  let o=w.map(v=>Math.max(mn,r5(v/sm*L)));o[o.length-1]=Math.max(mn,L-o.slice(0,-1).reduce((a,b)=>a+b,0));return o};
 for(let tries=0;tries<40;tries++){const out=[];
  for(const d of parts(PL.D))for(const w of parts(PL.W)){const m={type:'box',w,d,h,div:0,lid:'none',cols:1,rows:1};
   if(PL.H>=70&&w<=110&&d<=110&&Math.random()<.15)m.type='tall';else{const q=Math.random();if(w>=80&&q<.3)m.cols=2;else if(d>=80&&q<.5)m.rows=2;else if(q<.65)m.scoop=true;if(Math.random()<.15)m.grip=true}
   out.push(m)}
  if(planSolve({...PL,fill:true,manual:false,mods:out}).ok){Object.assign(PL,{fill:true,manual:false});PL.mods=out;break}}
 lastDim=null;BASE=null;lastN=null;SEL=null;FRESH=false;changed();buildUI()}
function selectMod(ix){SEL=ix;if(S.step!==2)goStep(2);renderMods();present(false);const r=document.querySelectorAll('#modlist .mrow')[S.mode==='single'?0:ix];if(r)r.scrollIntoView({behavior:'smooth',block:'center'})}

/* ================= ModuNest: Oberflaeche, Vorschau, Anordnung ================= */
function arrange(parts,mode){
 if(mode==='asm'&&(S.mode==='plan'||(parts[0]&&parts[0].asm)))return parts.flatMap(p=>p.asm.map(f=>({...p,tris:xf(p.tris,f)})));
 if(mode==='asm'){const fl=S.stack?FOOT:0;
  const ys=dvY(S.D);
  return parts.flatMap(p=>p.key==='cKey'?ys.flatMap(y=>built.info.kz.zs.map(zz=>({...p,tris:xf(p.tris,(x,yy,z)=>[x+S.W/2,yy+y,z])}))):[p]).map(p=>p.key==='cLid'?{...p,tris:xf(p.tris,(x,y,z)=>[x,-y,-z+S.H+LT+10])}:p.key==='cTray'?{...p,tris:xf(p.tris,(x,y,z)=>[x,y,z+fl+S.wall+.1])}:p)}
 return arrangePrint(parts)}
// Im Admin gesperrte Optionen (featOn) aus dem Zustand raeumen und nicht anbieten
function cleanFeat(){if(!featOn('plan'))S.mode='single';if(!featOn('tex'))S.tex='none';
 for(const m of [PL.one,...PL.mods]){if(!m)continue;if((m.type==='drawer'&&!featOn('drawer'))||(m.type==='tall'&&!featOn('tall')))m.type='box';if((m.lid==='slide'&&!featOn('slide'))||(m.lid==='hinge'&&!featOn('hinge')))m.lid='none'}}
// Karte einem Schritt zuordnen (data-st, mehrere mit Leerzeichen) und optional nur im Expertenmodus zeigen (xp)
const tag=(c,st,xp)=>{c.dataset.st=st;if(xp)c.classList.add('xp');return c};
function goStep(n){S.step=n;uiState();save();if(built)present(false);document.querySelectorAll('.steps button').forEach(b=>b.classList.toggle('on',+b.dataset.n===n));panel.scrollTop=0;try{window.scrollTo({top:panel.offsetTop-8,behavior:'smooth'})}catch(e){}}
function uiState(){panel.dataset.step=S.step;panel.dataset.expert=S.expert?'1':'0'}
function ui(){cleanFeat();if(S.step==='start'&&!featOn('plan')){S.mode='single';S.step=1}uiState();
 // Startbildschirm: Schublade oder Einzelbox (setzt nur S.mode; Masse je Modus bleiben ueber onChange erhalten)
 if(S.step==='start'){const c=card('startQ');c.classList.add('startc');para(c,'startD');const g=document.createElement('div');g.className='picks';
  [['plan','pickPlan','pickPlanD','▦'],['single','pickOne','pickOneD','▢']].forEach(([md,t,d,ic])=>{const b=document.createElement('button');b.className='pick'+(S.mode===md&&!FRESH?' on':'');
   b.innerHTML=`<i>${ic}</i><b data-k="${t}"></b><span data-k="${d}"></span>`;b.onclick=()=>{FRESH=false;S.step=1;const same=S.mode===md;S.mode=md;changed();if(same)buildUI()};g.append(b)});c.append(g);
  if(featOn('plan')){para(c,'tplT');const tg=document.createElement('div');tg.className='tpls';Object.keys(TPL).forEach(id=>{const b=document.createElement('button');b.className='mini';b.dataset.k='tp_'+id;b.onclick=()=>applyTpl(id);tg.append(b)});c.append(tg)}return}
 const bar=document.createElement('div');bar.className='uibar';const st=document.createElement('div');st.className='steps';
 [1,2,3].forEach(n=>{const b=document.createElement('button');b.dataset.k='step'+n;b.dataset.n=n;b.classList.toggle('on',S.step===n);b.onclick=()=>goStep(n);st.append(b)});
 const md=document.createElement('div');md.className='seg uimode';[[false,'mEasy'],[true,'mExpert']].forEach(([v,k])=>{const b=document.createElement('button');b.dataset.k=k;b.classList.toggle('on',S.expert===v);
  b.onclick=()=>{S.expert=v;md.querySelectorAll('button').forEach((x,i)=>x.classList.toggle('on',i===(v?1:0)));uiState();save();if(built)present(false)};md.append(b)});
 const ib=document.createElement('button');ib.className='ib';ib.textContent='i';const ip=document.createElement('p');ip.className='info';ip.dataset.k='i_uiMode';ip.hidden=true;ib.onclick=()=>{ip.hidden=!ip.hidden;ib.classList.toggle('on',!ip.hidden)};
 const sl=document.createElement('p');sl.id='statline';sl.className='statline';bar.append(st,md,ib,ip,sl);panel.append(bar);
 let c=tag(card('mode'),'1');const yp=document.createElement('div');yp.className='youplan';const ys=document.createElement('span');ys.textContent=trf('youPlan',tr(S.mode==='plan'?'pickPlan':'pickOne'));yp.append(ys);
 if(featOn('plan')){const cb=document.createElement('button');cb.className='mini';cb.dataset.k='change';cb.onclick=()=>{S.step='start';save();buildUI()};yp.append(cb)}c.append(yp);
 buildPlanUI();
 c=card('colors');const cc=document.createElement('div');cc.className='colors';
 ['cBox','cLid','cTray','cKey'].forEach(k=>{const l=document.createElement('label'),s=document.createElement('span');s.dataset.k=k;const i=document.createElement('input');i.type='color';i.value=S[k];i.oninput=()=>{S[k]=i.value;draw();save()};l.append(s,i);cc.append(l)});c.append(cc);tag(c,'2',1);
 c=tag(cartCard(),'3');const cartEl=c;para(c,'expHint');c.querySelectorAll('[data-k=addCart],[data-k=shareBtn],[data-k=cartHint]').forEach(e=>e.classList.add('xp'));{const p=document.createElement('p');p.dataset.k='cartShort';p.className='sp';c.querySelector('[data-k=cartHint]').after(p)}
 c=card('vis');tag(c,'2',1);const vv=document.createElement('div');vv.className='colors';S.hide=S.hide||{};
 ['cBox','cLid','cTray','cKey'].forEach(k=>{const l=document.createElement('label'),s=document.createElement('span');s.dataset.k=k;const i=document.createElement('input');i.type='checkbox';i.checked=!S.hide[k];i.onchange=()=>{S.hide[k]=!i.checked;present(false);save()};l.append(i,s);vv.append(l)});c.append(vv);
 c=card('fit');tag(c,'3');cartEl.before(c);para(c,'fitText');btn(c,'fitDl',downloadFit);seg(c,'fit','fitPick',[[1,'1'],[2,'2'],[3,'3'],[4,'4'],[5,'5']]);
 // Schritt-Navigation unten
 [[1,null,2],[2,1,3],[3,2,null]].forEach(([n,b,f])=>{const d=document.createElement('div');d.className='stepnav';d.dataset.st=String(n);
  for(const[t,k]of[[b,'back'],[f,'next']])if(t){const x=document.createElement('button');x.className='btn'+(k==='next'?' pri':'');x.dataset.k=k;x.onclick=()=>goStep(t);d.append(x)}panel.append(d)})}
function present(reframe){if(!built)return;if(true){presentPlan(reframe);return}document.getElementById('plmsgs').innerHTML='';const arr=arrange(built.parts,S.view);setMeshes(arr.map(p=>({...p,tris:clean(p.tris),hl:SEL!=null&&p.mod===SEL})));if(reframe){frame(arr);draw()}
 document.querySelectorAll('.vt button').forEach(b=>b.classList.toggle('on',b.dataset.v===S.view));
 const i=built.info,mass=built.parts.reduce((s,p)=>s+Math.abs(volume(p.tris)),0)/1000*1.24,span=arrange(built.parts,'print').span;
 const f1=v=>v.toFixed(1);
 document.getElementById('stats').innerHTML=[[tr('sVol'),f1(i.vol)+' L'],[tr('sCell'),`${i.cells}× ${Math.round(i.cw)}×${Math.round(i.ch)}`],[tr('sMat'),'≈ '+Math.round(mass)+' g'],[tr('sParts'),built.parts.reduce((s,p)=>s+(p.qty||1),0)]].map(a=>`<div class="stat"><span>${a[0]}</span><strong>${a[1]}</strong></div>`).join('');
 let w='';if(span[0]>256||span[1]>256||S.H>256)w+=tr('warnBed')+' ';if(Math.min(i.cw,i.ch)<15)w+=tr('warnCell')+' ';if(S.tray)w+=tr('warnTray');
 status.innerHTML=`${S.W} × ${S.D} × ${S.H} mm`+(w?`<br><b>${w}</b>`:'')}
async function downloadFit(){const t=await fitTestTris(9,.02);const all=Float32Array.from([...t[0],...t[1]]);download(new Blob([stlOf(all)],{type:'model/stl'}),'ModuNest-Passungstest.stl')}
function presentPlan(reframe){const sol=built.sol,arr0=sol.ok?arrange(built.parts,S.view):[],arr=arr0.filter(p=>!(S.hide&&S.hide[p.key])&&!(S.step===2&&S.view==='asm'&&p.key==='cLid'));
 setMeshes(arr.map(p=>({...p,tris:clean(p.tris),hl:SEL!=null&&p.mod===SEL})));if(reframe&&arr.length){frame(arr)}draw();
 document.querySelectorAll('.vt button').forEach(b=>b.classList.toggle('on',b.dataset.v===S.view));
 const msgs=sol.msgs.slice();if(sol.ok)msgs.push(['okFit',sol.items.length,built.info.keys]);
 const WARN=['iSlide','iHinge','iShort','iDrw','iPlates'],lv=k=>k[0]==='e'?'e':k[0]==='o'?'o':WARN.includes(k)?'w':'i';
 const pm=document.getElementById('plmsgs');if(pm)pm.innerHTML=msgs.map(m=>{const l=lv(m[0]);return`<li class="${l}"><b>${tr('lv'+l.toUpperCase())}:</b> ${trf(...m)}</li>`}).join('');
 topView(sol);perBox(sol);const ps=document.getElementById('plsum');if(ps)ps.innerHTML=!sol.ok?'<b>'+tr('blocked')+'</b>':S.mode==='single'?trf('sumOne',PL.W,PL.D,PL.H):trf('sumPlan',sol.items.length,Math.round(sol.items.reduce((a,it)=>a+it.w*it.d,0)/100),Math.round(PL.W*PL.D/100));
 const i=built.info,mass=sol.ok?built.parts.reduce((s,p)=>s+Math.abs(volume(p.tris))*(p.qty||1),0)/1000*1.24:0,span=sol.ok?arrange(built.parts,'print').span:[0,0];
 document.getElementById('stats').innerHTML=sol.ok?[[tr('sVol'),i.vol.toFixed(1)+' L'],[tr('sMods'),sol.items.length],[tr('sMat'),'≈ '+Math.round(mass)+' g'],[tr('sParts'),built.parts.reduce((s,p)=>s+(p.qty||1),0)]].map(a=>`<div class="stat"><span>${a[0]}</span><strong>${a[1]}</strong></div>`).join(''):'';
 let wmsg='';if(sol.ok){let big=false,fa=0;built.parts.forEach(p=>{const q=bbox(p.tris);const w=q.b[0]-q.a[0],d=q.b[1]-q.a[1];if(Math.min(w,d)>250||Math.max(w,d)>256&&Math.min(w,d)>256||q.b[2]>256)big=true;fa+=(w+8)*(d+8)*(p.qty||1)});
  if(big)wmsg=tr('warnBed');else if(fa>.75*246*246)wmsg=trf('iPlates',Math.ceil(fa/(.75*246*246)))}
 status.innerHTML=`${PL.W} × ${PL.D} × ${PL.H} mm`+(wmsg?(wmsg===tr('warnBed')?`<br><b>${wmsg}</b>`:`<br><span class="note">${wmsg}</span>`):'');{const l=document.getElementById('statline');if(l)l.textContent=sol.ok?(S.mode==='single'?trf('statOne',Math.round(mass)):trf('statLine',sol.items.length,Math.round(mass))):''}
 renderCart()}
function numIn(m,k,mn,mx){const i=document.createElement('input');i.type='number';i.min=mn;i.max=mx;i.step=5;i.value=m[k];i.onchange=()=>{m[k]=Math.max(mn,Math.min(mx,+i.value||mn));i.value=m[k];changed()};return i}
function mkSel(m,key,lk,vals,lab){const l=document.createElement('label'),s=document.createElement('span'),sel=document.createElement('select');s.textContent=tr(lk);vals.forEach(v=>{const op=document.createElement('option');op.value=v;op.textContent=lab?tr(lab+v):v;sel.append(op)});sel.value=m[key]??vals[0];sel.onchange=()=>{m[key]=typeof vals[0]==='number'?+sel.value:sel.value;changed()};l.append(s,sel);return l}
function renderMods(){const list=document.getElementById('modlist');list.innerHTML='';const single=S.mode==='single',ms=single?[PL.one]:PL.mods;
 ms.forEach((m,ix)=>{const row=document.createElement('div');row.className='mrow'+(SEL===ix&&!single?' sel':'');
  const h=document.createElement('div');h.className='mh';const b=document.createElement('b');b.textContent=tr('t_'+m.type)+(single?'':' '+(ix+1));const x=document.createElement('button');x.textContent='✕';x.title=tr('del');x.onclick=()=>{PL.mods.splice(ix,1);renderMods();changed()};h.append(b,x);row.append(h);
  if(single){const o=document.createElement('div');o.className='mo';o.append(mkSel(m,'type','typeSel',['box','drawer'].filter(featOn),'t_'));const sl=o.querySelector('select');sl.onchange=()=>{m.type=sl.value;renderMods();changed()};row.append(o)}
  const g=document.createElement('div');g.className='mg';
  [['w','mW',20,PL.W],['d','mD',20,PL.D],['h','mH',15,PL.H]].forEach(([k,lk,mn,mx])=>{const l=document.createElement('label'),sp=document.createElement('span');sp.textContent=tr(lk);l.append(sp,numIn(m,k,mn,Math.max(mx,mn)));g.append(l)});
  row.append(g);if(!single&&PL.fill&&built&&built.sol&&built.sol.ok){const it=built.sol.items.find(t=>t.i===ix);if(it&&(Math.abs(it.w-(it.rot?m.d:m.w))>.5||Math.abs(it.d-(it.rot?m.w:m.d))>.5)){const n=document.createElement('p');n.className='note';n.textContent=trf('stretched',Math.round(it.w),Math.round(it.d));row.append(n)}}
  const o=document.createElement('div');o.className='mo';
  if(m.type==='drawer')o.append(mkSel(m,'nd','nDr',[1,2,3,4]));
  else{// Fach-Vorlagen: setzen nur Spalten/Reihen, danach frei anpassbar
   const pr=document.createElement('div');pr.className='presets';const ps=document.createElement('span');ps.textContent=tr('preset');pr.append(ps);
   [[1,1,'pr_1'],[2,2,'pr_4'],[3,2,'pr_6'],[3,3,'pr_9']].forEach(([cc,rr,k])=>{const b=document.createElement('button');b.className='mini'+((m.cols||1)===cc&&(m.rows||1)===rr?' on':'');b.textContent=tr(k);b.onclick=()=>{m.cols=cc;m.rows=rr;renderMods();changed()};pr.append(b)});row.append(pr);
   const dv=mkSel(m,'div','divN',[0,1,2,3]);dv.classList.add('xp');
   const sc=mkSel(m,'cols','cols',[1,2,3,4]),sr=mkSel(m,'rows','rows',[1,2,3,4]);sc.classList.add('xp');sr.classList.add('xp');o.append(sc,sr,dv,mkSel(m,'lid','lidSel',['none','plug','slide','hinge'].filter(featOn),'lid_'));
   const l3=document.createElement('label');l3.className='chk';const c3=document.createElement('input');c3.type='checkbox';c3.checked=!!m.tray;c3.onchange=()=>{m.tray=c3.checked;renderMods();changed()};const s3=document.createElement('span');s3.textContent=tr('tray');l3.append(c3,s3);o.append(l3);
   // Einsatzhoehe (die Geometrie begrenzt sie auf die Boxtiefe)
   if(m.tray){if(m.trayH==null)m.trayH=22;const l5=document.createElement('label'),s5=document.createElement('span');s5.textContent=tr('trayH')+' (mm)';l5.append(s5,numIn(m,"trayH",8,Math.max(10,(+m.h||PL.H||60)-5)));o.append(l5)}
   const l4=document.createElement('label'),s4=document.createElement('span'),i4=document.createElement('input');l4.className='xp';s4.textContent=tr('label');i4.type='text';i4.maxLength=40;i4.value=m.label||'';i4.oninput=()=>{m.label=i4.value;changed()};l4.append(s4,i4);o.append(l4);
   // Front-Merkmale (nicht mit Schiebe-/Klappdeckel): Griffmulde, Schaufel, Gravur vorne
   if(m.lid!=='slide'&&m.lid!=='hinge'){for(const[k,lk]of[['grip','grip'],['scoop','scoop']].filter(q=>q[0]!=='scoop'||!m.tray)){const l=document.createElement('label');l.className='chk';const c=document.createElement('input');c.type='checkbox';c.checked=!!m[k];c.onchange=()=>{m[k]=c.checked;changed()};const sp=document.createElement('span');sp.textContent=tr(lk);l.append(c,sp);o.append(l)}
    const l6=document.createElement('label'),s6=document.createElement('span'),i6=document.createElement('input');s6.textContent=tr('flabel');i6.type='text';i6.maxLength=30;i6.value=m.flabel||'';i6.oninput=()=>{m.flabel=i6.value;changed()};l6.append(s6,i6);o.append(l6)}}
  row.append(o);list.append(row)})}
function buildPlanUI(){let c=tag(card(S.mode==='plan'?'spacePlan':'spaceOne'),'1');c._t=PL;if(S.mode==='plan')para(c,'measureTip');
 rng(c,'W','width',50,600,5,'mm');rng(c,'D','depth',50,400,5,'mm');rng(c,'H','height',25,250,5,'mm');chk(c,'fill','fill');c.lastChild.classList.add('pfill');
 c=tag(card('plmods'),'2');const add=document.createElement('div');add.className='addrow';
 ['box','tall','drawer'].filter(featOn).forEach(ty=>{const b=document.createElement('button');b.className='btn';b.dataset.k='add_'+ty;b.onclick=()=>{const d=MODDEF[ty];PL.mods.push({type:ty,w:d.w,d:d.d,h:Math.min(d.h,PL.H),div:0,lid:'none'});if(PL.manual){const m=PL.mods[PL.mods.length-1];[m.px,m.py]=spotFor(m)}renderMods();changed()};add.append(b)});
 if(S.mode==='plan'){const b=document.createElement('button');b.className='btn';b.dataset.k='randFill';b.onclick=()=>{if(confirm(tr('randQ')))randomFill()};add.append(b)}
 const list=document.createElement('div');list.id='modlist';const tv=document.createElement('div');tv.id='topv';c.append(tv,add,list);
 c=tag(card('plset'),'2',1);seg(c,'wall','wall',[[1.6,'1.6 mm'],[2,'2.0 mm'],[2.4,'2.4 mm'],[3,'3.0 mm']]);rng(c,'r','corners',0,12,1,'mm');if(S.mode!=='plan')chk(c,'stack','stack');chk(c,'sharpSeam','sharpSeam');chk(c,'filler','filler');if(featOn('tex'))seg(c,'tex','tex',[['none','tx_none'],['ribs','tx_ribs'],['waves','tx_waves'],['facets','tx_facets']]);
 c=tag(card('plmsg'),'2 3');const sm=document.createElement('p');sm.id='plsum';sm.className='plsum';const pb=document.createElement('div');pb.id='perbox';pb.dataset.st='3';c.append(sm,pb);const ul=document.createElement('ul');ul.id='plmsgs';c.append(ul);renderMods()}
function topView(sol){const e=document.getElementById('topv');if(!e)return;if(S.mode!=='plan'||!sol.items.length&&!PL.manual){e.innerHTML='';return}
 const W=PL.W,D=PL.D,sw=Math.max(W,D)/150,its=sol.items.length?sol.items:PL.mods.map((m,i)=>m.px==null?null:{i,x:m.px,y:m.py,w:m.prot?m.d:m.w,d:m.prot?m.w:m.d,mod:m}).filter(Boolean);
 e.innerHTML=`<p class="note">${tr(S.expert?'topT':'topTs')}</p><svg viewBox="${-sw} ${-sw} ${W+2*sw} ${D+2*sw}" style="width:100%;max-height:300px;touch-action:none"><rect x="0" y="0" width="${W}" height="${D}" fill="none" stroke="currentColor" stroke-dasharray="${3*sw}" stroke-width="${sw}" opacity=".5"/>`+
  its.map(it=>`<g data-i="${it.i}" style="cursor:grab"><rect x="${it.x}" y="${D-it.y-it.d}" width="${it.w}" height="${it.d}" rx="${2*sw}" fill="${S.cBox}" fill-opacity="${SEL===it.i?1:.65}" stroke="${SEL===it.i?'#c46546':'#1e1a17'}" stroke-width="${(SEL===it.i?3:1)*sw}"/><text x="${it.x+it.w/2}" y="${D-it.y-it.d/2}" text-anchor="middle" dominant-baseline="middle" font-size="${Math.min(it.w,it.d)/4.2}" font-weight="700" style="pointer-events:none">${it.i+1}</text></g>`).join('')+'</svg>'+
  `<div class="acts">${SEL!=null&&S.expert?`<button class="mini" id="trot" data-k="rotBtn"></button>`:''}${PL.manual?`<button class="mini" id="tauto" data-k="autoArr"></button>`:''}</div>${PL.manual?`<p class="note" data-k="manualOn"></p>`:''}`;
 e.querySelectorAll('[data-k]').forEach(x=>x.textContent=tr(x.dataset.k));
 const svg=e.querySelector('svg');
 // Ziehen: beim ersten Verschieben werden die aktuellen Positionen aller Kisten uebernommen (eigene Anordnung)
 const freeze=()=>{if(PL.manual)return;sol.items.forEach(it=>{const m=PL.mods[it.i];m.px=it.x;m.py=it.y;m.prot=!!it.rot;m.w=it.rot?it.d:it.w;m.d=it.rot?it.w:it.d});PL.manual=true;lastSig=layoutSig();renderMods()}; // gestreckte Masse uebernehmen = was man sieht
 e.querySelectorAll('g[data-i]').forEach(g=>{const i=+g.dataset.i,r=g.querySelector('rect'),tx=g.querySelector('text');
  g.onpointerdown=ev=>{if(!S.expert){g.onpointerup=()=>{g.onpointerup=null;selectMod(i)};return}ev.preventDefault();g.setPointerCapture(ev.pointerId);const pt=q=>{const P=svg.createSVGPoint();P.x=q.clientX;P.y=q.clientY;return P.matrixTransform(svg.getScreenCTM().inverse())};
   const it=its.find(t=>t.i===i),p0=pt(ev),x0=it.x,y0=it.y;let moved=false,nx=x0,ny=y0;
   g.onpointermove=mv=>{const p=pt(mv),dx=p.x-p0.x,dy=-(p.y-p0.y);if(!moved&&Math.hypot(dx,dy)<3)return;moved=true;
    nx=Math.max(0,Math.min(W-it.w,x0+dx));ny=Math.max(0,Math.min(D-it.d,y0+dy));
    // einrasten an Rand und Nachbarn (6 mm), sonst auf ganze mm
    const sn=(v,c)=>{let b=Math.round(v),bd=6;for(const q of c)if(Math.abs(q-v)<bd){bd=Math.abs(q-v);b=q}return b};
    const o=its.filter(t=>t.i!==i);nx=sn(nx,[0,W-it.w,...o.flatMap(t=>[t.x+t.w,t.x-it.w,t.x])]);ny=sn(ny,[0,D-it.d,...o.flatMap(t=>[t.y+t.d,t.y-it.d,t.y])]);
    r.setAttribute('x',nx);r.setAttribute('y',D-ny-it.d);tx.setAttribute('x',nx+it.w/2);tx.setAttribute('y',D-ny-it.d/2)};
   g.onpointerup=()=>{g.onpointermove=g.onpointerup=null;if(!moved){selectMod(i);return}freeze();const m=PL.mods[i];m.px=nx;m.py=ny;SEL=i;MOVED=true;renderMods();changed()}}});
 const ro=e.querySelector('#trot');if(ro)ro.onclick=()=>{freeze();const m=PL.mods[SEL];if(!m)return;m.prot=!m.prot;const w=m.prot?m.d:m.w,d=m.prot?m.w:m.d;m.px=Math.min(m.px,PL.W-w);m.py=Math.min(m.py,PL.D-d);MOVED=true;changed()};
 const au=e.querySelector('#tauto');if(au)au.onclick=()=>{PL.manual=false;PL.mods.forEach(m=>{delete m.px;delete m.py;delete m.prot});changed()}}
// Neue Kiste in eigener Anordnung: erste freie Stelle (5-mm-Raster), sonst links vorne (Fehler zeigt Ueberlappung)
function spotFor(m){const os=PL.mods.filter(q=>q!==m&&q.px!=null).map(q=>({x:q.px,y:q.py,w:q.prot?q.d:q.w,d:q.prot?q.w:q.d}));
 for(let y=0;y+m.d<=PL.D;y+=5)for(let x=0;x+m.w<=PL.W;x+=5)if(!os.some(t=>x<t.x+t.w&&t.x<x+m.w&&y<t.y+t.d&&t.y<y+m.d))return[x,y];return[0,0]}
function perBox(sol){const e=document.getElementById('perbox');if(!e)return;if(!sol.ok){e.innerHTML='';return}
 e.innerHTML=`<p class="note">${tr('perBox')}</p><ul>`+sol.items.map(it=>{const g=built.parts.filter(p=>p.mod===it.i).reduce((a,p)=>a+Math.abs(volume(p.tris))*(p.qty||1),0)/1000*1.24;
  return`<li><b>${tr('t_'+it.mod.type)}${S.mode==='plan'?' '+(it.i+1):''}</b> · ${Math.round(it.w)}×${Math.round(it.d)}×${Math.round(it.h)} mm · ≈ ${Math.round(g)} g</li>`}).join('')+'</ul>'}
window.__mn={slotsFor,S,PL,buildPlan,planSolve,renderMods,buildAll,openEdges,get volume(){return volume},fitTestTris,arrange,get built(){return built}};

/* ================= ModuNest: Produktbeschreibung fuer den Kern ================= */
const SKEYS=['wall','r','stack','conn','sharpSeam','filler','tex','fit','mode','cBox','cLid','cTray','cKey'];
let lastMode=S.mode;
const PRODUCT={dimKeys:['cBox'],pick:ix=>selectMod(ix),onShared(){S.step=2;lastMode=S.mode},id:'modunest',name:'ModuNest',file:'ModuNest',store:'mn',
 unit:{one:['Kiste (Modul)','box (module)'],n:['Kiste(n)','box(es)'],many:['Kisten','boxes']},
 // Ergebnis fuer den Kern: ok/err, Teile und je Kiste die Masse [lang,kurz,hoch] (Abrechnung + Gratis-Korrektur)
 async build(res,tol){const r=await buildPlan(res,tol);r.ok=r.sol.ok;r.err=r.sol.msgs.map(m=>trf(...m)).join('; ');
  r.units=r.sol.ok?r.sol.items.map(it=>[Math.max(it.w,it.d),Math.min(it.w,it.d),it.h].map(v=>Math.round(v*10)/10)):[];return r},
 snap(){const o={};SKEYS.forEach(k=>o[k]=S[k]);return{S:o,PL:JSON.parse(JSON.stringify(PL))}},
 applySnap(s){Object.assign(S,s.S);lastMode=S.mode;lastDim=null;BASE=null;lastN=null;for(const k in PL)delete PL[k];Object.assign(PL,JSON.parse(JSON.stringify(s.PL)));if(S.mode==='plan'){lastDim=[PL.W,PL.D,PL.H];lastN=PL.mods.length}},
 snapName:s=>(s.S.mode==='plan'?'Plan':'Box')+' '+s.PL.W+'x'+s.PL.D+'x'+s.PL.H,
 snapCount:s=>s.S.mode==='plan'?(s.PL.mods||[]).length:1,
 snapInfo:s=>(s.S.mode==='plan'?trf('cartMods',(s.PL.mods||[]).length):tr('cartOne'))+' · '+s.PL.W+' × '+s.PL.D+' × '+s.PL.H+' mm',
 // Wechsel Einzelbox <-> Planer: Masse getrennt merken
 onChange(){uiState();let dimCh=false;/* Platz geaendert: Kisten im gleichen Verhaeltnis mitskalieren (immer von BASE aus, sonst Rundungsdrift beim Regler) */if(S.mode==='plan'&&S.mode===lastMode&&lastDim){const sz=()=>JSON.stringify(PL.mods.map(m=>[m.w,m.d,m.h]));if(BASE&&BASE.set!==sz())BASE=null;if(lastDim.join()!==[PL.W,PL.D,PL.H].join()){if(!BASE){const so=typeof built!=='undefined'&&built&&built.sol;BASE={dim:lastDim,m:JSON.parse(JSON.stringify(PL.mods)),it:so&&so.ok&&so.items.length===PL.mods.length?so.items.map(t=>({i:t.i,x:t.x,y:t.y,w:t.w,d:t.d})):null}}
  /* Anordnung als Ganzes skalieren; zu schmale Kisten mit dem Nachbarn zusammenlegen (beim Vergroessern kommen sie zurueck) */
  const[oW,oD,oH]=BASE.dim,fx=PL.W/oW,fy=PL.D/oD,fz=PL.H/oH,mn=m=>(MODDEF[m.type]||MODDEF.box).min,cp=o=>{const m=JSON.parse(JSON.stringify(o));delete m.px;delete m.py;delete m.prot;m.h=Math.max(15,Math.min(PL.H,Math.round(o.h*fz)));return m};let ms;
  if(BASE.it){let R=BASE.it.map(t=>{const x=Math.round(t.x*fx),y=Math.round(t.y*fy);return{m:cp(BASE.m[t.i]),x,y,w:Math.round((t.x+t.w)*fx)-x,d:Math.round((t.y+t.d)*fy)-y}});
   const sm=r=>Math.min(r.w,r.d)<Math.min(mn(r.m)[0],mn(r.m)[1]);
   for(;;){const bad=R.filter(sm).sort((a,b)=>a.w*a.d-b.w*b.d)[0];if(!bad||R.length<2)break;
    const nb=R.filter(r=>r!==bad&&((r.y===bad.y&&r.d===bad.d&&(r.x+r.w===bad.x||bad.x+bad.w===r.x))||(r.x===bad.x&&r.w===bad.w&&(r.y+r.d===bad.y||bad.y+bad.d===r.y)))).sort((a,b)=>a.w*a.d-b.w*b.d)[0];
    R.splice(R.indexOf(bad),1);if(nb){const x=Math.min(nb.x,bad.x),y=Math.min(nb.y,bad.y);nb.w=Math.max(nb.x+nb.w,bad.x+bad.w)-x;nb.d=Math.max(nb.y+nb.d,bad.y+bad.d)-y;nb.x=x;nb.y=y}}
   ms=R.map(r=>Object.assign(r.m,{w:r.w,d:r.d}));if(!planSolve({...PL,manual:false,mods:ms}).ok){PL.manual=true;MOVED=true;R.forEach(r=>{r.m.px=r.x;r.m.py=r.y;r.m.prot=false})}}
  else ms=BASE.m.map(o=>{const m=cp(o),r=o.prot;m.w=Math.max(20,Math.floor(o.w*(r?fy:fx)));m.d=Math.max(20,Math.floor(o.d*(r?fx:fy)));return m});
  PL.mods=ms;SEL=null;BASE.set=sz();dimCh=true}}else BASE=null;
  /* Kiste dazu/weg: alle Kisten so anpassen, dass sie den Platz wieder fuellen (bei Bedarf gleichmaessig verkleinern) */
  if(S.mode==='plan'&&S.mode===lastMode&&PL.mods.length&&((lastN!=null&&PL.mods.length!==lastN)||(dimCh&&!planSolve(PL).ok))){const mn=m=>(MODDEF[m.type]||MODDEF.box).min,sc=f=>PL.mods.map(o=>{const m=JSON.parse(JSON.stringify(o)),r=o.prot;delete m.px;delete m.py;delete m.prot;const w=r?o.d:o.w,d=r?o.w:o.d;m.w=Math.max(mn(o)[0],Math.floor(w*f));m.d=Math.max(mn(o)[1],Math.floor(d*f));return m}),tryF=f=>{const ms=sc(f),so=planSolve({...PL,fill:true,manual:false,mods:ms});return so.ok?{ms,so}:null};
   let r=tryF(1);if(!r){let lo=.15,hi=1;for(let k=0;k<12;k++){const f=(lo+hi)/2;if(tryF(f))lo=f;else hi=f}r=tryF(lo)}
   if(r){r.so.items.forEach(t=>{const m=r.ms[t.i];m.w=t.rot?t.d:t.w;m.d=t.rot?t.w:t.d});PL.manual=false;if(!planSolve({...PL,manual:false,mods:r.ms}).ok){PL.manual=true;MOVED=true;r.so.items.forEach(t=>{const m=r.ms[t.i];m.px=t.x;m.py=t.y;m.prot=!!t.rot})}PL.mods=r.ms;SEL=null;if(!PL.manual)MOVED=false;if(BASE)BASE.set=JSON.stringify(PL.mods.map(m=>[m.w,m.d,m.h]))}}
  lastN=S.mode==='plan'?PL.mods.length:null;{const sg=layoutSig();if(S.mode==='plan'&&PL.manual&&lastSig!==null&&sg!==lastSig&&!MOVED){PL.manual=false;PL.mods.forEach(m=>{delete m.px;delete m.py;delete m.prot})}MOVED=false;lastSig=layoutSig()}if(S.mode!==lastMode){lastMode=S.mode;const o=PL.alt||{W:140,D:110,H:65};PL.alt={W:PL.W,D:PL.D,H:PL.H};PL.W=o.W;PL.D=o.D;PL.H=o.H;buildUI();panel.dataset.mode=S.mode}lastDim=S.mode==='plan'?[PL.W,PL.D,PL.H]:null}};
