// ─────────────────────────────────────────────────────────────
//  구조화 자료 (JSON-LD).
//
//  구글에 「이 페이지가 무엇인지」 기계가 읽는 꼴로 한 번 더 알려주는 것이다.
//  사람 눈에는 안 보인다. 게임 쪽은 VideoGame, 대문은 WebSite + 목록.
//
//  **없는 것을 지어내지 않는다.** 별점·후기 수 같은 것은 진짜가 아니면 넣지 않는다.
//  가짜 별점은 구글이 잡아내고, 잡히면 페이지 전체가 손해를 본다.
// ─────────────────────────────────────────────────────────────

import { GAMES, fullName, type Game } from './data/games';
import { gamePath, homePath, ogPath, type Lang } from './i18n';
import { ui } from './i18n/ui';

/** 사이트 전체를 가리키는 이름표. 여기저기서 이 이름표를 가리킨다. */
const ORG_ID = '#organization';
const SITE_ID = '#website';

function abs(site: URL, path: string): string {
  return new URL(path, site).href;
}

/** 대문 — 사이트가 무엇인지, 그리고 게임 목록. */
export function homeJsonLd(lang: Lang, site: URL) {
  const t = ui(lang);
  const home = abs(site, homePath(lang));

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': abs(site, '/') + ORG_ID,
        name: 'Hanveon',
        url: abs(site, '/'),
        logo: abs(site, '/favicon.svg'),
      },
      {
        '@type': 'WebSite',
        '@id': abs(site, '/') + SITE_ID,
        url: abs(site, '/'),
        name: 'Hanveon',
        description: t.metaDesc,
        inLanguage: lang,
        publisher: { '@id': abs(site, '/') + ORG_ID },
      },
      {
        '@type': 'CollectionPage',
        '@id': home,
        url: home,
        name: t.homeTitle,
        description: t.metaDesc,
        inLanguage: lang,
        isPartOf: { '@id': abs(site, '/') + SITE_ID },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: GAMES.length,
          itemListElement: GAMES.map((g, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: abs(site, gamePath(lang, g.slug)),
            name: fullName(g, lang),
          })),
        },
      },
    ],
  };
}

/** 게임 하나 — 「이건 브라우저에서 공짜로 하는 게임이다」. */
export function gameJsonLd(game: Game, lang: Lang, site: URL) {
  const t = ui(lang);
  const url = abs(site, gamePath(lang, game.slug));

  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    '@id': url,
    url,
    name: fullName(game, lang),
    description: `${game.desc[lang]} ${t.gameDescTail}`,
    inLanguage: lang,
    image: abs(site, ogPath('game', lang, game.slug)),
    gamePlatform: 'Web browser',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Any (web browser)',
    playMode: 'SinglePlayer',
    genre: 'Casual',
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    publisher: { '@id': abs(site, '/') + ORG_ID },
    isPartOf: { '@id': abs(site, '/') + SITE_ID },
  };
}
