// 폴짝 점프 안에서 쓰는 글.
// 게임 이름은 여기 없다 — `src/data/games.ts` 에 있다.

import type { Lang } from '../../i18n';

export type S = {
  tagline: string;
  height: string;
  star: string;
  best: string;
  readyTitle: string;
  readyBody: string;
  legend1: string;
  legend2: string;
  legend3: string;
  legend4: string;
  start: string;
  overTitle: string;
  retry: string;
  paused: string;
  pausedHint: string;
  resume: string;
  padLeft: string;
  padRight: string;
  help: string;
  whoosh: string;
  starPop: string;
};

export const STR: Record<Lang, S> = {
  en: {
    tagline: 'Hop up the platforms.',
    height: 'Height', star: 'Stars', best: 'Best',
    readyTitle: 'Up, Up!',
    readyBody: 'It hops all on its own.<br>Just steer left and right.',
    legend1: 'A normal platform',
    legend2: 'Moves side to side',
    legend3: 'Breaks after one hop',
    legend4: 'Spring — jumps super high',
    start: 'Start',
    overTitle: 'You fell!',
    retry: 'Play Again',
    paused: 'Paused',
    pausedHint: 'Press P again to keep going.',
    resume: 'Resume',
    padLeft: 'Left', padRight: 'Right',
    help: 'Hold ← → · Tap left or right on screen · P to pause',
    whoosh: 'Whee!',
    starPop: '+{n}',
  },
  ko: {
    tagline: '발판 밟고 높이 올라가기',
    height: '높이', star: '별', best: '최고',
    readyTitle: '위로 위로',
    readyBody: '알아서 폴짝폴짝 뛰어요.<br>왼쪽 오른쪽만 맞춰 주면 돼요.',
    legend1: '그냥 발판',
    legend2: '옆으로 움직여요',
    legend3: '한 번 밟으면 부서져요',
    legend4: '용수철 — 아주 높이 뛰어요',
    start: '시작',
    overTitle: '떨어졌다!',
    retry: '다시 하기',
    paused: '잠깐 멈춤',
    pausedHint: 'P 키를 다시 누르면 이어서 해요.',
    resume: '이어 하기',
    padLeft: '왼쪽으로', padRight: '오른쪽으로',
    help: '← → 키 누르고 있기 · 화면 왼쪽 오른쪽 누르기 · P 키로 멈춤',
    whoosh: '슝!',
    starPop: '+{n}',
  },
  ja: {
    tagline: '足場を踏んで高く登ろう',
    height: '高さ', star: '星', best: 'ベスト',
    readyTitle: '上へ上へ',
    readyBody: '自然にぴょんぴょん跳ねます。<br>左右を合わせるだけ。',
    legend1: 'ふつうの足場',
    legend2: '横に動きます',
    legend3: '一度踏むと壊れます',
    legend4: 'バネ — とても高く跳ねます',
    start: 'スタート',
    overTitle: '落ちちゃった！',
    retry: 'もう一度',
    paused: '一時停止',
    pausedHint: 'Pキーをもう一度押すと続きます。',
    resume: 'つづける',
    padLeft: '左へ', padRight: '右へ',
    help: '← → キーを押し続ける · 画面の左右をタップ · Pで一時停止',
    whoosh: 'びゅーん！',
    starPop: '+{n}',
  },
  es: {
    tagline: 'Sube saltando plataformas.',
    height: 'Altura', star: 'Estrella', best: 'Récord',
    readyTitle: '¡Arriba, arriba!',
    readyBody: 'Salta solito todo el rato.<br>Solo muévete a los lados.',
    legend1: 'Plataforma normal',
    legend2: 'Se mueve de lado a lado',
    legend3: 'Se rompe al pisarla',
    legend4: 'Resorte: salta muy alto',
    start: 'Empezar',
    overTitle: '¡Te caíste!',
    retry: 'Otra vez',
    paused: 'En pausa',
    pausedHint: 'Pulsa P otra vez para seguir.',
    resume: 'Continuar',
    padLeft: 'Izquierda', padRight: 'Derecha',
    help: 'Mantén ← → · Toca a los lados de la pantalla · P para pausar',
    whoosh: '¡Uuuy!',
    starPop: '+{n}',
  },
  fr: {
    tagline: 'Grimpe de plateforme en plateforme.',
    height: 'Hauteur', star: 'Étoiles', best: 'Record',
    readyTitle: 'Plus haut !',
    readyBody: 'Il saute tout seul.<br>Juste gauche et droite.',
    legend1: 'Plateforme normale',
    legend2: "Bouge d'un côté à l'autre",
    legend3: 'Se casse après un saut',
    legend4: 'Ressort : saut très haut',
    start: 'Commencer',
    overTitle: 'Tu es tombé !',
    retry: 'Rejouer',
    paused: 'En pause',
    pausedHint: 'Appuie encore sur P pour continuer.',
    resume: 'Reprendre',
    padLeft: 'Gauche', padRight: 'Droite',
    help: "Maintiens ← → · Touche l'écran à gauche ou à droite · P pour pause",
    whoosh: 'Woosh !',
    starPop: '+{n}',
  },
  zh: {
    tagline: '踩着踏板往上跳。',
    height: '高度', star: '星', best: '最高',
    readyTitle: '往上，往上！',
    readyBody: '会自己蹦蹦跳跳。<br>只要控制左右方向。',
    legend1: '普通踏板',
    legend2: '会左右移动',
    legend3: '踩一次就会碎',
    legend4: '弹簧——跳得超高',
    start: '开始',
    overTitle: '掉下去了！',
    retry: '再玩一次',
    paused: '暂停',
    pausedHint: '再按一次 P 继续。',
    resume: '继续',
    padLeft: '向左', padRight: '向右',
    help: '按住 ← → · 点屏幕左右两边 · 按 P 暂停',
    whoosh: '嗖！',
    starPop: '+{n}',
  },
};
