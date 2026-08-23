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
    tagline: 'Match two, grow bigger.',
    score: 'Score', big: 'Biggest', best: 'Best',
    readyTitle: 'Fill It Up',
    readyBody: 'Drop the fruit in.<br>When two match touch,<br>they merge into one bigger fruit.',
    start: 'Start',
    overTitle: 'Overflow!',
    retry: 'Play Again',
    paused: 'Paused',
    pausedHint: 'Press P again to keep going.',
    resume: 'Resume',
    padLeft: 'Left', padRight: 'Right', padDrop: 'Drop',
    help: 'Tap to pick a spot, let go to drop<br>← → move · Space drop · P pause',
    next: 'Next',
    fruits: ['Pea','Cherry','Grape','Mandarin','Lemon','Apple','Pear','Peach','Pineapple','Melon','Watermelon'],
    about: 'Drop fruit into the jar. When two of the same kind touch, they merge into one bigger fruit, from pea and cherry all the way up to a watermelon. If a fruit sits above the dashed line at the top for too long, the jar overflows and the run ends.',
    how: [
      'Drag to aim and let go; ← → and Space work too.',
      'Land two of the same fruit together to make a bigger one.',
      'Keep the pile below the dashed line.',
      'A fruit resting above that line ends the run.',
    ],
    tips: [
      'Check the Next box and place the fruit you hold where its twin can land beside it.',
      'Merges that follow within about a second stack a multiplier, so build piles that collapse in a chain.',
      'Crossing the line is not instant. You have about a second and a half to merge that fruit away.',
    ],
  },
  ko: {
    tagline: '같은 것끼리 닿으면 커져요',
    score: '점수', big: '가장 큰 것', best: '최고',
    readyTitle: '통에 담아요',
    readyBody: '과일을 떨어뜨려요.<br>같은 과일끼리 닿으면<br>더 큰 과일 하나로 합쳐져요.',
    start: '시작',
    overTitle: '넘쳤다!',
    retry: '다시 하기',
    paused: '잠깐 멈춤',
    pausedHint: 'P 키를 다시 누르면 이어서 해요.',
    resume: '이어 하기',
    padLeft: '왼쪽으로', padRight: '오른쪽으로', padDrop: '놓기',
    help: '화면을 눌러 자리 고르고, 떼면 떨어져요<br>← → 옮기기 · 스페이스 놓기 · P 멈춤',
    next: '다음',
    fruits: ['완두','체리','포도','귤','레몬','사과','배','복숭아','파인애플','멜론','수박'],
    about: '통 안에 과일을 떨어뜨려요. 같은 과일 둘이 닿으면 더 큰 과일 하나로 합쳐져요. 완두와 체리에서 시작해 마지막은 수박이에요. 과일이 위쪽 점선 위에 한동안 얹혀 있으면 통이 넘쳐서 끝나요.',
    how: [
      '화면을 눌러 자리를 고르고 손을 떼면 떨어져요.',
      '같은 과일끼리 붙여서 더 큰 과일로 만들어요.',
      '과일이 점선 위로 올라오지 않게 해요.',
      '점선 위에 과일이 얹힌 채로 있으면 끝나요.',
    ],
    tips: [
      '오른쪽 위에 다음 과일이 보여요. 그걸 보고 지금 과일 자리를 정해요.',
      '합치고 바로 또 합쳐지면 점수가 배로 올라가요. 주르륵 터지게 쌓아 보세요.',
      '점선을 넘어도 바로 끝나지는 않아요. 일 초 반쯤 안에 합쳐 없애면 살아요.',
    ],
  },
  ja: {
    tagline: '同じ果物をくっつけて大きくしよう',
    score: 'スコア', big: '最大', best: 'ベスト',
    readyTitle: 'びんにためよう',
    readyBody: '果物を落とすよ。<br>同じ果物がくっつくと<br>もっと大きな一つになるよ。',
    start: 'スタート',
    overTitle: 'あふれた！',
    retry: 'もう一度',
    paused: '一時停止',
    pausedHint: 'Pキーをもう一度押すと続きます。',
    resume: 'つづける',
    padLeft: '左へ', padRight: '右へ', padDrop: '落とす',
    help: '画面をタップして場所を決めて、離すと落ちるよ<br>← → で移動 · スペースで落とす · Pで一時停止',
    next: 'つぎ',
    fruits: ['エンドウ','さくらんぼ','ぶどう','みかん','レモン','りんご','なし','もも','パイナップル','メロン','すいか'],
    about: 'びんに果物を落とします。同じ果物どうしが触れると、大きな一つに合わさります。エンドウやさくらんぼから始まり、最後はすいかです。上の点線より上に果物が残ったままだと、あふれて終わりです。',
    how: [
      '画面をなぞって場所を決め、離すと落ちる。',
      '同じ果物をくっつけて大きくする。',
      '果物を点線より下に収める。',
      '点線より上に果物が残ると終わり。',
    ],
    tips: [
      '右上の「つぎ」を見て、今の果物の置き場所を決める。',
      '続けて合わさると点数が倍になる。連鎖するように積む。',
      '点線を越えてもすぐ終わりではない。1秒半ほどで消せば助かる。',
    ],
  },
  es: {
    tagline: 'Junta dos iguales y crecen.',
    score: 'Puntos', big: 'Mayor', best: 'Récord',
    readyTitle: '¡Llena el bote!',
    readyBody: 'Deja caer la fruta.<br>Si dos iguales se tocan,<br>se unen en una más grande.',
    start: 'Empezar',
    overTitle: '¡Se desbordó!',
    retry: 'Otra vez',
    paused: 'En pausa',
    pausedHint: 'Pulsa P otra vez para seguir.',
    resume: 'Continuar',
    padLeft: 'Izquierda', padRight: 'Derecha', padDrop: 'Soltar',
    help: 'Toca para elegir el lugar, suelta para caer<br>← → mover · Espacio soltar · P pausa',
    next: 'Sig.',
    fruits: ['Guisante','Cereza','Uva','Mandarina','Limón','Manzana','Pera','Melocotón','Piña','Melón','Sandía'],
    about: 'Deja caer fruta en el bote. Cuando dos frutas iguales se tocan, se unen en una más grande: del guisante y la cereza hasta llegar a la sandía. Si una fruta se queda por encima de la línea de puntos demasiado tiempo, el bote se desborda y la partida acaba.',
    how: [
      'Arrastra para elegir sitio y suelta para dejarla caer.',
      'Junta dos frutas iguales para formar una mayor.',
      'Mantén el montón por debajo de la línea de puntos.',
      'Una fruta parada sobre esa línea acaba la partida.',
    ],
    tips: [
      'Mira el recuadro «Sig.» y coloca la fruta que llevas donde pueda caer su pareja al lado.',
      'Las fusiones seguidas en menos de un segundo multiplican los puntos: monta cadenas.',
      'Pasar la línea no es inmediato: tienes segundo y medio para fusionar esa fruta.',
    ],
  },
  fr: {
    tagline: 'Associe deux fruits pareils, ils grossissent.',
    score: 'Score', big: 'Plus gros', best: 'Record',
    readyTitle: 'Remplis le pot !',
    readyBody: 'Laisse tomber les fruits.<br>Deux fruits pareils qui se touchent<br>fusionnent en un plus gros.',
    start: 'Commencer',
    overTitle: 'Ça déborde !',
    retry: 'Rejouer',
    paused: 'En pause',
    pausedHint: 'Appuie encore sur P pour continuer.',
    resume: 'Reprendre',
    padLeft: 'Gauche', padRight: 'Droite', padDrop: 'Lâcher',
    help: "Touche pour choisir l'endroit, relâche pour lâcher<br>← → déplacer · Espace lâcher · P pause",
    next: 'Suiv.',
    fruits: ['Petit pois','Cerise','Raisin','Mandarine','Citron','Pomme','Poire','Pêche','Ananas','Melon','Pastèque'],
    about: "Fais tomber des fruits dans le pot. Deux fruits identiques qui se touchent fusionnent en un plus gros, du petit pois et de la cerise jusqu'à la pastèque. Si un fruit reste trop longtemps au-dessus de la ligne pointillée, le pot déborde et la partie s'arrête.",
    how: [
      "Glisse pour viser l'endroit, relâche pour lâcher le fruit.",
      'Colle deux fruits identiques pour en faire un plus gros.',
      'Garde le tas sous la ligne pointillée.',
      'Un fruit posé au-dessus de cette ligne termine la partie.',
    ],
    tips: [
      "Regarde la case « Suiv. » et pose le fruit en main là où son jumeau pourra tomber à côté.",
      "Des fusions enchaînées en moins d'une seconde multiplient les points : prépare des cascades.",
      "Dépasser la ligne n'est pas fatal tout de suite : il reste une seconde et demie pour fusionner.",
    ],
  },
  zh: {
    tagline: '碰到一样的就会变大',
    score: '分数', big: '最大', best: '最高',
    readyTitle: '装满罐子',
    readyBody: '把水果放下去。<br>两个一样的碰到一起，<br>就会合成更大的一个。',
    start: '开始',
    overTitle: '溢出了！',
    retry: '再玩一次',
    paused: '暂停',
    pausedHint: '再按一次 P 继续。',
    resume: '继续',
    padLeft: '向左', padRight: '向右', padDrop: '放下',
    help: '点屏幕选位置，松开就会掉下去<br>← → 移动 · 空格放下 · P 暂停',
    next: '下一个',
    fruits: ['豌豆','樱桃','葡萄','橘子','柠檬','苹果','梨','桃子','菠萝','甜瓜','西瓜'],
    about: '把水果放进罐子里。两个一样的水果碰到一起，就会合成更大的一个，从豌豆、樱桃一路合到西瓜。如果有水果停在上方虚线以上太久，罐子就会溢出，这一局结束。',
    how: [
      '拖动选好位置，松手就放下。',
      '让两个相同的水果碰在一起，合成更大的。',
      '把水果堆在虚线以下。',
      '水果停在虚线以上就结束。',
    ],
    tips: [
      '看右上角的「下一个」，再决定手上这个放哪里。',
      '一秒内连着合并会有倍数加成，尽量堆成能连锁的形状。',
      '越过虚线不会立刻结束，大约一秒半内合掉还能继续。',
    ],
  },
};
