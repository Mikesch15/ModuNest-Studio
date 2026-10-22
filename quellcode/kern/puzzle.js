/* ================= Gemeinsam: Steckpuzzle (Namenspuzzle, Hofpuzzle) ================= */
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
 eLong:['Der Name ist zu lang für ein Brett (Buchstaben wären kleiner als 30 mm). Bitte kürzeren Namen oder Spitznamen wählen.','The name is too long for one board (letters would be smaller than 30 mm). Please choose a shorter name or nickname.'],
 wCut:['Höchstens 16 Zeichen – der Name wurde gekürzt.','At most 16 characters – the name was shortened.'],
 wScaled:['Der Name ist zu lang für das Druckbett – die Buchstaben wurden auf {0} mm verkleinert.','The name is too long for the print bed – letters were reduced to {0} mm.'],
 cartOne:['Namenspuzzle','Name puzzle'],
 i_colors:['Die Farben sind für die Vorschau und werden in der 3MF-Datei als Vorschlag für Bambu Studio mitgegeben. Die Buchstaben wechseln reihum durch sechs Farben.','Colours are for the preview and are passed to Bambu Studio in the 3MF file as a suggestion. Letters cycle through six colours.']
});
const PZ_MARGIN=12,PZ_WALL=5,PZ_KNOB_H=7;
const pzClr=()=>[.2,.3,.4,.5,.6][(S.fit|0)-1]??.4;          // Spiel je Seite (mm)
const pzName=s=>[...String(s||'').toUpperCase()].filter(c=>/[A-Z0-9ÄÖÜ ]/.test(c)).join('').replace(/\s+/g,' ').trim().slice(0,16);
// Name in 2 Zeilen teilen: am Leerzeichen, das die Zeilen am gleichmaessigsten macht; ein einzelnes Wort ab 6 Zeichen (bei «2 Zeilen» immer) in der Mitte
function pzSplit(n,force){const w=n.split(' ');if(w.length>1){let best=null,bv=1e9;for(let k=1;k<w.length;k++){const a=w.slice(0,k).join(' '),b=w.slice(k).join(' '),v=Math.max(a.length,b.length);if(v<bv){bv=v;best=[a,b]}}return best}
 return n.length>=(force?2:6)?[n.slice(0,Math.ceil(n.length/2)),n.slice(Math.ceil(n.length/2))]:null}
async function buildPuzzle(res,tol,opt={}){
 try{await document.fonts.load('100px '+PZ_FONT)}catch(e){}
 const name=opt.name??pzName(S.name),sub=opt.sub??String(S.sub||'').slice(0,40).trim(),shapes=(opt.shapes??S.shapes).filter(id=>PZ_SHAPES[id]).slice(0,S.maxShapes||6);
 if(!name.replace(/ /g,'')&&!shapes.length)return{ok:false,err:tr('eName'),parts:[],units:[],info:{}};
 const clr=pzClr(),T=+S.T||12,Pd=Math.round(T*.5),LT=Pd+3,GAP=2*clr+PZ_WALL;
 const m=document.createElement('canvas').getContext('2d');m.font='100px '+PZ_FONT;const capR=m.measureText('H').actualBoundingBoxAscent/100;
 const maxW=250-2*PZ_MARGIN;
 // Name auf 1 oder 2 Zeilen (Auto: 2 Zeilen, sobald die Buchstaben auf einer Zeile verkleinert werden muessten).
 // Alle Buchstaben gleich gross; Groesse so waehlen, dass das Brett aufs Druckbett passt (Breite und Tiefe); mind. 30 mm (Kleinteile)
 const H0=+S.H||50,lineW=(t,H)=>[...t].reduce((s,ch)=>s+(ch===' '?.4*H:m.measureText(ch).width*H/capR/100),0)+(t.length-1)*GAP;
 const mode=opt.lines??(S.lines|0),two=pzSplit(name,mode===2);
 const lines=!name.replace(/ /g,'')?[]:two&&(mode===2||(mode===0&&lineW(name,H0)>maxW))?two:[name];
 let H=H0,Hs=+S.Hs||H0,scaled=false,lrows=[],frows=[],figs=[],RW=0,FW=0;const per=S.perRow||6;
 for(let pass=0;pass<6;pass++){
  if(lines.length){const lw=Math.max(...lines.map(t=>lineW(t,H)));if(lw>maxW){H=Math.floor(H*maxW/lw);scaled=true}
   if(H<30)return{ok:false,err:tr('eLong'),parts:[],units:[],info:{}};
   const fs=H/capR;lrows=lines.map(t=>{const row=[];let x=0;
    for(const ch of t){if(ch===' '){x+=.4*H+GAP;continue}const g=pzLetter(ch,fs,H,res,tol);row.push({...g,cx:x+g.w/2});x+=g.w+GAP}
    const w=x-GAP;row.forEach(g=>g.cx-=w/2);row.W=w;return row});RW=Math.max(...lrows.map(r=>r.W))}
  // Figuren-Reihe (gleiche Groesse wie die Buchstaben, falls noetig kleiner)
  if(shapes.length){if(Hs<30)return{ok:false,err:tr('eShapes'),parts:[],units:[],info:{}};// Figuren in Reihen zu hoechstens per Stueck
   figs=shapes.map(id=>pzShape(id,Hs,res,tol));frows=[];for(let i=0;i<figs.length;i+=per)frows.push(figs.slice(i,i+per));FW=Math.max(...frows.map(r=>pzRow(r,GAP)))}
  if(RW>maxW){H=Math.floor(H*maxW/RW-1);scaled=true;continue}
  if(FW>maxW){Hs=Math.floor(Hs*maxW/FW-1);continue}
  // Tiefe pruefen (Druckbett 250 mm): alles gemeinsam verkleinern
  const dep=lrows.concat(frows).filter(r=>r.length).reduce((t,r)=>t+Math.max(...r.map(g=>g.y1))-Math.min(...r.map(g=>g.y0))+2*clr+PZ_WALL+5,0)-PZ_WALL-5+2*PZ_MARGIN+(sub?Math.min(9,H*.22)+6:0);
  if(dep>250){const f=250/dep;H=Math.floor(H*f-1);Hs=Math.floor(Hs*f-1);scaled=scaled||lines.length>0;continue}
  break}
 const letters=lrows.flat();
 // Reihen uebereinander, darunter optional die gravierte Zeile
 const rows=lrows.concat(frows).filter(r=>r.length),ext=r=>[Math.min(...r.map(g=>g.y0))-clr,Math.max(...r.map(g=>g.y1))+clr],RGAP=PZ_WALL+5;
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

function arrange(parts,mode){return mode==='asm'?parts.flatMap(p=>p.asm.map(f=>({...p,tris:xf(p.tris,f)}))):arrangePrint(parts)}
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
 download(zip(r.map((p,i)=>({name:`${i+1}-${p.name}.stl`,data:stlOf(p.tris)}))),PRODUCT.file+'-Passungsprobe.zip')}
