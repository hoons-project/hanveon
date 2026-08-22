// 쭉쭉 구슬 안에서 쓰는 글.
// 게임 이름은 여기 없다 — `src/data/games.ts` 에 있다.

import type { Lang } from '../../i18n';

export type S = {
  tagline: string;
  score: string;
  moves: string;
  best: string;
  cleared: string;
  readyTitle: string;
  readyBody: string;
  legend1: string;
  legend2: string;
  legend3: string;
  start: string;
  overTitle: string;
  retry: string;
  paused: string;
  pausedHint: string;
  resume: string;
  help: string;
  /** 캔버스에 뜨는 점수 — `{n}` 자리에 숫자 */
  gain: string;
  /** 고리를 만들었을 때 캔버스 위에 뜨는 글 */
  loopTag: string;
};

export const STR: Record<Lang, S> = {
  en: {
    tagline: 'Link the beads, clear the colour.',
    score: 'Score', moves: 'Moves', best: 'Best', cleared: 'Beads',
    readyTitle: 'Link Them Up',
    readyBody: 'Drag across beads of the same colour.<br>Clear as many as you can before the moves run out.',
    legend1: 'Drag across the same colour',
    legend2: 'Three or more to pop',
    legend3: 'Close a loop: the whole colour goes',
    start: 'Start',
    overTitle: 'Out of moves!',
    retry: 'Play Again',
    paused: 'Paused',
    pausedHint: 'Press P again to keep going.',
    resume: 'Resume',
    help: 'Press and drag across the beads, let go to pop<br>← ↑ → ↓ move · Space link · Enter let go · P pause',
    gain: '+{n}',
    loopTag: 'Whole colour!',
  },
  ko: {
    tagline: '같은 색 구슬을 이어 지워요',
    score: '점수', moves: '남은 수', best: '최고', cleared: '지운 구슬',
    readyTitle: '쭉쭉 이어요',
    readyBody: '같은 색 구슬을 손가락으로 쭉 이어요.<br>남은 수가 다 떨어지기 전에 많이 지워요.',
    legend1: '같은 색을 이어 긋기',
    legend2: '세 개 이상이어야 사라져요',
    legend3: '고리를 만들면 그 색 전부',
    start: '시작',
    overTitle: '수를 다 썼다!',
    retry: '다시 하기',
    paused: '잠깐 멈춤',
    pausedHint: 'P 키를 다시 누르면 이어서 해요.',
    resume: '이어 하기',
    help: '구슬을 누른 채로 쭉 긋고, 떼면 사라져요<br>← ↑ → ↓ 옮기기 · 스페이스 잇기 · 엔터 놓기 · P 멈춤',
    gain: '+{n}',
    loopTag: '그 색 전부!',
  },
  ja: {
    tagline: '同じ色のビーズをつないで消そう',
    score: 'スコア', moves: '残り', best: 'ベスト', cleared: '消した数',
    readyTitle: 'つないで消そう',
    readyBody: '同じ色のビーズをなぞってね。<br>手が尽きる前にたくさん消そう。',
    legend1: '同じ色をなぞる',
    legend2: '3つ以上で消える',
    legend3: '輪を作るとその色が全部',
    start: 'スタート',
    overTitle: '手がなくなった！',
    retry: 'もう一度',
    paused: '一時停止',
    pausedHint: 'Pキーをもう一度押すと続きます。',
    resume: 'つづける',
    help: 'ビーズを押したままなぞって、離すと消える<br>← ↑ → ↓ 移動 · スペースでつなぐ · Enterで離す · Pで一時停止',
    gain: '+{n}',
    loopTag: '全部消える！',
  },
  es: {
    tagline: 'Enlaza bolitas del mismo color.',
    score: 'Puntos', moves: 'Turnos', best: 'Récord', cleared: 'Bolitas',
    readyTitle: '¡A enlazar!',
    readyBody: 'Arrastra por bolitas del mismo color.<br>Borra todas las que puedas antes de quedarte sin turnos.',
    legend1: 'Arrastra por el mismo color',
    legend2: 'Tres o más para que estallen',
    legend3: 'Cierra un lazo y el color entero se va',
    start: 'Empezar',
    overTitle: '¡Sin turnos!',
    retry: 'Otra vez',
    paused: 'En pausa',
    pausedHint: 'Pulsa P otra vez para seguir.',
    resume: 'Continuar',
    help: 'Mantén pulsado y arrastra, suelta para estallar<br>← ↑ → ↓ mover · Espacio enlazar · Enter soltar · P pausa',
    gain: '+{n}',
    loopTag: '¡Color entero!',
  },
  fr: {
    tagline: 'Relie les perles de même couleur.',
    score: 'Score', moves: 'Coups', best: 'Record', cleared: 'Perles',
    readyTitle: 'Relie-les !',
    readyBody: 'Glisse le doigt sur les perles de même couleur.<br>Efface-en le plus possible avant la fin des coups.',
    legend1: 'Glisse sur la même couleur',
    legend2: 'Trois perles ou plus pour éclater',
    legend3: 'Une boucle fermée efface la couleur',
    start: 'Commencer',
    overTitle: 'Plus de coups !',
    retry: 'Rejouer',
    paused: 'En pause',
    pausedHint: 'Appuie encore sur P pour continuer.',
    resume: 'Reprendre',
    help: 'Appuie et glisse sur les perles, relâche pour éclater<br>← ↑ → ↓ déplacer · Espace relier · Entrée relâcher · P pause',
    gain: '+{n}',
    loopTag: 'Toute la couleur !',
  },
  zh: {
    tagline: '把同色珠子连起来消掉',
    score: '分数', moves: '剩余', best: '最高', cleared: '消除数',
    readyTitle: '连起来消掉',
    readyBody: '按住手指划过同色的珠子。<br>在次数用完前尽量多消一些。',
    legend1: '划过同一个颜色',
    legend2: '三个以上才会消失',
    legend3: '围成一圈，那个颜色全消',
    start: '开始',
    overTitle: '次数用完了！',
    retry: '再玩一次',
    paused: '暂停',
    pausedHint: '再按一次 P 继续。',
    resume: '继续',
    help: '按住珠子划过去，松开就消掉<br>← ↑ → ↓ 移动 · 空格连接 · 回车松开 · P 暂停',
    gain: '+{n}',
    loopTag: '整色全消！',
  },
};
