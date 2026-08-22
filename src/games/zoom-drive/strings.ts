// 붕붕 드라이브 안에서 쓰는 글.
// 게임 이름은 여기 없다 — `src/data/games.ts` 에 있다.

import type { Lang } from '../../i18n';

export type S = {
  tagline: string;
  dist: string;
  coin: string;
  best: string;
  readyTitle: string;
  readyBody: string;
  start: string;
  overTitle: string;
  retry: string;
  paused: string;
  pausedHint: string;
  resume: string;
  padLeft: string;
  padRight: string;
  help: string;
  coinPop: string;
};

export const STR: Record<Lang, S> = {
  en: {
    tagline: 'Dodge cars, grab coins.',
    dist: 'Dist', coin: 'Coins', best: 'Best',
    readyTitle: 'Ready?',
    readyBody: 'Dodge the oncoming cars<br>and grab coins to score points.',
    start: 'Start',
    overTitle: 'Crash!',
    retry: 'Play Again',
    paused: 'Paused',
    pausedHint: 'Press P again to keep going.',
    resume: 'Resume',
    padLeft: 'Left', padRight: 'Right',
    help: 'Hold ← → · Tap left or right on screen · P to pause',
    coinPop: '+{n}',
  },
  ko: {
    tagline: '차 피하고 동전 줍기',
    dist: '거리', coin: '동전', best: '최고',
    readyTitle: '준비됐나요?',
    readyBody: '마주 오는 차를 피하고<br>동전을 주우면 점수가 올라가요.',
    start: '시작',
    overTitle: '쿵!',
    retry: '다시 하기',
    paused: '잠깐 멈춤',
    pausedHint: 'P 키를 다시 누르면 이어서 해요.',
    resume: '이어 하기',
    padLeft: '왼쪽으로', padRight: '오른쪽으로',
    help: '← → 키 · 화면 왼쪽 오른쪽 누르기 · P 키로 멈춤',
    coinPop: '+{n}',
  },
  ja: {
    tagline: '車をよけてコインを拾おう',
    dist: '距離', coin: 'コイン', best: 'ベスト',
    readyTitle: '準備はいい？',
    readyBody: '対向車をよけながら<br>コインを拾うとスコアが上がるよ。',
    start: 'スタート',
    overTitle: 'ガシャン！',
    retry: 'もう一度',
    paused: '一時停止',
    pausedHint: 'Pキーをもう一度押すと続きます。',
    resume: 'つづける',
    padLeft: '左へ', padRight: '右へ',
    help: '← → キーを押す · 画面の左右をタップ · Pで一時停止',
    coinPop: '+{n}',
  },
  es: {
    tagline: 'Esquiva coches y junta monedas.',
    dist: 'Dist.', coin: 'Monedas', best: 'Récord',
    readyTitle: '¿Listo?',
    readyBody: 'Esquiva los coches que vienen<br>y junta monedas para sumar puntos.',
    start: 'Empezar',
    overTitle: '¡Choque!',
    retry: 'Otra vez',
    paused: 'En pausa',
    pausedHint: 'Pulsa P otra vez para seguir.',
    resume: 'Continuar',
    padLeft: 'Izquierda', padRight: 'Derecha',
    help: 'Mantén ← → · Toca a los lados de la pantalla · P para pausar',
    coinPop: '+{n}',
  },
  fr: {
    tagline: 'Évite les voitures et ramasse les pièces.',
    dist: 'Dist.', coin: 'Pièces', best: 'Record',
    readyTitle: 'Prêt ?',
    readyBody: 'Évite les voitures en face<br>et ramasse des pièces pour marquer des points.',
    start: 'Commencer',
    overTitle: 'Crash !',
    retry: 'Rejouer',
    paused: 'En pause',
    pausedHint: 'Appuie encore sur P pour continuer.',
    resume: 'Reprendre',
    padLeft: 'Gauche', padRight: 'Droite',
    help: "Maintiens ← → · Touche l'écran à gauche ou à droite · P pour pause",
    coinPop: '+{n}',
  },
  zh: {
    tagline: '躲避汽车，收集金币',
    dist: '距离', coin: '金币', best: '最高',
    readyTitle: '准备好了吗？',
    readyBody: '躲开迎面而来的车<br>捡金币可以加分。',
    start: '开始',
    overTitle: '撞车了！',
    retry: '再玩一次',
    paused: '暂停',
    pausedHint: '再按一次 P 继续。',
    resume: '继续',
    padLeft: '向左', padRight: '向右',
    help: '按 ← → 键 · 点屏幕左右两边 · 按 P 暂停',
    coinPop: '+{n}',
  },
};
