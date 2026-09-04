// 벽돌 깨기 안에서 쓰는 글.
// 게임 이름은 여기 없다 — `src/data/games.ts` 에 있다.
//
// 공통 말(시작 · 다시 하기 · 이어 하기 · 잠깐 멈춤)은
// `src/games/hoppy-jump/strings.ts` 와 똑같이 쓴다. 게임마다 다르게 부르지 않는다.

import type { Lang } from '../../i18n';

export type S = {
  tagline: string;
  /** HUD 세 칸. 마지막은 늘 「최고」 */
  score: string;
  level: string;
  best: string;
  readyTitle: string;
  readyBody: string;
  start: string;
  overTitle: string;
  retry: string;
  paused: string;
  pausedHint: string;
  resume: string;
  /** 판 하나를 깼을 때. `{n}` 에 판 번호가 들어간다 */
  clearTitle: string;
  clearNext: string;
  /** 12판을 다 깼을 때 */
  allTitle: string;
  allNote: string;
  /** 캔버스 아래 아이템 목록 */
  good: string;
  bad: string;
  itWide: string;
  itMulti: string;
  itSlow: string;
  itPierce: string;
  itNarrow: string;
  itFast: string;
  help: string;
  /** 게임 소개 두세 문장. 검색엔진이 읽는 본문이기도 하다. */
  about: string;
  /** 「어떻게 하나」 — 정확히 네 줄. */
  how: [string, string, string, string];
  /** 「잘하는 요령」 — 정확히 세 줄. 코드에서 확인한 사실만 쓴다. */
  tips: [string, string, string];
};

export const STR: Record<Lang, S> = {
  en: {
    tagline: 'Bounce, break, clear the board',
    score: 'SCORE', level: 'LEVEL', best: 'BEST',
    readyTitle: 'Break them all!',
    readyBody: 'Drag to move the paddle.<br>Round drops help you, spiky ones hurt.',
    start: 'Start',
    overTitle: 'Out of balls!',
    retry: 'Play Again',
    paused: 'Paused',
    pausedHint: 'Press P again to keep going.',
    resume: 'Resume',
    clearTitle: 'Level {n} cleared!',
    clearNext: 'Next Level',
    allTitle: 'All 12 levels cleared!',
    allNote: 'It loops back to level 1, but the ball stays fast.',
    good: 'Good', bad: 'Bad',
    itWide: 'Wider paddle',
    itMulti: 'Extra balls',
    itSlow: 'Slower ball',
    itPierce: 'Pierce',
    itNarrow: 'Shorter paddle',
    itFast: 'Faster ball',
    help: 'Drag to move the paddle',
    about: 'A brick breaker game. Bounce the ball off your paddle to clear every brick above. Breaking a brick sometimes drops an item — round ones help you, spiky ones hurt. Clear the board to move on. There are 12 levels, and you lose when you drop the ball three times.',
    how: [
      'Slide the paddle left and right with your finger or mouse to keep the ball in play.',
      'Clear every brick to reach the next level. There are 12 levels in all.',
      'Round drops are good and spiky drops are bad. Catch or dodge them with the paddle.',
      'Dropping the ball costs a life. Lose three and the game ends.',
    ],
    tips: [
      'When you only have one ball, the ball comes first. Chasing an item is the most common way to lose a life.',
      'The middle of the paddle sends the ball straight; the edges send it out wide. Use an edge to reach a brick stuck in a corner.',
      'A good item cancels a bad one right away. If your paddle got shrunk, go for the widening drop.',
    ],
  },
  ko: {
    tagline: '공을 튕겨 벽돌을 다 깨세요',
    score: '점수', level: '판', best: '최고',
    readyTitle: '벽돌을 다 깨보자!',
    readyBody: '막대를 움직여 공을 받아내세요.<br>둥근 아이템은 좋은 것, 뾰족한 것은 나쁜 것이에요.',
    start: '시작',
    overTitle: '공을 다 놓쳤다!',
    retry: '다시 하기',
    paused: '잠깐 멈춤',
    pausedHint: 'P 키를 다시 누르면 이어서 해요.',
    resume: '이어 하기',
    clearTitle: '판 {n} 깼다!',
    clearNext: '다음 판',
    allTitle: '12판 전부 깼어요!',
    allNote: '판 1부터 다시 돌지만 공은 빠른 그대로예요.',
    good: '좋은 것', bad: '나쁜 것',
    itWide: '막대 길어짐',
    itMulti: '공 늘어남',
    itSlow: '공 느려짐',
    itPierce: '관통',
    itNarrow: '막대 짧아짐',
    itFast: '공 빨라짐',
    help: '손가락이나 마우스로 막대를 움직여요',
    about: '공을 튕겨 위쪽 벽돌을 모두 깨는 벽돌깨기 게임이에요. 막대를 좌우로 움직여 공을 받아내고, 벽돌을 깨면 가끔 아이템이 떨어집니다. 둥근 아이템은 막대가 길어지거나 공이 늘어나고, 뾰족한 아이템은 그 반대예요. 한 판을 다 깨면 다음 판으로 넘어가고, 판은 모두 12개입니다. 공을 세 번 놓치면 끝나요.',
    how: [
      '막대를 손가락이나 마우스로 좌우로 움직여 공을 받아내세요.',
      '위쪽 벽돌을 다 깨면 다음 판으로 넘어갑니다. 판은 모두 12개예요.',
      '떨어지는 둥근 아이템은 좋은 것, 뾰족한 아이템은 나쁜 것입니다.',
      '공을 바닥으로 놓치면 목숨이 하나 줄고, 세 번 놓치면 끝나요.',
    ],
    tips: [
      '공이 하나뿐일 때는 아이템보다 공이 먼저예요. 아이템을 쫓다 공을 놓치는 게 가장 흔한 실수입니다.',
      '막대 가운데로 받으면 공이 곧게, 끝으로 받으면 크게 옆으로 튑니다. 구석에 남은 벽돌은 끝으로 받아 노려요.',
      '좋은 아이템을 받으면 나쁜 효과가 바로 풀려요. 막대가 짧아졌으면 「막대 길어짐」을 노리세요.',
    ],
  },
  ja: {
    tagline: 'ボールを弾ませて全部壊そう',
    score: 'スコア', level: 'レベル', best: 'ベスト',
    readyTitle: '全部崩そう！',
    readyBody: 'パドルを動かしてボールを受け止めよう。<br>丸いアイテムは良いもの、とがったものは悪いものです。',
    start: 'スタート',
    overTitle: 'ボールがなくなった！',
    retry: 'もう一度',
    paused: '一時停止',
    pausedHint: 'Pキーをもう一度押すと続きます。',
    resume: 'つづける',
    clearTitle: 'ステージ{n}クリア！',
    clearNext: '次のステージ',
    allTitle: '全12ステージ制覇！',
    allNote: 'ステージ1に戻りますが、ボールは速いままです。',
    good: '良い', bad: '悪い',
    itWide: 'パドルが伸びる',
    itMulti: 'ボールが増える',
    itSlow: 'ボールが遅くなる',
    itPierce: '貫通',
    itNarrow: 'パドルが縮む',
    itFast: 'ボールが速くなる',
    help: 'ドラッグでパドルを動かす',
    about: 'ボールを跳ね返して上のブロックを全部壊すブロック崩しです。パドルを左右に動かしてボールを受け止めましょう。ブロックを壊すと、ときどきアイテムが落ちてきます。丸いものは良いアイテム、とがったものは悪いアイテムです。全部壊すと次のステージへ。ステージは全部で12あり、ボールを3回落とすと終わりです。',
    how: [
      '指かマウスでパドルを左右に動かし、ボールを受け止めよう。',
      '上のブロックを全部壊すと次のステージへ。ステージは全部で12です。',
      '落ちてくる丸いアイテムは良いもの、とがったアイテムは悪いものです。',
      'ボールを落とすとライフが1つ減り、3回でゲームオーバーです。',
    ],
    tips: [
      'ボールが1つのときは、アイテムよりボールが先。アイテムを追ってボールを落とすのが一番多い失敗です。',
      'パドルの真ん中で受けるとまっすぐ、端で受けると大きく横へ飛びます。隅に残ったブロックは端で狙おう。',
      '良いアイテムを取ると悪い効果はすぐ消えます。パドルが縮んだら「パドルが伸びる」を狙おう。',
    ],
  },
  es: {
    tagline: 'Rebota y rompe todos los ladrillos',
    score: 'PUNTOS', level: 'NIVEL', best: 'RÉCORD',
    readyTitle: '¡Rómpelos todos!',
    readyBody: 'Arrastra para mover la paleta.<br>Los objetos redondos ayudan, los puntiagudos perjudican.',
    start: 'Empezar',
    overTitle: '¡Te quedaste sin bolas!',
    retry: 'Otra vez',
    paused: 'En pausa',
    pausedHint: 'Pulsa P otra vez para seguir.',
    resume: 'Continuar',
    clearTitle: '¡Nivel {n} superado!',
    clearNext: 'Siguiente nivel',
    allTitle: '¡Los 12 niveles!',
    allNote: 'Vuelve al nivel 1, pero la bola sigue rápida.',
    good: 'Bueno', bad: 'Malo',
    itWide: 'Paleta larga',
    itMulti: 'Más bolas',
    itSlow: 'Bola lenta',
    itPierce: 'Perforante',
    itNarrow: 'Paleta corta',
    itFast: 'Bola rápida',
    help: 'Arrastra para mover la paleta',
    about: 'Un juego de romper ladrillos. Rebota la bola con la paleta para destruir todos los ladrillos de arriba. Al romper un ladrillo a veces cae un objeto: los redondos te ayudan y los puntiagudos te perjudican. Limpia la pantalla para pasar de nivel. Hay 12 niveles y pierdes al dejar caer la bola tres veces.',
    how: [
      'Mueve la paleta a izquierda y derecha con el dedo o el ratón para no perder la bola.',
      'Rompe todos los ladrillos para pasar al siguiente nivel. Hay 12 niveles en total.',
      'Los objetos redondos son buenos y los puntiagudos son malos. Atrápalos o esquívalos.',
      'Cada bola perdida te cuesta una vida. Con tres, se acaba la partida.',
    ],
    tips: [
      'Con una sola bola, la bola es lo primero. Perseguir un objeto es la forma más común de perder una vida.',
      'El centro de la paleta devuelve la bola recta y los bordes la abren mucho. Usa un borde para llegar a un ladrillo en la esquina.',
      'Un objeto bueno cancela al instante uno malo. Si la paleta se encogió, busca el que la alarga.',
    ],
  },
  fr: {
    tagline: 'Fais rebondir et casse tout',
    score: 'SCORE', level: 'NIVEAU', best: 'RECORD',
    readyTitle: 'Casse-les toutes !',
    readyBody: 'Fais glisser pour déplacer la raquette.<br>Les bonus ronds t’aident, les pointus te gênent.',
    start: 'Commencer',
    overTitle: 'Plus de balles !',
    retry: 'Rejouer',
    paused: 'En pause',
    pausedHint: 'Appuie encore sur P pour continuer.',
    resume: 'Reprendre',
    clearTitle: 'Niveau {n} terminé !',
    clearNext: 'Niveau suivant',
    allTitle: 'Les 12 niveaux !',
    allNote: 'On repart au niveau 1, mais la balle reste rapide.',
    good: 'Bon', bad: 'Mauvais',
    itWide: 'Raquette longue',
    itMulti: 'Balles en plus',
    itSlow: 'Balle lente',
    itPierce: 'Perforant',
    itNarrow: 'Raquette courte',
    itFast: 'Balle rapide',
    help: 'Fais glisser pour déplacer la raquette',
    about: 'Un casse-briques. Fais rebondir la balle sur ta raquette pour détruire toutes les briques du haut. Casser une brique fait parfois tomber un bonus : les ronds t’aident, les pointus te gênent. Vide l’écran pour passer au niveau suivant. Il y a 12 niveaux, et la partie s’arrête quand tu laisses tomber la balle trois fois.',
    how: [
      'Déplace la raquette de gauche à droite au doigt ou à la souris pour rattraper la balle.',
      'Casse toutes les briques pour passer au niveau suivant. Il y a 12 niveaux en tout.',
      'Les bonus ronds sont bons, les pointus sont mauvais. Attrape-les ou évite-les.',
      'Chaque balle perdue coûte une vie. À la troisième, la partie est finie.',
    ],
    tips: [
      'Avec une seule balle, la balle passe avant tout. Courir après un bonus est la façon la plus courante de perdre une vie.',
      'Le centre de la raquette renvoie la balle droit, les bords l’envoient très sur le côté. Sers-toi d’un bord pour atteindre une brique coincée dans un coin.',
      'Un bon bonus annule aussitôt un mauvais. Si ta raquette a rétréci, vise celui qui l’allonge.',
    ],
  },
  zh: {
    tagline: '弹球，打碎所有砖块',
    score: '分数', level: '关卡', best: '最高',
    readyTitle: '全部打碎！',
    readyBody: '拖动挡板接住小球。<br>圆形道具是好的，尖角道具是坏的。',
    start: '开始',
    overTitle: '球用完了！',
    retry: '再玩一次',
    paused: '暂停',
    pausedHint: '再按一次 P 继续。',
    resume: '继续',
    clearTitle: '第{n}关通过！',
    clearNext: '下一关',
    allTitle: '12关全部通关！',
    allNote: '回到第1关，但小球依然很快。',
    good: '好', bad: '坏',
    itWide: '挡板变长',
    itMulti: '多球',
    itSlow: '小球变慢',
    itPierce: '穿透',
    itNarrow: '挡板变短',
    itFast: '小球变快',
    help: '拖动来移动挡板',
    about: '这是一个打砖块游戏。用挡板把小球弹回去，打碎上方所有砖块。打碎砖块时有时会掉下道具，圆形的是好道具，尖角的是坏道具。清空一关就进入下一关，一共有12关。掉球三次就结束。',
    how: [
      '用手指或鼠标左右移动挡板，接住小球。',
      '打碎全部砖块就进入下一关，一共有12关。',
      '掉下来的圆形道具是好的，尖角道具是坏的。',
      '每漏掉一次球减少一条命，三次之后游戏结束。',
    ],
    tips: [
      '只有一个球时，先顾球。追道具而漏球是最常见的失误。',
      '用挡板中间接球，球会直着弹回；用边缘接球，球会大幅往侧面弹开。角落的砖块用边缘去够。',
      '吃到好道具会立刻解除坏效果。挡板变窄时，去接「挡板变长」。',
    ],
  },
};
