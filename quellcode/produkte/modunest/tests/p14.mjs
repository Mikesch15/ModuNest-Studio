import { createRequire } from 'module';
const require = createRequire('/opt/npm-tools/node_modules/');
const { chromium } = require('playwright');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
p.on('pageerror', e => console.log('ERR', e.message));
await p.addInitScript(() => localStorage.setItem('mn-state', JSON.stringify({ mode: 'single', sbox: 'drawer', nd: 1, W: 120, D: 140, H: 60 })));
await p.goto('file:///home/claude/mn/dist/modunest-studio.html');
await p.waitForFunction(() => window.__mn?.built, null, { timeout: 90000 }); await p.waitForTimeout(800);
for (const c of [{nd:1},{nd:3,H:100},{nd:2,W:200,D:200,H:90,r:12}]) {
 const r = await p.evaluate(async (c) => { const m = window.__mn; const sv={...m.S}; Object.assign(m.S,c); const b = await window.buildDrawerBox(7,.03);
  const o=b.parts.map(q=>[q.name,q.qty||1,openEdges(q.tris),Math.round(volume(q.tris))]); Object.assign(m.S,sv); return JSON.stringify(o) }, c);
 console.log(JSON.stringify(c), r);
}
await p.evaluate(()=>{cam.az=-.8;cam.el=.5;draw()});await p.waitForTimeout(300);
await p.screenshot({ path: '/home/claude/mn/p14.png' });
const dl=[];p.on('download',d=>dl.push(d));await p.click('#bstl');await p.waitForTimeout(5000);console.log(dl.map(d=>d.suggestedFilename()));
await b.close();
