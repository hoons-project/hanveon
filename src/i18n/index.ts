// ─────────────────────────────────────────────────────────────
//  나라말 다루기 — 여기가 기준이다.
//
//  주소 짜임 —
//    영어는 `/` 와 `/play/<slug>/` 를 그대로 쓴다. 이미 인터넷에 나가 있는 주소라
//    바꾸면 그동안 쌓인 것이 끊긴다.
//    나머지는 앞에 나라말을 붙인다 — `/ko/`, `/ko/play/<slug>/`.
// ─────────────────────────────────────────────────────────────

export const LANGS = ['en', 'ko', 'ja', 'es', 'fr', 'zh'] as const;
export type Lang = (typeof LANGS)[number];

/** 기본 나라말. 이것만 주소에 붙지 않는다. */
export const BASE_LANG: Lang = 'en';

/** 주소에 나라말이 붙는 것들 (영어 뺀 나머지). */
export const SUB_LANGS = LANGS.filter((l) => l !== BASE_LANG) as Exclude<Lang, 'en'>[];

export const LANG_NAME: Record<Lang, string> = {
  en: 'English',
  ko: '한국어',
  ja: '日本語',
  es: 'Español',
  fr: 'Français',
  zh: '中文',
};

/** `<html lang>` 과 `hreflang` 에 쓰는 값. 지금은 나라말 코드와 같다. */
export const HREFLANG: Record<Lang, string> = {
  en: 'en',
  ko: 'ko',
  ja: 'ja',
  es: 'es',
  fr: 'fr',
  zh: 'zh',
};

/** 대문 주소. 영어는 `/`, 나머지는 `/ko/`. */
export function homePath(lang: Lang): string {
  return lang === BASE_LANG ? '/' : `/${lang}/`;
}

/** 게임 주소. 영어는 `/play/x/`, 나머지는 `/ko/play/x/`. */
export function gamePath(lang: Lang, slug: string): string {
  return lang === BASE_LANG ? `/play/${slug}/` : `/${lang}/play/${slug}/`;
}

/**
 * 대표 그림 주소. 카톡·트위터에 링크를 붙일 때 나오는 1200×630 그림이다.
 * 그림은 `scripts/make-og.mjs` 가 `public/og/` 에 만들어 둔다.
 *
 * **읽는 쪽은 대문 그림을 같이 쓴다.** 쪽마다 그림을 새로 만들지 않는다 —
 * 지금도 42장인데 30장이 더 늘고, 글만 있는 쪽에 그림을 따로 줄 이유가 없다.
 */
export function ogPath(kind: PageKind, lang: Lang, slug?: string): string {
  return kind === 'game' ? `/og/${slug}-${lang}.png` : `/og/home-${lang}.png`;
}

/**
 * 같은 페이지의 여섯 나라말 주소를 다 만든다.
 * `hreflang` 을 넣을 때 쓴다.
 */
export function altPaths(kind: PageKind, slug?: string): { lang: Lang; path: string }[] {
  return LANGS.map((lang) => ({
    lang,
    path:
      kind === 'home' ? homePath(lang)
      : kind === 'game' ? gamePath(lang, slug!)
      : textPath(lang, slug!),
  }));
}

/** 쪽의 갈래. 대표 그림과 hreflang 을 만드는 데 쓴다. */
export type PageKind = 'home' | 'game' | 'text';

/**
 * 읽는 쪽 주소. 영어는 `/about/`, 나머지는 `/ko/about/`.
 * `slug` 는 `about` `legal/privacy` 처럼 앞뒤 빗금 없이 준다.
 */
export function textPath(lang: Lang, slug: string): string {
  return lang === BASE_LANG ? `/${slug}/` : `/${lang}/${slug}/`;
}

/** 주소에서 받은 값이 우리가 아는 나라말인지 확인한다. */
export function isLang(v: unknown): v is Lang {
  return typeof v === 'string' && (LANGS as readonly string[]).includes(v);
}
