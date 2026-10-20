import { createRequire } from 'module';
const require = createRequire('/opt/npm-tools/node_modules/');
const { chromium } = require('playwright');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
p.on('pageerror', e => console.log('ERR', e.message));
await p.addInitScript(() => localStorage.setItem('mn-state', JSON.stringify({ mode: 'plan', plan: {W:280,D:180,H:100,fill:true,mods:[
  {type:'drawer',w:140,d:100,h:45,div:0,lid:'none'},{type:'drawer',w:140,d:100,h:45,div:0,lid:'none'},{type:'box',w:100,d:80,h:60,div:1,lid:'hinge'},{type:'tall',w:60,d:80,h:100,div:0,lid:'none'},{type:'box',w:100,d:80,h:60,div:0,lid:'plug'}]} })));
await p.goto('file:///home/claude/mn/dist/modunest-studio.html');
await p.waitForFunction(() => window.__mn?.built, null, { timeout: 90000 }); await p.waitForTimeout(600);
const run = async (tag) => { const r = await p.evaluate(async () => { const m = window.__mn; const b = await m.buildPlan(7, .03);
  return JSON.stringify({ ok: b.sol.ok, msgs: b.sol.msgs.map(x => x.join('|')), parts: b.parts.map(q => [q.name, q.qty||1, openEdges(q.tris), Math.round(volume(q.tris))]) }) }); console.log(tag, r) };
await run('default');console.log(await p.evaluate(()=>(window.__sh||[]).map(t=>[openEdges(Float32Array.from(t)),Math.round(volume(Float32Array.from(t)))])));
await p.evaluate(() => { cam.az = -.5; cam.el = .6; cam.dist *= .7; draw() }); await p.waitForTimeout(300);
await p.locator('#gl').screenshot({ path: '/home/claude/mn/p3.png' });
await p.evaluate(() => { cam.az = -2.4; cam.el = .5; draw() }); await p.waitForTimeout(300);
await p.locator('#gl').screenshot({ path: '/home/claude/mn/p3b.png' });
await b.close();
