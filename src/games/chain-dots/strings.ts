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
  /** 게임 소개 두세 문장. 검색엔진이 읽는 본문이기도 하다. */
  about: string;
  /** 「어떻게 하나」 — 정확히 네 줄. 짧은 명령문. */
  how: [string, string, string, string];
  /** 「잘하는 요령」 — 정확히 세 줄. */
  tips: [string, string, string];
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
    about:
      'A board of coloured beads with no timer. Drag across neighbouring beads of one colour and let go to clear them — three or more counts, and a clear scores the bead count multiplied by itself. You get 25 moves, and the run ends when the last one is spent.',
    how: [
      'Press a bead and drag across the same colour.',
      'Links go up, down, left and right, never diagonally.',
      'Let go to clear; fewer than three clears nothing.',
      'The run ends once the 25 moves are gone.',
    ],
    tips: [
      'Score is the bead count times itself, so one clear of ten beats three clears of three.',
      'A clear costs one move whatever its size, so keep the line going instead of letting go early.',
      'Cross back onto a bead already in your line to close a loop and every bead of that colour goes; a 2x2 block of one colour is the shortest loop there is.',
    ],
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
    about:
      '여러 색 구슬이 깔린 판이에요. 시간에 쫓기지 않아요. 붙어 있는 같은 색 구슬을 쭉 긋고 손을 떼면 사라지는데, 세 개부터 세고 지운 개수끼리 곱한 만큼 점수가 붙어요. 남은 수 25번을 다 쓰면 그 판은 끝나요.',
    how: [
      '구슬을 누른 채 같은 색으로 쭉 그어요.',
      '위아래 왼쪽 오른쪽으로만 이어져요. 대각선은 안 돼요.',
      '손을 떼면 사라져요. 세 개가 안 되면 그대로예요.',
      '남은 수 25번을 다 쓰면 끝이에요.',
    ],
    tips: [
      '점수는 지운 개수끼리 곱한 값이에요. 세 개씩 세 번보다 열 개 한 번이 훨씬 커요.',
      '몇 개를 지우든 남은 수는 똑같이 하나 줄어요. 짧게 끊지 말고 길게 이어요.',
      '지나온 구슬을 다시 밟아 고리를 만들면 그 색이 판에서 전부 사라져요. 같은 색 네 개가 네모로 모여 있으면 바로 만들 수 있어요.',
    ],
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
    about:
      '色つきのビーズが並んだ盤。時間制限はない。同じ色で隣り合うビーズをなぞって離すと消える。三つ以上で消え、点数は消した数を掛け合わせた分だけ入る。手は25回。使い切ると終わり。',
    how: [
      'ビーズを押したまま同じ色をなぞる。',
      'つながるのは上下左右だけ。斜めは不可。',
      '離すと消える。三つ未満なら何も起きない。',
      '25回の手を使い切ると終わり。',
    ],
    tips: [
      '点数は消した数の二乗。三つを三回より、十個を一回のほうが大きい。',
      '何個消しても減る手は一つ。短く切らずに線を伸ばす。',
      '通ったビーズを踏み直すと輪ができ、その色が盤から全部消える。同じ色の2×2が最短の輪。',
    ],
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
    about:
      'Un tablero de bolitas de colores, sin reloj. Arrastra por bolitas contiguas del mismo color y suelta para borrarlas: cuentan a partir de tres, y cada jugada suma el número de bolitas multiplicado por sí mismo. Tienes 25 turnos y la partida acaba al gastar el último.',
    how: [
      'Pulsa una bolita y arrastra por su mismo color.',
      'Se enlaza en cruz, nunca en diagonal.',
      'Suelta para borrar; con menos de tres no pasa nada.',
      'La partida acaba al gastar los 25 turnos.',
    ],
    tips: [
      'Los puntos son el número de bolitas al cuadrado: diez de una vez valen más que tres veces tres.',
      'Cada borrado gasta un turno, sean tres bolitas o veinte, así que alarga el trazo antes de soltar.',
      'Si vuelves a pasar por una bolita del trazo cierras un lazo y se va todo ese color; un cuadrado de 2x2 del mismo color es el lazo más corto.',
    ],
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
    about:
      'Un plateau de perles colorées, sans chrono. Glisse sur des perles voisines de même couleur et relâche pour les effacer : il en faut au moins trois, et chaque coup rapporte le nombre de perles multiplié par lui-même. Tu as 25 coups, et la partie s’arrête quand le dernier est joué.',
    how: [
      'Appuie sur une perle et glisse sur la même couleur.',
      'On relie en croix, jamais en diagonale.',
      'Relâche pour effacer ; en dessous de trois, rien.',
      'La partie s’arrête une fois les 25 coups joués.',
    ],
    tips: [
      'Le score est le nombre de perles au carré : dix d’un coup valent bien plus que trois fois trois.',
      'Un effacement coûte un coup, qu’il en fasse trois ou vingt, alors allonge le trait avant de relâcher.',
      'Repasse sur une perle déjà reliée pour fermer une boucle et toute la couleur disparaît ; un carré de 2x2 d’une même couleur suffit.',
    ],
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
    about:
      '一盘彩色珠子，没有时间限制。按住划过相邻的同色珠子，松开就消掉，三个起才算，得分是消掉数量的平方。一共 25 次机会，用完这一局就结束。',
    how: [
      '按住珠子，划过同一个颜色。',
      '只能上下左右相连，不能走斜线。',
      '松开就消掉，不到三个则毫无变化。',
      '25 次机会用完就结束。',
    ],
    tips: [
      '得分是数量的平方，一次消十个远胜过三次各消三个。',
      '消三个和消二十个一样只扣一次机会，尽量把线拉长再松手。',
      '重新踩到线上走过的珠子就围成一圈，那个颜色全盘消失；同色的 2x2 方块就是最短的一圈。',
    ],
  },
};
