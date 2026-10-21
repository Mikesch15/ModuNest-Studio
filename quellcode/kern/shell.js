/* ================= Kern: App-Rahmen =================
   Jedes Produkt (produkte/<id>/produkt.js) liefert:
   S (Zustand, mit view/hide/mode), PRODUCT {id,name,file,store,unit,build,snap,applySnap,snapName,snapCount,snapInfo,units,color?,onChange?},
   ui() (Karten bauen, cartCard() einfuegen), present(reframe) (Vorschau/Statistik/Meldungen), arrange(parts,mode) ('print' -> arrangePrint). */
function bbox(t){const a=[1e9,1e9,1e9],b=[-1e9,-1e9,-1e9];for(let i=0;i<t.length;i+=3)for(let k=0;k<3;k++){a[k]=Math.min(a[k],t[i+k]);b[k]=Math.max(b[k],t[i+k])}return{a,b}}
function xf(t,fn){const o=new Float32Array(t.length);for(let i=0;i<t.length;i+=3){const p=fn(t[i],t[i+1],t[i+2]);o[i]=p[0];o[i+1]=p[1];o[i+2]=p[2]}return o}
/* Teile nebeneinander auf Druckplatten-Breite legen (Druckanordnung, 3MF) */
function arrangePrint(parts){const gap=10,maxW=246;let cx=0,cy=0,rowH=0;const out=[];
 for(const p of parts.map(p=>p.pf?{...p,tris:xf(p.tris,p.pf)}:p).flatMap(p=>p.qty>1?Array.from({length:p.qty},(_,i)=>({...p,name:p.name+' '+(i+1)})):[p])){const{a,b}=bbox(p.tris),w=b[0]-a[0],d=b[1]-a[1];if(cx>0&&cx+w>maxW){cx=0;cy+=rowH+gap;rowH=0}
  out.push({...p,tris:xf(p.tris,(x,y,z)=>[x-a[0]+cx,y-a[1]+cy,z])});cx+=w+gap;rowH=Math.max(rowH,d)}
 let mnx=1e9,mny=1e9,mxx=-1e9,mxy=-1e9;out.forEach(p=>{const{a,b}=bbox(p.tris);mnx=Math.min(mnx,a[0]);mny=Math.min(mny,a[1]);mxx=Math.max(mxx,b[0]);mxy=Math.max(mxy,b[1])});
 const ox=(mnx+mxx)/2,oy=(mny+mxy)/2;out.forEach(p=>p.tris=xf(p.tris,(x,y,z)=>[x-ox,y-oy,z]));out.span=[mxx-mnx,mxy-mny];return out}
function frame(parts){let a=[1e9,1e9,1e9],b=[-1e9,-1e9,-1e9];parts.forEach(p=>{const q=bbox(p.tris);for(let k=0;k<3;k++){a[k]=Math.min(a[k],q.a[k]);b[k]=Math.max(b[k],q.b[k])}});
 const s=[b[0]-a[0],b[1]-a[1],b[2]-a[2]];cam.tx=(a[0]+b[0])/2;cam.ty=(a[1]+b[1])/2;cam.tz=(a[2]+b[2])/2;cam.el=.85;cam.dist=Math.max(s[0]*2.2,s[1]*2.6,s[2]*3.4,140)}
fit=()=>{if(built)frame(arrange(built.parts,S.view))};

/* ================= UI ================= */
const panel=document.getElementById('panel'),status=document.getElementById('status');
/*UIBUILDERS*/
function btn(c,lk,fn){const b=document.createElement('button');b.className='btn';b.dataset.k=lk;b.onclick=fn;c.append(b)}
function para(c,lk){const p=document.createElement('p');p.dataset.k=lk;c.append(p)}
/* ⓘ-Knopf je Abschnitt: blendet den Text i_<Titel> ein */
function addInfo(){panel.querySelectorAll('.card>h2').forEach(h=>{const k='i_'+h.dataset.k;if(!L[k])return;const w=document.createElement('div');w.className='ch';h.replaceWith(w);
 const b=document.createElement('button');b.className='ib';b.textContent='i';b.setAttribute('aria-expanded','false');const p=document.createElement('p');p.className='info';p.dataset.k=k;p.hidden=true;
 b.onclick=()=>{p.hidden=!p.hidden;b.classList.toggle('on',!p.hidden);b.setAttribute('aria-expanded',String(!p.hidden))};w.append(h,b);w.after(p)})}
function buildUI(){panel.innerHTML='<div class="stats" id="stats"></div>';ui();addInfo();applyLang()}
document.querySelectorAll('.vt button').forEach(b=>b.onclick=()=>{S.view=b.dataset.v;present(true)});
function applyLang(){document.documentElement.lang=lang?'en':'de';document.querySelectorAll('[data-k]').forEach(e=>e.textContent=tr(e.dataset.k));
 document.getElementById('tag').textContent=tr('tag');document.getElementById('langbtn').textContent=lang?'DE':'EN';document.querySelectorAll('.ib').forEach(b=>b.title=b.ariaLabel=tr('infoBtn'));document.getElementById('helpbtn').title=document.getElementById('helpbtn').ariaLabel=tr('helpBtn');
 renderCart();
 document.getElementById('gt').textContent=tr('gateT');document.getElementById('gd').textContent=tr('gateD');document.getElementById('gok').textContent=tr('gateB');
 document.querySelectorAll('.vt button').forEach(b=>b.textContent=tr(b.dataset.v))}
document.getElementById('langbtn').onclick=()=>{lang=lang?0:1;try{localStorage.setItem('mn-lang',lang)}catch(e){}buildUI();present(false)};
const save=()=>{try{localStorage.setItem(PRODUCT.store+'-state',JSON.stringify(S))}catch(e){}};
let timer=0,seq=0,built=null;
function changed(){panel.dataset.mode=S.mode||'';if(PRODUCT.onChange)PRODUCT.onChange();save();clearTimeout(timer);status.innerHTML='<b>'+tr('busy')+'</b>';timer=setTimeout(refresh,180)}
function clean(t){const o=[];for(let i=0;i<t.length;i+=9){const ux=t[i+3]-t[i],uy=t[i+4]-t[i+1],uz=t[i+5]-t[i+2],vx=t[i+6]-t[i],vy=t[i+7]-t[i+1],vz=t[i+8]-t[i+2];
 if(Math.hypot(uy*vz-uz*vy,uz*vx-ux*vz,ux*vy-uy*vx)>1e-6)for(let k=0;k<9;k++)o.push(t[i+k])}return Float32Array.from(o)}
async function refresh(){const my=++seq;const r=await PRODUCT.build(5,.05);if(my!==seq)return;r.mode=S.mode;const first=!built||built.mode!==S.mode;built=r;present(first)}
function threeMF(parts){const hex=h=>h.replace('#','').toUpperCase(),f=v=>v.toFixed(4);let objs='',mats='',items='';
 parts.forEach((p,i)=>{const{V,I}=weld(p.tris),id=i+2;mats+=`<base name="${p.name}" displaycolor="#${hex(p.color)}"/>`;
  let vs='',ts='';for(let k=0;k<V.length;k+=3)vs+=`<vertex x="${f(V[k])}" y="${f(V[k+1])}" z="${f(V[k+2])}"/>`;for(let k=0;k<I.length;k+=3)ts+=`<triangle v1="${I[k]}" v2="${I[k+1]}" v3="${I[k+2]}"/>`;
  objs+=`<object id="${id}" name="${p.name}" type="model" pid="1" pindex="${i}"><mesh><vertices>${vs}</vertices><triangles>${ts}</triangles></mesh></object>`;
  items+=`<item objectid="${id}" transform="1 0 0 0 1 0 0 0 1 128 128 0" printable="1"/>`});
 const model=`<?xml version="1.0" encoding="UTF-8"?><model unit="millimeter" xml:lang="en-US" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02"><metadata name="Title">${PRODUCT.name}</metadata><metadata name="Application">ModuNest Studio</metadata><resources><basematerials id="1">${mats}</basematerials>${objs}</resources><build>${items}</build></model>`;
 const ct=`<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/></Types>`;
 const rels=`<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>`;
 const e=new TextEncoder();return zip([{name:'[Content_Types].xml',data:e.encode(ct)},{name:'_rels/.rels',data:e.encode(rels)},{name:'3D/3dmodel.model',data:e.encode(model)}])}
/*GATE*/
const help=document.getElementById('help');document.getElementById('helpbtn').onclick=()=>{help.style.display='grid'};
document.getElementById('helpgo').onclick=()=>{help.style.display='none';try{localStorage.setItem('mn-help','1')}catch(e){}};
try{if(!localStorage.getItem('mn-help'))help.style.display='grid'}catch(e){}
document.getElementById('gl').addEventListener('pointerdown',()=>document.querySelector('.vhint').classList.add('gone'),{once:true});
panel.dataset.mode=S.mode||'';buildUI();refresh();
/* Mehrere Produkte: Knopf zur Produktauswahl; installierbar (PWA) ueber ../sw.js */
if(PRODUCT_COUNT>1){const h=document.getElementById('homebtn');h.hidden=false;h.title=h.ariaLabel=tr('home')}
/* Admin-Zugang nur fuer Mike: Knopf erscheint nur auf Geraeten, auf denen der Admin-Schluessel gespeichert ist;
   sonst 5x schnell aufs Logo tippen. Der Schutz selbst ist der Admin-Schluessel auf dem Server. */
try{if(localStorage.getItem('mna-key')||sessionStorage.getItem('mna-key'))document.getElementById('adminbtn').hidden=false}catch(e){}
{let n=0,t=0;document.querySelector('header .logo').addEventListener('click',()=>{const now=Date.now();n=now-t<600?n+1:1;t=now;if(n>=5)location.href='../../admin/'})}
if('serviceWorker' in navigator&&location.protocol.startsWith('http'))navigator.serviceWorker.register('../../sw.js',{scope:'../../'}).catch(()=>{});
</script>
</body>
</html>
