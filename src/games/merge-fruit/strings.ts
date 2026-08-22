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
  },
};
