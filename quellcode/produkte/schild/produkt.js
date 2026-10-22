/* ================= Stall- & Tuerschild: Texte und Zustand (Figuren/Relief in kern/figuren.js) ================= */
Object.assign(L,{
 tag:['Dein Schild. Dein Hof. Dein Druck.','Your sign. Your farm. Your print.'],
 help1:['Gib den Namen ein und auf Wunsch eine zweite Zeile, z. B. «Hof Sonnenberg» oder ein Geburtsdatum.','Enter the name and optionally a second line, e.g. a farm name or a date.'],
 help2:['Wähle Figur, Form, Schrift, Grösse und Farben. Die 3D-Vorschau zeigt alles sofort.','Choose figure, shape, font, size and colours. The 3D preview updates instantly.'],
 help3:['Unter «Herunterladen» holst du die Datei. Dafür brauchst du die Bestellnummer deines Etsy-Kaufs. Jedes Schild zählt 1.','Get the file under «Download». You need the order number of your Etsy purchase. Each sign counts 1.'],
 help4:['Drucke flach ohne Stützen. Für zwei Farben in Bambu Studio auf der angezeigten Höhe einen Farbwechsel einfügen.','Print flat without supports. For two colours, add a colour change in Bambu Studio at the height shown.'],
 helpTip:['Tipp: Bei jedem Abschnitt erklärt dir das ⓘ, was die Einstellungen bewirken.','Tip: in every section, the ⓘ explains what the settings do.'],
 scText:['Text','Text'],scT1:['Name','Name'],scT2:['Zweite Zeile (optional)','Second line (optional)'],scFont:['Schrift','Font'],fn_KFModern:['Klar','Clear'],fn_Script:['Schreibschrift','Script'],
 scFig:['Figur','Figure'],sh_none:['keine','none'],
 scShape:['Form & Grösse','Shape & size'],scForm:['Form','Shape'],fo_rect:['Rechteck','Rectangle'],fo_oval:['Oval','Oval'],fo_arch:['Bogen','Arch'],
 scW:['Breite','Width'],scH1:['Schrifthöhe','Letter height'],scT:['Plattendicke','Plate thickness'],scRel:['Reliefhöhe','Relief height'],scRim:['Rand','Border'],scHoles:['2 Löcher zum Anschrauben','2 screw holes'],
 cBase:['Platte','Plate'],cText:['Schrift & Figur','Text & figure'],
 sSize:['Grösse','Size'],sThick:['Dicke','Thickness'],sMat:['Filament max.','Filament max.'],
 scChange:['Zweifarbig: in Bambu Studio bei {0} mm einen Farbwechsel einfügen.','Two colours: add a colour change at {0} mm in Bambu Studio.'],
 scSmall:['Die Schrift wurde auf {0} mm verkleinert, damit alles aufs Schild passt.','The letters were reduced to {0} mm to fit the sign.'],
 eText:['Bitte einen Namen eingeben.','Please enter a name.'],
 i_scText:['Name: erhabene Hauptschrift. Zweite Zeile: kleiner darunter. Schrift: klar oder Schreibschrift.','Name: raised main text. Second line: smaller below. Font: clear or script.'],
 i_scFig:['Die Figur steht links neben dem Text und ist erhaben wie die Schrift; ihre Linien sind vertieft.','The figure sits left of the text and is raised like the letters; its lines are recessed.'],
 i_scShape:['Breite: Schildbreite (Höhe ergibt sich aus dem Inhalt). Schrifthöhe: Grösse der Hauptschrift – wird verkleinert, falls zu breit. Rand: erhabener Rahmen. Löcher: zum Anschrauben (ca. 4 mm Schrauben).','Width: sign width (height follows the content). Letter height: main text size – reduced if too wide. Border: raised frame. Holes: for screws (about 4 mm).'],
 i_colors:['Die Farben sind für die Vorschau. Das Schild ist ein Teil: für zwei Farben in Bambu Studio einen Farbwechsel auf der angezeigten Höhe einfügen.','Colours are for the preview. The sign is one part: for two colours add a colour change at the shown height in Bambu Studio.'],
 cartOne:['Schild','Sign']
});
const S={t1:'BELLA',t2:'Hof Sonnenberg',font:'KFModern',fig:'pferd',form:'rect',W:180,H1:30,T:4,h:2,rim:true,holes:true,view:'asm',hide:{},cBase:'#ead9bd',cText:'#1e1a17'};
try{Object.assign(S,JSON.parse(localStorage.getItem('sc-state')||'{}'))}catch(e){}

/* ================= Schild: Geometrie ================= */
async function buildSign(res,tol){
 for(const f of ['KFModern','Script'])try{await document.fonts.load('100px '+f)}catch(e){}
 const t1=String(S.t1||'').trim().slice(0,30),t2=String(S.t2||'').trim().slice(0,40),fig=PZ_SHAPES[S.fig]?S.fig:'',fam=S.font==='Script'?'Script':'KFModern';
 if(!t1)return{ok:false,err:tr('eText'),parts:[],units:[],info:{}};
 const W=Math.max(100,Math.min(250,+S.W||180)),T=+S.T||4,h=+S.h||2,form=S.form||'rect',m=S.rim?Math.max(13,W*.06):Math.max(9,W*.05),hz=S.holes?11:0;
 const sq=form==='oval'?.78:1,gap=Math.max(5,W*.03);
 // Figur so hoch wie der Textblock; groesste Schrifthoehe, bei der Text + Figur in die Breite passen (Breiten wachsen linear mit der Hoehe)
 const kf=(1+(t2?.42+.35:0))*1.05,g0=fig?pzShape(fig,100,res,tol):null,rw=g0?g0.w/100:0,bw=W*sq-2*m-2*hz-(fig?gap:0);
 const a1=fitFont(t1,fam,100,1e9).w/100,a2=t2?fitFont(t2,fam,100,1e9).w/100*.42:0;
 const H1=Math.max(8,Math.min(+S.H1||30,bw/(a1+rw*kf),t2?bw/(a2+rw*kf):1e9)),H2=Math.max(7,H1*.42),fh=H1*kf;
 const g=fig?pzShape(fig,fh,res,tol):null,avail=bw-(g?g.w:0),f1=fitFont(t1,fam,H1,avail),f2=t2?fitFont(t2,fam,H2,avail):null;
 const H1e=f1.cap,H2e=f2?f2.cap:0,lg=t2?H1e*.35:0,blk=H1e+(t2?H2e+lg:0),cH=Math.max(blk,g?g.y1-g.y0:0);
 let Hb=cH+2*m;if(form==='oval')Hb=cH/.72+2*m*.6;const arch=form==='arch'?Math.min(W*.18,Hb*.45):0;Hb+=arch;
 const cy=-arch/2,tw=Math.max(f1.w,f2?f2.w:0),cw=(g?g.w+gap:0)+tw,x0=-cw/2,tx=x0+(g?g.w+gap:0)+tw/2;
 const shape=x=>{x.beginPath();if(form==='oval')x.ellipse(0,0,W/2,Hb/2,0,0,6.2832);else if(form==='arch'){x.moveTo(-W/2,-Hb/2+6);x.quadraticCurveTo(-W/2,-Hb/2,-W/2+6,-Hb/2);x.lineTo(W/2-6,-Hb/2);x.quadraticCurveTo(W/2,-Hb/2,W/2,-Hb/2+6);x.lineTo(W/2,Hb/2-arch);x.ellipse(0,Hb/2-arch,W/2,arch,0,0,Math.PI);x.closePath()}else x.roundRect(-W/2,-Hb/2,W,Hb,Math.min(10,Hb/5))};
 const ring=d=>pzRings(W+6,Hb+6,res,tol,d),hx=W/2*sq-m-hz/2;
 const A=ring(x=>{shape(x);x.fill();if(S.holes){x.globalCompositeOperation='destination-out';for(const s of[-1,1]){x.beginPath();x.arc(s*hx,cy,2.3,0,6.2832);x.fill()}}});
 const R=ring(x=>{
  if(S.rim){x.save();shape(x);x.clip();x.lineJoin='round';x.lineWidth=14;shape(x);x.stroke();x.globalCompositeOperation='destination-out';x.lineWidth=8;shape(x);x.stroke();x.restore()}
  const top=cy+blk/2;pzText(x,t1,fam,f1.fs,tx,top-H1e);if(f2)pzText(x,t2,fam,f2.fs,tx,top-H1e-lg-H2e);
  if(g){const gx=x0+g.w/2,gy=cy;pzPath(x,g.R,gx,gy);x.fill('evenodd');if(g.D.length){x.globalCompositeOperation='destination-out';pzPath(x,g.D,gx,gy);x.fill('evenodd');x.globalCompositeOperation='source-over'}}});
 const base=extrude(A,0,T),rel=extrude(R,T,T+h);
 return{ok:true,err:'',parts:[{key:'cBase',name:'Schild',tris:Float32Array.from(reliefBody(A,R,T,h)),prev:[{key:'cBase',name:'Platte',tris:Float32Array.from(base)},{key:'cText',name:'Relief',tris:Float32Array.from(rel)}]}],
  units:[[Math.round(W),Math.round(Hb),pzHash(t1+'|'+t2+'|'+fig)]],info:{W,Hb,T,h,H1:Math.round(H1e),small:H1e<(+S.H1||30)-1}}}

/* ================= Schild: Oberflaeche, Vorschau ================= */
// Vorschau zusammengebaut zweifarbig; zum Drucken/Export ein Koerper
function arrange(parts,mode){return mode==='asm'?parts.flatMap(p=>p.prev||[p]):arrangePrint(parts.map(({prev,...p})=>p))}
function ui(){if(!featOn('figur'))S.fig='';if(!featOn('script'))S.font='KFModern';if(!featOn('formen'))S.form='rect';
 let c=card('scText');tInput(c,'t1','scT1');tInput(c,'t2','scT2');if(featOn('script'))seg(c,'font','scFont',[['KFModern','fn_KFModern'],['Script','fn_Script']]);
 if(featOn('figur')){c=card('scFig');const sg=document.createElement('div');sg.className='seg shp';
  ['',...PZ_SHAPE_IDS].forEach(id=>{const b=document.createElement('button');b.dataset.k='sh_'+(id||'none');const upd=()=>{const on=(S.fig||'')===id;b.classList.toggle('on',on);b.dataset.n=on?'✓':''};upd();b._u=upd;
   b.onclick=()=>{S.fig=id;sg.querySelectorAll('button').forEach(x=>x._u());changed()};sg.append(b)});c.append(sg)}
 c=card('scShape');if(featOn('formen'))seg(c,'form','scForm',[['rect','fo_rect'],['oval','fo_oval'],['arch','fo_arch']]);
 rng(c,'W','scW',100,250,5,'mm');rng(c,'H1','scH1',12,60,1,'mm');rng(c,'T','scT',3,8,.5,'mm');rng(c,'h','scRel',1,4,.5,'mm');chk(c,'rim','scRim');chk(c,'holes','scHoles');
 c=card('colors');const cc=document.createElement('div');cc.className='colors';
 ['cBase','cText'].forEach(k=>{const l=document.createElement('label'),s=document.createElement('span');s.dataset.k=k;const i=document.createElement('input');i.type='color';i.value=S[k];i.oninput=()=>{S[k]=i.value;draw();save()};l.append(s,i);cc.append(l)});c.append(cc);
 cartCard()}
function present(reframe){if(!built)return;const arr=built.ok?arrange(built.parts,S.view):[];
 setMeshes(arr.map(p=>({...p,tris:clean(p.tris)})));if(reframe&&arr.length)frame(arr);draw();
 document.querySelectorAll('.vt button').forEach(b=>b.classList.toggle('on',b.dataset.v===S.view));
 const i=built.info||{},mass=built.ok?Math.abs(volume(built.parts[0].tris))/1000*1.24:0;
 document.getElementById('stats').innerHTML=built.ok?[[tr('sSize'),Math.round(i.W)+' × '+Math.round(i.Hb)+' mm'],[tr('sThick'),(i.T+i.h)+' mm'],[tr('sMat'),'≈ '+Math.round(mass)+' g']].map(a=>`<div class="stat"><span>${a[0]}</span><strong>${a[1]}</strong></div>`).join(''):'';
 status.innerHTML=built.ok?(trf('scChange',i.T)+(i.small?'<br><b>'+trf('scSmall',i.H1)+'</b>':'')):'<b>'+built.err+'</b>';renderCart()}

/* ================= Schild: Produktbeschreibung fuer den Kern ================= */
const SC_KEYS=['t1','t2','font','fig','form','W','H1','T','h','rim','holes','cBase','cText'];
const PRODUCT={id:'schild',name:'Schild',file:'Schild',store:'sc',
 unit:{one:['Schild','sign'],n:['Schild(er)','sign(s)'],many:['Schilder','signs']},
 build:(res,tol)=>buildSign(res,tol),
 snap(){const o={};SC_KEYS.forEach(k=>o[k]=S[k]);return{S:o}},
 applySnap(s){Object.assign(S,s.S)},
 snapName:s=>'Schild '+(s.S.t1||'?'),
 snapCount:()=>1,
 snapInfo:s=>tr('cartOne')+' · '+[s.S.t1,s.S.t2].filter(Boolean).join(' / ')+' · '+s.S.W+' mm'};
