import { createRequire } from 'module';
const require = createRequire('/opt/npm-tools/node_modules/');
const { chromium } = require('playwright');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
p.on('pageerror', e => console.log('ERR', e.message));
await p.addInitScript(() => localStorage.setItem('mn-state', JSON.stringify({ mode: 'plan' })));
await p.goto('file:///home/claude/mn/dist/modunest-studio.html');
await p.waitForFunction(() => window.__mn?.built, null, { timeout: 90000 });
const cfgs = [{stack:false},{wall:3,r:0},{wall:1.6,r:12},{fill:false},{W:200,D:120,H:120,mods:[{type:'box',w:100,d:60,h:50,div:3,lid:'plug'},{type:'tall',w:60,d:60,h:100,div:0,lid:'none'},{type:'box',w:60,d:60,h:50,div:2,lid:'plug'}]},{H:100},{W:150,D:100},{mods:[]}];
for (const c of cfgs) {
  const r = await p.evaluate(async (c) => { const m = window.__mn; const sv = {S:{...m.S}, P:JSON.parse(JSON.stringify(m.PL))};
    const { mods, ...sc } = c; const pl = {}; for (const k of ['W','D','H','fill']) if (k in sc) { pl[k] = sc[k]; delete sc[k] }
    Object.assign(m.S, sc); Object.assign(m.PL, pl); if (mods) m.PL.mods = mods;
    const b = await m.buildPlan(7, .03);
    const o = b.parts.filter(q => openEdges(q.tris) || volume(q.tris) <= 0).map(q => q.name + ':' + openEdges(q.tris) + '/' + Math.round(volume(q.tris)));
    const res = JSON.stringify({ ok: b.sol.ok, msgs: b.sol.msgs.map(x => x.join('|')), n: b.parts.length, bad: o, keys: b.info?.keys });
    Object.assign(m.S, sv.S); for (const k in m.PL) delete m.PL[k]; Object.assign(m.PL, sv.P); return res }, c);
  console.log(JSON.stringify(c).slice(0, 60), r);
}
await b.close();
