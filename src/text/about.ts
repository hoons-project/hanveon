// 소개 쪽. 여섯 나라말.
//
// 사람이 읽어서 재미있어야 하고, 로봇이 읽을 글도 여기가 제일 많다.
// **지어내지 않는다** — 게임 수, 나라말 수, 만든 방식은 실제와 같아야 한다.

import { CONTACT_EMAIL, type TextCopy } from './index';

const M = `<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`;

export const ABOUT: TextCopy = {
  en: {
    h1: 'About Hanveon',
    lede: 'Small games you can start in ten seconds, with nothing getting in the way.',
    metaTitle: 'About Hanveon — small browser games with no extra steps',
    metaDesc:
      'Hanveon is a small collection of browser games made by one person in Seoul. No install, no account, no ads — open a page and you are already playing. Here is why.',
    blocks: [
      {
        h: 'The idea',
        p: [
          'Most game sites want something from you before you play. An install. An account. An email address. A banner to dismiss. By the time you are actually playing, half of the ten spare minutes you had may already be gone.',
          'Hanveon asks for none of that. Open a page and you are playing. Every other decision on this site follows from that one.',
        ],
      },
      {
        h: 'Where the name comes from',
        p: [
          'It comes from the Korean word 한번 (han-beon). It is something you say when you are about to try something without making a big deal of it — <em>let’s give it a go</em>. That is the feeling Hanveon is after: a game you start simply because there is nothing stopping you.',
        ],
      },
      {
        h: 'How the games are made',
        p: [
          'Every game is written for the browser and drawn on a canvas. No game engine, no advertising libraries, no code pulled in from somewhere else.',
          'That is why a game loads quickly even on an old phone, works just as well on a laptop as it does on a phone on the bus, and lets the site honestly say that your gameplay stays on your device.',
        ],
      },
      {
        h: 'Six languages, six addresses',
        p: [
          'Hanveon is available in English, Korean, Japanese, Spanish, French and Chinese. Each language has its own address instead of simply swapping the words on one page, so you can share a link in the language the other person actually reads.',
        ],
      },
      {
        h: 'Who makes it',
        p: [
          'One person in Seoul, South Korea, working on it in their own time. New games arrive when they are ready rather than on a fixed schedule, and older ones get fixed when someone points out that something is off.',
        ],
      },
      {
        h: 'Say hello',
        p: [
          `Found a bug, or have an idea for a game that is not here yet? Write to ${M}. The same person who makes the site reads it.`,
        ],
      },
    ],
  },

  ko: {
    h1: 'Hanveon 소개',
    lede: '10초면 시작하는 작은 게임들. 설치도 가입도, 번거로운 단계도 없어요.',
    metaTitle: 'Hanveon 소개 — 설치 없이 바로 하는 작은 브라우저 게임',
    metaDesc:
      'Hanveon은 서울에서 한 사람이 만드는 작은 브라우저 게임 모음입니다. 설치도 가입도 광고도 없이 페이지를 열면 바로 시작합니다. 왜 이렇게 만드는지 소개합니다.',
    blocks: [
      {
        h: '이렇게 만든 이유',
        p: [
          '게임을 하기 전에 이것저것 요구하는 사이트가 많습니다. 설치하고, 가입하고, 이메일을 넣고, 안내창도 닫아야 하죠. 잠깐 비는 10분에 게임 한 판 하려다가 시작도 전에 시간이 꽤 지나가 버립니다.',
          'Hanveon은 그런 걸 요구하지 않습니다. 페이지를 열면 바로 게임을 시작할 수 있어요. 이 사이트의 다른 원칙들도 전부 여기에서 출발합니다.',
        ],
      },
      {
        h: '이름은 어디서 왔나',
        p: [
          '한국말 <em>한번</em>에서 왔습니다. 거창하게 마음먹지 않고 뭔가 가볍게 해보려 할 때 쓰는 말이죠 — <em>한번 해볼까?</em> Hanveon이 원하는 느낌도 그겁니다. 시작하는 데 드는 게 없어서 그냥 한번 해보게 되는 게임.',
        ],
      },
      {
        h: '게임은 어떻게 만드나',
        p: [
          '게임마다 브라우저에서 바로 돌아가도록 직접 만들고 캔버스에 그립니다. 게임 엔진이나 광고용 라이브러리, 외부에서 불러오는 게임 코드도 쓰지 않습니다.',
          '그래서 오래된 폰에서도 금방 열리고, 노트북에서도 이동 중인 휴대폰에서도 가볍게 돌아갑니다. 게임 안에서 무엇을 했는지도 기기 밖으로 보내지 않습니다.',
        ],
      },
      {
        h: '여섯 언어, 여섯 주소',
        p: [
          'Hanveon은 영어·한국어·일본어·스페인어·프랑스어·중국어로 제공합니다. 한 페이지에서 글자만 바꾸는 방식이 아니라 언어마다 주소가 따로 있어서, 상대가 실제로 읽는 언어의 링크를 그대로 보낼 수 있습니다.',
        ],
      },
      {
        h: '누가 만드나',
        p: [
          '한국 서울에서 한 사람이 자기 시간에 만들고 있습니다. 새 게임은 정해진 날짜보다 준비가 끝났을 때 올리고, 이상한 점을 알려주시면 기존 게임도 계속 고칩니다.',
        ],
      },
      {
        h: '이야기해 주세요',
        p: [
          `이상한 점을 찾으셨거나 아직 없는 게임 아이디어가 있으시면 ${M}으로 보내주세요. 사이트를 만드는 사람이 직접 읽습니다.`,
        ],
      },
    ],
  },

  ja: {
    h1: 'Hanveon について',
    lede: '10秒で始められる小さなゲーム。インストールも登録も、余計な手順もありません。',
    metaTitle: 'Hanveon について — すぐ遊べる小さなブラウザゲーム',
    metaDesc:
      'Hanveon は、ソウルに住む一人が作っている小さなブラウザゲーム集です。インストールも登録も広告もなく、ページを開けばすぐ遊べます。ここでは、その理由を紹介します。',
    blocks: [
      {
        h: 'こう作っている理由',
        p: [
          'ゲームを始める前に、いろいろ求めてくるサイトは少なくありません。インストール、アカウント作成、メールアドレスの入力、閉じる必要のある案内。ちょっと空いた10分で遊ぶつもりが、始める前に時間を使ってしまいます。',
          'Hanveon では、そうしたものを求めません。ページを開けばすぐ遊べます。このサイトのほかの方針も、すべてそこから決まっています。',
        ],
      },
      {
        h: '名前の由来',
        p: [
          '韓国語の <em>한번</em>（han-beon）から来ています。大げさに構えず、何かを軽く試してみるときに使う言葉です — <em>ちょっとやってみようか</em>。Hanveon が目指しているのも、その気軽さです。始めるための面倒がないから、つい遊んでみたくなるゲーム。',
        ],
      },
      {
        h: 'ゲームの作り方',
        p: [
          'どのゲームもブラウザでそのまま動くように作り、キャンバスに描いています。ゲームエンジンや広告用ライブラリ、外部から読み込むゲームコードは使っていません。',
          'そのため古いスマホでもすぐ開き、ノートパソコンでも移動中のスマホでも軽く動きます。ゲーム内での操作やスコアも端末の外へ送りません。',
        ],
      },
      {
        h: '6つの言語、6つのアドレス',
        p: [
          'Hanveon は英語・韓国語・日本語・スペイン語・フランス語・中国語に対応しています。同じページの文字だけを切り替えるのではなく、言語ごとに専用のアドレスがあります。相手が実際に読む言語のページを、そのまま共有できます。',
        ],
      },
      {
        h: '作っている人',
        p: [
          '韓国・ソウルで、一人が自分の時間を使って作っています。新しいゲームは決まった日程ではなく、準備ができたときに公開します。おかしいところを教えてもらえれば、既存のゲームも直していきます。',
        ],
      },
      {
        h: '気軽にどうぞ',
        p: [
          `不具合を見つけたときや、まだないゲームのアイデアがあるときは ${M} までどうぞ。サイトを作っている本人が読みます。`,
        ],
      },
    ],
  },

  es: {
    h1: 'Sobre Hanveon',
    lede: 'Juegos pequeños que empiezas en diez segundos, sin instalaciones ni pasos de más.',
    metaTitle: 'Sobre Hanveon — juegos pequeños de navegador, sin pasos de más',
    metaDesc:
      'Hanveon es una pequeña colección de juegos de navegador hecha por una sola persona en Seúl. Sin instalaciones, sin cuenta y sin anuncios: abres una página y ya estás jugando. Aquí te contamos por qué.',
    blocks: [
      {
        h: 'La idea',
        p: [
          'Muchas webs de juegos te piden algo antes de dejarte jugar: instalar algo, crear una cuenta, dar tu correo o cerrar algún aviso. Cuando por fin llegas al juego, parte de esos diez minutos libres que tenías ya se ha ido.',
          'Hanveon no te pide nada de eso. Abres una página y empiezas a jugar. El resto de decisiones del sitio parten de esa idea.',
        ],
      },
      {
        h: 'De dónde viene el nombre',
        p: [
          'Viene de la palabra coreana <em>한번</em> (han-beon). Se usa cuando vas a probar algo sin darle demasiadas vueltas, algo parecido a <em>vamos a probar</em>. Esa es la sensación que busca Hanveon: un juego que empiezas simplemente porque empezar no da trabajo.',
        ],
      },
      {
        h: 'Cómo están hechos los juegos',
        p: [
          'Cada juego está hecho para funcionar directamente en el navegador y se dibuja sobre un canvas. No usamos motores de juego, librerías publicitarias ni código de juego cargado desde otros sitios.',
          'Por eso cargan rápido incluso en móviles antiguos, funcionan igual de bien en un portátil que en el móvil durante un trayecto y, además, lo que haces dentro del juego se queda en tu dispositivo.',
        ],
      },
      {
        h: 'Seis idiomas, seis direcciones',
        p: [
          'Hanveon está disponible en inglés, coreano, japonés, español, francés y chino. Cada idioma tiene su propia dirección, en lugar de limitarse a cambiar las palabras de una misma página, así puedes compartir directamente el enlace en el idioma que la otra persona utiliza.',
        ],
      },
      {
        h: 'Quién lo hace',
        p: [
          'Una sola persona en Seúl, Corea del Sur, trabajando en el proyecto en su tiempo libre. Los juegos nuevos salen cuando están listos, no según un calendario fijo, y los anteriores se corrigen cuando alguien avisa de que algo no va bien.',
        ],
      },
      {
        h: 'Escríbenos',
        p: [
          `¿Has encontrado un fallo o tienes una idea para un juego que todavía no existe? Escribe a ${M}. Lo lee la misma persona que hace el sitio.`,
        ],
      },
    ],
  },

  fr: {
    h1: 'À propos de Hanveon',
    lede: 'De petits jeux à lancer en dix secondes, sans installation ni étape inutile.',
    metaTitle: 'À propos de Hanveon — de petits jeux de navigateur, sans étape inutile',
    metaDesc:
      'Hanveon est une petite collection de jeux de navigateur créée par une seule personne à Séoul. Rien à installer, pas de compte, pas de publicité : tu ouvres une page et tu joues. Voici pourquoi.',
    blocks: [
      {
        h: 'L’idée',
        p: [
          'Beaucoup de sites de jeux te demandent quelque chose avant de te laisser jouer : installer quelque chose, créer un compte, donner ton adresse e-mail ou fermer un bandeau. Le temps d’arriver au jeu, une partie de tes dix minutes de libre est déjà partie.',
          'Hanveon ne demande rien de tout cela. Tu ouvres une page et tu joues. Toutes les autres décisions du site partent de cette idée.',
        ],
      },
      {
        h: 'D’où vient le nom',
        p: [
          'Le nom vient du mot coréen <em>한번</em> (han-beon), qu’on emploie quand on essaie quelque chose sans en faire toute une histoire — un peu comme <em>allez, on essaie</em>. C’est l’esprit recherché par Hanveon : un jeu qu’on lance simplement parce que rien ne complique le départ.',
        ],
      },
      {
        h: 'Comment les jeux sont faits',
        p: [
          'Chaque jeu est conçu pour fonctionner directement dans le navigateur et dessiné sur un canvas. Pas de moteur de jeu, pas de bibliothèque publicitaire, pas de code de jeu chargé depuis un service extérieur.',
          'C’est pour cela qu’ils se chargent vite même sur un vieux téléphone, fonctionnent aussi bien sur un ordinateur que sur un mobile dans les transports, et que ce que tu fais dans le jeu reste sur ton appareil.',
        ],
      },
      {
        h: 'Six langues, six adresses',
        p: [
          'Hanveon est disponible en anglais, coréen, japonais, espagnol, français et chinois. Chaque langue possède sa propre adresse, au lieu de simplement remplacer les mots sur une même page. Tu peux ainsi partager directement la version que l’autre personne lit.',
        ],
      },
      {
        h: 'Qui le fait',
        p: [
          'Une seule personne à Séoul, en Corée du Sud, qui travaille sur le projet pendant son temps libre. Les nouveaux jeux sortent quand ils sont prêts, sans calendrier fixe, et les anciens sont corrigés quand quelqu’un signale un problème.',
        ],
      },
      {
        h: 'Écris-nous',
        p: [
          `Tu as trouvé un bug ou tu as une idée pour un jeu qui n’existe pas encore ? Écris à ${M}. C’est la personne qui fait le site qui lit les messages.`,
        ],
      },
    ],
  },

  zh: {
    h1: '关于 Hanveon',
    lede: '十秒就能开始的小游戏，不用安装，不用注册，也没有多余步骤。',
    metaTitle: '关于 Hanveon — 打开就能玩的浏览器小游戏',
    metaDesc:
      'Hanveon 是由一位住在首尔的人制作的浏览器小游戏合集。不用安装、不用账号、没有广告，打开页面就能玩。这里介绍为什么要这样做。',
    blocks: [
      {
        h: '我们的想法',
        p: [
          '很多游戏网站在你开始玩之前，会先要求你安装东西、注册账号、填写邮箱，或者关闭各种提示。原本只想利用空出来的十分钟玩一局，真正开始时已经花掉了不少时间。',
          'Hanveon 不要求这些。打开页面就能开始玩。网站其他所有设计，也都从这个想法出发。',
        ],
      },
      {
        h: '名字的由来',
        p: [
          'Hanveon 来自韩语 <em>한번</em>（han-beon）。人们想轻松试试某件事时会用这个词，感觉有点像 <em>要不试试看？</em> Hanveon 想要的就是这种轻松感：因为开始没有负担，所以顺手就玩一局。',
        ],
      },
      {
        h: '游戏是怎么做的',
        p: [
          '每个游戏都直接为浏览器制作，并绘制在 canvas 上。不使用游戏引擎、广告库，也不从外部服务加载游戏代码。',
          '所以即使在旧手机上也能很快打开，在电脑上或出门时用手机玩都很轻便，而且游戏里的操作和分数都留在你的设备上。',
        ],
      },
      {
        h: '六种语言，六个地址',
        p: [
          'Hanveon 提供英语、韩语、日语、西班牙语、法语和中文版本。每种语言都有自己的地址，而不是只在同一个页面上替换文字。这样你可以直接把对方真正使用的语言版本发给他。',
        ],
      },
      {
        h: '谁在做',
        p: [
          '由一位住在韩国首尔的人利用自己的时间制作。新游戏准备好就会发布，不按固定日程；如果有人指出旧游戏哪里不对，也会继续修正。',
        ],
      },
      {
        h: '欢迎来信',
        p: [`发现了问题，或者有还没出现的游戏点子？写信到 ${M}。做这个网站的人会亲自看。`],
      },
    ],
  },
};
