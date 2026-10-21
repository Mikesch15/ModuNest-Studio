import { createRequire } from 'module';
const require = createRequire('/opt/npm-tools/node_modules/');
const { chromium } = require('playwright');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 1000, height: 800 } });
p.on('pageerror', e => console.log('ERR', e.message));
p.on('console', m => { if (m.type()==='error') console.log('CON', m.text()) });
await p.goto('file:///home/claude/mn/dist/modunest-studio.html');
await p.waitForFunction(() => window.__mn?.built, null, { timeout: 90000 });
const r = await p.evaluate(async () => {
  // fake server
  let left = 2;
  window.fetch = async (u, o) => { const path = u.split('/').pop(), b = JSON.parse(o.body);
    if (path==='redeem') return b.code==='GOOD' ? new Response(JSON.stringify({token:'t',left:2,exp:Date.now()+1e7})) : new Response(JSON.stringify({error:'bad'}),{status:404});
    if (path==='consume') { if (b.n>left) return new Response(JSON.stringify({error:'credits',left}),{status:402}); left-=b.n; return new Response(JSON.stringify({left})) } };
  CONFIG.requireCode = true; CONFIG.api = 'https://x/fn';
  const out = {};
  out.gateOpen0 = (unlockedNow(), document.getElementById('gate').style.display);
  document.getElementById('gcode').value = 'BAD'; document.getElementById('gok').click(); await new Promise(r=>setTimeout(r,100));
  out.bad = document.getElementById('gmsg').textContent;
  document.getElementById('gcode').value = 'GOOD'; document.getElementById('gok').click(); await new Promise(r=>setTimeout(r,100));
  out.gate1 = document.getElementById('gate').style.display; out.info = document.getElementById('creditinfo').textContent;
  addCart(); S.r = 3; addCart(); out.cart = CART.length;
  let dl = []; const od = window.download; window.download = (bl, n) => dl.push(n + ':' + (bl.size||'?'));
  await exportCart(); out.dl = dl; out.info2 = document.getElementById('creditinfo').textContent;
  await exportCart(); out.gate2 = document.getElementById('gate').style.display; out.msg = document.getElementById('gmsg').textContent;
  return out });
console.log(JSON.stringify(r));
await b.close();
