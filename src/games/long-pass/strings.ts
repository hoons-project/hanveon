// 롱 패스 안에서 쓰는 글.
// 게임 이름은 여기 없다 — `src/data/games.ts` 에 있다.

import type { Lang } from '../../i18n';

export type S = {
  tagline: string;
  yards: string;
  downs: string;
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
  readyHint: string;
  holdHint: string;
  caught: string;
  incomplete: string;
  picked: string;
  touchdown: string;
  gain: string;
  toGo: string;
  about: string;
  how: [string, string, string, string];
  tips: [string, string, string];
};

export const STR: Record<Lang, S> = {
  en: {
    tagline: 'Lead the runner and time the throw.',
    yards: 'Yards', downs: 'Downs', best: 'Best',
    readyTitle: 'Hit the Runner in Stride',
    readyBody: 'Hold to send the target farther downfield.<br>Release so the ball meets the moving runner.',
    legend1: 'Hold — move the target deeper',
    legend2: 'Release — throw the ball',
    legend3: 'Aim ahead of the runner, not at him',
    start: 'Start',
    overTitle: 'Out of downs!',
    retry: 'Play Again',
    paused: 'Paused',
    pausedHint: 'Press P again to keep going.',
    resume: 'Resume',
    help: 'Hold anywhere on the field, then release to throw<br>Space or Enter also works · P pause',
    readyHint: 'Hold to aim deeper',
    holdHint: 'Release to throw',
    caught: 'Caught!',
    incomplete: 'Incomplete',
    picked: 'Intercepted!',
    touchdown: 'TOUCHDOWN!',
    gain: '+{n} yd',
    toGo: '{n} yd to go',
    about:
      'A timing game built around the long pass. Hold to move the target farther downfield, then release to throw. The receiver keeps running while the ball is in the air, so you need to lead him instead of aiming at where he is now. An interception costs two downs, while reaching the end zone gives you a fresh set of four.',
    how: [
      'Hold to move the target farther downfield.',
      'Release when the target leads the runner by the right amount.',
      'A completed pass moves you forward by the yards gained.',
      'Reach the end zone before you run out of downs.',
    ],
    tips: [
      'Lead the runner. He keeps moving while the ball is in the air.',
      'Deep throws stay in the air longer, so they need more lead.',
      'Keep the landing spot away from defenders — an interception costs two downs.',
    ],
  },

  ko: {
    tagline: '달리는 선수의 앞을 보고 타이밍 맞춰 던지세요.',
    yards: '야드', downs: '다운', best: '최고',
    readyTitle: '달리는 선수에게 연결하세요',
    readyBody: '누르고 있으면 목표 지점이 더 멀어져요.<br>선수가 도착할 곳을 보고 손을 떼세요.',
    legend1: '누르고 있기 — 목표 지점 멀리 보내기',
    legend2: '손 떼기 — 공 던지기',
    legend3: '선수의 현재 위치보다 앞을 노리기',
    start: '시작',
    overTitle: '다운을 다 썼어요!',
    retry: '다시 하기',
    paused: '잠깐 멈춤',
    pausedHint: 'P 키를 다시 누르면 이어서 할 수 있어요.',
    resume: '이어 하기',
    help: '화면을 누르고 있다가 떼면 던져요<br>스페이스·엔터도 가능 · P 멈춤',
    readyHint: '누르고 목표 지점을 맞추세요',
    holdHint: '손을 떼면 던져요',
    caught: '캐치!',
    incomplete: '패스 실패',
    picked: '인터셉트!',
    touchdown: '터치다운!',
    gain: '+{n}야드',
    toGo: '{n}야드 남음',
    about:
      '긴 패스의 타이밍을 맞추는 게임이에요. 누르고 있으면 목표 지점이 더 멀어지고, 손을 떼는 순간 공을 던집니다. 공이 날아가는 동안에도 리시버는 계속 달리기 때문에 지금 있는 곳이 아니라 앞으로 갈 곳을 노려야 해요. 인터셉트를 당하면 다운이 두 개 줄고, 엔드존에 도착하면 다시 네 번의 기회를 받습니다.',
    how: [
      '누르고 있으면 목표 지점이 더 멀어져요.',
      '리시버보다 적당히 앞선 지점에서 손을 떼세요.',
      '패스가 연결되면 잡은 지점만큼 전진해요.',
      '다운을 다 쓰기 전에 엔드존까지 도착하세요.',
    ],
    tips: [
      '리시버의 앞을 노리세요. 공이 날아가는 동안에도 계속 달립니다.',
      '멀리 던질수록 공이 오래 떠 있으니 더 많이 앞서 던져야 해요.',
      '수비수 근처에 떨어지면 인터셉트될 수 있어요. 인터셉트는 다운 두 개를 잃습니다.',
    ],
  },

  ja: {
    tagline: '走る選手の先を読んで、タイミングよく投げよう。',
    yards: 'ヤード', downs: 'ダウン', best: 'ベスト',
    readyTitle: '走る先へパス',
    readyBody: '押している間、狙いは遠くへ進みます。<br>選手が着く場所を読んで離しましょう。',
    legend1: '長押し — 狙いを遠くへ',
    legend2: '離す — ボールを投げる',
    legend3: '今いる場所ではなく走る先を狙う',
    start: 'スタート',
    overTitle: 'ダウンを使い切った！',
    retry: 'もう一度',
    paused: '一時停止',
    pausedHint: 'Pキーをもう一度押すと続けられます。',
    resume: 'つづける',
    help: '画面を長押しして、離すと投げる<br>スペース・EnterでもOK · Pで一時停止',
    readyHint: '長押しで狙いを遠くへ',
    holdHint: '離すと投げる',
    caught: 'キャッチ！',
    incomplete: 'パス失敗',
    picked: 'インターセプト！',
    touchdown: 'タッチダウン！',
    gain: '+{n}ヤード',
    toGo: '残り{n}ヤード',
    about:
      'ロングパスのタイミングを合わせるゲームです。押している間は狙いが遠くへ進み、離した瞬間にボールを投げます。ボールが飛んでいる間もレシーバーは走り続けるので、現在地ではなく進行方向の先を狙うのがポイント。インターセプトされるとダウンを2つ失い、エンドゾーンまで進めば4ダウンに戻ります。',
    how: [
      '長押しして狙いを遠くへ動かします。',
      'レシーバーの少し先に合うところで離します。',
      'キャッチできれば、その距離だけ前進します。',
      'ダウンを使い切る前にエンドゾーンを目指します。',
    ],
    tips: [
      'レシーバーの少し前を狙いましょう。ボールが飛ぶ間も走り続けます。',
      '遠いパスほど滞空時間が長いので、より先を狙う必要があります。',
      '守備の近くに落とすとインターセプトされやすく、ダウンを2つ失います。',
    ],
  },

  es: {
    tagline: 'Anticipa la carrera y mide el momento del pase.',
    yards: 'Yardas', downs: 'Downs', best: 'Récord',
    readyTitle: 'Pasa al hueco',
    readyBody: 'Mantén pulsado para llevar la diana más lejos.<br>Suelta anticipando la carrera del receptor.',
    legend1: 'Mantén — aleja la diana',
    legend2: 'Suelta — lanza el balón',
    legend3: 'Apunta por delante del receptor',
    start: 'Empezar',
    overTitle: '¡Sin downs!',
    retry: 'Otra vez',
    paused: 'En pausa',
    pausedHint: 'Pulsa P otra vez para continuar.',
    resume: 'Continuar',
    help: 'Mantén pulsado el campo y suelta para lanzar<br>Espacio o Enter también · P pausa',
    readyHint: 'Mantén para apuntar más lejos',
    holdHint: 'Suelta para lanzar',
    caught: '¡Recepción!',
    incomplete: 'Pase incompleto',
    picked: '¡Interceptado!',
    touchdown: '¡TOUCHDOWN!',
    gain: '+{n} yd',
    toGo: 'faltan {n} yd',
    about:
      'Un juego de precisión basado en el pase largo. Mantén pulsado para llevar la diana más lejos y suelta para lanzar. El receptor sigue corriendo mientras el balón está en el aire, así que hay que anticipar su trayectoria. Una intercepción cuesta dos downs; llegar a la zona de anotación te devuelve cuatro.',
    how: [
      'Mantén pulsado para mover la diana más lejos.',
      'Suelta cuando la diana quede lo bastante por delante del receptor.',
      'Cada recepción te hace avanzar las yardas ganadas.',
      'Llega a la zona de anotación antes de quedarte sin downs.',
    ],
    tips: [
      'Lanza por delante del receptor: sigue corriendo mientras el balón vuela.',
      'Cuanto más largo sea el pase, más tendrás que anticipar.',
      'Evita que el balón caiga cerca de un defensa: una intercepción cuesta dos downs.',
    ],
  },

  fr: {
    tagline: 'Anticipe la course et trouve le bon timing.',
    yards: 'Yards', downs: 'Essais', best: 'Record',
    readyTitle: 'Lance dans la course',
    readyBody: 'Maintiens pour envoyer la cible plus loin.<br>Relâche en anticipant la course du receveur.',
    legend1: 'Maintiens — éloigne la cible',
    legend2: 'Relâche — lance le ballon',
    legend3: 'Vise devant le receveur',
    start: 'Commencer',
    overTitle: 'Plus d’essais !',
    retry: 'Rejouer',
    paused: 'En pause',
    pausedHint: 'Appuie encore sur P pour continuer.',
    resume: 'Reprendre',
    help: 'Maintiens sur le terrain, puis relâche pour lancer<br>Espace ou Entrée aussi · P pause',
    readyHint: 'Maintiens pour viser plus loin',
    holdHint: 'Relâche pour lancer',
    caught: 'Réception !',
    incomplete: 'Passe incomplète',
    picked: 'Intercepté !',
    touchdown: 'TOUCHDOWN !',
    gain: '+{n} yd',
    toGo: 'reste {n} yd',
    about:
      'Un jeu de timing autour de la longue passe. Maintiens pour éloigner la cible, puis relâche pour lancer. Le receveur continue de courir pendant que le ballon est en l’air : il faut donc viser devant lui. Une interception coûte deux essais, tandis qu’atteindre la zone d’en-but te redonne quatre essais.',
    how: [
      'Maintiens pour éloigner la cible.',
      'Relâche quand la cible est suffisamment devant le receveur.',
      'Une réception te fait avancer du nombre de yards gagnés.',
      'Atteins la zone d’en-but avant d’épuiser tes essais.',
    ],
    tips: [
      'Vise devant le receveur : il continue de courir pendant le vol du ballon.',
      'Plus la passe est longue, plus il faut anticiper.',
      'Évite les défenseurs : une interception te coûte deux essais.',
    ],
  },

  zh: {
    tagline: '预判接球手的跑动，把球传到他前面。',
    yards: '码数', downs: '机会', best: '最高',
    readyTitle: '把球传到跑动路线',
    readyBody: '按住时目标会越移越远。<br>看准接球手要跑到的位置再松手。',
    legend1: '按住 — 让目标移得更远',
    legend2: '松手 — 把球传出去',
    legend3: '瞄准接球手前方，而不是当前位置',
    start: '开始',
    overTitle: '机会用完了！',
    retry: '再玩一次',
    paused: '暂停',
    pausedHint: '再按一次 P 继续。',
    resume: '继续',
    help: '按住场地，松手传球<br>空格或回车也可以 · P 暂停',
    readyHint: '按住调整距离',
    holdHint: '松手传球',
    caught: '接到了！',
    incomplete: '传球失败',
    picked: '被截断！',
    touchdown: '达阵！',
    gain: '+{n}码',
    toGo: '还差 {n} 码',
    about:
      '一款考验长传时机的小游戏。按住时目标点会往更远处移动，松手后球就会飞出去。球在空中时接球手还会继续跑，所以要传向他即将到达的位置。被防守球员截断会损失两次机会，到达达阵区后则会重新获得四次机会。',
    how: [
      '按住，让目标点往更远处移动。',
      '目标点领先接球手合适距离时松手。',
      '成功接球后会按推进距离前进。',
      '在机会用完前到达达阵区。',
    ],
    tips: [
      '要传到接球手前方，因为球在空中时他还在继续跑。',
      '传得越远，球在空中的时间越长，需要预留更多提前量。',
      '尽量避开防守球员附近的落点，被截断会损失两次机会。',
    ],
  },
};
