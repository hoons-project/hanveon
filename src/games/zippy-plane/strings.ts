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
    tagline: 'Auto-fire. Just dodge.',
    score: 'Score', life: 'Lives', best: 'Best',
    readyTitle: 'Take Off!',
    readyBody: 'Your guns fire automatically.<br>Dodge, line up your shots and take enemies down.',
    legend1: 'Powers up your weapon',
    legend2: 'Changes your weapon',
    legend3: 'Gives you one extra life',
    legend4: 'Bomb — clears enemy bullets',
    start: 'Start',
    overTitle: 'Shot Down!',
    timeLabel: 'Time',
    secs: '{n}s',
    retry: 'Play Again',
    paused: 'Paused',
    pausedHint: 'Press P again to keep going.',
    resume: 'Resume',
    padBomb: 'Use Bomb',
    help: 'Drag to move · Guns fire automatically<br>← → ↑ ↓ also move · Space bomb · P pause',
    gunName: { basic: 'Basic', spread: 'Spread', laser: 'Laser', homing: 'Homing' },
    gunMark: { basic: 'B', spread: 'S', laser: 'L', homing: 'H' },
    bombMark: 'B',
    gunLevel: '{gun} Lv.{n}',
    bombs: 'Bombs {dots}',
    bombsNone: 'No bombs',
    bombBang: 'Boom!',
    bossPop: 'Boss!',
    levelUp: 'Lv.{n}',
    lifePop: 'Life +1',
    bombPickup: 'Bomb +1',
    about:
      'A top-down shooter with automatic fire, so you can focus on dodging and lining up your shots. Enemies drop weapon changes, upgrades, extra lives and bombs, and a boss appears about every 40 seconds. You start with three lives; lose the last one and the run is over.',
    how: [
      'Drag on the screen to move, or use the arrow keys.',
      'Your weapon fires automatically, so line yourself up with the target.',
      'Dodge enemy bullets and avoid touching enemies.',
      'Lose all three lives and the run is over.',
    ],
    tips: [
      'Taking a hit costs a life and drops your weapon by one level, so using a bomb can be cheaper than taking the hit.',
      'A bomb clears enemy bullets and protects you for a moment. Keep one for when you get boxed in.',
      'Large, slow enemies always drop an item when destroyed, so they are usually worth taking down.',
    ],
  },
  ko: {
    tagline: '자동으로 쏴요. 피하는 데 집중하세요.',
    score: '점수', life: '목숨', best: '최고',
    readyTitle: '출발!',
    readyBody: '총은 자동으로 나가요.<br>피하면서 적을 겨누고 쓰러뜨리세요.',
    legend1: '무기가 한 단계 강해져요',
    legend2: '무기 종류가 바뀌어요',
    legend3: '목숨이 하나 늘어요',
    legend4: '폭탄 — 적 총알을 한꺼번에 지워요',
    start: '시작',
    overTitle: '격추됐다!',
    timeLabel: '버틴 시간',
    secs: '{n}초',
    retry: '다시 하기',
    paused: '잠깐 멈춤',
    pausedHint: 'P 키를 다시 누르면 이어서 해요.',
    resume: '이어 하기',
    padBomb: '폭탄 사용',
    help: '화면을 끌어서 움직여요 · 총은 자동 발사<br>← → ↑ ↓ 로도 이동 · 스페이스 폭탄 · P 멈춤',
    gunName: { basic: '기본', spread: '확산', laser: '레이저', homing: '유도' },
    gunMark: { basic: '기', spread: '확', laser: '레', homing: '유' },
    bombMark: '폭',
    gunLevel: '{gun} {n}단계',
    bombs: '폭탄 {dots}',
    bombsNone: '폭탄 없음',
    bombBang: '펑!',
    bossPop: '보스 등장!',
    levelUp: '{n}단계',
    lifePop: '목숨 +1',
    bombPickup: '폭탄 +1',
    about:
      '총이 자동으로 발사되는 세로형 슈팅 게임이에요. 피하면서 적과 일직선만 맞춰주면 됩니다. 적을 쓰러뜨리면 무기 변경, 강화, 추가 목숨, 폭탄이 나오고 약 40초마다 보스가 등장해요. 목숨 세 개를 모두 잃으면 게임이 끝납니다.',
    how: [
      '화면을 끌어서 움직여요. 화살표 키로도 움직일 수 있어요.',
      '총은 자동으로 나가니 적과 위치만 맞춰주세요.',
      '적 총알을 피하고 적 몸에도 닿지 않게 해요.',
      '목숨 세 개를 모두 잃으면 끝이에요.',
    ],
    tips: [
      '한 대 맞으면 목숨이 줄고 무기 단계도 하나 내려갑니다. 위험할 때는 폭탄을 아끼지 않는 편이 나아요.',
      '폭탄을 쓰면 화면의 적 총알이 사라지고 잠깐 안전해져요. 둘러싸였을 때 쓸 수 있게 하나쯤 남겨두세요.',
      '크고 느린 적은 쓰러뜨리면 반드시 아이템을 떨어뜨립니다. 피해서 지나가기보다 잡는 편이 이득이에요.',
    ],
  },
  ja: {
    tagline: '自動で撃つ。あとはよけるだけ。',
    score: 'スコア', life: 'ライフ', best: 'ベスト',
    readyTitle: 'テイクオフ！',
    readyBody: '攻撃は自動です。<br>敵を狙いながら、弾をよけよう。',
    legend1: '武器が1段階強くなる',
    legend2: '武器の種類が変わる',
    legend3: 'ライフが1つ増える',
    legend4: '爆弾 — 敵弾をまとめて消す',
    start: 'スタート',
    overTitle: '撃墜された！',
    timeLabel: '生存時間',
    secs: '{n}秒',
    retry: 'もう一度',
    paused: '一時停止',
    pausedHint: 'Pキーをもう一度押すと続きます。',
    resume: 'つづける',
    padBomb: '爆弾を使う',
    help: '画面をドラッグして移動 · 攻撃は自動<br>← → ↑ ↓ でも移動 · スペースで爆弾 · Pで一時停止',
    gunName: { basic: 'ノーマル', spread: '拡散', laser: 'レーザー', homing: '誘導' },
    gunMark: { basic: 'ノ', spread: '拡', laser: 'レ', homing: '誘' },
    bombMark: '爆',
    gunLevel: '{gun} Lv.{n}',
    bombs: '爆弾 {dots}',
    bombsNone: '爆弾なし',
    bombBang: 'ドン！',
    bossPop: 'ボス登場！',
    levelUp: 'Lv.{n}',
    lifePop: 'ライフ +1',
    bombPickup: '爆弾 +1',
    about:
      '自動で攻撃する縦スクロールシューティングです。自分は弾をよけつつ、敵と位置を合わせればOK。敵を倒すと武器変更、強化、ライフ、爆弾などが落ち、約40秒ごとにボスが現れます。ライフを3つとも失うとゲーム終了です。',
    how: [
      '画面をドラッグして移動します。矢印キーでも操作できます。',
      '攻撃は自動なので、敵と位置を合わせるだけです。',
      '敵の弾をよけ、敵本体にも触れないようにします。',
      'ライフを3つとも失うと終了です。',
    ],
    tips: [
      '被弾するとライフだけでなく武器レベルも1つ下がります。危ないときは爆弾を惜しまないほうが得です。',
      '爆弾を使うと画面上の敵弾が消え、少しの間安全になります。囲まれたときのために1つ残しておきましょう。',
      '大きくて遅い敵は、倒すと必ずアイテムを落とします。避けて通るより倒す価値があります。',
    ],
  },
  es: {
    tagline: 'Disparo automático. Tú céntrate en esquivar.',
    score: 'Puntos', life: 'Vidas', best: 'Récord',
    readyTitle: '¡Despegue!',
    readyBody: 'El arma dispara sola.<br>Esquiva, apunta con la posición y derriba enemigos.',
    legend1: 'Mejora el arma un nivel',
    legend2: 'Cambia el tipo de arma',
    legend3: 'Añade una vida',
    legend4: 'Bomba: elimina las balas enemigas',
    start: 'Empezar',
    overTitle: '¡Te derribaron!',
    timeLabel: 'Tiempo',
    secs: '{n} s',
    retry: 'Otra vez',
    paused: 'En pausa',
    pausedHint: 'Pulsa P otra vez para seguir.',
    resume: 'Continuar',
    padBomb: 'Usar bomba',
    help: 'Arrastra para moverte · El arma dispara sola<br>← → ↑ ↓ también mueven · Espacio: bomba · P: pausa',
    gunName: { basic: 'Básica', spread: 'Dispersión', laser: 'Láser', homing: 'Guiada' },
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
      'Un shooter vertical con disparo automático: tú te concentras en esquivar y colocarte frente a los enemigos. Al destruirlos pueden soltar cambios de arma, mejoras, vidas y bombas, y aparece un jefe aproximadamente cada 40 segundos. Empiezas con tres vidas; al perder la última, termina la partida.',
    how: [
      'Arrastra por la pantalla para moverte o usa las flechas.',
      'El arma dispara sola: colócate frente al objetivo.',
      'Esquiva las balas y evita chocar con los enemigos.',
      'La partida termina cuando pierdes las tres vidas.',
    ],
    tips: [
      'Cada golpe te quita una vida y baja un nivel el arma, así que a veces compensa más gastar una bomba.',
      'La bomba borra las balas enemigas y te protege un instante. Guarda una para cuando te quedes rodeado.',
      'Los enemigos grandes y lentos siempre dejan un objeto al caer, así que suele merecer la pena derribarlos.',
    ],
  },
  fr: {
    tagline: 'Tir automatique. À toi d’esquiver.',
    score: 'Score', life: 'Vies', best: 'Record',
    readyTitle: 'Décollage !',
    readyBody: 'Le tir est automatique.<br>Esquive, aligne-toi sur les ennemis et abats-les.',
    legend1: 'Améliore ton arme d’un niveau',
    legend2: 'Change de type d’arme',
    legend3: 'Ajoute une vie',
    legend4: 'Bombe : efface les tirs ennemis',
    start: 'Commencer',
    overTitle: 'Abattu !',
    timeLabel: 'Temps',
    secs: '{n} s',
    retry: 'Rejouer',
    paused: 'En pause',
    pausedHint: 'Appuie encore sur P pour continuer.',
    resume: 'Reprendre',
    padBomb: 'Utiliser une bombe',
    help: 'Glisse pour te déplacer · Le tir est automatique<br>← → ↑ ↓ pour bouger aussi · Espace : bombe · P : pause',
    gunName: { basic: 'Standard', spread: 'Dispersion', laser: 'Laser', homing: 'Guidage' },
    gunMark: { basic: 'S', spread: 'D', laser: 'L', homing: 'G' },
    bombMark: 'B',
    gunLevel: '{gun} niv.{n}',
    bombs: 'Bombes {dots}',
    bombsNone: 'Aucune bombe',
    bombBang: 'Boum !',
    bossPop: 'Boss !',
    levelUp: 'Niv.{n}',
    lifePop: 'Vie +1',
    bombPickup: 'Bombe +1',
    about:
      'Un shoot vertical à tir automatique : tu peux te concentrer sur l’esquive et l’alignement avec les ennemis. Ils peuvent lâcher de nouvelles armes, des améliorations, des vies et des bombes, et un boss arrive environ toutes les 40 secondes. Tu commences avec trois vies ; la partie s’arrête quand tu perds la dernière.',
    how: [
      'Glisse sur l’écran pour te déplacer ou utilise les flèches.',
      'Le tir est automatique : aligne-toi simplement sur la cible.',
      'Esquive les tirs ennemis et évite toute collision.',
      'La partie se termine quand tu as perdu tes trois vies.',
    ],
    tips: [
      'Un coup te coûte une vie et fait aussi baisser ton arme d’un niveau. Dans les moments dangereux, une bombe peut coûter moins cher.',
      'Une bombe efface les tirs ennemis et te protège un instant. Garde-en une pour les moments où tu es encerclé.',
      'Les gros ennemis lents lâchent toujours un objet lorsqu’ils sont détruits. Il vaut généralement mieux les abattre que les contourner.',
    ],
  },
  zh: {
    tagline: '自动开火，你只管躲。',
    score: '分数', life: '生命', best: '最高',
    readyTitle: '起飞！',
    readyBody: '武器会自动开火。<br>一边躲避，一边对准敌人。',
    legend1: '武器提升一级',
    legend2: '切换武器类型',
    legend3: '增加一条命',
    legend4: '炸弹 — 清掉敌方子弹',
    start: '开始',
    overTitle: '被击落了！',
    timeLabel: '存活时间',
    secs: '{n}秒',
    retry: '再玩一次',
    paused: '暂停',
    pausedHint: '再按一次 P 继续。',
    resume: '继续',
    padBomb: '使用炸弹',
    help: '拖动屏幕移动 · 自动开火<br>← → ↑ ↓ 也能移动 · 空格：炸弹 · P：暂停',
    gunName: { basic: '普通', spread: '散射', laser: '激光', homing: '追踪' },
    gunMark: { basic: '普', spread: '散', laser: '激', homing: '追' },
    bombMark: '炸',
    gunLevel: '{gun} {n}级',
    bombs: '炸弹 {dots}',
    bombsNone: '没有炸弹',
    bombBang: '砰！',
    bossPop: '首领来了！',
    levelUp: '{n}级',
    lifePop: '生命 +1',
    bombPickup: '炸弹 +1',
    about:
      '这是一款自动开火的竖版射击游戏，你可以把注意力放在躲避和对准敌人上。击败敌人后可能掉落武器切换、强化、生命或炸弹，大约每 40 秒还会出现一次首领。开局有三条命，全部失去后本局结束。',
    how: [
      '拖动画面移动，也可以使用方向键。',
      '武器会自动开火，只要把位置对准敌人。',
      '躲开敌方子弹，也不要撞到敌人。',
      '三条命全部失去后游戏结束。',
    ],
    tips: [
      '被击中会掉一条命，武器也会降一级。危险时用炸弹往往更划算。',
      '炸弹会清掉屏幕上的敌方子弹，并让你短暂安全。最好留一颗应付被包围的时候。',
      '又大又慢的敌人被击败后一定会掉道具，通常值得专门打掉。',
    ],
  },
};
