/* ================= ModuNest-Geometrie ================= */
const FOOT=2,POCK=2.6,DS=3,WN=6,WH=9,RK=.8,LT=2.4,LD=.8,KEYMAX=30;
const cl2=()=>[.15,.25,.35,.45,.6][(+S.fit||3)-1]/2;
const LIDX=.05,SLIDEX=.15; // Zusatz-Spiel je Seite: Steckdeckel, Schiebedeckel (Schublade: +.2 in geo2 dg; Einsatz fest .6)
const poly=(x,p)=>{x.beginPath();p.forEach((q,i)=>i?x.lineTo(q[0],q[1]):x.moveTo(q[0],q[1]));x.closePath();x.fill()};
const rr=(x,x0,y0,x1,y1,r)=>{x.beginPath();x.roundRect(x0,y0,x1-x0,y1-y0,Math.max(0,Math.min(r,(x1-x0)/2,(y1-y0)/2)));x.fill()};
// Schmetterlings-Verbinder: Fliege mit schmaler Taille, abgerundet. e = Aufweitung (Spiel).
const keyShape=(x,cx,cy,e,v)=>{x.beginPath();[[-DS,-WH/2],[0,-WN/2],[DS,-WH/2],[DS,WH/2],[0,WN/2],[-DS,WH/2]].forEach((q,i)=>{const a=v?q[1]:q[0],b=v?q[0]:q[1];i?x.lineTo(cx+a,cy+b):x.moveTo(cx+a,cy+b)});x.closePath();x.fill();x.lineJoin='round';x.lineWidth=2*e;x.stroke()};
const dvY=D=>D>130?[-D/6,D/6]:[0];
// Verbinder mit Klick: knapp ueber der Nut-Oeffnung hat der Schluessel einen Ring (KB hoch, je Seite Spiel + CLK breiter),
// die Nut dort eine passende Vertiefung. Darunter bleibt eine LIP hohe Kante mit normalem Spiel: der Ring drueckt sich
// beim Einschieben darueber und rastet ein -> faellt nicht heraus. Druck stehend, Kanten 0.3 mm: keine Stuetzen.
const KB=2.5,LIP=.4,CLK=.15;
const clickZ=()=>{const z=(S.stack?FOOT:0)+LIP;return[z,z+KB+.1]}; // Vertiefung in der Nut (z von/bis)
const inClk=z=>{const[a,b]=clickZ();return z>a&&z<b};
function keyTris(Lk,res,tol){const R=e=>{const m=mk(WH+4,WH+4,res);keyShape(m.x,0,0,e);return marching(fieldOf(m),m.c.width,m.c.height,res).map(q=>simplify(q,tol))};
 const z0=clickZ()[0]+.05,z1=z0+KB,a=R(RK),b=R(RK+cl2()+CLK),o=[];cap(a,0,false,o);walls(a,0,z0,o);cap(b.concat(rev(a)),z0,false,o);walls(b,z0,z1,o);cap(b.concat(rev(a)),z1,true,o);
 /* Spitze oben 2-fach abgestuft (je 0.3 mm schmaler): zeigt, welches Ende zuerst hinein muss, und fuehrt beim Einstecken */
 const zt=Math.max(z1+.6,Lk-1.2);if(Lk-zt>=.6){const a1=R(RK-.3),a2=R(RK-.6),zm=(zt+Lk)/2;walls(a,z1,zt,o);cap(a.concat(rev(a1)),zt,true,o);walls(a1,zt,zm,o);
  /* «O» 0.4 mm tief oben eingraviert: markiert das obere Ende (alle Flaechen aus denselben Ringen -> dicht) */
  const ze=Lk-.4,ann=x=>{x.beginPath();x.arc(0,0,2.2,0,7);x.arc(0,0,1.3,0,7,true);x.fill('evenodd')};
  const T=(()=>{const m=mk(WH+4,WH+4,res);keyShape(m.x,0,0,RK-.6);m.x.globalCompositeOperation='destination-out';ann(m.x);return marching(fieldOf(m),m.c.width,m.c.height,res).map(q=>simplify(q,tol))})().sort((p,q)=>Math.abs(area(q))-Math.abs(area(p)));
  if(Lk-zm>.5&&T.length===3){const out=[T[0]];cap(a1.concat(rev(out)),zm,true,o);walls(out,zm,ze,o);cap(rev(T.slice(1)),ze,true,o);walls(T,ze,Lk,o);cap(T.slice(0,2),Lk,true,o);cap([T[2]],Lk,true,o)}
  else{cap(a1.concat(rev(a2)),zm,true,o);walls(a2,zm,Lk,o);cap(a2,Lk,true,o)}return o}
 walls(a,z1,Lk,o);cap(a,Lk,true,o);return o}
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

async function buildAll(S,res,tol){
 try{await document.fonts.load('40px KFModern')}catch(e){}
 const W=S.W,D=S.D,H=S.H,t=S.wall,r=S.r,conn=S.conn,stack=S.stack,c=cl2(),fl=stack?FOOT:0;
 const Wm=W+2*(DS+3),Hm=D+6;let w=0,h=0;
 const ring=draw=>{const m=mk(Wm,Hm,res);draw(m.x);w=m.c.width;h=m.c.height;return marching(fieldOf(m),w,h,res).map(q=>simplify(q,tol))};
 const ys=dvY(D),rp=Math.max(.5,r-t/2),rf=Math.max(.4,rp-c);
 const kz=conn?singleKeyZ():{Lk:0,zs:[]},O=ring(x=>rr(x,-W/2,-D/2,W/2,D/2,r)),slR=e=>ring(x=>{rr(x,-W/2,-D/2,W/2,D/2,r);x.globalCompositeOperation='destination-out';for(const y of ys)for(const sx of[-W/2,W/2])keyShape(x,sx,y,e)}),OK=conn&&kz.zs.length?slR(RK+c):O,OKc=OK===O?O:slR(RK+c+CLK+.05);
 const pl=conn?5.2:t/2,P=[-W/2+pl,-D/2+t/2,W/2-pl,D/2-t/2],F=[P[0]+c,P[1]+c,P[2]-c,P[3]-c];
 const RP=stack?ring(x=>rr(x,...P,rp)):[],RF=stack?ring(x=>rr(x,...F,rf)):[];
 const cav=[-W/2+(conn?6.6:t),-D/2+t,W/2-(conn?6.6:t),D/2-t],cr=Math.max(1,r-t);
 const bc=S.tray?cellRects(...cav,1,1,t):cellRects(...cav,S.cols,S.rows,t);
 const RC=ring(x=>bc.o.forEach(q=>rr(x,...q,cr)));
 const parts=[],info={};const depth=H-fl-t;
 let bt;if(OK===O)bt=boxTris({O,F:RF,P:RP,C:RC},H,t,stack);else{const pz=stack?H-POCK:H,zt=kz.zs[0][1],cuts=[fl,fl+t,pz];if(zt>fl&&zt<pz)cuts.push(zt);clickZ().forEach(v=>{if(v>fl&&v<Math.min(zt,pz))cuts.push(v)});cuts.sort((a,b)=>a-b);
  bt=stack?extrude(RF,0,fl):[];
  for(let i=0;i<cuts.length-1;i++)if(cuts[i+1]-cuts[i]>1e-6){const z=(cuts[i]+cuts[i+1])/2,R0=z<zt?(inClk(z)?OKc:OK):O;bt=bt.concat(extrude(cuts[i]>=fl+t-1e-6?R0.concat(rev(RC)):R0,cuts[i],cuts[i+1]))}
  if(stack)bt=bt.concat(extrude(O.concat(rev(RP)),pz,H))}
 parts.push({key:'cBox',name:'Box',tris:bt});
 info.cells=bc.o.length;info.cw=bc.cw;info.ch=bc.ch;info.depth=depth;info.vol=bc.o.length*bc.cw*bc.ch*depth/1e6;
 if(conn){const Lk=kz.Lk||8;info.keyN=kz.zs.length*ys.length;info.keyL=Lk;info.kz=kz;
  parts.push({key:'cKey',name:'Verbinder',tris:keyTris(Lk,res,tol),qty:info.keyN})}
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
