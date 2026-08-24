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
    tagline: 'Bounce from platform to platform.',
    height: 'Height', star: 'Stars', best: 'Best',
    readyTitle: 'Up, Up!',
    readyBody: 'It bounces on its own.<br>You just steer left and right.',
    legend1: 'Normal platform',
    legend2: 'Moves side to side',
    legend3: 'Breaks after one landing',
    legend4: 'Spring — launches you much higher',
    start: 'Start',
    overTitle: 'You fell!',
    retry: 'Play Again',
    paused: 'Paused',
    pausedHint: 'Press P again to keep going.',
    resume: 'Resume',
    padLeft: 'Left', padRight: 'Right',
    help: 'Hold ← → · Tap the left or right side of the screen · P pause',
    whoosh: 'Whee!',
    starPop: '+{n}',
    about: 'Your character bounces automatically, so all you need to do is steer left and right to land on the next platform. Some platforms move, pink ones break after one landing, and yellow springs launch you much higher. Miss a platform and fall off the bottom of the screen, and the run is over.',
    how: [
      'Hold ← or →, or tap that side of the screen.',
      'Climb as high as you can. Your height is your score.',
      'Pink platforms break as soon as you land on them.',
      'The run ends when you fall off the bottom of the screen.',
    ],
    tips: [
      'Yellow springs launch you much higher than a normal bounce, so aim for them when you can.',
      'Leave the screen on one side and you come back in from the other. Use that to reach distant platforms.',
      'Stars float just above platforms and are worth 10 points each. Grab them on the way up.',
    ],
  },
  ko: {
    tagline: '발판을 밟고 계속 위로!',
    height: '높이', star: '별', best: '최고',
    readyTitle: '위로, 위로!',
    readyBody: '캐릭터는 알아서 폴짝폴짝 뛰어요.<br>왼쪽 오른쪽만 맞춰주면 됩니다.',
    legend1: '일반 발판',
    legend2: '좌우로 움직이는 발판',
    legend3: '한 번 밟으면 부서지는 발판',
    legend4: '용수철 — 훨씬 높이 뛰어요',
    start: '시작',
    overTitle: '떨어졌다!',
    retry: '다시 하기',
    paused: '잠깐 멈춤',
    pausedHint: 'P 키를 다시 누르면 이어서 해요.',
    resume: '이어 하기',
    padLeft: '왼쪽', padRight: '오른쪽',
    help: '← → 키를 누르고 있기 · 화면 왼쪽/오른쪽 누르기 · P 멈춤',
    whoosh: '슝!',
    starPop: '+{n}',
    about: '캐릭터는 자동으로 폴짝폴짝 뛰어요. 왼쪽과 오른쪽으로 움직여 다음 발판에 착지시키면 됩니다. 좌우로 움직이는 발판, 한 번 밟으면 부서지는 분홍 발판, 훨씬 높이 튀어 오르는 노란 용수철도 나와요. 발판을 놓쳐 화면 아래로 떨어지면 끝입니다.',
    how: [
      '← → 키를 누르고 있거나 화면 왼쪽·오른쪽을 눌러요.',
      '발판을 밟으며 최대한 높이 올라가요. 높이가 점수예요.',
      '분홍 발판은 한 번 밟으면 바로 부서져요.',
      '화면 아래로 떨어지면 게임이 끝나요.',
    ],
    tips: [
      '노란 용수철은 보통 점프보다 훨씬 높이 올려줘요. 보이면 노려보세요.',
      '화면 한쪽 끝으로 나가면 반대쪽에서 다시 나와요. 멀리 있는 발판을 잡을 때 유용합니다.',
      '별은 발판 바로 위에 떠 있고 하나에 10점이에요. 올라가는 길에 챙겨보세요.',
    ],
  },
  ja: {
    tagline: '足場を跳びついで、どこまで高く行ける？',
    height: '高さ', star: '星', best: 'ベスト',
    readyTitle: 'もっと上へ！',
    readyBody: 'キャラクターは自動で跳ねます。<br>左右に動かすだけでOK。',
    legend1: '普通の足場',
    legend2: '左右に動く足場',
    legend3: '一度乗ると壊れる足場',
    legend4: 'バネ — 一気に高く跳べる',
    start: 'スタート',
    overTitle: '落ちちゃった！',
    retry: 'もう一度',
    paused: '一時停止',
    pausedHint: 'Pキーをもう一度押すと続きます。',
    resume: 'つづける',
    padLeft: '左', padRight: '右',
    help: '← → を押し続ける · 画面の左右をタップ · Pで一時停止',
    whoosh: 'びゅーん！',
    starPop: '+{n}',
    about: 'キャラクターは自動で跳ね続けます。左右に動かして次の足場へ着地させましょう。左右に動く足場、一度乗ると壊れるピンクの足場、高く跳べる黄色いバネも登場します。足場を外して画面の下へ落ちるとゲーム終了です。',
    how: [
      '← → を押し続けるか、画面の左右をタップします。',
      '足場を渡りながら、できるだけ高く登ります。高さがスコアです。',
      'ピンクの足場は一度乗るとすぐ壊れます。',
      '画面の下へ落ちると終了です。',
    ],
    tips: [
      '黄色いバネは普通のジャンプよりずっと高く飛べます。見つけたら狙ってみましょう。',
      '画面の端から出ると反対側から戻ってきます。遠い足場へ移るときに便利です。',
      '星は足場のすぐ上に浮かんでいて、1個10点。登る途中で集めましょう。',
    ],
  },
  es: {
    tagline: 'Salta de plataforma en plataforma.',
    height: 'Altura', star: 'Estrellas', best: 'Récord',
    readyTitle: '¡Más arriba!',
    readyBody: 'El personaje salta solo.<br>Tú solo tienes que moverlo a izquierda y derecha.',
    legend1: 'Plataforma normal',
    legend2: 'Se mueve de lado a lado',
    legend3: 'Se rompe después de un salto',
    legend4: 'Resorte: te lanza mucho más alto',
    start: 'Empezar',
    overTitle: '¡Te caíste!',
    retry: 'Otra vez',
    paused: 'En pausa',
    pausedHint: 'Pulsa P otra vez para seguir.',
    resume: 'Continuar',
    padLeft: 'Izquierda', padRight: 'Derecha',
    help: 'Mantén ← → · Toca el lado izquierdo o derecho de la pantalla · P pausa',
    whoosh: '¡Uuuh!',
    starPop: '+{n}',
    about: 'El personaje salta automáticamente y tú solo tienes que moverlo a izquierda y derecha para aterrizar en la siguiente plataforma. Algunas plataformas se mueven, las rosas se rompen después de un salto y los resortes amarillos te lanzan mucho más alto. Si fallas una plataforma y caes por debajo de la pantalla, termina la partida.',
    how: [
      'Mantén ← o →, o toca ese lado de la pantalla.',
      'Sube todo lo que puedas. La altura es tu puntuación.',
      'Las plataformas rosas se rompen en cuanto aterrizas sobre ellas.',
      'La partida termina si caes por debajo de la pantalla.',
    ],
    tips: [
      'Los resortes amarillos te lanzan mucho más alto que un salto normal. Intenta caer sobre ellos.',
      'Si sales por un lado de la pantalla, vuelves a entrar por el otro. Úsalo para alcanzar plataformas lejanas.',
      'Las estrellas flotan justo encima de las plataformas y valen 10 puntos cada una. Recógelas mientras subes.',
    ],
  },
  fr: {
    tagline: 'Grimpe de plateforme en plateforme.',
    height: 'Hauteur', star: 'Étoiles', best: 'Record',
    readyTitle: 'Toujours plus haut !',
    readyBody: 'Le personnage saute tout seul.<br>Tu n’as qu’à le diriger à gauche ou à droite.',
    legend1: 'Plateforme normale',
    legend2: 'Se déplace de gauche à droite',
    legend3: 'Se casse après un passage',
    legend4: 'Ressort : te propulse beaucoup plus haut',
    start: 'Commencer',
    overTitle: 'Tu es tombé !',
    retry: 'Rejouer',
    paused: 'En pause',
    pausedHint: 'Appuie encore sur P pour continuer.',
    resume: 'Reprendre',
    padLeft: 'Gauche', padRight: 'Droite',
    help: 'Maintiens ← → · Touche le côté gauche ou droit de l’écran · P : pause',
    whoosh: 'Wouhou !',
    starPop: '+{n}',
    about: 'Le personnage saute automatiquement : à toi de le diriger à gauche ou à droite pour atterrir sur la plateforme suivante. Certaines plateformes bougent, les roses se cassent après un passage et les ressorts jaunes te propulsent beaucoup plus haut. Si tu rates une plateforme et tombes sous l’écran, la partie est terminée.',
    how: [
      'Maintiens ← ou →, ou touche le côté correspondant de l’écran.',
      'Monte aussi haut que possible. Ta hauteur fait ton score.',
      'Les plateformes roses se cassent dès que tu atterris dessus.',
      'La partie s’arrête si tu tombes sous l’écran.',
    ],
    tips: [
      'Les ressorts jaunes te propulsent bien plus haut qu’un saut normal. Essaie de les viser.',
      'Si tu sors par un côté de l’écran, tu reviens par l’autre. Pratique pour atteindre une plateforme éloignée.',
      'Les étoiles flottent juste au-dessus des plateformes et valent 10 points chacune. Ramasse-les en montant.',
    ],
  },
  zh: {
    tagline: '踩着平台一路往上跳。',
    height: '高度', star: '星星', best: '最高',
    readyTitle: '继续往上！',
    readyBody: '角色会自动跳跃。<br>你只要控制左右方向。',
    legend1: '普通平台',
    legend2: '会左右移动',
    legend3: '踩一次就会碎',
    legend4: '弹簧 — 能把你弹得更高',
    start: '开始',
    overTitle: '掉下去了！',
    retry: '再玩一次',
    paused: '暂停',
    pausedHint: '再按一次 P 继续。',
    resume: '继续',
    padLeft: '向左', padRight: '向右',
    help: '按住 ← → · 点屏幕左边或右边 · P：暂停',
    whoosh: '嗖！',
    starPop: '+{n}',
    about: '角色会自动不停跳跃，你只要控制左右，让它落到下一块平台上。平台有会左右移动的，也有踩一次就碎的粉色平台，还有能把你弹得更高的黄色弹簧。踩空并掉出屏幕下方后，本局结束。',
    how: [
      '按住 ← 或 →，也可以点屏幕对应的一侧。',
      '尽量往上爬，高度就是你的分数。',
      '粉色平台踩一次就会碎。',
      '掉出屏幕下方后游戏结束。',
    ],
    tips: [
      '黄色弹簧能把你弹得比普通跳跃高很多，看到时尽量落上去。',
      '从屏幕一侧出去会从另一侧回来，可以用来够到远处的平台。',
      '星星浮在平台正上方，每颗 10 分，往上爬时顺手收集。',
    ],
  },
};
