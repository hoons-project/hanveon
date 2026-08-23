/* ─────────────────────────────────────────────────────────────
   대표 그림 만들기 — `public/og/*.png`

   카톡·트위터·페이스북에 링크를 붙이면 나오는 1200×630 그림이다.
   게임마다 나라말마다 한 장씩, 대문도 나라말마다 한 장씩 만든다.

   생김새는 `design/README.md` 를 따른다 — 흰 바탕, 회색 글씨,
   산호는 로고 한 곳에만.

   돌리는 법 —

     node scripts/make-og.mjs

   Chromium 이 필요하다. 저장소 꾸러미에는 안 들어 있으니 둘 중 하나로 준다.

     PLAYWRIGHT_DIR=/어디/node_modules/playwright CHROMIUM_PATH=/어디/chromium \
       node scripts/make-og.mjs
     또는  npm i -D playwright && npx playwright install chromium

   한국말·일본말·중국말 글씨가 나오려면 Noto Sans CJK 가 깔려 있어야 한다.
   없으면 네모(두부)로 나온다. 만들고 나서 눈으로 한 장은 꼭 열어 본다.

   **새 게임을 넣으면 이걸 다시 돌린다.** 안 돌리면 새 게임 그림이 없다.
   ───────────────────────────────────────────────────────────── */

import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public', 'og');

// ── 자료 읽어오기 (TypeScript 를 그대로 못 읽어서 한 번 묶는다) ──
const bundled = await build({
  entryPoints: [path.join(ROOT, 'scripts', 'og-data.ts')],
  bundle: true,
  format: 'esm',
  platform: 'node',
  write: false,
});
const src = bundled.outputFiles[0].text;
const { GAMES, nameSep, LANGS, UI } = await import(
  'data:text/javascript;base64,' + Buffer.from(src).toString('base64')
);

// ── Chromium 찾기 ────────────────────────────────────────────
let chromium;
try {
  const dir = process.env.PLAYWRIGHT_DIR;
  const mod = await import(dir ? path.join(dir, 'index.js') : 'playwright');
  chromium = (mod.default ?? mod).chromium;
} catch (e) {
  console.error(
    '\nplaywright 를 못 찾았다.\n' +
      '  PLAYWRIGHT_DIR=/어디/node_modules/playwright node scripts/make-og.mjs\n' +
      '  또는  npm i -D playwright && npx playwright install chromium\n',
  );
  process.exit(1);
}

// ── 색 (design/README.md 와 같아야 한다) ─────────────────────
const RAUSCH = '#FF385C';
const HOF = '#222222';
const FOGGY = '#6A6A6A';
const FAINT = '#F7F7F7';
const BEBE = '#EBEBEB';

/** 나라말마다 글꼴이 다르다. CJK 는 제 나라 것을 써야 글자 모양이 맞는다. */
const FONT = {
  en: '"Noto Sans CJK KR", "DejaVu Sans", sans-serif',
  ko: '"Noto Sans CJK KR", "DejaVu Sans", sans-serif',
  ja: '"Noto Sans CJK JP", "DejaVu Sans", sans-serif',
  es: '"Noto Sans CJK KR", "DejaVu Sans", sans-serif',
  fr: '"Noto Sans CJK KR", "DejaVu Sans", sans-serif',
  zh: '"Noto Sans CJK SC", "DejaVu Sans", sans-serif',
};

function esc(s) {
  return String(s).replace(/[&<>"]/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[m]);
}

const CSS = (lang) => `
  *{box-sizing:border-box;margin:0;padding:0}
  body{
    width:1200px;height:630px;overflow:hidden;
    background:#FFFFFF;color:${HOF};
    font-family:${FONT[lang]};
    padding:64px 72px;
    display:flex;align-items:center;gap:56px;
  }
  .art{
    flex:none;width:340px;height:340px;
    border-radius:24px;overflow:hidden;background:${FAINT};
  }
  .art svg{display:block;width:100%;height:100%}
  .txt{min-width:0;flex:1;display:flex;flex-direction:column;gap:18px}
  .brand{font-size:30px;font-weight:900;letter-spacing:-0.03em}
  .brand span{color:${RAUSCH}}
  .name{font-size:66px;font-weight:900;line-height:1.08;letter-spacing:-0.04em;word-break:keep-all}
  .desc{font-size:27px;font-weight:400;line-height:1.45;color:${FOGGY};word-break:keep-all}
  .tag{
    align-self:flex-start;margin-top:4px;
    font-size:22px;font-weight:700;
    background:${FAINT};border-radius:9999px;padding:11px 22px;
  }

  /* 대문 그림 — 그림 여섯을 한 줄로 늘어놓는다 */
  body.home{flex-direction:column;align-items:flex-start;justify-content:center;gap:22px}
  .home .name{font-size:104px}
  .home .desc{font-size:29px;max-width:1000px}
  .arts{display:flex;gap:18px;margin-top:10px}
  .arts .art{width:132px;height:132px;border-radius:16px;border:1px solid ${BEBE}}
`;

function gameCard(game, lang) {
  const [n1, n2] = game.name[lang];
  const t = UI[lang];
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8">
<style>${CSS(lang)}</style></head><body>
<div class="art">${game.art}</div>
<div class="txt">
  <div class="brand">Han<span>veon</span></div>
  <div class="name">${esc(n1)}${nameSep(lang)}${esc(n2)}</div>
  <div class="desc">${esc(game.desc[lang])}</div>
  <div class="tag">${esc(t.freeTag)}</div>
</div></body></html>`;
}

function homeCard(lang) {
  const t = UI[lang];
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8">
<style>${CSS(lang)}</style></head><body class="home">
<div class="name">Han<span style="color:${RAUSCH}">veon</span></div>
<div class="desc">${esc(t.metaDesc)}</div>
<div class="arts">${GAMES.map((g) => `<div class="art">${g.art}</div>`).join('')}</div>
<div class="tag">${esc(t.freeTag)}</div>
</body></html>`;
}

// ── 찍기 ─────────────────────────────────────────────────────
fs.mkdirSync(OUT, { recursive: true });

/* CHROMIUM_PATH 를 주면 그걸 쓰고, 없으면 playwright 가 받아 둔 것을 쓴다. */
const browser = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {},
);
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });

let n = 0;
for (const lang of LANGS) {
  const jobs = [
    [`home-${lang}.png`, homeCard(lang)],
    ...GAMES.map((g) => [`${g.slug}-${lang}.png`, gameCard(g, lang)]),
  ];
  for (const [file, html] of jobs) {
    await page.setContent(html, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: path.join(OUT, file), type: 'png' });
    n++;
  }
}

await browser.close();

const total = fs.readdirSync(OUT).reduce((a, f) => a + fs.statSync(path.join(OUT, f)).size, 0);
console.log(`대표 그림 ${n}장 만듦 → public/og/  (모두 ${(total / 1024 / 1024).toFixed(2)}MB)`);
console.log('한 장은 꼭 눈으로 열어서 글씨가 네모로 안 나오는지 본다.');
