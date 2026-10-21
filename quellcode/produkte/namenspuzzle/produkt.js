/* ================= Namenspuzzle: Texte und Zustand ================= */
Object.assign(L,{
 tag:['Dein Name. Dein Puzzle. Dein Druck.','Your name. Your puzzle. Your print.'],
 help1:['Gib den Namen ein – jeder Buchstabe wird ein eigenes Puzzleteil.','Enter the name – every letter becomes its own puzzle piece.'],
 help2:['Wähle Grösse, Farben und auf Wunsch eine zweite Zeile (z. B. Geburtsdatum). Die 3D-Vorschau zeigt alles sofort.','Choose size, colours and optionally a second line (e.g. date of birth). The 3D preview updates instantly.'],
 help3:['Unter «Herunterladen» holst du die Dateien. Dafür brauchst du die Bestellnummer deines Etsy-Kaufs. Jedes Puzzle zählt 1.','Get your files under «Download». You need the order number of your Etsy purchase. Each puzzle counts 1.'],
 help4:['Drucke Brett und Buchstaben ohne Stützen – am schönsten mit verschiedenen Farben.','Print board and letters without supports – nicest in different colours.'],
 helpTip:['Tipp: Lade zuerst das kostenlose Probe-Teil herunter (ganz unten) und prüfe die Passung. Bei jedem Abschnitt erklärt dir das ⓘ, was die Einstellungen bewirken.','Tip: download the free test piece first (at the bottom) and check the fit. In every section, the ⓘ explains what the settings do.'],
 pzText:['Name & Text','Name & text'],pzName:['Name (nur Buchstaben)','Name (letters only)'],pzSub:['Zweite Zeile (optional, z. B. Geburtsdatum)','Second line (optional, e.g. date of birth)'],
 pzSize:['Grösse','Size'],pzH:['Buchstabenhöhe','Letter height'],pzT:['Brettdicke','Board thickness'],pzKnob:['Greifknöpfe (für kleine Hände)','Grip knobs (for small hands)'],
 pzFit:['Passung','Fit'],pzFitPick:['Spiel (1 stramm … 5 locker)','Clearance (1 tight … 5 loose)'],
 pzFitText:['Lade das Probe-Teil herunter (erster Buchstabe mit kleinem Brett), drucke es und prüfe: Der Buchstabe soll leicht hinein- und herausgehen. Wähle dann die passende Nummer.','Download the test piece (first letter with a small board), print it and check: the letter should go in and out easily. Then choose the matching number.'],
 pzFitDl:['Probe-Teil herunterladen (gratis)','Download test piece (free)'],
 cBoard:['Brett','Board'],cL0:['Buchstabe 1, 7 …','Letter 1, 7 …'],cL1:['Buchstabe 2, 8 …','Letter 2, 8 …'],cL2:['Buchstabe 3, 9 …','Letter 3, 9 …'],cL3:['Buchstabe 4, 10 …','Letter 4, 10 …'],cL4:['Buchstabe 5, 11 …','Letter 5, 11 …'],cL5:['Buchstabe 6, 12 …','Letter 6, 12 …'],
 i_pzText:['Erlaubt sind Buchstaben (auch Ä, Ö, Ü), Zahlen und Leerzeichen, höchstens 12 Zeichen. Die Pünktchen von Ä/Ö/Ü werden mit dem Buchstaben verbunden, damit keine losen Kleinteile entstehen. Die zweite Zeile wird ins Brett graviert.','Letters (incl. Ä, Ö, Ü), digits and spaces are allowed, up to 12 characters. The dots of Ä/Ö/Ü are joined to the letter so there are no loose small parts. The second line is engraved into the board.'],
 i_pzSize:['Buchstabenhöhe: Grösse der Puzzleteile. Ist der Name zu lang für das Druckbett, verkleinert die App die Buchstaben automatisch. Brettdicke: dickeres Brett = tiefere Vertiefungen. Greifknöpfe: kleine Knöpfe oben auf den Buchstaben, damit Kinder sie leicht herausnehmen können.','Letter height: size of the pieces. If the name is too long for the print bed, the app shrinks the letters automatically. Board thickness: thicker board = deeper recesses. Grip knobs: small knobs on top of the letters so children can lift them out easily.'],
 i_pzFit:['Jeder Drucker druckt etwas anders. Das Probe-Teil zeigt, welches Spiel bei dir passt. Für Kinderhände lieber etwas lockerer wählen.','Every printer prints slightly differently. The test piece shows which clearance suits yours. For small hands, rather choose a bit looser.'],
 pzSafety:['Sicherheit: Kleinteile – für Kinder unter 3 Jahren nur unter Aufsicht. Teile vor dem Spielen auf scharfe Kanten prüfen.','Safety: small parts – children under 3 only under supervision. Check parts for sharp edges before play.'],
 sBoard:['Brett','Board'],sLetters:['Teile','Pieces'],sMat:['Filament max.','Filament max.'],sThick:['Dicke','Thickness'],
 eName:['Bitte einen Namen eingeben oder eine Figur wählen.','Please enter a name or choose a figure.'],
 pzShapes:['Figuren','Figures'],
 i_pzShapes:['Tippe Figuren an, um sie als zusätzliche Puzzleteile unter den Namen zu setzen (höchstens 6, Reihenfolge wie angetippt). Nochmals tippen entfernt sie. Auch ohne Namen möglich – dann wird es ein reines Figurenpuzzle.','Tap figures to add them as extra pieces below the name (up to 6, in the order tapped). Tap again to remove. Also works without a name – then it becomes a figure puzzle.'],
 eShapes:['Zu viele Figuren für ein Brett – bitte weniger wählen.','Too many figures for one board – please choose fewer.'],
 sh_kuh:['Hochlandrind','Highland cow'],sh_schaf:['Schaf','Sheep'],sh_schwein:['Schwein','Pig'],sh_huhn:['Huhn','Chicken'],sh_hase:['Hase','Bunny'],
 sh_herz:['Herz','Heart'],sh_stern:['Stern','Star'],sh_sonne:['Sonne','Sun'],sh_blume:['Blume','Flower'],sh_wolke:['Wolke','Cloud'],sh_baum:['Baum','Tree'],sh_fisch:['Fisch','Fish'],sh_haus:['Haus','House'],
 eLong:['Der Name ist zu lang für ein Brett (Buchstaben wären kleiner als 30 mm). Bitte kürzeren Namen oder Spitznamen wählen.','The name is too long for one board (letters would be smaller than 30 mm). Please choose a shorter name or nickname.'],
 wCut:['Höchstens 12 Zeichen – der Name wurde gekürzt.','At most 12 characters – the name was shortened.'],
 wScaled:['Der Name ist zu lang für das Druckbett – die Buchstaben wurden auf {0} mm verkleinert.','The name is too long for the print bed – letters were reduced to {0} mm.'],
 cartOne:['Namenspuzzle','Name puzzle'],
 i_colors:['Die Farben sind für die Vorschau und werden in der 3MF-Datei als Vorschlag für Bambu Studio mitgegeben. Die Buchstaben wechseln reihum durch sechs Farben.','Colours are for the preview and are passed to Bambu Studio in the 3MF file as a suggestion. Letters cycle through six colours.']
});
const S={name:'LINA',sub:'',shapes:[],H:50,T:10,knob:true,fit:3,view:'asm',hide:{},cBoard:'#ead9bd',cL0:'#c46546',cL1:'#5f9b8c',cL2:'#e2ad3f',cL3:'#5b7db1',cL4:'#9a6fae',cL5:'#7aa35a'};
try{Object.assign(S,JSON.parse(localStorage.getItem('np-state')||'{}'))}catch(e){}
if(!Array.isArray(S.shapes))S.shapes=[];

/* ================= Namenspuzzle: Geometrie ================= */
const PZ_FONT='KFModern',PZ_MARGIN=12,PZ_WALL=5,PZ_KNOB_H=7;
const pzClr=()=>[.2,.3,.4,.5,.6][(S.fit|0)-1]??.4;          // Spiel je Seite (mm)
const pzName=s=>[...String(s||'').toUpperCase()].filter(c=>/[A-Z0-9ÄÖÜ ]/.test(c)).join('').replace(/\s+/g,' ').trim().slice(0,12);
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
// Stelle fuer den Greifknopf: moeglichst nahe am Schwerpunkt (Teil hebt gerade ab), aber mit genug Abstand
// zum Rand und zu gravierten Linien D. Rueckgabe Punkt p und Randabstand d.
function pzDeep(R,D=[]){const inR=p=>R.reduce((n,r)=>n+(pip(p,r)?1:0),0)%2===1,inD=p=>D.some(r=>pip(p,r));
 let bx=1e9,by=1e9,Bx=-1e9,By=-1e9,A=0,cx=0,cy=0;
 for(const r of R)for(let i=0,n=r.length;i<n;i++){const a=r[i],b=r[(i+1)%n],c=a[0]*b[1]-b[0]*a[1];A+=c;cx+=(a[0]+b[0])*c;cy+=(a[1]+b[1])*c;
  bx=Math.min(bx,a[0]);by=Math.min(by,a[1]);Bx=Math.max(Bx,a[0]);By=Math.max(By,a[1])}
 cx/=3*A||1;cy/=3*A||1;const E=R.concat(D),pts=[];let bd=0;
 for(let x=bx;x<=Bx;x+=.5)for(let y=by;y<=By;y+=.5){const p=[x,y];if(!inR(p)||inD(p))continue;let d=1e9;
  for(const r of E)for(let i=0,n=r.length;i<n;i++){const a=r[i],b=r[(i+1)%n],vx=b[0]-a[0],vy=b[1]-a[1],l=vx*vx+vy*vy||1,u=Math.max(0,Math.min(1,((x-a[0])*vx+(y-a[1])*vy)/l));d=Math.min(d,Math.hypot(x-a[0]-u*vx,y-a[1]-u*vy))}
  pts.push([x,y,d]);bd=Math.max(bd,d)}
 // 1. naechster Punkt zum Schwerpunkt, an dem ein kleiner Knopf (r 2.5) Platz hat; 2. in dessen Umkreis (4 mm) die Strichmitte
 let best=null,bc=1e18;for(const q of pts)if(q[2]>=Math.min(3.7,bd)){const c=(q[0]-cx)**2+(q[1]-cy)**2;if(c<bc){bc=c;best=q}}
 if(best){const b0=best;for(const q of pts)if(q[2]>best[2]&&(q[0]-b0[0])**2+(q[1]-b0[1])**2<=16)best=q}
 return best?{p:[best[0],best[1]],d:best[2]}:{p:[0,0],d:0}}

/* Figuren: Zeichnung in 0..100 (y nach unten, Tiere schauen nach links). Flaechen: C Kreis, E Ellipse (Winkel in Grad),
   S SVG-Pfad (optional mit Rundung rd). Gravur (0.6 mm tief, Linienbreite 1.4 mm): L SVG-Linie, O Punkt (Radius mm).
   Regeln: Beine/Spalten mind. ~6 Einheiten breit (bei 50 mm = 3 mm), Gravur mind. 4 Einheiten vom Rand. */
const PZ_SHAPES={
 kuh:d=>{ // Hochlandrind: zottiges Fell, Stirnfransen, lange Hoerner
  d.S('M34 30 C34 22 42 20 50 20 L82 20 C90 20 95 26 95 34 L95 60 Q92 66 89 62 Q86 67 83 62 Q80 67 77 62 Q74 67 71 62 Q68 67 65 62 Q62 67 59 62 Q56 67 53 62 Q50 67 47 62 Q44 67 41 62 Q38 66 35 60 Z');
  for(const x of [36,52,70,85])d.S(`M${x} 56 L${x+10} 56 L${x+10} 88 Q${x+10} 92 ${x+7} 92 L${x+3} 92 Q${x} 92 ${x} 88 Z`);
  d.S('M93 26 C99 32 99 48 97 58 C101 60 101 68 96 68 C91 68 90 62 92 58 C93 48 93 36 90 30 Z');
  d.S('M14 30 C18 25 30 25 34 30 L38 46 C38 56 33 63 26 64 C18 65 10 62 9 55 C8 47 10 37 14 30 Z');
  d.C(14,31,6);d.C(21,28,6);d.C(28,28,6);d.C(34,32,5.5);
  d.S('M16 32 C6 32 0 26 2 12 C3 9 8 9 8 13 C8 20 11 24 17 24 Z',4);
  d.S('M30 28 C37 27 41 22 41 13 C41 9 46 9 47 13 C48 25 42 33 32 34 Z',4);
  d.E(9,40,7,4,-20);
  d.O(18,44,1.6);d.O(15,56,1.1);d.O(23,57,1.1);
  d.L('M84 28 Q88 32 84 36');d.L('M86 44 Q90 48 86 52');d.L('M44 52 Q48 56 44 60')},
 schaf:d=>{
  for(const[a,b,r]of[[42,36,12],[55,30,13],[69,32,12],[81,40,11],[83,52,10],[72,58,11],[58,59,11],[45,57,11],[37,47,10]])d.C(a,b,r);d.S('M40 36 L82 36 L82 56 L40 56 Z');
  for(const x of [40,52,66,78])d.S(`M${x} 58 L${x+8} 58 L${x+8} 88 Q${x+8} 91 ${x+5} 91 L${x+3} 91 Q${x} 91 ${x} 88 Z`);
  d.E(22,42,11,14,25);d.E(31,31,9,4.5,-25);
  d.O(19,40,1.6);d.O(14,52,1);
  d.L('M48 40 q3 -4 6 0 q3 -4 6 0');d.L('M66 44 q3 -4 6 0 q3 -4 6 0');d.L('M52 50 q3 -4 6 0 q3 -4 6 0')},
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
 // Reihe 1: Buchstaben. Groesse so waehlen, dass das Brett aufs Druckbett passt; mind. 30 mm (Kleinteile)
 let H=+S.H||50,scaled=false,letters=[],RW=0;
 if(name.replace(/ /g,'')){
  const rowW=H=>[...name].reduce((s,ch)=>s+(ch===' '?.4*H:m.measureText(ch).width*H/capR/100),0)+(name.length-1)*GAP;
  if(rowW(H)>maxW){H=Math.floor(H*maxW/rowW(H));scaled=true}
  for(let pass=0;pass<4;pass++){
   if(H<30)return{ok:false,err:tr('eLong'),parts:[],units:[],info:{}};
   const fs=H/capR;letters=[];let x=0;
   for(const ch of name){if(ch===' '){x+=.4*H+GAP;continue}
    const g=pzLetter(ch,fs,H,res,tol);letters.push({...g,cx:x+g.w/2});x+=g.w+GAP}
   RW=x-GAP;if(RW<=maxW)break;H=Math.floor(H*maxW/RW-1);scaled=true}
  letters.forEach(g=>g.cx-=RW/2)}
 // Reihe 2: Figuren (gleiche Groesse, falls noetig kleiner)
 let figs=[],FW=0,Hs=+S.H||50;
 for(let pass=0;shapes.length&&pass<4;pass++){
  if(Hs<30)return{ok:false,err:tr('eShapes'),parts:[],units:[],info:{}};
  figs=shapes.map(id=>pzShape(id,Hs,res,tol));FW=pzRow(figs,GAP);if(FW<=maxW)break;Hs=Math.floor(Hs*maxW/FW-1)}
 // Reihen uebereinander, darunter optional die gravierte Zeile
 const rows=[letters,figs].filter(r=>r.length),ext=r=>[Math.min(...r.map(g=>g.y0))-clr,Math.max(...r.map(g=>g.y1))+clr],RGAP=PZ_WALL+5;
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
 pieces.forEach((g,i)=>{const t=g.D&&g.D.length?plateWithPocket(g.R,g.D,LT,.6):extrude(g.R,0,LT);
  if(S.knob){const k=pzDeep(g.R,g.D),r=Math.min(5,k.d-1.2);if(r>=2.5)t.push(...extrude(pzCircle(k.p[0],k.p[1],r),LT,LT+PZ_KNOB_H))}
  parts.push({key:'cL'+(i%6),name:(PZ_SHAPES[g.ch]?'Figur '+(i+1)+' '+g.ch:'Buchstabe '+(i+1)+' '+g.ch),tris:Float32Array.from(t),asm:[(X,Y,Z)=>[X+g.cx,Y+g.oy,Z+T-Pd+.05]]})});
 return{ok:true,err:'',parts,units:[[Math.round(Wb),Math.round(Db),pzHash(name+'|'+shapes.join(','))]],info:{name:name+(shapes.length?(name?' + ':'')+shapes.map(id=>tr('sh_'+id)).join(', '):''),Wb,Db,T,H,scaled,n:pieces.length,cut:[...String(S.name||'').trim()].length>12}}}

/* ================= Namenspuzzle: Oberflaeche, Vorschau ================= */
function arrange(parts,mode){return mode==='asm'?parts.flatMap(p=>p.asm.map(f=>({...p,tris:xf(p.tris,f)}))):arrangePrint(parts)}
function ui(){
 let c=card('pzText');tInput(c,'name','pzName');tInput(c,'sub','pzSub');
 c=card('pzShapes');const sg=document.createElement('div');sg.className='seg shp';
 PZ_SHAPE_IDS.forEach(id=>{const b=document.createElement('button');b.dataset.k='sh_'+id;const upd=()=>{const n=S.shapes.indexOf(id);b.classList.toggle('on',n>=0);b.dataset.n=n>=0?n+1:''};upd();
  b.onclick=()=>{const n=S.shapes.indexOf(id);if(n>=0)S.shapes.splice(n,1);else if(S.shapes.length<6)S.shapes.push(id);sg.querySelectorAll('button').forEach(x=>x._u());changed()};b._u=upd;sg.append(b)});c.append(sg);
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
async function downloadPzTest(){const n=pzName(S.name).replace(/ /g,'')[0]||'A',r=await buildPuzzle(9,.02,{name:n,sub:''});
 download(zip(r.parts.map((p,i)=>({name:`${i+1}-${p.name}.stl`,data:stlOf(p.tris)}))),'Namenspuzzle-Probe-'+n+'.zip')}

/* ================= Namenspuzzle: Produktbeschreibung fuer den Kern ================= */
const PZ_KEYS=['name','sub','shapes','H','T','knob','fit','cBoard','cL0','cL1','cL2','cL3','cL4','cL5'];
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
