/* ================= Raster-Grundplatte (Gridfinity-kompatibel): Texte und Zustand =================
   Raster 42 mm, Aufnahmeprofil von unten 0.7 (45°) + 1.8 (senkrecht) + 2.15 (45°) = 4.65 mm (oben bei 0.5-mm-Stegen abgeschnitten -> 4.4), Zellecken r 4 mm.
   Gridfinity: offenes System von Zack Freedman (MIT-Lizenz); eigene Geometrie nach den Massen, keine fremden Dateien. */
Object.assign(L,{
 tag:['Deine Schublade. Dein Raster. Dein Druck.','Your drawer. Your grid. Your print.'],
 help1:['Miss deine Schublade innen aus und gib Breite und Tiefe ein. Die Grundplatte füllt sie mit 42-mm-Feldern, der Rest wird zum Randstreifen.','Measure the inside of your drawer and enter width and depth. The baseplate fills it with 42 mm cells; the rest becomes an edge filler.'],
 help2:['Grosse Platten werden automatisch in Teile fürs Druckbett (bis 25 cm) zerlegt. Die Teile legst du einfach nebeneinander in die Schublade.','Large plates are split automatically into parts for the print bed (up to 25 cm). Simply lay the parts side by side in the drawer.'],
 help3:['Unter «Herunterladen» holst du die Dateien. Dafür brauchst du die Bestellnummer deines Etsy-Kaufs. Die Grundplatte zählt 1, jede Kiste 1.','Get the files under «Download». You need the order number of your Etsy purchase. The baseplate counts 1, each bin 1.'],
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
 rkBins:['Kisten','Bins'],bon_1:['mit Kisten','with bins'],bon_0:['nur Grundplatte','baseplate only'],rkBsz:['Kistengrösse in Feldern (teilt neu auf)','Bin size in cells (re-divides)'],
 rkU:['Höhe (Einheiten à 7 mm)','Height (7 mm units)'],rkLip:['Stapelrand','Stacking lip'],lipY:['mit','with'],lipN:['ohne','without'],rkWall:['Wandstärke','Wall thickness'],
 rkRand:['🎲 Zufällig füllen','🎲 Random fill'],rkRandQ:['Alle Kisten durch eine neue, zufällige Aufteilung ersetzen? (Mit ↶ rückgängig machen)','Replace all bins with a new random layout? (Undo with ↶)'],
 rkAdd:['+ Kiste','+ Bin'],rkBin:['Kiste','Bin'],rkCells:['Felder','cells'],rkComp:['Fächer','compartments'],cBin:['Kisten','Bins'],
 rkFree:['{0} Feld(er) frei – mit «+ Kiste» füllen oder Kistengrösse ändern.','{0} cell(s) free – fill with «+ Bin» or change the bin size.'],
 rkNoFit:['Passt nicht aufs Raster: {0}. Kiste verkleinern oder entfernen.','Does not fit the grid: {0}. Make the bin smaller or remove it.'],
 i_rkBins:['Die Kisten werden automatisch auf dem Raster angeordnet. Kistengrösse teilt das Raster gleichmässig neu auf; in der Liste kannst du jede Kiste ändern. Höhe in Einheiten zu 7 mm (ohne Stapelrand), Stapelrand = Kisten lassen sich stapeln.','Bins are arranged on the grid automatically. Bin size re-divides the grid evenly; in the list you can change each bin. Height in 7 mm units (without lip); stacking lip = bins can be stacked.'],
 sBins:['Kisten','Bins'],rkTap:['Kiste antippen zum Ändern, freies Feld (+) antippen für eine neue Kiste. Gestrichelt: Fugen zwischen den Plattenteilen.','Tap a bin to change it, tap a free cell (+) for a new bin. Dashed: seams between plate parts.'],rkDel:['Kiste entfernen','Remove bin'],
 bedSel:['Druckbett','Print bed'],bed180:['180 mm (z. B. A1 mini)','180 mm (e.g. A1 mini)'],bed220:['220 mm (z. B. Prusa MK4, Ender 3)','220 mm (e.g. Prusa MK4, Ender 3)'],bed256:['256 mm (Bambu P1S, X1, A1)','256 mm (Bambu P1S, X1, A1)'],bed300:['300 mm und grösser','300 mm and larger'],
 cartOne:['Grundplatte','Baseplate']
});
const S={W:400,D:300,al:'c',floor:0,bon:1,bsz:2,U:3,lip:1,wt:1.2,bins:null,view:'asm',hide:{},cBase:'#86ab7c',cBin:'#c8714f'};
try{Object.assign(S,JSON.parse(localStorage.getItem('rs-state')||'{}'))}catch(e){}

/* ================= Raster: Geometrie ================= */
const TNK=1,THK=1.8,TLK=5,TCLK=.15,TZK=2.2,PZK=2.4,OV=.2,GF=42,PB=[.7,1.8,2.15],PH=4.65,RCELL=4,FLOOR=1.2,ROUT=2,FIT=.5;
// Aufteilung: Felder, Raender (unter 2 mm weg), Teile (Spalten-/Zeilengruppen bis BED)
function rsPlan(){const W=Math.max(0,+S.W-2*FIT),D=Math.max(0,+S.D-2*FIT),nx=Math.floor(W/GF),ny=Math.floor(D/GF);
 const mx=W-nx*GF,my=D-ny*GF,c=S.al!=='l',e=v=>v<2?0:v,l=e(c?mx/2:0),r=e(c?mx/2:mx),f=e(c?my/2:0),b=e(c?my/2:my);
 const grp=(n,a,z)=>{for(let m=1;m<=n;m++){const g=[];let i=0;for(let j=0;j<m;j++){const k=Math.floor(n/m)+(j<n%m?1:0);g.push([i,k]);i+=k} /* gleichmaessig auf m Teile */
   if(g.every(([i0,k])=>(i0===0?a:0)+k*GF+(i0+k===n?z:0)<=BEDR()-6-TLK))return g} /* inkl. Puzzle-Nase */return Array.from({length:n},(_,i)=>[i,1])};
 return{nx,ny,l,r,f,b,gx:grp(nx,l,r),gy:grp(ny,f,b)}}
async function platePieces(P,res,tol){
 const F=S.floor&&featOn('boden')?FLOOR:0,parts=[],CELL=new Map(),Wt=P.l+P.nx*GF+P.r,Dt=P.f+P.ny*GF+P.b;
 // Profil-Baender: Einzug d der Zellenoeffnung je Band (an der Band-Oberkante -> Kiste hat nie weniger Platz)
 const bands=[];if(F)bands.push([0,F,null]);for(let k=0;k<7;k++)bands.push([F+k*.1,F+(k+1)*.1,2.85-(k+1)*.1]);bands.push([F+PB[0],F+PZK,2.15],[F+PZK,F+PB[0]+PB[1],2.15]); /* Grenze bei Taschenhoehe der Puzzle-Verbinder */
 const TOPD=.25,st=(PB[2]-TOPD)/8;for(let k=0;k<8;k++){const a=F+PB[0]+PB[1]+k*st;bands.push([a,a+st,PB[2]-(k+1)*st])} /* oben 0.5-mm-Stege statt Messerkante: druckbar, Kiste liegt auf den Schraegen */
 for(const[gi,[ix,kx]]of P.gx.entries())for(const[gj,[iy,ky]]of P.gy.entries()){
  const x0=ix===0?0:P.l+ix*GF,x1=P.l+(ix+kx)*GF+(ix+kx===P.nx?P.r:0),y0=iy===0?0:P.f+iy*GF,y1=P.f+(iy+ky)*GF+(iy+ky===P.ny?P.b:0),w=x1-x0,d=y1-y0,cx=(x0+x1)/2,cy=(y0+y1)/2;
  // Aussenecken nur an echten Plattenecken gerundet, an Trennfugen eckig (Reihenfolge roundRect: vl, vr, hr, hl in y-Richtung nach vorne)
  const R=[x0===0&&y0===0,x1===Wt&&y0===0,x1===Wt&&y1===Dt,x0===0&&y1===Dt].map(v=>v?ROUT:0);
  /* Jedes Feld als eigener Rahmen (1 Loch) + Randstreifen separat: die Flaechen-Triangulierung scheitert bei vielen Loechern in einer Flaeche */
  let t=[];const ex=(rg,a,b,dx,dy)=>{const q=extrude(rg,a,b);for(let i=0;i<q.length;i+=3){q[i]+=dx;q[i+1]+=dy}t=t.concat(q)};
  const zT=bands[bands.length-1][1],gx0=P.l+ix*GF-cx,gy0=P.f+iy*GF-cy,gw=kx*GF,gd=ky*GF;
  /* Puzzle-Verbinder an den Fugen: unten in der Querwand am Feld-Kreuzungspunkt. Teil links/vorne hat die Nase, Teil rechts/hinten die Tasche (von unten offen).
     Nase: Hals 2 mm, Kopf 3.6 mm, 5 mm ueber die Fuge, 2.2 mm hoch; Tasche ringsum 0.15 mm Luft, 2.4 mm hoch. Wand dort 4.3 mm breit. */
  const tabs=[],pock=[];
  const J=(a,k,o)=>{const r=[];for(let q=a+1;q<a+k;q++)r.push(o+q*GF);return r};
  if(ix+kx<P.nx)for(const yy of J(iy,ky,P.f))tabs.push({sx:w/2,sy:yy-cy,ax:'x'});
  if(ix>0)for(const yy of J(iy,ky,P.f))pock.push({sx:-w/2,sy:yy-cy,ax:'x'});
  if(iy+ky<P.ny)for(const xx of J(ix,kx,P.l))tabs.push({sx:xx-cx,sy:d/2,ax:'y'});
  if(iy>0)for(const xx of J(ix,kx,P.l))pock.push({sx:xx-cx,sy:-d/2,ax:'y'});
  const nose=(x,q,e,dx,dy)=>{const pts=[[-.6-e,-TNK],[0,-TNK],[TLK,-THK],[TLK,THK],[0,TNK],[-.6-e,TNK]];x.beginPath();pts.forEach(([u,v],k)=>{const X=q.sx+dx+(q.ax==='x'?u:v),Y=q.sy+dy+(q.ax==='x'?v:u);k?x.lineTo(X,Y):x.moveTo(X,Y)});x.closePath();x.fill();if(e>0){x.lineJoin='round';x.lineWidth=2*e;x.stroke()}};
  const pockIn=(x,dx,dy)=>{x.globalCompositeOperation='destination-out';for(const q of pock)nose(x,q,TCLK,dx,dy)};
  for(const q of tabs)ex(pzRings(16,16,res,tol,x=>nose(x,{...q,sx:0,sy:0},0,0,0)),0,F+TZK,q.sx,q.sy);
  if(F)ex(pzRings(w+4,d+4,res,tol,x=>{x.beginPath();x.roundRect(-w/2,-d/2,w,d,R);x.fill();pockIn(x,0,0)}),0,F,0,0);
  const edge=pzRings(w+4,d+4,res,tol,x=>{x.beginPath();x.roundRect(-w/2,-d/2,w,d,R);x.fill();x.globalCompositeOperation='destination-out';const sl=ix===0&&P.l>0?OV:0,sr=ix+kx===P.nx&&P.r>0?OV:0,sf=iy===0&&P.f>0?OV:0,sb=iy+ky===P.ny&&P.b>0?OV:0;x.fillRect(gx0+sl,gy0+sf,gw-sl-sr,gd-sf-sb)}); /* ueberlappt die Felder um OV */
  if(edge.length)ex(edge,0,zT,0,0);
  for(let i=ix;i<ix+kx;i++)for(let j=iy;j<iy+ky;j++){const ox=P.l+i*GF-cx,oy=P.f+j*GF-cy;
   /* Feld-Ecke an einer Plattenecke ohne Rand: dort gerundet wie die Platte */
   const cr=[ox<=-w/2+1e-6&&oy<=-d/2+1e-6&&R[0],ox+GF>=w/2-1e-6&&oy<=-d/2+1e-6&&R[1],ox+GF>=w/2-1e-6&&oy+GF>=d/2-1e-6&&R[2],ox<=-w/2+1e-6&&oy+GF>=d/2-1e-6&&R[3]].map(v=>v||0),key=cr.join();
   const near=pock.filter(q=>q.sx>ox-8&&q.sx<ox+GF+8&&q.sy>oy-8&&q.sy<oy+GF+8),cx0=ox+GF/2,cy0=oy+GF/2,pk=near.map(q=>(q.sx-cx0).toFixed(2)+':'+(q.sy-cy0).toFixed(2)+q.ax).join(';');
   for(const[a,b,dd]of bands){if(dd==null)continue;const hp=near.length&&a<F+PZK-1e-6,o=[ox>-w/2+1e-6,ox+GF<w/2-1e-6,oy>-d/2+1e-6,oy+GF<d/2-1e-6].map(v=>v?OV:0),k=key+'|'+o.join()+'|'+dd.toFixed(3)+(hp?'|'+pk:''); /* innen 0.2 mm in Nachbarfeld/Rand: ein zusammenhaengender Koerper */
    if(!CELL.has(k))CELL.set(k,pzRings(GF+4,GF+4,res,tol,x=>{x.beginPath();x.roundRect(-GF/2-o[0],-GF/2-o[2],GF+o[0]+o[1],GF+o[2]+o[3],cr);x.fill();x.globalCompositeOperation='destination-out';x.beginPath();x.roundRect(-GF/2+dd,-GF/2+dd,GF-2*dd,GF-2*dd,Math.max(.3,RCELL-dd));x.fill();if(hp)pockIn(x,-cx0,-cy0)}));
    ex(CELL.get(k),a,b,ox+GF/2,oy+GF/2)}}
  parts.push({key:'cBase',name:'Platte '+String.fromCharCode(65+gj)+(gi+1),tris:Float32Array.from(t),asm:[(X,Y,Z)=>[X+cx-Wt/2,Y+cy-Dt/2,Z]]})}
 return{parts,F,Wt,Dt}}

/* ================= Kisten (Gridfinity-kompatibel) =================
   Kiste 42*n - 0.5 mm, Ecken r 3.75, Hoehe 7 mm je Einheit (ohne Stapelrand). Fuss je Feld von unten 0.8 (45°) + 1.8 + 2.15 (45°) = 4.75 mm.
   Stapelrand oben = Aufnahmeprofil der Grundplatte - 0.25 (oben bei 0.5-mm-Kante abgeschnitten), darunter 45°-Stuetze nach innen. */
const BW=.5,RB=3.75,FT=[.8,1.8,2.15],FH=4.75,UH=7,LTOP=.75;
const BEDR=()=>{try{return +localStorage.getItem('mn-bed')||256}catch(e){return 256}},MB=()=>Math.max(1,Math.min(5,Math.floor((BEDR()-6+BW)/GF))); /* Druckbett (gemeinsame Auswahl) -> groesste Kiste */
function binTris(X,Y,U,cx,cy,lip,wt,res,tol,C){const W=X*GF-BW,D=Y*GF-BW,H=U*UH,FLZ=FH+1.2,t=[],R=(w,d,draw)=>pzRings(w+4,d+4,res,tol,draw);
 const ex=(rg,a,b,dx=0,dy=0)=>{const q=extrude(rg,a,b);for(let i=0;i<q.length;i+=3){q[i]+=dx;q[i+1]+=dy}for(const v of q)t.push(v)};
 const rr=(x,w,d,r)=>{x.beginPath();x.roundRect(-w/2,-d/2,w,d,Math.max(0,Math.min(r,w/2,d/2)));x.fill()};
 const memo=(k,f)=>{if(!C.has(k))C.set(k,f());return C.get(k)};
 /* Fuss je Feld: Band-Breite am schmalsten Punkt (Unterkante) -> passt sicher in die Grundplatte */
 const fb=[];for(let k=0;k<8;k++)fb.push([k*.1,(k+1)*.1,FT[0]+FT[2]-k*.1]);fb.push([FT[0],FT[0]+FT[1],FT[2]]);for(let k=0;k<10;k++)fb.push([FT[0]+FT[1]+k*.215,FT[0]+FT[1]+(k+1)*.215,FT[2]-k*.215]);
 for(const[a,b,ins]of fb){const rg=memo('f'+ins.toFixed(3),()=>R(GF,GF,x=>rr(x,GF-BW-2*ins,GF-BW-2*ins,Math.max(.8,RB-ins))));
  for(let i=0;i<X;i++)for(let j=0;j<Y;j++)ex(rg,a,b,(i-(X-1)/2)*GF,(j-(Y-1)/2)*GF)}
 /* Boden ueber den Fuessen (ueberbrueckt nur die 0.5-mm-Fugen), dann Waende */
 ex(memo('s'+W+'|'+D,()=>R(W,D,x=>rr(x,W,D,RB))),FH,FLZ);
 const INS0=2.85-.25,zS=lip?H-Math.max(0,INS0-wt):H; /* Stapelrand-Unterkante ragt INS0 nach innen: darunter 45°-Stuetze */
 const wall=ins=>memo('w'+W+'|'+D+'|'+ins.toFixed(3),()=>R(W,D,x=>{rr(x,W,D,RB);x.globalCompositeOperation='destination-out';rr(x,W-2*ins,D-2*ins,Math.max(.5,RB-ins))}));
 ex(wall(wt),FLZ,zS);
 /* Faecher: einzelne Trennwaende (ueberlappen die Aussenwand; viele Loecher in einer Flaeche kann die Triangulierung nicht) */
 const iw=W-2*wt,id=D-2*wt,dw=Math.max(.8,wt*.8);
 for(let k=1;k<cx;k++)ex(memo('dx'+id+'|'+dw,()=>R(dw+1,id+1,x=>x.fillRect(-dw/2,-id/2-.2,dw,id+.4))),FLZ,zS,-iw/2+k*iw/cx,0);
 for(let k=1;k<cy;k++)ex(memo('dy'+iw+'|'+dw,()=>R(iw+1,dw+1,x=>x.fillRect(-iw/2-.2,-dw/2,iw+.4,dw))),FLZ,zS,0,-id/2+k*id/cy);
 let Ht=H;if(lip){let z=zS;while(z<H-1e-6){const z1=Math.min(H,z+.2);ex(wall(Math.min(INS0,wt+(z-zS))),z,z1);z=z1}
  const lb=[];for(let k=0;k<7;k++)lb.push([k*.1,(k+1)*.1,INS0-(k+1)*.1]);lb.push([PB[0],PB[0]+PB[1],2.15-.25]);const n2=8,st=(2.15-LTOP)/n2; /* Oeffnung je Band an der Oberkante (groesser) -> Fuss passt sicher */
  for(let k=0;k<n2;k++)lb.push([PB[0]+PB[1]+k*st,PB[0]+PB[1]+(k+1)*st,2.15-.25-(k+1)*st]);
  for(const[a,b,ins]of lb)ex(wall(Math.max(.5,ins)),H+a,H+b);Ht=H+PB[0]+PB[1]+(2.15-LTOP)}
 return{t,W,D,H,Ht}}
/* Anordnung: Kisten mit gemerkter Position (aus der Aufteilung) zuerst, dann groesste zuerst an die erste freie Stelle, notfalls gedreht.
   Bleibt etwas uebrig, wird alles ohne gemerkte Positionen neu gepackt und das bessere Ergebnis genommen. */
function packBins(nx,ny,bins){const run=usePos=>{const occ=Array.from({length:ny},()=>Array(nx).fill(-1)),pl=[],bad=[];
  const fits=(x,y,w,d)=>{if(x<0||y<0||x+w>nx||y+d>ny)return false;for(let j=y;j<y+d;j++)for(let i=x;i<x+w;i++)if(occ[j][i]>=0)return false;return true};
  const put=(i,o)=>{for(let j=o.y;j<o.y+o.d;j++)for(let k=o.x;k<o.x+o.w;k++)occ[j][k]=i;pl.push({i,...o})};
  const rest=[];bins.forEach((b,i)=>{if(usePos&&b.x!=null&&fits(b.x,b.y,b.w,b.d))put(i,{x:b.x,y:b.y,w:b.w,d:b.d,rot:0});else rest.push(i)});
  rest.sort((a,b)=>bins[b].w*bins[b].d-bins[a].w*bins[a].d||a-b);
  for(const i of rest){const b=bins[i];let ok=null;
   for(const rot of b.w===b.d?[0]:[0,1]){const w=rot?b.d:b.w,d=rot?b.w:b.d;for(let y=0;y<ny&&!ok;y++)for(let x=0;x<nx&&!ok;x++)if(fits(x,y,w,d))ok={x,y,w,d,rot};if(ok)break}
   if(ok)put(i,ok);else bad.push(i)}
  return{pl,bad,free:occ.flat().filter(v=>v<0).length}};
 const a=run(true);if(!a.bad.length)return a;const b=run(false);return b.bad.length<a.bad.length?b:a}
/* Neue Aufteilung des Rasters in Kisten: Reihen/Spalten ~sz Felder (max. 5), rnd = Groessen streuen */
function genBins(nx,ny,sz,rnd){const cut=n=>{const o=[];let r=n;while(r>0){let k=rnd?Math.max(1,Math.min(MB(),sz+Math.floor(Math.random()*3)-1)):Math.min(MB(),sz);
  if(!rnd&&r-k>0&&r-k<sz)k=Math.min(MB(),Math.ceil(r/Math.ceil(r/sz)));k=Math.min(k,r);o.push(k);r-=k}return o};
 const bins=[];let y=0;for(const d of cut(ny)){let x=0;for(const w of cut(nx)){bins.push({w,d,cx:1,cy:1,x,y});x+=w}y+=d}return bins}
async function buildPlate(res,tol){const P=rsPlan();if(P.nx<1||P.ny<1)return{ok:false,err:tr('eSmall'),parts:[],units:[],info:{}};
 if(!Array.isArray(S.bins))S.bins=genBins(P.nx,P.ny,+S.bsz||2,false);
 const pp=await platePieces(P,res,tol),np=pp.parts.length,parts=pp.parts,units=[[Math.round(Math.max(+S.W,+S.D)),Math.round(Math.min(+S.W,+S.D)),0]];let pk={pl:[],bad:[],free:0};
 if(S.bon){const U=Math.max(2,Math.min(20,S.U|0)),lip=!!+S.lip,wt=Math.max(.8,Math.min(2.4,+S.wt||1.2)),C=new Map(),G=new Map();pk=packBins(P.nx,P.ny,S.bins);
  for(const q of pk.pl){const b=S.bins[q.i],cx=Math.max(1,Math.min(6,(q.rot?b.cy:b.cx)|0)),cy=Math.max(1,Math.min(6,(q.rot?b.cx:b.cy)|0)),k=q.w+'x'+q.d+'|'+cx+'x'+cy;
   if(!G.has(k)){const g=binTris(q.w,q.d,U,cx,cy,lip,wt,res,tol,C);G.set(k,{key:'cBin',name:'Kiste '+q.w+'x'+q.d+'x'+U+(cx*cy>1?' '+cx+'x'+cy+' Faecher':''),tris:Float32Array.from(g.t),asm:[],qty:0,Ht:g.Ht})}
   const g=G.get(k),ox=P.l+q.x*GF+q.w*GF/2-pp.Wt/2,oy=P.f+q.y*GF+q.d*GF/2-pp.Dt/2;g.asm.push((X,Y,Z)=>[X+ox,Y+oy,Z+pp.F]);g.qty++;units.push([Math.max(q.w,q.d),Math.min(q.w,q.d),U])}
  parts.push(...G.values())}
 return{ok:true,err:'',parts,units,info:{...P,H:pp.F+PH-.25,n:np,bins:pk.pl.length,free:S.bon?pk.free:0,bad:S.bon?pk.bad:[],pl:S.bon?pk.pl:[]}}}

/* ================= Raster: Oberflaeche, Vorschau ================= */
function arrange(parts,mode){return mode==='asm'?parts.flatMap(p=>p.asm.map(f=>({...p,tris:xf(p.tris,f)}))):arrangePrint(parts)}
function ui(){if(!featOn('boden'))S.floor=0;
 let c=card('rsSize');rng(c,'W','rsW',60,800,1,'mm');rng(c,'D','rsD',60,800,1,'mm');
 {const l=document.createElement('label'),t=document.createElement('span'),sl=document.createElement('select');t.textContent=tr('bedSel');for(const v of[180,220,256,300]){const op=document.createElement('option');op.value=v;op.textContent=tr('bed'+v);if(v===BEDR())op.selected=true;sl.append(op)}
  sl.onchange=()=>{try{localStorage.setItem('mn-bed',sl.value)}catch(e){}S.bins=null;changed();buildUI()};l.append(t,sl);l.classList.add('xp');c.append(l)}
 c=card('rsAl');seg(c,'al','rsAl',[['c','al_c'],['l','al_l']]);
 c=card('rkBins');seg(c,'bon','',[[1,'bon_1'],[0,'bon_0']]);if(+S.bon){rng(c,'bsz','rkBsz',1,MB(),1,'');rng(c,'U','rkU',2,20,1,'');seg(c,'lip','rkLip',[[1,'lipY'],[0,'lipN']]);rng(c,'wt','rkWall',.8,2.4,.2,'mm');c.lastChild.classList.add('xp');
  const ar=document.createElement('div');ar.className='addrow';const ab=document.createElement('button');ab.className='btn';ab.dataset.k='rkAdd';ab.onclick=()=>{S.bins.push({w:1,d:1,cx:1,cy:1});RSEL=S.bins.length-1;changed();buildUI()};
  const rb=document.createElement('button');rb.className='btn';rb.dataset.k='rkRand';rb.onclick=()=>{if(!confirm(tr('rkRandQ')))return;const P=rsPlan();S.bins=genBins(P.nx,P.ny,+S.bsz||2,true);RSEL=null;changed();buildUI()};ar.append(ab,rb);c.append(ar);
  const tv=document.createElement('div');tv.id='rtv';const ed=document.createElement('div');ed.id='rted';c.append(tv,ed);renderEd()}
 if(featOn('boden')){c=card('rsFloor');seg(c,'floor','rsFloor',[[0,'fl_0'],[1,'fl_1']])}
 c=card('colors');const cc=document.createElement('div');cc.className='colors';
 ['cBase','cBin'].forEach(k=>{const l=document.createElement('label'),s=document.createElement('span');s.dataset.k=k;const i=document.createElement('input');i.type='color';i.value=S[k];i.oninput=()=>{S[k]=i.value;draw();save()};l.append(s,i);cc.append(l)});c.append(cc);
 const n=document.createElement('p');n.className='note';n.dataset.k='gfNote';c.append(n);
 cartCard()}
/* Draufsicht: Kisten antippen = bearbeiten, freies Feld antippen = neue 1x1-Kiste dort; gestrichelt = Trennfugen der Plattenteile */
let RSEL=null;
function topView(){const e=document.getElementById('rtv');if(!e||!built||!built.ok)return;const i=built.info,u=10,W=i.nx*u,D=i.ny*u,Y=y=>D-y*u;
 const fill=S.cBin||'#c8714f',occ=new Set();(i.pl||[]).forEach(q=>{for(let x=q.x;x<q.x+q.w;x++)for(let y=q.y;y<q.y+q.d;y++)occ.add(x+','+y)});
 let h=`<svg viewBox="-1 -1 ${W+2} ${D+2}" style="width:100%;max-height:260px;touch-action:manipulation">`;
 for(let x=0;x<i.nx;x++)for(let y=0;y<i.ny;y++)if(!occ.has(x+','+y))h+=`<rect class="rfree" data-x="${x}" data-y="${y}" x="${x*u+.6}" y="${Y(y+1)+.6}" width="${u-1.2}" height="${u-1.2}" rx="1.2" fill="none" stroke="#999" stroke-dasharray="1 1" stroke-width=".3" style="cursor:pointer"/><text x="${x*u+u/2}" y="${Y(y)-u/2+1.5}" text-anchor="middle" font-size="4" fill="#999" pointer-events="none">+</text>`;
 (i.pl||[]).forEach(q=>{const on=q.i===RSEL;h+=`<g class="rbin" data-i="${q.i}" style="cursor:pointer"><rect x="${q.x*u+.5}" y="${Y(q.y+q.d)+.5}" width="${q.w*u-1}" height="${q.d*u-1}" rx="1.5" fill="${fill}" fill-opacity="${on?.95:.55}" stroke="${on?'#222':'#fff'}" stroke-width="${on?.8:.3}"/><text x="${(q.x+q.w/2)*u}" y="${Y(q.y+q.d/2)+1.6}" text-anchor="middle" font-size="4.5" fill="#fff" pointer-events="none">${q.i+1}</text></g>`});
 for(const[ix]of(i.gx||[]).slice(1))h+=`<line x1="${ix*u}" y1="-1" x2="${ix*u}" y2="${D+1}" stroke="#333" stroke-width=".4" stroke-dasharray="2 1.5" pointer-events="none"/>`;
 for(const[iy]of(i.gy||[]).slice(1))h+=`<line x1="-1" y1="${Y(iy)}" x2="${W+1}" y2="${Y(iy)}" stroke="#333" stroke-width=".4" stroke-dasharray="2 1.5" pointer-events="none"/>`;
 e.innerHTML=h+'</svg>';
 e.querySelectorAll('.rbin').forEach(g=>g.onclick=()=>{RSEL=+g.dataset.i;topView();renderEd()});
 e.querySelectorAll('.rfree').forEach(r=>r.onclick=()=>{S.bins.push({w:1,d:1,cx:1,cy:1,x:+r.dataset.x,y:+r.dataset.y});RSEL=S.bins.length-1;changed();renderEd()})}
function renderEd(){const e=document.getElementById('rted');if(!e)return;e.innerHTML='';const b=(S.bins||[])[RSEL];if(!b){const n=document.createElement('p');n.className='note';n.dataset.k='rkTap';n.textContent=tr('rkTap');e.append(n);return}
 const opt=(v,n,f)=>{const s=document.createElement('select');for(let k=1;k<=n;k++){const o=document.createElement('option');o.value=k;o.textContent=k;if(k==v)o.selected=true;s.append(o)}s.onchange=()=>{f(+s.value);changed()};return s};
 const r=document.createElement('div');r.className='mrow rkrow';const t=document.createElement('b');t.textContent=tr('rkBin')+' '+(RSEL+1)+' ';
 const sp=x=>{const s=document.createElement('span');s.textContent=x;return s};
 const del=document.createElement('button');del.className='mini';del.textContent='✕';del.title=tr('rkDel');del.onclick=()=>{S.bins.splice(RSEL,1);RSEL=null;changed();renderEd()};
 r.append(t,opt(b.w,MB(),v=>b.w=v),sp(' × '),opt(b.d,MB(),v=>b.d=v),sp(' '+tr('rkCells')+' · '+tr('rkComp')+' '),opt(b.cx,6,v=>b.cx=v),sp(' × '),opt(b.cy,6,v=>b.cy=v),del);e.append(r)}
function present(reframe){if(!built)return;const arr=built.ok?arrange(built.parts,S.view):[];
 setMeshes(arr.map(p=>({...p,tris:clean(p.tris)})));if(reframe&&arr.length)frame(arr);draw();
 document.querySelectorAll('.vt button').forEach(b=>b.classList.toggle('on',b.dataset.v===S.view));
 const i=built.info||{},mass=built.ok?built.parts.reduce((s,p)=>s+Math.abs(volume(p.tris))*(p.qty||1),0)/1000*1.24:0,f1=v=>(+v).toFixed(1);
 document.getElementById('stats').innerHTML=built.ok?[[tr('sGrid'),i.nx+' × '+i.ny],[tr('sParts'),i.n],[tr('sBins'),i.bins||0],[tr('sMat'),'≈ '+Math.round(mass)+' g']].map(a=>`<div class="stat"><span>${a[0]}</span><strong>${a[1]}</strong></div>`).join(''):'';
 topView();status.innerHTML=built.ok?trf('rsInfo',i.nx,i.ny,f1(i.l),f1(i.r),f1(i.f),f1(i.b),i.n)+(i.bad&&i.bad.length?'<br><b>'+trf('rkNoFit',i.bad.map(k=>tr('rkBin')+' '+(k+1)).join(', '))+'</b>':i.free?'<br><span class="note">'+trf('rkFree',i.free)+'</span>':'')+'<br><span class="note">'+tr('rsGap')+'</span>':'<b>'+built.err+'</b>';renderCart()}

/* ================= Raster: Produktbeschreibung fuer den Kern ================= */
const RS_KEYS=['W','D','al','floor','bon','bsz','U','lip','wt','bins','cBase','cBin'];
let lastNN=(()=>{const P=rsPlan();return P.nx+'x'+P.ny})(),lastBsz=+S.bsz||2; /* Raster oder Kistengroesse geaendert -> Kisten neu aufteilen (wie bei ModuNest automatisch) */
const PRODUCT={id:'raster',name:'Raster',file:'Raster',store:'rs',dimKeys:['cBase'],
 onChange(){const P=rsPlan(),nn=P.nx+'x'+P.ny;if(P.nx>0&&P.ny>0&&((lastNN!==null&&nn!==lastNN)||(lastBsz!==null&&+S.bsz!==lastBsz)||!Array.isArray(S.bins))){S.bins=genBins(P.nx,P.ny,+S.bsz||2,false);RSEL=null;setTimeout(renderEd)}lastNN=nn;lastBsz=+S.bsz},
 color:p=>S[p.key],
 unit:{one:['Platte','plate'],n:['Platte(n)','plate(s)'],many:['Platten','plates']},
 build:(res,tol)=>buildPlate(res,tol),
 notice:'Grundplatte und Kisten sind kompatibel mit Gridfinity, einem offenen System von Zack Freedman.\nKeine Verbindung zu Zack Freedman oder Voidstar Lab LLC. Geometrie eigenstaendig nach den oeffentlichen Massen erstellt.\n\nGridfinity: MIT License, Copyright (c) 2023 Zachary Freedman and Voidstar Lab LLC.\n',
 snap(){const o={};RS_KEYS.forEach(k=>o[k]=S[k]);return{S:o}},
 applySnap(s){Object.assign(S,JSON.parse(JSON.stringify(s.S)));const P=rsPlan();lastNN=P.nx+'x'+P.ny;lastBsz=+S.bsz},
 snapName:s=>'Raster '+s.S.W+'x'+s.S.D,
 snapCount:s=>1+(s.S.bon&&Array.isArray(s.S.bins)?s.S.bins.length:0),
 snapInfo:s=>tr('cartOne')+(s.S.bon&&s.S.bins?' + '+s.S.bins.length+' '+tr('sBins'):'')+' · '+s.S.W+' × '+s.S.D+' mm'};
