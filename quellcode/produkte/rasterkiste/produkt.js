/* ================= Raster-Kiste (Gridfinity-kompatibel): Texte und Zustand =================
   Kiste 42*n - 0.5 mm, Ecken r 3.75, Hoehe 7 mm je Einheit (ohne Stapelrand). Fuss je Feld von unten 0.8 (45°) + 1.8 + 2.15 (45°) = 4.75 mm.
   Stapelrand oben = Aufnahmeprofil der Grundplatte (oben bei 0.5-mm-Kante abgeschnitten), darunter 45°-Stuetze nach innen.
   Gridfinity: offenes System von Zack Freedman (MIT-Lizenz); eigene Geometrie nach den Massen, keine fremden Dateien. */
Object.assign(L,{
 tag:['Dein Raster. Deine Kisten. Dein Druck.','Your grid. Your bins. Your print.'],
 help1:['Wähle Grösse in Rasterfeldern (je 42 mm) und Höhe in Einheiten (je 7 mm). Fächer teilen die Kiste innen.','Choose the size in grid cells (42 mm each) and the height in units (7 mm each). Compartments divide the inside.'],
 help2:['Die Kisten passen auf jede Gridfinity-Grundplatte, z. B. unsere Raster-Grundplatte nach Mass.','The bins fit any Gridfinity baseplate, e.g. our made-to-measure grid baseplate.'],
 help3:['Unter «Herunterladen» holst du die Dateien. Dafür brauchst du die Bestellnummer deines Etsy-Kaufs. Jede Kiste zählt 1.','Get the files under «Download». You need the order number of your Etsy purchase. Each bin counts 1.'],
 help4:['Drucke ohne Stützen, aufrecht. Mehrere Kisten: im Warenkorb sammeln.','Print upright without supports. Several bins: collect them in the cart.'],
 helpTip:['Tipp: Bei jedem Abschnitt erklärt dir das ⓘ, was die Einstellungen bewirken.','Tip: in every section, the ⓘ explains what the settings do.'],
 rkSize:['Grösse','Size'],rkX:['Breite (Felder)','Width (cells)'],rkY:['Tiefe (Felder)','Depth (cells)'],rkU:['Höhe (Einheiten à 7 mm)','Height (7 mm units)'],
 rkComp:['Fächer','Compartments'],rkCx:['Spalten','Columns'],rkCy:['Reihen','Rows'],
 rkOpt:['Ausführung','Options'],rkLip:['Stapelrand oben','Stacking lip'],rkWall:['Wandstärke','Wall thickness'],
 cBase:['Kiste','Bin'],
 sSize:['Aussenmass','Outside'],sMat:['Filament max.','Filament max.'],sCells:['Fächer','Compartments'],
 rkInfo:['{0} × {1} Felder, {2} Einheiten = {3} × {4} × {5} mm{6}','{0} × {1} cells, {2} units = {3} × {4} × {5} mm{6}'],rkLipH:[' + Stapelrand',' + stacking lip'],lipY:['mit Stapelrand','with lip'],lipN:['ohne','without'],
 i_rkSize:['1 Feld = 42 mm. Höhe in Einheiten zu 7 mm, gemessen ohne Stapelrand (wie bei Gridfinity üblich). Grösste Kiste 5 × 5 Felder (Druckbett).','1 cell = 42 mm. Height in 7 mm units, measured without the stacking lip (as usual for Gridfinity). Largest bin 5 × 5 cells (print bed).'],
 i_rkComp:['Teilt die Kiste innen in gleich grosse Fächer.','Divides the inside into equal compartments.'],
 i_rkOpt:['Stapelrand: oben passt der Fuss einer anderen Kiste hinein, so lassen sich Kisten stapeln. Ohne Rand ist die Kiste niedriger.','Stacking lip: the foot of another bin fits on top, so bins can be stacked. Without it the bin is lower.'],
 i_colors:['Die Farbe ist nur für die Vorschau.','The colour is for the preview only.'],
 gfNote:['Kompatibel mit Gridfinity, einem offenen System von Zack Freedman (MIT-Lizenz). Keine Verbindung zu Zack Freedman oder Voidstar Lab LLC.','Compatible with Gridfinity, an open system by Zack Freedman (MIT licence). Not affiliated with Zack Freedman or Voidstar Lab LLC.'],
 next2:['Aufrecht ohne Stützen drucken. 2–3 Wandlinien reichen.','Print upright without supports. 2–3 wall lines are enough.'],
 cartOne:['Raster-Kiste','Grid bin']
});
const S={X:2,Y:1,U:3,cx:1,cy:1,lip:1,wt:1.2,view:'asm',hide:{},cBase:'#86ab7c'};
try{Object.assign(S,JSON.parse(localStorage.getItem('rk-state')||'{}'))}catch(e){}

/* ================= Raster-Kiste: Geometrie ================= */
const GF=42,BW=.5,RB=3.75,FT=[.8,1.8,2.15],FH=4.75,UH=7,LP=[.7,1.8,2.15],LTOP=.75,MAXN=5;
async function buildBin(res,tol){const X=Math.max(1,Math.min(MAXN,S.X|0)),Y=Math.max(1,Math.min(MAXN,S.Y|0)),U=Math.max(2,Math.min(20,S.U|0)),cx=Math.max(1,Math.min(6,S.cx|0)),cy=Math.max(1,Math.min(6,S.cy|0));
 const lip=S.lip&&featOn('lip'),wt=Math.max(.8,Math.min(2.4,+S.wt||1.2)),W=X*GF-BW,D=Y*GF-BW,H=U*UH,FLZ=FH+1.2,t=[],R=(w,d,draw)=>pzRings(w+4,d+4,res,tol,draw);
 const ex=(rg,a,b,dx=0,dy=0)=>{const q=extrude(rg,a,b);for(let i=0;i<q.length;i+=3){q[i]+=dx;q[i+1]+=dy}for(const v of q)t.push(v)};
 const rr=(x,w,d,r)=>{x.beginPath();x.roundRect(-w/2,-d/2,w,d,Math.max(0,Math.min(r,w/2,d/2)));x.fill()};
 /* Fuss je Feld: Band-Breite am schmalsten Punkt (Unterkante) -> passt sicher in die Grundplatte */
 const fb=[];for(let k=0;k<8;k++)fb.push([k*.1,(k+1)*.1,FT[0]+FT[2]-k*.1]);fb.push([FT[0],FT[0]+FT[1],FT[2]]);for(let k=0;k<10;k++)fb.push([FT[0]+FT[1]+k*.215,FT[0]+FT[1]+(k+1)*.215,FT[2]-k*.215]);
 const FOOT=new Map();for(const[a,b,ins]of fb){const k=ins.toFixed(3);if(!FOOT.has(k))FOOT.set(k,R(GF,GF,x=>rr(x,GF-BW-2*ins,GF-BW-2*ins,Math.max(.8,RB-ins))));
  for(let i=0;i<X;i++)for(let j=0;j<Y;j++)ex(FOOT.get(k),a,b,(i-(X-1)/2)*GF,(j-(Y-1)/2)*GF)}
 /* Boden ueber den Fuessen (ueberbrueckt nur die 0.5-mm-Fugen), dann Waende */
 ex(R(W,D,x=>rr(x,W,D,RB)),FH,FLZ);
 const INS0=2.85-.25,zS=lip?H-Math.max(0,INS0-wt):H; /* Stapelrand-Unterkante ragt INS0 nach innen: darunter 45°-Stuetze */
 const wall=(ins)=>R(W,D,x=>{rr(x,W,D,RB);x.globalCompositeOperation='destination-out';rr(x,W-2*ins,D-2*ins,Math.max(.5,RB-ins))});
 ex(wall(wt),FLZ,zS);
 /* Faecher: einzelne Trennwaende (ueberlappen die Aussenwand), bis unter den Stapelrand */
 const iw=W-2*wt,id=D-2*wt,dw=Math.max(.8,wt*.8),top=zS;
 for(let k=1;k<cx;k++)ex(R(dw+1,id+1,x=>x.fillRect(-dw/2,-id/2-.2,dw,id+.4)),FLZ,top,-iw/2+k*iw/cx,0);
 for(let k=1;k<cy;k++)ex(R(iw+1,dw+1,x=>x.fillRect(-iw/2-.2,-dw/2,iw+.4,dw)),FLZ,top,0,-id/2+k*id/cy);
 if(lip){/* Stuetze 45° nach innen bis zur Unterkante des Randprofils, dann Profil 0.7/1.8/2.15 (Einzug ab Kistenaussenseite = Grundplatte - 0.25) */
  let z=zS;while(z<H-1e-6){const z1=Math.min(H,z+.2);ex(wall(Math.min(INS0,wt+(z-zS))),z,z1);z=z1}
  const lb=[];for(let k=0;k<7;k++)lb.push([k*.1,(k+1)*.1,INS0-(k+1)*.1]);lb.push([LP[0],LP[0]+LP[1],2.15-.25]);const n2=8,st=(2.15-LTOP)/n2; /* Oeffnung je Band an der Oberkante (groesser) -> Fuss passt sicher */
  for(let k=0;k<n2;k++)lb.push([LP[0]+LP[1]+k*st,LP[0]+LP[1]+(k+1)*st,2.15-.25-(k+1)*st]);
  for(const[a,b,ins]of lb)ex(wall(Math.max(.5,ins)),H+a,H+b)}
 const Ht=lip?H+LP[0]+LP[1]+(2.15-LTOP):H;
 return{ok:true,err:'',parts:[{key:'cBase',name:'Kiste '+X+'x'+Y+'x'+U,tris:Float32Array.from(t),asm:[(X0,Y0,Z0)=>[X0,Y0,Z0]]}],units:[[Math.max(X,Y),Math.min(X,Y),U]],info:{X,Y,U,W,D,H,Ht,lip,n:cx*cy}}}

/* ================= Raster-Kiste: Oberflaeche, Vorschau ================= */
function arrange(parts,mode){return mode==='asm'?parts.flatMap(p=>p.asm.map(f=>({...p,tris:xf(p.tris,f)}))):arrangePrint(parts)}
function ui(){if(!featOn('lip'))S.lip=0;
 let c=card('rkSize');rng(c,'X','rkX',1,MAXN,1,'');rng(c,'Y','rkY',1,MAXN,1,'');rng(c,'U','rkU',2,20,1,'');
 c=card('rkComp');rng(c,'cx','rkCx',1,6,1,'');rng(c,'cy','rkCy',1,6,1,'');
 c=card('rkOpt');if(featOn('lip'))seg(c,'lip','rkLip',[[1,'lipY'],[0,'lipN']]);rng(c,'wt','rkWall',.8,2.4,.2,'mm');c.lastChild.classList.add('xp');
 c=card('colors');const cc=document.createElement('div');cc.className='colors';
 ['cBase'].forEach(k=>{const l=document.createElement('label'),s=document.createElement('span');s.dataset.k=k;const i=document.createElement('input');i.type='color';i.value=S[k];i.oninput=()=>{S[k]=i.value;draw();save()};l.append(s,i);cc.append(l)});c.append(cc);
 const n=document.createElement('p');n.className='note';n.dataset.k='gfNote';c.append(n);
 cartCard()}
function present(reframe){if(!built)return;const arr=built.ok?arrange(built.parts,S.view):[];
 setMeshes(arr.map(p=>({...p,tris:clean(p.tris)})));if(reframe&&arr.length)frame(arr);draw();
 document.querySelectorAll('.vt button').forEach(b=>b.classList.toggle('on',b.dataset.v===S.view));
 const i=built.info||{},mass=built.ok?built.parts.reduce((s,p)=>s+Math.abs(volume(p.tris)),0)/1000*1.24:0,f1=v=>(+v).toFixed(1);
 document.getElementById('stats').innerHTML=built.ok?[[tr('sSize'),f1(i.W)+' × '+f1(i.D)+' × '+f1(i.Ht)],[tr('sCells'),i.n],[tr('sMat'),'≈ '+Math.round(mass)+' g']].map(a=>`<div class="stat"><span>${a[0]}</span><strong>${a[1]}</strong></div>`).join(''):'';
 status.innerHTML=built.ok?trf('rkInfo',i.X,i.Y,i.U,f1(i.W),f1(i.D),f1(i.H),i.lip?tr('rkLipH'):''):'<b>'+built.err+'</b>';renderCart()}

/* ================= Raster-Kiste: Produktbeschreibung fuer den Kern ================= */
const RK_KEYS=['X','Y','U','cx','cy','lip','wt','cBase'];
const PRODUCT={id:'rasterkiste',name:'Raster-Kiste',file:'Raster-Kiste',store:'rk',dimKeys:['cBase'],
 unit:{one:['Kiste','bin'],n:['Kiste(n)','bin(s)'],many:['Kisten','bins']},
 build:(res,tol)=>buildBin(res,tol),
 notice:'Diese Kiste ist kompatibel mit Gridfinity, einem offenen System von Zack Freedman.\nKeine Verbindung zu Zack Freedman oder Voidstar Lab LLC. Geometrie eigenstaendig nach den oeffentlichen Massen erstellt.\n\nGridfinity: MIT License, Copyright (c) 2023 Zachary Freedman and Voidstar Lab LLC.\n',
 snap(){const o={};RK_KEYS.forEach(k=>o[k]=S[k]);return{S:o}},
 applySnap(s){Object.assign(S,s.S)},
 snapName:s=>'Kiste '+s.S.X+'x'+s.S.Y+'x'+s.S.U,
 snapCount:()=>1,
 snapInfo:s=>tr('cartOne')+' · '+s.S.X+' × '+s.S.Y+' × '+s.S.U+'u'};
