import { createRequire } from 'module';
const require = createRequire('/opt/npm-tools/node_modules/');
const { chromium } = require('playwright');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
p.on('pageerror', e => console.log('ERR', e.message));
const mods=[{type:'drawer',w:140,d:100,h:45,div:0,lid:'none'},{type:'box',w:100,d:80,h:60,div:1,lid:'slide'},{type:'tall',w:60,d:80,h:100,div:0,lid:'none'},{type:'box',w:100,d:80,h:60,div:0,lid:'plug'},{type:'box',w:80,d:80,h:60,div:0,lid:'hinge'}];
await p.addInitScript((mods) => localStorage.setItem('mn-state', JSON.stringify({ mode: 'plan', tex: 'facets', plan: {W:300,D:180,H:100,fill:true,mods} })), mods);
await p.goto('file:///home/claude/mn/dist/modunest-studio.html');
await p.waitForFunction(() => window.__mn?.built, null, { timeout: 90000 }); await p.waitForTimeout(600);
const dl = []; p.on('download', d => dl.push(d));
await p.click('#b3mf'); await p.waitForTimeout(6000);
await p.click('#bstl'); await p.waitForTimeout(6000);
for (const d of dl) { const path = '/home/claude/mn/out_' + d.suggestedFilename(); await d.saveAs(path); console.log(d.suggestedFilename(), (await import('fs')).statSync(path).size) }
await p.click('.vt button[data-v=print]'); await p.waitForTimeout(500);
console.log(await p.evaluate(() => document.getElementById('status').innerText));
await p.screenshot({ path: '/home/claude/mn/p5.png' });
await b.close();
