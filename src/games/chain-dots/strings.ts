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
    tagline: 'Link matching beads and clear them.',
    score: 'Score', moves: 'Moves', best: 'Best', cleared: 'Beads',
    readyTitle: 'Link Them Up',
    readyBody: 'Drag across matching beads.<br>Clear as many as you can in 25 moves.',
    legend1: 'Link beads of the same colour',
    legend2: 'Three or more to clear',
    legend3: 'Close a loop to clear that whole colour',
    start: 'Start',
    overTitle: 'Out of moves!',
    retry: 'Play Again',
    paused: 'Paused',
    pausedHint: 'Press P again to keep going.',
    resume: 'Resume',
    help: 'Press and drag across matching beads, then let go<br>← ↑ → ↓ move · Space link · Enter release · P pause',
    gain: '+{n}',
    loopTag: 'Whole colour cleared!',
    about:
      'A no-timer puzzle about linking neighbouring beads of the same colour. Connect at least three and let go to clear them; your score is the number of beads cleared squared. You have 25 moves, and the game ends when you use the last one.',
    how: [
      'Press a bead and drag through neighbouring beads of the same colour.',
      'You can connect up, down, left and right, but not diagonally.',
      'Let go to clear the chain. Fewer than three beads will not clear.',
      'The game ends after you use all 25 moves.',
    ],
    tips: [
      'Score is based on the square of the number cleared, so one chain of 10 is worth far more than three chains of 3.',
      'Every clear costs one move no matter how long the chain is, so keep linking before you let go.',
      'Loop back onto a bead already in your chain to close a loop and clear every bead of that colour. A 2×2 block of one colour is the smallest possible loop.',
    ],
  },
  ko: {
    tagline: '같은 색 구슬을 길게 이어 지워보세요.',
    score: '점수', moves: '남은 횟수', best: '최고', cleared: '지운 구슬',
    readyTitle: '같은 색끼리 쭉!',
    readyBody: '같은 색 구슬을 이어 그어요.<br>25번 안에 최대한 많이 지워보세요.',
    legend1: '같은 색 구슬끼리 연결',
    legend2: '세 개 이상이면 사라져요',
    legend3: '고리를 만들면 그 색이 전부 사라져요',
    start: '시작',
    overTitle: '횟수를 다 썼어요!',
    retry: '다시 하기',
    paused: '잠깐 멈춤',
    pausedHint: 'P 키를 다시 누르면 이어서 해요.',
    resume: '이어 하기',
    help: '같은 색 구슬을 누른 채 이어 그린 뒤 손을 떼요<br>← ↑ → ↓ 이동 · 스페이스 연결 · 엔터 놓기 · P 멈춤',
    gain: '+{n}',
    loopTag: '그 색 전부 삭제!',
    about:
      '시간 제한 없이 같은 색 구슬을 이어 지우는 퍼즐이에요. 상하좌우로 붙어 있는 같은 색 구슬을 세 개 이상 연결한 뒤 손을 떼면 사라지고, 지운 개수의 제곱만큼 점수를 얻습니다. 총 25번 움직일 수 있고, 모두 사용하면 게임이 끝나요.',
    how: [
      '구슬 하나를 누르고 상하좌우로 붙어 있는 같은 색 구슬을 이어요.',
      '위·아래·왼쪽·오른쪽으로만 연결할 수 있고 대각선은 안 돼요.',
      '손을 떼면 연결한 구슬이 사라져요. 세 개보다 적으면 지워지지 않습니다.',
      '총 25번을 모두 사용하면 끝나요.',
    ],
    tips: [
      '점수는 지운 개수의 제곱이에요. 세 개씩 세 번 지우는 것보다 열 개를 한 번에 지우는 점수가 훨씬 높습니다.',
      '몇 개를 지우든 한 번 지우면 횟수는 하나만 줄어요. 손을 떼기 전에 최대한 길게 이어보세요.',
      '이미 연결한 구슬로 다시 돌아가 고리를 만들면 그 색 구슬이 판에서 전부 사라져요. 같은 색 2×2 네 칸이 가장 작은 고리입니다.',
    ],
  },
  ja: {
    tagline: '同じ色のビーズを長くつないで消そう。',
    score: 'スコア', moves: '残り手数', best: 'ベスト', cleared: '消した数',
    readyTitle: '同じ色をつなごう',
    readyBody: '同じ色のビーズをなぞってつなげよう。<br>25手でできるだけたくさん消そう。',
    legend1: '同じ色のビーズをつなぐ',
    legend2: '3つ以上で消える',
    legend3: '輪を作るとその色が全部消える',
    start: 'スタート',
    overTitle: '手数を使い切った！',
    retry: 'もう一度',
    paused: '一時停止',
    pausedHint: 'Pキーをもう一度押すと続きます。',
    resume: 'つづける',
    help: '同じ色のビーズを押したままなぞり、離すと消える<br>← ↑ → ↓ 移動 · スペースでつなぐ · Enterで離す · Pで一時停止',
    gain: '+{n}',
    loopTag: 'その色が全部消える！',
    about:
      '時間制限なしで、同じ色のビーズをつないで消していくパズルです。上下左右に隣り合う同じ色を3つ以上つなぎ、指を離すと消えます。スコアは消した数の二乗。使える手数は25回で、すべて使い切るとゲーム終了です。',
    how: [
      'ビーズを押したまま、上下左右に隣り合う同じ色をなぞります。',
      'つなげられるのは上下左右だけ。斜めにはつながりません。',
      '指を離すと消えます。3つ未満なら消えません。',
      '25回の手数を使い切ると終了です。',
    ],
    tips: [
      'スコアは消した数の二乗です。3つを3回消すより、10個を一度に消すほうがずっと高得点になります。',
      '何個消しても使う手数は1回だけ。指を離す前に、できるだけ長くつなげましょう。',
      'すでにつないだビーズに戻って輪を作ると、その色のビーズがすべて消えます。同じ色の2×2が最小の輪です。',
    ],
  },
  es: {
    tagline: 'Une bolitas del mismo color y haz cadenas largas.',
    score: 'Puntos', moves: 'Turnos', best: 'Récord', cleared: 'Bolitas',
    readyTitle: '¡A enlazar!',
    readyBody: 'Arrastra por bolitas del mismo color.<br>Elimina todas las que puedas en 25 turnos.',
    legend1: 'Une bolitas del mismo color',
    legend2: 'Tres o más para eliminarlas',
    legend3: 'Cierra un bucle y desaparece todo ese color',
    start: 'Empezar',
    overTitle: '¡Sin turnos!',
    retry: 'Otra vez',
    paused: 'En pausa',
    pausedHint: 'Pulsa P otra vez para seguir.',
    resume: 'Continuar',
    help: 'Mantén pulsado y arrastra por el mismo color, luego suelta<br>← ↑ → ↓ mover · Espacio enlazar · Enter soltar · P pausa',
    gain: '+{n}',
    loopTag: '¡Color completo!',
    about:
      'Un puzle sin límite de tiempo en el que unes bolitas vecinas del mismo color. Conecta al menos tres y suelta para eliminarlas; la puntuación es el cuadrado del número de bolitas eliminadas. Tienes 25 turnos y la partida termina al gastar el último.',
    how: [
      'Pulsa una bolita y arrastra por las vecinas del mismo color.',
      'Puedes enlazar arriba, abajo, a izquierda y a derecha, pero no en diagonal.',
      'Suelta para eliminar la cadena. Con menos de tres no desaparece nada.',
      'La partida termina cuando gastas los 25 turnos.',
    ],
    tips: [
      'La puntuación es el número eliminado al cuadrado: una cadena de 10 vale mucho más que tres cadenas de 3.',
      'Cada eliminación gasta un solo turno, sea corta o larga, así que alarga la cadena antes de soltar.',
      'Vuelve a pasar por una bolita que ya forme parte de tu cadena para cerrar un bucle y eliminar todo ese color. Un bloque de 2×2 del mismo color es el bucle más pequeño posible.',
    ],
  },
  fr: {
    tagline: 'Relie les perles de même couleur et forme de longues chaînes.',
    score: 'Score', moves: 'Coups', best: 'Record', cleared: 'Perles',
    readyTitle: 'Relie-les !',
    readyBody: 'Relie les perles de même couleur.<br>Efface-en le plus possible en 25 coups.',
    legend1: 'Relie les perles de même couleur',
    legend2: 'Trois ou plus pour les effacer',
    legend3: 'Ferme une boucle pour effacer toute cette couleur',
    start: 'Commencer',
    overTitle: 'Plus de coups !',
    retry: 'Rejouer',
    paused: 'En pause',
    pausedHint: 'Appuie encore sur P pour continuer.',
    resume: 'Reprendre',
    help: 'Maintiens et glisse sur la même couleur, puis relâche<br>← ↑ → ↓ déplacer · Espace relier · Entrée relâcher · P pause',
    gain: '+{n}',
    loopTag: 'Toute la couleur !',
    about:
      'Un puzzle sans chronomètre où tu relies des perles voisines de même couleur. Relie-en au moins trois puis relâche pour les effacer ; le score correspond au carré du nombre de perles supprimées. Tu disposes de 25 coups et la partie se termine après le dernier.',
    how: [
      'Appuie sur une perle et glisse sur les perles voisines de même couleur.',
      'Tu peux relier vers le haut, le bas, la gauche et la droite, jamais en diagonale.',
      'Relâche pour effacer la chaîne. Avec moins de trois perles, rien ne disparaît.',
      'La partie se termine une fois les 25 coups utilisés.',
    ],
    tips: [
      'Le score est le carré du nombre de perles effacées : une chaîne de 10 rapporte bien plus que trois chaînes de 3.',
      'Chaque suppression coûte un seul coup, quelle que soit la longueur de la chaîne. Continue donc à relier avant de relâcher.',
      'Repasse sur une perle déjà présente dans ta chaîne pour fermer une boucle et effacer toutes les perles de cette couleur. Un carré de 2×2 de même couleur est la plus petite boucle possible.',
    ],
  },
  zh: {
    tagline: '连接同色珠子，尽量连得更长。',
    score: '分数', moves: '剩余次数', best: '最高', cleared: '消除数',
    readyTitle: '把同色的连起来',
    readyBody: '划过同色珠子把它们连起来。<br>在 25 次机会里尽量多消除。',
    legend1: '连接同色珠子',
    legend2: '至少三个才能消除',
    legend3: '围成一圈就能消掉整个颜色',
    start: '开始',
    overTitle: '次数用完了！',
    retry: '再玩一次',
    paused: '暂停',
    pausedHint: '再按一次 P 继续。',
    resume: '继续',
    help: '按住并划过同色珠子，松开即可消除<br>← ↑ → ↓ 移动 · 空格连接 · 回车松开 · P 暂停',
    gain: '+{n}',
    loopTag: '这个颜色全消！',
    about:
      '这是一款没有时间限制的连珠子小游戏。把上下左右相邻的同色珠子连起来，至少三个后松手即可消除；得分等于消除数量的平方。每局共有 25 次机会，全部用完后游戏结束。',
    how: [
      '按住一颗珠子，划过上下左右相邻的同色珠子。',
      '只能上下左右连接，不能走斜线。',
      '松手后会消除整条连接；少于三个则不会消失。',
      '25 次机会全部用完后，本局结束。',
    ],
    tips: [
      '得分是消除数量的平方，所以一次消掉 10 个远比三次各消 3 个分数高。',
      '无论一次消掉多少颗，都只扣一次机会，所以松手前尽量多连几颗。',
      '重新连回已经在链条里的珠子可以围成一圈，并消除场上所有这个颜色的珠子。同色 2×2 方块就是最小的一圈。',
    ],
  },
};
