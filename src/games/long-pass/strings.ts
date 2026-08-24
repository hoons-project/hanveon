// 휙휙 패스 안에서 쓰는 글.
// 게임 이름은 여기 없다 — `src/data/games.ts` 에 있다.

import type { Lang } from '../../i18n';

export type S = {
  tagline: string;
  /** HUD 칸 셋 */
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
  /** 누르기 전에 캔버스 아래에 뜨는 한 마디 */
  readyHint: string;
  /** 누르고 있는 동안 뜨는 한 마디 */
  holdHint: string;
  /** 잡았을 때 */
  caught: string;
  /** 아무도 못 잡았을 때 */
  incomplete: string;
  /** 수비가 가로챘을 때 */
  picked: string;
  /** 끝 선을 넘었을 때 */
  touchdown: string;
  /** 잡고 나서 뜨는 얻은 거리 — `{n}` 자리에 숫자 */
  gain: string;
  /** 끝 선까지 남은 거리 — `{n}` 자리에 숫자 */
  toGo: string;
  /** 게임 소개 두세 문장. 검색엔진이 읽는 본문이기도 하다. */
  about: string;
  /** 「어떻게 하나」 — 정확히 네 줄. 짧은 명령문. */
  how: [string, string, string, string];
  /** 「잘하는 요령」 — 정확히 세 줄. 코드에서 확인한 사실만. */
  tips: [string, string, string];
};

export const STR: Record<Lang, S> = {
  en: {
    tagline: 'Throw to where the runner will be.',
    yards: 'Yards', downs: 'Downs', best: 'Best',
    readyTitle: 'Find the Runner',
    readyBody: 'Hold to send the throw further.<br>Let go so the ball and the runner arrive together.',
    legend1: 'Hold — the target slides up the field',
    legend2: 'Let go — the ball takes time to land',
    legend3: 'Aim ahead of the runner, not at him',
    start: 'Start',
    overTitle: 'Downs are gone!',
    retry: 'Play Again',
    paused: 'Paused',
    pausedHint: 'Press P again to keep going.',
    resume: 'Resume',
    help: 'Hold anywhere on the field, let go to throw<br>Space or Enter also works · P pause',
    readyHint: 'Hold to throw',
    holdHint: 'Let go to throw',
    caught: 'Caught!',
    incomplete: 'Incomplete',
    picked: 'Intercepted!',
    touchdown: 'TOUCHDOWN!',
    gain: '+{n} yd',
    toGo: '{n} to go',
    about:
      'You throw, someone else runs. Hold to slide the target further up the field, then let go — but the ball takes time in the air and the runner never stops, so you have to throw to where he is going. Land it near a defender and it gets picked off. Four downs to cover a hundred yards; reach the line and you get four more.',
    how: [
      'Hold to slide the target up the field.',
      'Let go so the ball and the runner meet.',
      'A catch moves you up by that many yards.',
      'Four downs to reach the line, then it ends.',
    ],
    tips: [
      'Throw ahead of the runner — he keeps running while the ball is in the air.',
      'The further you throw, the longer the ball hangs, so lead him by more on a deep one.',
      'A ball that lands near a defender is intercepted, and that costs two downs instead of one.',
    ],
  },

  ko: {
    tagline: '달릴 자리를 보고 던져요',
    yards: '야드', downs: '기회', best: '최고',
    readyTitle: '달리는 선수를 찾아요',
    readyBody: '누르고 있으면 더 멀리 가요.<br>공과 선수가 같이 도착하게 떼요.',
    legend1: '누르기 — 표적이 앞으로 나가요',
    legend2: '떼기 — 공이 날아가는 데 시간이 걸려요',
    legend3: '선수가 아니라 그 앞을 겨눠요',
    start: '시작',
    overTitle: '기회를 다 썼다!',
    retry: '다시 하기',
    paused: '잠깐 멈춤',
    pausedHint: 'P 키를 다시 누르면 이어서 해요.',
    resume: '이어 하기',
    help: '화면을 누르고 있다가 떼면 던져요<br>스페이스나 엔터도 돼요 · P 멈춤',
    readyHint: '누르고 있어요',
    holdHint: '떼면 던져요',
    caught: '잡았다!',
    incomplete: '놓쳤다',
    picked: '가로채였다!',
    touchdown: '터치다운!',
    gain: '+{n}야드',
    toGo: '{n}야드 남음',
    about:
      '던지는 건 나고 달리는 건 다른 사람이에요. 누르고 있으면 표적이 앞으로 나가고, 떼면 공이 날아가요. 그런데 공이 가는 동안에도 선수는 계속 달리니까 지금 있는 자리가 아니라 갈 자리로 던져야 해요. 수비 옆에 떨어지면 가로채여요. 기회 네 번으로 100야드를 가고, 끝 선을 넘으면 네 번을 다시 받아요.',
    how: [
      '누르고 있으면 표적이 앞으로 나가요.',
      '공과 선수가 만나게 떼요.',
      '잡으면 그만큼 앞으로 가요.',
      '기회 네 번 안에 끝 선을 못 넘으면 끝이에요.',
    ],
    tips: [
      '선수 앞을 던져요. 공이 날아가는 동안에도 계속 달리거든요.',
      '멀리 던질수록 공이 오래 떠 있어요. 그만큼 더 앞을 봐야 해요.',
      '수비 옆에 떨어지면 가로채여요. 그때는 기회가 하나가 아니라 둘 줄어요.',
    ],
  },

  ja: {
    tagline: '走る先を見て投げる',
    yards: 'ヤード', downs: '残り', best: 'ベスト',
    readyTitle: '走る選手を探そう',
    readyBody: '押している間、遠くまで届く。<br>ボールと選手が同時に着くように離す。',
    legend1: '押す — 的が前に進む',
    legend2: '離す — ボールは飛ぶのに時間がかかる',
    legend3: '選手ではなく、その前を狙う',
    start: 'スタート',
    overTitle: '残りを使い切った！',
    retry: 'もう一度',
    paused: '一時停止',
    pausedHint: 'Pキーをもう一度押すと続きます。',
    resume: 'つづける',
    help: '画面を押したままにして、離すと投げる<br>スペースやEnterでも · Pで一時停止',
    readyHint: '押したままに',
    holdHint: '離すと投げる',
    caught: 'キャッチ！',
    incomplete: '届かない',
    picked: 'インターセプト！',
    touchdown: 'タッチダウン！',
    gain: '+{n}ヤード',
    toGo: '残り{n}ヤード',
    about:
      '投げるのは自分、走るのは別の選手。押している間だけ的が前に進み、離すとボールが飛ぶ。飛んでいる間も選手は走り続けるから、今いる場所ではなく行く先へ投げる。守備の近くに落ちれば取られる。四回で100ヤード進み、線を越えればまた四回もらえる。',
    how: [
      '押していると的が前に進む。',
      'ボールと選手が出会うように離す。',
      'キャッチした分だけ前に進む。',
      '四回で線を越えられなければ終わり。',
    ],
    tips: [
      '選手の前へ投げる。ボールが飛ぶ間も走り続けている。',
      '遠くへ投げるほど滞空時間が長い。その分だけ多く前を見る。',
      '守備の近くに落ちると取られる。そのときは残りが一つではなく二つ減る。',
    ],
  },

  es: {
    tagline: 'Lanza a donde va a estar.',
    yards: 'Yardas', downs: 'Intentos', best: 'Récord',
    readyTitle: 'Busca al receptor',
    readyBody: 'Mantén pulsado para llegar más lejos.<br>Suelta para que balón y receptor lleguen a la vez.',
    legend1: 'Mantén — la diana avanza por el campo',
    legend2: 'Suelta — el balón tarda en caer',
    legend3: 'Apunta delante de él, no a él',
    start: 'Empezar',
    overTitle: '¡Se acabaron los intentos!',
    retry: 'Otra vez',
    paused: 'En pausa',
    pausedHint: 'Pulsa P otra vez para seguir.',
    resume: 'Continuar',
    help: 'Mantén pulsado el campo y suelta para lanzar<br>Espacio o Enter también · P pausa',
    readyHint: 'Mantén pulsado',
    holdHint: 'Suelta para lanzar',
    caught: '¡Atrapado!',
    incomplete: 'Incompleto',
    picked: '¡Interceptado!',
    touchdown: '¡TOUCHDOWN!',
    gain: '+{n} yd',
    toGo: 'faltan {n}',
    about:
      'Tú lanzas, otro corre. Mientras mantienes pulsado, la diana avanza por el campo; al soltar, el balón sale. Pero el balón tarda en caer y el receptor no se para, así que hay que lanzar a donde va a estar, no a donde está. Si cae cerca de un defensa, te lo quitan. Cuatro intentos para cien yardas, y al cruzar la línea te dan otros cuatro.',
    how: [
      'Mantén pulsado para que la diana avance.',
      'Suelta para que balón y receptor se encuentren.',
      'Cada recepción te adelanta esas yardas.',
      'Cuatro intentos para cruzar la línea, o se acaba.',
    ],
    tips: [
      'Lanza por delante del receptor: sigue corriendo mientras el balón está en el aire.',
      'Cuanto más lejos lanzas, más tarda en caer, así que anticipa más en los envíos largos.',
      'Un balón que cae cerca de un defensa se intercepta, y eso cuesta dos intentos en vez de uno.',
    ],
  },

  fr: {
    tagline: 'Vise où il va être.',
    yards: 'Yards', downs: 'Essais', best: 'Record',
    readyTitle: 'Trouve le receveur',
    readyBody: 'Maintiens pour envoyer plus loin.<br>Relâche pour que ballon et receveur arrivent ensemble.',
    legend1: 'Maintiens — la cible avance sur le terrain',
    legend2: 'Relâche — le ballon met du temps à retomber',
    legend3: 'Vise devant lui, pas sur lui',
    start: 'Commencer',
    overTitle: 'Plus d’essais !',
    retry: 'Rejouer',
    paused: 'En pause',
    pausedHint: 'Appuie encore sur P pour continuer.',
    resume: 'Reprendre',
    help: 'Maintiens sur le terrain, relâche pour lancer<br>Espace ou Entrée aussi · P pause',
    readyHint: 'Maintiens appuyé',
    holdHint: 'Relâche pour lancer',
    caught: 'Attrapé !',
    incomplete: 'Manqué',
    picked: 'Intercepté !',
    touchdown: 'TOUCHDOWN !',
    gain: '+{n} yd',
    toGo: 'reste {n}',
    about:
      'Tu lances, un autre court. Tant que tu maintiens, la cible avance sur le terrain ; en relâchant, le ballon part. Mais le ballon met du temps à retomber et le receveur ne s’arrête pas : il faut viser là où il ira, pas là où il est. Si ça retombe près d’un défenseur, c’est intercepté. Quatre essais pour cent yards, et franchir la ligne t’en redonne quatre.',
    how: [
      'Maintiens pour faire avancer la cible.',
      'Relâche pour que ballon et receveur se rejoignent.',
      'Chaque réception te fait gagner ces yards.',
      'Quatre essais pour franchir la ligne, sinon c’est fini.',
    ],
    tips: [
      'Lance devant le receveur : il continue de courir pendant que le ballon vole.',
      'Plus tu lances loin, plus le ballon reste en l’air, donc anticipe davantage sur les longues passes.',
      'Un ballon qui retombe près d’un défenseur est intercepté, et cela coûte deux essais au lieu d’un.',
    ],
  },

  zh: {
    tagline: '往他要去的地方传',
    yards: '码数', downs: '机会', best: '最高',
    readyTitle: '找到接球手',
    readyBody: '按住能传得更远。<br>松手让球和人同时到位。',
    legend1: '按住 — 落点往前推',
    legend2: '松手 — 球在空中要飞一会儿',
    legend3: '瞄他前面，不是瞄他',
    start: '开始',
    overTitle: '机会用完了！',
    retry: '再玩一次',
    paused: '暂停',
    pausedHint: '再按一次 P 继续。',
    resume: '继续',
    help: '在场地上按住，松手就传出去<br>空格或回车也行 · P 暂停',
    readyHint: '按住不放',
    holdHint: '松手就传',
    caught: '接到了！',
    incomplete: '没接到',
    picked: '被拦截！',
    touchdown: '达阵！',
    gain: '+{n} 码',
    toGo: '还剩 {n} 码',
    about:
      '传球的是你，跑的是别人。按住时落点会往前推，松手球就出去。可球在空中飞的时候接球手还在跑，所以要传到他将要到的位置，而不是他现在的位置。落在防守队员旁边就会被拦截。四次机会推进一百码，过线就再给你四次。',
    how: [
      '按住，落点会往前推。',
      '松手，让球和接球手碰面。',
      '接到多少码就前进多少码。',
      '四次机会内过不了线就结束。',
    ],
    tips: [
      '要传到接球手前面，球在飞的时候他一直在跑。',
      '传得越远，球在空中越久，长传就要提前更多。',
      '球落在防守队员旁边会被拦截，那时机会一次扣两下，不是一下。',
    ],
  },
};
