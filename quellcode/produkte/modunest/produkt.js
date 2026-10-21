/* ================= ModuNest: Texte und Zustand ================= */
Object.assign(L,{ // Texte fuer ModuNest (Kisten)
 cartHint:['Jede {U1} zählt 1. Korrekturen sind 24 h lang gratis: gleiche Anzahl Kisten, jedes Mass max. 5 mm anders (Deckel, Trennwände usw. frei). Das ZIP enthält je eine 3MF-Datei (Bambu Studio) und einzelne STL-Dateien.','Each {U1} counts 1. Corrections are free for 24 h: same number of boxes, each dimension within 5 mm (lids, dividers etc. free). The ZIP contains one 3MF file (Bambu Studio) and separate STL files per configuration.'],
help1:['Wähle oben «Einzelbox» (eine Kiste) oder «Planer» (mehrere Kisten, die zusammen einen Platz füllen, z. B. eine Schublade).','Choose «Single box» (one box) or «Planner» (several boxes that fill a space together, e.g. a drawer).'],
help2:['Gib die Masse in Millimetern ein und passe Fächer, Deckel und Aussehen an. Die 3D-Vorschau zeigt jede Änderung sofort.','Enter the size in millimetres and adjust compartments, lids and look. The 3D preview updates instantly.'],
help3:['Unter «Herunterladen» holst du die Dateien. Dafür brauchst du die Bestellnummer deines Etsy-Kaufs. Jede Kiste zählt 1.','Get your files under «Download». You need the order number of your Etsy purchase. Each box counts 1.'],
help4:['Öffne die 3MF-Datei in Bambu Studio (oder die STL-Dateien in deinem Slicer) und drucke ohne Stützen.','Open the 3MF file in Bambu Studio (or the STL files in your slicer) and print without supports.'],
 helpTip:['Tipp: Drucke zuerst das kleine Passungs-Teststück (ganz unten). Bei jedem Abschnitt erklärt dir das ⓘ, was die Einstellungen bewirken.','Tip: print the small fit test piece first (at the bottom). In every section, the ⓘ explains what the settings do.'],
 i_mode:['Einzelbox: eine einzelne Kiste, innen in Fächer aufgeteilt. Planer: mehrere Kisten, die zusammen einen vorhandenen Platz füllen (z. B. eine Schublade oder ein Regalfach). Sie werden mit kleinen Verbindern zusammengehalten.','Single box: one box, divided into compartments. Planner: several boxes that together fill an existing space (e.g. a drawer or shelf). They are held together with small connectors.'],
 i_space:['Einzelbox: die Aussenmasse der Kiste. Planer: der Platz, der gefüllt werden soll – miss z. B. das Innenmass deiner Schublade und ziehe 1–2 mm Luft ab. «Platz ausfüllen» streckt die Kisten, bis kein Spalt bleibt.','Single box: the outer size of the box. Planner: the space to fill – e.g. measure the inside of your drawer and subtract 1–2 mm. «Fill the space» stretches the boxes so no gap is left.'],
 i_plmods:['Art: normale Box, hoher Behälter oder Schubladenbox. Spalten/Reihen: feste Fächer. Trennwände: herausnehmbare Wände (nur ohne Fächer). Deckel: Steck-, Schiebe- oder Klappdeckel. Einsatz-Tablett: flache Schale, die oben in der Box liegt. Die Beschriftung erscheint auf dem Steckdeckel. Im Planer fügst du mit den Knöpfen weitere Kisten hinzu.','Type: normal box, tall container or drawer box. Columns/rows: fixed compartments. Dividers: removable walls (only without compartments). Lid: plug-in, sliding or hinged. Insert tray: a shallow tray resting in the top of the box. The label appears on the plug-in lid. In the planner, add more boxes with the buttons.'],
 i_plset:['Wandstärke: dicker = stabiler, braucht mehr Filament. Eckenradius: wie rund die Ecken sind. Stapelbar: Fuss und Rand, damit Kisten sicher aufeinander stehen. Scharfe Ecken an Nähten: keine Ritzen zwischen Nachbarkisten. Füllstücke: kleine Teile für Lücken, wo mehrere Ecken zusammenkommen. Oberfläche: Muster auf den freien Aussenseiten.','Wall thickness: thicker = sturdier, uses more filament. Corner radius: how round the corners are. Stackable: foot and rim so boxes sit securely on top of each other. Sharp corners at seams: no gaps between neighbouring boxes. Fillers: small parts for gaps where several corners meet. Surface: pattern on the free outer sides.'],
 i_plmsg:['Hier prüft die App, ob alles passt und druckbar ist. Rote Meldungen musst du beheben (z. B. Masse ändern), sonst ist der Download gesperrt.','The app checks here whether everything fits and is printable. Red messages must be fixed (e.g. change sizes), otherwise downloading is blocked.'],
 i_fit:['Jeder Drucker druckt etwas anders. Das Teststück zeigt, welches Spiel bei dir passt; die gewählte Nummer gilt dann für Verbinder, Deckel und Schubladen.','Every printer prints slightly differently. The test piece shows which clearance suits yours; the chosen number then applies to connectors, lids and drawers.'],
 tag:['Dein Ordnungssystem. Deine Masse. Dein Druck.','Your storage system. Your size. Your print.'],
 dims:['Aussenmasse','Outer size'],width:['Breite','Width'],depth:['Tiefe','Depth'],height:['Höhe','Height'],wall:['Wandstärke','Wall thickness'],corners:['Eckenradius','Corner radius'],
 layout:['Innenaufteilung','Compartments'],cols:['Spalten','Columns'],rows:['Reihen','Rows'],layoutHint:['Bei aktivem Einsatz-Tablett gilt die Aufteilung für den Einsatz.','With the insert tray enabled, this layout applies to the tray.'],
 modules:['Module','Modules'],stack:['Stapelbar (Fuss + Steckrand)','Stackable (foot + rim)'],conn:['Seitliche Verbinder (Schmetterling-Schlüssel)','Side connectors (butterfly keys)'],lid:['Deckel','Lid'],
 tray:['Einsatz-Tablett (herausnehmbar)','Removable insert tray'],trayH:['Einsatzhöhe','Insert height'],label:['Deckel-Beschriftung (optional)','Lid label (optional)'],
 cBox:['Box','Box'],cLid:['Deckel','Lid'],cTray:['Einsatz','Insert'],cKey:['Verbinder / Füllstücke','Connectors / fillers'],
 fit:['Passung testen','Test the fit'],fitText:['1. Teststück drucken. 2. Den Schlüssel in jede Nut schieben. 3. Die Nummer wählen, die leicht gleitet und nicht wackelt.','1. Print the test piece. 2. Slide the key into each slot. 3. Pick the number that slides easily without wobble.'],
 fitDl:['Teststück herunterladen (STL)','Download test piece (STL)'],fitPick:['Gewählte Passung (1 stramm … 5 locker)','Chosen fit (1 tight … 5 loose)'],
 sVol:['Innenvolumen','Inner volume'],sCell:['Fach (innen)','Compartment'],sMat:['Filament max.','Filament max.'],sParts:['Teile','Parts'],sKeys:['Verbinder','Connectors'],
 b3mf:['3MF exportieren','Export 3MF'],bstl:['STL (ZIP)','STL (ZIP)'],
 warnBed:['Die Teile passen nicht auf das 256-mm-Druckbett des P1S.','The parts do not fit the 256 mm bed of the P1S.'],
 warnCell:['Sehr kleines Fach (unter 15 mm).','Very small compartment (under 15 mm).'],
 warnTray:['Hinweis: Box hat nur ein grosses Fach, die Aufteilung gilt für den Einsatz.','Note: the box has one large compartment; the layout applies to the insert.'],
 mode:['Modus','Mode'],mSingle:['Einzelbox','Single box'],mPlan:['Planer','Planner'],space:['Platz / Aussenmasse','Space / outer size'],fill:['Platz ausfüllen (Module strecken)','Fill the space (stretch modules)'],plmods:['Modul(e)','Module(s)'],add_box:['+ Box','+ Box'],add_tall:['+ Hoher Behälter','+ Tall container'],add_drawer:['+ Schublade','+ Drawer'],plset:['Bauweise','Construction'],plmsg:['Prüfung','Check'],
 mW:['Breite','Width'],mD:['Tiefe','Depth'],mH:['Höhe','Height'],divN:['Trennwände','Dividers'],lidPlug:['Deckel','Lid'],typeSel:['Art','Type'],lidSel:['Deckel','Lid'],filler:['Füllstücke für eingeschlossene Ecken (optional)','Filler pieces for enclosed corners (optional)'],sharpSeam:['Ecken an Nähten scharf bis zur Nachbarhöhe (kein Schmutz in den Fugen)','Sharp corners at seams up to the neighbour height (no dirt in the gaps)'],_old:['Ecken an Nähten scharf (kein Schmutz in den Fugen)','Sharp corners at seams (no dirt in the gaps)'],sbtype:['Art der Box','Box type'],tBox:['Box mit Fächern','Box with compartments'],tDrawer:['Schubladenbox','Drawer box'],nDrawers:['Schubladen','Drawers'],nDr:['Schubladen übereinander','Drawers stacked'],iDrw:['{0}: zu niedrig für mehr Schubladen, es sind {1}.','{0}: too low for more drawers; using {1}.'],tex:['Oberfläche (freie Aussenseiten)','Surface (free outer sides)'],tx_none:['glatt','smooth'],tx_ribs:['Rillen','Ribs'],tx_waves:['Wellen','Waves'],tx_facets:['Facetten','Facets'],lid_none:['ohne Deckel','no lid'],lid_plug:['Steckdeckel','Plug lid'],lid_slide:['Schiebedeckel','Sliding lid'],lid_hinge:['Klappdeckel','Hinged lid'],iPin:['{0}: Scharnierstift mitdrucken oder ein Stück 1,75-mm-Filament ({1} mm) einfädeln.','{0}: print the hinge pin or thread a piece of 1.75 mm filament ({1} mm).'],eDrawer:['Schubladen müssen in der vordersten Reihe liegen (Vorderseite frei). Verkleinere die Schubladen oder vergrössere die Breite.','Drawers must sit in the front row (front side free). Make the drawers narrower or the space wider.'],drawerBtn:['+ Schublade','+ Drawer'],iPlates:['Dieser Plan braucht ca. {0} Druckplatten. In Bambu Studio die Teile mit «Anordnen» auf Platten verteilen.','This plan needs about {0} build plates. In Bambu Studio use “Arrange” to spread the parts.'],eLidH:['{0}: für diesen Deckel ist die Höhe zu klein (mind. 35 mm).','{0}: too low for this lid (min. 35 mm).'],iSlide:['{0}: Schiebedeckel braucht eine freie Vorderseite (unten im Plan), sonst lässt er sich nicht herausziehen.','{0}: the sliding lid needs a free front side, otherwise it cannot be pulled out.'],iHinge:['{0}: Klappdeckel braucht oben freien Platz zum Aufklappen.','{0}: the hinged lid needs free space above to swing open.'],del:['Entfernen','Remove'],t_box:['Box','Box'],t_tall:['Hoher Behälter','Tall container'],t_drawer:['Schublade','Drawer'],sMods:['Module','Modules'],
 eEmpty:['Füge mindestens ein Modul hinzu.','Add at least one module.'],eTall:['{0}: Höhe {1} mm ist grösser als der Platz ({2} mm).','{0}: height {1} mm exceeds the space ({2} mm).'],eSmall:['{0}: zu klein (mind. {1}×{2}×{3} mm).','{0}: too small (min. {1}×{2}×{3} mm).'],eBig:['{0} passt nicht in den Platz.','{0} does not fit the space.'],eArea:['Die Module brauchen {0} cm² Grundfläche, verfügbar sind {1} cm².','The modules need {0} cm² of floor area; only {1} cm² available.'],eNoFit:['Die Module lassen sich nicht überlappungsfrei anordnen. Verkleinere ein Modul oder vergrössere den Platz.','The modules cannot be arranged without overlap. Shrink a module or enlarge the space.'],iFree:['{0} cm² bleiben frei. „Platz ausfüllen“ streckt die Module.','{0} cm² stay free. “Fill the space” stretches the modules.'],iShort:['{0} und {1} berühren sich nur kurz, dort gibt es keine Steckverbindung.','{0} and {1} touch only briefly; no connector there.'],okFit:['Alles passt: {0} Module, {1} Verbinder.','Everything fits: {0} modules, {1} connectors.'],
 cartMods:['Plan, {0} Kisten','Plan, {0} boxes'],cartOne:['Einzelbox','Single box'],
});
const S={sharpSeam:true,filler:false,tex:'none',mode:'single',W:140,D:110,H:65,wall:2,cols:2,rows:2,r:6,stack:true,conn:true,lid:true,tray:false,trayH:22,label:'',fit:3,view:'asm',cBox:'#9cae94',cLid:'#d2b49f',cTray:'#c9a18b',cKey:'#c9825b'};
try{Object.assign(S,JSON.parse(localStorage.getItem('mn-state')||'{}'))}catch(e){}
S.mode=S.mode||'single';if(S.plan)PL=S.plan;else S.plan=PL;PL.one=PL.one||{type:'box',div:0,lid:'plug',cols:2,rows:2,tray:false,trayH:22,label:''};if(S.mode==='single'&&!PL.alt){PL.alt={W:PL.W,D:PL.D,H:PL.H};PL.W=140;PL.D=110;PL.H=65}
const FONTS={modern:'KFModern'};

/* ================= ModuNest: Oberflaeche, Vorschau, Anordnung ================= */
function arrange(parts,mode){
 if(mode==='asm'&&(S.mode==='plan'||(parts[0]&&parts[0].asm)))return parts.flatMap(p=>p.asm.map(f=>({...p,tris:xf(p.tris,f)})));
 if(mode==='asm'){const fl=S.stack?FOOT:0;
  const ys=dvY(S.D);
  return parts.flatMap(p=>p.key==='cKey'?ys.flatMap(y=>built.info.kz.zs.map(zz=>({...p,tris:xf(p.tris,(x,yy,z)=>[x+S.W/2,yy+y,z])}))):[p]).map(p=>p.key==='cLid'?{...p,tris:xf(p.tris,(x,y,z)=>[x,-y,-z+S.H+LT+10])}:p.key==='cTray'?{...p,tris:xf(p.tris,(x,y,z)=>[x,y,z+fl+S.wall+.1])}:p)}
 return arrangePrint(parts)}
function ui(){
 let c=card('mode');seg(c,'mode','',[['single','mSingle'],['plan','mPlan']]);
 buildPlanUI();
 c=card('colors');const cc=document.createElement('div');cc.className='colors';
 ['cBox','cLid','cTray','cKey'].forEach(k=>{const l=document.createElement('label'),s=document.createElement('span');s.dataset.k=k;const i=document.createElement('input');i.type='color';i.value=S[k];i.oninput=()=>{S[k]=i.value;draw();save()};l.append(s,i);cc.append(l)});c.append(cc);
 cartCard();
 c=card('vis');const vv=document.createElement('div');vv.className='colors';S.hide=S.hide||{};
 ['cBox','cLid','cTray','cKey'].forEach(k=>{const l=document.createElement('label'),s=document.createElement('span');s.dataset.k=k;const i=document.createElement('input');i.type='checkbox';i.checked=!S.hide[k];i.onchange=()=>{S.hide[k]=!i.checked;present(false);save()};l.append(i,s);vv.append(l)});c.append(vv);
 c=card('fit');para(c,'fitText');btn(c,'fitDl',downloadFit);seg(c,'fit','fitPick',[[1,'1'],[2,'2'],[3,'3'],[4,'4'],[5,'5']])}
function present(reframe){if(!built)return;if(true){presentPlan(reframe);return}document.getElementById('plmsgs').innerHTML='';const arr=arrange(built.parts,S.view);setMeshes(arr.map(p=>({...p,tris:clean(p.tris)})));if(reframe){frame(arr);draw()}
 document.querySelectorAll('.vt button').forEach(b=>b.classList.toggle('on',b.dataset.v===S.view));
 const i=built.info,mass=built.parts.reduce((s,p)=>s+Math.abs(volume(p.tris)),0)/1000*1.24,span=arrange(built.parts,'print').span;
 const f1=v=>v.toFixed(1);
 document.getElementById('stats').innerHTML=[[tr('sVol'),f1(i.vol)+' L'],[tr('sCell'),`${i.cells}× ${Math.round(i.cw)}×${Math.round(i.ch)}`],[tr('sMat'),'≈ '+Math.round(mass)+' g'],[tr('sParts'),built.parts.reduce((s,p)=>s+(p.qty||1),0)]].map(a=>`<div class="stat"><span>${a[0]}</span><strong>${a[1]}</strong></div>`).join('');
 let w='';if(span[0]>256||span[1]>256||S.H>256)w+=tr('warnBed')+' ';if(Math.min(i.cw,i.ch)<15)w+=tr('warnCell')+' ';if(S.tray)w+=tr('warnTray');
 status.innerHTML=`${S.W} × ${S.D} × ${S.H} mm`+(w?`<br><b>${w}</b>`:'')}
async function downloadFit(){const t=await fitTestTris(9,.02);const all=Float32Array.from([...t[0],...t[1]]);download(new Blob([stlOf(all)],{type:'model/stl'}),'ModuNest-Passungstest.stl')}
function presentPlan(reframe){const sol=built.sol,arr0=sol.ok?arrange(built.parts,S.view):[],arr=arr0.filter(p=>!(S.hide&&S.hide[p.key]));
 setMeshes(arr.map(p=>({...p,tris:clean(p.tris)})));if(reframe&&arr.length){frame(arr)}draw();
 document.querySelectorAll('.vt button').forEach(b=>b.classList.toggle('on',b.dataset.v===S.view));
 const msgs=sol.msgs.slice();if(sol.ok)msgs.push(['okFit',sol.items.length,built.info.keys]);
 document.getElementById('plmsgs').innerHTML=msgs.map(m=>`<li class="${m[0][0]}">${trf(...m)}</li>`).join('');
 const i=built.info,mass=sol.ok?built.parts.reduce((s,p)=>s+Math.abs(volume(p.tris))*(p.qty||1),0)/1000*1.24:0,span=sol.ok?arrange(built.parts,'print').span:[0,0];
 document.getElementById('stats').innerHTML=sol.ok?[[tr('sVol'),i.vol.toFixed(1)+' L'],[tr('sMods'),sol.items.length],[tr('sMat'),'≈ '+Math.round(mass)+' g'],[tr('sParts'),built.parts.reduce((s,p)=>s+(p.qty||1),0)]].map(a=>`<div class="stat"><span>${a[0]}</span><strong>${a[1]}</strong></div>`).join(''):'';
 let wmsg='';if(sol.ok){let big=false,fa=0;built.parts.forEach(p=>{const q=bbox(p.tris);const w=q.b[0]-q.a[0],d=q.b[1]-q.a[1];if(Math.min(w,d)>250||Math.max(w,d)>256&&Math.min(w,d)>256||q.b[2]>256)big=true;fa+=(w+8)*(d+8)*(p.qty||1)});
  if(big)wmsg=tr('warnBed');else if(fa>.75*246*246)wmsg=trf('iPlates',Math.ceil(fa/(.75*246*246)))}
 status.innerHTML=`${PL.W} × ${PL.D} × ${PL.H} mm`+(wmsg?`<br><b>${wmsg}</b>`:'');
 renderCart()}
function numIn(m,k,mn,mx){const i=document.createElement('input');i.type='number';i.min=mn;i.max=mx;i.step=5;i.value=m[k];i.onchange=()=>{m[k]=Math.max(mn,Math.min(mx,+i.value||mn));i.value=m[k];changed()};return i}
function mkSel(m,key,lk,vals,lab){const l=document.createElement('label'),s=document.createElement('span'),sel=document.createElement('select');s.textContent=tr(lk);vals.forEach(v=>{const op=document.createElement('option');op.value=v;op.textContent=lab?tr(lab+v):v;sel.append(op)});sel.value=m[key]??vals[0];sel.onchange=()=>{m[key]=typeof vals[0]==='number'?+sel.value:sel.value;changed()};l.append(s,sel);return l}
function renderMods(){const list=document.getElementById('modlist');list.innerHTML='';const single=S.mode==='single',ms=single?[PL.one]:PL.mods;
 ms.forEach((m,ix)=>{const row=document.createElement('div');row.className='mrow';
  const h=document.createElement('div');h.className='mh';const b=document.createElement('b');b.textContent=tr('t_'+m.type)+(single?'':' '+(ix+1));const x=document.createElement('button');x.textContent='✕';x.title=tr('del');x.onclick=()=>{PL.mods.splice(ix,1);renderMods();changed()};h.append(b,x);row.append(h);
  if(single){const o=document.createElement('div');o.className='mo';o.append(mkSel(m,'type','typeSel',['box','drawer'],'t_'));const sl=o.querySelector('select');sl.onchange=()=>{m.type=sl.value;renderMods();changed()};row.append(o)}
  const g=document.createElement('div');g.className='mg';
  [['w','mW',20,PL.W],['d','mD',20,PL.D],['h','mH',15,PL.H]].forEach(([k,lk,mn,mx])=>{const l=document.createElement('label'),sp=document.createElement('span');sp.textContent=tr(lk);l.append(sp,numIn(m,k,mn,Math.max(mx,mn)));g.append(l)});
  row.append(g);
  const o=document.createElement('div');o.className='mo';
  if(m.type==='drawer')o.append(mkSel(m,'nd','nDr',[1,2,3,4]));
  else{o.append(mkSel(m,'cols','cols',[1,2,3,4]),mkSel(m,'rows','rows',[1,2,3,4]),mkSel(m,'div','divN',[0,1,2,3]),mkSel(m,'lid','lidSel',['none','plug','slide','hinge'],'lid_'));
   const l3=document.createElement('label');l3.className='chk';const c3=document.createElement('input');c3.type='checkbox';c3.checked=!!m.tray;c3.onchange=()=>{m.tray=c3.checked;changed()};const s3=document.createElement('span');s3.textContent=tr('tray');l3.append(c3,s3);o.append(l3);
   const l4=document.createElement('label'),s4=document.createElement('span'),i4=document.createElement('input');s4.textContent=tr('label');i4.type='text';i4.maxLength=40;i4.value=m.label||'';i4.oninput=()=>{m.label=i4.value;changed()};l4.append(s4,i4);o.append(l4)}
  row.append(o);list.append(row)})}
function buildPlanUI(){let c=card('space');c._t=PL;
 rng(c,'W','width',50,600,5,'mm');rng(c,'D','depth',50,400,5,'mm');rng(c,'H','height',25,250,5,'mm');chk(c,'fill','fill');c.lastChild.classList.add('pfill');
 c=card('plmods');const add=document.createElement('div');add.className='addrow';
 ['box','tall','drawer'].forEach(ty=>{const b=document.createElement('button');b.className='btn';b.dataset.k='add_'+ty;b.onclick=()=>{const d=MODDEF[ty];PL.mods.push({type:ty,w:d.w,d:d.d,h:Math.min(d.h,PL.H),div:0,lid:'none'});renderMods();changed()};add.append(b)});
 const list=document.createElement('div');list.id='modlist';c.append(add,list);
 c=card('plset');seg(c,'wall','wall',[[1.6,'1.6 mm'],[2,'2.0 mm'],[2.4,'2.4 mm'],[3,'3.0 mm']]);rng(c,'r','corners',0,12,1,'mm');chk(c,'stack','stack');chk(c,'sharpSeam','sharpSeam');chk(c,'filler','filler');seg(c,'tex','tex',[['none','tx_none'],['ribs','tx_ribs'],['waves','tx_waves'],['facets','tx_facets']]);
 c=card('plmsg');const ul=document.createElement('ul');ul.id='plmsgs';c.append(ul);renderMods()}
window.__mn={slotsFor,S,PL,buildPlan,planSolve,renderMods,buildAll,openEdges,volume,fitTestTris,arrange,get built(){return built}};

/* ================= ModuNest: Produktbeschreibung fuer den Kern ================= */
const SKEYS=['wall','r','stack','conn','sharpSeam','filler','tex','fit','mode','cBox','cLid','cTray','cKey'];
let lastMode=S.mode;
const PRODUCT={id:'modunest',name:'ModuNest',file:'ModuNest',store:'mn',
 unit:{one:['Kiste (Modul)','box (module)'],n:['Kiste(n)','box(es)'],many:['Kisten','boxes']},
 // Ergebnis fuer den Kern: ok/err, Teile und je Kiste die Masse [lang,kurz,hoch] (Abrechnung + Gratis-Korrektur)
 async build(res,tol){const r=await buildPlan(res,tol);r.ok=r.sol.ok;r.err=r.sol.msgs.map(m=>trf(...m)).join('; ');
  r.units=r.sol.ok?r.sol.items.map(it=>[Math.max(it.w,it.d),Math.min(it.w,it.d),it.h].map(v=>Math.round(v*10)/10)):[];return r},
 snap(){const o={};SKEYS.forEach(k=>o[k]=S[k]);return{S:o,PL:JSON.parse(JSON.stringify(PL))}},
 applySnap(s){Object.assign(S,s.S);for(const k in PL)delete PL[k];Object.assign(PL,JSON.parse(JSON.stringify(s.PL)))},
 snapName:s=>(s.S.mode==='plan'?'Plan':'Box')+' '+s.PL.W+'x'+s.PL.D+'x'+s.PL.H,
 snapCount:s=>s.S.mode==='plan'?(s.PL.mods||[]).length:1,
 snapInfo:s=>(s.S.mode==='plan'?trf('cartMods',(s.PL.mods||[]).length):tr('cartOne'))+' · '+s.PL.W+' × '+s.PL.D+' × '+s.PL.H+' mm',
 // Wechsel Einzelbox <-> Planer: Masse getrennt merken
 onChange(){if(S.mode!==lastMode){lastMode=S.mode;const o=PL.alt||{W:140,D:110,H:65};PL.alt={W:PL.W,D:PL.D,H:PL.H};PL.W=o.W;PL.D=o.D;PL.H=o.H;buildUI();panel.dataset.mode=S.mode}}};
