// ─────────────────────────────────────────────────────────────
//  게임 목록 — 여기 한 곳만 고치면 대문·사이트맵이 따라온다.
//  새 게임 넣는 차례는 design/new-game-checklist.md 를 따른다.
// ─────────────────────────────────────────────────────────────

export const LANGS = ['en', 'ko', 'ja', 'es', 'fr', 'zh'] as const;
export type Lang = (typeof LANGS)[number];

export const LANG_NAME: Record<Lang, string> = {
  en: 'English',
  ko: '한국어',
  ja: '日本語',
  es: 'Español',
  fr: 'Français',
  zh: '中文',
};

export type Game = {
  /** 주소에 쓰는 이름. 게임은 /play/<slug>/ 에 놓인다. */
  slug: string;
  /** 나라말별 게임 이름. 두 낱말이면 띄어쓰기로 붙여 쓴다. */
  name: Record<Lang, string>;
  /** 목록에 보이는 한 줄 설명. */
  desc: Record<Lang, string>;
  /** 목록 그림. 66×66 안에 들어가는 SVG. */
  art: string;
};

export const GAMES: Game[] = [
  {
    slug: 'hoppy-jump',
    name: {
      en: 'Hoppy Jump',
      ko: '폴짝 점프',
      ja: 'ぴょんジャンプ',
      es: 'Salto Saltarín',
      fr: 'Saut Sautillant',
      zh: '蹦蹦跳跳',
    },
    desc: {
      en: 'Bounce up the platforms. Just steer left and right.',
      ko: '발판을 밟고 위로. 왼쪽 오른쪽만 맞춰 주면 돼요.',
      ja: '足場を踏んで上へ。左右を合わせるだけ。',
      es: 'Rebota por las plataformas. Solo muévete a los lados.',
      fr: 'Rebondis de plateforme en plateforme. Juste gauche-droite.',
      zh: '踩着踏板往上跳。只要控制左右。',
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
    name: {
      en: 'Zoom Drive',
      ko: '붕붕 드라이브',
      ja: 'ブンブンドライブ',
      es: 'Carrera Vroom',
      fr: 'Balade Vroum',
      zh: '嗡嗡兜风',
    },
    desc: {
      en: 'Dodge the traffic and grab the coins.',
      ko: '차 피하고 동전 줍기.',
      ja: '車をよけてコインを集めよう。',
      es: 'Esquiva los coches y recoge monedas.',
      fr: 'Évite les voitures et ramasse les pièces.',
      zh: '躲开车子，捡起金币。',
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
    name: {
      en: 'Merge Fruit',
      ko: '몽글 과일',
      ja: 'もぐもぐフルーツ',
      es: 'Fusión Frutal',
      fr: 'Fusion Fruitée',
      zh: '圆滚水果',
    },
    desc: {
      en: 'Drop fruit. Two of a kind become one bigger one.',
      ko: '과일을 떨어뜨려요. 같은 것끼리 닿으면 커져요.',
      ja: 'フルーツを落とす。同じもの同士がくっつくと大きくなる。',
      es: 'Suelta fruta. Dos iguales se juntan en una mayor.',
      fr: 'Fais tomber des fruits. Deux pareils fusionnent.',
      zh: '放下水果。相同的碰到一起就会变大。',
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
    name: {
      en: 'Zippy Plane',
      ko: '슝슝 비행기',
      ja: 'シュンひこうき',
      es: 'Avión Veloz',
      fr: 'Avion Filant',
      zh: '咻咻飞机',
    },
    desc: {
      en: 'It fires by itself. All you do is dodge.',
      ko: '총은 알아서 나가요. 피하기만 하면 돼요.',
      ja: '弾は勝手に出ます。よけるだけ。',
      es: 'Dispara solo. Tú solo esquiva.',
      fr: 'Il tire tout seul. Toi, tu esquives.',
      zh: '子弹会自己发射，你只要闪避。',
    },
    art: `<svg viewBox="0 0 60 60" aria-hidden="true"><rect width="60" height="60" fill="#2E3460"/>
      <circle cx="12" cy="12" r="1.6" fill="#FFF7EA"/><circle cx="46" cy="9" r="1.3" fill="#FFF7EA"/>
      <circle cx="50" cy="34" r="1.6" fill="#FFF7EA"/><circle cx="10" cy="40" r="1.3" fill="#FFF7EA"/>
      <rect x="28.5" y="14" width="3" height="9" rx="1.5" fill="#FFE9A8"/>
      <path d="M13 45 L24 33 h12 l11 12 l-6 3 h-22 z" fill="#7FB8FF" stroke="#2A3145" stroke-width="2.6" stroke-linejoin="round"/>
      <path d="M30 24 q7 10 7 18 q-7 6 -14 0 q0 -8 7 -18 z" fill="#FFF7EA" stroke="#2A3145" stroke-width="2.6"/>
      <ellipse cx="30" cy="35" rx="3.2" ry="3.8" fill="#8FD3FF" stroke="#2A3145" stroke-width="2"/></svg>`,
  },
];
