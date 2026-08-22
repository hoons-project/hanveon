// ─────────────────────────────────────────────────────────────
//  사이트 전체에 쓰는 글. 게임 안의 글은 각 게임 폴더의 strings.ts 에 있다.
//
//  브랜드 이름 Hanveon 은 여기 없다 — 나라말마다 바꾸지 않고 어디서나 그대로 쓴다.
// ─────────────────────────────────────────────────────────────

import type { Lang } from './index';

export type UiKey =
  | 'tagline'      // 이름 밑 한 줄
  | 'more'         // 게임이 계속 늘어난다는 한 줄
  | 'footer'       // 목록 아래 안내
  | 'play'         // 목록의 단추
  | 'allGames'     // 게임에서 목록으로 돌아가는 링크
  | 'langLabel'    // 나라말 고르는 칸의 이름 (화면에 안 보이고 읽어주는 장치가 읽는다)
  | 'metaDesc';    // 검색 결과에 나오는 설명

export const UI: Record<Lang, Record<UiKey, string>> = {
  en: {
    tagline: 'Tiny games. Nothing to install.',
    more: 'New games are added regularly.',
    footer: 'Works on phones too. Your best scores stay on this device.',
    play: 'Play',
    allGames: 'All games',
    langLabel: 'Language',
    metaDesc: 'Tiny browser games. No install, no sign-up — just open and play. New games added regularly.',
  },
  ko: {
    tagline: '한번 해볼까? 받을 것도 없어요.',
    more: '게임은 계속 늘어나요.',
    footer: '폰에서도 됩니다. 최고 기록은 이 기기에만 남아요.',
    play: '하기',
    allGames: '게임 목록',
    langLabel: '언어',
    metaDesc: '설치도 가입도 없이 바로 하는 작은 게임들. 게임은 계속 늘어나요.',
  },
  ja: {
    tagline: '小さなゲーム。インストール不要。',
    more: 'ゲームは少しずつ増えていきます。',
    footer: 'スマホでも遊べます。ベスト記録はこの端末に残ります。',
    play: 'あそぶ',
    allGames: 'ゲーム一覧',
    langLabel: '言語',
    metaDesc: 'インストールも登録もいらない小さなブラウザゲーム。ゲームは少しずつ増えていきます。',
  },
  es: {
    tagline: 'Juegos pequeños. Nada que instalar.',
    more: 'Añadimos juegos nuevos cada poco.',
    footer: 'También funciona en el móvil. Tus récords se guardan en este dispositivo.',
    play: 'Jugar',
    allGames: 'Todos los juegos',
    langLabel: 'Idioma',
    metaDesc: 'Juegos pequeños para el navegador. Sin instalar, sin registro. Añadimos juegos nuevos cada poco.',
  },
  fr: {
    tagline: 'Petits jeux. Rien à installer.',
    more: 'De nouveaux jeux arrivent régulièrement.',
    footer: 'Fonctionne aussi sur mobile. Tes records restent sur cet appareil.',
    play: 'Jouer',
    allGames: 'Tous les jeux',
    langLabel: 'Langue',
    metaDesc: 'Petits jeux à jouer dans le navigateur. Rien à installer, pas de compte. De nouveaux jeux arrivent régulièrement.',
  },
  zh: {
    tagline: '小游戏，无需安装。',
    more: '新游戏会不断加入。',
    footer: '手机上也能玩。最高分只保存在这台设备上。',
    play: '开始玩',
    allGames: '全部游戏',
    langLabel: '语言',
    metaDesc: '打开就能玩的小游戏，无需安装、无需注册。新游戏会不断加入。',
  },
};

export function ui(lang: Lang): Record<UiKey, string> {
  return UI[lang] ?? UI.en;
}
