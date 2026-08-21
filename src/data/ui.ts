// ─────────────────────────────────────────────────────────────
//  대문에 쓰는 글. 게임 이름과 설명은 games.ts 에 있다.
//
//  브랜드 이름 Hanveon 은 여기 없다 — 나라말마다 바꾸지 않고
//  어디서나 그대로 쓴다. 설명글만 바꾼다.
// ─────────────────────────────────────────────────────────────

import type { Lang } from './games';

export type UiKey = 'tagline' | 'footer' | 'play';

export const UI: Record<Lang, Record<UiKey, string>> = {
  en: {
    tagline: 'Tiny games. Nothing to install.',
    footer: 'Works on phones too. Your best scores stay on this device.',
    play: 'Play',
  },
  ko: {
    tagline: '한번 해볼까? 받을 것도 없어요.',
    footer: '폰에서도 됩니다. 최고 기록은 이 기기에만 남아요.',
    play: '하기',
  },
  ja: {
    tagline: '小さなゲーム。インストール不要。',
    footer: 'スマホでも遊べます。ベスト記録はこの端末に残ります。',
    play: 'あそぶ',
  },
  es: {
    tagline: 'Juegos pequeños. Nada que instalar.',
    footer: 'También funciona en el móvil. Tus récords se guardan en este dispositivo.',
    play: 'Jugar',
  },
  fr: {
    tagline: 'Petits jeux. Rien à installer.',
    footer: 'Fonctionne aussi sur mobile. Tes records restent sur cet appareil.',
    play: 'Jouer',
  },
  zh: {
    tagline: '小游戏，无需安装。',
    footer: '手机上也能玩。最高分只保存在这台设备上。',
    play: '开始玩',
  },
};

/** 검색엔진이 읽는 한 줄 설명. 지금은 영어 하나만 쓴다 (단계 2에서 나라말별로 나눈다). */
export const SITE_DESCRIPTION =
  'Tiny browser games. No install, no sign-up — just open and play.';
