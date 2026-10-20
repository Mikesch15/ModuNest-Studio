import { createRequire } from 'module';
const require = createRequire('/opt/npm-tools/node_modules/');
const { chromium } = require('playwright');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'] });
const p = await b.newPage();
await p.goto('file:///home/claude/mn/dist/modunest-studio.html');
await p.waitForFunction(() => window.__mn?.built, null, { timeout: 90000 });
console.log(await p.evaluate(() => { const k=mk(60,60,4);k.x.fillRect(-20,10,10,10);const R=marching(fieldOf(k),k.c.width,k.c.height,4);const f=R[0];return JSON.stringify([f.slice(0,3), Math.min(...f.map(q=>q[1])),Math.max(...f.map(q=>q[1]))]) }));
await b.close();
