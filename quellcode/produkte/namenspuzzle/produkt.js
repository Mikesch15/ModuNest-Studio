/* ================= Namenspuzzle: Texte und Zustand ================= */
Object.assign(L,{
 tag:['Dein Name. Dein Puzzle. Dein Druck.','Your name. Your puzzle. Your print.'],
 help1:['Gib den Namen ein – jeder Buchstabe wird ein eigenes Puzzleteil.','Enter the name – every letter becomes its own puzzle piece.'],
 help2:['Wähle Grösse, Farben und auf Wunsch eine zweite Zeile (z. B. Geburtsdatum). Die 3D-Vorschau zeigt alles sofort.','Choose size, colours and optionally a second line (e.g. date of birth). The 3D preview updates instantly.'],
 help3:['Unter «Herunterladen» holst du die Dateien. Dafür brauchst du die Bestellnummer deines Etsy-Kaufs. Jedes Puzzle zählt 1.','Get your files under «Download». You need the order number of your Etsy purchase. Each puzzle counts 1.'],
 help4:['Drucke Brett und Buchstaben ohne Stützen – am schönsten mit verschiedenen Farben.','Print board and letters without supports – nicest in different colours.'],
 helpTip:['Tipp: Lade zuerst die kostenlose Passungsprobe herunter (ganz unten) und prüfe die Passung. Bei jedem Abschnitt erklärt dir das ⓘ, was die Einstellungen bewirken.','Tip: download the free fit test first (at the bottom) and check the fit. In every section, the ⓘ explains what the settings do.'],
 pzText:['Name & Text','Name & text'],pzName:['Name (nur Buchstaben)','Name (letters only)'],pzSub:['Zweite Zeile (optional, z. B. Geburtsdatum)','Second line (optional, e.g. date of birth)'],
 pzSize:['Grösse','Size'],pzLines:['Zeilen','Lines'],lnAuto:['Automatisch','Automatic'],ln1:['1 Zeile','1 line'],ln2:['2 Zeilen','2 lines'],pzH:['Buchstabenhöhe','Letter height'],pzT:['Brettdicke','Board thickness'],pzKnob:['Greifknöpfe (für kleine Hände)','Grip knobs (for small hands)'],
 pzFit:['Passung','Fit'],pzFitPick:['Spiel (1 stramm … 5 locker)','Clearance (1 tight … 5 loose)'],
 pzFitText:['Lade die Passungsprobe herunter: ein kleines Herz und ein Brettchen mit 5 Vertiefungen (1 stramm … 5 locker, zusammen ca. 15 g). Drucke sie mit demselben Filament wie später das Puzzle und probiere das Herz in jeder Vertiefung. Wähle die Nummer, bei der es leicht hinein- und herausgeht. Durch das Loch im Boden lässt es sich herausdrücken.','Download the fit test: a small heart and a little board with 5 pockets (1 tight … 5 loose, about 15 g in total). Print it with the same filament you will use for the puzzle and try the heart in each pocket. Choose the number where it goes in and out easily. Push it out through the hole in the bottom.'],
 pzFitDl:['Passungsprobe herunterladen (gratis)','Download fit test (free)'],
 cBoard:['Brett','Board'],cL0:['Buchstabe 1, 7 …','Letter 1, 7 …'],cL1:['Buchstabe 2, 8 …','Letter 2, 8 …'],cL2:['Buchstabe 3, 9 …','Letter 3, 9 …'],cL3:['Buchstabe 4, 10 …','Letter 4, 10 …'],cL4:['Buchstabe 5, 11 …','Letter 5, 11 …'],cL5:['Buchstabe 6, 12 …','Letter 6, 12 …'],
 i_pzText:['Erlaubt sind Buchstaben (auch Ä, Ö, Ü), Zahlen und Leerzeichen, höchstens 16 Zeichen. Lange Namen kommen automatisch auf 2 Zeilen (bei mehreren Wörtern am Leerzeichen), damit die Buchstaben gross bleiben; unter «Zeilen» kannst du das festlegen. Die Pünktchen von Ä/Ö/Ü werden mit dem Buchstaben verbunden, damit keine losen Kleinteile entstehen. Die zweite Zeile wird ins Brett graviert.','Letters (incl. Ä, Ö, Ü), digits and spaces are allowed, up to 16 characters. Long names automatically go onto 2 lines (split at a space if there are several words) so the letters stay large; you can fix this under «Lines». The dots of Ä/Ö/Ü are joined to the letter so there are no loose small parts. The second line is engraved into the board.'],
 i_pzSize:['Buchstabenhöhe: Grösse der Puzzleteile. Ist der Name zu lang für das Druckbett, verkleinert die App die Buchstaben automatisch. Brettdicke: dickeres Brett = tiefere Vertiefungen. Greifknöpfe: kleine Knöpfe oben auf den Buchstaben, damit Kinder sie leicht herausnehmen können.','Letter height: size of the pieces. If the name is too long for the print bed, the app shrinks the letters automatically. Board thickness: thicker board = deeper recesses. Grip knobs: small knobs on top of the letters so children can lift them out easily.'],
 i_pzFit:['Jeder Drucker druckt etwas anders. Die Passungsprobe zeigt, welches Spiel bei dir passt. Für Kinderhände lieber etwas lockerer wählen.','Every printer prints slightly differently. The fit test shows which clearance suits yours. For small hands, rather choose a bit looser.'],
 pzSafety:['Sicherheit: Kleinteile – für Kinder unter 3 Jahren nur unter Aufsicht. Teile vor dem Spielen auf scharfe Kanten prüfen.','Safety: small parts – children under 3 only under supervision. Check parts for sharp edges before play.'],
 sBoard:['Brett','Board'],sLetters:['Teile','Pieces'],sMat:['Filament max.','Filament max.'],sThick:['Dicke','Thickness'],
 eName:['Bitte einen Namen eingeben oder eine Figur wählen.','Please enter a name or choose a figure.'],
 pzShapes:['Figuren','Figures'],
 i_pzShapes:['Tippe Figuren an, um sie als zusätzliche Puzzleteile unter den Namen zu setzen (höchstens 6, Reihenfolge wie angetippt). Nochmals tippen entfernt sie. Auch ohne Namen möglich – dann wird es ein reines Figurenpuzzle.','Tap figures to add them as extra pieces below the name (up to 6, in the order tapped). Tap again to remove. Also works without a name – then it becomes a figure puzzle.'],
 eShapes:['Zu viele Figuren für ein Brett – bitte weniger wählen.','Too many figures for one board – please choose fewer.'],
 sh_kuh:['Hochlandrind','Highland cow'],sh_schaf:['Schaf','Sheep'],sh_schwein:['Schwein','Pig'],sh_huhn:['Huhn','Chicken'],sh_hase:['Hase','Bunny'],
 sh_herz:['Herz','Heart'],sh_stern:['Stern','Star'],sh_sonne:['Sonne','Sun'],sh_blume:['Blume','Flower'],sh_wolke:['Wolke','Cloud'],sh_baum:['Baum','Tree'],sh_fisch:['Fisch','Fish'],sh_haus:['Haus','House'],
 eLong:['Der Name ist zu lang für ein Brett (Buchstaben wären kleiner als 30 mm). Bitte kürzeren Namen oder Spitznamen wählen.','The name is too long for one board (letters would be smaller than 30 mm). Please choose a shorter name or nickname.'],
 wCut:['Höchstens 16 Zeichen – der Name wurde gekürzt.','At most 16 characters – the name was shortened.'],
 wScaled:['Der Name ist zu lang für das Druckbett – die Buchstaben wurden auf {0} mm verkleinert.','The name is too long for the print bed – letters were reduced to {0} mm.'],
 cartOne:['Namenspuzzle','Name puzzle'],
 i_colors:['Die Farben sind für die Vorschau und werden in der 3MF-Datei als Vorschlag für Bambu Studio mitgegeben. Die Buchstaben wechseln reihum durch sechs Farben.','Colours are for the preview and are passed to Bambu Studio in the 3MF file as a suggestion. Letters cycle through six colours.']
});
const S={name:'LINA',sub:'',lines:0,shapes:[],H:50,T:10,knob:true,fit:3,view:'asm',hide:{},cBoard:'#ead9bd',cL0:'#c46546',cL1:'#5f9b8c',cL2:'#e2ad3f',cL3:'#5b7db1',cL4:'#9a6fae',cL5:'#7aa35a'};
try{Object.assign(S,JSON.parse(localStorage.getItem('np-state')||'{}'))}catch(e){}
if(!Array.isArray(S.shapes))S.shapes=[];

/* ================= Namenspuzzle: Geometrie ================= */
const PZ_FONT='KFModern',PZ_MARGIN=12,PZ_WALL=5,PZ_KNOB_H=7;
const pzClr=()=>[.2,.3,.4,.5,.6][(S.fit|0)-1]??.4;          // Spiel je Seite (mm)
const pzName=s=>[...String(s||'').toUpperCase()].filter(c=>/[A-Z0-9ÄÖÜ ]/.test(c)).join('').replace(/\s+/g,' ').trim().slice(0,16);
// Name in 2 Zeilen teilen: am Leerzeichen, das die Zeilen am gleichmaessigsten macht; ein einzelnes Wort ab 6 Zeichen (bei «2 Zeilen» immer) in der Mitte
function pzSplit(n,force){const w=n.split(' ');if(w.length>1){let best=null,bv=1e9;for(let k=1;k<w.length;k++){const a=w.slice(0,k).join(' '),b=w.slice(k).join(' '),v=Math.max(a.length,b.length);if(v<bv){bv=v;best=[a,b]}}return best}
 return n.length>=(force?2:6)?[n.slice(0,Math.ceil(n.length/2)),n.slice(Math.ceil(n.length/2))]:null}
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

async function buildPuzzle(res,tol,opt={}){
 try{await document.fonts.load('100px '+PZ_FONT)}catch(e){}
 const name=opt.name??pzName(S.name),sub=opt.sub??String(S.sub||'').slice(0,40).trim(),shapes=(opt.shapes??S.shapes).filter(id=>PZ_SHAPES[id]).slice(0,6);
 if(!name.replace(/ /g,'')&&!shapes.length)return{ok:false,err:tr('eName'),parts:[],units:[],info:{}};
 const clr=pzClr(),T=+S.T||12,Pd=Math.round(T*.5),LT=Pd+3,GAP=2*clr+PZ_WALL;
 const m=document.createElement('canvas').getContext('2d');m.font='100px '+PZ_FONT;const capR=m.measureText('H').actualBoundingBoxAscent/100;
 const maxW=250-2*PZ_MARGIN;
 // Name auf 1 oder 2 Zeilen (Auto: 2 Zeilen, sobald die Buchstaben auf einer Zeile verkleinert werden muessten).
 // Alle Buchstaben gleich gross; Groesse so waehlen, dass das Brett aufs Druckbett passt (Breite und Tiefe); mind. 30 mm (Kleinteile)
 const H0=+S.H||50,lineW=(t,H)=>[...t].reduce((s,ch)=>s+(ch===' '?.4*H:m.measureText(ch).width*H/capR/100),0)+(t.length-1)*GAP;
 const mode=opt.lines??(S.lines|0),two=pzSplit(name,mode===2);
 const lines=!name.replace(/ /g,'')?[]:two&&(mode===2||(mode===0&&lineW(name,H0)>maxW))?two:[name];
 let H=H0,Hs=H0,scaled=false,lrows=[],figs=[],RW=0,FW=0;
 for(let pass=0;pass<6;pass++){
  if(lines.length){const lw=Math.max(...lines.map(t=>lineW(t,H)));if(lw>maxW){H=Math.floor(H*maxW/lw);scaled=true}
   if(H<30)return{ok:false,err:tr('eLong'),parts:[],units:[],info:{}};
   const fs=H/capR;lrows=lines.map(t=>{const row=[];let x=0;
    for(const ch of t){if(ch===' '){x+=.4*H+GAP;continue}const g=pzLetter(ch,fs,H,res,tol);row.push({...g,cx:x+g.w/2});x+=g.w+GAP}
    const w=x-GAP;row.forEach(g=>g.cx-=w/2);row.W=w;return row});RW=Math.max(...lrows.map(r=>r.W))}
  // Figuren-Reihe (gleiche Groesse wie die Buchstaben, falls noetig kleiner)
  if(shapes.length){if(Hs<30)return{ok:false,err:tr('eShapes'),parts:[],units:[],info:{}};figs=shapes.map(id=>pzShape(id,Hs,res,tol));FW=pzRow(figs,GAP)}
  if(RW>maxW){H=Math.floor(H*maxW/RW-1);scaled=true;continue}
  if(FW>maxW){Hs=Math.floor(Hs*maxW/FW-1);continue}
  // Tiefe pruefen (Druckbett 250 mm): alles gemeinsam verkleinern
  const dep=lrows.concat([figs]).filter(r=>r.length).reduce((t,r)=>t+Math.max(...r.map(g=>g.y1))-Math.min(...r.map(g=>g.y0))+2*clr+PZ_WALL+5,0)-PZ_WALL-5+2*PZ_MARGIN+(sub?Math.min(9,H*.22)+6:0);
  if(dep>250){const f=250/dep;H=Math.floor(H*f-1);Hs=Math.floor(Hs*f-1);scaled=scaled||lines.length>0;continue}
  break}
 const letters=lrows.flat();
 // Reihen uebereinander, darunter optional die gravierte Zeile
 const rows=lrows.concat([figs]).filter(r=>r.length),ext=r=>[Math.min(...r.map(g=>g.y0))-clr,Math.max(...r.map(g=>g.y1))+clr],RGAP=PZ_WALL+5;
 const SUBH=sub?Math.min(9,(letters.length?H:Hs)*.22):0,contentH=rows.reduce((t,r)=>{const e=ext(r);return t+e[1]-e[0]},0)+RGAP*(rows.length-1);
 const Wb=Math.max(RW,FW,(letters.length?H:Hs))+2*PZ_MARGIN,Db=contentH+2*PZ_MARGIN+(sub?SUBH+6:0);
 let yt=Db/2-PZ_MARGIN;for(const r of rows){const e=ext(r),oy=yt-e[1];r.forEach(g=>g.oy=oy);yt-=(e[1]-e[0])+RGAP}
 const pieces=letters.concat(figs);
 // Brett: Umriss, Vertiefungen (Teil + Spiel), Gravur
 const bw=Wb+4,bh=Db+4,ring=draw=>pzRings(bw,bh,res,tol,draw);
 const A=ring(xx=>{xx.beginPath();xx.roundRect(-Wb/2,-Db/2,Wb,Db,Math.min(10,Db/4));xx.fill()});
 const P=ring(xx=>{xx.lineJoin='round';xx.lineWidth=2*clr;for(const g of pieces){pzPath(xx,g.R,g.cx,g.oy);xx.fill('evenodd');xx.stroke()}});
 const E=sub?ring(xx=>{xx.save();xx.scale(1,-1);xx.font=(SUBH/capR)+'px '+PZ_FONT;xx.textAlign='center';xx.textBaseline='alphabetic';
  const w=xx.measureText(sub).width;if(w>Wb-2*PZ_MARGIN)xx.font=(SUBH/capR*(Wb-2*PZ_MARGIN)/w)+'px '+PZ_FONT;xx.fillText(sub,0,Db/2-PZ_MARGIN*.6);xx.restore()}):[];
 const bt=[];cap(A,0,false,bt);walls(A,0,T,bt);cap(A.concat(rev(P),rev(E)),T,true,bt);walls(rev(P),T-Pd,T,bt);cap(P,T-Pd,true,bt);
 if(E.length){walls(rev(E),T-1,T,bt);cap(E,T-1,true,bt)}
 const parts=[{key:'cBoard',name:'Brett',tris:Float32Array.from(bt),asm:[(X,Y,Z)=>[X,Y,Z]]}];
 // Greifknopf: bei allen Buchstaben gleich gross, knapp so gross wie im schmalsten Buchstaben moeglich (max. 5 mm);
 // dafuer wandert er bei duennen Querbalken auf einen dickeren Strich. Figuren so gross wie moeglich.
 let kn=S.knob?pieces.map(g=>pzDeep(g.R,g.D,!PZ_SHAPES[g.ch])):[];
 const rL=Math.min(5,...pieces.map((g,i)=>PZ_SHAPES[g.ch]?9:kn[i].bd-1.8)); // 0.6 mm Reserve: Knopf passt auf normale Striche, nicht nur auf Ecken
 if(S.knob&&rL>=2.5)kn=kn.map((k,i)=>PZ_SHAPES[pieces[i].ch]?k:pzDeep(pieces[i].R,pieces[i].D,true,rL+1.2-.01));
 pieces.forEach((g,i)=>{const t=g.D&&g.D.length?plateWithPocket(g.R,g.D,LT,.6):extrude(g.R,0,LT);
  if(S.knob){const k=kn[i],r=PZ_SHAPES[g.ch]?Math.min(5,k.d-1.2):Math.min(rL,k.d-1.19);if(r>=2.5)t.push(...extrude(pzCircle(k.p[0],k.p[1],r),LT,LT+PZ_KNOB_H))}
  parts.push({key:'cL'+(i%6),name:(PZ_SHAPES[g.ch]?'Figur '+(i+1)+' '+g.ch:'Buchstabe '+(i+1)+' '+g.ch),tris:Float32Array.from(t),asm:[(X,Y,Z)=>[X+g.cx,Y+g.oy,Z+T-Pd+.05]]})});
 return{ok:true,err:'',parts,units:[[Math.round(Wb),Math.round(Db),pzHash(name+'|'+shapes.join(','))]],info:{name:name+(shapes.length?(name?' + ':'')+shapes.map(id=>tr('sh_'+id)).join(', '):''),Wb,Db,T,H,scaled,n:pieces.length,cut:[...String(S.name||'').trim()].length>16}}}

/* ================= Namenspuzzle: Oberflaeche, Vorschau ================= */
function arrange(parts,mode){return mode==='asm'?parts.flatMap(p=>p.asm.map(f=>({...p,tris:xf(p.tris,f)}))):arrangePrint(parts)}
function ui(){if(!featOn('figuren'))S.shapes=[];if(!featOn('gravur'))S.sub='';
 let c=card('pzText');tInput(c,'name','pzName');seg(c,'lines','pzLines',[[0,'lnAuto'],[1,'ln1'],[2,'ln2']]);if(featOn('gravur'))tInput(c,'sub','pzSub');
 if(featOn('figuren')){c=card('pzShapes');const sg=document.createElement('div');sg.className='seg shp';
 PZ_SHAPE_IDS.forEach(id=>{const b=document.createElement('button');b.dataset.k='sh_'+id;const upd=()=>{const n=S.shapes.indexOf(id);b.classList.toggle('on',n>=0);b.dataset.n=n>=0?n+1:''};upd();
  b.onclick=()=>{const n=S.shapes.indexOf(id);if(n>=0)S.shapes.splice(n,1);else if(S.shapes.length<6)S.shapes.push(id);sg.querySelectorAll('button').forEach(x=>x._u());changed()};b._u=upd;sg.append(b)});c.append(sg)}
 c=card('pzSize');rng(c,'H','pzH',30,80,5,'mm');rng(c,'T','pzT',8,20,1,'mm');chk(c,'knob','pzKnob');
 c=card('colors');const cc=document.createElement('div');cc.className='colors';
 ['cBoard','cL0','cL1','cL2','cL3','cL4','cL5'].forEach(k=>{const l=document.createElement('label'),s=document.createElement('span');s.dataset.k=k;const i=document.createElement('input');i.type='color';i.value=S[k];i.oninput=()=>{S[k]=i.value;draw();save()};l.append(s,i);cc.append(l)});c.append(cc);
 cartCard();
 c=card('pzFit');para(c,'pzFitText');btn(c,'pzFitDl',downloadPzTest);seg(c,'fit','pzFitPick',[[1,'1'],[2,'2'],[3,'3'],[4,'4'],[5,'5']]);
 const sp=document.createElement('p');sp.dataset.k='pzSafety';sp.className='note';c.append(sp)}
function present(reframe){if(!built)return;const arr=built.ok?arrange(built.parts,S.view):[];
 setMeshes(arr.map(p=>({...p,tris:clean(p.tris)})));if(reframe&&arr.length)frame(arr);draw();
 document.querySelectorAll('.vt button').forEach(b=>b.classList.toggle('on',b.dataset.v===S.view));
 const i=built.info||{},mass=built.ok?built.parts.reduce((s,p)=>s+Math.abs(volume(p.tris)),0)/1000*1.24:0;
 document.getElementById('stats').innerHTML=built.ok?[[tr('sBoard'),Math.round(i.Wb)+' × '+Math.round(i.Db)+' mm'],[tr('sLetters'),i.n],[tr('sThick'),i.T+' mm'],[tr('sMat'),'≈ '+Math.round(mass)+' g']].map(a=>`<div class="stat"><span>${a[0]}</span><strong>${a[1]}</strong></div>`).join(''):'';
 status.innerHTML=built.ok?(i.name+(i.scaled?'<br><b>'+trf('wScaled',i.H)+'</b>':'')+(i.cut?'<br><b>'+tr('wCut')+'</b>':'')):'<b>'+built.err+'</b>';renderCart()}
// Passungs-Probe: kleines Herz + Brettchen mit 5 Vertiefungen (Spiel 1..5, Nummer graviert), Loch im Boden zum Herausdruecken.
// Wenig Material (ca. 15 g); der Kunde probiert das eine Herz in allen Vertiefungen.
async function buildPzTest(res,tol){try{await document.fonts.load('100px '+PZ_FONT)}catch(e){}
 const CL=[.2,.3,.4,.5,.6],T=4,Pd=2.4,M=5,g=pzShape('herz',16,res,tol),w=g.w,dx=w+2*.6+4,NH=6;
 const W=CL.length*dx-4+2*M,D=(g.y1-g.y0)+1.2+NH+3+2*M,cy=D/2-M-.6-g.y1,ny=-D/2+M,X=i=>-W/2+M+.6+w/2+i*dx;
 const ring=draw=>pzRings(W+4,D+4,res,tol,draw);
 const A=ring(x=>{x.beginPath();x.roundRect(-W/2,-D/2,W,D,4);x.fill()});
 const P=ring(x=>{x.lineJoin='round';CL.forEach((c,i)=>{x.lineWidth=2*c;pzPath(x,g.R,X(i),cy);x.fill('evenodd');x.stroke()})});
 const Hh=ring(x=>{CL.forEach((c,i)=>{x.beginPath();x.arc(X(i),cy,3,0,6.2832);x.fill()})});
 const E=ring(x=>{x.save();x.scale(1,-1);x.font='bold '+(NH*1.4)+'px '+PZ_FONT;x.textAlign='center';x.textBaseline='alphabetic';CL.forEach((c,i)=>x.fillText(String(i+1),X(i),-ny));x.restore()});
 const bt=[];cap(A.concat(rev(Hh)),0,false,bt);walls(A,0,T,bt);walls(rev(Hh),0,T-Pd,bt);cap(A.concat(rev(P),rev(E)),T,true,bt);walls(rev(P),T-Pd,T,bt);cap(P.concat(rev(Hh)),T-Pd,true,bt);
 walls(rev(E),T-.6,T,bt);cap(E,T-.6,true,bt);
 return[{key:'cBoard',name:'Probe-Brett',tris:Float32Array.from(bt)},{key:'cL0',name:'Probe-Herz',tris:Float32Array.from(extrude(g.R,0,Pd+1.6))}]}
async function downloadPzTest(){const r=await buildPzTest(9,.02);
 download(zip(r.map((p,i)=>({name:`${i+1}-${p.name}.stl`,data:stlOf(p.tris)}))),'Namenspuzzle-Passungsprobe.zip')}

/* ================= Namenspuzzle: Produktbeschreibung fuer den Kern ================= */
const PZ_KEYS=['name','lines','sub','shapes','H','T','knob','fit','cBoard','cL0','cL1','cL2','cL3','cL4','cL5'];
const PRODUCT={id:'namenspuzzle',name:'Namenspuzzle',file:'Namenspuzzle',store:'np',
 unit:{one:['Puzzle','puzzle'],n:['Puzzle','puzzle(s)'],many:['Puzzles','puzzles']},
 // units: Brettmasse + Kennzahl des Namens -> Gratis-Korrektur nur fuer denselben Namen (Groesse/Farben)
 build:(res,tol)=>buildPuzzle(res,tol),
 snap(){const o={};PZ_KEYS.forEach(k=>o[k]=k==='shapes'?S.shapes.slice():S[k]);return{S:o}},
 applySnap(s){Object.assign(S,s.S)},
 snapName:s=>'Puzzle '+(pzName(s.S.name)||(s.S.shapes||[]).join('-')||'?'),
 snapCount:()=>1,
 snapInfo:s=>tr('cartOne')+' · '+[pzName(s.S.name),(s.S.shapes||[]).map(id=>tr('sh_'+id)).join(', ')].filter(Boolean).join(' + ')+' · '+s.S.H+' mm'};
window.__pz={S,buildPuzzle,pzName};
