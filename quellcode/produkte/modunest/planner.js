/* ================= Planer: Platzierung, Prüfung, Verbinder ================= */
const SEAM=.2,KEYSPAN=70;
const MODDEF={box:{w:80,d:60,h:50,min:[30,30,20]},tall:{w:45,d:45,h:140,min:[25,25,60]},drawer:{w:100,d:100,h:45,min:[60,70,35]}};
let PL={one:{type:'box',div:0,lid:'plug',cols:2,rows:2,tray:false,trayH:22,label:''},W:280,D:180,H:160,fill:true,mods:[
 {type:'box',w:90,d:80,h:60,div:0,lid:'plug'},{type:'box',w:70,d:80,h:60,div:1,lid:'none'},{type:'box',w:100,d:80,h:60,div:0,lid:'none'},
 {type:'tall',w:45,d:45,h:140,div:0,lid:'none'}]};

/* Rückgabe {ok, msgs:[[key,...args]], items:[{i,x,y,w,d,h,mod}], seams:[...], keys:[...]} (Zellen exakt aneinander) */
const zlo=it=>it.mod.type==='drawer'?3.9:(S.stack?FOOT:0)+S.wall+1.5;
const zhi=it=>{const h=it.h,l=it.mod.lid;return it.mod.type==='drawer'?h-3.9:l==='slide'?h-1.6-2.4-2*cl2()-1.5:(l==='plug'&&S.stack)||(l!=='hinge'&&l!=='slide'&&S.stack&&it.mod.type!=='drawer')?h-POCK-1.5:h-1.5};
/* Schluessel: von unten einstecken. Tasche nach unten offen, oben geschlossen, bei allen Modulen auf gleicher Hoehe (z=0). */
const keyMarg=()=>Math.max(9,(+S.r||0)+6.8);
function keyZ(F,G){const Hm=Math.min(F.h,G.h),Lk=Math.min(16,Hm-(S.stack?POCK:0)-S.wall-FOOT-4);if(Lk<6)return{Lk:0,zs:[]};
 const L=Math.round(Lk*10)/10;return{Lk:L,zs:[[-1e3,L+.3]]}}
const effPlan=()=>S.mode==='single'?{...PL,fill:true,mods:[{...PL.one,w:PL.W,d:PL.D,h:PL.H}]}:PL;
function planSolve(P){
 const msgs=[],ms=P.mods.map((m,i)=>({...m,i,name:(m.type==='drawer'?'Drawer ':m.type==='tall'?'Tall ':'Box ')+(i+1)}));
 if(!ms.length)return{ok:false,msgs:[['eEmpty']],items:[],keys:[]};
 let bad=false;
 for(const m of ms){const mn=MODDEF[m.type].min;
  if((m.lid==='slide'||m.lid==='hinge')&&m.type!=='drawer'&&m.h<35){msgs.push(['eLidH',m.name]);bad=true}
  if(m.h>P.H){msgs.push(['eTall',m.name,m.h,P.H]);bad=true}
  if(Math.min(m.w,m.d)<Math.min(mn[0],mn[1])||m.h<mn[2]){msgs.push(['eSmall',m.name,mn[0],mn[1],mn[2]]);bad=true}
  if(Math.min(m.w,m.d)>Math.min(P.W,P.D)||Math.max(m.w,m.d)>Math.max(P.W,P.D)){msgs.push(['eBig',m.name]);bad=true}}
 const area=ms.reduce((s,m)=>s+m.w*m.d,0);
 if(area>P.W*P.D){msgs.push(['eArea',Math.round(area/100),Math.round(P.W*P.D/100)]);bad=true}
 if(bad)return{ok:false,msgs,items:[],keys:[]};
 const orders=[(a,b)=>b.d-a.d||b.w-a.w,(a,b)=>b.w-a.w||b.d-a.d,(a,b)=>b.w*b.d-a.w*a.d,(a,b)=>a.i-b.i,(a,b)=>Math.max(b.w,b.d)-Math.max(a.w,a.d)];
 let best=null,dfail=false;
 for(const cmp of orders)for(const pref of[0,1]){
  const rows=[];let fail=false;
  for(const m of[...ms].sort((a,b)=>((b.type==='drawer')-(a.type==='drawer'))||cmp(a,b))){
   let w=m.w,d=m.d;if(pref&&d>w)[w,d]=[d,w];
   let placed=false;
   for(const rw of rows){for(const[ow,od]of[[w,d],[d,w]]){if(rw.x+ow<=P.W&&od<=rw.d){rw.items.push({m,w:ow,d:od,rot:ow!==m.w});rw.x+=ow;placed=true;break}}if(placed)break}
   if(!placed){const y=rows.reduce((s,r)=>s+r.d,0);
    for(const[ow,od]of[[w,d],[d,w]]){if(ow<=P.W&&y+od<=P.D){rows.push({d:od,x:ow,items:[{m,w:ow,d:od,rot:ow!==m.w}]});placed=true;break}}}
   if(!placed){fail=true;break}}
  if(!fail&&rows.slice(1).some(r=>r.items.some(t=>t.m.type==='drawer')))fail=true,dfail=true;
  if(!fail){const used=rows.reduce((s,r)=>s+r.d,0);if(!best||used<best.used)best={rows,used}}}
 if(!best){msgs.push([dfail?'eDrawer':'eNoFit']);return{ok:false,msgs,items:[],keys:[]}}
 const rows=best.rows,items=[];
 const extraD=P.fill?P.D-best.used:0;let y=0;
 rows.forEach((rw,ri)=>{const rd=rw.d+(P.fill?(ri===rows.length-1?P.D-y-rw.d:Math.round(extraD*rw.d/best.used)):0);
  const sw=rw.items.reduce((s,t)=>s+t.w,0),ex=P.fill?P.W-sw:0;let x=0,acc=0;
  rw.items.forEach((t,k)=>{const last=k===rw.items.length-1;let w=t.w+(P.fill?(last?P.W-x-t.w:Math.round(ex*t.w/sw)):0);
   items.push({i:t.m.i,x,y,w,d:P.fill?rd:t.d,h:t.m.h,mod:t.m,rot:t.rot});x+=w});
  y+=rd});
 items.sort((a,b)=>a.i-b.i);
 const free=P.W*P.D-items.reduce((s,t)=>s+t.w*t.d,0);
 if(!P.fill&&free>0.25*P.W*P.D)msgs.push(['iFree',Math.round(free/100)]);
 /* Kontaktflächen → Verbinder */
 const keys=[];items.forEach(t=>{t.touch={};t.ti={}});
 for(let a=0;a<items.length;a++)for(let b=a+1;b<items.length;b++){const A=items[a],B=items[b];
  for(const ax of[0,1]){ // 0: Naht senkrecht zu x, 1: senkrecht zu y
   const pa=ax?A.y+A.d:A.x+A.w,pb=ax?B.y+B.d:B.x+B.w;
   for(const[F,G,pf,pg]of[[A,B,pa,ax?B.y:B.x],[B,A,pb,ax?A.y:A.x]]){
    if(Math.abs(pf-pg)>1e-6)continue;
    const lo=Math.max(ax?F.x:F.y,ax?G.x:G.y),hi=Math.min(ax?F.x+F.w:F.y+F.d,ax?G.x+G.w:G.y+G.d),Lc=hi-lo;
    if(Lc<=0)continue;
    F.touch[ax?'B':'R']=1;G.touch[ax?'T':'L']=1;(F.ti[ax?'B':'R']=F.ti[ax?'B':'R']||[]).push([lo,hi,G.h]);(G.ti[ax?'T':'L']=G.ti[ax?'T':'L']||[]).push([lo,hi,F.h]);
    const KEYMARG=keyMarg();
    if(Lc<2*KEYMARG+2){msgs.push(['iShort',F.mod.name,G.mod.name]);continue}
    const n=Math.max(1,Math.floor((Lc-2*KEYMARG)/KEYSPAN)+1),sp=Lc-2*KEYMARG;
    for(let k=0;k<n;k++){const s=n===1?(lo+hi)/2:lo+KEYMARG+k*sp/(n-1);
     keys.push({F:F.i,G:G.i,ax,seam:pf,s,...keyZ(F,G)})}}}}
 for(const it of items){const l=it.mod.lid;if(l==='slide'&&keys.some(k=>k.G===it.i&&k.ax===1))msgs.push(['iSlide',it.mod.name]);
  if(l==='hinge'&&keys.some(k=>k.F===it.i&&k.ax===1&&items[k.G].h>it.h))msgs.push(['iHinge',it.mod.name])}
 return{ok:true,msgs,items,keys,rows:rows.length}}

/* Slots eines Moduls (lokal, Mitte = Modulzentrum): side 'R','L','B'(y+),'T'(y-), s = Position entlang der Seite */
function slotsFor(it,keys){const o=[],cx=it.x+it.w/2,cy=it.y+it.d/2;
 for(const k of keys){
  if(k.F===it.i)o.push(k.ax?{side:'B',s:k.s-cx,zs:k.zs}:{side:'R',s:k.s-cy,zs:k.zs});
  else if(k.G===it.i)o.push(k.ax?{side:'T',s:k.s-cx,zs:k.zs}:{side:'L',s:k.s-cy,zs:k.zs})}
 return o}
