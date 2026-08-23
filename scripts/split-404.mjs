// ─────────────────────────────────────────────────────────────
//  나라말별 404 를 제자리로 옮긴다. 빌드 뒤에 저절로 돈다 (`postbuild`).
//
//  왜 필요한가 —
//    Cloudflare Pages 는 없는 주소를 만나면 그 주소에서 **위로 올라가며**
//    제일 가까운 `404.html` 을 찾는다. 그러니까 `/ko/asdf/` 는
//    `/ko/asdf/404.html` → `/ko/404.html` → `/404.html` 차례로 찾는다.
//
//    그런데 Astro 는 `trailingSlash:'always'` 라서 `[lang]/404.astro` 를
//    `dist/ko/404/index.html` 로 내놓는다. **파일 이름이 `404.html` 이 아니라서
//    Cloudflare 가 못 찾는다.** 맨 위 `dist/404.html` 만 특별히 그 이름으로 나온다.
//
//  그래서 여기서 옮긴다 —
//    dist/ko/404/index.html  →  dist/ko/404.html   (그리고 빈 폴더를 지운다)
//
//  폴더를 지우는 이유 — 안 지우면 `/ko/404/` 가 그냥 열리는 진짜 쪽이 된다.
//  없는 쪽을 보여주는 쪽이 자기 주소를 갖는 것은 말이 안 된다.
// ─────────────────────────────────────────────────────────────

import { readFile, writeFile, rm, access } from 'node:fs/promises';
import { join } from 'node:path';

const DIST = 'dist';
const LANGS = ['ko', 'ja', 'es', 'fr', 'zh'];

let moved = 0;

for (const lang of LANGS) {
  const from = join(DIST, lang, '404', 'index.html');
  const to = join(DIST, lang, '404.html');

  try {
    await access(from);
  } catch {
    console.error(`[404] 못 찾음: ${from}`);
    process.exitCode = 1;
    continue;
  }

  await writeFile(to, await readFile(from));
  await rm(join(DIST, lang, '404'), { recursive: true, force: true });
  moved++;
}

console.log(`[404] 나라말 404 ${moved}개를 제자리로 옮겼다`);

if (moved !== LANGS.length) {
  console.error('[404] 개수가 안 맞는다. 빌드를 멈춘다');
  process.exitCode = 1;
}
