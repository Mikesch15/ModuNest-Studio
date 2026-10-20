import { createRequire } from 'module';
const require = createRequire('/opt/npm-tools/node_modules/');
const { chromium } = require('playwright');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
p.on('pageerror', e => console.log('ERR', e.message));
await p.goto('file:///home/claude/mn/dist/modunest-studio.html');
await p.waitForFunction(() => window.__mn?.built, null, { timeout: 60000 });
const r = await p.evaluate(async () => { const k = window.__mn; const r = await k.buildAll({ ...k.S, label: '' }, 5, .05); const out = [];
 for (const pt of r.parts) { const t = pt.tris; for (let i = 0; i < t.length; i += 9) { const xs = [t[i], t[i+3], t[i+6]], ys = [t[i+1], t[i+4], t[i+7]], zs=[t[i+2],t[i+5],t[i+8]];
  const wx = Math.max(...xs) - Math.min(...xs), wy = Math.max(...ys) - Math.min(...ys);
  const ux=t[i+3]-t[i],uy=t[i+4]-t[i+1],uz=t[i+5]-t[i+2],vx=t[i+6]-t[i],vy=t[i+7]-t[i+1],vz=t[i+8]-t[i+2];const nz=ux*vy-uy*vx;
  if (wx < 1 && wy > 15 && Math.abs(Math.min(...xs)) < 3) out.push([pt.name, +Math.min(...xs).toFixed(2), +Math.max(...xs).toFixed(2), +Math.min(...ys).toFixed(1), +Math.max(...ys).toFixed(1), +zs[0].toFixed(1), +(nz/2).toFixed(4)]) } }
 return out.slice(0, 20) });
console.log(JSON.stringify(r)); await b.close();
