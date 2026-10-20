import { createRequire } from 'module';
const require = createRequire('/opt/npm-tools/node_modules/');
const { chromium } = require('playwright');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'] });
const run = async (name, vp, cfg, click) => {
  const p = await b.newPage({ viewport: vp, locale: 'de-CH', deviceScaleFactor: vp.width < 500 ? 2 : 1 });
  p.on('pageerror', e => console.log('ERR', e.message));
  await p.addInitScript(c => localStorage.setItem('mn-state', JSON.stringify(c)), cfg);
  await p.goto('file:///home/claude/mn/dist/modunest-studio.html');
  await p.waitForFunction(() => window.__mn?.built, null, { timeout: 60000 }); await p.waitForTimeout(300);
  if (click) { await p.click(click); await p.waitForTimeout(400) }
  await p.screenshot({ path: name }); await p.close();
};
await run('m_asm.png', { width: 1280, height: 780 }, { label: 'Schrauben M4' });
await run('m_print.png', { width: 1280, height: 780 }, { tray: true, cols: 3, rows: 2, W: 160, D: 120, H: 70, label: 'Kleinteile' }, '.vt button[data-v=print]');
await run('m_mobile.png', { width: 390, height: 844 }, { label: 'Kabel' });
await b.close();
