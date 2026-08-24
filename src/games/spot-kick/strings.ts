// 승부차기 안에서 쓰는 글.
// 게임 이름은 여기 없다 — `src/data/games.ts` 에 있다.

import type { Lang } from '../../i18n';

export type S = {
  tagline: string;
  goals: string;
  lives: string;
  best: string;
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
  aimHint: string;
  powerHint: string;
  scored: string;
  saved: string;
  over: string;
  streak: string;
  about: string;
  how: [string, string, string, string];
  tips: [string, string, string];
};

export const STR: Record<Lang, S> = {
  en: {
    tagline: 'Pick a corner. Set the power. Beat the keeper.',
    goals: 'Goals', lives: 'Chances', best: 'Best',
    readyTitle: 'Step Up to the Spot',
    readyBody: 'Tap once to choose your direction.<br>Tap again to set the power.',
    legend1: 'First tap — choose the side',
    legend2: 'Second tap — set the power',
    legend3: 'Too much power sends it over the bar',
    start: 'Start',
    overTitle: 'Three misses!',
    retry: 'Play Again',
    paused: 'Paused',
    pausedHint: 'Press P again to keep going.',
    resume: 'Resume',
    help: 'Tap twice — once to aim, once for power<br>Space or Enter also works · P pause',
    aimHint: 'Pick your spot',
    powerHint: 'Set the power',
    scored: 'GOAL!',
    saved: 'Saved!',
    over: 'Over the bar!',
    streak: '{n} in a row',
    about:
      'An endless penalty challenge. Choose a corner, set the power, and try to send the keeper the wrong way. High corners are tough to reach, but hit the ball too hard and it flies over the bar. Miss three times and the run is over.',
    how: [
      'Tap once to stop the aim marker where you want to shoot.',
      'Tap again to stop the power bar.',
      'Beat the keeper without sending the ball over the bar.',
      'The run ends after three misses.',
    ],
    tips: [
      'The keeper remembers your recent shots, so keep changing sides.',
      'High corners are harder to save, but too much power turns a good aim into a miss.',
      'A weak shot gives the keeper more time to react, even when you aim for the corner.',
    ],
  },

  ko: {
    tagline: '구석을 노리고, 힘을 맞춰 골키퍼를 뚫어보세요.',
    goals: '골', lives: '기회', best: '최고',
    readyTitle: '승부차기 시작!',
    readyBody: '한 번 눌러 방향을 정하고,<br>한 번 더 눌러 슛의 세기를 정하세요.',
    legend1: '첫 번째 — 슛 방향 정하기',
    legend2: '두 번째 — 슛 세기 정하기',
    legend3: '너무 세게 차면 골대를 넘어가요',
    start: '시작',
    overTitle: '세 번 실패!',
    retry: '다시 하기',
    paused: '잠깐 멈춤',
    pausedHint: 'P 키를 다시 누르면 이어서 할 수 있어요.',
    resume: '이어 하기',
    help: '화면을 두 번 눌러요 — 방향 한 번, 힘 한 번<br>스페이스·엔터도 가능 · P 멈춤',
    aimHint: '노릴 곳을 정하세요',
    powerHint: '슛 세기를 맞추세요',
    scored: '골!',
    saved: '막혔다!',
    over: '골대 위로!',
    streak: '{n}골 연속',
    about:
      '계속 이어지는 승부차기 게임이에요. 먼저 슛 방향을 정하고, 다음으로 힘을 맞춰 골키퍼를 뚫으면 됩니다. 높은 구석은 막기 어렵지만 너무 세게 차면 골대를 넘어가요. 세 번 실패하면 그 판은 끝입니다.',
    how: [
      '한 번 눌러 조준 표시를 원하는 위치에 멈춰요.',
      '한 번 더 눌러 힘 게이지를 멈춰요.',
      '골키퍼는 피하고 골대 위로는 넘기지 마세요.',
      '세 번 실패하면 게임이 끝나요.',
    ],
    tips: [
      '골키퍼는 최근 슛 방향을 기억해요. 같은 쪽만 노리지 마세요.',
      '높은 구석은 막기 어렵지만, 힘이 너무 세면 좋은 방향도 소용없어요.',
      '너무 약한 슛은 골키퍼가 반응할 시간을 줘요. 구석으로 가도 막힐 수 있습니다.',
    ],
  },

  ja: {
    tagline: 'コースと強さを決めて、キーパーの逆を突こう。',
    goals: 'ゴール', lives: '残り', best: 'ベスト',
    readyTitle: 'PKスタート！',
    readyBody: '一回押してコースを決め、<br>もう一回押して強さを決めます。',
    legend1: '1回目 — コースを決める',
    legend2: '2回目 — 強さを決める',
    legend3: '強すぎるとバーの上へ',
    start: 'スタート',
    overTitle: '3回失敗！',
    retry: 'もう一度',
    paused: '一時停止',
    pausedHint: 'Pキーをもう一度押すと続けられます。',
    resume: 'つづける',
    help: '画面を2回押す — コース、強さの順<br>スペース・EnterでもOK · Pで一時停止',
    aimHint: 'コースを決める',
    powerHint: '強さを決める',
    scored: 'ゴール！',
    saved: '止められた！',
    over: 'バーの上！',
    streak: '{n}本連続',
    about:
      '何本でも続くPKチャレンジ。コースを決め、次に強さを合わせてキーパーの逆を突きます。高いコースは止められにくい一方、強すぎるとバーを越えてしまいます。3回失敗するとゲーム終了です。',
    how: [
      '一回押して、狙いのマーカーを止めます。',
      'もう一回押して、パワーゲージを止めます。',
      'キーパーをかわしつつ、バーの上には飛ばさないようにします。',
      '3回失敗すると終了です。',
    ],
    tips: [
      'キーパーは直前のシュート傾向を見ています。同じコースばかり狙わないのがコツです。',
      '高いコースは止められにくいですが、強すぎると枠を外れます。',
      '弱すぎるシュートはキーパーに反応する時間を与えてしまいます。',
    ],
  },

  es: {
    tagline: 'Elige el lado, ajusta la potencia y bate al portero.',
    goals: 'Goles', lives: 'Intentos', best: 'Récord',
    readyTitle: '¡A por el penalti!',
    readyBody: 'Toca una vez para elegir la dirección.<br>Toca otra vez para ajustar la potencia.',
    legend1: 'Primer toque — dirección',
    legend2: 'Segundo toque — potencia',
    legend3: 'Demasiada potencia manda el balón por encima',
    start: 'Empezar',
    overTitle: '¡Tres fallos!',
    retry: 'Otra vez',
    paused: 'En pausa',
    pausedHint: 'Pulsa P otra vez para continuar.',
    resume: 'Continuar',
    help: 'Toca dos veces — una para apuntar y otra para la potencia<br>Espacio o Enter también · P pausa',
    aimHint: 'Elige dónde tirar',
    powerHint: 'Ajusta la potencia',
    scored: '¡GOL!',
    saved: '¡Parada!',
    over: '¡Por encima!',
    streak: '{n} seguidos',
    about:
      'Una tanda de penaltis sin fin. Elige la dirección, ajusta la potencia e intenta engañar al portero. Las escuadras son difíciles de alcanzar, pero si te pasas de fuerza el balón se irá por encima del larguero. La partida termina al tercer fallo.',
    how: [
      'Toca una vez para detener la mira donde quieras lanzar.',
      'Toca otra vez para detener la barra de potencia.',
      'Supera al portero sin mandar el balón por encima del larguero.',
      'La partida termina tras tres fallos.',
    ],
    tips: [
      'El portero recuerda tus últimos tiros, así que conviene alternar los lados.',
      'Las zonas altas son más difíciles de cubrir, pero demasiada potencia acaba en fallo.',
      'Un tiro demasiado flojo le da tiempo al portero para reaccionar.',
    ],
  },

  fr: {
    tagline: 'Choisis le côté, règle la puissance et bats le gardien.',
    goals: 'Buts', lives: 'Essais', best: 'Record',
    readyTitle: 'À toi de tirer !',
    readyBody: 'Appuie une fois pour choisir la direction.<br>Appuie encore pour régler la puissance.',
    legend1: 'Premier appui — direction',
    legend2: 'Deuxième appui — puissance',
    legend3: 'Trop de puissance envoie le ballon au-dessus',
    start: 'Commencer',
    overTitle: 'Trois ratés !',
    retry: 'Rejouer',
    paused: 'En pause',
    pausedHint: 'Appuie encore sur P pour continuer.',
    resume: 'Reprendre',
    help: 'Appuie deux fois — une pour viser, une pour la puissance<br>Espace ou Entrée aussi · P pause',
    aimHint: 'Choisis ta cible',
    powerHint: 'Règle la puissance',
    scored: 'BUT !',
    saved: 'Arrêté !',
    over: 'Au-dessus !',
    streak: '{n} d’affilée',
    about:
      'Une séance de tirs au but sans fin. Choisis le côté, règle la puissance et essaie de prendre le gardien à contre-pied. Les tirs en lucarne sont difficiles à arrêter, mais trop de puissance envoie le ballon au-dessus de la barre. La partie s’arrête après trois ratés.',
    how: [
      'Appuie une fois pour arrêter la mire où tu veux tirer.',
      'Appuie encore pour arrêter la jauge de puissance.',
      'Bats le gardien sans envoyer le ballon au-dessus de la barre.',
      'La partie s’arrête après trois ratés.',
    ],
    tips: [
      'Le gardien se souvient de tes derniers tirs : varie les côtés.',
      'Les tirs hauts sont plus difficiles à arrêter, mais trop de puissance finit au-dessus.',
      'Un tir trop faible laisse davantage de temps au gardien pour réagir.',
    ],
  },

  zh: {
    tagline: '选好角度和力度，想办法骗过门将。',
    goals: '进球', lives: '机会', best: '最高',
    readyTitle: '开始罚点球！',
    readyBody: '按一下选择方向，<br>再按一下决定力度。',
    legend1: '第一下 — 选择方向',
    legend2: '第二下 — 决定力度',
    legend3: '太用力会踢过横梁',
    start: '开始',
    overTitle: '失误三次！',
    retry: '再玩一次',
    paused: '暂停',
    pausedHint: '再按一次 P 继续。',
    resume: '继续',
    help: '按两下 — 一下选方向，一下定力度<br>空格或回车也可以 · P 暂停',
    aimHint: '选择射门位置',
    powerHint: '决定力度',
    scored: '进球！',
    saved: '扑住了！',
    over: '踢高了！',
    streak: '连进 {n} 球',
    about:
      '一场可以一直踢下去的点球挑战。先选射门方向，再控制力度，尽量骗过门将。高角度更难扑到，但力度过大就会飞过横梁。失误三次后，本局结束。',
    how: [
      '按一下，把瞄准标记停在想射的位置。',
      '再按一下，让力度条停下来。',
      '既要避开门将，也别把球踢过横梁。',
      '失误三次后游戏结束。',
    ],
    tips: [
      '门将会参考你最近的射门方向，别总踢同一边。',
      '高角度更难扑，但力度太大同样会变成失误。',
      '射得太轻会给门将更多反应时间。',
    ],
  },
};
