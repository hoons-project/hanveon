// ─────────────────────────────────────────────────────────────
//  사이트 전체에 쓰는 글. 게임 안의 글은 각 게임 폴더의 strings.ts 에 있다.
//
//  브랜드 이름 Hanveon 은 여기 없다 — 나라말마다 바꾸지 않고 어디서나 그대로 쓴다.
// ─────────────────────────────────────────────────────────────

import type { Lang } from './index';

export type UiKey =
  | 'tagline'      // 이름 밑 한 줄
  | 'footer'       // 목록 아래 안내
  | 'play'         // 목록의 단추
  | 'allGames'     // 게임에서 목록으로 돌아가는 링크
  | 'langLabel'    // 나라말 고르는 칸의 이름 (화면에 안 보이고 읽어주는 장치가 읽는다)
  | 'metaDesc'     // 대문이 검색 결과에 나올 때의 설명
  | 'homeTitle'    // 대문의 창 제목. 검색 결과의 파란 줄이 된다
  | 'gameTitle'    // 게임 쪽 창 제목 틀. `{name}` 자리에 게임 이름이 들어간다
  | 'gameDescTail' // 게임 설명 뒤에 붙이는 한 마디. 검색 결과 설명을 길게 만든다
  | 'freeTag'      // 대표 그림 귀퉁이에 넣는 짧은 말
  | 'aboutTitle'   // 게임 쪽 읽을 글 — 소개
  | 'howTitle'     // 게임 쪽 읽을 글 — 어떻게 하나
  | 'tipsTitle'    // 게임 쪽 읽을 글 — 요령
  | 'menuLabel'    // 햄버거 단추의 이름 (읽어주는 장치가 읽는다)
  | 'menuGames'    // 목차 안 「게임」 머리말
  | 'moreLike'     // 게임 쪽 맨 아래 「비슷한 게임」
  | 'kindQuick'    // 갈래 이름 셋. 지금은 화면에 안 나오지만 미리 적어 둔다
  | 'kindThink'
  | 'kindStack'
  | 'updatedLabel' // 법적 쪽 맨 위 「마지막으로 고친 날」
  | 'menuMore'     // 목차의 두 번째 머리말 — 게임 아닌 쪽들
  | 'navAbout'     // 발쪽·목차의 링크 이름 다섯
  | 'navContact'
  | 'navPrivacy'
  | 'navCookies'
  | 'navTerms';

export const UI: Record<Lang, Record<UiKey, string>> = {
  en: {
    tagline: 'Tiny games. Nothing to install.',
    footer: 'Works on phones too. Your best scores stay on this device.',
    play: 'Play',
    allGames: 'All games',
    langLabel: 'Language',
    metaDesc: 'Tiny browser games with no install and no sign-up. Just open one and play. New games are added over time.',
    homeTitle: 'Hanveon — Free tiny browser games, no install',
    gameTitle: '{name} — Free online game | Hanveon',
    gameDescTail: 'Play free in your browser — no download, no sign-up.',
    freeTag: 'Free · No install',
    aboutTitle: 'About this game',
    howTitle: 'How to play',
    tipsTitle: 'Tips',
    menuLabel: 'Menu',
    menuGames: 'Games',
    moreLike: 'More like this',
    kindQuick: 'Quick reflexes',
    kindThink: 'Think a bit',
    kindStack: 'Stack & merge',
    updatedLabel: 'Last updated',
    menuMore: 'More',
    navAbout: 'About',
    navContact: 'Contact',
    navPrivacy: 'Privacy',
    navCookies: 'Cookies',
    navTerms: 'Terms',
  },
  ko: {
    tagline: '가볍게 한 판. 설치할 것도 없어요.',
    footer: '폰에서도 바로 됩니다. 최고 기록은 이 기기에만 저장돼요.',
    play: '게임하기',
    allGames: '게임 목록',
    langLabel: '언어',
    metaDesc: '설치도 가입도 없이 바로 즐기는 작은 브라우저 게임들. 페이지를 열고 바로 시작하세요. 게임은 계속 추가됩니다.',
    homeTitle: 'Hanveon — 설치 없이 바로 하는 작은 게임',
    gameTitle: '{name} — 무료 온라인 게임 | Hanveon',
    gameDescTail: '브라우저에서 무료로 바로 즐겨보세요. 설치도 가입도 필요 없습니다.',
    freeTag: '무료 · 설치 없음',
    aboutTitle: '게임 소개',
    howTitle: '게임 방법',
    tipsTitle: '플레이 팁',
    menuLabel: '메뉴',
    menuGames: '게임',
    moreLike: '비슷한 게임',
    kindQuick: '순발력 게임',
    kindThink: '생각하는 게임',
    kindStack: '쌓고 합치기',
    updatedLabel: '마지막 수정',
    menuMore: '더 보기',
    navAbout: '소개',
    navContact: '고객센터',
    navPrivacy: '개인정보',
    navCookies: '쿠키',
    navTerms: '이용 약관',
  },
  ja: {
    tagline: '小さなゲーム。インストール不要。',
    footer: 'スマホでもそのまま遊べます。ベスト記録はこの端末にだけ保存されます。',
    play: '遊ぶ',
    allGames: 'ゲーム一覧',
    langLabel: '言語',
    metaDesc: 'インストールも登録もいらない小さなブラウザゲーム。ページを開けばすぐ遊べます。ゲームは少しずつ追加していきます。',
    homeTitle: 'Hanveon — インストール不要のブラウザゲーム',
    gameTitle: '{name} — 無料オンラインゲーム | Hanveon',
    gameDescTail: 'ブラウザですぐ無料で遊べます。ダウンロードも登録も不要です。',
    freeTag: '無料 · インストール不要',
    aboutTitle: 'ゲーム紹介',
    howTitle: '遊び方',
    tipsTitle: 'コツ',
    menuLabel: 'メニュー',
    menuGames: 'ゲーム',
    moreLike: '似たゲーム',
    kindQuick: '反射神経',
    kindThink: 'じっくり考える',
    kindStack: '積んで合体',
    updatedLabel: '最終更新',
    menuMore: 'その他',
    navAbout: 'Hanveon について',
    navContact: 'お問い合わせ',
    navPrivacy: 'プライバシー',
    navCookies: 'クッキー',
    navTerms: '利用規約',
  },
  es: {
    tagline: 'Juegos pequeños. Sin instalar nada.',
    footer: 'También funcionan en el móvil. Tus récords se guardan solo en este dispositivo.',
    play: 'Jugar',
    allGames: 'Todos los juegos',
    langLabel: 'Idioma',
    metaDesc: 'Juegos pequeños para el navegador, sin instalaciones ni registro. Abre uno y empieza a jugar. Vamos añadiendo juegos nuevos.',
    homeTitle: 'Hanveon — Juegos de navegador gratis, sin instalar',
    gameTitle: '{name} — Juego online gratis | Hanveon',
    gameDescTail: 'Juega gratis en el navegador, sin descargas ni registro.',
    freeTag: 'Gratis · Sin instalar',
    aboutTitle: 'Sobre este juego',
    howTitle: 'Cómo jugar',
    tipsTitle: 'Consejos',
    menuLabel: 'Menú',
    menuGames: 'Juegos',
    moreLike: 'Juegos parecidos',
    kindQuick: 'Reflejos rápidos',
    kindThink: 'Para pensar',
    kindStack: 'Apilar y combinar',
    updatedLabel: 'Última actualización',
    menuMore: 'Más',
    navAbout: 'Sobre Hanveon',
    navContact: 'Contacto',
    navPrivacy: 'Privacidad',
    navCookies: 'Cookies',
    navTerms: 'Términos',
  },
  fr: {
    tagline: 'Petits jeux. Rien à installer.',
    footer: 'Ils fonctionnent aussi sur mobile. Tes records restent uniquement sur cet appareil.',
    play: 'Jouer',
    allGames: 'Tous les jeux',
    langLabel: 'Langue',
    metaDesc: 'De petits jeux à lancer dans le navigateur, sans installation ni compte. Ouvre un jeu et commence tout de suite. De nouveaux jeux sont ajoutés au fil du temps.',
    homeTitle: 'Hanveon — Petits jeux gratuits, sans installation',
    gameTitle: '{name} — Jeu en ligne gratuit | Hanveon',
    gameDescTail: 'Joue gratuitement dans ton navigateur, sans téléchargement ni inscription.',
    freeTag: 'Gratuit · Sans installation',
    aboutTitle: 'À propos du jeu',
    howTitle: 'Comment jouer',
    tipsTitle: 'Astuces',
    menuLabel: 'Menu',
    menuGames: 'Jeux',
    moreLike: 'Jeux similaires',
    kindQuick: 'Réflexes',
    kindThink: 'Réflexion',
    kindStack: 'Empiler et fusionner',
    updatedLabel: 'Dernière mise à jour',
    menuMore: 'Plus',
    navAbout: 'À propos',
    navContact: 'Contact',
    navPrivacy: 'Confidentialité',
    navCookies: 'Cookies',
    navTerms: 'Conditions',
  },
  zh: {
    tagline: '小游戏，无需安装。',
    footer: '手机上也能直接玩。最高分只保存在这台设备上。',
    play: '开始玩',
    allGames: '全部游戏',
    langLabel: '语言',
    metaDesc: '打开浏览器就能玩的小游戏，无需安装，也无需注册。点开就能开始，新游戏会陆续加入。',
    homeTitle: 'Hanveon — 免安装的浏览器小游戏',
    gameTitle: '{name} — 免费在线游戏 | Hanveon',
    gameDescTail: '打开浏览器就能免费玩，无需下载或注册。',
    freeTag: '免费 · 免安装',
    aboutTitle: '游戏介绍',
    howTitle: '怎么玩',
    tipsTitle: '小技巧',
    menuLabel: '菜单',
    menuGames: '游戏',
    moreLike: '类似游戏',
    kindQuick: '考反应',
    kindThink: '动脑筋',
    kindStack: '堆叠合成',
    updatedLabel: '最后更新',
    menuMore: '更多',
    navAbout: '关于 Hanveon',
    navContact: '联系',
    navPrivacy: '隐私',
    navCookies: 'Cookie',
    navTerms: '使用条款',
  },
};

export function ui(lang: Lang): Record<UiKey, string> {
  return UI[lang] ?? UI.en;
}
