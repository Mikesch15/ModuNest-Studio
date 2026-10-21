/* ================= Planer-Geometrie: Modul mit Slots je Seite, Trennwand-Rippen ================= */
const PT=1.6,RIBW=1.4,RIBD=2.2;
const GD=1.4,LH=1.6,LTS=2.4,RKN=3,PINH=1.2,LUGW=5,flatTris=(R,H,t,stack)=>{const o=[],f=stack?FOOT:0;
 if(stack){cap(R.F,0,false,o);walls(R.F,0,f,o);cap(R.O.concat(rev(R.F)),f,false,o)}else cap(R.O,0,false,o);
 walls(R.O,f,H,o);cap(R.C,f+t,true,o);walls(rev(R.C),f+t,H,o);cap(R.O.concat(rev(R.C)),H,true,o);return o};
const rr4=(x,x0,y0,x1,y1,R)=>{x.beginPath();const m=Math.min(x1-x0,y1-y0)/2;x.roundRect(x0,y0,x1-x0,y1-y0,R.map(v=>Math.max(0,Math.min(v,m))));x.fill()};
const perm=(tr,fn)=>{const o=new Array(tr.length);for(let i=0;i<tr.length;i+=3){const p=fn(tr[i],tr[i+1],tr[i+2]);o[i]=p[0];o[i+1]=p[1];o[i+2]=p[2]}return o};
function cornerHc(it){if(S.sharpSeam===false)return[0,0,0,0];const H=it.h,ti=it.ti||{},X0=it.x,X1=it.x+it.w,Y0=it.y,Y1=it.y+it.d,
 hAt=(a,v)=>(ti[a]||[]).reduce((m,q)=>(q[0]<=v+.01&&q[1]>=v-.01)?Math.max(m,Math.min(q[2]==null?H:q[2],H)):m,0);
 return[Math.max(hAt('L',Y0),hAt('T',X0)),Math.max(hAt('R',Y0),hAt('T',X1)),Math.max(hAt('R',Y1),hAt('B',X1)),Math.max(hAt('L',Y1),hAt('B',X0))]}
async function buildMod(m,it,slots,res,tol){
 const W=it.w-SEAM,D=it.d-SEAM,H=it.h,t=S.wall,stack=S.stack,c=cl2(),fl=stack?FOOT:0,r=Math.min(S.r,W/2-1,D/2-1),lid=m.lid||'none';
 const Wm=W+2*(DS+3),Hm=D+2*(DS+3);let w=0,h=0;
 const ringW=(wm,hm,draw)=>{const k=mk(wm,hm,res);k.x.scale(1,-1);draw(k.x);return marching(fieldOf(k),k.c.width,k.c.height,res).map(q=>simplify(q,tol))};
 const ring=draw=>ringW(Wm,Hm,draw);
 const has=s=>slots.some(q=>q.side===s),rp=Math.max(.5,r-t/2),rf=Math.max(.4,rp-c),cr=Math.max(1,r-t);
 const hc=cornerHc(it);
 const shp=hc.map(v=>v>=H-1e-6),RADz=z=>hc.map(v=>z<v-1e-6?0:r),mkey=z=>hc.map(v=>z<v-1e-6?1:0).join(''),hcuts=hc.filter(v=>v>0&&v<H-1e-6);
 const RAD=shp.map(s=>s?0:r);
 const RADP=shp.map(s=>s?0:rp),RADF=shp.map(s=>s?0:rf),RADC=shp.map(s=>s?.8:cr);
 const cutSlots2=(x,list)=>{x.globalCompositeOperation='destination-out';
  for(const q of list){const R=q.side==='R',L=q.side==='L',B=q.side==='B';
   if(R||L)keyShape(x,R?W/2:-W/2,q.s,RK+c,0);else keyShape(x,q.s,B?D/2:-D/2,RK+c,1)}};
 const actAt=z=>slots.filter(q=>q.zs.some(a=>a[0]<z&&z<a[1])),omemo=new Map();
 const outline=(list,extra,tag,z)=>{z=z==null?H-.01:z;const k=list.map(q=>slots.indexOf(q)).join()+'|'+mkey(z)+'|'+(tag||'');if(!omemo.has(k))omemo.set(k,ring(x=>{rr4(x,-W/2,-D/2,W/2,D/2,RADz(z));cutSlots2(x,list);texCut(x,extra||m.type==='drawer');if(extra){x.globalCompositeOperation='destination-out';extra(x)}}));return omemo.get(k)};
 const cutsIn=(z0,z1)=>{const cuts=[z0,z1];slots.forEach(q=>q.zs.forEach(a=>a.forEach(v=>{if(v>z0+1e-6&&v<z1-1e-6)cuts.push(v)})));hcuts.forEach(v=>{if(v>z0+1e-6&&v<z1-1e-6)cuts.push(v)});return cuts.sort((a,b)=>a-b)};
 const bands=(z0,z1,fn)=>{const cuts=cutsIn(z0,z1);
  let o=[];for(let i=0;i<cuts.length-1;i++)if(cuts[i+1]-cuts[i]>1e-6){const mid=(cuts[i]+cuts[i+1])/2;o=o.concat(fn(outline(actAt(mid),null,'',mid),cuts[i],cuts[i+1]))}return o};
 const tx=S.tex||'none',Dpt=Math.max(.3,Math.min(.8,t/2-.3)),touch=it.touch||{};
 const texCut=(x,skipT)=>{if(tx==='none')return;x.globalCompositeOperation='destination-out';
  for(const sd of['L','R','T','B']){if(touch[sd]||(skipT&&sd==='T'))continue;
   const hz=sd==='L'||sd==='R',len=(hz?D:W)-2*(r+3);if(len<10)continue;
   const dp=sv=>tx==='ribs'?((((sv%6)+6)%6)<2.4?Dpt:0):tx==='waves'?Dpt*(.5+.5*Math.sin(sv*2*Math.PI/14)):Dpt*(1-Math.abs((((sv%8)+8)%8)/4-1));
   const pts=[],n=Math.ceil(len/.25),mp=(sv,d)=>sd==='T'?[sv,-D/2+d]:sd==='B'?[sv,D/2-d]:sd==='L'?[-W/2+d,sv]:[W/2-d,sv];
   pts.push(mp(-len/2,-1));for(let i=0;i<=n;i++){const sv=-len/2+i*len/n;pts.push(mp(sv,dp(sv)))}pts.push(mp(len/2,-1));
   x.beginPath();pts.forEach((q,i)=>i?x.lineTo(q[0],q[1]):x.moveTo(q[0],q[1]));x.closePath();x.fill()}};
 const cutOuter=(x,skipT)=>{texCut(x,skipT)};
 const O=ring(x=>{rr4(x,-W/2,-D/2,W/2,D/2,RAD);cutOuter(x,m.type==='drawer')});
 const FR=Math.max(0,Math.min(2,t-.6)),FN=4,fin=h=>FR-Math.sqrt(Math.max(0,FR*FR-(FR-h)*(FR-h)));let FIL=[];
 const shell=(zTop,RCh)=>{let o=[];if(stack)o=o.concat(extrude(RF,0,fl));o=o.concat(bands(fl,fl+t,(Ob,a,b)=>extrude(Ob,a,b)));
  if(FIL.length)for(let k=0;k<FN;k++)o=o.concat(bands(fl+t+k*FR/FN,fl+t+(k+1)*FR/FN,(Ob,a,b)=>extrude(Ob.concat(rev(FIL[k])),a,b)));
  return o.concat(bands(fl+t+(FIL.length?FR:0),zTop,(Ob,a,b)=>extrude(Ob.concat(rev(RCh)),a,b)))};
 if(m.type==='drawer'){
  /* Offenes Gehaeuse (Boden, Waende, Schienen mit 45°-Schraege) ohne Stuetzen; separater Deckel; Schubladen mit Front flach druckbar */
  const cxs=q=>has(q)?6.6:Math.max(t,2.4),cL=cxs('L'),cR=cxs('R'),tbk=has('B')?6.6:Math.max(t,2.4),fb=2.4,CT=4.2,GRV=2.4,TGH=2.2,zb=fb,zc=H-CT,crd=Math.max(1,r-t);
  const RWd=3.5,RTp=1.2,RHt=RWd+RTp,dg=c+.2,gy=.4,FB=Math.max(6,Math.min(r,12));
  const nd=Math.max(1,Math.min(+m.nd||1,Math.floor((zc-zb)/26),4)),Hc=(zc-zb)/nd;
  const chr=[-W/2+cL,-D/2-6,W/2-cR,D/2-tbk],chW=chr[2]-chr[0],yF=-D/2+FB;
  const chd=p=>x=>{x.beginPath();x.roundRect(chr[0]+p,chr[1],chW-2*p,chr[3]-chr[1],Math.min(crd,(chW-2*p)/2));x.fill()};
  const trim=x=>x.fillRect(-W,-D,2*W,yF+gy+D),exw=p=>x=>{chd(p)(x);trim(x)};
  let hs=[];const seg=(a,b,ex,tag)=>{const cs=cutsIn(a,b);for(let i=0;i<cs.length-1;i++)if(cs[i+1]-cs[i]>1e-6){const mid=(cs[i]+cs[i+1])/2;hs=hs.concat(extrude(outline(actAt(mid),ex,tag,mid),cs[i],cs[i+1]))}};
  seg(0,zb-.3,null,'f');seg(zb-.3,zb,trim,'t');
  let zq=zb;const wt=p=>'w'+p.toFixed(2);
  if(FR>.3){for(let k=0;k<FN;k++){const p=fin(k*FR/FN);seg(zq+k*FR/FN,zq+(k+1)*FR/FN,exw(p),wt(p))}zq+=FR}
  for(let i=1;i<nd;i++){const zt=zb+i*Hc,z0=zt-RHt,ns=7,sh=(RHt-RTp)/ns;seg(zq,z0,exw(0),wt(0));
   for(let k=0;k<ns;k++){const p=RWd*(k+1)/ns;seg(z0+k*sh,z0+(k+1)*sh,exw(p),wt(p))}
   seg(zt-RTp,zt,exw(RWd),wt(RWd));zq=zt}
  seg(zq,zc,exw(0),wt(0));
  const tgL=Math.min(3,cL/2),tgR=Math.min(3,cR/2),tgB=Math.min(3,tbk/2);
  const TR=ring(x=>{x.beginPath();x.roundRect(chr[0]-tgL,-D,chW+tgL+tgR,D+chr[3]+tgB,crd+3);x.fill();x.globalCompositeOperation='destination-out';chd(0)(x);trim(x)});
  hs=hs.concat(extrude(TR,zc,zc+TGH));
  const cx=it.x+it.w/2-PL.W/2,cy=it.y+it.d/2-PL.D/2,parts=[{key:'cBox',name:m.name+' Housing',tris:hs,asm:[(X,Y,Z)=>[X+cx,Y+cy,Z]],mod:it.i}];
  /* Deckel: Nut an der Unterseite nimmt die Feder der Waende auf; mit der Aussenseite nach unten drucken */
  const yG=yF+gy-c,Op=ring(x=>rr4(x,-W/2,-D/2,W/2,D/2,RAD));
  const Cb=ring(x=>{rr4(x,-W/2,-D/2,W/2,D/2,RAD);x.globalCompositeOperation='destination-out';x.beginPath();x.roundRect(chr[0]-tgL-c,yG,chW+tgL+tgR+2*c,chr[3]+tgB+c-yG,crd+3+c);x.fill();
   x.globalCompositeOperation='source-over';x.beginPath();x.roundRect(chr[0]+c,yG-.01,chW-2*c,chr[3]-c-yG+.01,Math.max(.5,crd-c));x.fill()});
  parts.push({key:'cLid',name:m.name+' Cover',tris:extrude(Cb,0,GRV).concat(extrude(Op,GRV,CT)),pf:(X,Y,Z)=>[X,-Y,CT-Z],asm:[(X,Y,Z)=>[X+cx,Y+cy,Z+zc]],mod:it.i});
  /* Schubladen */
  const dw=chW-2*dg,bY1=D/2-tbk-.3,td=Math.max(1.6,t*.8),tf=1.6,rd=Math.min(crd,4),hf=Hc-.6,dh=Math.min(nd>1?Hc-RHt-dg-.2:Hc-dg-.2,hf);
  const sw=Math.min(dw-6,34),dpt=Math.min(4,FB-2),zs0=hf-dpt-4,nsc=8,rm=new Map(),rg=(k,f)=>{if(!rm.has(k))rm.set(k,ring(f));return rm.get(k)};
  const TP=rg('T',x=>rr(x,-dw/2+td,yF,dw/2-td,bY1-td,Math.max(.6,rd-td)));
  for(let i=0;i<nd;i++){const zi=zb+i*Hc;let cs=[0,tf,dh,hf];for(let k=1;k<FN;k++)cs.push(k*FR/FN);cs.push(FR);for(let k=0;k<=nsc;k++)cs.push(zs0+k*dpt/nsc);hcuts.forEach(v=>cs.push(v-zi));
   cs=[...new Set(cs.filter(v=>v>=-1e-9&&v<=hf+1e-9).map(v=>Math.round(v*1e4)/1e4))].sort((a,b)=>a-b);
   let dt=[];for(let j=0;j<cs.length-1;j++){const a=cs[j],b=cs[j+1];if(b-a<1e-6)continue;const mid=(a+b)/2,wb=mid<dh,dp=(dpt>0&&mid>zs0&&mid<zs0+dpt)?dpt-(mid-zs0):0,mk_=mkey(zi+mid);
    const A=rg('A'+mk_+wb+dp.toFixed(3)+(i===0&&mid<FR?'f'+Math.floor(mid/(FR/FN)):''),x=>{rr4(x,-W/2,-D/2,W/2,D/2,RADz(zi+mid));x.globalCompositeOperation='destination-out';x.fillRect(-W,yF,2*W,D);
     if(dp>0)x.fillRect(-sw/2,-D,sw,D-D/2+dp);x.globalCompositeOperation='source-over';if(wb){const e=(i===0&&mid<FR)?Math.max(0,fin(Math.floor(mid/(FR/FN))*FR/FN)-dg+.1):0;rr(x,-dw/2+e,yF-.5,dw/2-e,bY1-e,rd)}});
    dt=dt.concat(wb&&mid>tf?extrude(A.concat(rev(TP)),a,b):extrude(A,a,b))}
   parts.push({key:'cTray',name:m.name+' Drawer'+(nd>1?' '+(i+1):''),tris:dt,asm:[(X,Y,Z)=>[X+cx,Y+cy,Z+zi]],mod:it.i})}
  const vol=nd*((dw-2*td)*(bY1-td-yF)*(dh-tf))/1e6;
  return{parts,vol,cells:nd,notes:(+m.nd||1)>nd?[['iDrw',m.name,nd]]:[]}}
 const flat=lid==='slide'||lid==='hinge',pk=flat?0:1;
 const pI=s=>has(s)?5.2:t/2,cI=s=>{let v=has(s)?6.6:t;if(lid==='slide'&&(s==='L'||s==='R'))v=Math.max(v,3);if(lid==='hinge'&&s==='B')v=Math.max(v,9);return v};
 const P=[-W/2+pI('L'),-D/2+pI('T'),W/2-pI('R'),D/2-pI('B')],F=[P[0]+c,P[1]+c,P[2]-c,P[3]-c];
 const cav=[-W/2+cI('L'),-D/2+cI('T'),W/2-cI('R'),D/2-cI('B')];
 const RP=stack&&!flat?ring(x=>rr4(x,...P,RADP)):[],RF=stack?ring(x=>rr4(x,...F,RADF)):[];
 const gc=Math.max(1,m.cols|0),gr=Math.max(1,m.rows|0),useGrid=gc*gr>1&&!m.tray&&m.type!=='drawer',cellsB=useGrid?cellRects(...cav,gc,gr,t):null,n=(useGrid||m.tray)?0:(m.div|0),alongX=(cav[2]-cav[0])>=(cav[3]-cav[1]),hw=(PT+2*c)/2;
 const pl=[];for(let k=1;k<=n;k++)pl.push(alongX?cav[0]+k*(cav[2]-cav[0])/(n+1):cav[1]+k*(cav[3]-cav[1])/(n+1));
 const drawRC=(x,d)=>{if(useGrid)cellsB.o.forEach(q=>rr(x,q[0]+d,q[1]+d,q[2]-d,q[3]-d,Math.max(.4,cr-d)));else rr4(x,cav[0]+d,cav[1]+d,cav[2]-d,cav[3]-d,RADC.map(v=>Math.max(0,v-d)));if(n){x.globalCompositeOperation='destination-out';
  for(const p of pl){if(alongX){for(const[y0,y1]of[[cav[1],cav[1]+RIBD],[cav[3]-RIBD,cav[3]]]){x.fillRect(p-hw-RIBW,y0,RIBW,y1-y0);x.fillRect(p+hw,y0,RIBW,y1-y0)}}
   else{for(const[x0,x1]of[[cav[0],cav[0]+RIBD],[cav[2]-RIBD,cav[2]]]){x.fillRect(x0,p-hw-RIBW,x1-x0,RIBW);x.fillRect(x0,p+hw,x1-x0,RIBW)}}}}};
 const RC=ring(x=>drawRC(x,0));if(FR>.3)FIL=[0,1,2,3].map(k=>ring(x=>drawRC(x,fin(k*FR/FN))));
 const cx=it.x+it.w/2-PL.W/2,cy=it.y+it.d/2-PL.D/2,parts=[],notes=[];
 const gap=2*c,Gh=LTS+gap,zg1=H-LH,zg0=zg1-Gh;
 let body;const extra=[];
 if(lid==='slide'){
  const lowR={O,F:RF,C:RC};const lowT=shell(zg0,RC);body=lowT;
  const ext=(x0,x1,lst)=>x=>{rr4(x,-W/2,-D/2,W/2,D/2,RAD);cutSlots2(x,lst);cutOuter(x,0);x.globalCompositeOperation='destination-out';
   x.beginPath();x.roundRect(x0,-D,x1-x0,cav[3]+D,Math.min(cr,(x1-x0)/2));x.fill()};
  const RUG=ring(ext(cav[0]-GD,cav[2]+GD,actAt(zg0+1))),RUC=ring(ext(cav[0],cav[2],actAt(zg1+1)));
  const eg=extrude(RUG,zg0,zg1),ec=extrude(RUC,zg1,H);window.__sh=[lowT,eg,ec];body=body.concat(eg,ec);
 }else if(lid==='hinge'){
  body=shell(H,RC);
  const Wk=Math.max(14,Math.min(40,W/3)),ya=D/2-5.8,gx=.4;
  const prof=ringW(2*RKN+8,2*RKN+8,x=>{x.beginPath();x.arc(ya*0,RKN,RKN,0,6.2832);x.fill();x.fillRect(-RKN,-.5,2*RKN,RKN+.5);x.globalCompositeOperation='destination-out';x.beginPath();x.arc(0,RKN,PINH,0,6.2832);x.fill()});
  // prof: (u=y rel. Achse, v=z rel. H)
  for(const sx of[-1,1]){const x0=sx>0?Wk/2+gx:-(Wk/2+gx+LUGW);body=body.concat(perm(extrude(prof,0,LUGW),(u,v,w)=>[w+x0,u+ya,v+H]))}
  extra.push({Wk,ya,prof});
 }
 if(!flat)body=shell(stack?H-POCK:H,RC).concat(stack?extrude(outline(actAt(H-.1)).concat(rev(RP)),H-POCK,H):[]);
 parts.push({key:'cBox',name:m.name,tris:body,asm:[(X,Y,Z)=>[X+cx,Y+cy,Z]],mod:it.i});
 const txt=(m.label||'').trim(),RT=(lid==='plug'&&txt)?ring(x=>{x.save();x.scale(1,-1);x.font='100px KFModern';x.textAlign='center';x.textBaseline='middle';const wd=x.measureText(txt).width/100;
  x.font=Math.min(16,(W-24)/wd,D*.5)+'px KFModern';x.fillText(txt,0,0);x.restore()}):[];
 if(lid==='plug')parts.push({key:'cLid',name:m.name+' Lid',tris:lidTris({O,F:RF},RT,stack),asm:[(X,Y,Z)=>[X+cx,-Y+cy,-Z+H+LT+10]],mod:it.i});
 if(lid==='slide'){const Wl=cav[2]-cav[0]+2*GD-gap,Ll=cav[3]+D/2-c;
  const RL=ring(x=>rr(x,-Wl/2,-Ll/2,Wl/2,Ll/2,Math.min(cr,3))),RG=ring(x=>rr(x,-6,-Ll/2+3,6,-Ll/2+8,2.2));
  parts.push({key:'cLid',name:m.name+' Slide lid',tris:plateWithPocket(RL,RG,LTS,1),asm:[(X,Y,Z)=>[X+cx,Y+cy-D/2+Ll/2,Z+zg0+c]],mod:it.i})}
 if(lid==='hinge'){const{Wk,ya}=extra[0],plateRear=ya-RKN-.8,zx=Wk/2+.4+LUGW+.5;
  const RL=ring(x=>{rr4(x,-W/2,-D/2,W/2,D/2,RAD.map(v=>Math.min(v,3)));x.globalCompositeOperation='destination-out';x.fillRect(-zx,plateRear,2*zx,D);x.globalCompositeOperation='source-over';x.fillRect(-Wk/2,plateRear-2,Wk,ya-plateRear+2)});
  let tr=extrude(RL,0,LTS);
  const kn=ringW(2*RKN+8,2*RKN+8,x=>{x.beginPath();x.arc(0,RKN,RKN,0,6.2832);x.fill();x.globalCompositeOperation='destination-out';x.beginPath();x.arc(0,RKN,PINH,0,6.2832);x.fill()});
  tr=tr.concat(perm(extrude(kn,0,Wk),(u,v,w)=>[w-Wk/2,u+ya,v]));
  parts.push({key:'cLid',name:m.name+' Hinge lid',tris:tr,asm:[(X,Y,Z)=>[X+cx,Y+cy,Z+H+.15]],mod:it.i});
  const pinL=Wk+2*(LUGW+.4)-.6,pr=ringW(8,8,x=>{x.beginPath();x.arc(0,0,PINH-.25,0,6.2832);x.fill()});
  parts.push({key:'cLid',name:m.name+' Pin',tris:extrude(pr,0,pinL),asm:[(X,Y,Z)=>[Z-pinL/2+cx+0*X,X+ya+cy,Y+H+RKN+0*Z]],mod:it.i});
  notes.push(['iPin',m.name,Math.round(pinL)])}
 let trayInfo=null;
 if(m.tray){const depth=H-fl-t,tw=.6,trc=[cav[0]+tw,cav[1]+tw,cav[2]-tw,cav[3]-tw],Ht=Math.max(8,Math.min(+m.trayH||22,depth-3-(lid==='slide'?LH+Gh+2:0))),trr=Math.max(1,cr-tw);
  const tc=cellRects(trc[0]+t,trc[1]+t,trc[2]-t,trc[3]-t,gc,gr,t),TO=ring(x=>rr(x,...trc,trr)),TC=ring(x=>tc.o.forEach(q=>rr(x,...q,Math.max(.6,trr-t))));
  let trT;if(FIL.length){trT=[];for(let k=0;k<FN;k++){const e=Math.max(0,fin(k*FR/FN)-.6+.2),Tk=ring(x=>rr(x,trc[0]+e,trc[1]+e,trc[2]-e,trc[3]-e,Math.max(.5,trr-e)));trT=trT.concat(extrude(Tk,k*FR/FN,(k+1)*FR/FN))}
   trT=trT.concat(perm(plateWithPocket(TO,TC,Ht-FR,Ht-t),(X,Y,Z)=>[X,Y,Z+FR]))}else trT=plateWithPocket(TO,TC,Ht,Ht-t);
  parts.push({key:'cTray',name:m.name+' Insert',tris:trT,asm:[(X,Y,Z)=>[X+cx,Y+cy,Z+fl+t+.1]],mod:it.i});trayInfo={cells:tc.o.length,vol:tc.o.length*tc.cw*tc.ch*(Ht-t)/1e6}}
 if(n){const span=alongX?cav[3]-cav[1]:cav[2]-cav[0],Lp=span-2*c,Hp=(stack?H-POCK:H)-(fl+t)-.8-(lid==='slide'?LH+Gh:0);
  const RPl=ring(x=>rr(x,-Lp/2,-PT/2,Lp/2,PT/2,.6));let dvT=null;if(FIL.length){dvT=[];for(let k=0;k<FN;k++){const e=fin(k*FR/FN),Rk=ring(x=>rr(x,-Lp/2+e,-PT/2,Lp/2-e,PT/2,.6));dvT=dvT.concat(extrude(Rk,k*FR/FN,(k+1)*FR/FN))}dvT=dvT.concat(extrude(RPl,FR,Hp))}
  const mid=alongX?(cav[1]+cav[3])/2:(cav[0]+cav[2])/2;
  parts.push({key:'cTray',name:m.name+' Divider',tris:dvT||extrude(RPl,0,Hp),qty:n,
   asm:pl.map(p=>alongX?(X,Y,Z)=>[-Y+p+cx,X+mid+cy,Z+fl+t+.1]:(X,Y,Z)=>[X+mid+cx,Y+p+cy,Z+fl+t+.1]),mod:it.i})}
 const cells=trayInfo?trayInfo.cells:useGrid?gc*gr:n+1,iw=cav[2]-cav[0],id=cav[3]-cav[1],vol=trayInfo?trayInfo.vol:iw*id*(H-fl-t)/1e6;
 return{parts,vol,cells,notes}}

/* Fuellstuecke fuer eingeschlossene Ecken (Kreuz-/T-Stoss), nur dort wo die Ecken rund sind */
function fillerParts(sol,res,tol){
 const its=sol.items,c=cl2(),seen=new Set(),grp=new Map(),rOf=a=>Math.min(S.r,(a.w-SEAM)/2-1,(a.d-SEAM)/2-1);
 const inR=(a,x,y)=>x>a.x-1e-6&&x<a.x+a.w+1e-6&&y>a.y-1e-6&&y<a.y+a.d+1e-6,cov=(x,y)=>its.some(a=>x>a.x&&x<a.x+a.w&&y>a.y&&y<a.y+a.d);
 const cIdx=(b,px,py)=>{const e=(u,v)=>Math.abs(u-v)<1e-6;return e(px,b.x)&&e(py,b.y)?0:e(px,b.x+b.w)&&e(py,b.y)?1:e(px,b.x+b.w)&&e(py,b.y+b.d)?2:e(px,b.x)&&e(py,b.y+b.d)?3:-1};
 for(const a of its)for(const[px,py]of[[a.x,a.y],[a.x+a.w,a.y],[a.x+a.w,a.y+a.d],[a.x,a.y+a.d]]){
  const key=px.toFixed(2)+','+py.toFixed(2);if(seen.has(key))continue;seen.add(key);
  if(px<.01||py<.01||px>PL.W-.01||py>PL.D-.01)continue;
  if(![[1,1],[1,-1],[-1,1],[-1,-1]].every(([qx,qy])=>cov(px+qx*.5,py+qy*.5)))continue;
  const T=its.filter(b=>inR(b,px,py));if(T.length<3)continue;
  const R=Math.max(...T.map(rOf));if(R<.5)continue;
  const hmin=Math.min(...T.map(b=>b.h)),z0=S.stack?FOOT:0,hcs=T.map(b=>{const k=cIdx(b,px,py);return[b,k,k>=0?cornerHc(b)[k]:0]});
  let cs=[z0,hmin];hcs.forEach(q=>{if(q[2]>z0+1e-6&&q[2]<hmin-1e-6)cs.push(q[2])});cs.sort((p,q)=>p-q);
  const bl=[];for(let i=0;i<cs.length-1;i++){const mid=(cs[i]+cs[i+1])/2;bl.push([cs[i],cs[i+1],hcs.map(q=>q[1]>=0&&mid>=q[2]-1e-6?1:0).join('')])}
  const sig=R.toFixed(2)+JSON.stringify(bl.map(b=>[+b[0].toFixed(2),+b[1].toFixed(2),b[2]]));
  if(!grp.has(sig)){let tr=[];
   for(const[a0,b0,ms]of bl){const mid=(a0+b0)/2;if(ms.indexOf('1')<0)continue;
    const k=mk(2*R+4,2*R+4,res);k.x.scale(1,-1);const x=k.x;x.fillRect(-R,-R,2*R,2*R);x.globalCompositeOperation='destination-out';x.lineWidth=2*c;
    hcs.forEach(([b,idx],n)=>{const rad=[0,0,0,0];if(ms[n]==='1')rad[idx]=rOf(b);x.beginPath();x.roundRect(b.x-px,b.y-py,b.w,b.d,rad);x.fill();x.stroke()});
    const rg=marching(fieldOf(k),k.c.width,k.c.height,res).map(q=>simplify(q,tol)).filter(q=>Math.abs(area(q))>1.5);
    if(rg.length)tr=tr.concat(extrude(rg,a0,b0))}
   grp.set(sig,{tr,fns:[]})}
  grp.get(sig).fns.push((X,Y,Z)=>[X+px-PL.W/2,Y+py-PL.D/2,Z])}
 const out=[];for(const[,g]of grp)if(g.tr.length)out.push({key:'cKey',name:'Filler',tris:g.tr,qty:g.fns.length,asm:g.fns});return out}

/* Alle Module + gemeinsame Verbinder */
async function buildPlan(res,tol){
 try{await document.fonts.load('40px KFModern')}catch(e){}
 const sol=planSolve(effPlan());if(!sol.ok)return{sol,parts:[],info:null};
 const parts=[];let vol=0,cells=0;
 for(const it of sol.items){const q=await buildMod(it.mod,it,slotsFor(it,sol.keys),res,tol);parts.push(...q.parts);vol+=q.vol;cells+=q.cells;sol.msgs.push(...q.notes)}
 if(S.filler&&S.mode==='plan')parts.push(...fillerParts(sol,res,tol));
 const fl=S.stack?FOOT:0,groups=new Map();
 if(sol.keys.length){
  for(const key of sol.keys){if(!key.zs.length)continue;const id=key.Lk.toFixed(1);
   if(!groups.has(id))groups.set(id,{Lk:key.Lk,fns:[]});
   const cx=(key.ax?key.s:key.seam)-PL.W/2,cy=(key.ax?key.seam:key.s)-PL.D/2;
   for(const z of key.zs)groups.get(id).fns.push(key.ax?(X,Y,Z)=>[-Y+cx,X+cy,Z]:(X,Y,Z)=>[X+cx,Y+cy,Z])}
  for(const[id,g]of groups)parts.push({key:'cKey',name:'Key '+id,tris:keyTris(g.Lk,res,tol),qty:g.fns.length,asm:g.fns})}
 parts.forEach(p=>p.tris=Float32Array.from(p.tris));
 return{sol,parts,info:{vol,cells,keys:parts.filter(p=>p.key==='cKey').reduce((s,p)=>s+p.qty,0)}}}

