// 탕탕 사격 안에서 쓰는 글.
// 게임 이름은 여기 없다 — `src/data/games.ts` 에 있다.

import type { Lang } from '../../i18n';

export type S = {
  tagline: string;
  score: string;
  life: string;
  best: string;
  wave: string;
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
  help: string;
  /** 캔버스에 뜨는 글 */
  gain: string;      // +{n}
  ouch: string;      // 맞았을 때
  lifeUp: string;    // 금색을 잡았을 때
  waveUp: string;    // 물결이 올라갈 때
};

export const STR: Record<Lang, S> = {
  en: {
    tagline: 'They come from every side.',
    score: 'Score', life: 'Life', best: 'Best', wave: 'Wave',
    readyTitle: 'Hold On!',
    readyBody: 'Point where you want to shoot.<br>Hold down and it keeps firing.',
    legend1: 'A plain one — walks in',
    legend2: 'Small and quick',
    legend3: 'Tough — takes three hits',
    legend4: 'Gold — gives a life back',
    start: 'Start',
    overTitle: 'They got you!',
    retry: 'Play Again',
    paused: 'Paused',
    pausedHint: 'Press P again to keep going.',
    resume: 'Resume',
    help: 'Hold and aim with mouse or finger<br>← → to turn · Space to fire · P to pause',
    gain: '+{n}',
    ouch: 'Ouch!',
    lifeUp: '+1 life',
    waveUp: 'Wave {n}',
  },
  ko: {
    tagline: '사방에서 몰려와요',
    score: '점수', life: '목숨', best: '최고', wave: '물결',
    readyTitle: '버텨요!',
    readyBody: '쏘고 싶은 쪽을 가리켜요.<br>누르고 있으면 계속 나가요.',
    legend1: '그냥 걸어와요',
    legend2: '작고 빨라요',
    legend3: '튼튼해요 — 세 번 맞혀야 해요',
    legend4: '금색 — 목숨을 하나 돌려줘요',
    start: '시작',
    overTitle: '붙잡혔다!',
    retry: '다시 하기',
    paused: '잠깐 멈춤',
    pausedHint: 'P 키를 다시 누르면 이어서 해요.',
    resume: '이어 하기',
    help: '마우스나 손가락으로 누른 채 겨눠요<br>← → 로 돌리기 · 스페이스로 쏘기 · P 로 멈춤',
    gain: '+{n}',
    ouch: '아야!',
    lifeUp: '목숨 +1',
    waveUp: '물결 {n}',
  },
  ja: {
    tagline: '四方から来ます。',
    score: 'スコア', life: 'ライフ', best: 'ベスト', wave: 'ウェーブ',
    readyTitle: 'もちこたえて！',
    readyBody: '撃ちたい方をさします。<br>押しっぱなしで撃ち続けます。',
    legend1: 'ふつう — 歩いてきます',
    legend2: '小さくて速い',
    legend3: 'かたい — 三回当てる',
    legend4: '金 — ライフが一つ戻る',
    start: 'スタート',
    overTitle: 'つかまった！',
    retry: 'もう一度',
    paused: '一時停止',
    pausedHint: 'Pキーをもう一度押すと続きます。',
    resume: 'つづける',
    help: 'マウスか指で押しながらねらう<br>← → で回す・スペースで撃つ・Pで一時停止',
    gain: '+{n}',
    ouch: 'いたっ！',
    lifeUp: 'ライフ +1',
    waveUp: 'ウェーブ {n}',
  },
  es: {
    tagline: 'Vienen por todos lados.',
    score: 'Puntos', life: 'Vida', best: 'Récord', wave: 'Oleada',
    readyTitle: '¡Aguanta!',
    readyBody: 'Apunta hacia donde quieras disparar.<br>Mantén pulsado y sigue disparando.',
    legend1: 'Normal, viene andando',
    legend2: 'Pequeño y rápido',
    legend3: 'Duro: aguanta tres tiros',
    legend4: 'Dorado: te devuelve una vida',
    start: 'Empezar',
    overTitle: '¡Te pillaron!',
    retry: 'Otra vez',
    paused: 'En pausa',
    pausedHint: 'Pulsa P otra vez para seguir.',
    resume: 'Continuar',
    help: 'Mantén pulsado y apunta con ratón o dedo<br>← → para girar · Espacio dispara · P pausa',
    gain: '+{n}',
    ouch: '¡Ay!',
    lifeUp: '+1 vida',
    waveUp: 'Oleada {n}',
  },
  fr: {
    tagline: 'Ils arrivent de partout.',
    score: 'Score', life: 'Vie', best: 'Record', wave: 'Vague',
    readyTitle: 'Tiens bon !',
    readyBody: 'Vise là où tu veux tirer.<br>Maintiens appuyé, ça tire tout du long.',
    legend1: 'Normal, il avance',
    legend2: 'Petit et rapide',
    legend3: 'Costaud : trois tirs',
    legend4: 'Doré : rend une vie',
    start: 'Commencer',
    overTitle: 'Ils t’ont eu !',
    retry: 'Rejouer',
    paused: 'En pause',
    pausedHint: 'Appuie encore sur P pour continuer.',
    resume: 'Reprendre',
    help: 'Maintiens et vise à la souris ou au doigt<br>← → pour tourner · Espace pour tirer · P pause',
    gain: '+{n}',
    ouch: 'Aïe !',
    lifeUp: '+1 vie',
    waveUp: 'Vague {n}',
  },
  zh: {
    tagline: '四面八方都来。',
    score: '分数', life: '生命', best: '最高', wave: '波次',
    readyTitle: '撑住！',
    readyBody: '指向你想打的方向。<br>按住就会一直开火。',
    legend1: '普通的，走过来',
    legend2: '又小又快',
    legend3: '结实，要打三次',
    legend4: '金色，还你一条命',
    start: '开始',
    overTitle: '被抓到了！',
    retry: '再玩一次',
    paused: '暂停',
    pausedHint: '再按一次 P 继续。',
    resume: '继续',
    help: '用鼠标或手指按住瞄准<br>← → 转向 · 空格开火 · 按 P 暂停',
    gain: '+{n}',
    ouch: '哎哟！',
    lifeUp: '生命 +1',
    waveUp: '第 {n} 波',
  },
};
