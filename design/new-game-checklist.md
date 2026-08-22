# 새 게임 넣는 차례

게임을 하나 더 넣을 때 **매번 이 차례를 따른다.** 순서를 지키면 빠뜨리는 게 없다.

---

## 1. 게임 만들기

`design/README.md` 의 게임 안쪽 규칙을 지킨다.

- 캔버스 360×620
- HUD 칸 셋, 마지막은 「최고」
- 덮개 화면 셋 — 시작(`scReady`) / 끝(`scOver`) / 멈춤(`scPause`)
- 최고 기록은 `window.storage` → 없으면 `localStorage`.
  열쇠말은 게임마다 다르게 (`jumpBest` `fruitBest` `planeBest` …)

**캐비닛 CSS 는 새로 쓰지 않는다.** `src/styles/game.css` 에 이미 다 있다 —
`.hud` `.stage` `canvas` `.screen` `.card` `.result` `.legend` `.chip` `.chip.bar` `.chips`
`button` `.pad`. 그 게임만 쓰는 것(캔버스 바탕색, 자기만의 조각)만 따로 쓴다.

## 2. 이름 정하기

- 나라말 여섯 개 다 (`en` `ko` `ja` `es` `fr` `zh`)
- **두 조각으로.** 뒤 조각에 색이 들어간다 — `['Hoppy', 'Jump']`
- **일본말·중국말 이름은 짧게.** 길면 제목이 두 줄로 넘어간다
  (겪은 것 — `ぴょんぴょんジャンプ` 는 넘쳐서 `ぴょんジャンプ` 로 줄였다)

## 3. `src/data/games.ts` 에 한 칸 넣기

```ts
{
  slug: 'my-game',
  accent: '#7FD8C8',        // 이름 뒤 조각 색
  pageBg: '#BFE8FF',        // 게임 쪽 몸통 배경색
  name: { en:['A','B'], ko:['가','나'], ja:[…], es:[…], fr:[…], zh:[…] },
  desc: { en:'…', ko:'…', ja:'…', es:'…', fr:'…', zh:'…' },
  art: `<svg …>`,           // 66×66 안에 들어가는 SVG. 사진은 안 쓴다
}
```

대문 목록·게임 쪽 제목·사이트맵이 여기서 자동으로 나온다.
**게임 이름을 다른 곳에 또 적지 않는다.**

## 4. `src/games/<slug>/strings.ts` 쓰기

그 게임 **안에서만** 쓰는 글. `src/games/hoppy-jump/strings.ts` 를 본떠서 쓴다.

- `tagline`(이름 밑 한 줄)과 `help`(캐비닛 아래 조작 안내)는 꼭 넣는다
- **게임 이름은 여기 안 쓴다** — `games.ts` 에 있다
- **「게임 목록」 같은 공통 글도 여기 안 쓴다** — `src/i18n/ui.ts` 에 있다
- **캔버스에 그리는 글씨도 빠뜨리지 않는다**
- HUD 칸 이름은 짧게 — 로마자 8자 안쪽
- 숫자가 끼면 `{n}` 자리를 두고 `.replace('{n}', 값)`
- 공통 말(시작·다시 하기·이어 하기·잠깐 멈춤)은
  **다른 게임과 똑같이 쓴다.** 게임마다 다르게 부르지 않는다

## 5. `src/games/<slug>/Game.astro` 쓰기

`src/games/hoppy-jump/Game.astro` 를 본떠서 쓴다. 뼈대는 이렇다.

```astro
---
import GameLayout from '../../layouts/GameLayout.astro';
import { findGame } from '../../data/games';
import type { Lang } from '../../i18n';
import { STR } from './strings';

interface Props { lang: Lang }
const { lang } = Astro.props;
const game = findGame('my-game')!;
const T = STR[lang];
---

<GameLayout lang={lang} game={game} tag={T.tagline} help={T.help}>
  …HUD·캔버스·덮개 화면·손가락 단추…

  <style>canvas{ background:#BFE8FF }</style>

  <script define:vars={{ T }}>
    …게임…
  </script>
</GameLayout>
```

지킬 것 —

- 머리(이름·나라말 칸)와 발(안내글·목록으로 돌아가기)은 **GameLayout 이 만든다.**
  게임 쪽에 또 쓰지 않는다
- `<style>` 과 `<script>` 는 **`</GameLayout>` 안쪽 맨 끝**에 둔다.
  밖에 두면 `<body>` 밖으로 나간다
- 글은 `{T.키}` 로 박아 넣는다. `data-i18n` 같은 것은 안 쓴다
- 게임 안에 `LANGS` `pickLang()` `apply()` 를 만들지 않는다.
  나라말마다 페이지가 따로 나오므로 필요 없다
- 게임 코드 안에 `T` 라는 이름의 다른 변수를 두지 않는다

주소는 따로 만들 것이 없다. `src/games/registry.ts` 가 폴더를 보고 알아서 붙인다.

## 6. 확인

```bash
npm run build
```

그다음 브라우저로 직접 본다. 자동으로 돌려도 좋다.

- [ ] 나라말 여섯 개를 다 열어봤다 (`/play/x/` 와 `/ko/play/x/` …)
- [ ] 한국말 아닌 쪽에 한글이 안 남았다
- [ ] 글이 칸 밖으로 안 넘친다 (특히 일본말 제목, 프랑스말 설명)
- [ ] 콘솔에 오류가 없다
- [ ] 나라말 칸을 바꾸면 그 나라말 주소로 넘어간다
- [ ] 「게임 목록」으로 돌아갈 때 나라말이 안 바뀐다
- [ ] 게임이 실제로 끝난다 (게임오버가 뜬다)
- [ ] 최고 기록이 남는다
- [ ] 폰 크기(390px 안팎)에서 안 깨진다
- [ ] 사이트맵(`dist/sitemap-0.xml`)에 여섯 주소가 다 있다

## 7. 목록이 길어지면

| 게임 수 | 목록을 어떻게 |
|---|---|
| ~6개 | 지금처럼 한 페이지에 쭉 |
| 7~15개 | 나눠서 보이기 — 머리 쓰는 것 / 손이 바쁜 것 / 쌓이는 것 |
| 15개~ | 찾기 칸, 전체 목차 |

## 8. 밀기

```bash
git add -A
git commit -m "새 게임 — <이름>"
git push
```

Cloudflare Pages 가 알아서 배포한다. 몇 분 뒤 `hanveon.com` 에서 확인한다.
