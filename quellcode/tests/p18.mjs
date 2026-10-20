import { createRequire } from 'module';
const require = createRequire('/opt/npm-tools/node_modules/');
const { chromium } = require('playwright');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
p.on('pageerror', e => console.log('ERR', e.message));
await p.addInitScript(() => localStorage.setItem('mn-state', JSON.stringify({ mode: 'plan' })));
await p.goto('file:///home/claude/mn/dist/modunest-studio.html');
await p.waitForFunction(() => window.__mn?.built, null, { timeout: 90000 });
const cfgs=[
 {W:300,D:180,H:120,mods:[{type:'drawer',w:140,d:100,h:100,nd:3,lid:'none'},{type:'box',w:100,d:80,h:60,div:1,lid:'slide'},{type:'tall',w:60,d:80,h:100,div:0,lid:'none'}]},
 {W:140,D:110,H:65,mods:[{type:'drawer',w:140,d:110,h:65,nd:1,lid:'none'}]},
 {W:240,D:160,H:100,filler:true,sharpSeam:false,mods:[{type:'box',w:120,d:80,h:60,div:0,lid:'plug'},{type:'box',w:120,d:80,h:60,div:0,lid:'plug'},{type:'box',w:120,d:80,h:60,div:0,lid:'plug'},{type:'box',w:120,d:80,h:60,div:0,lid:'plug'}]},
 {W:240,D:160,H:100,filler:true,mods:[{type:'box',w:120,d:80,h:60,div:0,lid:'plug'},{type:'box',w:120,d:80,h:40,div:0,lid:'plug'},{type:'box',w:120,d:80,h:80,div:0,lid:'plug'},{type:'box',w:120,d:80,h:60,div:0,lid:'plug'}]}];
for (const c of cfgs) {
  const r = await p.evaluate(async (c) => { const m = window.__mn; const sv = {S:{...m.S}, P:JSON.parse(JSON.stringify(m.PL))};
    const { mods, ...sc } = c; const pl = {}; for (const k of ['W','D','H','fill']) if (k in sc) { pl[k] = sc[k]; delete sc[k] }
    Object.assign(m.S, sc, {mode:'plan'}); Object.assign(m.PL, pl); if (mods) m.PL.mods = mods;
    const t0=performance.now(); const b = await m.buildPlan(7, .03);
    const parts=b.parts.map(q=>{let a=[1e9,1e9,1e9],z=[-1e9,-1e9,-1e9];for(let i=0;i<q.tris.length;i+=3)for(let k=0;k<3;k++){a[k]=Math.min(a[k],q.tris[i+k]);z[k]=Math.max(z[k],q.tris[i+k])}
      return q.name+' n'+(q.qty||1)+' tri'+q.tris.length/9+' sz'+z.map((v,k)=>(v-a[k]).toFixed(1)).join('x')+' vol'+m.volume(q.tris).toFixed(0)+' open'+m.openEdges(q.tris)});
    const res = JSON.stringify({ ok: b.sol.ok, msgs: b.sol.msgs.map(x => x.join('|')), ms:Math.round(performance.now()-t0), parts });
    Object.assign(m.S, sv.S); for (const k in m.PL) delete m.PL[k]; Object.assign(m.PL, sv.P); return res }, c);
  console.log(r);
}
await b.close();
