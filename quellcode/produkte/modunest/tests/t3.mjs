import { createRequire } from 'module';
const require = createRequire('/opt/npm-tools/node_modules/');
const { chromium } = require('playwright');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
p.on('pageerror', e => console.log('ERR', e.message));
await p.goto('file:///home/claude/mn/dist/modunest-studio.html');
await p.waitForFunction(() => window.__mn?.built, null, { timeout: 60000 });
for (const c of [{cols:2,rows:4},{cols:4,rows:2},{cols:3,rows:3},{cols:4,rows:4,res:5},{cols:4,rows:4,conn:false},{cols:4,rows:4,stack:false}]) {
  const r = await p.evaluate(async (c) => { const k = window.__mn; const res=c.res||9; delete c.res; const r = await k.buildAll({ ...k.S, ...c }, res, res===9?.02:.05); return r.parts.map(x => x.name+':'+k.openEdges(x.tris)).join(' ') }, c);
  console.log(JSON.stringify(c), r);
}
await b.close();
