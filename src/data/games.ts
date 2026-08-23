// ─────────────────────────────────────────────────────────────
//  게임 목록 — 여기 한 곳만 고치면 대문·게임 쪽·사이트맵이 따라온다.
//  새 게임 넣는 차례는 design/new-game-checklist.md 를 따른다.
//
//  게임 안에서 쓰는 글(시작 화면·끝 화면·조작 안내)은 여기 없다.
//  그건 `src/games/<slug>/strings.ts` 에 있다.
// ─────────────────────────────────────────────────────────────

import type { Lang } from '../i18n';

/** 이름 두 조각 사이를 띄우는 나라말. 일본말·중국말은 붙여 쓴다. */
const SPACED: readonly Lang[] = ['en', 'ko', 'es', 'fr'];

/** 게임 갈래. 대문을 나누는 데는 아직 안 쓰고, 「비슷한 게임」 고르는 데 쓴다. */
export type Kind = 'quick' | 'think' | 'stack';

export type Game = {
  /** 주소에 쓰는 이름. 게임은 /play/<slug>/ 에 놓인다. */
  slug: string;
  /** 갈래. 지금은 「비슷한 게임」 고르는 데만 쓴다. */
  kind: Kind;
  /** 나라말별 게임 이름 두 조각. 뒤 조각에 색이 들어간다. */
  name: Record<Lang, [string, string]>;
  /** 목록에 보이는 한 줄 설명. */
  desc: Record<Lang, string>;
  /** 목록 그림. 66×66 안에 들어가는 SVG. */
  art: string;
};

/** 이름 두 조각 사이에 들어가는 것. 띄어쓰기 아니면 아무것도 아니다. */
export function nameSep(lang: Lang): string {
  return SPACED.includes(lang) ? ' ' : '';
}

/** 두 조각을 이어 붙인 게임 이름. 대문 목록과 페이지 제목에 쓴다. */
export function fullName(g: Game, lang: Lang): string {
  const [a, b] = g.name[lang];
  return a + nameSep(lang);
}

export const GAMES: Game[] = [
  {
    slug: 'hoppy-jump',
    kind: 'quick',
    name: {
      en: ['Hoppy', 'Jump'],
      ko: ['폴짝', '점프'],
      ja: ['ぴょん', 'ジャンプ'],
      es: ['Salta', 'Alto'],
      fr: ['Saute', 'Haut'],
      zh: ['蹦蹦', '跳跳'],
    },
    desc: {
      en: 'Bounce from platform to platform. You only need to steer.',
      ko: '자동으로 뛰는 캐릭터를 좌우로 움직여 발판을 계속 밟아보세요.',
      ja: '自動で跳ねるキャラクターを左右に動かして、足場を登ろう。',
      es: 'Salta de plataforma en plataforma. Tú solo controlas izquierda y derecha.',
      fr: 'Saute de plateforme en plateforme. Tu n’as qu’à gérer la gauche et la droite.',
      zh: '角色会自动跳跃，你只要控制左右，一路踩着平台往上。',
    },
    art: `<svg viewBox="0 0 60 60" aria-hidden="true"><rect width="60" height="60" fill="#BFE8FF"/>
      <circle cx="14" cy="12" r="2" fill="#fff"/><circle cx="46" cy="20" r="2.2" fill="#fff"/>
      <rect x="8" y="44" width="26" height="7" rx="3.5" fill="#7FD8C8" stroke="#2A3145" stroke-width="2.6"/>
      <rect x="33" y="30" width="21" height="6" rx="3" fill="#7FB8FF" stroke="#2A3145" stroke-width="2.4"/>
      <ellipse cx="21" cy="33" rx="8" ry="8.6" fill="#FFF7EA" stroke="#2A3145" stroke-width="2.6"/>
      <rect x="15" y="19" width="4" height="8" rx="2" fill="#FFF7EA" stroke="#2A3145" stroke-width="2.2"/>
      <rect x="23" y="19" width="4" height="8" rx="2" fill="#FFF7EA" stroke="#2A3145" stroke-width="2.2"/>
      <circle cx="18.4" cy="32" r="1.5" fill="#2A3145"/><circle cx="23.6" cy="32" r="1.5" fill="#2A3145"/></svg>`,
  },
  {
    slug: 'zoom-drive',
    kind: 'quick',
    name: {
      en: ['Zoom', 'Drive'],
      ko: ['붕붕', '드라이브'],
      ja: ['ブンブン', 'ドライブ'],
      es: ['Ruta', 'Rápida'],
      fr: ['Course', 'Éclair'],
      zh: ['嗡嗡', '兜风'],
    },
    desc: {
      en: 'Dodge oncoming traffic and collect coins along the way.',
      ko: '마주 오는 차를 피하면서 길에 있는 동전을 모아보세요.',
      ja: '対向車をよけながら、道に並ぶコインを集めよう。',
      es: 'Esquiva el tráfico que viene de frente y recoge monedas por el camino.',
      fr: 'Évite les voitures qui arrivent en face et ramasse les pièces sur la route.',
      zh: '躲开迎面而来的车辆，顺路收集金币。',
    },
    art: `<svg viewBox="0 0 60 60" aria-hidden="true"><rect width="60" height="60" fill="#8FD9A8"/>
      <rect x="12" y="0" width="36" height="60" fill="#59637A"/>
      <rect x="28.5" y="4" width="3" height="9" rx="1.5" fill="#FFF1C1"/>
      <rect x="28.5" y="20" width="3" height="9" rx="1.5" fill="#FFF1C1"/>
      <rect x="28.5" y="36" width="3" height="9" rx="1.5" fill="#FFF1C1"/>
      <circle cx="19" cy="16" r="5" fill="#FFD23F" stroke="#2A3145" stroke-width="2.4"/>
      <rect x="24" y="34" width="16" height="21" rx="5" fill="#FF7A6B" stroke="#2A3145" stroke-width="2.8"/>
      <rect x="27" y="38" width="10" height="7" rx="2.5" fill="#BFE8FF" stroke="#2A3145" stroke-width="2"/></svg>`,
  },
  {
    slug: 'merge-fruit',
    kind: 'stack',
    name: {
      en: ['Merge', 'Fruit'],
      ko: ['몽글', '과일'],
      ja: ['もぐもぐ', 'フルーツ'],
      es: ['Fusión', 'Frutal'],
      fr: ['Fruits', 'Fusion'],
      zh: ['圆滚', '水果'],
    },
    desc: {
      en: 'Drop fruit into the jar. Matching fruits merge into something bigger.',
      ko: '과일을 떨어뜨리고 같은 과일끼리 합쳐 더 크게 만들어보세요.',
      ja: 'フルーツを落として、同じもの同士を合体させて大きくしよう。',
      es: 'Deja caer la fruta. Dos frutas iguales se fusionan en una más grande.',
      fr: 'Fais tomber les fruits. Deux fruits identiques fusionnent en un plus gros.',
      zh: '放下水果，让两个相同的水果合成一个更大的。',
    },
    art: `<svg viewBox="0 0 60 60" aria-hidden="true"><rect width="60" height="60" fill="#FFE8D2"/>
      <path d="M11 12 V44 a6 6 0 0 0 6 6 h26 a6 6 0 0 0 6 -6 V12" fill="#FFFBF2" stroke="#2A3145" stroke-width="3" stroke-linecap="round"/>
      <circle cx="22" cy="38" r="10" fill="#FF9F45" stroke="#2A3145" stroke-width="2.6"/>
      <circle cx="39" cy="41" r="7" fill="#9B7FE0" stroke="#2A3145" stroke-width="2.4"/>
      <circle cx="38" cy="26" r="5" fill="#8FD14F" stroke="#2A3145" stroke-width="2.2"/>
      <circle cx="19" cy="36" r="1.5" fill="#2A3145"/><circle cx="25" cy="36" r="1.5" fill="#2A3145"/></svg>`,
  },
  {
    slug: 'zippy-plane',
    kind: 'quick',
    name: {
      en: ['Zippy', 'Plane'],
      ko: ['슝슝', '비행기'],
      ja: ['シュン', 'ひこうき'],
      es: ['Avión', 'Veloz'],
      fr: ['Avion', 'Express'],
      zh: ['咻咻', '飞机'],
    },
    desc: {
      en: 'Your weapons fire automatically. Dodge bullets and line up your shots.',
      ko: '총은 자동으로 나가요. 적 총알을 피하면서 위치만 맞춰주세요.',
      ja: '攻撃は自動。敵弾をよけながら、敵と位置を合わせよう。',
      es: 'El arma dispara sola. Esquiva las balas y colócate frente a los enemigos.',
      fr: 'Le tir est automatique. Esquive les balles et aligne-toi sur les ennemis.',
      zh: '武器会自动开火，你只要躲开子弹并对准敌人。',
    },
    art: `<svg viewBox="0 0 60 60" aria-hidden="true"><rect width="60" height="60" fill="#2E3460"/>
      <circle cx="12" cy="12" r="1.6" fill="#FFF7EA"/><circle cx="46" cy="9" r="1.3" fill="#FFF7EA"/>
      <circle cx="50" cy="34" r="1.6" fill="#FFF7EA"/><circle cx="10" cy="40" r="1.3" fill="#FFF7EA"/>
      <rect x="28.5" y="14" width="3" height="9" rx="1.5" fill="#FFE9A8"/>
      <path d="M13 45 L24 33 h12 l11 12 l-6 3 h-22 z" fill="#7FB8FF" stroke="#2A3145" stroke-width="2.6" stroke-linejoin="round"/>
      <path d="M30 24 q7 10 7 18 q-7 6 -14 0 q0 -8 7 -18 z" fill="#FFF7EA" stroke="#2A3145" stroke-width="2.6"/>
      <ellipse cx="30" cy="35" rx="3.2" ry="3.8" fill="#8FD3FF" stroke="#2A3145" stroke-width="2"/></svg>`,
  },
  {
    slug: 'pop-shot',
    kind: 'quick',
    name: {
      en: ['Pop', 'Shot'],
      ko: ['탕탕', '사격'],
      ja: ['パン', 'ショット'],
      es: ['Tiro', 'Certero'],
      fr: ['Tir', 'Précis'],
      zh: ['砰砰', '射击'],
    },
    desc: {
      en: 'Enemies close in from every direction. Aim and hold to keep firing.',
      ko: '사방에서 적이 몰려와요. 방향을 겨누고 누르고 있으면 계속 발사됩니다.',
      ja: '四方から敵が迫ってくる。方向を狙って押し続けると連射。',
      es: 'Los enemigos llegan de todas partes. Apunta y mantén pulsado para seguir disparando.',
      fr: 'Les ennemis arrivent de tous les côtés. Vise et maintiens appuyé pour tirer en continu.',
      zh: '敌人从四面八方逼近。瞄准方向，按住就会连续开火。',
    },
    art: `<svg viewBox="0 0 60 60" aria-hidden="true"><rect width="60" height="60" fill="#FFF1DC"/>
      <circle cx="30" cy="30" r="19" fill="none" stroke="#F0D9C0" stroke-width="2.4"/>
      <circle cx="11" cy="13" r="6" fill="#5D5FEF" stroke="#2A3145" stroke-width="2.4"/>
      <circle cx="49" cy="17" r="4.6" fill="#FF7A6B" stroke="#2A3145" stroke-width="2.2"/>
      <circle cx="47" cy="47" r="5.2" fill="#7FD8C8" stroke="#2A3145" stroke-width="2.2"/>
      <circle cx="30" cy="34" r="9" fill="#FFF7EA" stroke="#2A3145" stroke-width="2.8"/>
      <rect x="27" y="17" width="6" height="10" rx="3" fill="#FFD23F" stroke="#2A3145" stroke-width="2.4"/>
      <circle cx="27" cy="33" r="1.5" fill="#2A3145"/><circle cx="33" cy="33" r="1.5" fill="#2A3145"/></svg>`,
  },
  {
    slug: 'chain-dots',
    kind: 'think',
    name: {
      en: ['Chain', 'Dots'],
      ko: ['쭉쭉', '구슬'],
      ja: ['つなぐ', 'ビーズ'],
      es: ['Enlaza', 'Bolitas'],
      fr: ['Relie', 'les Perles'],
      zh: ['连连', '珠子'],
    },
    desc: {
      en: 'Link matching beads. Close a loop to clear every bead of that colour.',
      ko: '같은 색 구슬을 길게 이어요. 고리를 만들면 그 색 구슬이 전부 사라져요.',
      ja: '同じ色のビーズをつなごう。輪を作ると、その色が全部消える。',
      es: 'Une bolitas del mismo color. Cierra un bucle para eliminar todo ese color.',
      fr: 'Relie les perles de même couleur. Ferme une boucle pour effacer toute cette couleur.',
      zh: '把同色珠子连起来。围成一圈，就能消掉这个颜色的所有珠子。',
    },
    art: `<svg viewBox="0 0 60 60" aria-hidden="true"><rect width="60" height="60" fill="#2F3B4A"/>
      <path d="M16 18 L44 18 L44 42 L16 42 Z" fill="none" stroke="#3BAF8F" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="16" cy="18" r="6" fill="#3BAF8F" stroke="#2A3145" stroke-width="2.4"/>
      <circle cx="44" cy="18" r="6" fill="#3BAF8F" stroke="#2A3145" stroke-width="2.4"/>
      <circle cx="44" cy="42" r="6" fill="#3BAF8F" stroke="#2A3145" stroke-width="2.4"/>
      <circle cx="16" cy="42" r="6" fill="#3BAF8F" stroke="#2A3145" stroke-width="2.4"/>
      <circle cx="30" cy="30" r="4.6" fill="#FFD23F" stroke="#2A3145" stroke-width="2.2"/>
      <circle cx="9" cy="30" r="3.6" fill="#FF7A6B" stroke="#2A3145" stroke-width="2"/>
      <circle cx="51" cy="30" r="3.6" fill="#C58BE8" stroke="#2A3145" stroke-width="2"/></svg>`,
  },
];

/** 주소 조각으로 게임을 찾는다. 없으면 undefined. */
export function findGame(slug: string): Game | undefined {
  return GAMES.find((g) => g.slug === slug);
}

/**
 * 「비슷한 게임」 고르기.
 *
 * 두 가지를 같이 만족시켜야 한다 —
 *   1. 되도록 같은 갈래를 보여준다
 *   2. **모든 게임이 링크를 받는다.** 앞쪽 게임만 뽑히면 안 된다
 *
 * 그래서 자기 **다음 차례부터 둥글게** 돌면서 고른다.
 * 첫 칸은 같은 갈래, 남은 칸은 둥글게 다음 것으로 채운다.
 * 무작위를 쓰지 않는다 — 빌드할 때마다 같은 것이 나와야 한다.
 */
export function related(g: Game, n = 2): Game[] {
  const i = GAMES.findIndex((x) => x.slug === g.slug);
  /* 자기 다음부터 둥글게. 자기 자신은 안 들어간다 */
  const rot = [...GAMES.slice(i + 1), ...GAMES.slice(0, i)];

  const picked: Game[] = [];

  /* 첫 칸 — 같은 갈래 중 둥글게 첫 번째. 같은 갈래가 없으면 건너뛴다 */
  const same = rot.find((x) => x.kind === g.kind);
  if (same) picked.push(same);

  /* 남은 칸 — 둥글게 돌면서 아직 안 고른 것으로 채운다 */
  for (const x of rot) {
    if (picked.length >= n) break;
    if (!picked.includes(x)) picked.push(x);
  }

  return picked.slice(0, n);
}
