// 폴짝 점프 안에서 쓰는 글.
// 게임 이름은 여기 없다 — `src/data/games.ts` 에 있다.

import type { Lang } from '../../i18n';

export type S = {
  tagline: string;
  height: string;
  star: string;
  best: string;
  readyTitle: string;
  readyBody: string;
  legend1: string;
  legend2: string;
  legend3: string;
  legend4: string;
  start: string;
  overTitle: string;
  retry: string;
  paused: string;
  pausedHint: string;
  resume: string;
  padLeft: string;
  padRight: string;
  help: string;
  whoosh: string;
  starPop: string;
  /** 게임 소개 두세 문장. 검색엔진이 읽는 본문이기도 하다. */
  about: string;
  /** 「어떻게 하나」 — 정확히 네 줄. 짧은 명령문. */
  how: [string, string, string, string];
  /** 「잘하는 요령」 — 정확히 세 줄. */
  tips: [string, string, string];
};

export const STR: Record<Lang, S> = {
  en: {
    tagline: 'Hop up the platforms.',
    height: 'Height', star: 'Stars', best: 'Best',
    readyTitle: 'Up, Up!',
    readyBody: 'It hops all on its own.<br>Just steer left and right.',
    legend1: 'A normal platform',
    legend2: 'Moves side to side',
    legend3: 'Breaks after one hop',
    legend4: 'Spring — jumps super high',
    start: 'Start',
    overTitle: 'You fell!',
    retry: 'Play Again',
    paused: 'Paused',
    pausedHint: 'Press P again to keep going.',
    resume: 'Resume',
    padLeft: 'Left', padRight: 'Right',
    help: 'Hold ← → · Tap left or right on screen · P to pause',
    whoosh: 'Whee!',
    starPop: '+{n}',
    about: 'Your character bounces by itself — all you do is steer left and right onto the next platform. Some platforms slide, pink ones break after a single hop, and yellow springs launch you much higher. Fall off the bottom of the screen and the run ends.',
    how: [
      'Hold ← or →, or tap that side of the screen.',
      'Climb as high as you can. Height is your score.',
      'Pink platforms break the moment you land on one.',
      'The run ends when you fall off the bottom.',
    ],
    tips: [
      'Yellow springs throw you far higher than a normal hop, so steer for them.',
      'Go off one edge and you come back in on the other. Handy for a far platform.',
      'Stars float just above a platform and add 10 points each, so grab them on the way up.',
    ],
  },
  ko: {
    tagline: '발판 밟고 높이 올라가기',
    height: '높이', star: '별', best: '최고',
    readyTitle: '위로 위로',
    readyBody: '알아서 폴짝폴짝 뛰어요.<br>왼쪽 오른쪽만 맞춰 주면 돼요.',
    legend1: '그냥 발판',
    legend2: '옆으로 움직여요',
    legend3: '한 번 밟으면 부서져요',
    legend4: '용수철 — 아주 높이 뛰어요',
    start: '시작',
    overTitle: '떨어졌다!',
    retry: '다시 하기',
    paused: '잠깐 멈춤',
    pausedHint: 'P 키를 다시 누르면 이어서 해요.',
    resume: '이어 하기',
    padLeft: '왼쪽으로', padRight: '오른쪽으로',
    help: '← → 키 누르고 있기 · 화면 왼쪽 오른쪽 누르기 · P 키로 멈춤',
    whoosh: '슝!',
    starPop: '+{n}',
    about: '알아서 폴짝폴짝 뛰어요. 왼쪽 오른쪽만 맞춰서 다음 발판에 올려놓으면 돼요. 옆으로 움직이는 발판, 한 번 밟으면 부서지는 분홍 발판, 아주 높이 튀는 노란 용수철이 섞여 나와요. 발판을 놓쳐서 화면 아래로 떨어지면 끝나요.',
    how: [
      '← → 키를 누르고 있거나, 화면 그쪽을 눌러요.',
      '발판을 밟고 높이 올라가요. 높이가 점수예요.',
      '분홍 발판은 밟자마자 부서지니 조심해요.',
      '화면 아래로 떨어지면 끝나요.',
    ],
    tips: [
      '노란 용수철이 보이면 그쪽으로 가요. 보통보다 훨씬 높이 뛰어요.',
      '화면 옆으로 나가면 반대쪽에서 나와요. 먼 발판은 이렇게 가면 돼요.',
      '별은 발판 바로 위에 떠 있고 하나에 10점이에요. 지나는 김에 주워요.',
    ],
  },
  ja: {
    tagline: '足場を踏んで高く登ろう',
    height: '高さ', star: '星', best: 'ベスト',
    readyTitle: '上へ上へ',
    readyBody: '自然にぴょんぴょん跳ねます。<br>左右を合わせるだけ。',
    legend1: 'ふつうの足場',
    legend2: '横に動きます',
    legend3: '一度踏むと壊れます',
    legend4: 'バネ — とても高く跳ねます',
    start: 'スタート',
    overTitle: '落ちちゃった！',
    retry: 'もう一度',
    paused: '一時停止',
    pausedHint: 'Pキーをもう一度押すと続きます。',
    resume: 'つづける',
    padLeft: '左へ', padRight: '右へ',
    help: '← → キーを押し続ける · 画面の左右をタップ · Pで一時停止',
    whoosh: 'びゅーん！',
    starPop: '+{n}',
    about: 'キャラクターは自分でぴょんぴょん跳ねます。あなたは左右を合わせて、次の足場に乗せるだけ。横に動く足場、一度踏むと壊れるピンクの足場、高く跳ねる黄色いバネが出てきます。足場を外して画面の下に落ちると終わりです。',
    how: [
      '← → を押し続けるか、画面の左右をタップ。',
      '足場を踏んでできるだけ高く登る。高さが点数。',
      'ピンクの足場は踏んだ瞬間に壊れる。',
      '画面の下に落ちると終わり。',
    ],
    tips: [
      '黄色いバネは普通よりずっと高く跳ねる。見つけたら狙う。',
      '画面の端から出ると反対側から戻る。遠い足場はこれで届く。',
      '星は足場のすぐ上に浮かび、1個10点。登るついでに取る。',
    ],
  },
  es: {
    tagline: 'Sube saltando plataformas.',
    height: 'Altura', star: 'Estrella', best: 'Récord',
    readyTitle: '¡Arriba, arriba!',
    readyBody: 'Salta solito todo el rato.<br>Solo muévete a los lados.',
    legend1: 'Plataforma normal',
    legend2: 'Se mueve de lado a lado',
    legend3: 'Se rompe al pisarla',
    legend4: 'Resorte: salta muy alto',
    start: 'Empezar',
    overTitle: '¡Te caíste!',
    retry: 'Otra vez',
    paused: 'En pausa',
    pausedHint: 'Pulsa P otra vez para seguir.',
    resume: 'Continuar',
    padLeft: 'Izquierda', padRight: 'Derecha',
    help: 'Mantén ← → · Toca a los lados de la pantalla · P para pausar',
    whoosh: '¡Uuuy!',
    starPop: '+{n}',
    about: 'El personaje salta solo y tú únicamente lo diriges a izquierda y derecha para que caiga en la siguiente plataforma. Hay plataformas que se desplazan, otras rosas que se rompen tras un salto y resortes amarillos que te lanzan mucho más alto. Si fallas y caes fuera de la pantalla, se acabó.',
    how: [
      'Mantén ← o →, o toca ese lado de la pantalla.',
      'Sube lo más alto que puedas: la altura son puntos.',
      'Las plataformas rosas se rompen al pisarlas.',
      'La partida termina al caer por debajo de la pantalla.',
    ],
    tips: [
      'Los resortes amarillos te lanzan mucho más alto que un salto normal: ve a por ellos.',
      'Si sales por un lado, apareces por el otro. Sirve para llegar a plataformas lejanas.',
      'Las estrellas flotan justo encima de una plataforma y suman 10 puntos cada una.',
    ],
  },
  fr: {
    tagline: 'Grimpe de plateforme en plateforme.',
    height: 'Hauteur', star: 'Étoiles', best: 'Record',
    readyTitle: 'Plus haut !',
    readyBody: 'Il saute tout seul.<br>Juste gauche et droite.',
    legend1: 'Plateforme normale',
    legend2: "Bouge d'un côté à l'autre",
    legend3: 'Se casse après un saut',
    legend4: 'Ressort : saut très haut',
    start: 'Commencer',
    overTitle: 'Tu es tombé !',
    retry: 'Rejouer',
    paused: 'En pause',
    pausedHint: 'Appuie encore sur P pour continuer.',
    resume: 'Reprendre',
    padLeft: 'Gauche', padRight: 'Droite',
    help: "Maintiens ← → · Touche l'écran à gauche ou à droite · P pour pause",
    whoosh: 'Woosh !',
    starPop: '+{n}',
    about: "Le personnage rebondit tout seul : tu ne fais que le diriger à gauche et à droite pour viser la plateforme suivante. Certaines plateformes glissent, les roses se cassent après un seul saut et les ressorts jaunes te propulsent bien plus haut. Si tu manques une plateforme et tombes hors de l'écran, la partie s'arrête.",
    how: [
      "Maintiens ← ou →, ou touche ce côté de l'écran.",
      'Monte le plus haut possible : la hauteur fait le score.',
      'Les plateformes roses se cassent dès que tu les touches.',
      "La partie s'arrête quand tu tombes hors de l'écran.",
    ],
    tips: [
      "Les ressorts jaunes propulsent bien plus haut qu'un saut normal : vise-les.",
      "Sortir d'un côté te fait revenir de l'autre. Pratique pour une plateforme éloignée.",
      "Les étoiles flottent juste au-dessus d'une plateforme et valent 10 points chacune.",
    ],
  },
  zh: {
    tagline: '踩着踏板往上跳。',
    height: '高度', star: '星', best: '最高',
    readyTitle: '往上，往上！',
    readyBody: '会自己蹦蹦跳跳。<br>只要控制左右方向。',
    legend1: '普通踏板',
    legend2: '会左右移动',
    legend3: '踩一次就会碎',
    legend4: '弹簧——跳得超高',
    start: '开始',
    overTitle: '掉下去了！',
    retry: '再玩一次',
    paused: '暂停',
    pausedHint: '再按一次 P 继续。',
    resume: '继续',
    padLeft: '向左', padRight: '向右',
    help: '按住 ← → · 点屏幕左右两边 · 按 P 暂停',
    whoosh: '嗖！',
    starPop: '+{n}',
    about: '角色会自己不停往上蹦，你只要控制左右，让它落到下一块踏板上。踏板有会左右移动的，有踩一次就碎的粉色踏板，还有把你弹得特别高的黄色弹簧。踩空掉出屏幕下方，这一局就结束。',
    how: [
      '按住 ← →，或点屏幕的左右两边。',
      '一直往上爬，高度就是分数。',
      '粉色踏板一踩就会碎。',
      '掉出屏幕下方就结束。',
    ],
    tips: [
      '黄色弹簧弹得比普通跳跃高得多，看到就往那边靠。',
      '从一边出去会从另一边回来，可以够到远处的踏板。',
      '星星浮在踏板正上方，每颗算 10 分，顺路捡走。',
    ],
  },
};
