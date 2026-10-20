import { createRequire } from 'module';
const require = createRequire('/opt/npm-tools/node_modules/');
const { chromium } = require('playwright');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
p.on('pageerror', e => console.log('ERR', e.message));
const mods=[{type:'drawer',w:140,d:100,h:45,div:0,lid:'none'},{type:'box',w:100,d:80,h:60,div:1,lid:'slide'},{type:'tall',w:60,d:80,h:100,div:0,lid:'none'},{type:'box',w:100,d:80,h:60,div:0,lid:'plug'},{type:'box',w:80,d:80,h:60,div:0,lid:'hinge'}];
await p.addInitScript((mods) => localStorage.setItem('mn-state', JSON.stringify({ mode: 'plan', tex: 'waves', plan: {W:300,D:180,H:100,fill:true,mods} })), mods);
await p.goto('file:///home/claude/mn/dist/modunest-studio.html');
await p.waitForFunction(() => window.__mn?.built, null, { timeout: 90000 }); await p.waitForTimeout(600);
for (const tx of ['ribs','waves','facets','none']) {
  const r = await p.evaluate(async (tx) => { const m = window.__mn; m.S.tex = tx; const b = await m.buildPlan(7, .03);
   const sh=[];return JSON.stringify({ok:b.sol.ok,bad:b.parts.filter(q=>q.name.indexOf('Housing')<0&&q.name.indexOf('Box 2')<0&&(openEdges(q.tris)||volume(q.tris)<=0)).map(q=>q.name+':'+openEdges(q.tris)),tris:b.parts.reduce((s,q)=>s+q.tris.length/9,0)}) }, tx);
  console.log(tx, r);
}
await p.evaluate(() => { S.tex='ribs'; changed() }); await p.waitForTimeout(2500);
await p.evaluate(() => { cam.az = -.6; cam.el = .5; cam.dist *= .75; draw() }); await p.waitForTimeout(200);
await p.locator('#gl').screenshot({ path: '/home/claude/mn/p4.png' });
await b.close();
