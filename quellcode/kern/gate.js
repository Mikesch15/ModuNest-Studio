/* ================= Freischaltung (Server-Pruefung) + Warenkorb ================= */
const gEl=id=>document.getElementById(id);
let SES=null;try{SES=JSON.parse(localStorage.getItem('mn-ses')||'null')}catch(e){}
const saveSes=()=>{try{SES?localStorage.setItem('mn-ses',JSON.stringify(SES)):localStorage.removeItem('mn-ses')}catch(e){}};
const apiCall=async(p,b)=>{try{const r=await fetch(CONFIG.api.replace(/\/$/,'')+'/'+p,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(b)});return{ok:r.ok,j:await r.json().catch(()=>({}))}}catch(e){return{ok:false,j:{error:'net'}}}};
function creditInfo(){const e=gEl('creditinfo');if(!e)return;e.textContent=!CONFIG.requireCode?tr('demoMode'):(SES&&SES.exp>Date.now()?trf('creditLeft',SES.left):tr('notUnlocked'))}
// Restguthaben gilt je Produkt: beim Oeffnen einer Produktseite fuer dieses Produkt nachfragen
async function refreshLeft(){if(!CONFIG.requireCode||!CONFIG.api||!SES||SES.exp<Date.now())return;const r=await apiCall('left',{token:SES.token,product:PRODUCT.id});if(r.ok){SES.left=r.j.left;saveSes();creditInfo()}}
function gate(msg){gEl('gate').style.display='grid';gEl('gmsg').textContent=msg||''}
async function redeem(code){const r=await apiCall('redeem',{code,product:PRODUCT.id});if(!r.ok)return tr(r.j.error==='rate'?'gateRate':r.j.error==='net'?'gateNet':r.j.error==='pending'?'gatePending':r.j.error==='blocked'?'gateBlocked':'gateBad');SES={token:r.j.token,left:r.j.left,exp:r.j.exp};saveSes();creditInfo();return''}
function unlockedNow(){if(!CONFIG.requireCode)return true;if(!CONFIG.api){gate(tr('gateCfg'));return false}if(!SES||SES.exp<Date.now()){gate();return false}return true}
/* Abrechnung pro Kiste (Modul). cfgs = je Konfiguration die Kistenmasse [lang,kurz,hoch]; der Server bucht nur ab,
   was nicht innerhalb 24 h schon bezahlt wurde (gleiche Kistenzahl, je Mass max. 5 mm Abweichung). */
async function charge(cfgs){if(!CONFIG.requireCode)return{n:0,free:0};const r=await apiCall('consume',{token:SES.token,cfgs,product:PRODUCT.id});
 if(r.ok){SES.left=r.j.left;saveSes();creditInfo();return{n:r.j.n||0,free:(r.j.free||[]).length}}
 if(r.j.error==='credits'){SES.left=r.j.left||0;saveSes();creditInfo();gate(tr('gateEmpty'))}else if(r.j.error==='net')gate(tr('gateNet'));else if(r.j.error==='closed')gate(tr('gateClosed'));else if(r.j.error==='blocked'){SES=null;saveSes();creditInfo();gate(tr('gateBlocked'))}else{SES=null;saveSes();creditInfo();gate(tr('gateBad'))}return null}
gEl('gok').onclick=async()=>{const m=await redeem(gEl('gcode').value);if(m)gEl('gmsg').textContent=m;else gEl('gate').style.display='none'};
gEl('gx').onclick=()=>{gEl('gate').style.display='none'};
/* Warenkorb (pro Produkt eigener Speicher). Produkt liefert snap/applySnap/snapName/snapCount/snapInfo und build() -> {ok,err,parts,units} */
let CART=[];try{CART=JSON.parse(localStorage.getItem(PRODUCT.store+'-cart')||'[]')}catch(e){}
const saveCart=()=>{try{localStorage.setItem(PRODUCT.store+'-cart',JSON.stringify(CART))}catch(e){}};
function addCart(){const s=PRODUCT.snap();s.name=PRODUCT.snapName(s);CART.push(s);saveCart();renderCart()}
function cartCard(){const c=card('cart');c.id='cartcard';para(c,'cartHint');const ci=document.createElement('p');ci.id='creditinfo';c.append(ci);const cl=document.createElement('div');cl.id='cartlist';c.append(cl);btn(c,'addCart',addCart);const cx=document.createElement('button');cx.id='cartexp';cx.className='btn pri';cx.onclick=exportCart;c.append(cx);renderCart();creditInfo();refreshLeft();btn(c,'shareBtn',shareLink);return c}
// Konfiguration als Link (steht ganz im Link, kein Server noetig)
async function shareLink(e){const d=btoa(unescape(encodeURIComponent(JSON.stringify(PRODUCT.snap())))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,''),url=location.href.split('#')[0]+'#c='+d,b=e&&e.target;
 if(navigator.share){try{await navigator.share({title:document.title,url});return}catch(x){}}try{await navigator.clipboard.writeText(url);if(b){b.textContent=tr('shareDone');setTimeout(()=>b.textContent=tr('shareBtn'),1800)}}catch(x){prompt(tr('shareBtn'),url)}}
// Nach dem Download: so geht es weiter (Texte nextT/next1..3, je Produkt anpassbar)
function showNext(){let w=document.getElementById('nextw');if(!w){w=document.createElement('div');w.id='nextw';document.body.append(w)}
 w.innerHTML=`<div class="hbox"><h2>${tr('nextT')}</h2><ol><li>${tr('next1')}</li><li>${tr('next2')}</li><li>${tr('next3')}</li></ol><button>${tr('nextOk')}</button></div>`;w.style.display='grid';w.querySelector('button').onclick=()=>w.style.display='none'}
function renderCart(){const e=gEl('cartlist'),x=gEl('cartexp');if(!e)return;e.innerHTML='';
 CART.forEach((it,i)=>{const r=document.createElement('div');r.className='crow';
  const no=document.createElement('span');no.className='cno';no.textContent=i+1;
  const m=document.createElement('div');m.className='cmain';const n=document.createElement('input');n.type='text';n.size=1;n.value=it.name;n.setAttribute('aria-label',tr('cartName'));n.onchange=()=>{it.name=n.value.replace(/[^\w\- ]+/g,'').trim()||'Konfig';n.value=it.name;saveCart()};
  const d=document.createElement('small');d.textContent=PRODUCT.snapInfo(it);m.append(n,d);
  const l=document.createElement('button');l.className='cic';l.textContent='↺';l.title=l.ariaLabel=tr('cartLoad');l.onclick=()=>{PRODUCT.applySnap(it);buildUI();changed()};
  const del=document.createElement('button');del.className='cic';del.textContent='✕';del.title=del.ariaLabel=tr('cartDel');del.onclick=()=>{CART.splice(i,1);saveCart();renderCart()};
  r.append(no,m,l,del);e.append(r)});
 const ok=!built||built.ok;
 if(x){x.textContent=CART.length?trf('cartExpN',CART.reduce((a,c)=>a+PRODUCT.snapCount(c),0)):trf('cartExpOne',built&&built.ok?built.units.length:PRODUCT.snapCount(PRODUCT.snap()));x.disabled=!CART.length&&!ok}}
async function exportCart(){if(!unlockedNow())return;let msg='';const keep=PRODUCT.snap();if(!keep.name)keep.name=PRODUCT.snapName(keep);const list=CART.length?CART:[keep];
 const st=document.getElementById('status'),x=gEl('cartexp');const files=[],cfgs=[];if(x)x.disabled=true;
 try{for(let i=0;i<list.length;i++){st.innerHTML='<b>'+tr('exporting')+' '+(i+1)+'/'+list.length+'</b>';await new Promise(r=>setTimeout(r,30));
   PRODUCT.applySnap(list[i]);const r=await PRODUCT.build(9,.02);if(!r.ok)throw new Error(list[i].name+': '+r.err);cfgs.push(r.units);
   const dir=(i+1)+'-'+list[i].name+'/',arr=arrange(r.parts,'print');
   files.push({name:dir+list[i].name+'.3mf',data:new Uint8Array(await threeMF(arr.map(p=>({...p,color:PRODUCT.color?PRODUCT.color(p):S[p.key]}))).arrayBuffer())});
   r.parts.forEach((p,k)=>files.push({name:dir+'stl/'+(k+1)+'-'+p.name+(p.qty>1?'_x'+p.qty:'')+'.stl',data:stlOf(p.pf?xf(p.tris,p.pf):p.tris)}))}
  PRODUCT.applySnap(keep);if(PRODUCT.notice)files.push({name:'LIZENZ-HINWEIS.txt',data:new TextEncoder().encode(PRODUCT.notice)});
  const c=await charge(cfgs);if(c){setTimeout(showNext,400);download(zip(files),CART.length?PRODUCT.file+'-Warenkorb.zip':PRODUCT.file+'-'+keep.name.normalize('NFD').replace(/[^\w\- ]/g,'').trim().replace(/ +/g,'-')+'.zip');if(CONFIG.requireCode)msg=[c.n?trf('charged',c.n):'',c.free?trf('chargedFree',c.free):''].filter(Boolean).join(' ')}}
 catch(e){st.textContent=e.message}
 finally{PRODUCT.applySnap(keep);buildUI();present(false);renderCart();if(msg)st.innerHTML+='<br><b>'+msg+'</b>'}}
