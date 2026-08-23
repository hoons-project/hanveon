# Hanveon

설치도 가입도 없이 브라우저에서 바로 하는 작은 게임 모음.
영어 · 한국말 · 일본말 · 스페인말 · 프랑스말 · 중국말.

**https://hanveon.com**

## 돌려보기

```bash
npm install
npm run dev
```

터미널에 뜨는 주소를 연다 (보통 http://localhost:4321).

## 밀기 전에

```bash
npm run build
```

빌드가 통과해야 민다. `main` 에 밀면 Cloudflare Pages 가 자동으로 배포한다.

## 어디에 뭐가 있나

```
src/i18n/index.ts        나라말 목록과 주소 만드는 함수
src/i18n/ui.ts           사이트 전체에 쓰는 글
src/data/games.ts        게임 목록 — 이름·설명·목록 그림
src/games/<이름>/         게임 하나 (Game.astro + strings.ts)
src/games/registry.ts    게임 폴더를 찾아 주소에 붙여 주는 명부
src/seo.ts               구조화 자료(JSON-LD)
src/pages/               주소 — 대문과 게임, 나라말별
src/layouts/             겉틀 (BaseLayout = 머리말·hreflang, GameLayout = 게임 쪽)
src/components/          TopBar, Foot, Hub(대문 알맹이), LangPicker
src/styles/global.css    사이트 공통 생김새
src/styles/game.css      게임 쪽 생김새
scripts/make-og.mjs      대표 그림 만드는 것
public/og/               대표 그림 (스크립트가 만든다. 손대지 않는다)
design/                  생김새 기준과 새 게임 넣는 차례
CLAUDE.md                이 저장소의 규칙
```

## 주소

| 주소 | 무엇 |
|---|---|
| `/` · `/play/<이름>/` | 영어 (주소에 나라말이 안 붙는다) |
| `/ko/` · `/ko/play/<이름>/` | 한국말. `ja` `es` `fr` `zh` 도 같은 꼴 |

## 규칙 몇 가지

- 로그인·서버·데이터베이스 없음. 최고 기록은 기기에만 남는다
- 브랜드 이름 `Hanveon` 은 나라말마다 번역하지 않는다. 설명글만 번역한다
- 영어가 기본 언어
- 같은 것을 두 곳에 적지 않는다 (게임 이름은 `games.ts` 에만)
- 사이트 껍데기는 흰 바탕에 회색 글씨. 색은 로고의 산호 하나뿐
- **캔버스 안쪽 그림은 예외** — 두꺼운 잉크 테두리 그대로다 (`design/README.md`)

자세한 것은 `CLAUDE.md` 와 `design/README.md`.
