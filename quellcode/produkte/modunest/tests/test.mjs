import { createRequire } from 'module';
const require = createRequire('/opt/npm-tools/node_modules/');
const { chromium } = require('playwright');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 1280, height: 800 }, locale: 'de-CH' });
const errs = []; p.on('console', m => { if (m.type() === 'error') errs.push(m.text()) }); p.on('pageerror', e => errs.push('PAGEERR ' + e.message));
await p.addInitScript(() => localStorage.setItem('mn-state', JSON.stringify({ label: 'Schrauben M4' })));
await p.goto('file:///home/claude/mn/dist/modunest-studio.html');
await p.waitForFunction(() => window.__mn?.built, null, { timeout: 60000 }); await p.waitForTimeout(400);
await p.screenshot({ path: 'm1.png' });
const cfgs = [{}, { stack: false, conn: false, lid: false }, { tray: true, cols: 3, rows: 2, W: 200, D: 150, H: 90, label: 'Kleinteile' }, { wall: 3, r: 0, cols: 4, rows: 4, conn: false }, { r: 12, wall: 1.6, D: 180, H: 40, cols: 1, rows: 1 }];
for (const c of cfgs) {
  const r = await p.evaluate(async (c) => { const k = window.__mn; const S = { ...k.S, ...c }; const t0 = performance.now(); const r = await k.buildAll(S, 9, .02); const t = performance.now() - t0;
    return { t: Math.round(t), parts: r.parts.map(x => ({ n: x.name, tri: x.tris.length / 9, open: k.openEdges(x.tris), vol: Math.round(k.volume(x.tris)) })) } }, c);
  console.log(JSON.stringify(c), JSON.stringify(r));
}
const ft = await p.evaluate(async () => { const t = await window.__mn.fitTestTris(9, .02); return t.map(x => ({ tri: x.length / 9, vol: Math.round(window.__mn.volume(Float32Array.from(x))), open: window.__mn.openEdges(Float32Array.from(x)) })) });
console.log('FIT', JSON.stringify(ft));
console.log('ERRS', errs); await b.close();
