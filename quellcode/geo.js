/* ================= ModuNest-Geometrie ================= */
const FOOT=2,POCK=2.6,DS=3,WN=6,WH=9,RK=.8,LT=2.4,LD=.8,KEYMAX=30;
const cl2=()=>[.15,.25,.35,.45,.6][(+S.fit||3)-1]/2;
const poly=(x,p)=>{x.beginPath();p.forEach((q,i)=>i?x.lineTo(q[0],q[1]):x.moveTo(q[0],q[1]));x.closePath();x.fill()};
const rr=(x,x0,y0,x1,y1,r)=>{x.beginPath();x.roundRect(x0,y0,x1-x0,y1-y0,Math.max(0,Math.min(r,(x1-x0)/2,(y1-y0)/2)));x.fill()};
// Schmetterlings-Verbinder: Fliege mit schmaler Taille, abgerundet. e = Aufweitung (Spiel).
const keyShape=(x,cx,cy,e,v)=>{x.beginPath();[[-DS,-WH/2],[0,-WN/2],[DS,-WH/2],[DS,WH/2],[0,WN/2],[-DS,WH/2]].forEach((q,i)=>{const a=v?q[1]:q[0],b=v?q[0]:q[1];i?x.lineTo(cx+a,cy+b):x.moveTo(cx+a,cy+b)});x.closePath();x.fill();x.lineJoin='round';x.lineWidth=2*e;x.stroke()};
const dvY=D=>D>130?[-D/6,D/6]:[0];
function singleKeyZ(){const Lk=Math.min(16,S.H-(S.stack?POCK:0)-S.wall-FOOT-4);if(Lk<6)return{Lk:0,zs:[]};const L=Math.round(Lk*10)/10;return{Lk:L,zs:[[-1e3,L+.3]]}}
function cellRects(x0,y0,x1,y1,cols,rows,td){const cw=(x1-x0-(cols-1)*td)/cols,ch=(y1-y0-(rows-1)*td)/rows,o=[];
 for(let j=0;j<rows;j++)for(let i=0;i<cols;i++)o.push([x0+i*(cw+td),y0+j*(ch+td),x0+i*(cw+td)+cw,y0+j*(ch+td)+ch]);return{o,cw,ch}}

function boxTris(R,H,t,stack){const o=[],f=stack?FOOT:0,cz=f+t,pz=H-POCK;
 if(stack){cap(R.F,0,false,o);walls(R.F,0,f,o);cap(R.O.concat(rev(R.F)),f,false,o)}else cap(R.O,0,false,o);
 walls(R.O,f,H,o);cap(R.C,cz,true,o);
 if(stack){walls(rev(R.C),cz,pz,o);cap(R.P.concat(rev(R.C)),pz,true,o);walls(rev(R.P),pz,H,o);cap(R.O.concat(rev(R.P)),H,true,o)}
 else{walls(rev(R.C),cz,H,o);cap(R.O.concat(rev(R.C)),H,true,o)}
 return o}
function lidTris(R,RT,stack){const o=[];
 if(RT.length){cap(R.O.concat(rev(RT)),0,false,o);walls(rev(RT),0,LD,o);cap(RT,LD,false,o)}else cap(R.O,0,false,o);
 walls(R.O,0,LT,o);
 if(stack){cap(R.O.concat(rev(R.F)),LT,true,o);walls(R.F,LT,LT+FOOT,o);cap(R.F,LT+FOOT,true,o)}else cap(R.O,LT,true,o);
 return o}
const volume=t=>{let v=0;for(let i=0;i<t.length;i+=9)v+=t[i]*(t[i+4]*t[i+8]-t[i+5]*t[i+7])-t[i+1]*(t[i+3]*t[i+8]-t[i+5]*t[i+6])+t[i+2]*(t[i+3]*t[i+7]-t[i+4]*t[i+6]);return v/6};

async function buildAll(S,res,tol){
 try{await document.fonts.load('40px KFModern')}catch(e){}
 const W=S.W,D=S.D,H=S.H,t=S.wall,r=S.r,conn=S.conn,stack=S.stack,c=cl2(),fl=stack?FOOT:0;
 const Wm=W+2*(DS+3),Hm=D+6;let w=0,h=0;
 const ring=draw=>{const m=mk(Wm,Hm,res);draw(m.x);w=m.c.width;h=m.c.height;return marching(fieldOf(m),w,h,res).map(q=>simplify(q,tol))};
 const ys=dvY(D),rp=Math.max(.5,r-t/2),rf=Math.max(.4,rp-c);
 const kz=conn?singleKeyZ():{Lk:0,zs:[]},O=ring(x=>rr(x,-W/2,-D/2,W/2,D/2,r)),OK=conn&&kz.zs.length?ring(x=>{rr(x,-W/2,-D/2,W/2,D/2,r);x.globalCompositeOperation='destination-out';for(const y of ys)for(const sx of[-W/2,W/2])keyShape(x,sx,y,RK+c)}):O;
 const pl=conn?5.2:t/2,P=[-W/2+pl,-D/2+t/2,W/2-pl,D/2-t/2],F=[P[0]+c,P[1]+c,P[2]-c,P[3]-c];
 const RP=stack?ring(x=>rr(x,...P,rp)):[],RF=stack?ring(x=>rr(x,...F,rf)):[];
 const cav=[-W/2+(conn?6.6:t),-D/2+t,W/2-(conn?6.6:t),D/2-t],cr=Math.max(1,r-t);
 const bc=S.tray?cellRects(...cav,1,1,t):cellRects(...cav,S.cols,S.rows,t);
 const RC=ring(x=>bc.o.forEach(q=>rr(x,...q,cr)));
 const parts=[],info={};const depth=H-fl-t;
 let bt;if(OK===O)bt=boxTris({O,F:RF,P:RP,C:RC},H,t,stack);else{const pz=stack?H-POCK:H,zt=kz.zs[0][1],cuts=[fl,fl+t,pz];if(zt>fl&&zt<pz)cuts.push(zt);cuts.sort((a,b)=>a-b);
  bt=stack?extrude(RF,0,fl):[];
  for(let i=0;i<cuts.length-1;i++)if(cuts[i+1]-cuts[i]>1e-6){const z=(cuts[i]+cuts[i+1])/2,R0=z<zt?OK:O;bt=bt.concat(extrude(cuts[i]>=fl+t-1e-6?R0.concat(rev(RC)):R0,cuts[i],cuts[i+1]))}
  if(stack)bt=bt.concat(extrude(O.concat(rev(RP)),pz,H))}
 parts.push({key:'cBox',name:'Box',tris:bt});
 info.cells=bc.o.length;info.cw=bc.cw;info.ch=bc.ch;info.depth=depth;info.vol=bc.o.length*bc.cw*bc.ch*depth/1e6;
 if(conn){const RKr=ring(x=>keyShape(x,0,0,RK)),Lk=kz.Lk||8;info.keyN=kz.zs.length*ys.length;info.keyL=Lk;info.kz=kz;
  parts.push({key:'cKey',name:'Verbinder',tris:extrude(RKr,0,Lk),qty:info.keyN})}
 if(S.lid){const txt=(S.label||'').trim();
  const RT=txt?ring(x=>{x.save();x.scale(1,-1);x.font='100px KFModern';x.textAlign='center';x.textBaseline='middle';const wd=x.measureText(txt).width/100;
   x.font=Math.min(16,(W-24)/wd,D*.5)+'px KFModern';x.fillText(txt,0,0);x.restore()}):[];
  parts.push({key:'cLid',name:'Deckel',tris:lidTris({O,F:RF},RT,stack)})}
 if(S.tray){const tw=.6,tr=[cav[0]+tw,cav[1]+tw,cav[2]-tw,cav[3]-tw],Ht=Math.max(8,Math.min(S.trayH,depth-3)),trr=Math.max(1,cr-tw);
  const tc=cellRects(tr[0]+t,tr[1]+t,tr[2]-t,tr[3]-t,S.cols,S.rows,t);
  const TO=ring(x=>rr(x,...tr,trr)),TC=ring(x=>tc.o.forEach(q=>rr(x,...q,Math.max(.6,trr-t))));
  parts.push({key:'cTray',name:'Einsatz',tris:plateWithPocket(TO,TC,Ht,Ht-t)});
  info.cells=tc.o.length;info.cw=tc.cw;info.ch=tc.ch;info.depth=Ht-t;info.vol=tc.o.length*tc.cw*tc.ch*(Ht-t)/1e6;info.trayH=Ht}
 parts.forEach(p=>p.tris=Float32Array.from(p.tris));
 return{parts,info}}

/* ---- Passungs-Teststück: 5 Nuten mit steigendem Spiel + Zapfen ---- */
async function fitTestTris(res,tol){
 try{await document.fonts.load('40px KFModern')}catch(e){}
 const CL=[.15,.25,.35,.45,.6],Wm=5*32+20,Hm=70;let w=0,h=0;
 const ring=draw=>{const m=mk(Wm,Hm,res);draw(m.x);w=m.c.width;h=m.c.height;return marching(fieldOf(m),w,h,res).map(q=>simplify(q,tol))};
 const A=ring(x=>{CL.forEach((c,i)=>rr(x,(i-2)*32-13,-20,(i-2)*32+13,0,2));
  x.globalCompositeOperation='destination-out';CL.forEach((c,i)=>keyShape(x,(i-2)*32-13,-10,RK+c/2))});
 const T=ring(x=>{x.font='9px KFModern';x.textAlign='center';x.textBaseline='middle';CL.forEach((c,i)=>x.fillText(String(i+1),(i-2)*32+4,-10))});
 const K=ring(x=>keyShape(x,0,22,RK));
 return[plateWithPocket(A,T,10,.6),extrude(K,0,14)]}
