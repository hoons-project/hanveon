# Hanveon — 생김새 기준

화면·색·글씨·짜임을 바꾸기 전에 이 문서를 읽고 여기에 맞춘다.
애매하면 이 문서가 이긴다.

## 한 줄로

**「종이에 그린 장난감 오락기」.** 두꺼운 잉크색 테두리, 크림색 바탕,
밀린 그림자, 넉넉히 둥근 모서리. 그림자는 흐리지 않고 **딱 떨어지게** 민다.

## 색

| 이름 | 값 | 어디에 |
|---|---|---|
| 잉크 | `#2A3145` | 모든 테두리와 글씨. **순검정은 쓰지 않는다** |
| 크림 | `#FFF7EA` | 캐비닛 바탕 |
| 해 | `#FFD23F` | 누르는 단추 |
| 산호 | `#FF7A6B` | 강조 한 곳. 로고의 `veon`, 초점 테두리 |
| 민트 | `#7FD8C8` | 보조 |
| 흐린 글씨 | `#7A8296` | 설명글 |

**바탕색은 쪽마다 다르다.** 대문은 하늘색(`#BFE8FF`), 게임은 저마다 자기 색.
흰 점무늬를 26px 간격으로 깐다.

```css
background:
  radial-gradient(circle at 12% 8%, #FFFFFF 0 3px, transparent 3px) 0 0/26px 26px,
  <바탕색>;
```

## 캐비닛

바깥 껍데기다. 모든 쪽이 이걸 쓴다.

```css
.cabinet{
  max-width:436px;          /* 게임 쪽은 392px */
  background:#FFF7EA;
  border:4px solid #2A3145;
  border-radius:28px;
  box-shadow:8px 8px 0 #2A3145;   /* 흐리지 않게, 오른쪽 아래로 민다 */
  padding:16px;
}
```

## 글씨

- 차례 — Pretendard → Apple SD Gothic Neo → Noto Sans KR → 시스템 글꼴
- 제목 `h1` — 24px, `font-weight:900`, `letter-spacing:-0.03em`
- **`h1` 에 `word-break:keep-all` 을 꼭 넣는다.** 안 넣으면 중국말·일본말 제목이
  글자 가운데서 잘린다
- 설명 `.tag` — 12.5px, 700
- 숫자는 `font-variant-numeric:tabular-nums` (자릿수가 흔들리지 않게)

## 누르는 것

```css
button, .go{
  background:#FFD23F;
  border:3px solid #2A3145;
  border-radius:12px;
  box-shadow:0 4px 0 #2A3145;
  font-weight:900;
}
button:active{ transform:translateY(4px); box-shadow:0 0 0 #2A3145; }
```

**눌리는 느낌을 꼭 넣는다.** 그림자만큼 아래로 내려가고 그림자가 사라진다.

## 하지 않는 것

- 흐린 그림자(`blur`) — 그림자는 항상 딱 떨어지게
- 순검정 `#000000`
- 강조색을 두 개 이상 한 화면에 — 산호는 한 곳에만
- 글씨만 있는 단추 — 테두리와 그림자를 꼭 준다

## 게임 안쪽

게임마다 자기 파일에 CSS 가 따로 있다 (단계 3에서 합친다). 공통 규칙만 적는다.

- 캔버스는 **360×620 고정**. `aspect-ratio` 로 늘린다
- `devicePixelRatio` 는 2로 제한 — 그 위로 올리면 폰에서 느려진다
- HUD 는 칸 세 개. **마지막 칸은 늘 「최고」**
- 덮개 화면 셋 — `scReady` / `scOver` / `scPause`. `.on` 클래스로 켜고 끈다
- 손가락용 단추는 `@media (hover:hover)` 에서 숨긴다
- 적이든 과일이든 **눈과 볼을 그려서** 귀엽게. 테두리는 늘 잉크색
- `prefers-reduced-motion` 이 켜져 있으면 조각(파티클)을 안 뿌린다

## 그림

- 목록 그림은 SVG 로 직접 그린다. 66×66 안에 들어가게
- 사진은 쓰지 않는다
- 파비콘은 `public/favicon.svg` — 크림 바탕에 잉크 `H`, 오른쪽 기둥만 산호
