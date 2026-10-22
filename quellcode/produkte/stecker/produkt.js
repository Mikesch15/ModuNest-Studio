/* ================= Pflanzenstecker-Set: Texte und Zustand (Figuren/Relief in kern/figuren.js) ================= */
Object.assign(L,{
 tag:['Dein Garten. Deine Stecker. Dein Druck.','Your garden. Your markers. Your print.'],
 help1:['Gib die Pflanzennamen ein, durch Komma getrennt – jeder Name wird ein eigener Stecker.','Enter the plant names separated by commas – each becomes its own marker.'],
 help2:['Wähle Symbol, Schrift, Länge und Farben. Die 3D-Vorschau zeigt das ganze Set.','Choose symbol, font, length and colours. The 3D preview shows the whole set.'],
 help3:['Unter «Herunterladen» holst du die Dateien. Dafür brauchst du die Bestellnummer deines Etsy-Kaufs. Jedes Set zählt 1.','Get the files under «Download». You need the order number of your Etsy purchase. Each set counts 1.'],
 help4:['Drucke flach ohne Stützen. Für zwei Farben in Bambu Studio auf der angezeigten Höhe einen Farbwechsel einfügen. Für draussen PETG oder ASA verwenden.','Print flat without supports. For two colours add a colour change in Bambu Studio at the shown height. Use PETG or ASA outdoors.'],
 helpTip:['Tipp: Bei jedem Abschnitt erklärt dir das ⓘ, was die Einstellungen bewirken.','Tip: in every section, the ⓘ explains what the settings do.'],
 stNames:['Pflanzen','Plants'],stList:['Namen, durch Komma getrennt (max. 12)','Names, separated by commas (max. 12)'],scFont:['Schrift','Font'],fn_KFModern:['Klar','Clear'],fn_Script:['Schreibschrift','Script'],
 stSym:['Symbol','Symbol'],sh_none:['keines','none'],
 stSize:['Grösse','Size'],stH:['Schrifthöhe','Letter height'],stL:['Länge der Spitze','Spike length'],scT:['Dicke','Thickness'],scRel:['Reliefhöhe','Relief height'],
 cBase:['Stecker','Marker'],cText:['Schrift & Symbol','Text & symbol'],
 sCount:['Stecker','Markers'],sThick:['Dicke','Thickness'],sMat:['Filament max.','Filament max.'],
 scChange:['Zweifarbig: in Bambu Studio bei {0} mm einen Farbwechsel einfügen.','Two colours: add a colour change at {0} mm in Bambu Studio.'],
 eNames:['Bitte mindestens einen Pflanzennamen eingeben.','Please enter at least one plant name.'],
 i_stNames:['Jeder Name (bis 16 Zeichen) wird ein Stecker. Höchstens 12 pro Set.','Each name (up to 16 characters) becomes a marker. Up to 12 per set.'],
 i_stSym:['Das Symbol steht links neben dem Namen, auf allen Steckern gleich.','The symbol sits left of the name, the same on all markers.'],
 i_stSize:['Schrifthöhe: Grösse der Namen. Länge: wie tief der Stecker in die Erde geht. Dicke 3 mm ist stabil genug; Relief = erhabene Schrift.','Letter height: size of the names. Length: how deep the marker goes into the soil. 3 mm thickness is sturdy enough; relief = raised letters.'],
 i_colors:['Die Farben sind für die Vorschau. Jeder Stecker ist ein Teil: für zwei Farben in Bambu Studio einen Farbwechsel auf der angezeigten Höhe einfügen.','Colours are for the preview. Each marker is one part: for two colours add a colour change at the shown height in Bambu Studio.'],
 next2:['Für zwei Farben: in Bambu Studio auf der in der App angezeigten Höhe einen Farbwechsel einfügen (Rechtsklick auf den Höhenregler).','For two colours: add a colour change in Bambu Studio at the height shown in the app (right-click the layer slider).'],
 cartOne:['Stecker-Set','Marker set']
});
const S={names:'Tomate, Basilikum, Salat, Kürbis',font:'KFModern',sym:'blatt',H:14,Lg:120,T:3,h:1.2,view:'asm',hide:{},cBase:'#7aa35a',cText:'#fdfaf2'};
try{Object.assign(S,JSON.parse(localStorage.getItem('st-state')||'{}'))}catch(e){}
const stList=()=>String(S.names||'').split(/[,;\n]/).map(t=>t.trim().slice(0,16)).filter(Boolean).slice(0,12);

/* ================= Stecker: Geometrie ================= */
async function buildMarkers(res,tol){
 for(const f of ['KFModern','Script'])try{await document.fonts.load('100px '+f)}catch(e){}
 const names=stList(),fam=S.font==='Script'?'Script':'KFModern',sym=PZ_SHAPES[S.sym]?S.sym:'';
 if(!names.length)return{ok:false,err:tr('eNames'),parts:[],units:[],info:{}};
 const H=+S.H||12,Lg=+S.Lg||120,T=+S.T||3,h=+S.h||1.2,m=Math.max(4,H*.4),g=sym?pzShape(sym,H*1.5,res,tol):null,gap=H*.35,parts=[];let ox=0;
 for(const t of names){const f=fitFont(t,fam,H,140),cw=(g?g.w+gap:0)+f.w,hw=cw+2*m,hh=Math.max(H,g?g.y1-g.y0:0)+2*m,yb=-hh/2,sw=Math.min(12,hw*.4);
  const ring=d=>pzRings(hw+6,2*(hh/2+Lg)+6,res,tol,d),x0=-cw/2;
  const A=ring(x=>{x.beginPath();x.roundRect(-hw/2,-hh/2,hw,hh,Math.min(6,hh/3));x.fill();
   x.beginPath();x.moveTo(-sw/2,yb+1);x.lineTo(sw/2,yb+1);x.lineTo(sw/2,yb-Lg+sw*1.2);x.lineTo(0,yb-Lg);x.lineTo(-sw/2,yb-Lg+sw*1.2);x.closePath();x.fill()});
  const R=ring(x=>{pzText(x,t,fam,f.fs,x0+(g?g.w+gap:0)+f.w/2,-f.cap/2);
   if(g){pzPath(x,g.R,x0+g.w/2,0);x.fill('evenodd')} /* Symbol ohne Gravur (zu fein bei dieser Groesse) */});
  const dx=ox+hw/2;ox+=hw+8;
  parts.push({key:'cBase',name:'Stecker '+t,tris:Float32Array.from(reliefBody(A,R,T,h)),dx,prev:[{key:'cBase',name:'Stecker',tris:Float32Array.from(extrude(A,0,T))},{key:'cText',name:'Schrift',tris:Float32Array.from(extrude(R,T,T+h))}]})}
 const w=ox-8;parts.forEach(p=>p.dx-=w/2);
 return{ok:true,err:'',parts,units:[[names.length,Math.round(Lg),pzHash(names.join('|')+'|'+sym)]],info:{n:names.length,T,h}}}

/* ================= Stecker: Oberflaeche, Vorschau ================= */
// Vorschau: Set nebeneinander, zweifarbig; zum Drucken/Export je Stecker ein Koerper
function arrange(parts,mode){return mode==='asm'?parts.flatMap(p=>p.prev.map(q=>({...q,tris:xf(q.tris,(X,Y,Z)=>[X+p.dx,Y,Z])}))):arrangePrint(parts.map(({prev,...p})=>p))}
function ui(){if(!featOn('symbol'))S.sym='';if(!featOn('script'))S.font='KFModern';
 let c=card('stNames');tInput(c,'names','stList');if(featOn('script'))seg(c,'font','scFont',[['KFModern','fn_KFModern'],['Script','fn_Script']]);
 if(featOn('symbol')){c=card('stSym');const sg=document.createElement('div');sg.className='seg shp';
  ['',...PZ_SHAPE_IDS].forEach(id=>{const b=document.createElement('button');b.dataset.k='sh_'+(id||'none');const upd=()=>{const on=(S.sym||'')===id;b.classList.toggle('on',on);b.dataset.n=on?'✓':''};upd();b._u=upd;
   b.onclick=()=>{S.sym=id;sg.querySelectorAll('button').forEach(x=>x._u());changed()};sg.append(b)});c.append(sg)}
 c=card('stSize');rng(c,'H','stH',8,20,1,'mm');rng(c,'Lg','stL',60,200,10,'mm');rng(c,'T','scT',2,5,.5,'mm');c.lastChild.classList.add('xp');rng(c,'h','scRel',.6,2,.2,'mm');c.lastChild.classList.add('xp');
 c=card('colors');const cc=document.createElement('div');cc.className='colors';
 ['cBase','cText'].forEach(k=>{const l=document.createElement('label'),s=document.createElement('span');s.dataset.k=k;const i=document.createElement('input');i.type='color';i.value=S[k];i.oninput=()=>{S[k]=i.value;draw();save()};l.append(s,i);cc.append(l)});c.append(cc);
 cartCard()}
function present(reframe){if(!built)return;const arr=built.ok?arrange(built.parts,S.view):[];
 setMeshes(arr.map(p=>({...p,tris:clean(p.tris)})));if(reframe&&arr.length)frame(arr);draw();
 document.querySelectorAll('.vt button').forEach(b=>b.classList.toggle('on',b.dataset.v===S.view));
 const i=built.info||{},mass=built.ok?built.parts.reduce((s,p)=>s+Math.abs(volume(p.tris)),0)/1000*1.24:0;
 document.getElementById('stats').innerHTML=built.ok?[[tr('sCount'),i.n],[tr('sThick'),(i.T+i.h).toFixed(1)+' mm'],[tr('sMat'),'≈ '+Math.round(mass)+' g']].map(a=>`<div class="stat"><span>${a[0]}</span><strong>${a[1]}</strong></div>`).join(''):'';
 status.innerHTML=built.ok?trf('scChange',i.T):'<b>'+built.err+'</b>';renderCart()}

/* ================= Stecker: Produktbeschreibung fuer den Kern ================= */
const ST_KEYS=['names','font','sym','H','Lg','T','h','cBase','cText'];
const PRODUCT={id:'stecker',name:'Pflanzenstecker',file:'Pflanzenstecker',store:'st',
 unit:{one:['Set','set'],n:['Set(s)','set(s)'],many:['Sets','sets']},
 build:(res,tol)=>buildMarkers(res,tol),
 snap(){const o={};ST_KEYS.forEach(k=>o[k]=S[k]);return{S:o}},
 applySnap(s){Object.assign(S,s.S)},
 snapName:s=>'Stecker-Set '+String(s.S.names||'').split(',').length,
 snapCount:()=>1,
 snapInfo:s=>tr('cartOne')+' · '+String(s.S.names||'').slice(0,60)};
