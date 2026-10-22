/* ================= Namenspuzzle: Zustand ================= */
const S={name:'LINA',sub:'',lines:0,shapes:[],H:50,T:10,knob:true,fit:3,view:'asm',hide:{},cBoard:'#ead9bd',cL0:'#c46546',cL1:'#5f9b8c',cL2:'#e2ad3f',cL3:'#5b7db1',cL4:'#9a6fae',cL5:'#7aa35a'};
try{Object.assign(S,JSON.parse(localStorage.getItem('np-state')||'{}'))}catch(e){}
if(!Array.isArray(S.shapes))S.shapes=[];

/* ================= Namenspuzzle: Oberflaeche ================= */
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
