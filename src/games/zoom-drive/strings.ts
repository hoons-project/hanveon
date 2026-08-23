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
    tagline: 'Dodge traffic. Grab coins.',
    dist: 'Distance', coin: 'Coins', best: 'Best',
    readyTitle: 'Ready?',
    readyBody: 'Dodge the oncoming cars<br>and grab coins along the way.',
    start: 'Start',
    overTitle: 'Crash!',
    retry: 'Play Again',
    paused: 'Paused',
    pausedHint: 'Press P again to keep going.',
    resume: 'Resume',
    padLeft: 'Left', padRight: 'Right',
    help: 'Press ← → · Tap the left or right side of the screen · P pause',
    coinPop: '+{n}',
    about: 'You drive up a three-lane road, switching lanes to slip past oncoming cars and collect coins along the way. The road speeds up over the first half-minute, and after that the traffic comes in tighter waves. Touch another car and the run is over.',
    how: [
      'Press ← or →, or tap that side of the screen, to change lanes.',
      'Drive as far as you can and collect coins along the way.',
      'Move out of a lane before an oncoming car reaches you.',
      'One collision ends the run.',
    ],
    tips: [
      'Cars arrive one or two at a time, never three, so there is always one open lane.',
      'Your car glides between lanes instead of snapping across, so start moving a little early.',
      'Coins appear in groups of three in the same lane, so one lane change can collect all three.',
    ],
  },
  ko: {
    tagline: '차를 피하고 동전을 모아보세요.',
    dist: '거리', coin: '동전', best: '최고',
    readyTitle: '준비됐나요?',
    readyBody: '마주 오는 차를 피하면서<br>길에 있는 동전을 모아보세요.',
    start: '시작',
    overTitle: '쾅!',
    retry: '다시 하기',
    paused: '잠깐 멈춤',
    pausedHint: 'P 키를 다시 누르면 이어서 해요.',
    resume: '이어 하기',
    padLeft: '왼쪽', padRight: '오른쪽',
    help: '← → 키 · 화면 왼쪽/오른쪽 누르기 · P 멈춤',
    coinPop: '+{n}',
    about: '3차선 도로를 달리면서 차선을 바꿔 마주 오는 차를 피하고 동전을 모으는 게임이에요. 처음 약 30초 동안은 속도가 점점 빨라지고, 그다음부터는 차가 더 촘촘하게 등장합니다. 다른 차에 한 번이라도 닿으면 게임이 끝나요.',
    how: [
      '← → 키를 누르거나 화면 왼쪽·오른쪽을 눌러 차선을 바꿔요.',
      '최대한 멀리 달리면서 동전을 모아요.',
      '차가 오는 차선에서는 미리 빠져나오세요.',
      '다른 차에 닿는 순간 끝나요.',
    ],
    tips: [
      '차는 한 번에 한 대나 두 대만 나와요. 세 차선이 동시에 막히지는 않아서 항상 빠져나갈 길이 있습니다.',
      '차선을 바꿀 때 차가 바로 순간이동하지 않고 부드럽게 움직여요. 조금 일찍 방향을 바꾸는 게 좋아요.',
      '동전은 같은 차선에 세 개씩 이어서 나옵니다. 한 번 들어가면 세 개를 모두 챙길 수 있어요.',
    ],
  },
  ja: {
    tagline: '車をよけて、コインを集めよう。',
    dist: '距離', coin: 'コイン', best: 'ベスト',
    readyTitle: '準備はいい？',
    readyBody: '対向車をよけながら<br>コインを集めよう。',
    start: 'スタート',
    overTitle: 'クラッシュ！',
    retry: 'もう一度',
    paused: '一時停止',
    pausedHint: 'Pキーをもう一度押すと続きます。',
    resume: 'つづける',
    padLeft: '左', padRight: '右',
    help: '← → で車線変更 · 画面の左右をタップ · Pで一時停止',
    coinPop: '+{n}',
    about: '3車線の道路を走り、車線を変えながら対向車をよけてコインを集めます。最初の約30秒でスピードが徐々に上がり、その後は車の間隔が少しずつ狭くなっていきます。一度でも車に当たるとゲーム終了です。',
    how: [
      '← → を押すか、画面の左右をタップして車線を変えます。',
      'できるだけ遠くまで走りながらコインを集めます。',
      '対向車が来る車線から早めに移動しましょう。',
      '車に一度でも当たると終了です。',
    ],
    tips: [
      '車は一度に1台か2台だけ。3車線が同時にふさがることはないので、必ず逃げ道があります。',
      '車線変更は瞬間移動ではなく滑るように動きます。少し早めに操作しましょう。',
      'コインは同じ車線に3つ続けて出ます。一度車線を合わせれば全部取れます。',
    ],
  },
  es: {
    tagline: 'Esquiva el tráfico y recoge monedas.',
    dist: 'Distancia', coin: 'Monedas', best: 'Récord',
    readyTitle: '¿Listo?',
    readyBody: 'Esquiva los coches que vienen de frente<br>y recoge monedas por el camino.',
    start: 'Empezar',
    overTitle: '¡Choque!',
    retry: 'Otra vez',
    paused: 'En pausa',
    pausedHint: 'Pulsa P otra vez para seguir.',
    resume: 'Continuar',
    padLeft: 'Izquierda', padRight: 'Derecha',
    help: 'Pulsa ← → · Toca el lado izquierdo o derecho · P pausa',
    coinPop: '+{n}',
    about: 'Conduces por una carretera de tres carriles, cambiando de carril para esquivar los coches que vienen de frente y recoger monedas. La velocidad aumenta durante el primer medio minuto y, después, el tráfico empieza a llegar en grupos más juntos. Un solo choque termina la partida.',
    how: [
      'Pulsa ← o →, o toca ese lado de la pantalla, para cambiar de carril.',
      'Llega lo más lejos posible y recoge monedas por el camino.',
      'Sal del carril antes de que llegue el coche que viene de frente.',
      'Un solo choque termina la partida.',
    ],
    tips: [
      'Los coches llegan de uno en uno o de dos en dos, nunca tres: siempre queda un carril libre.',
      'Tu coche se desliza entre carriles en lugar de cambiar de golpe, así que empieza a moverte un poco antes.',
      'Las monedas aparecen de tres en tres en el mismo carril. Un solo cambio de carril puede recogerlas todas.',
    ],
  },
  fr: {
    tagline: 'Évite le trafic et ramasse les pièces.',
    dist: 'Distance', coin: 'Pièces', best: 'Record',
    readyTitle: 'Prêt ?',
    readyBody: 'Évite les voitures qui arrivent en face<br>et ramasse les pièces sur la route.',
    start: 'Commencer',
    overTitle: 'Crash !',
    retry: 'Rejouer',
    paused: 'En pause',
    pausedHint: 'Appuie encore sur P pour continuer.',
    resume: 'Reprendre',
    padLeft: 'Gauche', padRight: 'Droite',
    help: 'Appuie sur ← → · Touche le côté gauche ou droit · P pause',
    coinPop: '+{n}',
    about: 'Tu roules sur une route à trois voies et changes de voie pour éviter les voitures qui arrivent en face tout en ramassant des pièces. La vitesse augmente pendant la première demi-minute, puis le trafic devient progressivement plus serré. Une seule collision met fin à la partie.',
    how: [
      'Appuie sur ← ou →, ou touche le côté correspondant de l’écran, pour changer de voie.',
      'Roule aussi loin que possible et ramasse les pièces en chemin.',
      'Quitte la voie avant que la voiture qui arrive en face ne t’atteigne.',
      'Une seule collision met fin à la partie.',
    ],
    tips: [
      'Les voitures arrivent par une ou par deux, jamais par trois : il reste toujours une voie libre.',
      'Ta voiture glisse d’une voie à l’autre au lieu de changer instantanément. Commence donc ton mouvement un peu plus tôt.',
      'Les pièces apparaissent par groupes de trois dans la même voie. Un seul changement peut permettre de toutes les ramasser.',
    ],
  },
  zh: {
    tagline: '躲开来车，收集金币。',
    dist: '距离', coin: '金币', best: '最高',
    readyTitle: '准备好了吗？',
    readyBody: '躲开迎面而来的车，<br>顺路收集金币。',
    start: '开始',
    overTitle: '撞车了！',
    retry: '再玩一次',
    paused: '暂停',
    pausedHint: '再按一次 P 继续。',
    resume: '继续',
    padLeft: '向左', padRight: '向右',
    help: '按 ← → · 点屏幕左边或右边 · P 暂停',
    coinPop: '+{n}',
    about: '在三车道的道路上行驶，通过换道躲开迎面而来的车辆，同时收集路上的金币。前半分钟左右速度会逐渐加快，之后车辆之间的间隔会越来越紧。只要撞到一次车，本局就结束。',
    how: [
      '按 ← 或 →，也可以点屏幕对应的一侧来换车道。',
      '尽量开得更远，同时收集路上的金币。',
      '迎面有车时要提前离开那条车道。',
      '只要撞到一次车，本局就结束。',
    ],
    tips: [
      '车辆一次只会来一辆或两辆，不会同时堵住三条车道，所以总有一条路可以走。',
      '换道时车辆会平滑移动，不会瞬间跳过去，最好稍微提前操作。',
      '金币会在同一条车道连续出现三个，换一次车道就有机会全部拿到。',
    ],
  },
};
