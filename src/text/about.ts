// 소개 쪽. 여섯 나라말.
//
// 사람이 읽어서 재미있어야 하고, 로봇이 읽을 글도 여기가 제일 많다.
// **지어내지 않는다** — 게임 수, 나라말 수, 만든 방식은 실제와 같아야 한다.

import { CONTACT_EMAIL, type TextCopy } from './index';

const M = `<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`;

export const ABOUT: TextCopy = {
  en: {
    h1: 'About Hanveon',
    lede: 'Small games you can start in ten seconds, with nothing in the way.',
    metaTitle: 'About Hanveon — small browser games, nothing in the way',
    metaDesc:
      'Hanveon is a small set of browser games made by one person in Seoul. No install, no account, no ads — you open a page and you are playing. Here is why.',
    blocks: [
      {
        h: 'The idea',
        p: [
          'Most game sites want something from you before you play. An install. An account. An email address. A banner to click away. By the time you are actually playing, the ten spare minutes you had are half gone.',
          'Hanveon asks for none of it. You open a page and you are playing. Every other decision on this site follows from that one.',
        ],
      },
      {
        h: 'Where the name comes from',
        p: [
          'It comes from the Korean word 한번 (han-beon). It is what you say when you are about to try something without making a thing of it — <em>let’s have a go</em>. That is the feeling the site is after: a game you start because it costs you nothing to start it.',
        ],
      },
      {
        h: 'How the games are made',
        p: [
          'Every game is written by hand for the browser and drawn on a canvas. No game engine, no advertising libraries, no code from anywhere else.',
          'That is why a game loads in a moment even on an old phone, why it works the same on a laptop and on a bus, and why the whole site can honestly say it sends nothing about you anywhere.',
        ],
      },
      {
        h: 'Six languages, six addresses',
        p: [
          'Hanveon is written in English, Korean, Japanese, Spanish, French and Chinese. Each language has its own address rather than a switch that swaps the words on one page, so you can send someone a link in the language they actually read.',
        ],
      },
      {
        h: 'Who makes it',
        p: [
          'One person in Seoul, South Korea, in their own time. New games arrive when they are ready rather than on a schedule, and old ones get fixed when someone points out that something is off.',
        ],
      },
      {
        h: 'Say hello',
        p: [
          `Found a bug, or want a game that does not exist yet? ${M}. It is read by that same person.`,
        ],
      },
    ],
  },

  ko: {
    h1: 'Hanveon 소개',
    lede: '십 초면 시작하는 작은 게임들. 앞을 막는 것이 없습니다.',
    metaTitle: 'Hanveon 소개 — 앞을 막는 것 없는 작은 브라우저 게임',
    metaDesc:
      'Hanveon 은 서울에서 한 사람이 만드는 작은 브라우저 게임 모음입니다. 설치도 가입도 광고도 없이, 페이지를 열면 바로 시작합니다. 왜 그렇게 만드는지 적었습니다.',
    blocks: [
      {
        h: '이렇게 만든 이유',
        p: [
          '게임 사이트들은 게임을 하기 전에 뭔가를 먼저 요구합니다. 설치, 가입, 이메일 주소, 눌러서 없애야 하는 창. 정작 게임을 시작할 때쯤이면 잠깐 난 십 분이 반은 날아가 있습니다.',
          'Hanveon 은 아무것도 요구하지 않습니다. 페이지를 열면 바로 하는 중입니다. 이 사이트의 나머지 결정은 전부 여기서 따라 나옵니다.',
        ],
      },
      {
        h: '이름은 어디서 왔나',
        p: [
          '한국말 <em>한번</em>에서 왔습니다. 크게 마음먹지 않고 뭔가 해보려 할 때 하는 말이지요 — <em>한번 해볼까</em>. 이 사이트가 노리는 느낌이 그겁니다. 시작하는 데 드는 것이 없어서 그냥 시작하게 되는 게임.',
        ],
      },
      {
        h: '게임은 어떻게 만드나',
        p: [
          '게임마다 브라우저용으로 직접 손으로 짜고 캔버스에 그립니다. 게임 엔진도, 광고 꾸러미도, 남의 코드도 안 씁니다.',
          '그래서 오래된 폰에서도 금방 열리고, 노트북에서든 버스에서든 똑같이 돌아가고, 무엇보다 「여러분에 관한 것을 어디로도 안 보낸다」고 떳떳하게 말할 수 있습니다.',
        ],
      },
      {
        h: '여섯 나라말, 여섯 주소',
        p: [
          'Hanveon 은 영어·한국어·일본어·스페인어·프랑스어·중국어로 쓰여 있습니다. 한 페이지에서 글자만 갈아 끼우는 것이 아니라 나라말마다 주소가 따로 있습니다. 그래야 상대가 읽는 말로 된 링크를 보낼 수 있으니까요.',
        ],
      },
      {
        h: '누가 만드나',
        p: [
          '한국 서울에 사는 한 사람이 자기 시간에 만듭니다. 새 게임은 정해진 날짜가 아니라 준비되면 올라오고, 이상한 데를 누가 알려주면 고칩니다.',
        ],
      },
      {
        h: '인사 주세요',
        p: [
          `이상한 데를 찾으셨거나, 아직 없는 게임이 하고 싶으시면 ${M} 으로 보내주세요. 같은 사람이 읽습니다.`,
        ],
      },
    ],
  },

  ja: {
    h1: 'Hanveon について',
    lede: '十秒で始められる小さなゲーム。前をふさぐものがありません。',
    metaTitle: 'Hanveon について — 前をふさぐもののない小さなブラウザゲーム',
    metaDesc:
      'Hanveon はソウルに住む一人が作っている小さなブラウザゲームの集まりです。インストールも登録も広告もなく、ページを開けばすぐ遊べます。その理由を書いています。',
    blocks: [
      {
        h: 'こう作っている理由',
        p: [
          'たいていのゲームサイトは、遊ぶ前に何かを求めてきます。インストール、アカウント、メールアドレス、消すために押すバナー。ようやく遊び始めるころには、空いていた十分の半分が消えています。',
          'Hanveon は何も求めません。ページを開けば、もう遊んでいます。このサイトのほかの決めごとは、すべてここから出ています。',
        ],
      },
      {
        h: '名前の由来',
        p: [
          '韓国語の <em>한번</em>（ハンボン）から来ています。大げさに構えず何かをやってみようとするときに言う言葉です — <em>ちょっとやってみようか</em>。このサイトが狙っているのはその感じです。始めるのに何もいらないから、つい始めてしまうゲーム。',
        ],
      },
      {
        h: 'ゲームの作り方',
        p: [
          'どのゲームもブラウザ用に手で書き、キャンバスに描いています。ゲームエンジンも、広告用のライブラリも、よそのコードも使っていません。',
          'だから古いスマホでもすぐ開き、ノートパソコンでもバスの中でも同じように動き、そして「あなたに関するものをどこにも送っていない」と正直に言えます。',
        ],
      },
      {
        h: '六つの言語、六つのアドレス',
        p: [
          'Hanveon は英語・韓国語・日本語・スペイン語・フランス語・中国語で書かれています。一つのページで文字を差し替えるのではなく、言語ごとにアドレスがあります。相手が読む言葉のリンクを送れるようにするためです。',
        ],
      },
      {
        h: '作っている人',
        p: [
          '韓国・ソウルに住む一人が、自分の時間で作っています。新しいゲームは日程ではなく、できたときに出ます。おかしいところを教えてもらえれば直します。',
        ],
      },
      {
        h: 'ひとこと下さい',
        p: [
          `おかしいところを見つけた、まだないゲームで遊びたい — そんなときは ${M} までどうぞ。同じ本人が読みます。`,
        ],
      },
    ],
  },

  es: {
    h1: 'Sobre Hanveon',
    lede: 'Juegos pequeños que empiezas en diez segundos, sin nada por medio.',
    metaTitle: 'Sobre Hanveon — juegos pequeños de navegador, sin nada por medio',
    metaDesc:
      'Hanveon es un pequeño conjunto de juegos de navegador hechos por una persona en Seúl. Sin instalar, sin cuenta, sin anuncios: abres una página y ya estás jugando. Aquí está el porqué.',
    blocks: [
      {
        h: 'La idea',
        p: [
          'Casi todas las webs de juegos te piden algo antes de jugar. Una instalación. Una cuenta. Un correo. Un aviso que hay que quitar. Cuando por fin estás jugando, los diez minutos libres que tenías ya van por la mitad.',
          'Hanveon no pide nada de eso. Abres una página y ya estás jugando. Todas las demás decisiones de este sitio salen de ahí.',
        ],
      },
      {
        h: 'De dónde viene el nombre',
        p: [
          'Viene de la palabra coreana <em>한번</em> (han-beon). Es lo que se dice cuando vas a probar algo sin darle importancia: <em>venga, una vez</em>. Esa es la sensación que busca el sitio: un juego que empiezas porque empezarlo no te cuesta nada.',
        ],
      },
      {
        h: 'Cómo están hechos los juegos',
        p: [
          'Cada juego está escrito a mano para el navegador y dibujado sobre un canvas. Sin motor de juego, sin librerías de publicidad, sin código de ninguna otra parte.',
          'Por eso un juego carga en un momento incluso en un móvil viejo, funciona igual en un portátil que en el autobús, y por eso el sitio puede decir con sinceridad que no envía nada sobre ti a ninguna parte.',
        ],
      },
      {
        h: 'Seis idiomas, seis direcciones',
        p: [
          'Hanveon está escrito en inglés, coreano, japonés, español, francés y chino. Cada idioma tiene su propia dirección, en vez de un botón que cambia las palabras de una misma página, para que puedas mandarle a alguien un enlace en el idioma que de verdad lee.',
        ],
      },
      {
        h: 'Quién lo hace',
        p: [
          'Una persona en Seúl, Corea del Sur, en su propio tiempo. Los juegos nuevos salen cuando están listos, no según un calendario, y los viejos se arreglan cuando alguien avisa de que algo falla.',
        ],
      },
      {
        h: 'Escribe',
        p: [
          `¿Has encontrado un fallo, o quieres un juego que todavía no existe? ${M}. Lo lee esa misma persona.`,
        ],
      },
    ],
  },

  fr: {
    h1: 'À propos de Hanveon',
    lede: 'De petits jeux qu’on lance en dix secondes, sans rien en travers.',
    metaTitle: 'À propos de Hanveon — de petits jeux de navigateur, sans rien en travers',
    metaDesc:
      'Hanveon est un petit ensemble de jeux de navigateur faits par une seule personne à Séoul. Rien à installer, pas de compte, pas de publicité : tu ouvres une page et tu joues. Voici pourquoi.',
    blocks: [
      {
        h: 'L’idée',
        p: [
          'La plupart des sites de jeux te demandent quelque chose avant de jouer. Une installation. Un compte. Une adresse e-mail. Un bandeau à faire disparaître. Le temps d’arriver au jeu, les dix minutes que tu avais sont à moitié parties.',
          'Hanveon ne demande rien de tout cela. Tu ouvres une page et tu joues déjà. Toutes les autres décisions de ce site découlent de celle-là.',
        ],
      },
      {
        h: 'D’où vient le nom',
        p: [
          'Il vient du mot coréen <em>한번</em> (han-beon). C’est ce qu’on dit quand on va essayer quelque chose sans en faire toute une affaire : <em>allez, on essaie</em>. C’est la sensation que vise le site : un jeu qu’on lance parce que le lancer ne coûte rien.',
        ],
      },
      {
        h: 'Comment les jeux sont faits',
        p: [
          'Chaque jeu est écrit à la main pour le navigateur et dessiné sur un canvas. Pas de moteur de jeu, pas de bibliothèque publicitaire, aucun code venu d’ailleurs.',
          'C’est pour cela qu’un jeu se charge en un instant même sur un vieux téléphone, qu’il marche pareil sur un portable et dans le bus, et que le site peut dire honnêtement qu’il n’envoie rien te concernant nulle part.',
        ],
      },
      {
        h: 'Six langues, six adresses',
        p: [
          'Hanveon est écrit en anglais, coréen, japonais, espagnol, français et chinois. Chaque langue a sa propre adresse, plutôt qu’un bouton qui remplace les mots d’une seule page, pour que tu puisses envoyer à quelqu’un un lien dans la langue qu’il lit vraiment.',
        ],
      },
      {
        h: 'Qui le fait',
        p: [
          'Une personne à Séoul, en Corée du Sud, sur son temps libre. Les nouveaux jeux sortent quand ils sont prêts, pas selon un calendrier, et les anciens sont corrigés quand quelqu’un signale que quelque chose cloche.',
        ],
      },
      {
        h: 'Dis bonjour',
        p: [
          `Tu as trouvé un bug, ou tu veux un jeu qui n’existe pas encore ? ${M}. C’est cette même personne qui lit.`,
        ],
      },
    ],
  },

  zh: {
    h1: '关于 Hanveon',
    lede: '十秒就能开始的小游戏，中间没有任何拦路的东西。',
    metaTitle: '关于 Hanveon — 没有拦路东西的浏览器小游戏',
    metaDesc:
      'Hanveon 是住在首尔的一个人做的一组浏览器小游戏。不用安装、不用账号、没有广告 — 打开页面就在玩了。这里写了为什么这样做。',
    blocks: [
      {
        h: '想法',
        p: [
          '大多数游戏网站在你玩之前先要点什么。安装、账号、邮箱地址、一个要点掉的横幅。等你真正开始玩，原本空出来的十分钟已经过去一半了。',
          'Hanveon 什么都不要。打开页面，你就已经在玩了。这个网站其他所有的决定，都是从这一条来的。',
        ],
      },
      {
        h: '名字的由来',
        p: [
          '来自韩语的 <em>한번</em>（han-beon）。它是人们打算随手试一下时说的话 — <em>要不试一次</em>。这就是本站想要的感觉：因为开始不花什么力气，所以就开始了的游戏。',
        ],
      },
      {
        h: '游戏是怎么做的',
        p: [
          '每个游戏都是为浏览器手写的，画在 canvas 上。没有游戏引擎，没有广告库，也没有任何别处来的代码。',
          '所以旧手机上也能一下打开，笔记本上和公交车上表现一样，而且整个网站可以坦然地说：不把关于你的任何东西送到任何地方。',
        ],
      },
      {
        h: '六种语言，六个地址',
        p: [
          'Hanveon 用英语、韩语、日语、西班牙语、法语和中文写成。不是在同一个页面上换文字，而是每种语言都有自己的地址，这样你就能把对方真正读得懂的那个语言的链接发过去。',
        ],
      },
      {
        h: '谁在做',
        p: [
          '韩国首尔的一个人，用自己的时间做的。新游戏不按日程，做好了就上；有人指出哪里不对，旧的就修。',
        ],
      },
      {
        h: '打个招呼',
        p: [`发现了问题，或者想玩还不存在的游戏？写信到 ${M}，就是那个人在看。`],
      },
    ],
  },
};
