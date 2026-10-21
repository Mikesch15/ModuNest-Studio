// Schnellpruefung (token-sparend): baut alles, prueft beide Produkte, Admin (mit Schein-Server) und vergleicht die
// Geometrie mit tools/baseline.txt. Ausgabe nur Abweichungen und Fehler.
//   node quellcode/tools/check.mjs            pruefen
//   node quellcode/tools/check.mjs --update   Baseline neu schreiben (nach gewollten Geometrie-Aenderungen)
//   node quellcode/tools/check.mjs shot <modunest|namenspuzzle|admin> ['{"S":{...}}'] [breite]   Screenshot -> /tmp/mn-shot.png
import {execSync} from 'child_process';import fs from 'fs';import path from 'path';import {fileURLToPath} from 'url';
const {chromium}=await import('/opt/node22/lib/node_modules/playwright/index.mjs');
const Q=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),ROOT=path.resolve(Q,'..'),BASE=path.join(Q,'tools/baseline.txt');
execSync('python3 assemble.py',{cwd:Q,stdio:'pipe'});
const b=await chromium.launch({args:['--use-gl=swiftshader','--enable-unsafe-swiftshader']});
async function page(f,state,w=1000,h=800){const p=await b.newPage({viewport:{width:w,height:h}});const errs=[];p.on('pageerror',e=>errs.push(e.message));
 await p.addInitScript(s=>{localStorage.clear();localStorage.setItem('mn-help','1');if(s)for(const[k,v]of Object.entries(s))localStorage.setItem(k,typeof v==='string'?v:JSON.stringify(v))},state||null);
 await p.goto('file://'+(f==='admin'?ROOT+'/admin/index.html':Q+'/dist/'+f+'.html'));await p.waitForTimeout(2500);return{p,errs}}
const mode=process.argv[2];
if(mode==='shot'){const f=process.argv[3]||'modunest',st=process.argv[4]?JSON.parse(process.argv[4]):null,w=+process.argv[5]||900;
 const s=st&&st.S?{[(f==='namenspuzzle'?'np':'mn')+'-state']:st.S}:st;const{p,errs}=await page(f,s,w,900);await p.screenshot({path:'/tmp/mn-shot.png',fullPage:f==='admin'});
 console.log('/tmp/mn-shot.png',errs.length?'FEHLER '+errs.join(' | '):'');await b.close();process.exit(0)}
const out=[],errs=[];
// ModuNest: Planer-Konfigurationen
{const{p,errs:e}=await page('modunest');errs.push(...e.map(x=>'modunest: '+x));
 const cfgs=[{W:300,D:180,H:120,mods:[{type:'drawer',w:140,d:100,h:100,nd:3,lid:'none'},{type:'box',w:100,d:80,h:60,div:1,lid:'slide'},{type:'tall',w:60,d:80,h:100,div:0,lid:'none'}]},
  {W:140,D:110,H:65,mods:[{type:'drawer',w:140,d:110,h:65,nd:1,lid:'none'}]},
  {W:240,D:160,H:100,filler:true,sharpSeam:false,mods:[0,0,0,0].map(()=>({type:'box',w:120,d:80,h:60,div:0,lid:'plug'}))},
  {W:240,D:160,H:100,filler:true,mods:[60,40,80,60].map(h=>({type:'box',w:120,d:80,h,div:0,lid:'hinge',tray:h===80}))}];
 for(const c of cfgs)out.push(...await p.evaluate(async c=>{const m=window.__mn,{mods,...sc}=c,pl={};for(const k of['W','D','H'])if(k in sc){pl[k]=sc[k];delete sc[k]}
  Object.assign(m.S,sc,{mode:'plan'});Object.assign(m.PL,pl);m.PL.mods=mods;const r=await m.buildPlan(7,.03);
  return['mn '+c.W+'x'+c.D+' ok='+r.sol.ok+' '+r.sol.msgs.map(x=>x.join('|')).join(';'),...r.parts.map(q=>{let a=[1e9,1e9,1e9],z=[-1e9,-1e9,-1e9];for(let i=0;i<q.tris.length;i+=3)for(let k=0;k<3;k++){a[k]=Math.min(a[k],q.tris[i+k]);z[k]=Math.max(z[k],q.tris[i+k])}
   return'  '+q.name+' n'+(q.qty||1)+' '+z.map((v,k)=>(v-a[k]).toFixed(1)).join('x')+' vol'+Math.round(m.volume(q.tris)/10)*10+' open'+m.openEdges(q.tris)})]},c));
 out.push('mn fittest '+(await p.evaluate(async()=>(await window.__mn.fitTestTris(7,.03)).map(t=>t.length/9>0).join(','))));await p.close()}
// Namenspuzzle
{const{p,errs:e}=await page('namenspuzzle');errs.push(...e.map(x=>'namenspuzzle: '+x));
 out.push(...await p.evaluate(async()=>{const o=[];for(const[n,l,sh,sub]of[['LINA',0,[],''],['HANNAH',0,['kuh','schaf','huhn'],'12.03.2024'],['LEA SOPHIE',0,PZ_SHAPE_IDS.slice(0,6),''],['EMMA',2,PZ_SHAPE_IDS.slice(6),'Art vom Hof']]){
  S.name=n;S.lines=l;S.shapes=sh;S.sub=sub;const r=await buildPuzzle(6,.03);o.push('np '+n+' '+(r.ok?Math.round(r.info.Wb)+'x'+Math.round(r.info.Db)+' H'+r.info.H+' n'+r.info.n+' open'+r.parts.reduce((a,q)=>a+openEdges(q.tris),0)+' vol'+Math.round(r.parts.reduce((a,q)=>a+Math.abs(volume(q.tris)),0)/1000):r.err))}
  const t=await buildPzTest(6,.03);o.push('np fittest open'+t.reduce((a,q)=>a+openEdges(q.tris),0));return o}));await p.close()}
// Admin mit Schein-Server
{const p=await b.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
 await p.route('**/functions/v1/modunest/**',r=>r.fulfill({status:200,contentType:'application/json',headers:{'access-control-allow-origin':'*','access-control-allow-headers':'content-type, x-admin-key'},
  body:JSON.stringify({orders:[{id:'a',source:'etsy',receipt_id:'123456',credits:6,used:1,per:{modunest:6},pused:{modunest:1},status:'pruefen',created_at:new Date().toISOString(),items:[]}],exports:[],listings:[],site:{products:{}},configured:true,connected:false})}));
 await p.addInitScript(()=>localStorage.setItem('mna-key','x'));await p.goto('file://'+ROOT+'/admin/index.html');await p.waitForTimeout(1200);
 out.push('admin geladen='+!(await p.evaluate(()=>document.getElementById('m').classList.contains('lock'))));errs.push(...e.map(x=>'admin: '+x));await p.close()}
await b.close();
const now=out.join('\n')+'\n';
if(mode==='--update'){fs.writeFileSync(BASE,now);console.log('Baseline geschrieben ('+out.length+' Zeilen)')}
else{const old=fs.existsSync(BASE)?fs.readFileSync(BASE,'utf8').split('\n'):[],cur=now.split('\n'),d=[];
 cur.forEach((l,i)=>{if(l!==old[i])d.push('- '+(old[i]??'')+'\n+ '+l)});if(old.length>cur.length)d.push('(Baseline hat '+(old.length-cur.length)+' Zeilen mehr)');
 console.log(d.length?'ABWEICHUNGEN:\n'+d.join('\n'):'Geometrie wie Baseline ('+out.length+' Zeilen)')}
console.log(errs.length?'JS-FEHLER:\n'+errs.join('\n'):'keine JS-Fehler');
