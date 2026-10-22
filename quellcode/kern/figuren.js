/* ================= Gemeinsam: Buchstaben und Figuren (Namenspuzzle, Hofpuzzle, Schilder, Stecker) ================= */
Object.assign(L,{
 sh_kuh:['Hochlandrind','Highland cow'],sh_schaf:['Schaf','Sheep'],sh_schwein:['Schwein','Pig'],sh_huhn:['Huhn','Chicken'],sh_hase:['Hase','Bunny'],
 sh_pferd:['Pferd','Horse'],sh_hund:['Hund','Dog'],sh_katze:['Katze','Cat'],sh_ziege:['Ziege','Goat'],sh_ente:['Ente','Duck'],sh_traktor:['Traktor','Tractor'],sh_scheune:['Scheune','Barn'],
 sh_blatt:['Blatt','Leaf'],sh_karotte:['Karotte','Carrot'],sh_tomate:['Tomate','Tomato'],
 sh_herz:['Herz','Heart'],sh_stern:['Stern','Star'],sh_sonne:['Sonne','Sun'],sh_blume:['Blume','Flower'],sh_wolke:['Wolke','Cloud'],sh_baum:['Baum','Tree'],sh_fisch:['Fisch','Fish'],sh_haus:['Haus','House'],
});
const PZ_FONT='KFModern';
const pzHash=s=>{let h=2166136261;for(const c of s){h^=c.charCodeAt(0);h=Math.imul(h,16777619)>>>0}return h%100000000};
const pzCircle=(cx,cy,r,n=40)=>[Array.from({length:n},(_,i)=>[cx+r*Math.cos(i/n*2*Math.PI),cy+r*Math.sin(i/n*2*Math.PI)])];
// Ringe aus einer Zeichnung; winzige Artefakt-Ringe (Kantenrauschen, < 0.5 mm²) werden verworfen
const pzRings=(wm,hm,res,tol,draw)=>{const k=mk(wm,hm,res);k.x.scale(1,-1);draw(k.x,k);return marching(fieldOf(k),k.c.width,k.c.height,res).map(q=>simplify(q,tol)).filter(r=>r.length>=3&&Math.abs(area(r))>=.5)};
// Pfad aus Ringen (Weltkoordinaten) – fuer Vertiefungen im Brett
const pzPath=(x,R,dx,dy)=>{x.beginPath();for(const r of R){r.forEach((p,i)=>i?x.lineTo(p[0]+dx,p[1]+dy):x.moveTo(p[0]+dx,p[1]+dy));x.closePath()}};
// Abgetrennte Teile (Ä/Ö/Ü-Punkte) mit dem groessten Teil verbinden: keine losen Kleinteile
function pzJoin(k){const{c,x}=k,w=c.width,h=c.height,d=x.getImageData(0,0,w,h).data,lab=new Int32Array(w*h).fill(-1),comps=[];
 for(let i=0;i<w*h;i++){if(d[i*4+3]<128||lab[i]>=0)continue;const st=[i],px=[];lab[i]=comps.length;
  while(st.length){const q=st.pop();px.push(q);const qx=q%w,qy=(q/w)|0;for(const[nx,ny]of[[qx+1,qy],[qx-1,qy],[qx,qy+1],[qx,qy-1]]){if(nx<0||ny<0||nx>=w||ny>=h)continue;const n=ny*w+nx;if(lab[n]<0&&d[n*4+3]>=128){lab[n]=comps.length;st.push(n)}}}
  comps.push(px)}
 if(comps.length<2)return;comps.sort((a,b)=>b.length-a.length);const main=comps[0],step=Math.max(1,(main.length/1500)|0);
 x.save();x.setTransform(1,0,0,1,0,0);x.lineCap='round';
 for(const cp of comps.slice(1)){let best=1e18,A=0,B=0;const st2=Math.max(1,(cp.length/300)|0);
  for(let a=0;a<cp.length;a+=st2)for(let b=0;b<main.length;b+=step){const p=cp[a],q=main[b],dd=(p%w-q%w)**2+(((p/w)|0)-((q/w)|0))**2;if(dd<best){best=dd;A=p;B=q}}
  let mnx=1e9,mxx=-1e9;for(const p of cp){mnx=Math.min(mnx,p%w);mxx=Math.max(mxx,p%w)}
  let sx=0,sy=0;for(const p of cp){sx+=p%w;sy+=(p/w)|0}sx/=cp.length;sy/=cp.length;
  x.lineWidth=Math.max(2,(mxx-mnx)*.55);x.beginPath();x.moveTo(sx,sy);x.lineTo(B%w,(B/w)|0);x.stroke()}
 x.restore()}
// Ein Buchstabe als Ringe (mm), x zentriert, Grossbuchstaben-Mitte bei y=0
function pzLetter(ch,fs,capH,res,tol){
 const m=document.createElement('canvas').getContext('2d');m.font=fs+'px '+PZ_FONT;const t=m.measureText(ch);
 const wl=t.actualBoundingBoxLeft,wr=t.actualBoundingBoxRight,W=wl+wr,Hm=fs*1.6;
 const R=pzRings(W+8,Hm,res,tol,(x,k)=>{x.save();x.scale(1,-1);x.font=fs+'px '+PZ_FONT;x.textBaseline='alphabetic';x.fillText(ch,(wl-wr)/2,capH/2);x.restore();pzJoin(k)});
 let y0=1e9,y1=-1e9;for(const r of R)for(const p of r){y0=Math.min(y0,p[1]);y1=Math.max(y1,p[1])}
 return{ch,R,w:W,y0,y1}}
// Stelle fuer den Greifknopf: auf der Strichmitte (Kamm des Randabstands), moeglichst nahe am Ziel.
// Buchstaben (sym): Ziel = Mitte des Umrisses, seitliche Abweichung zaehlt doppelt -> Knopf steht optisch mittig.
// Figuren: Ziel = Schwerpunkt (Teil hebt gerade ab). Gravierte Linien D werden gemieden. Rueckgabe Punkt p, Randabstand d.
function pzDeep(R,D=[],sym=false,needIn){const inR=p=>R.reduce((n,r)=>n+(pip(p,r)?1:0),0)%2===1,inD=p=>D.some(r=>pip(p,r));
 let bx=1e9,by=1e9,Bx=-1e9,By=-1e9,A=0,cx=0,cy=0;
 for(const r of R)for(let i=0,n=r.length;i<n;i++){const a=r[i],b=r[(i+1)%n],c=a[0]*b[1]-b[0]*a[1];A+=c;cx+=(a[0]+b[0])*c;cy+=(a[1]+b[1])*c;
  bx=Math.min(bx,a[0]);by=Math.min(by,a[1]);Bx=Math.max(Bx,a[0]);By=Math.max(By,a[1])}
 cx/=3*A||1;cy/=3*A||1;if(sym){cx=(bx+Bx)/2;cy=(by+By)/2}
 const st=.5,nx=Math.floor((Bx-bx)/st)+1,ny=Math.floor((By-by)/st)+1,G=new Float32Array(nx*ny).fill(-1),E=R.concat(D);let bd=0;
 for(let i=0;i<nx;i++)for(let j=0;j<ny;j++){const x=bx+i*st,y=by+j*st;if(!inR([x,y])||inD([x,y]))continue;let d=1e9;
  for(const r of E)for(let k=0,n=r.length;k<n;k++){const a=r[k],b=r[(k+1)%n],vx=b[0]-a[0],vy=b[1]-a[1],l=vx*vx+vy*vy||1,u=Math.max(0,Math.min(1,((x-a[0])*vx+(y-a[1])*vy)/l));d=Math.min(d,Math.hypot(x-a[0]-u*vx,y-a[1]-u*vy))}
  G[i*ny+j]=d;bd=Math.max(bd,d)}
 const g=(i,j)=>i<0||j<0||i>=nx||j>=ny?-1:G[i*ny+j],need=needIn??(sym?Math.min(3.7,.9*bd):Math.min(6.2,Math.max(Math.min(3.7,.9*bd),.7*bd))),wx=sym?4:1;
 let best=null,bc=1e18;
 for(let i=0;i<nx;i++)for(let j=0;j<ny;j++){const d=g(i,j);if(d<need)continue;
  if(!((d>=g(i-1,j)-.02&&d>=g(i+1,j)-.02)||(d>=g(i,j-1)-.02&&d>=g(i,j+1)-.02)))continue;
  const x=bx+i*st,y=by+j*st,c=wx*(x-cx)**2+(y-cy)**2;if(c<bc){bc=c;best=[x,y,d]}}
 // Figuren: im Umkreis von 4 mm die Stelle mit dem meisten Platz (groesserer Knopf)
 if(best&&!sym){const[x0,y0]=best;for(let i=0;i<nx;i++)for(let j=0;j<ny;j++){const d=g(i,j),x=bx+i*st,y=by+j*st;if(d>best[2]&&(x-x0)**2+(y-y0)**2<=16)best=[x,y,d]}}
 return best?{p:[best[0],best[1]],d:best[2],bd}:{p:[0,0],d:0,bd}}

/* Figuren: Zeichnung in 0..100 (y nach unten, Tiere schauen nach links). Flaechen: C Kreis, E Ellipse (Winkel in Grad),
   S SVG-Pfad (optional mit Rundung rd). Gravur (0.6 mm tief, Linienbreite 1.4 mm): L SVG-Linie, O Punkt (Radius mm).
   Regeln: Beine/Spalten mind. ~6 Einheiten breit (bei 50 mm = 3 mm), Gravur mind. 4 Einheiten vom Rand. */
const PZ_SHAPES={
 kuh:d=>{ // Hochlandrind: Kopf von vorn mit weit ausladenden Hoernern, Stirnlocke ueber den Augen, langes zottiges Fell
  d.S('M36 36 C46 28 66 30 84 30 C94 30 99 37 99 48 C99 58 97 64 94 68 L40 68 C33 62 31 46 36 36 Z');
  for(let x=39;x<=95;x+=6)d.E(x,70,3.8,6.5);d.E(98,58,3.5,7);
  for(const[x,w]of[[40,10],[55,9],[72,9],[87,10]])d.S(`M${x} 70 L${x+w} 70 L${x+w-.5} 88 Q${x+w-.5} 92 ${x+w-3.5} 92 L${x+3} 92 Q${x} 92 ${x+.5} 88 Z`);
  d.S('M96 40 C101 50 101 66 100 76 C103 80 101 86 97 84 C94 82 95 78 97 76 C97 64 96 52 93 44 Z');
  d.S('M10 26 C12 20 32 20 34 26 C36 36 34 44 31 50 C29 56 27 61 22 61 C17 61 15 56 13 50 C10 44 8 36 10 26 Z');
  d.C(13,25,5);d.C(19,22,5.5);d.C(25,22,5.5);d.C(31,25,5);
  d.E(5,35,8,4,15);d.E(39,35,8,4,-15);
  d.S('M14 27 C4 28 -6 25 -9 16 C-11 10 -9 4 -6 1 C-3 4 -3 9 -2 13 C0 19 5 21 14 21 Z',2);
  d.S('M30 27 C40 28 50 25 53 16 C55 10 53 4 50 1 C47 4 47 9 46 13 C44 19 39 21 30 21 Z',2);
  d.L('M15 28 Q16 34 15 40');d.L('M22 27 L22 42');d.L('M29 28 Q28 34 29 40');d.O(19,55,1.1);d.O(25,55,1.1);
  d.L('M90 38 q3 6 0 12');d.L('M48 38 q3 6 0 12');d.L('M60 58 l1 7');d.L('M78 58 l1 7')},
 schaf:d=>{
  d.E(60,46,30,19);for(let k=0;k<22;k++){const a=k/22*6.2832;d.C(60+30*Math.cos(a),46+19*Math.sin(a),6.5)}
  d.C(92,40,5);
  for(const x of [36,50,68,82])d.S(`M${x} 58 L${x+8} 58 L${x+7.5} 84 Q${x+7.5} 88 ${x+5} 88 L${x+2.5} 88 Q${x} 88 ${x} 84 Z`);
  d.S('M34 32 C28 28 18 30 13 38 L6 50 C4 55 6 60 11 60 C15 60 19 58 23 54 L34 46 Z');
  d.C(28,31,6.5);d.C(34,29,6);
  d.E(23,24,9,3.6,-55);
  d.O(19,41,1.5);d.O(9,53,1);d.L('M9 58 Q12 59 14 57');d.L('M33 37 C29 42 29 48 33 53');
  d.L('M74 32 q2 -3 4 0 q2 -3 4 0');d.L('M80 50 q2 -3 4 0 q2 -3 4 0');d.L('M42 54 q2 -3 4 0 q2 -3 4 0')},
 schwein:d=>{
  d.E(58,50,34,22);d.C(28,46,17);d.S('M6 40 Q6 37 9 37 L16 37 L16 57 L9 57 Q6 57 6 54 Z');d.S('M14 40 L20 36 L20 58 L14 54 Z');
  d.S('M24 33 L32 13 Q34 10 37 13 L42 30 Z',3);
  for(const x of [30,44,66,80])d.S(`M${x} 62 L${x+10} 62 L${x+10} 84 Q${x+10} 87 ${x+7} 87 L${x+3} 87 Q${x} 87 ${x} 84 Z`);
  d.S('M90 42 C97 38 100 44 96 48 C93 50 91 46 94 44',3.5);
  d.O(27,40,1.6);d.O(10,44,1.1);d.O(10,50,1.1);d.L('M28 22 L34 31');d.L('M58 34 Q66 40 62 50')},
 huhn:d=>{
  d.S('M28 52 C28 34 46 28 62 36 L82 14 C88 10 94 14 91 22 L88 46 C88 68 70 78 54 78 C40 78 28 68 28 52 Z');
  d.C(32,32,12);d.S('M26 36 L44 36 L44 52 L28 52 Z');
  d.C(25,19,5);d.C(32,17,5.5);d.C(39,20,5);
  d.S('M22 28 L9 33 L22 38 Z',3);d.E(23,45,4,6);
  for(const x of [41,65])d.S(`M${x} 74 L${x+7} 74 L${x+7} 86 L${x+8} 86 Q${x+11} 86 ${x+11} 89 Q${x+11} 92 ${x+8} 92 L${x-6} 92 Q${x-9} 92 ${x-9} 89 Q${x-9} 86 ${x-6} 86 L${x} 86 Z`);
  d.O(30,30,1.6);d.L('M46 54 C54 44 70 46 74 56 C66 64 54 64 46 54');d.L('M54 56 Q62 54 68 57');d.L('M74 34 L84 24')},
 hase:d=>{
  d.E(60,64,28,24);d.E(32,44,16,13.5,-10);
  d.E(33,20,6.5,17,-12);d.E(46,21,6.5,17,18);
  d.C(87,60,8);d.E(36,84,9,5.5);d.E(66,86,20,6);
  d.O(27,41,1.6);d.O(17,46,1.4);d.L('M33 10 L36 26');d.L('M47 11 L44 27');d.L('M60 58 C70 52 80 60 78 74')},
 herz:d=>{d.S('M50 90 C22 70 6 54 6 34 C6 19 17 9 30 9 C39 9 46 14 50 22 C54 14 61 9 70 9 C83 9 94 19 94 34 C94 54 78 70 50 90 Z');
  d.L('M24 26 C20 30 19 36 21 42')},
 stern:d=>{const p=[];for(let k=0;k<10;k++){const a=-Math.PI/2+k*Math.PI/5,r=k%2?21:48;p.push((k?'L':'M')+(50+r*Math.cos(a)).toFixed(1)+' '+(54+r*Math.sin(a)).toFixed(1))}
  d.S(p.join(' ')+'Z',8);d.O(43,52,1.5);d.O(57,52,1.5);d.L('M43 62 Q50 67 57 62')},
 sonne:d=>{d.C(50,50,27);for(let k=0;k<12;k++){const a=k*Math.PI/6,c=Math.cos(a),s=Math.sin(a),t=Math.PI/12;
   d.S(`M${50+24*Math.cos(a-t)} ${50+24*Math.sin(a-t)} L${50+46*c} ${50+46*s} L${50+24*Math.cos(a+t)} ${50+24*Math.sin(a+t)} Z`,5)}
  d.O(38,44,1.8);d.O(62,44,1.8);d.L('M36 62 Q50 72 64 62')},
 blume:d=>{for(let k=0;k<6;k++){const a=k*Math.PI/3;d.E(50+17*Math.cos(a),32+17*Math.sin(a),13,10,k*60)}d.C(50,32,12);
  d.S('M45 44 L55 44 L55 94 L45 94 Z');d.E(37,74,13,7,-30);d.E(63,66,13,7,30);
  d.L('M29 79 L42 71');d.L('M71 71 L58 63')},
 wolke:d=>{d.C(28,56,15);d.C(46,42,20);d.C(67,46,17);d.C(82,58,12);d.S('M16 58 Q14 74 28 74 L80 74 Q94 74 92 60 Z');
  d.L('M30 50 Q40 40 52 42')},
 baum:d=>{for(const[a,b,r]of[[50,26,20],[31,38,15],[69,38,15],[36,55,15],[64,55,15],[50,50,18]])d.C(a,b,r);
  d.S('M44 62 L56 62 L57 80 C58 85 63 87 69 89 Q72 92 68 92 L32 92 Q28 92 31 89 C37 87 42 85 43 80 Z');
  for(const[a,b]of[[34,40],[62,24],[68,48],[40,58]])d.L(`M${a-3} ${b} a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0`)},
 fisch:d=>{d.S('M5 50 C16 30 42 25 60 33 C67 37 71 41 74 45 L90 30 C95 27 99 30 96 35 L88 50 L96 65 C99 70 95 73 90 70 L74 55 C71 59 67 63 60 67 C42 75 16 70 5 50 Z');
  d.S('M30 33 C36 18 52 16 62 34 Z',3);d.S('M40 66 C44 76 52 76 56 66 Z',3);
  d.O(18,46,1.8);d.L('M30 38 C35 45 35 55 30 62');d.L('M42 44 q4 4 0 8');d.L('M52 42 q4 4 0 8');d.L('M47 52 q4 4 0 8');d.L('M57 50 q4 4 0 8')},
 pferd:d=>{d.S('M34 40 C40 32 70 32 84 36 C94 39 96 50 92 58 C88 64 76 64 70 62 L44 62 C36 62 30 54 34 40 Z');
  d.S('M31 54 L17 19 C16 12 26 7 32 12 L52 40 Z');d.S('M23 7 C32 5 38 13 33 21 L20 38 C16 42 7 41 6 35 C5 31 8 28 11 26 Z');
  d.S('M23 10 L24 0 L30 8 Z',2);d.C(32,13,4.5);d.C(37,22,4.5);d.C(42,31,4.5);
  d.S('M91 39 C102 43 104 56 100 66 C98 69 94 68 95 64 C97 57 95 50 88 47 Z');
  for(const x of [37,49,74,85])d.S(`M${x} 58 L${x+7} 58 L${x+7} 87 L${x+8} 92 L${x-1} 92 L${x} 87 Z`);
  d.O(21,18,1.5);d.O(10,32,1.1);d.L('M28 26 L36 40')},
 hund:d=>{d.S('M30 40 C34 34 70 34 80 38 C88 41 88 56 82 60 L36 60 C30 58 28 48 30 40 Z');d.C(24,30,12);
  d.S('M6 30 C6 26 14 25 20 27 L20 37 C14 39 6 36 6 30 Z');d.E(29,33,5,10,15);
  d.S('M80 42 C88 34 92 24 96 20 C99 22 98 26 96 28 C92 34 88 42 84 48 Z',3);
  for(const x of [32,46,66,78])d.S(`M${x} 56 L${x+8} 56 L${x+8} 86 Q${x+11} 86 ${x+11} 89 Q${x+11} 92 ${x+8} 92 L${x} 92 Z`);
  d.O(20,26,1.5);d.O(7,29,1.8);d.L('M33 38 Q36 44 34 50')},
 katze:d=>{d.E(56,64,22,26);d.C(36,33,15);d.S('M23 26 L21 9 L34 19 Z',3);d.S('M39 19 L48 7 L50 23 Z',3);
  d.S('M74 80 C90 84 97 72 93 60 C91 55 86 57 88 62 C90 70 84 75 72 73 Z',2);d.E(44,88,9,5);d.E(64,89,9,4.5);
  d.O(31,31,1.5);d.O(41,31,1.5);d.O(36,37,1);d.L('M33 41 Q36 43 39 41');d.L('M56 50 Q62 62 56 74')},
 ziege:d=>{d.S('M32 40 C36 34 72 34 82 38 C90 42 90 56 84 60 L38 60 C32 58 28 48 32 40 Z');
  d.S('M37 46 L26 24 C24 20 18 18 14 22 L6 34 C4 38 8 42 12 40 L22 36 L30 52 Z');
  d.S('M24 22 C26 12 34 6 42 8 C44 9 43 12 41 12 C35 12 30 16 29 24 Z',2);d.E(29,29,7,3,20);d.S('M9 38 L11 50 L16 40 Z',2);d.S('M83 38 L91 28 L94 32 L87 42 Z',2);
  for(const x of [35,48,69,80])d.S(`M${x} 56 L${x+7} 56 L${x+7} 88 Q${x+7} 92 ${x+4} 92 L${x+3} 92 Q${x} 92 ${x} 88 Z`);
  d.O(19,27,1.4);d.L('M48 42 Q56 46 64 42')},
 ente:d=>{d.S('M24 56 C24 44 40 40 60 44 L84 36 C90 34 92 40 88 44 L86 54 C84 68 70 76 52 76 C36 76 24 68 24 56 Z');
  d.C(30,30,12);d.S('M25 34 L38 34 L40 50 L25 50 Z');d.S('M19 29 L5 33 C3 36 6 39 9 38 L20 37 Z',2);
  d.S('M45 72 L51 72 L51 85 L59 89 Q60 92 57 92 L42 92 Q39 92 41 89 L45 85 Z');
  d.O(28,27,1.6);d.L('M46 54 C54 48 68 50 72 58 C64 64 54 62 46 54')},
 traktor:d=>{d.S('M18 46 L56 46 L56 20 L84 20 L86 46 L94 50 L94 64 L18 64 Z');d.S('M38 22 L45 22 L45 46 L38 46 Z');
  d.C(73,70,21);d.C(30,75,13);
  d.L('M73 70 m-8 0 a8 8 0 1 0 16 0 a8 8 0 1 0 -16 0');d.L('M30 75 m-5 0 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0');d.L('M62 26 L79 26 L80 40 L62 40 Z');d.L('M22 52 L34 52 M22 58 L34 58')},
 scheune:d=>{d.S('M10 44 L50 12 L90 44 L90 92 L10 92 Z',4);d.S('M4 47 L50 8 L96 47 L91 52 L50 17 L9 52 Z',3);
  d.L('M34 91 L34 58 L66 58 L66 91 M35 59 L65 90 M65 59 L35 90');d.L('M44 30 L56 30 L56 42 L44 42 Z')},
 blatt:d=>{d.E(50,42,22,38,35);d.S('M46 68 L54 68 L58 94 L50 94 Z');d.L('M66 14 C58 36 52 54 50 72')},
 karotte:d=>{d.S('M36 30 L64 30 L52 94 C51 97 49 97 48 94 Z',6);d.E(41,16,6,14,-25);d.E(50,12,6,15,0);d.E(59,16,6,14,25);d.L('M42 46 L52 46 M48 62 L55 62 M45 76 L51 76')},
 tomate:d=>{d.C(50,58,34);d.S('M48 6 L53 6 L53 24 L48 24 Z');d.S('M50 18 L57 30 L72 26 L61 37 L50 33 L39 37 L28 26 L43 30 Z',3);d.L('M28 52 Q32 40 42 36')},
 haus:d=>{d.S('M18 46 L82 46 L82 92 L18 92 Z');d.S('M5 52 L50 10 L95 52 Z',6);d.S('M64 14 L76 14 L76 36 L64 36 Z');
  d.L('M30 92 L30 66 Q30 60 36 60 L40 60 Q46 60 46 66 L46 92');d.L('M56 62 L72 62 L72 78 L56 78 Z M64 62 L64 78 M56 70 L72 70')}};
const PZ_SHAPE_IDS=Object.keys(PZ_SHAPES);
// Figur als Ringe (mm), Begrenzung zentriert; D = gravierte Linien (innerhalb des Teils)
function pzShape(id,H,res,tol){const f=H/100;
 const draw=fill=>(x,k)=>{x.save();x.scale(f,-f);x.translate(-50,-50);x.lineJoin=x.lineCap='round';
  const d={C:(a,b,r)=>{if(fill){x.beginPath();x.arc(a,b,r,0,6.2832);x.fill()}},
   E:(a,b,rx,ry,t=0)=>{if(fill){x.beginPath();x.ellipse(a,b,rx,ry,t*Math.PI/180,0,6.2832);x.fill()}},
   S:(p,rd)=>{if(fill){const q=new Path2D(p);x.fill(q);if(rd){x.lineWidth=rd;x.stroke(q)}}},
   L:p=>{if(!fill){x.lineWidth=1.4/f;x.stroke(new Path2D(p))}},
   O:(a,b,r)=>{if(!fill){x.beginPath();x.arc(a,b,r/f,0,6.2832);x.fill()}}};
  PZ_SHAPES[id](d);x.restore();if(fill)pzJoin(k)};
 let R=pzRings(H*1.4,H*1.4,res,tol,draw(1)),D=pzRings(H*1.4,H*1.4,res,tol,draw(0));
 let x0=1e9,x1=-1e9,y0=1e9,y1=-1e9;for(const r of R)for(const p of r){x0=Math.min(x0,p[0]);x1=Math.max(x1,p[0]);y0=Math.min(y0,p[1]);y1=Math.max(y1,p[1])}
 const mx=(x0+x1)/2,my=(y0+y1)/2,sh=r=>r.map(p=>[p[0]-mx,p[1]-my]);R=R.map(sh);D=D.map(sh);
 return{ch:id,R,D,w:x1-x0,y0:y0-my,y1:y1-my}}
// Reihe nebeneinander legen und zentrieren; Rueckgabe Breite
function pzRow(items,gap){let x=0;for(const g of items){g.cx=x+g.w/2;x+=g.w+gap}const W=Math.max(0,x-gap);items.forEach(g=>g.cx-=W/2);return W}

// Platte mit erhabenem Relief als EIN Koerper (Druck mit Farbwechsel auf Hoehe T): A Umriss (mit Loechern), R Relief innerhalb A
function reliefBody(A,R,T,h){const o=[];cap(A,0,false,o);walls(A,0,T,o);cap(R.length?A.concat(rev(R)):A,T,true,o);if(R.length){walls(R,T,T+h,o);cap(R,T+h,true,o)}return o}
// Schriftgroesse (px = mm) so, dass der Text hoechstens maxW breit ist und die Grossbuchstaben capH hoch sind
function fitFont(t,fam,capH,maxW){const m=document.createElement('canvas').getContext('2d');m.font='100px '+fam;const cr=m.measureText('H').actualBoundingBoxAscent/100||.7,w=m.measureText(t).width/100;
 let fs=capH/cr;if(w*fs>maxW)fs=maxW/w;return{fs,cap:fs*cr,w:w*fs}}
// Text in eine pzRings-Zeichnung: Grundlinie bei Welt-y = y (y nach oben), zentriert bei x
function pzText(x,t,fam,fs,cx,y){x.save();x.scale(1,-1);x.font=fs+'px '+fam;x.textAlign='center';x.textBaseline='alphabetic';x.fillText(t,cx,-y);x.restore()}
