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
// Punkt am weitesten vom Rand (fuer den Greifknopf)
function pzDeep(R){const pin=p=>R.reduce((n,r)=>n+(pip(p,r)?1:0),0)%2===1;let bx=1e9,by=1e9,Bx=-1e9,By=-1e9;
 for(const r of R)for(const p of r){bx=Math.min(bx,p[0]);by=Math.min(by,p[1]);Bx=Math.max(Bx,p[0]);By=Math.max(By,p[1])}
 let best=[0,0],bd=0;for(let x=bx;x<=Bx;x+=.8)for(let y=by;y<=By;y+=.8){const p=[x,y];if(!pin(p))continue;let d=1e9;
  for(const r of R)for(let i=0,n=r.length;i<n;i++){const a=r[i],b=r[(i+1)%n],vx=b[0]-a[0],vy=b[1]-a[1],l=vx*vx+vy*vy||1,u=Math.max(0,Math.min(1,((x-a[0])*vx+(y-a[1])*vy)/l));d=Math.min(d,Math.hypot(x-a[0]-u*vx,y-a[1]-u*vy))}
  if(d>bd){bd=d;best=p}}
 return{p:best,d:bd}}

/* Figuren: einfache, kompakte Formen (Einheit = Hoehe, y nach oben), ohne duenne Stellen */
const PZ_SHAPES={
 kuh:d=>{d.R(-.28,-.2,.72,.38,.14);d.R(-.2,-.46,.12,.3,.03);d.R(.26,-.46,.12,.3,.03);d.R(.4,-.06,.07,.2,.03);d.E(-.44,0,.17,.19);d.E(-.5,-.13,.13,.09);d.E(-.44,.13,.19,.08);d.P([[-.56,.1],[-.8,.18],[-.84,.3],[-.56,.2]],.06);d.P([[-.32,.1],[-.08,.18],[-.04,.3],[-.32,.2]],.06)},
 schaf:d=>{d.C(-.2,.08,.2);d.C(.05,.15,.22);d.C(.27,.06,.19);d.C(-.08,-.08,.2);d.C(.18,-.08,.19);d.E(-.42,.08,.13,.16);d.R(-.22,-.5,.1,.3,.03);d.R(.12,-.5,.1,.3,.03)},
 schwein:d=>{d.E(.05,-.02,.4,.27);d.C(-.33,.08,.19);d.E(-.5,.04,.08,.1);d.P([[-.42,.2],[-.3,.38],[-.24,.2]],.05);d.R(-.22,-.45,.12,.22,.03);d.R(.18,-.45,.12,.22,.03)},
 huhn:d=>{d.E(.08,-.08,.34,.28);d.C(-.24,.22,.16);d.C(-.3,.4,.06);d.C(-.2,.42,.07);d.P([[-.38,.27],[-.52,.2],[-.38,.14]],.05);d.P([[.3,0],[.52,.32],[.44,-.06]],.06);d.R(-.04,-.5,.09,.2,.02);d.R(.14,-.5,.09,.2,.02)},
 hase:d=>{d.E(.08,-.2,.32,.28);d.C(-.16,.14,.19);d.E(-.24,.42,.07,.19);d.E(-.08,.44,.07,.19);d.C(.4,-.12,.08)},
 herz:d=>{d.C(-.23,.17,.27);d.C(.23,.17,.27);d.P([[-.48,.08],[.48,.08],[0,-.5]],.08)},
 stern:d=>{const p=[];for(let k=0;k<10;k++){const a=Math.PI/2+k*Math.PI/5,r=k%2?.24:.5;p.push([r*Math.cos(a),r*Math.sin(a)-.03])}d.P(p,.1)},
 sonne:d=>{d.C(0,0,.3);for(let k=0;k<8;k++){const a=k*Math.PI/4,c=Math.cos(a),s=Math.sin(a);d.P([[.24*c-.11*s,.24*s+.11*c],[.5*c,.5*s],[.24*c+.11*s,.24*s-.11*c]],.08)}},
 blume:d=>{for(let k=0;k<5;k++){const a=Math.PI/2+k*2*Math.PI/5;d.C(.27*Math.cos(a),.27*Math.sin(a),.2)}d.C(0,0,.18)},
 wolke:d=>{d.C(-.24,-.02,.22);d.C(.02,.12,.28);d.C(.28,0,.2);d.R(-.46,-.24,.92,.24,.12)},
 baum:d=>{d.C(0,.2,.3);d.C(-.22,.02,.2);d.C(.22,.02,.2);d.R(-.08,-.5,.16,.42,.03)},
 fisch:d=>{d.E(-.08,0,.36,.26);d.P([[.18,0],[.5,.26],[.5,-.26]],.07)},
 haus:d=>{d.R(-.38,-.5,.76,.55,.03);d.P([[-.5,.02],[.5,.02],[0,.48]],.05);d.R(.18,.12,.12,.28,.02)}};
const PZ_SHAPE_IDS=Object.keys(PZ_SHAPES);
// Figur als Ringe (mm), Begrenzung zentriert
function pzShape(id,H,res,tol){
 let R=pzRings(H*1.4,H*1.4,res,tol,(x,k)=>{x.save();x.scale(H,H);x.lineJoin='round';
  const d={C:(a,b,r)=>{x.beginPath();x.arc(a,b,r,0,6.2832);x.fill()},E:(a,b,rx,ry)=>{x.beginPath();x.ellipse(a,b,rx,ry,0,0,6.2832);x.fill()},
   R:(a,b,w,h,r)=>{x.beginPath();x.roundRect(a,b,w,h,r||0);x.fill()},P:(pts,rd)=>{x.beginPath();pts.forEach((q,n)=>n?x.lineTo(q[0],q[1]):x.moveTo(q[0],q[1]));x.closePath();x.fill();if(rd){x.lineWidth=rd;x.stroke()}}};
  PZ_SHAPES[id](d);x.restore();pzJoin(k)});
 let x0=1e9,x1=-1e9,y0=1e9,y1=-1e9;for(const r of R)for(const p of r){x0=Math.min(x0,p[0]);x1=Math.max(x1,p[0]);y0=Math.min(y0,p[1]);y1=Math.max(y1,p[1])}
 const mx=(x0+x1)/2,my=(y0+y1)/2;R=R.map(r=>r.map(p=>[p[0]-mx,p[1]-my]));
 return{ch:id,R,w:x1-x0,y0:y0-my,y1:y1-my}}
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
 pieces.forEach((g,i)=>{const t=extrude(g.R,0,LT);
  if(S.knob){const k=pzDeep(g.R),r=Math.min(5,k.d-1.2);if(r>=2.5)t.push(...extrude(pzCircle(k.p[0],k.p[1],r),LT,LT+PZ_KNOB_H))}
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
