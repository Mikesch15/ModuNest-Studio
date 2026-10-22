/* ================= Hofpuzzle: Texte und Zustand (Puzzle-Logik in kern/puzzle.js, Figuren in kern/figuren.js) ================= */
Object.assign(L,{
 tag:['Dein Hof. Dein Puzzle. Dein Druck.','Your farm. Your puzzle. Your print.'],
 help1:['Tippe die Tiere und Dinge an, die ins Puzzle sollen – jedes wird ein eigenes Puzzleteil.','Tap the animals and things you want – each becomes its own puzzle piece.'],
 help2:['Wähle Grösse, Anzahl pro Reihe, Farben und auf Wunsch einen gravierten Titel. Die 3D-Vorschau zeigt alles sofort.','Choose size, pieces per row, colours and optionally an engraved title. The 3D preview updates instantly.'],
 help3:['Unter «Herunterladen» holst du die Dateien. Dafür brauchst du die Bestellnummer deines Etsy-Kaufs. Jedes Puzzle zählt 1.','Get your files under «Download». You need the order number of your Etsy purchase. Each puzzle counts 1.'],
 help4:['Drucke Brett und Teile ohne Stützen – am schönsten mit verschiedenen Farben.','Print board and pieces without supports – nicest in different colours.'],
 hpTitle:['Titel (optional, wird ins Brett graviert)','Title (optional, engraved into the board)'],hpText:['Titel','Title'],
 hpPer:['Teile pro Reihe','Pieces per row'],hpH:['Teilgrösse','Piece size'],
 i_pzShapes:['Tippe Figuren an, um sie ins Puzzle zu setzen (höchstens 10, Reihenfolge wie angetippt). Nochmals tippen entfernt sie.','Tap figures to add them to the puzzle (up to 10, in the order tapped). Tap again to remove.'],
 i_hpText:['Der Titel wird unten ins Brett graviert, z. B. «Hof Sonnenberg» oder ein Name.','The title is engraved at the bottom of the board, e.g. a farm name or a child\'s name.'],
 eName:['Bitte mindestens eine Figur wählen.','Please choose at least one figure.'],
 cartOne:['Hofpuzzle','Farm puzzle']
});
const S={name:'',sub:'Unser Hof',lines:0,shapes:['kuh','pferd','schwein','huhn','scheune','traktor'],maxShapes:10,perRow:3,Hs:55,H:55,T:10,knob:true,fit:3,view:'asm',hide:{},cBoard:'#ead9bd',cL0:'#c46546',cL1:'#5f9b8c',cL2:'#e2ad3f',cL3:'#5b7db1',cL4:'#9a6fae',cL5:'#7aa35a'};
try{Object.assign(S,JSON.parse(localStorage.getItem('hp-state')||'{}'))}catch(e){}
if(!Array.isArray(S.shapes))S.shapes=[];S.name='';S.maxShapes=10;

/* ================= Hofpuzzle: Oberflaeche ================= */
function ui(){if(!featOn('gravur'))S.sub='';
 let c=card('pzShapes');const sg=document.createElement('div');sg.className='seg shp';
 PZ_SHAPE_IDS.forEach(id=>{const b=document.createElement('button');b.dataset.k='sh_'+id;const upd=()=>{const n=S.shapes.indexOf(id);b.classList.toggle('on',n>=0);b.dataset.n=n>=0?n+1:''};upd();
  b.onclick=()=>{const n=S.shapes.indexOf(id);if(n>=0)S.shapes.splice(n,1);else if(S.shapes.length<S.maxShapes)S.shapes.push(id);sg.querySelectorAll('button').forEach(x=>x._u());changed()};b._u=upd;sg.append(b)});c.append(sg);
 if(featOn('gravur')){c=card('hpText');tInput(c,'sub','hpTitle')}
 c=card('pzSize');rng(c,'Hs','hpH',35,80,5,'mm');seg(c,'perRow','hpPer',[[2,'2'],[3,'3'],[4,'4'],[5,'5']]);rng(c,'T','pzT',8,20,1,'mm');chk(c,'knob','pzKnob');
 c=card('colors');const cc=document.createElement('div');cc.className='colors';
 ['cBoard','cL0','cL1','cL2','cL3','cL4','cL5'].forEach(k=>{const l=document.createElement('label'),s=document.createElement('span');s.dataset.k=k;const i=document.createElement('input');i.type='color';i.value=S[k];i.oninput=()=>{S[k]=i.value;draw();save()};l.append(s,i);cc.append(l)});c.append(cc);
 cartCard();
 c=card('pzFit');para(c,'pzFitText');btn(c,'pzFitDl',downloadPzTest);seg(c,'fit','pzFitPick',[[1,'1'],[2,'2'],[3,'3'],[4,'4'],[5,'5']]);
 const sp=document.createElement('p');sp.dataset.k='pzSafety';sp.className='note';c.append(sp)}

/* ================= Hofpuzzle: Produktbeschreibung fuer den Kern ================= */
const HP_KEYS=['sub','shapes','perRow','Hs','T','knob','fit','cBoard','cL0','cL1','cL2','cL3','cL4','cL5'];
const PRODUCT={id:'hofpuzzle',name:'Hofpuzzle',file:'Hofpuzzle',store:'hp',
 unit:{one:['Puzzle','puzzle'],n:['Puzzle','puzzle(s)'],many:['Puzzles','puzzles']},
 build:(res,tol)=>buildPuzzle(res,tol),
 snap(){const o={};HP_KEYS.forEach(k=>o[k]=k==='shapes'?S.shapes.slice():S[k]);return{S:o}},
 applySnap(s){Object.assign(S,s.S)},
 snapName:s=>'Hofpuzzle '+(s.S.shapes||[]).length,
 snapCount:()=>1,
 snapInfo:s=>tr('cartOne')+' · '+(s.S.shapes||[]).map(id=>tr('sh_'+id)).join(', ')+' · '+s.S.Hs+' mm'};
