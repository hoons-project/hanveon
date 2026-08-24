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

  /* 대문 그림 — 게임 그림을 늘어놓는다.
     크기와 줄 수는 artsLayout() 이 게임 개수를 보고 정한다.
     예전에는 132px 한 줄 고정이라 여덟 개부터 잘려 나갔다. */
  body.home{flex-direction:column;align-items:flex-start;justify-content:center;gap:20px}
  .home .name{font-size:96px}
  .home .desc{font-size:28px;max-width:1000px}
  .arts{display:flex;flex-wrap:wrap;margin-top:6px}
  .arts .art{flex:none;border-radius:14px;border:1px solid ${BEBE}}
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

/* ── 대문 그림의 게임 그림 늘어놓기 ────────────────────
   게임이 늘어도 안 잘리게, 개수를 보고 크기와 줄 수를 정한다.
   일곱까지는 한 줄, 그 위는 두 줄. 두 줄이 넘치면 뒤를 빼고 알린다. */
const ARTS_W = 1000;        // 설명 글 칸과 같은 너비
const ARTS_GAP = 16;
const ARTS_MAX1 = 132;      // 한 줄일 때 최대 크기
const ARTS_MAX2 = 96;       // 두 줄일 때 최대 크기 (세로가 모자란다)
const ARTS_MIN = 70;        // 이보다 작아지면 뒤를 잘라낸다

function artsLayout(n) {
  const rows = n <= 7 ? 1 : 2;
  const max = rows === 1 ? ARTS_MAX1 : ARTS_MAX2;
  let shown = n;
  for (;;) {
    const per = Math.ceil(shown / rows);
    const size = Math.min(max, Math.floor((ARTS_W - (per - 1) * ARTS_GAP) / per));
    if (size >= ARTS_MIN || shown <= 1) {
      return { size, per, shown, rowW: per * size + (per - 1) * ARTS_GAP };
    }
    shown--;
  }
}

/* 자리가 모자라 뺀 것이 있으면 조용히 넘어가지 않고 알린다 */
{
  const L = artsLayout(GAMES.length);
  if (L.shown < GAMES.length) {
    console.warn(`[og] 대문 그림 — 게임 ${GAMES.length}개 중 ${L.shown}개만 넣었다. ` +
                 `뒤 ${GAMES.length - L.shown}개가 빠진다. 줄 수를 늘리거나 크기를 줄여야 한다.`);
  }
}

function homeCard(lang) {
  const t = UI[lang];
  const L = artsLayout(GAMES.length);
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8">
<style>${CSS(lang)}</style></head><body class="home">
<div class="name">Han<span style="color:${RAUSCH}">veon</span></div>
<div class="desc">${esc(t.metaDesc)}</div>
<div class="arts" style="width:${L.rowW}px;gap:${ARTS_GAP}px">${GAMES.slice(0, L.shown)
  .map((g) => `<div class="art" style="width:${L.size}px;height:${L.size}px">${g.art}</div>`).join('')}</div>
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
