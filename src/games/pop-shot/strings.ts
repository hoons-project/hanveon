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
    tagline: 'Enemies from every direction.',
    score: 'Score', life: 'Lives', best: 'Best', wave: 'Wave',
    readyTitle: 'Hold On!',
    readyBody: 'Aim where you want to shoot.<br>Hold down to keep firing.',
    legend1: 'Normal — walks straight in',
    legend2: 'Small and fast',
    legend3: 'Tough — takes three hits',
    legend4: 'Gold — restores one life',
    start: 'Start',
    overTitle: 'They got you!',
    retry: 'Play Again',
    paused: 'Paused',
    pausedHint: 'Press P again to keep going.',
    resume: 'Resume',
    help: 'Hold and aim with mouse or finger<br>← → turn · Space fire · P pause',
    gain: '+{n}',
    ouch: 'Ouch!',
    lifeUp: 'Life +1',
    waveUp: 'Wave {n}',
    about:
      'You stand in the middle while enemies close in from every direction. Aim where you want to shoot and hold to keep firing. Every 18 seconds a new wave begins and the enemies arrive faster. You have three lives, and you lose one whenever an enemy reaches you.',
    how: [
      'Aim with the mouse or a finger and hold to fire.',
      'Shoot enemies before they reach the middle.',
      'You cannot move, so do not let anything touch you.',
      'Lose all three lives and the run is over.',
    ],
    tips: [
      'Tough enemies take three hits, so start shooting them while they are still far away.',
      'Gold enemies restore a life only when you have fewer than three. At full health they are worth points only.',
      'Taking a hit knocks nearby enemies back and makes you safe for a moment. Use that opening to clear the most crowded side.',
    ],
  },
  ko: {
    tagline: '사방에서 몰려오는 적을 막아보세요.',
    score: '점수', life: '목숨', best: '최고', wave: '웨이브',
    readyTitle: '버텨보세요!',
    readyBody: '쏘고 싶은 방향을 겨눠요.<br>누르고 있으면 계속 발사됩니다.',
    legend1: '일반 — 곧장 걸어와요',
    legend2: '작고 빨라요',
    legend3: '튼튼함 — 세 번 맞혀야 해요',
    legend4: '금색 — 목숨을 하나 회복해요',
    start: '시작',
    overTitle: '붙잡혔다!',
    retry: '다시 하기',
    paused: '잠깐 멈춤',
    pausedHint: 'P 키를 다시 누르면 이어서 해요.',
    resume: '이어 하기',
    help: '마우스나 손가락으로 누른 채 조준<br>← → 회전 · 스페이스 발사 · P 멈춤',
    gain: '+{n}',
    ouch: '아야!',
    lifeUp: '목숨 +1',
    waveUp: '웨이브 {n}',
    about:
      '가운데에 서서 사방에서 다가오는 적을 막는 게임이에요. 쏘고 싶은 방향을 겨누고 누르고 있으면 계속 발사됩니다. 18초마다 다음 웨이브로 넘어가고 적들이 더 빠르게 몰려와요. 목숨은 세 개이며, 적이 몸에 닿을 때마다 하나씩 줄어듭니다.',
    how: [
      '마우스나 손가락으로 방향을 겨누고 누르고 있어요.',
      '적이 가운데까지 오기 전에 쓰러뜨려요.',
      '캐릭터는 움직일 수 없으니 적이 닿지 않게 해야 해요.',
      '목숨 세 개를 모두 잃으면 끝이에요.',
    ],
    tips: [
      '튼튼한 적은 세 번 맞혀야 쓰러져요. 멀리 있을 때부터 먼저 노려보세요.',
      '금색 적은 목숨이 세 개보다 적을 때만 하나를 회복해요. 목숨이 가득 차 있으면 점수만 얻습니다.',
      '한 대 맞으면 가까운 적들이 밀려나고 잠깐 안전해져요. 그 틈에 가장 몰린 쪽부터 정리하세요.',
    ],
  },
  ja: {
    tagline: '四方から迫る敵を撃ち返そう。',
    score: 'スコア', life: 'ライフ', best: 'ベスト', wave: 'ウェーブ',
    readyTitle: '耐えきれ！',
    readyBody: '撃ちたい方向を狙おう。<br>押し続けると連射します。',
    legend1: '通常 — まっすぐ近づく',
    legend2: '小さくて速い',
    legend3: 'タフ — 3発必要',
    legend4: '金色 — ライフを1つ回復',
    start: 'スタート',
    overTitle: 'やられた！',
    retry: 'もう一度',
    paused: '一時停止',
    pausedHint: 'Pキーをもう一度押すと続きます。',
    resume: 'つづける',
    help: 'マウスか指で狙って押し続ける<br>← → で回転 · スペースで発射 · Pで一時停止',
    gain: '+{n}',
    ouch: 'いたっ！',
    lifeUp: 'ライフ +1',
    waveUp: 'ウェーブ {n}',
    about:
      '中央に立ち、四方から迫ってくる敵を撃ち返すゲームです。撃ちたい方向を狙って押し続けると連射します。18秒ごとに次のウェーブへ進み、敵はだんだん速くなります。ライフは3つで、敵に触れられるたびに1つ減ります。',
    how: [
      'マウスか指で方向を狙い、押し続けて撃ちます。',
      '敵が中央へ来る前に倒しましょう。',
      '自分は動けないので、敵に触れられないようにします。',
      'ライフを3つとも失うと終了です。',
    ],
    tips: [
      'タフな敵は3発当てないと倒せません。遠いうちから優先して狙いましょう。',
      '金色の敵はライフが3つ未満のときだけ1つ回復します。満タンなら追加点だけです。',
      '被弾すると近くの敵が押し戻され、少しの間だけ安全になります。その隙に一番混んでいる方向を片づけましょう。',
    ],
  },
  es: {
    tagline: 'Enemigos por todas partes.',
    score: 'Puntos', life: 'Vidas', best: 'Récord', wave: 'Oleada',
    readyTitle: '¡Aguanta!',
    readyBody: 'Apunta hacia donde quieras disparar.<br>Mantén pulsado para seguir disparando.',
    legend1: 'Normal: avanza de frente',
    legend2: 'Pequeño y rápido',
    legend3: 'Resistente: aguanta tres disparos',
    legend4: 'Dorado: recupera una vida',
    start: 'Empezar',
    overTitle: '¡Te alcanzaron!',
    retry: 'Otra vez',
    paused: 'En pausa',
    pausedHint: 'Pulsa P otra vez para seguir.',
    resume: 'Continuar',
    help: 'Mantén pulsado y apunta con el ratón o el dedo<br>← → girar · Espacio disparar · P pausa',
    gain: '+{n}',
    ouch: '¡Ay!',
    lifeUp: 'Vida +1',
    waveUp: 'Oleada {n}',
    about:
      'Te quedas en el centro mientras los enemigos se acercan desde todas las direcciones. Apunta hacia donde quieras disparar y mantén pulsado para seguir disparando. Cada 18 segundos empieza una nueva oleada y llegan más rápido. Tienes tres vidas y pierdes una cada vez que un enemigo te alcanza.',
    how: [
      'Apunta con el ratón o el dedo y mantén pulsado para disparar.',
      'Derriba a los enemigos antes de que lleguen al centro.',
      'No puedes moverte, así que no dejes que nadie te toque.',
      'La partida termina cuando pierdes las tres vidas.',
    ],
    tips: [
      'Los resistentes aguantan tres disparos. Empieza con ellos mientras todavía están lejos.',
      'Los dorados solo recuperan una vida si tienes menos de tres. Con la vida al máximo solo dan puntos.',
      'Cuando recibes un golpe, los enemigos cercanos salen despedidos y quedas a salvo un instante. Aprovecha para limpiar el lado más cargado.',
    ],
  },
  fr: {
    tagline: 'Des ennemis arrivent de tous les côtés.',
    score: 'Score', life: 'Vies', best: 'Record', wave: 'Vague',
    readyTitle: 'Tiens bon !',
    readyBody: 'Vise dans la direction où tu veux tirer.<br>Maintiens appuyé pour tirer en continu.',
    legend1: 'Normal : avance tout droit',
    legend2: 'Petit et rapide',
    legend3: 'Costaud : encaisse trois tirs',
    legend4: 'Doré : rend une vie',
    start: 'Commencer',
    overTitle: 'Ils t’ont eu !',
    retry: 'Rejouer',
    paused: 'En pause',
    pausedHint: 'Appuie encore sur P pour continuer.',
    resume: 'Reprendre',
    help: 'Maintiens et vise à la souris ou au doigt<br>← → tourner · Espace tirer · P pause',
    gain: '+{n}',
    ouch: 'Aïe !',
    lifeUp: 'Vie +1',
    waveUp: 'Vague {n}',
    about:
      'Tu restes au centre pendant que les ennemis se rapprochent de tous les côtés. Vise dans la direction où tu veux tirer et maintiens appuyé pour tirer en continu. Une nouvelle vague commence toutes les 18 secondes et les ennemis deviennent plus rapides. Tu as trois vies et tu en perds une chaque fois qu’un ennemi t’atteint.',
    how: [
      'Vise à la souris ou au doigt et maintiens appuyé pour tirer.',
      'Abats les ennemis avant qu’ils atteignent le centre.',
      'Tu ne peux pas bouger, alors ne laisse personne te toucher.',
      'La partie s’arrête quand tu as perdu tes trois vies.',
    ],
    tips: [
      'Les costauds encaissent trois tirs. Commence à les viser tant qu’ils sont encore loin.',
      'Les ennemis dorés ne rendent une vie que si tu en as moins de trois. À pleine vie, ils rapportent seulement des points.',
      'Quand tu prends un coup, les ennemis proches sont repoussés et tu es protégé un instant. Profites-en pour dégager le côté le plus encombré.',
    ],
  },
  zh: {
    tagline: '敌人从四面八方逼近。',
    score: '分数', life: '生命', best: '最高', wave: '波次',
    readyTitle: '撑住！',
    readyBody: '瞄准你想射击的方向。<br>按住就会连续开火。',
    legend1: '普通：直接走过来',
    legend2: '体型小，速度快',
    legend3: '结实：需要打三次',
    legend4: '金色：恢复一条命',
    start: '开始',
    overTitle: '被碰到了！',
    retry: '再玩一次',
    paused: '暂停',
    pausedHint: '再按一次 P 继续。',
    resume: '继续',
    help: '用鼠标或手指按住瞄准<br>← → 转向 · 空格开火 · P 暂停',
    gain: '+{n}',
    ouch: '哎哟！',
    lifeUp: '生命 +1',
    waveUp: '第 {n} 波',
    about:
      '你站在场地正中间，敌人从四面八方不断靠近。瞄准想射击的方向，按住就会连续开火。每 18 秒进入下一波，敌人的速度也会越来越快。你有三条命，每被敌人碰到一次就会少一条。',
    how: [
      '用鼠标或手指瞄准方向，按住开火。',
      '在敌人走到中间之前把它们打掉。',
      '你不能移动，所以不要让敌人碰到你。',
      '三条命全部失去后游戏结束。',
    ],
    tips: [
      '结实的敌人要打三下，趁它还远就优先处理。',
      '金色敌人只有在生命少于三条时才会恢复一条命。满血时只会加分。',
      '被碰到后，附近敌人会被推开，而且你会短暂无敌。趁这个机会先清掉最拥挤的一侧。',
    ],
  },
};
