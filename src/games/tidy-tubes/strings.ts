// 톡톡 정리 안에서 쓰는 글.
// 게임 이름은 여기 없다 — `src/data/games.ts` 에 있다.

import type { Lang } from '../../i18n';

export type S = {
  tagline: string;
  /** HUD 칸 셋 */
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
  /** 한 판을 다 맞췄을 때 크게 뜨는 글 */
  cleared: string;
  /** 다음 판으로 넘어갈 때 — `{n}` 자리에 단계 */
  levelTag: string;
  /** 옮길 데가 없을 때 뜨는 한 마디 */
  stuck: string;
  /** 되돌리기 단추 옆 짧은 말 */
  undoBtn: string;
  /** 게임 소개 두세 문장. 검색엔진이 읽는 본문이기도 하다. */
  about: string;
  /** 「어떻게 하나」 — 정확히 네 줄. 짧은 명령문. */
  how: [string, string, string, string];
  /** 「잘하는 요령」 — 정확히 세 줄. 코드에서 확인한 사실만. */
  tips: [string, string, string];
};

export const STR: Record<Lang, S> = {
  en: {
    tagline: 'One colour to a tube. No clock.',
    level: 'Level', undo: 'Undo', best: 'Best',
    readyTitle: 'One Colour Each',
    readyBody: 'Tap a tube to lift its top ball.<br>Tap another to drop it. No timer, no rush.',
    legend1: 'A ball moves onto its own colour',
    legend2: 'Or into an empty tube',
    legend3: 'Fill a tube with four of one colour',
    start: 'Start',
    overTitle: 'Nowhere left to move',
    retry: 'Play Again',
    paused: 'Paused',
    pausedHint: 'Press P again to keep going.',
    resume: 'Resume',
    help: 'Tap one tube, then another · Z undo<br>← → pick · Space or Enter lift and drop · P pause',
    cleared: 'All tidy!',
    levelTag: 'Level {n}',
    stuck: 'No moves left',
    undoBtn: 'Undo',
    about:
      'Coloured balls sit jumbled across a row of tubes, and you sort them until each tube holds one colour. A ball only moves onto its own colour or into an empty tube, so the empty ones are the room you have to work in — spend them badly and there is nowhere left to go. There is no clock and nothing chasing you. You get five undos for the whole run, and they are not topped up between levels.',
    how: [
      'Tap a tube to lift its top ball.',
      'Tap another tube to drop it there.',
      'Four of one colour finishes that tube.',
      'Clear every tube to move up a level.',
    ],
    tips: [
      'An empty tube is your working room. Fill one carelessly and you can end up with nowhere to move.',
      'Undos are not refilled when you clear a level — five is all you get for the whole run.',
      'From level 6 you get one empty tube instead of two. That is where it gets hard.',
    ],
  },

  ko: {
    tagline: '한 병에 한 색깔. 시간에 안 쫓겨요.',
    level: '단계', undo: '되돌리기', best: '최고',
    readyTitle: '한 병에 한 색깔',
    readyBody: '병을 누르면 맨 위 알이 들려요.<br>다른 병을 누르면 거기에 놓여요. 시간 제한 없어요.',
    legend1: '같은 색 위에만 놓여요',
    legend2: '빈 병에도 놓여요',
    legend3: '한 색으로 네 개를 채우면 끝',
    start: '시작',
    overTitle: '옮길 데가 없어요',
    retry: '다시 하기',
    paused: '잠깐 멈춤',
    pausedHint: 'P 키를 다시 누르면 이어서 해요.',
    resume: '이어 하기',
    help: '병 하나 누르고, 다른 병 누르기 · Z 되돌리기<br>← → 고르기 · 스페이스나 엔터로 들고 놓기 · P 멈춤',
    cleared: '다 정리했다!',
    levelTag: '{n}단계',
    stuck: '옮길 데가 없어요',
    undoBtn: '되돌리기',
    about:
      '여러 색 알이 병 여러 개에 섞여 있어요. 한 병에 한 색깔만 남게 정리하면 됩니다. 알은 같은 색 위나 빈 병에만 놓을 수 있어서, 빈 병이 곧 움직일 수 있는 여유예요. 함부로 채우면 갈 데가 없어집니다. 시간에 쫓기지 않고 쫓아오는 것도 없어요. 되돌리기는 한 판 내내 다섯 번뿐이고, 단계가 넘어가도 다시 안 채워집니다.',
    how: [
      '병을 누르면 맨 위 알이 들려요.',
      '다른 병을 누르면 거기에 놓여요.',
      '한 색으로 네 개를 채우면 그 병은 끝이에요.',
      '병을 다 정리하면 다음 단계로 가요.',
    ],
    tips: [
      '빈 병이 곧 여유예요. 아무렇게나 채우면 옮길 데가 없어져요.',
      '되돌리기는 단계가 넘어가도 다시 안 채워져요. 한 판에 다섯 번이 전부입니다.',
      '6단계부터 빈 병이 두 개에서 하나로 줄어요. 거기서부터 확 어려워져요.',
    ],
  },

  ja: {
    tagline: '一本に一色。時間に追われない。',
    level: 'レベル', undo: 'もどす', best: 'ベスト',
    readyTitle: '一本に一色',
    readyBody: '瓶を押すといちばん上の玉が持ち上がる。<br>別の瓶を押すとそこに置ける。時間制限なし。',
    legend1: '同じ色の上にだけ置ける',
    legend2: '空の瓶にも置ける',
    legend3: '一色で四つ埋めれば完成',
    start: 'スタート',
    overTitle: '動かせる場所がない',
    retry: 'もう一度',
    paused: '一時停止',
    pausedHint: 'Pキーをもう一度押すと続きます。',
    resume: 'つづける',
    help: '瓶を押して、別の瓶を押す · Zでもどす<br>← → 選ぶ · スペースかEnterで持ち上げて置く · Pで一時停止',
    cleared: '全部そろった！',
    levelTag: 'レベル{n}',
    stuck: '動かせる場所がない',
    undoBtn: 'もどす',
    about:
      '色つきの玉が何本もの瓶にまざって入っている。一本に一色だけ残るように片づけていくパズル。玉は同じ色の上か空の瓶にしか置けないので、空の瓶がそのまま動かせる余裕になる。むやみに埋めると行き場がなくなる。時間制限はなく、追ってくるものもない。もどせるのは一回のプレイで五回まで。レベルが上がっても補充されない。',
    how: [
      '瓶を押すといちばん上の玉が持ち上がる。',
      '別の瓶を押すとそこに置ける。',
      '一色で四つ埋まればその瓶は完成。',
      'すべての瓶を片づけると次のレベルへ。',
    ],
    tips: [
      '空の瓶が動かせる余裕そのもの。適当に埋めると行き場がなくなる。',
      'もどす回数はレベルが上がっても補充されない。一回のプレイで五回きり。',
      'レベル6からは空の瓶が二本から一本に減る。そこから一気に難しくなる。',
    ],
  },

  es: {
    tagline: 'Un color por tubo. Sin reloj.',
    level: 'Nivel', undo: 'Deshacer', best: 'Récord',
    readyTitle: 'Un color por tubo',
    readyBody: 'Toca un tubo para levantar su bola de arriba.<br>Toca otro para dejarla. Sin prisa.',
    legend1: 'Solo se deja sobre su mismo color',
    legend2: 'O en un tubo vacío',
    legend3: 'Cuatro del mismo color completan el tubo',
    start: 'Empezar',
    overTitle: 'No queda ningún movimiento',
    retry: 'Otra vez',
    paused: 'En pausa',
    pausedHint: 'Pulsa P otra vez para seguir.',
    resume: 'Continuar',
    help: 'Toca un tubo y luego otro · Z deshacer<br>← → elegir · Espacio o Enter levantar y soltar · P pausa',
    cleared: '¡Todo ordenado!',
    levelTag: 'Nivel {n}',
    stuck: 'Sin movimientos',
    undoBtn: 'Deshacer',
    about:
      'Bolas de colores repartidas sin orden por varios tubos, y tú las ordenas hasta que cada tubo tenga un solo color. Una bola solo se deja sobre su mismo color o en un tubo vacío, así que los tubos vacíos son el margen con el que trabajas: si los gastas mal, te quedas sin sitio. No hay reloj ni nada persiguiéndote. Tienes cinco deshacer para toda la partida y no se reponen al pasar de nivel.',
    how: [
      'Toca un tubo para levantar su bola de arriba.',
      'Toca otro tubo para dejarla allí.',
      'Cuatro del mismo color terminan ese tubo.',
      'Ordena todos los tubos para subir de nivel.',
    ],
    tips: [
      'Un tubo vacío es tu margen de maniobra. Si lo llenas sin pensar puedes quedarte sin sitio.',
      'Los deshacer no se reponen al superar un nivel: cinco es todo lo que tienes en la partida.',
      'A partir del nivel 6 tienes un tubo vacío en vez de dos. Ahí se pone difícil.',
    ],
  },

  fr: {
    tagline: 'Une couleur par tube. Sans chrono.',
    level: 'Niveau', undo: 'Annuler', best: 'Record',
    readyTitle: 'Une couleur par tube',
    readyBody: 'Appuie sur un tube pour soulever sa bille du haut.<br>Appuie sur un autre pour la poser. Sans hâte.',
    legend1: 'On ne pose que sur la même couleur',
    legend2: 'Ou dans un tube vide',
    legend3: 'Quatre d’une couleur terminent le tube',
    start: 'Commencer',
    overTitle: 'Plus aucun coup possible',
    retry: 'Rejouer',
    paused: 'En pause',
    pausedHint: 'Appuie encore sur P pour continuer.',
    resume: 'Reprendre',
    help: 'Appuie sur un tube, puis sur un autre · Z annuler<br>← → choisir · Espace ou Entrée soulever et poser · P pause',
    cleared: 'Tout est rangé !',
    levelTag: 'Niveau {n}',
    stuck: 'Aucun coup possible',
    undoBtn: 'Annuler',
    about:
      'Des billes de couleur mélangées dans une rangée de tubes, et tu ranges jusqu’à ce que chaque tube ne contienne qu’une couleur. Une bille ne se pose que sur sa propre couleur ou dans un tube vide : les tubes vides sont donc la marge dont tu disposes, et mal les dépenser te laisse sans issue. Pas de chrono, rien qui te poursuit. Tu as cinq annulations pour toute la partie, et elles ne sont pas rechargées entre les niveaux.',
    how: [
      'Appuie sur un tube pour soulever sa bille du haut.',
      'Appuie sur un autre tube pour l’y poser.',
      'Quatre billes d’une couleur terminent ce tube.',
      'Range tous les tubes pour passer au niveau suivant.',
    ],
    tips: [
      'Un tube vide, c’est ta marge de manœuvre. Le remplir sans réfléchir peut te bloquer.',
      'Les annulations ne sont pas rechargées entre les niveaux : cinq pour toute la partie.',
      'À partir du niveau 6 tu n’as plus qu’un tube vide au lieu de deux. C’est là que ça se corse.',
    ],
  },

  zh: {
    tagline: '一个瓶子一种颜色，不赶时间。',
    level: '关卡', undo: '撤销', best: '最高',
    readyTitle: '一瓶一色',
    readyBody: '点一个瓶子，最上面的球会被拿起。<br>再点另一个瓶子就放下。没有时间限制。',
    legend1: '只能放在同色上面',
    legend2: '或者放进空瓶子',
    legend3: '一种颜色放满四个就完成',
    start: '开始',
    overTitle: '没有地方可以放了',
    retry: '再玩一次',
    paused: '暂停',
    pausedHint: '再按一次 P 继续。',
    resume: '继续',
    help: '先点一个瓶子，再点另一个 · Z 撤销<br>← → 选择 · 空格或回车拿起和放下 · P 暂停',
    cleared: '全部整理好了！',
    levelTag: '第 {n} 关',
    stuck: '没有可走的了',
    undoBtn: '撤销',
    about:
      '彩色小球混在好几个瓶子里，你要把它们理到每个瓶子只剩一种颜色。球只能放在同色上面或空瓶子里，所以空瓶子就是你腾挪的余地，乱填就会走投无路。没有计时，也没有东西追着你。整局只有五次撤销，过关也不会补回来。',
    how: [
      '点一个瓶子，最上面的球被拿起。',
      '再点另一个瓶子，球就放到那里。',
      '一种颜色放满四个，这个瓶子就完成了。',
      '把所有瓶子都理好就进入下一关。',
    ],
    tips: [
      '空瓶子就是你的余地，随手填掉可能就没地方可走了。',
      '撤销过关也不会补回来，整局一共只有五次。',
      '从第 6 关开始空瓶子从两个减到一个，从那里开始明显变难。',
    ],
  },
};
