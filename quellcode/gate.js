/* ================= Freischaltung (Server-Pruefung) + Warenkorb ================= */
const gEl=id=>document.getElementById(id);
let SES=null;try{SES=JSON.parse(localStorage.getItem('mn-ses')||'null')}catch(e){}
const saveSes=()=>{try{SES?localStorage.setItem('mn-ses',JSON.stringify(SES)):localStorage.removeItem('mn-ses')}catch(e){}};
const apiCall=async(p,b)=>{try{const r=await fetch(CONFIG.api.replace(/\/$/,'')+'/'+p,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(b)});return{ok:r.ok,j:await r.json().catch(()=>({}))}}catch(e){return{ok:false,j:{error:'net'}}}};
function creditInfo(){const e=gEl('creditinfo');if(!e)return;e.textContent=!CONFIG.requireCode?tr('demoMode'):(SES&&SES.exp>Date.now()?trf('creditLeft',SES.left):tr('notUnlocked'))}
function gate(msg){gEl('gate').style.display='grid';gEl('gmsg').textContent=msg||''}
async function redeem(code){const r=await apiCall('redeem',{code});if(!r.ok)return tr(r.j.error==='rate'?'gateRate':r.j.error==='net'?'gateNet':'gateBad');SES={token:r.j.token,left:r.j.left,exp:r.j.exp};saveSes();creditInfo();return''}
function unlockedNow(){if(!CONFIG.requireCode)return true;if(!CONFIG.api){gate(tr('gateCfg'));return false}if(!SES||SES.exp<Date.now()){gate();return false}return true}
/* Abrechnung pro Kiste (Modul). cfgs = je Konfiguration die Kistenmasse [lang,kurz,hoch]; der Server bucht nur ab,
   was nicht innerhalb 24 h schon bezahlt wurde (gleiche Kistenzahl, je Mass max. 5 mm Abweichung). */
async function charge(cfgs){if(!CONFIG.requireCode)return{n:0,free:0};const r=await apiCall('consume',{token:SES.token,cfgs});
 if(r.ok){SES.left=r.j.left;saveSes();creditInfo();return{n:r.j.n||0,free:(r.j.free||[]).length}}
 if(r.j.error==='credits'){SES.left=r.j.left||0;saveSes();creditInfo();gate(tr('gateEmpty'))}else if(r.j.error==='net')gate(tr('gateNet'));else{SES=null;saveSes();creditInfo();gate(tr('gateBad'))}return null}
gEl('gok').onclick=async()=>{const m=await redeem(gEl('gcode').value);if(m)gEl('gmsg').textContent=m;else gEl('gate').style.display='none'};
gEl('gx').onclick=()=>{gEl('gate').style.display='none'};
/* Warenkorb */
let CART=[];try{CART=JSON.parse(localStorage.getItem('mn-cart')||'[]')}catch(e){}
const saveCart=()=>{try{localStorage.setItem('mn-cart',JSON.stringify(CART))}catch(e){}};
const SKEYS=['wall','r','stack','conn','sharpSeam','filler','tex','fit','mode','cBox','cLid','cTray','cKey'];
const snap=()=>{const o={};SKEYS.forEach(k=>o[k]=S[k]);return{S:o,PL:JSON.parse(JSON.stringify(PL))}};
function applySnap(s){Object.assign(S,s.S);for(const k in PL)delete PL[k];Object.assign(PL,JSON.parse(JSON.stringify(s.PL)))}
const snapName=s=>(s.S.mode==='plan'?'Plan':'Box')+' '+s.PL.W+'x'+s.PL.D+'x'+s.PL.H;
var planOk=true;
function addCart(){const s=snap();s.name=snapName(s);CART.push(s);saveCart();renderCart()}
const snapCount=s=>s.S.mode==='plan'?(s.PL.mods||[]).length:1;
const snapInfo=s=>s.S.mode==='plan'?trf('cartMods',snapCount(s)):tr('cartOne');
const boxDims=sol=>sol.items.map(it=>[Math.max(it.w,it.d),Math.min(it.w,it.d),it.h].map(v=>Math.round(v*10)/10));
function renderCart(){const e=gEl('cartlist'),x=gEl('cartexp');if(!e)return;e.innerHTML='';
 CART.forEach((it,i)=>{const r=document.createElement('div');r.className='crow';
  const no=document.createElement('span');no.className='cno';no.textContent=i+1;
  const m=document.createElement('div');m.className='cmain';const n=document.createElement('input');n.type='text';n.size=1;n.value=it.name;n.setAttribute('aria-label',tr('cartName'));n.onchange=()=>{it.name=n.value.replace(/[^\w\- ]+/g,'').trim()||'Konfig';n.value=it.name;saveCart()};
  const d=document.createElement('small');d.textContent=snapInfo(it)+' · '+it.PL.W+' × '+it.PL.D+' × '+it.PL.H+' mm';m.append(n,d);
  const l=document.createElement('button');l.className='cic';l.textContent='↺';l.title=l.ariaLabel=tr('cartLoad');l.onclick=()=>{applySnap(it);buildUI();changed()};
  const del=document.createElement('button');del.className='cic';del.textContent='✕';del.title=del.ariaLabel=tr('cartDel');del.onclick=()=>{CART.splice(i,1);saveCart();renderCart()};
  r.append(no,m,l,del);e.append(r)});
 if(x){x.textContent=CART.length?trf('cartExpN',CART.reduce((a,c)=>a+snapCount(c),0)):trf('cartExpOne',built&&built.sol&&built.sol.ok?built.sol.items.length:snapCount(snap()));x.disabled=!CART.length&&!planOk}}
async function exportCart(){if(!unlockedNow())return;let msg='';const keep=snap();if(!keep.name)keep.name=snapName(keep);const list=CART.length?CART:[keep];
 const st=document.getElementById('status'),x=gEl('cartexp');const files=[],cfgs=[];if(x)x.disabled=true;
 try{for(let i=0;i<list.length;i++){st.innerHTML='<b>'+tr('exporting')+' '+(i+1)+'/'+list.length+'</b>';await new Promise(r=>setTimeout(r,30));
   applySnap(list[i]);const r=await buildPlan(9,.02);if(!r.sol.ok)throw new Error(list[i].name+': '+r.sol.msgs.map(x=>x.join(' ')).join('; '));cfgs.push(boxDims(r.sol));
   const dir=(i+1)+'-'+list[i].name+'/',arr=arrange(r.parts,'print');
   files.push({name:dir+list[i].name+'.3mf',data:new Uint8Array(await threeMF(arr.map(p=>({...p,color:S[p.key]}))).arrayBuffer())});
   r.parts.forEach((p,k)=>files.push({name:dir+'stl/'+(k+1)+'-'+p.name+(p.qty>1?'_x'+p.qty:'')+'.stl',data:stlOf(p.pf?xf(p.tris,p.pf):p.tris)}))}
  applySnap(keep);
  const c=await charge(cfgs);if(c){download(zip(files),CART.length?'ModuNest-Warenkorb.zip':'ModuNest-'+keep.name.replace(/ /g,'-')+'.zip');if(CONFIG.requireCode)msg=[c.n?trf('charged',c.n):'',c.free?trf('chargedFree',c.free):''].filter(Boolean).join(' ')}}
 catch(e){st.textContent=e.message}
 finally{applySnap(keep);buildUI();present(false);renderCart();if(msg)st.innerHTML+='<br><b>'+msg+'</b>'}}
