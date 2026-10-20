/* ================= Anordnung ================= */
function bbox(t){const a=[1e9,1e9,1e9],b=[-1e9,-1e9,-1e9];for(let i=0;i<t.length;i+=3)for(let k=0;k<3;k++){a[k]=Math.min(a[k],t[i+k]);b[k]=Math.max(b[k],t[i+k])}return{a,b}}
function xf(t,fn){const o=new Float32Array(t.length);for(let i=0;i<t.length;i+=3){const p=fn(t[i],t[i+1],t[i+2]);o[i]=p[0];o[i+1]=p[1];o[i+2]=p[2]}return o}
function arrange(parts,mode){
 if(mode==='asm'&&(S.mode==='plan'||(parts[0]&&parts[0].asm)))return parts.flatMap(p=>p.asm.map(f=>({...p,tris:xf(p.tris,f)})));
 if(mode==='asm'){const fl=S.stack?FOOT:0;
  const ys=dvY(S.D);
  return parts.flatMap(p=>p.key==='cKey'?ys.flatMap(y=>built.info.kz.zs.map(zz=>({...p,tris:xf(p.tris,(x,yy,z)=>[x+S.W/2,yy+y,z])}))):[p]).map(p=>p.key==='cLid'?{...p,tris:xf(p.tris,(x,y,z)=>[x,-y,-z+S.H+LT+10])}:p.key==='cTray'?{...p,tris:xf(p.tris,(x,y,z)=>[x,y,z+fl+S.wall+.1])}:p)}
 const gap=10,maxW=246;let cx=0,cy=0,rowH=0;const out=[];
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
function ui(){
 let c=card('mode');seg(c,'mode','',[['single','mSingle'],['plan','mPlan']]);
 buildPlanUI();
 c=card('colors');const cc=document.createElement('div');cc.className='colors';
 ['cBox','cLid','cTray','cKey'].forEach(k=>{const l=document.createElement('label'),s=document.createElement('span');s.dataset.k=k;const i=document.createElement('input');i.type='color';i.value=S[k];i.oninput=()=>{S[k]=i.value;draw();save()};l.append(s,i);cc.append(l)});c.append(cc);
 c=card('cart');c.id='cartcard';para(c,'cartHint');const ci=document.createElement('p');ci.id='creditinfo';c.append(ci);const cl=document.createElement('div');cl.id='cartlist';c.append(cl);btn(c,'addCart',addCart);const cx=document.createElement('button');cx.id='cartexp';cx.className='btn pri';cx.onclick=exportCart;c.append(cx);renderCart();creditInfo();
 c=card('vis');const vv=document.createElement('div');vv.className='colors';S.hide=S.hide||{};
 ['cBox','cLid','cTray','cKey'].forEach(k=>{const l=document.createElement('label'),s=document.createElement('span');s.dataset.k=k;const i=document.createElement('input');i.type='checkbox';i.checked=!S.hide[k];i.onchange=()=>{S.hide[k]=!i.checked;present(false);save()};l.append(i,s);vv.append(l)});c.append(vv);
 c=card('fit');para(c,'fitText');btn(c,'fitDl',downloadFit);seg(c,'fit','fitPick',[[1,'1'],[2,'2'],[3,'3'],[4,'4'],[5,'5']])}
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
document.getElementById('langbtn').onclick=()=>{lang=lang?0:1;try{localStorage.setItem('mn-lang',lang)}catch(e){}applyLang();present(false)};
const save=()=>{try{localStorage.setItem('mn-state',JSON.stringify(S))}catch(e){}};
let timer=0,seq=0,built=null;
let lastMode=S.mode;
function changed(){panel.dataset.mode=S.mode;if(S.mode!==lastMode){lastMode=S.mode;const o=PL.alt||{W:140,D:110,H:65};PL.alt={W:PL.W,D:PL.D,H:PL.H};PL.W=o.W;PL.D=o.D;PL.H=o.H;buildUI();panel.dataset.mode=S.mode}save();clearTimeout(timer);status.innerHTML='<b>'+tr('busy')+'</b>';timer=setTimeout(refresh,180)}
function clean(t){const o=[];for(let i=0;i<t.length;i+=9){const ux=t[i+3]-t[i],uy=t[i+4]-t[i+1],uz=t[i+5]-t[i+2],vx=t[i+6]-t[i],vy=t[i+7]-t[i+1],vz=t[i+8]-t[i+2];
 if(Math.hypot(uy*vz-uz*vy,uz*vx-ux*vz,ux*vy-uy*vx)>1e-6)for(let k=0;k<9;k++)o.push(t[i+k])}return Float32Array.from(o)}
function present(reframe){if(!built)return;if(true){presentPlan(reframe);return}document.getElementById('plmsgs').innerHTML='';const arr=arrange(built.parts,S.view);setMeshes(arr.map(p=>({...p,tris:clean(p.tris)})));if(reframe){frame(arr);draw()}
 document.querySelectorAll('.vt button').forEach(b=>b.classList.toggle('on',b.dataset.v===S.view));
 const i=built.info,mass=built.parts.reduce((s,p)=>s+Math.abs(volume(p.tris)),0)/1000*1.24,span=arrange(built.parts,'print').span;
 const f1=v=>v.toFixed(1);
 document.getElementById('stats').innerHTML=[[tr('sVol'),f1(i.vol)+' L'],[tr('sCell'),`${i.cells}× ${Math.round(i.cw)}×${Math.round(i.ch)}`],[tr('sMat'),'≈ '+Math.round(mass)+' g'],[tr('sParts'),built.parts.reduce((s,p)=>s+(p.qty||1),0)]].map(a=>`<div class="stat"><span>${a[0]}</span><strong>${a[1]}</strong></div>`).join('');
 let w='';if(span[0]>256||span[1]>256||S.H>256)w+=tr('warnBed')+' ';if(Math.min(i.cw,i.ch)<15)w+=tr('warnCell')+' ';if(S.tray)w+=tr('warnTray');
 status.innerHTML=`${S.W} × ${S.D} × ${S.H} mm`+(w?`<br><b>${w}</b>`:'')}
async function refresh(){const my=++seq;const r=await buildPlan(5,.05);if(my!==seq)return;r.mode=S.mode;const first=!built||built.mode!==S.mode;built=r;present(first)}
async function downloadFit(){const t=await fitTestTris(9,.02);const all=Float32Array.from([...t[0],...t[1]]);download(new Blob([stlOf(all)],{type:'model/stl'}),'ModuNest-Passungstest.stl')}
function threeMF(parts){const hex=h=>h.replace('#','').toUpperCase(),f=v=>v.toFixed(4);let objs='',mats='',items='';
 parts.forEach((p,i)=>{const{V,I}=weld(p.tris),id=i+2;mats+=`<base name="${p.name}" displaycolor="#${hex(p.color)}"/>`;
  let vs='',ts='';for(let k=0;k<V.length;k+=3)vs+=`<vertex x="${f(V[k])}" y="${f(V[k+1])}" z="${f(V[k+2])}"/>`;for(let k=0;k<I.length;k+=3)ts+=`<triangle v1="${I[k]}" v2="${I[k+1]}" v3="${I[k+2]}"/>`;
  objs+=`<object id="${id}" name="${p.name}" type="model" pid="1" pindex="${i}"><mesh><vertices>${vs}</vertices><triangles>${ts}</triangles></mesh></object>`;
  items+=`<item objectid="${id}" transform="1 0 0 0 1 0 0 0 1 128 128 0" printable="1"/>`});
 const model=`<?xml version="1.0" encoding="UTF-8"?><model unit="millimeter" xml:lang="en-US" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02"><metadata name="Title">ModuNest</metadata><metadata name="Application">ModuNest Studio</metadata><resources><basematerials id="1">${mats}</basematerials>${objs}</resources><build>${items}</build></model>`;
 const ct=`<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/></Types>`;
 const rels=`<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>`;
 const e=new TextEncoder();return zip([{name:'[Content_Types].xml',data:e.encode(ct)},{name:'_rels/.rels',data:e.encode(rels)},{name:'3D/3dmodel.model',data:e.encode(model)}])}
function presentPlan(reframe){const sol=built.sol,arr0=sol.ok?arrange(built.parts,S.view):[],arr=arr0.filter(p=>!(S.hide&&S.hide[p.key]));
 setMeshes(arr.map(p=>({...p,tris:clean(p.tris)})));if(reframe&&arr.length){frame(arr)}draw();
 document.querySelectorAll('.vt button').forEach(b=>b.classList.toggle('on',b.dataset.v===S.view));
 const msgs=sol.msgs.slice();if(sol.ok)msgs.push(['okFit',sol.items.length,built.info.keys]);
 document.getElementById('plmsgs').innerHTML=msgs.map(m=>`<li class="${m[0][0]}">${trf(...m)}</li>`).join('');
 const i=built.info,mass=sol.ok?built.parts.reduce((s,p)=>s+Math.abs(volume(p.tris))*(p.qty||1),0)/1000*1.24:0,span=sol.ok?arrange(built.parts,'print').span:[0,0];
 document.getElementById('stats').innerHTML=sol.ok?[[tr('sVol'),i.vol.toFixed(1)+' L'],[tr('sMods'),sol.items.length],[tr('sMat'),'≈ '+Math.round(mass)+' g'],[tr('sParts'),built.parts.reduce((s,p)=>s+(p.qty||1),0)]].map(a=>`<div class="stat"><span>${a[0]}</span><strong>${a[1]}</strong></div>`).join(''):'';
 let wmsg='';if(sol.ok){let big=false,fa=0;built.parts.forEach(p=>{const q=bbox(p.tris);const w=q.b[0]-q.a[0],d=q.b[1]-q.a[1];if(Math.min(w,d)>250||Math.max(w,d)>256&&Math.min(w,d)>256||q.b[2]>256)big=true;fa+=(w+8)*(d+8)*(p.qty||1)});
  if(big)wmsg=tr('warnBed');else if(fa>.75*246*246)wmsg=trf('iPlates',Math.ceil(fa/(.75*246*246)))}
 status.innerHTML=`${PL.W} × ${PL.D} × ${PL.H} mm`+(wmsg?`<br><b>${wmsg}</b>`:'');
 planOk=sol.ok;renderCart()}
function numIn(m,k,mn,mx){const i=document.createElement('input');i.type='number';i.min=mn;i.max=mx;i.step=5;i.value=m[k];i.onchange=()=>{m[k]=Math.max(mn,Math.min(mx,+i.value||mn));i.value=m[k];changed()};return i}
function mkSel(m,key,lk,vals,lab){const l=document.createElement('label'),s=document.createElement('span'),sel=document.createElement('select');s.textContent=tr(lk);vals.forEach(v=>{const op=document.createElement('option');op.value=v;op.textContent=lab?tr(lab+v):v;sel.append(op)});sel.value=m[key]??vals[0];sel.onchange=()=>{m[key]=typeof vals[0]==='number'?+sel.value:sel.value;changed()};l.append(s,sel);return l}
function renderMods(){const list=document.getElementById('modlist');list.innerHTML='';const single=S.mode==='single',ms=single?[PL.one]:PL.mods;
 ms.forEach((m,ix)=>{const row=document.createElement('div');row.className='mrow';
  const h=document.createElement('div');h.className='mh';const b=document.createElement('b');b.textContent=tr('t_'+m.type)+(single?'':' '+(ix+1));const x=document.createElement('button');x.textContent='✕';x.title=tr('del');x.onclick=()=>{PL.mods.splice(ix,1);renderMods();changed()};h.append(b,x);row.append(h);
  if(single){const o=document.createElement('div');o.className='mo';o.append(mkSel(m,'type','typeSel',['box','drawer'],'t_'));const sl=o.querySelector('select');sl.onchange=()=>{m.type=sl.value;renderMods();changed()};row.append(o)}
  const g=document.createElement('div');g.className='mg';
  [['w','mW',20,PL.W],['d','mD',20,PL.D],['h','mH',15,PL.H]].forEach(([k,lk,mn,mx])=>{const l=document.createElement('label'),sp=document.createElement('span');sp.textContent=tr(lk);l.append(sp,numIn(m,k,mn,Math.max(mx,mn)));g.append(l)});
  row.append(g);
  const o=document.createElement('div');o.className='mo';
  if(m.type==='drawer')o.append(mkSel(m,'nd','nDr',[1,2,3,4]));
  else{o.append(mkSel(m,'cols','cols',[1,2,3,4]),mkSel(m,'rows','rows',[1,2,3,4]),mkSel(m,'div','divN',[0,1,2,3]),mkSel(m,'lid','lidSel',['none','plug','slide','hinge'],'lid_'));
   const l3=document.createElement('label');l3.className='chk';const c3=document.createElement('input');c3.type='checkbox';c3.checked=!!m.tray;c3.onchange=()=>{m.tray=c3.checked;changed()};const s3=document.createElement('span');s3.textContent=tr('tray');l3.append(c3,s3);o.append(l3);
   const l4=document.createElement('label'),s4=document.createElement('span'),i4=document.createElement('input');s4.textContent=tr('label');i4.type='text';i4.maxLength=40;i4.value=m.label||'';i4.oninput=()=>{m.label=i4.value;changed()};l4.append(s4,i4);o.append(l4)}
  row.append(o);list.append(row)})}
function buildPlanUI(){let c=card('space');c._t=PL;
 rng(c,'W','width',50,600,5,'mm');rng(c,'D','depth',50,400,5,'mm');rng(c,'H','height',25,250,5,'mm');chk(c,'fill','fill');c.lastChild.classList.add('pfill');
 c=card('plmods');const add=document.createElement('div');add.className='addrow';
 ['box','tall','drawer'].forEach(ty=>{const b=document.createElement('button');b.className='btn';b.dataset.k='add_'+ty;b.onclick=()=>{const d=MODDEF[ty];PL.mods.push({type:ty,w:d.w,d:d.d,h:Math.min(d.h,PL.H),div:0,lid:'none'});renderMods();changed()};add.append(b)});
 const list=document.createElement('div');list.id='modlist';c.append(add,list);
 c=card('plset');seg(c,'wall','wall',[[1.6,'1.6 mm'],[2,'2.0 mm'],[2.4,'2.4 mm'],[3,'3.0 mm']]);rng(c,'r','corners',0,12,1,'mm');chk(c,'stack','stack');chk(c,'sharpSeam','sharpSeam');chk(c,'filler','filler');seg(c,'tex','tex',[['none','tx_none'],['ribs','tx_ribs'],['waves','tx_waves'],['facets','tx_facets']]);
 c=card('plmsg');const ul=document.createElement('ul');ul.id='plmsgs';c.append(ul);renderMods()}
/*GATE*/
const help=document.getElementById('help');document.getElementById('helpbtn').onclick=()=>{help.style.display='grid'};
document.getElementById('helpgo').onclick=()=>{help.style.display='none';try{localStorage.setItem('mn-help','1')}catch(e){}};
try{if(!localStorage.getItem('mn-help'))help.style.display='grid'}catch(e){}
document.getElementById('gl').addEventListener('pointerdown',()=>document.querySelector('.vhint').classList.add('gone'),{once:true});
panel.dataset.mode=S.mode;buildUI();refresh();
window.__mn={slotsFor,S,PL,buildPlan,planSolve,renderMods,buildAll,openEdges,volume,fitTestTris,arrange,get built(){return built}};
</script>
</body>
</html>
