// 쓱쓱 숫자 안에서 쓰는 글.
// 게임 이름은 여기 없다 — `src/data/games.ts` 에 있다.

import type { Lang } from '../../i18n';

export type S = {
  tagline: string;
  /** HUD 칸 셋 */
  score: string;
  top: string;
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
  /** 합쳐질 때 뜨는 점수 — `{n}` 자리에 숫자 */
  gain: string;
  /** 2048 을 처음 만들었을 때 한 번 뜨는 글 */
  bigOne: string;
  /** 2048 을 만든 뒤 「계속 할 수 있어요」 한 줄 */
  keepGoing: string;
  /** 게임 소개 두세 문장. 검색엔진이 읽는 본문이기도 하다. */
  about: string;
  /** 「어떻게 하나」 — 정확히 네 줄. 짧은 명령문. */
  how: [string, string, string, string];
  /** 「잘하는 요령」 — 정확히 세 줄. 코드에서 확인한 사실만. */
  tips: [string, string, string];
};

export const STR: Record<Lang, S> = {
  en: {
    tagline: 'Slide. Equal numbers become one.',
    score: 'Score', top: 'Biggest', best: 'Best',
    readyTitle: 'Slide and Double',
    readyBody: 'Swipe and every tile slides that way.<br>Two of the same become one twice as big.',
    legend1: 'Swipe up, down, left or right',
    legend2: 'Equal numbers merge into double',
    legend3: 'A new tile appears after every move',
    start: 'Start',
    overTitle: 'Board is stuck',
    retry: 'Play Again',
    paused: 'Paused',
    pausedHint: 'Press P again to keep going.',
    resume: 'Resume',
    help: 'Swipe the board, or use ← ↑ → ↓<br>P pause',
    gain: '+{n}',
    bigOne: '2048!',
    keepGoing: 'Keep going for more.',
    about:
      'A four by four board where every swipe pushes all the tiles the same way, and two equal numbers touching become one twice as big. A new tile drops in after every move that changes something, so the board fills whether you like it or not. There is no timer — the only thing that ends the game is running out of room with nothing left to join.',
    how: [
      'Swipe and every tile slides that way.',
      'Two equal numbers merge into one.',
      'A new tile appears after each move.',
      'It ends when nothing can move or merge.',
    ],
    tips: [
      'Pick a corner and keep your biggest number in it. Alternating just two directions, like up and left, holds it there.',
      'Nine out of ten new tiles are a 2 and one in ten is a 4, so the board fills faster than it looks.',
      'Reaching 2048 does not end the run. You can carry on and go bigger.',
    ],
  },

  ko: {
    tagline: '밀면 같은 수끼리 하나가 돼요',
    score: '점수', top: '제일 큰 수', best: '최고',
    readyTitle: '밀어서 두 배로',
    readyBody: '한쪽으로 쓸면 칸이 다 그쪽으로 밀려요.<br>같은 수 둘이 만나면 두 배가 됩니다.',
    legend1: '위·아래·왼쪽·오른쪽으로 쓸기',
    legend2: '같은 수끼리 만나면 두 배',
    legend3: '한 번 밀 때마다 새 숫자가 나와요',
    start: '시작',
    overTitle: '더 못 움직여요',
    retry: '다시 하기',
    paused: '잠깐 멈춤',
    pausedHint: 'P 키를 다시 누르면 이어서 해요.',
    resume: '이어 하기',
    help: '판을 쓸거나 ← ↑ → ↓ 를 눌러요<br>P 멈춤',
    gain: '+{n}',
    bigOne: '2048!',
    keepGoing: '계속 이어서 할 수 있어요.',
    about:
      '네 칸 곱하기 네 칸 판이에요. 한쪽으로 쓸면 모든 칸이 그쪽으로 밀리고, 붙은 같은 수 둘이 만나면 두 배짜리 하나가 됩니다. 뭔가 움직인 뒤에는 늘 새 숫자가 하나 나와서, 원하든 아니든 판은 차오릅니다. 시간 제한은 없어요. 자리가 없고 붙일 것도 없을 때만 끝납니다.',
    how: [
      '한쪽으로 쓸면 칸이 다 그쪽으로 밀려요.',
      '같은 수 둘이 만나면 하나로 합쳐져요.',
      '한 번 움직일 때마다 새 숫자가 나와요.',
      '더 못 움직이고 못 합치면 끝이에요.',
    ],
    tips: [
      '구석 하나를 정해서 제일 큰 수를 거기 두세요. 위·왼쪽처럼 두 방향만 번갈아 쓰면 잘 붙어 있어요.',
      '새 숫자는 열에 아홉이 2, 열에 하나가 4예요. 보기보다 판이 빨리 찹니다.',
      '2048을 만들어도 안 끝나요. 그대로 이어서 더 키울 수 있어요.',
    ],
  },

  ja: {
    tagline: '寄せると同じ数がひとつになる',
    score: 'スコア', top: '最大の数', best: 'ベスト',
    readyTitle: '寄せて倍にする',
    readyBody: '一方向になぞると、すべてのマスがそちらへ寄る。<br>同じ数が出会うと倍になる。',
    legend1: '上下左右になぞる',
    legend2: '同じ数どうしで倍になる',
    legend3: '動かすたびに新しい数が出る',
    start: 'スタート',
    overTitle: 'もう動かせない',
    retry: 'もう一度',
    paused: '一時停止',
    pausedHint: 'Pキーをもう一度押すと続きます。',
    resume: 'つづける',
    help: '盤をなぞるか ← ↑ → ↓ を押す<br>Pで一時停止',
    gain: '+{n}',
    bigOne: '2048！',
    keepGoing: 'このまま続けられる。',
    about:
      '四かける四の盤。一方向になぞるとすべてのマスがそちらへ寄り、隣り合う同じ数は倍のひとつになる。何かが動いたあとは必ず新しい数がひとつ出るので、盤は否応なく埋まっていく。時間制限はない。置き場がなく、くっつけるものもなくなったときだけ終わる。',
    how: [
      '一方向になぞると、すべてのマスがそちらへ寄る。',
      '同じ数どうしが出会うとひとつに合わさる。',
      '動かすたびに新しい数がひとつ出る。',
      '動かせず合わせられなくなったら終わり。',
    ],
    tips: [
      '隅をひとつ決めて、いちばん大きい数をそこに置く。上と左のように二方向だけを交互に使うと保ちやすい。',
      '新しい数は十のうち九が2、十のうち一が4。見た目より早く盤が埋まる。',
      '2048を作っても終わらない。そのまま続けてもっと大きくできる。',
    ],
  },

  es: {
    tagline: 'Desliza y los iguales se juntan.',
    score: 'Puntos', top: 'Mayor', best: 'Récord',
    readyTitle: 'Desliza y duplica',
    readyBody: 'Desliza y todas las fichas van hacia ese lado.<br>Dos iguales se convierten en una del doble.',
    legend1: 'Desliza arriba, abajo, izquierda o derecha',
    legend2: 'Números iguales se juntan y se duplican',
    legend3: 'Tras cada movimiento aparece una ficha',
    start: 'Empezar',
    overTitle: 'El tablero está bloqueado',
    retry: 'Otra vez',
    paused: 'En pausa',
    pausedHint: 'Pulsa P otra vez para seguir.',
    resume: 'Continuar',
    help: 'Desliza el tablero o usa ← ↑ → ↓<br>P pausa',
    gain: '+{n}',
    bigOne: '¡2048!',
    keepGoing: 'Puedes seguir jugando.',
    about:
      'Un tablero de cuatro por cuatro donde cada deslizamiento empuja todas las fichas hacia el mismo lado, y dos números iguales que se tocan se convierten en uno del doble. Después de cada movimiento que cambia algo aparece una ficha nueva, así que el tablero se llena quieras o no. No hay reloj: lo único que acaba la partida es quedarte sin sitio y sin nada que juntar.',
    how: [
      'Desliza y todas las fichas van hacia ese lado.',
      'Dos números iguales se juntan en uno.',
      'Tras cada movimiento aparece una ficha nueva.',
      'Acaba cuando nada puede moverse ni juntarse.',
    ],
    tips: [
      'Elige una esquina y deja ahí tu número mayor. Alternar solo dos direcciones, como arriba e izquierda, ayuda a mantenerlo.',
      'Nueve de cada diez fichas nuevas son un 2 y una de cada diez es un 4, así que el tablero se llena antes de lo que parece.',
      'Llegar a 2048 no acaba la partida. Puedes seguir y hacerlo más grande.',
    ],
  },

  fr: {
    tagline: 'Glisse : les nombres égaux fusionnent.',
    score: 'Score', top: 'Plus grand', best: 'Record',
    readyTitle: 'Glisse et double',
    readyBody: 'Glisse et toutes les tuiles partent de ce côté.<br>Deux nombres égaux n’en font qu’un, deux fois plus grand.',
    legend1: 'Glisse en haut, en bas, à gauche ou à droite',
    legend2: 'Deux nombres égaux fusionnent en double',
    legend3: 'Une tuile apparaît après chaque coup',
    start: 'Commencer',
    overTitle: 'Le plateau est bloqué',
    retry: 'Rejouer',
    paused: 'En pause',
    pausedHint: 'Appuie encore sur P pour continuer.',
    resume: 'Reprendre',
    help: 'Glisse sur le plateau ou utilise ← ↑ → ↓<br>P pause',
    gain: '+{n}',
    bigOne: '2048 !',
    keepGoing: 'Tu peux continuer.',
    about:
      'Un plateau de quatre sur quatre où chaque glissement pousse toutes les tuiles du même côté, et où deux nombres égaux qui se touchent n’en font plus qu’un, deux fois plus grand. Après chaque coup qui change quelque chose, une nouvelle tuile apparaît : le plateau se remplit, que tu le veuilles ou non. Pas de chrono — la partie ne s’arrête que si tu n’as plus de place et plus rien à réunir.',
    how: [
      'Glisse et toutes les tuiles partent de ce côté.',
      'Deux nombres égaux fusionnent en un seul.',
      'Une nouvelle tuile apparaît après chaque coup.',
      'C’est fini quand rien ne bouge ni ne fusionne.',
    ],
    tips: [
      'Choisis un coin et garde ton plus grand nombre dedans. N’alterner que deux directions, en haut et à gauche par exemple, aide à l’y maintenir.',
      'Neuf nouvelles tuiles sur dix sont un 2 et une sur dix un 4 : le plateau se remplit plus vite qu’il n’y paraît.',
      'Atteindre 2048 n’arrête pas la partie. Tu peux continuer et aller plus loin.',
    ],
  },

  zh: {
    tagline: '一滑，相同的数就合成一个。',
    score: '分数', top: '最大数', best: '最高',
    readyTitle: '滑动合成',
    readyBody: '往一个方向滑，所有格子都往那边挤。<br>两个相同的数碰到一起就变成两倍。',
    legend1: '上下左右滑动',
    legend2: '相同的数合成两倍',
    legend3: '每走一步就出现一个新数',
    start: '开始',
    overTitle: '走不动了',
    retry: '再玩一次',
    paused: '暂停',
    pausedHint: '再按一次 P 继续。',
    resume: '继续',
    help: '在棋盘上滑动，或按 ← ↑ → ↓<br>P 暂停',
    gain: '+{n}',
    bigOne: '2048！',
    keepGoing: '可以继续往下玩。',
    about:
      '一个四乘四的棋盘。往一个方向滑，所有格子都朝那边挤，相邻的两个相同数字会合成一个两倍大的。只要有东西动了，就会冒出一个新数字，所以棋盘由不得你，总会慢慢填满。没有计时，只有在没地方放、也没有可以合的时候才算结束。',
    how: [
      '往一个方向滑，所有格子都往那边挤。',
      '两个相同的数碰到就合成一个。',
      '每走一步就出现一个新数字。',
      '既走不动又合不了就结束。',
    ],
    tips: [
      '挑一个角，把最大的数留在那里。只轮换两个方向，比如上和左，比较容易把它按住。',
      '新出现的数十次里有九次是 2，一次是 4，棋盘填得比看上去快。',
      '合出 2048 不会结束，可以接着往上做更大的。',
    ],
  },
};
