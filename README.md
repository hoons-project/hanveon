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
src/data/games.ts      게임 목록 — 여기만 고치면 대문과 사이트맵이 따라온다
src/data/ui.ts         대문에 쓰는 글
src/pages/index.astro  대문
src/layouts/           겉틀 (제목·설명·canonical·OG)
src/styles/global.css  캐비닛 생김새
public/play/<이름>/     게임. 지금은 통짜 HTML (단계 3에서 Astro 부품으로 옮긴다)
design/                생김새 기준과 새 게임 넣는 차례
CLAUDE.md              이 저장소의 규칙
```

## 규칙 몇 가지

- 로그인·서버·데이터베이스 없음. 최고 기록은 기기에만 남는다
- 게임 하나는 파일 하나. 그 파일만 열어도 돌아가야 한다
- 브랜드 이름 `Hanveon` 은 나라말마다 번역하지 않는다. 설명글만 번역한다
- 영어가 기본 언어

자세한 것은 `CLAUDE.md` 와 `design/README.md`.
