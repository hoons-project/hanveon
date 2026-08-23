// 탕탕 사격 안에서 쓰는 글.
// 게임 이름은 여기 없다 — `src/data/games.ts` 에 있다.

import type { Lang } from '../../i18n';

export type S = {
  tagline: string;
  score: string;
  life: string;
  best: string;
  wave: string;
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
  help: string;
  /** 캔버스에 뜨는 글 */
  gain: string;      // +{n}
  ouch: string;      // 맞았을 때
  lifeUp: string;    // 금색을 잡았을 때
  waveUp: string;    // 물결이 올라갈 때
  /** 게임 소개 두세 문장. 검색엔진이 읽는 본문이기도 하다. */
  about: string;
  /** 「어떻게 하나」 — 정확히 네 줄. 짧은 명령문. */
  how: [string, string, string, string];
  /** 「잘하는 요령」 — 정확히 세 줄. */
  tips: [string, string, string];
};

export const STR: Record<Lang, S> = {
  en: {
    tagline: 'They come from every side.',
    score: 'Score', life: 'Life', best: 'Best', wave: 'Wave',
    readyTitle: 'Hold On!',
    readyBody: 'Point where you want to shoot.<br>Hold down and it keeps firing.',
    legend1: 'A plain one — walks in',
    legend2: 'Small and quick',
    legend3: 'Tough — takes three hits',
    legend4: 'Gold — gives a life back',
    start: 'Start',
    overTitle: 'They got you!',
    retry: 'Play Again',
    paused: 'Paused',
    pausedHint: 'Press P again to keep going.',
    resume: 'Resume',
    help: 'Hold and aim with mouse or finger<br>← → to turn · Space to fire · P to pause',
    gain: '+{n}',
    ouch: 'Ouch!',
    lifeUp: '+1 life',
    waveUp: 'Wave {n}',
    about:
      'You stand in the middle while enemies walk in from every side. Point where you want to shoot and hold to keep firing; every 18 seconds the wave goes up and they arrive faster. You have three lives, and one goes each time something reaches you.',
    how: [
      'Aim with the mouse or a finger and hold to fire.',
      'Shoot them down before they reach the middle.',
      'You cannot move, so let nothing touch you.',
      'Lose all three lives and the run is over.',
    ],
    tips: [
      'The tough ones take three hits, so start on them while they are still far out.',
      'Gold only gives a life back when you are below three; at full health it is just points.',
      'Taking a hit shoves nearby enemies back and leaves you safe for a moment — use it to clear the crowded side.',
    ],
  },
  ko: {
    tagline: '사방에서 몰려와요',
    score: '점수', life: '목숨', best: '최고', wave: '물결',
    readyTitle: '버텨요!',
    readyBody: '쏘고 싶은 쪽을 가리켜요.<br>누르고 있으면 계속 나가요.',
    legend1: '그냥 걸어와요',
    legend2: '작고 빨라요',
    legend3: '튼튼해요 — 세 번 맞혀야 해요',
    legend4: '금색 — 목숨을 하나 돌려줘요',
    start: '시작',
    overTitle: '붙잡혔다!',
    retry: '다시 하기',
    paused: '잠깐 멈춤',
    pausedHint: 'P 키를 다시 누르면 이어서 해요.',
    resume: '이어 하기',
    help: '마우스나 손가락으로 누른 채 겨눠요<br>← → 로 돌리기 · 스페이스로 쏘기 · P 로 멈춤',
    gain: '+{n}',
    ouch: '아야!',
    lifeUp: '목숨 +1',
    waveUp: '물결 {n}',
    about:
      '가운데에 서서 사방에서 걸어오는 것들을 막는 게임이에요. 쏘고 싶은 쪽을 가리키고 누르고 있으면 총이 계속 나가요. 18초마다 물결이 한 단계 올라가고 갈수록 빠르게 몰려와요. 목숨은 셋, 몸에 닿을 때마다 하나씩 줄어요.',
    how: [
      '마우스나 손가락으로 쏠 쪽을 가리켜요.',
      '누르고 있으면 계속 나가요. 오기 전에 맞혀요.',
      '제자리에서 못 움직이니 닿게 두면 안 돼요.',
      '목숨 셋을 다 잃으면 끝이에요.',
    ],
    tips: [
      '튼튼한 놈은 세 번 맞혀야 해요. 멀리 있을 때 미리 쏘기 시작해요.',
      '금색은 목숨이 셋보다 적을 때만 하나 돌려줘요. 다 차 있으면 그냥 점수예요.',
      '한 대 맞으면 가까이 온 것들이 잠깐 밀려나요. 그 틈에 제일 몰린 쪽을 정리해요.',
    ],
  },
  ja: {
    tagline: '四方から来ます。',
    score: 'スコア', life: 'ライフ', best: 'ベスト', wave: 'ウェーブ',
    readyTitle: 'もちこたえて！',
    readyBody: '撃ちたい方をさします。<br>押しっぱなしで撃ち続けます。',
    legend1: 'ふつう — 歩いてきます',
    legend2: '小さくて速い',
    legend3: 'かたい — 三回当てる',
    legend4: '金 — ライフが一つ戻る',
    start: 'スタート',
    overTitle: 'つかまった！',
    retry: 'もう一度',
    paused: '一時停止',
    pausedHint: 'Pキーをもう一度押すと続きます。',
    resume: 'つづける',
    help: 'マウスか指で押しながらねらう<br>← → で回す・スペースで撃つ・Pで一時停止',
    gain: '+{n}',
    ouch: 'いたっ！',
    lifeUp: 'ライフ +1',
    waveUp: 'ウェーブ {n}',
    about:
      '真ん中に立って、四方から歩いてくる相手を撃つゲーム。撃ちたい方をさして、押しっぱなしにすると撃ち続ける。18秒ごとにウェーブが上がり、だんだん速く、数も増える。ライフは三つ。触れられるたびに一つ減る。',
    how: [
      'マウスか指でねらう方をさす。',
      '押したままにして、近づく前に倒す。',
      '自分は動けない。体当たりを許さない。',
      'ライフを三つとも失うと終わり。',
    ],
    tips: [
      'かたい相手は三回当てないと倒れない。遠いうちから撃ち始める。',
      '金色はライフが三つ未満のときだけ一つ戻る。満タンなら点数になるだけ。',
      '被弾すると近くの相手が押し戻され、少しの間は無敵。その隙に混んだ側を片づける。',
    ],
  },
  es: {
    tagline: 'Vienen por todos lados.',
    score: 'Puntos', life: 'Vida', best: 'Récord', wave: 'Oleada',
    readyTitle: '¡Aguanta!',
    readyBody: 'Apunta hacia donde quieras disparar.<br>Mantén pulsado y sigue disparando.',
    legend1: 'Normal, viene andando',
    legend2: 'Pequeño y rápido',
    legend3: 'Duro: aguanta tres tiros',
    legend4: 'Dorado: te devuelve una vida',
    start: 'Empezar',
    overTitle: '¡Te pillaron!',
    retry: 'Otra vez',
    paused: 'En pausa',
    pausedHint: 'Pulsa P otra vez para seguir.',
    resume: 'Continuar',
    help: 'Mantén pulsado y apunta con ratón o dedo<br>← → para girar · Espacio dispara · P pausa',
    gain: '+{n}',
    ouch: '¡Ay!',
    lifeUp: '+1 vida',
    waveUp: 'Oleada {n}',
    about:
      'Te quedas en el centro de la pista mientras los enemigos entran andando por todos lados. Apunta hacia donde quieras disparar y mantén pulsado para seguir disparando; cada 18 segundos sube la oleada y llegan más rápido. Tienes tres vidas y pierdes una cada vez que alguien te alcanza.',
    how: [
      'Apunta con el ratón o el dedo y mantén pulsado.',
      'Derríbalos antes de que lleguen al centro.',
      'No puedes moverte: que no te toque nadie.',
      'Se acaba cuando pierdes las tres vidas.',
    ],
    tips: [
      'Los duros aguantan tres tiros: empieza con ellos cuando todavía están lejos.',
      'El dorado solo devuelve vida si tienes menos de tres; con las tres, son puntos y ya.',
      'Al recibir un golpe salen despedidos los que estaban cerca y quedas a salvo un instante: aprovecha para limpiar ese lado.',
    ],
  },
  fr: {
    tagline: 'Ils arrivent de partout.',
    score: 'Score', life: 'Vie', best: 'Record', wave: 'Vague',
    readyTitle: 'Tiens bon !',
    readyBody: 'Vise là où tu veux tirer.<br>Maintiens appuyé, ça tire tout du long.',
    legend1: 'Normal, il avance',
    legend2: 'Petit et rapide',
    legend3: 'Costaud : trois tirs',
    legend4: 'Doré : rend une vie',
    start: 'Commencer',
    overTitle: 'Ils t’ont eu !',
    retry: 'Rejouer',
    paused: 'En pause',
    pausedHint: 'Appuie encore sur P pour continuer.',
    resume: 'Reprendre',
    help: 'Maintiens et vise à la souris ou au doigt<br>← → pour tourner · Espace pour tirer · P pause',
    gain: '+{n}',
    ouch: 'Aïe !',
    lifeUp: '+1 vie',
    waveUp: 'Vague {n}',
    about:
      'Tu restes au centre du terrain pendant que les ennemis arrivent à pied de tous les côtés. Vise l’endroit où tirer et maintiens appuyé pour tirer sans arrêt ; toutes les 18 secondes la vague monte et ils arrivent plus vite. Tu as trois vies, et tu en perds une dès que l’un d’eux t’atteint.',
    how: [
      'Vise à la souris ou au doigt, maintiens pour tirer.',
      'Abats-les avant qu’ils arrivent au centre.',
      'Tu ne peux pas bouger : ne laisse personne te toucher.',
      'La partie s’arrête à la troisième vie perdue.',
    ],
    tips: [
      'Les costauds encaissent trois tirs : commence par eux tant qu’ils sont loin.',
      'Le doré ne rend une vie que si tu en as moins de trois ; sinon ce sont juste des points.',
      'Un coup encaissé repousse les ennemis proches et te protège un instant : profites-en pour dégager le côté le plus chargé.',
    ],
  },
  zh: {
    tagline: '四面八方都来。',
    score: '分数', life: '生命', best: '最高', wave: '波次',
    readyTitle: '撑住！',
    readyBody: '指向你想打的方向。<br>按住就会一直开火。',
    legend1: '普通的，走过来',
    legend2: '又小又快',
    legend3: '结实，要打三次',
    legend4: '金色，还你一条命',
    start: '开始',
    overTitle: '被抓到了！',
    retry: '再玩一次',
    paused: '暂停',
    pausedHint: '再按一次 P 继续。',
    resume: '继续',
    help: '用鼠标或手指按住瞄准<br>← → 转向 · 空格开火 · 按 P 暂停',
    gain: '+{n}',
    ouch: '哎哟！',
    lifeUp: '生命 +1',
    waveUp: '第 {n} 波',
    about:
      '你站在场地正中间，敌人从四面八方走过来。指向想打的方向，按住就会一直开火。每 18 秒进入下一波，来得越来越快、越来越多。三条命，被碰到一次少一条，命没了这一局就结束。',
    how: [
      '用鼠标或手指指向要打的方向，按住开火。',
      '在它们走到中间之前打掉。',
      '你不能移动，别让它们碰到你。',
      '三条命全部失去就结束。',
    ],
    tips: [
      '结实的敌人要打三下，趁它还远就先开始打。',
      '金色只有在生命不满三条时才还你一条，满血时只算分数。',
      '被碰到之后附近的敌人会被推开，还有短暂无敌，趁这一下清掉最挤的一侧。',
    ],
  },
};
