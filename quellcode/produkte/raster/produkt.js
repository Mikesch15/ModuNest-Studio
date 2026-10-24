/* ================= Raster-Grundplatte (Gridfinity-kompatibel): Texte und Zustand =================
   Raster 42 mm, Aufnahmeprofil von unten 0.7 (45°) + 1.8 (senkrecht) + 2.15 (45°) = 4.65 mm (oben bei 0.5-mm-Stegen abgeschnitten -> 4.4), Zellecken r 4 mm.
   Gridfinity: offenes System von Zack Freedman (MIT-Lizenz); eigene Geometrie nach den Massen, keine fremden Dateien. */
Object.assign(L,{
 tag:['Deine Schublade. Dein Raster. Dein Druck.','Your drawer. Your grid. Your print.'],
 help1:['Miss deine Schublade innen aus und gib Breite und Tiefe ein. Die Grundplatte füllt sie mit 42-mm-Feldern, der Rest wird zum Randstreifen.','Measure the inside of your drawer and enter width and depth. The baseplate fills it with 42 mm cells; the rest becomes an edge filler.'],
 help2:['Grosse Platten werden automatisch in Teile fürs Druckbett (bis 25 cm) zerlegt. Die Teile legst du einfach nebeneinander in die Schublade.','Large plates are split automatically into parts for the print bed (up to 25 cm). Simply lay the parts side by side in the drawer.'],
 help3:['Unter «Herunterladen» holst du die Dateien. Dafür brauchst du die Bestellnummer deines Etsy-Kaufs. Jede Grundplatte zählt 1.','Get the files under «Download». You need the order number of your Etsy purchase. Each baseplate counts 1.'],
 help4:['Drucke ohne Stützen. Passend für Gridfinity-Kisten (42-mm-Raster).','Print without supports. Fits Gridfinity bins (42 mm grid).'],
 helpTip:['Tipp: Bei jedem Abschnitt erklärt dir das ⓘ, was die Einstellungen bewirken.','Tip: in every section, the ⓘ explains what the settings do.'],
 rsSize:['Schublade (innen)','Drawer (inside)'],rsW:['Breite','Width'],rsD:['Tiefe','Depth'],
 rsAl:['Raster ausrichten','Align grid'],al_c:['Mitte','Centre'],al_l:['Links vorne','Front left'],
 rsFloor:['Boden','Bottom'],fl_0:['offen (Standard)','open (standard)'],fl_1:['geschlossen','closed'],
 cBase:['Platte','Plate'],
 sGrid:['Raster','Grid'],sParts:['Teile','Parts'],sEdge:['Rand','Edge'],sMat:['Filament max.','Filament max.'],
 rsInfo:['{0} × {1} Felder · Rand links {2} / rechts {3} / vorne {4} / hinten {5} mm · {6} Teil(e)','{0} × {1} cells · edge left {2} / right {3} / front {4} / back {5} mm · {6} part(s)'],
 rsGap:['Randstreifen unter 2 mm werden weggelassen (zu dünn zum Drucken).','Edge fillers under 2 mm are left out (too thin to print).'],
 eSmall:['Die Schublade ist zu klein für ein 42-mm-Feld.','The drawer is too small for one 42 mm cell.'],
 i_rsSize:['Innenmass der Schublade in mm. Die Platte wird rundum 0.5 mm kleiner, damit sie leicht hineinpasst.','Inside size of the drawer in mm. The plate is made 0.5 mm smaller all round so it drops in easily.'],
 i_rsAl:['Mitte: Randstreifen links/rechts und vorne/hinten gleich breit. Links vorne: Raster beginnt in der Ecke, der ganze Rand liegt rechts und hinten.','Centre: equal edge fillers left/right and front/back. Front left: the grid starts in the corner, all the edge goes right and back.'],
 i_rsFloor:['Offen ist der Gridfinity-Standard (spart Material). Geschlossen gibt eine stabile, ebene Unterseite (+1.2 mm).','Open is the Gridfinity standard (saves material). Closed gives a sturdy flat underside (+1.2 mm).'],
 i_colors:['Die Farbe ist nur für die Vorschau.','The colour is for the preview only.'],
 gfNote:['Kompatibel mit Gridfinity, einem offenen System von Zack Freedman (MIT-Lizenz). Keine Verbindung zu Zack Freedman oder Voidstar Lab LLC.','Compatible with Gridfinity, an open system by Zack Freedman (MIT licence). Not affiliated with Zack Freedman or Voidstar Lab LLC.'],
 next2:['Die Teile ohne Stützen drucken und nebeneinander in die Schublade legen.','Print the parts without supports and lay them side by side in the drawer.'],
 cartOne:['Grundplatte','Baseplate']
});
const S={W:400,D:300,al:'c',floor:0,view:'asm',hide:{},cBase:'#86ab7c'};
try{Object.assign(S,JSON.parse(localStorage.getItem('rs-state')||'{}'))}catch(e){}

/* ================= Raster: Geometrie ================= */
const OV=.2,GF=42,PB=[.7,1.8,2.15],PH=4.65,RCELL=4,FLOOR=1.2,BED=250,ROUT=2,FIT=.5;
// Aufteilung: Felder, Raender (unter 2 mm weg), Teile (Spalten-/Zeilengruppen bis BED)
function rsPlan(){const W=Math.max(0,+S.W-2*FIT),D=Math.max(0,+S.D-2*FIT),nx=Math.floor(W/GF),ny=Math.floor(D/GF);
 const mx=W-nx*GF,my=D-ny*GF,c=S.al!=='l',e=v=>v<2?0:v,l=e(c?mx/2:0),r=e(c?mx/2:mx),f=e(c?my/2:0),b=e(c?my/2:my);
 const grp=(n,a,z)=>{for(let m=1;m<=n;m++){const g=[];let i=0;for(let j=0;j<m;j++){const k=Math.floor(n/m)+(j<n%m?1:0);g.push([i,k]);i+=k} /* gleichmaessig auf m Teile */
   if(g.every(([i0,k])=>(i0===0?a:0)+k*GF+(i0+k===n?z:0)<=BED))return g}return Array.from({length:n},(_,i)=>[i,1])};
 return{nx,ny,l,r,f,b,gx:grp(nx,l,r),gy:grp(ny,f,b)}}
async function buildPlate(res,tol){const P=rsPlan();if(P.nx<1||P.ny<1)return{ok:false,err:tr('eSmall'),parts:[],units:[],info:{}};
 const F=S.floor&&featOn('boden')?FLOOR:0,parts=[],CELL=new Map(),Wt=P.l+P.nx*GF+P.r,Dt=P.f+P.ny*GF+P.b;
 // Profil-Baender: Einzug d der Zellenoeffnung je Band (an der Band-Oberkante -> Kiste hat nie weniger Platz)
 const bands=[];if(F)bands.push([0,F,null]);for(let k=0;k<7;k++)bands.push([F+k*.1,F+(k+1)*.1,2.85-(k+1)*.1]);bands.push([F+PB[0],F+PB[0]+PB[1],2.15]);
 const TOPD=.25,st=(PB[2]-TOPD)/8;for(let k=0;k<8;k++){const a=F+PB[0]+PB[1]+k*st;bands.push([a,a+st,PB[2]-(k+1)*st])} /* oben 0.5-mm-Stege statt Messerkante: druckbar, Kiste liegt auf den Schraegen */
 for(const[gi,[ix,kx]]of P.gx.entries())for(const[gj,[iy,ky]]of P.gy.entries()){
  const x0=ix===0?0:P.l+ix*GF,x1=P.l+(ix+kx)*GF+(ix+kx===P.nx?P.r:0),y0=iy===0?0:P.f+iy*GF,y1=P.f+(iy+ky)*GF+(iy+ky===P.ny?P.b:0),w=x1-x0,d=y1-y0,cx=(x0+x1)/2,cy=(y0+y1)/2;
  // Aussenecken nur an echten Plattenecken gerundet, an Trennfugen eckig (Reihenfolge roundRect: vl, vr, hr, hl in y-Richtung nach vorne)
  const R=[x0===0&&y0===0,x1===Wt&&y0===0,x1===Wt&&y1===Dt,x0===0&&y1===Dt].map(v=>v?ROUT:0);
  /* Jedes Feld als eigener Rahmen (1 Loch) + Randstreifen separat: die Flaechen-Triangulierung scheitert bei vielen Loechern in einer Flaeche */
  let t=[];const ex=(rg,a,b,dx,dy)=>{const q=extrude(rg,a,b);for(let i=0;i<q.length;i+=3){q[i]+=dx;q[i+1]+=dy}t=t.concat(q)};
  const zT=bands[bands.length-1][1],gx0=P.l+ix*GF-cx,gy0=P.f+iy*GF-cy,gw=kx*GF,gd=ky*GF;
  if(F)ex(pzRings(w+4,d+4,res,tol,x=>{x.beginPath();x.roundRect(-w/2,-d/2,w,d,R);x.fill()}),0,F,0,0);
  const edge=pzRings(w+4,d+4,res,tol,x=>{x.beginPath();x.roundRect(-w/2,-d/2,w,d,R);x.fill();x.globalCompositeOperation='destination-out';const sl=ix===0&&P.l>0?OV:0,sr=ix+kx===P.nx&&P.r>0?OV:0,sf=iy===0&&P.f>0?OV:0,sb=iy+ky===P.ny&&P.b>0?OV:0;x.fillRect(gx0+sl,gy0+sf,gw-sl-sr,gd-sf-sb)}); /* ueberlappt die Felder um OV */
  if(edge.length)ex(edge,0,zT,0,0);
  for(let i=ix;i<ix+kx;i++)for(let j=iy;j<iy+ky;j++){const ox=P.l+i*GF-cx,oy=P.f+j*GF-cy;
   /* Feld-Ecke an einer Plattenecke ohne Rand: dort gerundet wie die Platte */
   const cr=[ox<=-w/2+1e-6&&oy<=-d/2+1e-6&&R[0],ox+GF>=w/2-1e-6&&oy<=-d/2+1e-6&&R[1],ox+GF>=w/2-1e-6&&oy+GF>=d/2-1e-6&&R[2],ox<=-w/2+1e-6&&oy+GF>=d/2-1e-6&&R[3]].map(v=>v||0),key=cr.join();
   for(const[a,b,dd]of bands){if(dd==null)continue;const o=[ox>-w/2+1e-6,ox+GF<w/2-1e-6,oy>-d/2+1e-6,oy+GF<d/2-1e-6].map(v=>v?OV:0),k=key+'|'+o.join()+'|'+dd.toFixed(3); /* innen 0.2 mm in Nachbarfeld/Rand: ein zusammenhaengender Koerper */
    if(!CELL.has(k))CELL.set(k,pzRings(GF+4,GF+4,res,tol,x=>{x.beginPath();x.roundRect(-GF/2-o[0],-GF/2-o[2],GF+o[0]+o[1],GF+o[2]+o[3],cr);x.fill();x.globalCompositeOperation='destination-out';x.beginPath();x.roundRect(-GF/2+dd,-GF/2+dd,GF-2*dd,GF-2*dd,Math.max(.3,RCELL-dd));x.fill()}));
    ex(CELL.get(k),a,b,ox+GF/2,oy+GF/2)}}
  parts.push({key:'cBase',name:'Platte '+String.fromCharCode(65+gj)+(gi+1),tris:Float32Array.from(t),asm:[(X,Y,Z)=>[X+cx-Wt/2,Y+cy-Dt/2,Z]]})}
 return{ok:true,err:'',parts,units:[[Math.round(Math.max(+S.W,+S.D)),Math.round(Math.min(+S.W,+S.D)),0]],info:{...P,H:F+PH-.25,n:parts.length}}}

/* ================= Raster: Oberflaeche, Vorschau ================= */
function arrange(parts,mode){return mode==='asm'?parts.flatMap(p=>p.asm.map(f=>({...p,tris:xf(p.tris,f)}))):arrangePrint(parts)}
function ui(){if(!featOn('boden'))S.floor=0;
 let c=card('rsSize');rng(c,'W','rsW',60,800,1,'mm');rng(c,'D','rsD',60,800,1,'mm');
 c=card('rsAl');seg(c,'al','rsAl',[['c','al_c'],['l','al_l']]);
 if(featOn('boden')){c=card('rsFloor');seg(c,'floor','rsFloor',[[0,'fl_0'],[1,'fl_1']])}
 c=card('colors');const cc=document.createElement('div');cc.className='colors';
 ['cBase'].forEach(k=>{const l=document.createElement('label'),s=document.createElement('span');s.dataset.k=k;const i=document.createElement('input');i.type='color';i.value=S[k];i.oninput=()=>{S[k]=i.value;draw();save()};l.append(s,i);cc.append(l)});c.append(cc);
 const n=document.createElement('p');n.className='note';n.dataset.k='gfNote';c.append(n);
 cartCard()}
function present(reframe){if(!built)return;const arr=built.ok?arrange(built.parts,S.view):[];
 setMeshes(arr.map(p=>({...p,tris:clean(p.tris)})));if(reframe&&arr.length)frame(arr);draw();
 document.querySelectorAll('.vt button').forEach(b=>b.classList.toggle('on',b.dataset.v===S.view));
 const i=built.info||{},mass=built.ok?built.parts.reduce((s,p)=>s+Math.abs(volume(p.tris)),0)/1000*1.24:0,f1=v=>(+v).toFixed(1);
 document.getElementById('stats').innerHTML=built.ok?[[tr('sGrid'),i.nx+' × '+i.ny],[tr('sParts'),i.n],[tr('sMat'),'≈ '+Math.round(mass)+' g']].map(a=>`<div class="stat"><span>${a[0]}</span><strong>${a[1]}</strong></div>`).join(''):'';
 status.innerHTML=built.ok?trf('rsInfo',i.nx,i.ny,f1(i.l),f1(i.r),f1(i.f),f1(i.b),i.n)+'<br><span class="note">'+tr('rsGap')+'</span>':'<b>'+built.err+'</b>';renderCart()}

/* ================= Raster: Produktbeschreibung fuer den Kern ================= */
const RS_KEYS=['W','D','al','floor','cBase'];
const PRODUCT={id:'raster',name:'Raster-Grundplatte',file:'Raster-Grundplatte',store:'rs',dimKeys:['cBase'],
 unit:{one:['Platte','plate'],n:['Platte(n)','plate(s)'],many:['Platten','plates']},
 build:(res,tol)=>buildPlate(res,tol),
 notice:'Diese Grundplatte ist kompatibel mit Gridfinity, einem offenen System von Zack Freedman.\nKeine Verbindung zu Zack Freedman oder Voidstar Lab LLC. Geometrie eigenstaendig nach den oeffentlichen Massen erstellt.\n\nGridfinity: MIT License, Copyright (c) 2023 Zachary Freedman and Voidstar Lab LLC.\n',
 snap(){const o={};RS_KEYS.forEach(k=>o[k]=S[k]);return{S:o}},
 applySnap(s){Object.assign(S,s.S)},
 snapName:s=>'Grundplatte '+s.S.W+'x'+s.S.D,
 snapCount:()=>1,
 snapInfo:s=>tr('cartOne')+' · '+s.S.W+' × '+s.S.D+' mm'};
