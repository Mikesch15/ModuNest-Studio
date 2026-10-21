import { createRequire } from 'module';
const require = createRequire('/opt/npm-tools/node_modules/');
const { chromium } = require('playwright');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
p.on('pageerror', e => console.log('ERR', e.message));
await p.goto('file:///home/claude/mn/dist/modunest-studio.html');
await p.waitForFunction(() => window.__mn?.built, null, { timeout: 60000 });
for (const c of [{r:0},{cols:4,rows:4},{wall:3},{wall:3,r:0},{r:0,conn:false},{r:0,stack:false},{tray:true,cols:3,rows:2,W:200,D:150,H:90}]) {
  const r = await p.evaluate(async (c) => { const k = window.__mn; const r = await k.buildAll({ ...k.S, ...c }, 9, .02); return r.parts.map(x => x.name+':'+k.openEdges(x.tris)).join(' ') }, c);
  console.log(JSON.stringify(c), r);
}
await b.close();
