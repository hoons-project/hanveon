// 슝슝 비행기 안에서 쓰는 글.
// 게임 이름은 여기 없다 — `src/data/games.ts` 에 있다.

import type { Lang } from '../../i18n';

/** 총 종류 넷. */
type Gun = 'basic' | 'spread' | 'laser' | 'homing';

export type S = {
  tagline: string;
  score: string;
  life: string;
  best: string;
  readyTitle: string;
  readyBody: string;
  legend1: string;
  legend2: string;
  legend3: string;
  legend4: string;
  start: string;
  overTitle: string;
  timeLabel: string;
  secs: string;
  retry: string;
  paused: string;
  pausedHint: string;
  resume: string;
  padBomb: string;
  help: string;
  /** 총 이름 — 주울 때 뜨는 글과 화면 아래 표시에 쓴다. */
  gunName: Record<Gun, string>;
  /** 알 위에 찍히는 한 글자. */
  gunMark: Record<Gun, string>;
  bombMark: string;
  gunLevel: string;
  bombs: string;
  bombsNone: string;
  bombBang: string;
  bossPop: string;
  levelUp: string;
  lifePop: string;
  bombPickup: string;
  /** 게임 소개 두세 문장. 검색엔진이 읽는 본문이기도 하다. */
  about: string;
  /** 「어떻게 하나」 — 정확히 네 줄. 짧은 명령문. */
  how: [string, string, string, string];
  /** 「잘하는 요령」 — 정확히 세 줄. */
  tips: [string, string, string];
};

export const STR: Record<Lang, S> = {
  en: {
    tagline: 'Fires by itself. Just dodge.',
    score: 'Score', life: 'Life', best: 'Best',
    readyTitle: 'Take Off!',
    readyBody: 'It shoots by itself.<br>Just dodge and blast enemies.',
    legend1: 'Powers up your gun',
    legend2: 'Changes your weapon',
    legend3: 'One extra life',
    legend4: 'A bomb — clears the screen',
    start: 'Start',
    overTitle: 'Shot Down!',
    timeLabel: 'Time',
    secs: '{n}s',
    retry: 'Play Again',
    paused: 'Paused',
    pausedHint: 'Press P again to keep going.',
    resume: 'Resume',
    padBomb: 'Use Bomb',
    help: 'Drag to move · Gun fires by itself<br>← → ↑ ↓ also move · Space bomb · P pause',
    gunName: { basic: 'Basic', spread: 'Spread', laser: 'Laser', homing: 'Homing' },
    gunMark: { basic: 'B', spread: 'S', laser: 'L', homing: 'H' },
    bombMark: 'B',
    gunLevel: '{gun} lv.{n}',
    bombs: 'Bombs {dots}',
    bombsNone: 'No bombs',
    bombBang: 'Boom!',
    bossPop: 'Boss!',
    levelUp: 'Lv.{n}',
    lifePop: 'Life +1',
    bombPickup: 'Bomb +1',
    about:
      'A top-down shooter where the plane fires on its own, so your whole job is dodging. Enemies drop weapon swaps, power-ups, spare lives and bombs, and a boss turns up roughly every 40 seconds. You start with three lives and the run ends when the last one is gone.',
    how: [
      'Drag on the screen to fly, or use the arrow keys.',
      'The gun fires by itself — just line up the shot.',
      'Dodge enemy bullets and never touch an enemy.',
      'Lose all three lives and the run is over.',
    ],
    tips: [
      'A hit costs a life and knocks your gun down a level, so a bomb is cheaper than a crash.',
      'A bomb wipes the enemy bullets on screen and keeps you safe for a moment — save one for when you are boxed in.',
      'The big slow enemies always drop something when destroyed, so shoot them instead of slipping past.',
    ],
  },
  ko: {
    tagline: '알아서 쏴요. 피하기만 하면 돼요',
    score: '점수', life: '목숨', best: '최고',
    readyTitle: '하늘 위로',
    readyBody: '총은 알아서 나가요.<br>피하면서 적을 없애면 돼요.',
    legend1: '총이 한 단계 세져요',
    legend2: '총 종류가 바뀌어요',
    legend3: '목숨 하나',
    legend4: '폭탄 하나 — 화면을 싹 쓸어요',
    start: '시작',
    overTitle: '격추당했다!',
    timeLabel: '버틴 시간',
    secs: '{n}초',
    retry: '다시 하기',
    paused: '잠깐 멈춤',
    pausedHint: 'P 키를 다시 누르면 이어서 해요.',
    resume: '이어 하기',
    padBomb: '폭탄 터뜨리기',
    help: '화면을 끌어서 움직여요 · 총은 알아서 나가요<br>← → ↑ ↓ 로도 움직여요 · 스페이스 폭탄 · P 멈춤',
    gunName: { basic: '기본총', spread: '퍼지는총', laser: '레이저', homing: '유도탄' },
    gunMark: { basic: '기', spread: '퍼', laser: '레', homing: '유' },
    bombMark: '폭',
    gunLevel: '{gun} {n}단계',
    bombs: '폭탄 {dots}',
    bombsNone: '폭탄 없음',
    bombBang: '펑!',
    bossPop: '대장이다!',
    levelUp: '{n}단계',
    lifePop: '목숨 +1',
    bombPickup: '폭탄 +1',
    about:
      '총이 알아서 나가는 비행기 게임이에요. 하는 일은 피하는 것 하나예요. 적을 잡으면 총을 세게 하는 알, 다른 총, 목숨, 폭탄이 떨어지고 40초쯤마다 큰 대장이 나와요. 목숨 셋이 다 없어지면 그 판은 끝나요.',
    how: [
      '화면을 끌어서 움직여요. 화살표 키로도 돼요.',
      '총은 알아서 나가니까 겨누기만 하면 돼요.',
      '적 총알도, 적 몸도 닿지 않게 피해요.',
      '목숨 셋을 다 잃으면 끝이에요.',
    ],
    tips: [
      '한 대 맞으면 목숨만 주는 게 아니라 총 세기도 한 단계 내려가요. 위험하면 아끼지 말고 폭탄을 써요.',
      '폭탄을 터뜨리면 화면에 있던 적 총알이 싹 사라지고 잠깐 안 맞아요. 둘러싸였을 때 쓰면 좋아요.',
      '느리고 큰 적은 잡으면 꼭 뭔가 떨어뜨려요. 그냥 지나치지 말고 잡는 게 이득이에요.',
    ],
  },
  ja: {
    tagline: '弾は自動発射。よけるだけ。',
    score: 'スコア', life: 'ライフ', best: 'ベスト',
    readyTitle: '大空へ！',
    readyBody: '弾は自動で出ます。<br>よけながら敵を倒そう。',
    legend1: '弾が強くなる',
    legend2: '武器が変わる',
    legend3: 'ライフが1つ増える',
    legend4: '爆弾——画面を一掃',
    start: 'スタート',
    overTitle: '撃墜された！',
    timeLabel: '生存時間',
    secs: '{n}秒',
    retry: 'もう一度',
    paused: '一時停止',
    pausedHint: 'Pキーをもう一度押すと続きます。',
    resume: 'つづける',
    padBomb: '爆弾を使う',
    help: '画面をドラッグして移動・弾は自動発射<br>← → ↑ ↓ でも移動・スペースで爆弾・Pで一時停止',
    gunName: { basic: 'ノーマル', spread: '拡散', laser: 'レーザー', homing: '誘導' },
    gunMark: { basic: 'ノ', spread: '拡', laser: 'レ', homing: '誘' },
    bombMark: '爆',
    gunLevel: '{gun} Lv.{n}',
    bombs: '爆弾 {dots}',
    bombsNone: '爆弾なし',
    bombBang: 'ドン！',
    bossPop: 'ボス登場！',
    levelUp: 'Lv.{n}',
    lifePop: 'ライフ+1',
    bombPickup: '爆弾+1',
    about:
      '弾が自動で出る縦スクロールのシューティング。やることはよけることだけ。敵を倒すと武器や強化、ライフ、爆弾が落ち、40秒ほどごとにボスが現れる。ライフを三つとも失うと、その回は終わり。',
    how: [
      '画面をドラッグして動かす。矢印キーでも動く。',
      '弾は自動で出る。ねらいを合わせるだけ。',
      '敵弾をよけ、敵の体にも触れない。',
      'ライフを三つとも失うと終わり。',
    ],
    tips: [
      '被弾するとライフだけでなく武器のレベルも一つ下がる。危ないときは爆弾を惜しまない。',
      '爆弾は画面の敵弾を消し、その間は少し無敵になる。囲まれたときのために一つ残しておく。',
      '大きくて遅い敵は倒すと必ずアイテムを落とす。よけずに撃ち落とすほうが得。',
    ],
  },
  es: {
    tagline: 'Dispara sola. Solo esquiva.',
    score: 'Puntos', life: 'Vida', best: 'Récord',
    readyTitle: '¡Al aire!',
    readyBody: 'Dispara solo.<br>Esquiva y derriba enemigos.',
    legend1: 'Mejora tu arma',
    legend2: 'Cambia de arma',
    legend3: 'Una vida extra',
    legend4: 'Una bomba: limpia la pantalla',
    start: 'Empezar',
    overTitle: '¡Te derribaron!',
    timeLabel: 'Tiempo',
    secs: '{n} s',
    retry: 'Otra vez',
    paused: 'En pausa',
    pausedHint: 'Pulsa P otra vez para seguir.',
    resume: 'Continuar',
    padBomb: 'Usar bomba',
    help: 'Arrastra para moverte · El arma dispara sola<br>← → ↑ ↓ también mueven · Espacio bomba · P pausa',
    gunName: { basic: 'Básica', spread: 'Dispersión', laser: 'Láser', homing: 'Guiado' },
    gunMark: { basic: 'B', spread: 'D', laser: 'L', homing: 'G' },
    bombMark: 'B',
    gunLevel: '{gun} niv.{n}',
    bombs: 'Bombas {dots}',
    bombsNone: 'Sin bombas',
    bombBang: '¡Bum!',
    bossPop: '¡Jefe!',
    levelUp: 'Niv.{n}',
    lifePop: 'Vida +1',
    bombPickup: 'Bomba +1',
    about:
      'Un juego de naves en vertical donde el avión dispara solo, así que tu único trabajo es esquivar. Los enemigos sueltan armas nuevas, mejoras, vidas y bombas, y cada 40 segundos aparece un jefe. Empiezas con tres vidas y la partida acaba cuando pierdes la última.',
    how: [
      'Arrastra por la pantalla o usa las flechas.',
      'El arma dispara sola: solo tienes que apuntar.',
      'Esquiva las balas y no choques con nadie.',
      'Se acaba cuando pierdes las tres vidas.',
    ],
    tips: [
      'Cada golpe te quita una vida y además baja un nivel el arma: sale más barato gastar una bomba.',
      'La bomba borra las balas enemigas de la pantalla y te deja a salvo un instante; guarda una para cuando te rodeen.',
      'Los enemigos grandes y lentos siempre sueltan algo al caer, así que conviene derribarlos.',
    ],
  },
  fr: {
    tagline: 'Il tire tout seul. Esquive.',
    score: 'Score', life: 'Vie', best: 'Record',
    readyTitle: 'Envol !',
    readyBody: 'Il tire tout seul.<br>Esquive et abats les ennemis.',
    legend1: 'Améliore ton arme',
    legend2: "Change d'arme",
    legend3: 'Une vie de plus',
    legend4: "Une bombe : nettoie l'écran",
    start: 'Commencer',
    overTitle: 'Abattu !',
    timeLabel: 'Temps',
    secs: '{n} s',
    retry: 'Rejouer',
    paused: 'En pause',
    pausedHint: 'Appuie encore sur P pour continuer.',
    resume: 'Reprendre',
    padBomb: 'Utiliser bombe',
    help: 'Glisse pour te déplacer · Le tir est automatique<br>← → ↑ ↓ déplacent aussi · Espace bombe · P pause',
    gunName: { basic: 'Basique', spread: 'Dispersion', laser: 'Laser', homing: 'Guidé' },
    gunMark: { basic: 'B', spread: 'D', laser: 'L', homing: 'G' },
    bombMark: 'B',
    gunLevel: '{gun} niv.{n}',
    bombs: 'Bombes {dots}',
    bombsNone: 'Pas de bombes',
    bombBang: 'Boum !',
    bossPop: 'Boss !',
    levelUp: 'Niv.{n}',
    lifePop: 'Vie +1',
    bombPickup: 'Bombe +1',
    about:
      'Un shoot vertical où l’avion tire tout seul : ton seul travail, c’est d’esquiver. Les ennemis lâchent d’autres armes, des améliorations, des vies et des bombes, et un boss arrive environ toutes les 40 secondes. Tu commences avec trois vies et la partie s’arrête à la dernière perdue.',
    how: [
      'Glisse sur l’écran ou utilise les flèches.',
      'Le tir est automatique : tu n’as qu’à viser.',
      'Esquive les tirs et ne percute aucun ennemi.',
      'La partie s’arrête à la troisième vie perdue.',
    ],
    tips: [
      'Un coup encaissé coûte une vie et fait baisser l’arme d’un niveau : une bombe revient moins cher.',
      'La bombe efface les tirs ennemis à l’écran et te protège un instant ; garde-en une pour les moments où tu es cerné.',
      'Les gros ennemis lents lâchent toujours un objet quand ils tombent : mieux vaut les abattre que les contourner.',
    ],
  },
  zh: {
    tagline: '自动开火，只要躲避就好。',
    score: '分数', life: '生命', best: '最高',
    readyTitle: '起飞吧!',
    readyBody: '子弹会自动发射。<br>躲避的同时消灭敌人。',
    legend1: '武器升级',
    legend2: '更换武器',
    legend3: '多一条命',
    legend4: '一颗炸弹——清空画面',
    start: '开始',
    overTitle: '被击落了!',
    timeLabel: '存活时间',
    secs: '{n}秒',
    retry: '再玩一次',
    paused: '暂停',
    pausedHint: '再按一次 P 继续。',
    resume: '继续',
    padBomb: '使用炸弹',
    help: '拖动屏幕移动·子弹自动发射<br>← → ↑ ↓ 也能移动·空格键炸弹·P 暂停',
    gunName: { basic: '普通', spread: '散射', laser: '激光', homing: '追踪' },
    gunMark: { basic: '普', spread: '散', laser: '激', homing: '追' },
    bombMark: '炸',
    gunLevel: '{gun} {n}级',
    bombs: '炸弹 {dots}',
    bombsNone: '没有炸弹',
    bombBang: '砰！',
    bossPop: '老大来了!',
    levelUp: '{n}级',
    lifePop: '生命+1',
    bombPickup: '炸弹+1',
    about:
      '竖版射击游戏，子弹自动发射，你要做的只是闪避。打掉敌人会掉出别的武器、强化、生命和炸弹，大约每 40 秒出现一次首领。开局三条命，全部用完这一局就结束。',
    how: [
      '拖动画面移动，方向键也可以。',
      '子弹自动发射，你只要对准。',
      '躲开子弹，也别撞上敌人的身体。',
      '三条命全部失去就结束。',
    ],
    tips: [
      '被打中不只掉一条命，武器等级也会降一级，与其硬挨不如扔颗炸弹。',
      '炸弹会清掉屏幕上的敌方子弹，而且有短暂无敌，留一颗给被围住的时候。',
      '又大又慢的敌人被打掉一定会掉道具，绕开不如打掉。',
    ],
  },
};
