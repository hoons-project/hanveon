// 숫자 합치기 안에서 쓰는 글.
// 게임 이름은 여기 없다 — `src/data/games.ts` 에 있다.

import type { Lang } from '../../i18n';

export type S = {
  tagline: string;
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
  gain: string;
  bigOne: string;
  keepGoing: string;
  about: string;
  how: [string, string, string, string];
  tips: [string, string, string];
};

export const STR: Record<Lang, S> = {
  en: {
    tagline: 'Slide the board and merge matching numbers.',
    score: 'Score', top: 'Largest', best: 'Best',
    readyTitle: 'Slide and Merge',
    readyBody: 'Swipe to move every tile in the same direction.<br>Matching numbers merge into one twice as large.',
    legend1: 'Swipe up, down, left or right',
    legend2: 'Matching numbers merge and double',
    legend3: 'A new tile appears after each valid move',
    start: 'Start',
    overTitle: 'No moves left',
    retry: 'Play Again',
    paused: 'Paused',
    pausedHint: 'Press P again to keep going.',
    resume: 'Resume',
    help: 'Swipe the board, or use ← ↑ → ↓<br>P pause',
    gain: '+{n}',
    bigOne: '2048!',
    keepGoing: 'You can keep going.',
    about:
      'A simple number-merging puzzle on a 4×4 board. Every swipe moves all tiles in the same direction, and two matching numbers merge into one tile with twice the value. A new tile appears after every move that changes the board. There is no timer; the run ends only when nothing can move or merge.',
    how: [
      'Swipe in any direction to move every tile.',
      'Two matching numbers that meet will merge into one.',
      'A new tile appears after every valid move.',
      'The game ends when no tile can move or merge.',
    ],
    tips: [
      'Choose a corner for your largest number and try to keep it there.',
      'Most new tiles are 2s, with an occasional 4, so leave yourself room to combine them.',
      'Making 2048 does not end the game. You can keep playing for a larger tile.',
    ],
  },

  ko: {
    tagline: '판을 밀고 같은 숫자를 합쳐 더 큰 수를 만드세요.',
    score: '점수', top: '가장 큰 수', best: '최고',
    readyTitle: '밀어서 합치기',
    readyBody: '한 방향으로 밀면 모든 숫자가 함께 움직여요.<br>같은 숫자가 만나면 두 배의 숫자로 합쳐집니다.',
    legend1: '위·아래·왼쪽·오른쪽으로 밀기',
    legend2: '같은 숫자가 만나면 합쳐져 두 배',
    legend3: '움직임이 생기면 새 숫자 하나 등장',
    start: '시작',
    overTitle: '더 움직일 수 없어요',
    retry: '다시 하기',
    paused: '잠깐 멈춤',
    pausedHint: 'P 키를 다시 누르면 이어서 할 수 있어요.',
    resume: '이어 하기',
    help: '판을 쓸거나 ← ↑ → ↓ 키를 눌러요<br>P 멈춤',
    gain: '+{n}',
    bigOne: '2048!',
    keepGoing: '계속해서 더 큰 숫자를 만들 수 있어요.',
    about:
      '4×4 판에서 같은 숫자를 합쳐 더 큰 숫자를 만드는 퍼즐이에요. 한 방향으로 밀면 모든 숫자가 함께 움직이고, 같은 숫자 두 개가 만나면 두 배의 숫자 하나로 합쳐집니다. 판이 실제로 움직일 때마다 새 숫자 하나가 생겨요. 시간 제한은 없고, 더 이상 움직이거나 합칠 수 없을 때 게임이 끝납니다.',
    how: [
      '원하는 방향으로 밀어 모든 숫자를 움직여요.',
      '같은 숫자 두 개가 만나면 하나로 합쳐져요.',
      '움직임이 생길 때마다 새 숫자가 하나 나타나요.',
      '더 이상 움직이거나 합칠 수 없으면 끝입니다.',
    ],
    tips: [
      '가장 큰 숫자를 둘 구석 하나를 정하고, 가능하면 계속 그 자리를 지켜주세요.',
      '새로 나오는 숫자는 대부분 2이고 가끔 4가 나와요. 합칠 공간을 남겨두는 게 중요합니다.',
      '2048을 만들어도 게임은 끝나지 않아요. 계속 이어서 더 큰 숫자를 만들 수 있습니다.',
    ],
  },

  ja: {
    tagline: '盤面を動かして、同じ数字をどんどん合体させよう。',
    score: 'スコア', top: '最大', best: 'ベスト',
    readyTitle: 'スライドして合体',
    readyBody: '一方向にスライドすると、すべての数字が同じ方向へ動きます。<br>同じ数字がぶつかると、2倍の数字に合体します。',
    legend1: '上下左右にスライド',
    legend2: '同じ数字が合体して2倍に',
    legend3: '有効な手のあとに新しい数字が出る',
    start: 'スタート',
    overTitle: 'もう動かせない',
    retry: 'もう一度',
    paused: '一時停止',
    pausedHint: 'Pキーをもう一度押すと続けられます。',
    resume: 'つづける',
    help: '盤面をスワイプするか ← ↑ → ↓ を使う<br>Pで一時停止',
    gain: '+{n}',
    bigOne: '2048！',
    keepGoing: 'そのまま続けられます。',
    about:
      '4×4の盤面で同じ数字を合体させ、より大きな数字を作るパズルです。一方向にスライドするとすべての数字が同じ方向へ動き、同じ数字がぶつかると2倍の数字になります。盤面が動くたびに新しい数字が1つ追加されます。時間制限はなく、動かすことも合体させることもできなくなったら終了です。',
    how: [
      '上下左右にスライドして、すべての数字を動かします。',
      '同じ数字がぶつかると1つに合体します。',
      '有効な手のあとに新しい数字が1つ追加されます。',
      '動かすことも合体させることもできなくなったら終了です。',
    ],
    tips: [
      'いちばん大きな数字を置く角を1つ決めて、なるべく動かさないようにしましょう。',
      '新しく出る数字はほとんどが2で、ときどき4が出ます。合体させる余白を残すのが大切です。',
      '2048を作ってもゲームは終わりません。そのままさらに大きな数字を目指せます。',
    ],
  },

  es: {
    tagline: 'Desliza el tablero y fusiona números iguales.',
    score: 'Puntos', top: 'Mayor', best: 'Récord',
    readyTitle: 'Desliza y fusiona',
    readyBody: 'Desliza y todas las fichas se moverán hacia el mismo lado.<br>Dos números iguales se fusionan en uno del doble.',
    legend1: 'Desliza arriba, abajo, izquierda o derecha',
    legend2: 'Los números iguales se fusionan y duplican',
    legend3: 'Aparece una ficha nueva tras cada movimiento válido',
    start: 'Empezar',
    overTitle: 'No quedan movimientos',
    retry: 'Otra vez',
    paused: 'En pausa',
    pausedHint: 'Pulsa P otra vez para continuar.',
    resume: 'Continuar',
    help: 'Desliza el tablero o usa ← ↑ → ↓<br>P pausa',
    gain: '+{n}',
    bigOne: '¡2048!',
    keepGoing: 'Puedes seguir jugando.',
    about:
      'Un puzle de números en un tablero de 4×4. Cada deslizamiento mueve todas las fichas en la misma dirección, y dos números iguales se fusionan en uno con el doble de valor. Después de cada movimiento que cambia el tablero aparece una ficha nueva. No hay límite de tiempo; la partida termina cuando ya no puedes mover ni fusionar nada.',
    how: [
      'Desliza en cualquier dirección para mover todas las fichas.',
      'Dos números iguales que se encuentran se fusionan en uno.',
      'Aparece una ficha nueva después de cada movimiento válido.',
      'La partida termina cuando ya no se puede mover ni fusionar nada.',
    ],
    tips: [
      'Elige una esquina para tu número más grande e intenta mantenerlo allí.',
      'La mayoría de las fichas nuevas son 2 y de vez en cuando aparece un 4. Deja espacio para combinarlas.',
      'Llegar a 2048 no termina la partida. Puedes seguir para conseguir números aún mayores.',
    ],
  },

  fr: {
    tagline: 'Fais glisser le plateau et fusionne les nombres identiques.',
    score: 'Score', top: 'Plus grand', best: 'Record',
    readyTitle: 'Glisse et fusionne',
    readyBody: 'Fais glisser : toutes les tuiles partent dans la même direction.<br>Deux nombres identiques fusionnent en un nombre deux fois plus grand.',
    legend1: 'Glisse vers le haut, le bas, la gauche ou la droite',
    legend2: 'Les nombres identiques fusionnent et doublent',
    legend3: 'Une nouvelle tuile apparaît après chaque coup valide',
    start: 'Commencer',
    overTitle: 'Plus aucun coup possible',
    retry: 'Rejouer',
    paused: 'En pause',
    pausedHint: 'Appuie encore sur P pour continuer.',
    resume: 'Reprendre',
    help: 'Fais glisser le plateau ou utilise ← ↑ → ↓<br>P pause',
    gain: '+{n}',
    bigOne: '2048 !',
    keepGoing: 'Tu peux continuer à jouer.',
    about:
      'Un puzzle de nombres sur une grille de 4×4. Chaque glissement déplace toutes les tuiles dans la même direction, et deux nombres identiques fusionnent en une tuile de valeur double. Une nouvelle tuile apparaît après chaque coup qui modifie le plateau. Il n’y a pas de limite de temps : la partie s’arrête uniquement lorsqu’aucun mouvement ni aucune fusion n’est possible.',
    how: [
      'Fais glisser dans une direction pour déplacer toutes les tuiles.',
      'Deux nombres identiques qui se rencontrent fusionnent en un seul.',
      'Une nouvelle tuile apparaît après chaque coup valide.',
      'La partie se termine lorsqu’aucun mouvement ni aucune fusion n’est possible.',
    ],
    tips: [
      'Choisis un coin pour ton plus grand nombre et essaie de l’y garder.',
      'La plupart des nouvelles tuiles sont des 2, avec parfois un 4. Garde de la place pour les fusionner.',
      'Atteindre 2048 ne termine pas la partie. Tu peux continuer pour créer des nombres encore plus grands.',
    ],
  },

  zh: {
    tagline: '滑动棋盘，把相同数字合成更大的数。',
    score: '分数', top: '最大数', best: '最高',
    readyTitle: '滑动合成',
    readyBody: '往一个方向滑，所有数字都会一起移动。<br>两个相同数字碰到一起，就会合成一个两倍大的数。',
    legend1: '向上、下、左、右滑动',
    legend2: '相同数字合并并翻倍',
    legend3: '每次有效移动后出现一个新数字',
    start: '开始',
    overTitle: '没有可走的步骤了',
    retry: '再玩一次',
    paused: '暂停',
    pausedHint: '再按一次 P 继续。',
    resume: '继续',
    help: '滑动棋盘，或按 ← ↑ → ↓<br>P 暂停',
    gain: '+{n}',
    bigOne: '2048！',
    keepGoing: '还可以继续挑战更大的数字。',
    about:
      '一个在 4×4 棋盘上合并数字的小游戏。每次滑动都会让所有数字朝同一个方向移动，两个相同数字碰到一起后会合成一个两倍大的数字。只要这一步让棋盘发生变化，就会出现一个新数字。没有时间限制，只有在完全无法移动或合并时才会结束。',
    how: [
      '向任意方向滑动，让所有数字一起移动。',
      '两个相同数字碰到一起会合成一个。',
      '每次有效移动后都会出现一个新数字。',
      '无法继续移动或合并时，本局结束。',
    ],
    tips: [
      '选一个角落放最大的数字，并尽量让它一直留在那里。',
      '新出现的数字大多是 2，偶尔会出现 4。记得留出合并空间。',
      '合成 2048 后游戏不会结束，还可以继续挑战更大的数字。',
    ],
  },
};
