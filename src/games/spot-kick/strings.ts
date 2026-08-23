// 뻥뻥 슛 안에서 쓰는 글.
// 게임 이름은 여기 없다 — `src/data/games.ts` 에 있다.

import type { Lang } from '../../i18n';

export type S = {
  tagline: string;
  /** HUD 칸 셋 */
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
  /** 겨냥하는 동안 캔버스 아래에 뜨는 한 마디 */
  aimHint: string;
  /** 힘을 정하는 동안 뜨는 한 마디 */
  powerHint: string;
  /** 넣었을 때 캔버스에 크게 뜨는 글 */
  scored: string;
  /** 골키퍼가 막았을 때 */
  saved: string;
  /** 골대를 넘겼을 때 */
  over: string;
  /** 연속 골 — `{n}` 자리에 숫자 */
  streak: string;
  /** 게임 소개 두세 문장. 검색엔진이 읽는 본문이기도 하다. */
  about: string;
  /** 「어떻게 하나」 — 정확히 네 줄. 짧은 명령문. */
  how: [string, string, string, string];
  /** 「잘하는 요령」 — 정확히 세 줄. 코드에서 확인한 사실만. */
  tips: [string, string, string];
};

export const STR: Record<Lang, S> = {
  en: {
    tagline: 'Pick your corner. Beat the keeper.',
    goals: 'Goals', lives: 'Lives', best: 'Best',
    readyTitle: 'Take the Kick',
    readyBody: 'Tap once to pick the corner.<br>Tap again to set the power.',
    legend1: 'First tap — left or right',
    legend2: 'Second tap — how hard',
    legend3: 'Too hard and it flies over',
    start: 'Start',
    overTitle: 'Three misses!',
    retry: 'Play Again',
    paused: 'Paused',
    pausedHint: 'Press P again to keep going.',
    resume: 'Resume',
    help: 'Tap the pitch twice — once to aim, once for power<br>Space or Enter also works · P pause',
    aimHint: 'Pick the corner',
    powerHint: 'Set the power',
    scored: 'GOAL!',
    saved: 'Saved!',
    over: 'Over the bar!',
    streak: '{n} in a row',
    about:
      'A penalty shootout that never ends. One tap picks the corner, a second sets the power, and the keeper dives the moment the ball leaves your foot. The high corners are past his reach — but overdo the power and the ball sails over the bar. Three misses and the run is finished.',
    how: [
      'Tap once to stop the aim marker on a corner.',
      'Tap again to stop the power bar.',
      'Beat the keeper without clearing the crossbar.',
      'Three misses and the run ends.',
    ],
    tips: [
      'The keeper remembers your last two kicks and leans that way, so keep changing corners.',
      'High shots are the hardest to reach, but above the bar is a miss, not a goal.',
      'A soft kick gives the keeper time — weak shots get saved even in the corner.',
    ],
  },

  ko: {
    tagline: '구석을 고르고 골키퍼를 넘겨요',
    goals: '골', lives: '기회', best: '최고',
    readyTitle: '차 보자',
    readyBody: '한 번 누르면 방향이 정해져요.<br>한 번 더 누르면 힘이 정해져요.',
    legend1: '첫 번째 누르기 — 왼쪽 오른쪽',
    legend2: '두 번째 누르기 — 얼마나 세게',
    legend3: '너무 세면 골대를 넘어가요',
    start: '시작',
    overTitle: '세 번 못 넣었다!',
    retry: '다시 하기',
    paused: '잠깐 멈춤',
    pausedHint: 'P 키를 다시 누르면 이어서 해요.',
    resume: '이어 하기',
    help: '화면을 두 번 눌러요 — 방향 한 번, 힘 한 번<br>스페이스나 엔터도 돼요 · P 멈춤',
    aimHint: '방향을 골라요',
    powerHint: '힘을 정해요',
    scored: '골!',
    saved: '막혔다!',
    over: '넘어갔다!',
    streak: '{n}골 연속',
    about:
      '끝나지 않는 승부차기예요. 한 번 눌러 방향을 정하고 한 번 더 눌러 힘을 정하면, 공이 발을 떠나는 순간 골키퍼가 몸을 날려요. 위쪽 구석은 손이 안 닿지만, 힘이 너무 세면 골대를 넘어가요. 세 번 못 넣으면 그 판은 끝이에요.',
    how: [
      '한 번 눌러서 겨냥 표시를 구석에 멈춰요.',
      '한 번 더 눌러서 힘 막대를 멈춰요.',
      '골키퍼는 피하고 골대는 안 넘겨요.',
      '세 번 못 넣으면 끝이에요.',
    ],
    tips: [
      '골키퍼가 앞선 두 번을 기억하고 그쪽으로 기울어요. 방향을 바꿔 가며 차요.',
      '높은 공은 손이 잘 안 닿아요. 다만 골대 위로 넘기면 골이 아니라 실패예요.',
      '약하게 차면 골키퍼에게 시간을 줘요. 구석으로 가도 막혀요.',
    ],
  },

  ja: {
    tagline: 'コースを決めてキーパーを抜く',
    goals: 'ゴール', lives: '残り', best: 'ベスト',
    readyTitle: '蹴ってみよう',
    readyBody: '一回押すとコースが決まる。<br>もう一回押すと力が決まる。',
    legend1: '一回目 — 左右のコース',
    legend2: '二回目 — 蹴る強さ',
    legend3: '強すぎるとバーの上へ',
    start: 'スタート',
    overTitle: '三回外した！',
    retry: 'もう一度',
    paused: '一時停止',
    pausedHint: 'Pキーをもう一度押すと続きます。',
    resume: 'つづける',
    help: '画面を二回押す — コースに一回、力に一回<br>スペースやEnterでも · Pで一時停止',
    aimHint: 'コースを決める',
    powerHint: '力を決める',
    scored: 'ゴール！',
    saved: '止められた！',
    over: 'バーの上！',
    streak: '{n}本連続',
    about:
      '終わらないPK戦。一回押してコースを決め、もう一回押して力を決めると、ボールが足を離れた瞬間にキーパーが飛ぶ。上の隅は手が届かないが、力を入れすぎるとバーを越える。三回外すとそこで終わり。',
    how: [
      '一回押して、狙いの印を隅で止める。',
      'もう一回押して、力のバーを止める。',
      'キーパーをかわし、バーは越えない。',
      '三回外すと終わり。',
    ],
    tips: [
      'キーパーは直前の二本を覚えてそちらに寄る。コースを変えて蹴る。',
      '高い球は手が届きにくい。ただしバーの上に出たらゴールではなく失敗。',
      '弱く蹴るとキーパーに時間を与える。隅に飛んでも止められる。',
    ],
  },

  es: {
    tagline: 'Elige el palo y supera al portero.',
    goals: 'Goles', lives: 'Vidas', best: 'Récord',
    readyTitle: 'A tirar',
    readyBody: 'Un toque elige el palo.<br>Otro toque marca la fuerza.',
    legend1: 'Primer toque — a qué lado',
    legend2: 'Segundo toque — con cuánta fuerza',
    legend3: 'Si te pasas, se va por encima',
    start: 'Empezar',
    overTitle: '¡Tres fallos!',
    retry: 'Otra vez',
    paused: 'En pausa',
    pausedHint: 'Pulsa P otra vez para seguir.',
    resume: 'Continuar',
    help: 'Toca dos veces — una para apuntar, otra para la fuerza<br>Espacio o Enter también · P pausa',
    aimHint: 'Elige el palo',
    powerHint: 'Marca la fuerza',
    scored: '¡GOL!',
    saved: '¡Parada!',
    over: '¡Por encima!',
    streak: '{n} seguidos',
    about:
      'Una tanda de penaltis que no acaba. Un toque elige el palo, otro marca la fuerza, y el portero se lanza en cuanto sale el balón. A las escuadras no llega nadie, pero si aprietas de más el balón se va por encima del larguero. A los tres fallos se acaba la partida.',
    how: [
      'Toca una vez para parar la mira en un palo.',
      'Toca otra vez para parar la barra de fuerza.',
      'Supera al portero sin pasarte del larguero.',
      'Con tres fallos se acaba la partida.',
    ],
    tips: [
      'El portero recuerda tus dos últimos tiros y se inclina hacia ese lado: cambia de palo.',
      'Los balones altos son los más difíciles de alcanzar, pero por encima del larguero es fallo.',
      'Un tiro flojo le da tiempo al portero; aunque vaya al palo, lo para.',
    ],
  },

  fr: {
    tagline: 'Choisis le coin, bats le gardien.',
    goals: 'Buts', lives: 'Vies', best: 'Record',
    readyTitle: 'À toi de tirer',
    readyBody: 'Une pression choisit le coin.<br>Une seconde règle la puissance.',
    legend1: 'Première pression — le côté',
    legend2: 'Deuxième pression — la puissance',
    legend3: 'Trop fort et ça passe au-dessus',
    start: 'Commencer',
    overTitle: 'Trois ratés !',
    retry: 'Rejouer',
    paused: 'En pause',
    pausedHint: 'Appuie encore sur P pour continuer.',
    resume: 'Reprendre',
    help: 'Appuie deux fois — une pour viser, une pour la puissance<br>Espace ou Entrée aussi · P pause',
    aimHint: 'Choisis le coin',
    powerHint: 'Règle la puissance',
    scored: 'BUT !',
    saved: 'Arrêté !',
    over: 'Au-dessus !',
    streak: '{n} d’affilée',
    about:
      'Une séance de tirs au but sans fin. Une pression choisit le coin, une seconde règle la puissance, et le gardien plonge dès que le ballon part. Personne n’atteint les lucarnes, mais en forçant trop le ballon passe au-dessus de la barre. Trois ratés et la partie s’arrête.',
    how: [
      'Appuie une fois pour arrêter la mire sur un coin.',
      'Appuie encore pour arrêter la jauge de puissance.',
      'Bats le gardien sans passer au-dessus de la barre.',
      'Trois ratés et la partie s’arrête.',
    ],
    tips: [
      'Le gardien retient tes deux derniers tirs et penche de ce côté : change de coin.',
      'Les ballons hauts sont les plus durs à atteindre, mais au-dessus de la barre c’est raté.',
      'Un tir mou laisse le temps au gardien ; même dans le coin, il l’arrête.',
    ],
  },

  zh: {
    tagline: '选好角度，骗过门将',
    goals: '进球', lives: '机会', best: '最高',
    readyTitle: '来一脚',
    readyBody: '按一下决定角度。<br>再按一下决定力度。',
    legend1: '第一下 — 往左还是往右',
    legend2: '第二下 — 用多大力',
    legend3: '太用力就飞过横梁',
    start: '开始',
    overTitle: '罚丢三次！',
    retry: '再玩一次',
    paused: '暂停',
    pausedHint: '再按一次 P 继续。',
    resume: '继续',
    help: '在场地上按两下 — 一下选角度，一下定力度<br>空格或回车也行 · P 暂停',
    aimHint: '选角度',
    powerHint: '定力度',
    scored: '进啦！',
    saved: '被扑出！',
    over: '飞了！',
    streak: '连进 {n} 球',
    about:
      '一场不会结束的点球大战。按一下选角度，再按一下定力度，球一离脚门将就扑出去。上角谁也够不到，但力度过头球就飞过横梁。罚丢三次，这一局就结束。',
    how: [
      '按一下，让准星停在角上。',
      '再按一下，让力度条停住。',
      '骗过门将，别打飞。',
      '罚丢三次就结束。',
    ],
    tips: [
      '门将记得你前两脚，会往那边偏。角度要换着来。',
      '高球最难扑，但高过横梁算丢球，不算进。',
      '踢得太轻就给了门将时间，打到角上也会被扑出。',
    ],
  },
};
