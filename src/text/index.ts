// ─────────────────────────────────────────────────────────────
//  읽는 쪽 — 소개 · 연락 · 개인정보 · 쿠키 · 약관 · 404.
//
//  게임이 아니라 **글이 본체인 쪽**이다. 글은 `src/text/` 안에만 있다.
//  화면 짜임은 `src/layouts/TextLayout.astro` 가 맡는다.
//
//  주소를 만드는 함수(`textPath`)는 여기 없다 — 다른 주소들과 같이
//  `src/i18n/index.ts` 에 있다. 주소 짜임은 한 곳에서만 정한다.
// ─────────────────────────────────────────────────────────────

/** 머리말 하나에 글월 여럿, 필요하면 목록 하나. */
export type Block = {
  /** 덩어리 머리말. `<h2>` 가 된다 */
  h: string;
  /** 글월들. 각각 `<p>` 가 된다. 안에 `<a>` `<em>` `<strong>` 을 써도 된다 */
  p: string[];
  /** 있으면 글월 뒤에 `<ul>` 로 붙는다 */
  list?: string[];
};

export type TextPage = {
  /** 쪽 맨 위 큰 글씨 */
  h1: string;
  /** 큰 글씨 밑 한 줄 */
  lede: string;
  /** 창 제목. 검색 결과의 파란 줄이 된다 */
  metaTitle: string;
  /** 검색 결과에 나오는 설명 */
  metaDesc: string;
  blocks: Block[];
};

export type TextCopy = Record<import('../i18n').Lang, TextPage>;

/**
 * 법적 쪽을 마지막으로 고친 날. 쪽 맨 위에 나온다.
 * **글을 고치면 이 날짜도 같이 고친다.** 안 고치면 거짓말이 된다.
 */
export const TEXT_UPDATED = '2026-08-23';

/** 연락 주소. 두 곳에 적지 않으려고 여기 한 번만 둔다. */
export const CONTACT_EMAIL = 'hello@hanveon.com';

/** 발쪽과 목차에 나오는 차례. 여기 순서가 화면 순서다. */
export const TEXT_SLUGS = [
  'about',
  'contact',
  'legal/privacy',
  'legal/cookies',
  'legal/terms',
] as const;
export type TextSlug = (typeof TEXT_SLUGS)[number];
