import { createRequire } from 'module';
const require = createRequire('/opt/npm-tools/node_modules/');
const { chromium } = require('playwright');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
p.on('pageerror', e => console.log('ERR', e.message));
await p.addInitScript(() => localStorage.setItem('mn-state', JSON.stringify({ mode:'single', tex:'ribs', r:8, plan:{W:140,D:110,H:90,fill:true,mods:[],one:{type:'drawer',nd:2,div:0,lid:'none'},alt:{W:280,D:180,H:160}} })));
await p.goto('file:///home/claude/mn/dist/modunest-studio.html');
await p.waitForFunction(() => window.__mn?.built, null, { timeout: 90000 }); await p.waitForTimeout(800);
await p.evaluate(()=>{cam.az=-.8;cam.el=.45;cam.dist*=.8;draw()});await p.waitForTimeout(300);
await p.locator('#gl').screenshot({ path: '/home/claude/mn/p16a.png' });
await p.click('.vt button[data-v=print]');await p.waitForTimeout(600);
await p.evaluate(()=>{cam.az=-.8;cam.el=.7;draw()});await p.waitForTimeout(300);
await p.locator('#gl').screenshot({ path: '/home/claude/mn/p16b.png' });
// plan with sharp corners
await p.evaluate(async()=>{const m=window.__mn;m.S.mode='plan';m.S.tex='none';Object.assign(m.PL,{W:280,D:180,H:100,mods:[{type:'box',w:90,d:80,h:60,div:0,lid:'plug'},{type:'box',w:70,d:80,h:60,div:1,lid:'none'},{type:'box',w:100,d:80,h:60,div:0,lid:'plug',cols:2,rows:1},{type:'tall',w:45,d:45,h:100,div:0,lid:'none'}]});S.view='asm';changed();});await p.waitForTimeout(4000);
await p.evaluate(()=>{cam.az=0;cam.el=1.55;draw()});await p.waitForTimeout(400);
await p.locator('#gl').screenshot({ path: '/home/claude/mn/p16d.png' });
await b.close();
