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
  /** 게임 소개 두세 문장. 검색엔진이 읽는 본문이기도 하다. */
  about: string;
  /** 「어떻게 하나」 — 정확히 네 줄. 짧은 명령문. */
  how: [string, string, string, string];
  /** 「잘하는 요령」 — 정확히 세 줄. */
  tips: [string, string, string];
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
    about: 'You drive up a three-lane road, switching lanes to slip past the oncoming cars and pick up coins along the way. The road speeds up over the first half-minute, and after that the traffic keeps arriving in tighter waves. Touch one car and the run is over.',
    how: [
      'Press ← or →, or tap that side, to change lane.',
      'Drive as far as you can and pick up coins.',
      'Stay out of the lane an oncoming car is in.',
      'One touch from a car ends the run.',
    ],
    tips: [
      'Cars arrive one or two at a time, never three, so a lane is always open.',
      'Your car glides between lanes instead of snapping, so start the move early.',
      'Coins come three in a row in one lane, so a single lane change picks up all three.',
    ],
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
    about: '삼차선 도로를 계속 달려요. 차선을 바꿔 가며 마주 오는 차를 피하고, 가는 길에 동전을 주워요. 처음 삼십 초쯤은 속도가 점점 빨라지고, 그다음부터는 차가 더 촘촘하게 나와요. 차에 한 번 닿으면 끝이에요.',
    how: [
      '← → 키를 누르거나 화면 왼쪽 오른쪽을 눌러 차선을 바꿔요.',
      '최대한 멀리 가면서 동전을 주워요.',
      '차가 오는 차선에 그대로 있으면 안 돼요.',
      '차에 닿는 순간 끝나요.',
    ],
    tips: [
      '차는 한 번에 한 대나 두 대만 나와요. 세 차선이 다 막히지는 않아요.',
      '차선을 바꾸면 차가 스르륵 미끄러져 가요. 조금 일찍 눌러 두세요.',
      '동전은 한 차선에 세 개가 줄지어 나와요. 한 번만 옮기면 다 주워요.',
    ],
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
    about: '3車線の道をひたすら走ります。車線を移りながら対向車をよけ、途中のコインを拾います。最初の30秒ほどで速度が上がりきり、そのあとは車の間隔がだんだん詰まります。車に一度でも当たると終わりです。',
    how: [
      '← → を押すか画面の左右をタップして車線を移る。',
      'できるだけ遠くまで走り、コインを拾う。',
      '対向車がいる車線に居座らない。',
      '車に当たった時点で終わり。',
    ],
    tips: [
      '車は一度に1台か2台。3車線が同時にふさがることはない。',
      '車線移動はすっと滑るように動く。少し早めに操作する。',
      'コインは同じ車線に3つ並ぶ。1回移れば全部取れる。',
    ],
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
    about: 'Conduces por una carretera de tres carriles y vas cambiando de carril para esquivar los coches que vienen de frente y recoger monedas por el camino. La velocidad sube durante el primer medio minuto y después el tráfico llega cada vez más junto. Un solo golpe termina la partida.',
    how: [
      'Pulsa ← o →, o toca ese lado, para cambiar de carril.',
      'Llega lo más lejos posible y recoge monedas.',
      'No te quedes en el carril por el que viene un coche.',
      'Basta con rozar un coche para terminar.',
    ],
    tips: [
      'Los coches llegan de uno en uno o de dos en dos, nunca tres: siempre queda un carril libre.',
      'Tu coche se desliza entre carriles en vez de saltar, así que muévete con antelación.',
      'Las monedas salen de tres en tres en el mismo carril; un solo cambio las recoge todas.',
    ],
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
    about: "Tu roules sur une route à trois voies et tu changes de voie pour éviter les voitures d'en face et ramasser les pièces au passage. La vitesse monte pendant la première demi-minute, puis les voitures arrivent de plus en plus serrées. Un seul contact et la partie s'arrête.",
    how: [
      'Appuie sur ← ou →, ou touche ce côté, pour changer de voie.',
      'Roule le plus loin possible et ramasse les pièces.',
      'Ne reste pas dans la voie où arrive une voiture.',
      'Le moindre contact avec une voiture termine la partie.',
    ],
    tips: [
      'Les voitures arrivent par une ou par deux, jamais par trois : une voie reste toujours libre.',
      "Ta voiture glisse d'une voie à l'autre au lieu de sauter : anticipe le mouvement.",
      'Les pièces arrivent par trois dans la même voie : un seul changement les prend toutes.',
    ],
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
    about: '在三车道的路上一直往前开，靠换道躲开迎面来的车，顺路捡金币。开头半分钟左右速度一路加快，之后车与车的间隔越来越密。碰到一次车，这一局就结束。',
    how: [
      '按 ← → 或点屏幕左右两边换车道。',
      '尽量开得更远，顺手捡金币。',
      '别停在有车迎面开来的车道上。',
      '碰到车就结束。',
    ],
    tips: [
      '车一次只来一辆或两辆，不会三条道全堵，总有一条能走。',
      '换道时车是滑过去的，要提前一点操作。',
      '金币在同一条道上连着出三个，换一次道就能全拿到。',
    ],
  },
};
