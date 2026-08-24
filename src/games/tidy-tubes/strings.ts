// 컬러 정리 안에서 쓰는 글.
// 게임 이름은 여기 없다 — `src/data/games.ts` 에 있다.

import type { Lang } from '../../i18n';

export type S = {
  tagline: string;
  level: string;
  undo: string;
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
  cleared: string;
  levelTag: string;
  stuck: string;
  undoBtn: string;
  about: string;
  how: [string, string, string, string];
  tips: [string, string, string];
};

export const STR: Record<Lang, S> = {
  en: {
    tagline: 'Sort every tube by colour. No timer.',
    level: 'Level', undo: 'Undo', best: 'Best',
    readyTitle: 'One Colour per Tube',
    readyBody: 'Tap a tube to pick up its top ball.<br>Tap another tube to place it. Take your time.',
    legend1: 'Place a ball on the same colour',
    legend2: 'Or move it into an empty tube',
    legend3: 'Four matching balls complete a tube',
    start: 'Start',
    overTitle: 'No moves left',
    retry: 'Play Again',
    paused: 'Paused',
    pausedHint: 'Press P again to keep going.',
    resume: 'Resume',
    help: 'Tap one tube, then another · Z undo<br>← → choose · Space or Enter pick up / place · P pause',
    cleared: 'All sorted!',
    levelTag: 'Level {n}',
    stuck: 'No moves left',
    undoBtn: 'Undo',
    about:
      'Sort the coloured balls until each tube contains only one colour. You can place a ball on the same colour or into an empty tube, so empty tubes are the space you use to rearrange everything. There is no timer. You get five undos for the entire run, and they do not refill between levels.',
    how: [
      'Tap a tube to pick up the top ball.',
      'Tap another tube to place the ball there.',
      'A tube is complete when it holds four balls of the same colour.',
      'Sort every tube to move on to the next level.',
    ],
    tips: [
      'Keep at least one empty tube available whenever you can. It gives you room to rearrange colours.',
      'You only get five undos for the whole run, so save them for real mistakes.',
      'From level 6, you get one empty tube instead of two, so planning ahead matters much more.',
    ],
  },

  ko: {
    tagline: '색 구슬을 나눠 담아 한 튜브에 한 색만 남기세요.',
    level: '단계', undo: '되돌리기', best: '최고',
    readyTitle: '한 튜브에 한 가지 색',
    readyBody: '튜브를 누르면 맨 위 구슬을 집어요.<br>다른 튜브를 누르면 그곳에 놓습니다. 시간 제한은 없어요.',
    legend1: '같은 색 구슬 위에 놓기',
    legend2: '또는 빈 튜브에 옮기기',
    legend3: '같은 색 네 개를 모으면 완성',
    start: '시작',
    overTitle: '더 옮길 수 없어요',
    retry: '다시 하기',
    paused: '잠깐 멈춤',
    pausedHint: 'P 키를 다시 누르면 이어서 할 수 있어요.',
    resume: '이어 하기',
    help: '튜브 하나를 누른 뒤 다른 튜브 누르기 · Z 되돌리기<br>← → 선택 · 스페이스·엔터로 집기/놓기 · P 멈춤',
    cleared: '정리 완료!',
    levelTag: '{n}단계',
    stuck: '더 옮길 수 없어요',
    undoBtn: '되돌리기',
    about:
      '여러 튜브에 뒤섞인 색 구슬을 정리해, 각 튜브에 한 가지 색만 남기는 퍼즐이에요. 구슬은 같은 색 위나 빈 튜브에만 놓을 수 있어서 빈 튜브를 어떻게 쓰느냐가 중요합니다. 시간 제한은 없어요. 되돌리기는 한 판 전체에서 다섯 번만 쓸 수 있고, 다음 단계로 넘어가도 다시 채워지지 않습니다.',
    how: [
      '튜브를 눌러 맨 위 구슬을 집어요.',
      '다른 튜브를 눌러 구슬을 옮겨요.',
      '같은 색 구슬 네 개가 모이면 그 튜브는 완성입니다.',
      '모든 튜브를 정리하면 다음 단계로 넘어가요.',
    ],
    tips: [
      '가능하면 빈 튜브 하나는 남겨두세요. 색을 다시 배치할 여유 공간이 됩니다.',
      '되돌리기는 한 판에 다섯 번뿐이에요. 꼭 필요할 때 쓰는 게 좋아요.',
      '6단계부터 빈 튜브가 두 개에서 하나로 줄어들어 미리 순서를 생각해야 합니다.',
    ],
  },

  ja: {
    tagline: '色ごとに分けて、1本のチューブを1色にそろえよう。',
    level: 'レベル', undo: 'もどす', best: 'ベスト',
    readyTitle: '1本につき1色',
    readyBody: 'チューブを押すと一番上のボールを持ち上げます。<br>別のチューブを押すとそこに置けます。時間制限はありません。',
    legend1: '同じ色の上に置く',
    legend2: 'または空のチューブへ移す',
    legend3: '同じ色を4個そろえると完成',
    start: 'スタート',
    overTitle: 'もう動かせない',
    retry: 'もう一度',
    paused: '一時停止',
    pausedHint: 'Pキーをもう一度押すと続けられます。',
    resume: 'つづける',
    help: 'チューブを1本選び、次のチューブを選ぶ · Zでもどす<br>← → 選択 · スペース・Enterで持つ/置く · Pで一時停止',
    cleared: '全部そろった！',
    levelTag: 'レベル{n}',
    stuck: 'もう動かせない',
    undoBtn: 'もどす',
    about:
      '複数のチューブに混ざった色付きボールを、1本につき1色になるように並べ替えるパズルです。ボールは同じ色の上か空のチューブにしか置けないため、空きをどう使うかがポイント。時間制限はありません。もどせるのは1回のプレイで5回までで、レベルが上がっても補充されません。',
    how: [
      'チューブを押して一番上のボールを持ち上げます。',
      '別のチューブを押してボールを移します。',
      '同じ色のボールが4個そろうと、そのチューブは完成です。',
      'すべてのチューブをそろえると次のレベルへ進みます。',
    ],
    tips: [
      'できるだけ空のチューブを1本残しておくと、並べ替えやすくなります。',
      'もどせるのは1回のプレイで5回だけ。大きなミスのために残しておきましょう。',
      'レベル6から空のチューブが2本から1本に減るので、先を読むことが重要になります。',
    ],
  },

  es: {
    tagline: 'Separa los colores hasta dejar uno por tubo. Sin reloj.',
    level: 'Nivel', undo: 'Deshacer', best: 'Récord',
    readyTitle: 'Un color por tubo',
    readyBody: 'Toca un tubo para coger la bola de arriba.<br>Toca otro para colocarla. No hay límite de tiempo.',
    legend1: 'Colócala sobre el mismo color',
    legend2: 'O muévela a un tubo vacío',
    legend3: 'Cuatro bolas iguales completan un tubo',
    start: 'Empezar',
    overTitle: 'No quedan movimientos',
    retry: 'Otra vez',
    paused: 'En pausa',
    pausedHint: 'Pulsa P otra vez para continuar.',
    resume: 'Continuar',
    help: 'Toca un tubo y luego otro · Z deshacer<br>← → elegir · Espacio o Enter coger/soltar · P pausa',
    cleared: '¡Todo ordenado!',
    levelTag: 'Nivel {n}',
    stuck: 'Sin movimientos',
    undoBtn: 'Deshacer',
    about:
      'Ordena las bolas de colores hasta que cada tubo contenga un solo color. Solo puedes colocar una bola sobre otra del mismo color o dentro de un tubo vacío, así que los tubos vacíos son tu espacio para reorganizar. No hay límite de tiempo. Tienes cinco oportunidades para deshacer movimientos en toda la partida y no se recuperan al pasar de nivel.',
    how: [
      'Toca un tubo para coger la bola de arriba.',
      'Toca otro tubo para colocarla allí.',
      'Un tubo se completa con cuatro bolas del mismo color.',
      'Ordena todos los tubos para pasar al siguiente nivel.',
    ],
    tips: [
      'Intenta mantener al menos un tubo vacío: te dará espacio para reorganizar los colores.',
      'Solo tienes cinco deshacer en toda la partida, así que resérvalos para errores importantes.',
      'A partir del nivel 6 solo hay un tubo vacío en lugar de dos, así que conviene pensar varios movimientos por adelantado.',
    ],
  },

  fr: {
    tagline: 'Trie les couleurs pour n’en garder qu’une par tube. Sans chrono.',
    level: 'Niveau', undo: 'Annuler', best: 'Record',
    readyTitle: 'Une couleur par tube',
    readyBody: 'Appuie sur un tube pour prendre la bille du dessus.<br>Appuie sur un autre pour la poser. Pas de limite de temps.',
    legend1: 'Pose-la sur la même couleur',
    legend2: 'Ou déplace-la vers un tube vide',
    legend3: 'Quatre billes identiques terminent un tube',
    start: 'Commencer',
    overTitle: 'Plus aucun coup possible',
    retry: 'Rejouer',
    paused: 'En pause',
    pausedHint: 'Appuie encore sur P pour continuer.',
    resume: 'Reprendre',
    help: 'Appuie sur un tube, puis sur un autre · Z annuler<br>← → choisir · Espace ou Entrée prendre/poser · P pause',
    cleared: 'Tout est trié !',
    levelTag: 'Niveau {n}',
    stuck: 'Aucun coup possible',
    undoBtn: 'Annuler',
    about:
      'Trie les billes colorées jusqu’à ce que chaque tube ne contienne plus qu’une seule couleur. Une bille ne peut être posée que sur la même couleur ou dans un tube vide : les tubes vides servent donc d’espace de travail pour réorganiser le reste. Il n’y a pas de limite de temps. Tu disposes de cinq annulations pour toute la partie, sans recharge entre les niveaux.',
    how: [
      'Appuie sur un tube pour prendre la bille du dessus.',
      'Appuie sur un autre tube pour y poser la bille.',
      'Un tube est terminé lorsqu’il contient quatre billes de la même couleur.',
      'Trie tous les tubes pour passer au niveau suivant.',
    ],
    tips: [
      'Garde si possible au moins un tube vide : il te donnera de la marge pour réorganiser les couleurs.',
      'Tu n’as que cinq annulations pour toute la partie, alors garde-les pour les vraies erreurs.',
      'À partir du niveau 6, il ne reste qu’un tube vide au lieu de deux : il faut davantage anticiper.',
    ],
  },

  zh: {
    tagline: '把彩球按颜色分开，让每个管子只留一种颜色。',
    level: '关卡', undo: '撤销', best: '最高',
    readyTitle: '一管一种颜色',
    readyBody: '点一个管子拿起最上面的球。<br>再点另一个管子把球放下。没有时间限制。',
    legend1: '放到相同颜色的球上',
    legend2: '或者移到空管子里',
    legend3: '同色四个放满一管即可完成',
    start: '开始',
    overTitle: '没有可走的步骤了',
    retry: '再玩一次',
    paused: '暂停',
    pausedHint: '再按一次 P 继续。',
    resume: '继续',
    help: '先点一个管子，再点另一个 · Z 撤销<br>← → 选择 · 空格或回车拿起/放下 · P 暂停',
    cleared: '全部整理好了！',
    levelTag: '第 {n} 关',
    stuck: '没有可走的步骤',
    undoBtn: '撤销',
    about:
      '把混在多个管子里的彩球重新分类，直到每个管子只剩一种颜色。球只能放在相同颜色的球上，或者移进空管子，所以空管子就是你调整顺序的空间。游戏没有时间限制。整局只有五次撤销机会，进入下一关也不会补充。',
    how: [
      '点一个管子，拿起最上面的球。',
      '再点另一个管子，把球移过去。',
      '同色四个球装满一个管子后，这个管子就完成了。',
      '整理完所有管子即可进入下一关。',
    ],
    tips: [
      '尽量留一个空管子，它能给你更多调整颜色顺序的空间。',
      '整局只有五次撤销机会，最好留给真正的失误。',
      '从第 6 关开始，空管子会从两个减少到一个，需要更早规划顺序。',
    ],
  },
};
