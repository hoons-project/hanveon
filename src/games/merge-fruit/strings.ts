// 몽글 과일 안에서 쓰는 글.
// 게임 이름은 여기 없다 — `src/data/games.ts` 에 있다.

import type { Lang } from '../../i18n';

export type S = {
  tagline: string;
  score: string;
  big: string;
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
  padDrop: string;
  help: string;
  next: string;
  /** 작은 것부터 큰 것까지 열한 가지 과일 이름 */
  fruits: string[];
  /** 게임 소개 두세 문장. 검색엔진이 읽는 본문이기도 하다. */
  about: string;
  /** 「어떻게 하나」 — 정확히 네 줄. 짧은 명령문. */
  how: [string, string, string, string];
  /** 「잘하는 요령」 — 정확히 세 줄. */
  tips: [string, string, string];
};

export const STR: Record<Lang, S> = {
  en: {
    tagline: 'Match two. Make something bigger.',
    score: 'Score', big: 'Biggest', best: 'Best',
    readyTitle: 'Fill It Up',
    readyBody: 'Drop the fruit in.<br>When two matching fruits touch,<br>they merge into one bigger fruit.',
    start: 'Start',
    overTitle: 'Overflow!',
    retry: 'Play Again',
    paused: 'Paused',
    pausedHint: 'Press P again to keep going.',
    resume: 'Resume',
    padLeft: 'Left', padRight: 'Right', padDrop: 'Drop',
    help: 'Tap or drag to choose a spot, then let go to drop<br>← → move · Space drop · P pause',
    next: 'Next',
    fruits: ['Pea','Cherry','Grape','Mandarin','Lemon','Apple','Pear','Peach','Pineapple','Melon','Watermelon'],
    about: 'Drop fruit into the jar. When two matching fruits touch, they merge into one bigger fruit, starting with peas and cherries and working all the way up to a watermelon. If a fruit stays above the dashed line at the top for too long, the jar overflows and the run ends.',
    how: [
      'Drag to choose where to drop the fruit, then let go. Arrow keys and Space work too.',
      'Bring two matching fruits together to merge them into a bigger one.',
      'Keep the pile below the dashed line.',
      'If a fruit stays above the line for too long, the run ends.',
    ],
    tips: [
      'Check the Next box before you drop. Place the current fruit where its match can reach it later.',
      'Merges that happen one after another within about a second build a multiplier, so set up chain reactions.',
      'Crossing the line does not end the game instantly. You have about a second and a half to merge that fruit away.',
    ],
  },
  ko: {
    tagline: '같은 과일 둘이 만나면 더 크게!',
    score: '점수', big: '가장 큰 과일', best: '최고',
    readyTitle: '통에 차곡차곡',
    readyBody: '과일을 떨어뜨려요.<br>같은 과일끼리 닿으면<br>더 큰 과일 하나로 합쳐집니다.',
    start: '시작',
    overTitle: '넘쳤다!',
    retry: '다시 하기',
    paused: '잠깐 멈춤',
    pausedHint: 'P 키를 다시 누르면 이어서 해요.',
    resume: '이어 하기',
    padLeft: '왼쪽', padRight: '오른쪽', padDrop: '떨어뜨리기',
    help: '화면에서 자리를 고르고 손을 떼면 떨어져요<br>← → 이동 · 스페이스 떨어뜨리기 · P 멈춤',
    next: '다음',
    fruits: ['완두콩','체리','포도','귤','레몬','사과','배','복숭아','파인애플','멜론','수박'],
    about: '통 안에 과일을 떨어뜨려요. 같은 과일 두 개가 닿으면 더 큰 과일 하나로 합쳐집니다. 작은 완두콩과 체리부터 시작해서 마지막에는 수박까지 만들 수 있어요. 과일이 위쪽 점선보다 높은 곳에 너무 오래 남아 있으면 통이 넘치면서 게임이 끝납니다.',
    how: [
      '화면에서 떨어뜨릴 자리를 고르고 손을 떼요.',
      '같은 과일 두 개를 붙여 더 큰 과일로 합쳐요.',
      '과일 더미가 점선 아래에 머물게 해요.',
      '과일이 점선 위에 너무 오래 남으면 끝나요.',
    ],
    tips: [
      '오른쪽 위의 다음 과일을 보고 지금 과일을 어디에 놓을지 정해보세요.',
      '짧은 시간 안에 연속으로 합쳐지면 점수 배수가 올라가요. 한 번에 주르륵 이어지게 쌓아보세요.',
      '점선을 넘었다고 바로 끝나는 건 아니에요. 약 1.5초 안에 합쳐서 내려오면 계속할 수 있습니다.',
    ],
  },
  ja: {
    tagline: '同じフルーツを合わせて、どんどん大きく。',
    score: 'スコア', big: '最大', best: 'ベスト',
    readyTitle: 'どこまで大きくできる？',
    readyBody: 'フルーツを落とそう。<br>同じもの同士が触れると<br>ひと回り大きなフルーツに合体します。',
    start: 'スタート',
    overTitle: 'あふれた！',
    retry: 'もう一度',
    paused: '一時停止',
    pausedHint: 'Pキーをもう一度押すと続きます。',
    resume: 'つづける',
    padLeft: '左', padRight: '右', padDrop: '落とす',
    help: '位置を決めて指を離すと落下<br>← → で移動 · スペースで落とす · Pで一時停止',
    next: 'つぎ',
    fruits: ['えんどう豆','さくらんぼ','ぶどう','みかん','レモン','りんご','なし','もも','パイナップル','メロン','すいか'],
    about: '容器の中にフルーツを落としていきます。同じフルーツ同士が触れると、ひと回り大きなフルーツに合体。えんどう豆やさくらんぼから始まり、最後はすいかまで育ちます。上の点線より高い位置にフルーツがしばらく残ると、あふれてゲーム終了です。',
    how: [
      '落とす位置を決めて指を離します。',
      '同じフルーツを2つくっつけて、ひと回り大きくします。',
      'フルーツの山を点線より下に収めます。',
      '点線より上にフルーツが長く残ると終了です。',
    ],
    tips: [
      '右上の「つぎ」を見て、今のフルーツをどこに置くか考えましょう。',
      '短い間に連続で合体すると倍率が上がります。連鎖しやすい形を作ってみましょう。',
      '点線を越えてもすぐには終わりません。約1.5秒以内に合体させて下げれば続けられます。',
    ],
  },
  es: {
    tagline: 'Junta dos iguales y haz crecer la fruta.',
    score: 'Puntos', big: 'Mayor', best: 'Récord',
    readyTitle: '¡A llenar el bote!',
    readyBody: 'Deja caer la fruta.<br>Cuando dos iguales se tocan,<br>se fusionan en una más grande.',
    start: 'Empezar',
    overTitle: '¡Se desbordó!',
    retry: 'Otra vez',
    paused: 'En pausa',
    pausedHint: 'Pulsa P otra vez para seguir.',
    resume: 'Continuar',
    padLeft: 'Izquierda', padRight: 'Derecha', padDrop: 'Soltar',
    help: 'Elige dónde caerá y suelta<br>← → mover · Espacio soltar · P pausa',
    next: 'Sig.',
    fruits: ['Guisante','Cereza','Uva','Mandarina','Limón','Manzana','Pera','Melocotón','Piña','Melón','Sandía'],
    about: 'Deja caer fruta dentro del bote. Cuando dos frutas iguales se tocan, se fusionan en una más grande, desde el guisante y la cereza hasta llegar a la sandía. Si una fruta permanece demasiado tiempo por encima de la línea de puntos, el bote se desborda y termina la partida.',
    how: [
      'Elige la posición y suelta la fruta para dejarla caer.',
      'Junta dos frutas iguales para crear una más grande.',
      'Mantén el montón por debajo de la línea de puntos.',
      'Si una fruta permanece demasiado tiempo por encima de la línea, termina la partida.',
    ],
    tips: [
      'Mira el recuadro «Sig.» antes de soltar y coloca la fruta donde luego pueda llegar otra igual.',
      'Las fusiones encadenadas en aproximadamente un segundo aumentan el multiplicador. Intenta preparar reacciones en cadena.',
      'Cruzar la línea no termina la partida al instante: tienes alrededor de segundo y medio para fusionar esa fruta y bajarla.',
    ],
  },
  fr: {
    tagline: 'Deux fruits identiques, et ça grossit.',
    score: 'Score', big: 'Plus gros', best: 'Record',
    readyTitle: 'Remplis le pot !',
    readyBody: 'Laisse tomber les fruits.<br>Deux fruits identiques qui se touchent<br>fusionnent en un fruit plus gros.',
    start: 'Commencer',
    overTitle: 'Ça déborde !',
    retry: 'Rejouer',
    paused: 'En pause',
    pausedHint: 'Appuie encore sur P pour continuer.',
    resume: 'Reprendre',
    padLeft: 'Gauche', padRight: 'Droite', padDrop: 'Lâcher',
    help: 'Choisis l’endroit puis relâche pour faire tomber<br>← → déplacer · Espace lâcher · P pause',
    next: 'Suiv.',
    fruits: ['Petit pois','Cerise','Raisin','Mandarine','Citron','Pomme','Poire','Pêche','Ananas','Melon','Pastèque'],
    about: 'Fais tomber des fruits dans le pot. Deux fruits identiques qui se touchent fusionnent en un fruit plus gros, du petit pois et de la cerise jusqu’à la pastèque. Si un fruit reste trop longtemps au-dessus de la ligne pointillée, le pot déborde et la partie s’arrête.',
    how: [
      'Choisis l’endroit où lâcher le fruit, puis relâche.',
      'Réunis deux fruits identiques pour en créer un plus gros.',
      'Garde la pile sous la ligne pointillée.',
      'Si un fruit reste trop longtemps au-dessus de la ligne, la partie se termine.',
    ],
    tips: [
      'Regarde la case « Suiv. » avant de lâcher le fruit et place-le là où son double pourra le rejoindre plus tard.',
      'Des fusions qui s’enchaînent en environ une seconde augmentent le multiplicateur. Essaie de préparer des réactions en chaîne.',
      'Dépasser la ligne ne met pas fin à la partie immédiatement : tu as environ une seconde et demie pour fusionner le fruit et le faire redescendre.',
    ],
  },
  zh: {
    tagline: '两个一样的碰在一起，就会变得更大。',
    score: '分数', big: '最大', best: '最高',
    readyTitle: '把罐子装起来！',
    readyBody: '把水果放下去。<br>两个一样的水果碰到一起，<br>就会合成一个更大的。',
    start: '开始',
    overTitle: '溢出来了！',
    retry: '再玩一次',
    paused: '暂停',
    pausedHint: '再按一次 P 继续。',
    resume: '继续',
    padLeft: '向左', padRight: '向右', padDrop: '放下',
    help: '选好位置，松手就会掉下去<br>← → 移动 · 空格放下 · P 暂停',
    next: '下一个',
    fruits: ['豌豆','樱桃','葡萄','橘子','柠檬','苹果','梨','桃子','菠萝','甜瓜','西瓜'],
    about: '把水果放进罐子里。两个相同的水果碰到一起，就会合成一个更大的水果，从豌豆、樱桃一路合到西瓜。如果有水果在上方虚线以上停留太久，罐子就会溢出，本局结束。',
    how: [
      '选好水果落下的位置，然后松手。',
      '让两个相同的水果碰在一起，合成更大的水果。',
      '尽量让水果堆保持在虚线以下。',
      '如果水果在虚线以上停留太久，本局就会结束。',
    ],
    tips: [
      '先看右上角的「下一个」，再决定手上的水果放在哪里。',
      '大约一秒内连续合成会提高倍率，尽量摆出能连锁合成的形状。',
      '超过虚线不会立刻结束，你大约还有 1.5 秒可以把那个水果合掉并降下来。',
    ],
  },
};
