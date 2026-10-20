import { createRequire } from 'module';
const require = createRequire('/opt/npm-tools/node_modules/');
const { chromium } = require('playwright');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 1280, height: 780 } });
await p.goto('file:///home/claude/mn/dist/modunest-studio.html');
await p.waitForFunction(() => window.__mn?.built, null, { timeout: 60000 }); await p.waitForTimeout(300);
await p.evaluate(() => { cam.az = -1.15; cam.el = .6; draw() }); await p.waitForTimeout(200);
await p.locator('#gl').screenshot({ path: 'rot.png' }); await b.close();
