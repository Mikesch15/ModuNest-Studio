import { createRequire } from 'module';
const require = createRequire('/opt/npm-tools/node_modules/');
const { chromium } = require('playwright');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
p.on('pageerror', e => console.log('ERR', e.message));
await p.addInitScript(() => localStorage.setItem('mn-state', JSON.stringify({ mode: 'plan' })));
await p.goto('file:///home/claude/mn/dist/modunest-studio.html');
await p.waitForFunction(() => window.__mn?.built, null, { timeout: 90000 });
const cfgs=[{},{r:12},{r:0},{stack:false},{wall:3,r:12},{fit:5,r:8},{W:200,D:120,H:120,mods:[{type:'box',w:100,d:60,h:50,div:3,lid:'plug'},{type:'tall',w:60,d:60,h:100,div:0,lid:'none'},{type:'box',w:60,d:60,h:50,div:2,lid:'plug'}]},
 {W:300,D:180,H:120,mods:[{type:'drawer',w:140,d:100,h:100,nd:3,lid:'none'},{type:'box',w:100,d:80,h:60,div:1,lid:'slide'},{type:'tall',w:60,d:80,h:100,div:0,lid:'none'},{type:'box',w:100,d:80,h:60,div:0,lid:'hinge'}]}];
for (const c of cfgs) {
  const r = await p.evaluate(async (c) => { const m = window.__mn; const sv = {S:{...m.S}, P:JSON.parse(JSON.stringify(m.PL))};
    const { mods, ...sc } = c; const pl = {}; for (const k of ['W','D','H','fill']) if (k in sc) { pl[k] = sc[k]; delete sc[k] }
    Object.assign(m.S, sc); Object.assign(m.PL, pl); if (mods) m.PL.mods = mods;
    const b = await m.buildPlan(7, .03); let viol=[];
    if (b.sol.ok) { const cc=([.15,.25,.35,.45,.6][(+m.S.fit||3)-1])/2;
     for (const it of b.sol.items) { const W=it.w-.2,D=it.d-.2,r=Math.min(m.S.r,W/2-1,D/2-1);
      for (const q of m.slotsFor(it,b.sol.keys)) { const half=(q.side==='L'||q.side==='R'?D:W)/2, ext=4.5+.8+cc; if (Math.abs(q.s)+ext > half-r-0.5) viol.push(it.i+q.side+Math.round(q.s)+'/r'+Math.round(r)) } } }
    const res = JSON.stringify({ ok: b.sol.ok, msgs: b.sol.msgs.map(x => x.join('|')), keys: b.info?.keys, viol, zs: b.sol.keys[0]?.zs, vol: b.parts.filter(q=>volume(q.tris)<=0).map(q=>q.name) });
    Object.assign(m.S, sv.S); for (const k in m.PL) delete m.PL[k]; Object.assign(m.PL, sv.P); return res }, c);
  console.log(JSON.stringify(c).slice(0, 50), r);
}
await b.close();
