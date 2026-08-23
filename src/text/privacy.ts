// 개인정보 쪽. 여섯 나라말.
//
// 여기 적은 것은 **사이트가 실제로 하는 것과 같아야 한다.**
// 코드를 바꿔서 바깥으로 나가는 것이 하나라도 늘면 이 쪽을 같이 고친다.

import { CONTACT_EMAIL, type TextCopy } from './index';

const M = `<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`;
const CF = (t: string) =>
  `<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener nofollow">${t}</a>`;

export const PRIVACY: TextCopy = {
  en: {
    h1: 'Privacy',
    lede: 'What this site does with your data. It is a short page, because it does very little.',
    metaTitle: 'Privacy | Hanveon',
    metaDesc:
      'Hanveon has no accounts and no server storing your data. Your best scores stay in your own browser. Here is exactly what happens when you open a page.',
    blocks: [
      {
        h: 'Who runs this site',
        p: [
          `Hanveon is made and run by one person in Seoul, South Korea. If anything on this page is unclear, write to ${M} and you will get an answer from that person.`,
        ],
      },
      {
        h: 'There is no account, and no server holding your data',
        p: [
          'Hanveon has no sign-up and no login. There is no field anywhere on the site for you to type into.',
          'The games are files your browser downloads and runs on your own device. What you do inside a game — how you move, what you score, how long you play — is never sent anywhere. It happens on your device and stays there.',
        ],
      },
      {
        h: 'What stays on your device',
        p: [
          "Two things are saved by your browser, on your device only: your best score in each game, and the language you picked. They are kept in your browser's own storage, they are never sent to us, and we cannot read them.",
          'If you clear your browser data for hanveon.com, they are erased. There is no copy anywhere else, so nothing can be restored.',
        ],
      },
      {
        h: 'What our host sees',
        p: [
          'The site is served by Cloudflare Pages. As with any web host, Cloudflare receives what your browser has to send in order to fetch a page: your IP address, the page you asked for, your browser and its language, and the page you came from.',
          `Cloudflare uses this to deliver the site and to block attacks, and keeps it for a limited time. Their ${CF('privacy policy')} explains what they do with it.`,
        ],
      },
      {
        h: 'Counting visits',
        p: [
          'We use Cloudflare Web Analytics to see how many people open each page. It sets no cookies and does not follow you to other sites. Cloudflare states that it does not collect or use visitors’ personal data for this.',
          'We look at it for one reason: to decide which game to make next.',
        ],
      },
      {
        h: 'No ads, no tracking, nothing sold',
        p: [
          'There are no ads on Hanveon today, and no advertising or tracking scripts of any kind. Nothing about you is sold or passed to anyone.',
          'We may add ads later. If that happens, this page changes first and this section changes with it.',
        ],
      },
      {
        h: 'Where the files come from',
        p: [
          'Every font, image and script on this site is served from hanveon.com itself. Nothing is fetched from Google Fonts or any other outside address.',
          'The visit counting described above is the only request your browser makes to anywhere other than our host.',
        ],
      },
      {
        h: 'Children',
        p: [
          'The games are simple and fine for any age, but Hanveon is not aimed at children in particular. It collects nothing from anyone, children included.',
        ],
      },
      {
        h: 'Your rights',
        p: [
          'Because there is no account and no personal data stored, there is nothing for us to hand over, correct or delete.',
          `If you are in the EU, the UK or Korea and want to ask about this anyway, write to ${M}.`,
        ],
      },
      {
        h: 'Changes',
        p: ['If this page changes, the date at the top changes with it.'],
      },
    ],
  },

  ko: {
    h1: '개인정보',
    lede: '이 사이트가 여러분 자료로 무엇을 하는지. 하는 것이 거의 없어서 짧습니다.',
    metaTitle: '개인정보 | Hanveon',
    metaDesc:
      'Hanveon 은 계정도 없고 자료를 담아 두는 서버도 없습니다. 최고 기록은 여러분 브라우저에만 남습니다. 페이지를 열 때 무슨 일이 일어나는지 그대로 적었습니다.',
    blocks: [
      {
        h: '이 사이트는 누가 운영하나',
        p: [
          `Hanveon 은 한국 서울에서 한 사람이 만들고 운영합니다. 이 쪽에 적힌 것이 잘 모르겠으면 ${M} 으로 보내주세요. 그 사람이 답을 드립니다.`,
        ],
      },
      {
        h: '계정이 없고, 자료를 담아 두는 서버도 없습니다',
        p: [
          'Hanveon 에는 가입도 로그인도 없습니다. 사이트 어디에도 여러분이 적어 넣을 칸이 없습니다.',
          '게임은 브라우저가 내려받아 여러분 기기에서 돌리는 파일입니다. 게임 안에서 한 일 — 어떻게 움직였는지, 몇 점을 냈는지, 얼마나 했는지 — 은 어디로도 보내지지 않습니다. 여러분 기기에서 일어나고 거기 그대로 있습니다.',
        ],
      },
      {
        h: '기기에만 남는 것',
        p: [
          '브라우저가 여러분 기기에만 저장하는 것이 둘 있습니다. 게임마다의 최고 기록과, 고른 언어입니다. 브라우저 저장 공간에 들어 있고, 저희에게 보내지지 않으며, 저희는 읽을 수 없습니다.',
          '브라우저에서 hanveon.com 의 사이트 자료를 지우면 같이 지워집니다. 다른 곳에 사본이 없어서 되살릴 수 없습니다.',
        ],
      },
      {
        h: '사이트를 보내주는 곳이 보는 것',
        p: [
          '이 사이트는 Cloudflare Pages 가 보내줍니다. 어느 웹 호스팅이든 마찬가지로, 브라우저가 페이지를 받으려면 보내야 하는 것들을 Cloudflare 가 받습니다 — IP 주소, 요청한 페이지, 브라우저 종류와 언어, 눌러서 들어온 페이지입니다.',
          `Cloudflare 는 이것을 사이트를 보내주고 공격을 막는 데 쓰고, 정해진 기간만 갖고 있습니다. 무엇을 하는지는 ${CF('Cloudflare 개인정보처리방침')}에 적혀 있습니다.`,
        ],
      },
      {
        h: '방문 수를 세는 것',
        p: [
          '어느 쪽이 몇 번 열렸는지 보려고 Cloudflare 웹 애널리틱스를 씁니다. 쿠키를 심지 않고, 다른 사이트까지 따라다니지 않습니다. Cloudflare 는 이것으로 방문자 개인 자료를 모으거나 쓰지 않는다고 밝히고 있습니다.',
          '저희가 이걸 보는 이유는 하나입니다. 다음에 어떤 게임을 만들지 정하려고요.',
        ],
      },
      {
        h: '광고도 추적도 없고, 팔지도 않습니다',
        p: [
          '지금 Hanveon 에는 광고가 없고, 광고나 추적을 하는 스크립트도 없습니다. 여러분에 관한 무엇도 팔거나 넘기지 않습니다.',
          '나중에 광고를 붙일 수도 있습니다. 그렇게 되면 이 쪽을 먼저 고치고, 이 덩어리도 같이 바뀝니다.',
        ],
      },
      {
        h: '파일이 어디서 오나',
        p: [
          '이 사이트의 글꼴·그림·스크립트는 모두 hanveon.com 에서 보냅니다. 구글 글꼴을 비롯해 바깥 주소에서 받아오는 것이 없습니다.',
          '브라우저가 저희 호스팅 말고 다른 곳으로 보내는 요청은, 위에 적은 방문 세기 하나뿐입니다.',
        ],
      },
      {
        h: '어린이',
        p: [
          '게임은 단순해서 나이에 상관없이 할 수 있지만, Hanveon 이 특별히 어린이를 겨냥한 곳은 아닙니다. 어린이를 포함해 누구에게서도 아무것도 모으지 않습니다.',
        ],
      },
      {
        h: '여러분의 권리',
        p: [
          '계정도 없고 저장해 둔 개인 자료도 없어서, 저희가 내어 주거나 고치거나 지울 것이 없습니다.',
          `유럽·영국·한국에 계시고 그래도 물어볼 것이 있으면 ${M} 으로 보내주세요.`,
        ],
      },
      {
        h: '바뀌면',
        p: ['이 쪽이 바뀌면 맨 위 날짜도 같이 바뀝니다.'],
      },
    ],
  },

  ja: {
    h1: 'プライバシー',
    lede: 'このサイトがあなたのデータに何をするか。ほとんど何もしないので、短いページです。',
    metaTitle: 'プライバシー | Hanveon',
    metaDesc:
      'Hanveon にはアカウントも、データを保存するサーバーもありません。ベスト記録はあなたのブラウザにだけ残ります。ページを開いたとき何が起きるかをそのまま書いています。',
    blocks: [
      {
        h: 'このサイトの運営者',
        p: [
          `Hanveon は韓国・ソウルに住む一人の人間が作り、運営しています。このページでわからないことがあれば ${M} までどうぞ。その本人がお返事します。`,
        ],
      },
      {
        h: 'アカウントも、データを持つサーバーもありません',
        p: [
          'Hanveon に登録もログインもありません。サイトのどこにも入力する欄がありません。',
          'ゲームはブラウザがダウンロードして、あなたの端末で動かすファイルです。ゲームの中でしたこと — どう動いたか、何点だったか、どれだけ遊んだか — はどこにも送られません。あなたの端末で起きて、そこに留まります。',
        ],
      },
      {
        h: '端末にだけ残るもの',
        p: [
          'ブラウザがあなたの端末にだけ保存するものが二つあります。ゲームごとのベスト記録と、選んだ言語です。ブラウザ自身の保存領域にあり、こちらには送られず、こちらから読むこともできません。',
          'ブラウザで hanveon.com のサイトデータを消すと、一緒に消えます。ほかにコピーがないので元に戻せません。',
        ],
      },
      {
        h: 'サイトを配信する側が見るもの',
        p: [
          'このサイトは Cloudflare Pages が配信しています。どのウェブホスティングでも同じですが、ブラウザがページを受け取るために送らざるをえないものを Cloudflare が受け取ります — IP アドレス、要求したページ、ブラウザの種類と言語、どのページから来たかです。',
          `Cloudflare はこれをサイトの配信と攻撃の遮断に使い、限られた期間だけ保持します。詳しくは ${CF('Cloudflare のプライバシーポリシー')}に書かれています。`,
        ],
      },
      {
        h: '訪問数を数えること',
        p: [
          'どのページが何回開かれたかを見るために Cloudflare Web Analytics を使っています。クッキーを置かず、ほかのサイトまで追いかけません。Cloudflare は、これで訪問者の個人データを集めたり使ったりしないと明言しています。',
          '見ている理由は一つだけです。次にどのゲームを作るかを決めるためです。',
        ],
      },
      {
        h: '広告も追跡もなく、売りもしません',
        p: [
          '今の Hanveon に広告はなく、広告や追跡のスクリプトもありません。あなたに関するものを売ったり誰かに渡したりしません。',
          'あとから広告を入れることはあるかもしれません。そのときはこのページを先に直し、この部分も一緒に変わります。',
        ],
      },
      {
        h: 'ファイルはどこから来るか',
        p: [
          'このサイトのフォント・画像・スクリプトはすべて hanveon.com から配信しています。Google Fonts をはじめ、外のアドレスから取ってくるものはありません。',
          'ブラウザがこちらのホスティング以外に出す通信は、上に書いた訪問数の集計だけです。',
        ],
      },
      {
        h: '子ども',
        p: [
          'ゲームは単純で年齢を問わず遊べますが、Hanveon はとくに子ども向けに作られたものではありません。子どもを含め、誰からも何も集めません。',
        ],
      },
      {
        h: 'あなたの権利',
        p: [
          'アカウントもなく、保存している個人データもないため、お渡しするもの、訂正するもの、削除するものがありません。',
          `EU・英国・韓国にお住まいで、それでも確認したいことがあれば ${M} までどうぞ。`,
        ],
      },
      {
        h: '変更',
        p: ['このページが変わったときは、上の日付も一緒に変わります。'],
      },
    ],
  },

  es: {
    h1: 'Privacidad',
    lede: 'Qué hace este sitio con tus datos. Es una página corta, porque hace muy poco.',
    metaTitle: 'Privacidad | Hanveon',
    metaDesc:
      'Hanveon no tiene cuentas ni un servidor que guarde tus datos. Tus récords se quedan en tu propio navegador. Aquí está exactamente lo que pasa cuando abres una página.',
    blocks: [
      {
        h: 'Quién lleva este sitio',
        p: [
          `Hanveon lo hace y lo lleva una sola persona en Seúl, Corea del Sur. Si algo de esta página no queda claro, escribe a ${M} y esa misma persona te responderá.`,
        ],
      },
      {
        h: 'No hay cuenta ni servidor que guarde tus datos',
        p: [
          'Hanveon no tiene registro ni inicio de sesión. No hay ningún campo en todo el sitio donde escribir nada.',
          'Los juegos son archivos que tu navegador descarga y ejecuta en tu propio dispositivo. Lo que haces dentro de un juego — cómo te mueves, cuánto puntúas, cuánto rato juegas — no se envía a ninguna parte. Ocurre en tu dispositivo y ahí se queda.',
        ],
      },
      {
        h: 'Lo que se queda en tu dispositivo',
        p: [
          'Tu navegador guarda dos cosas, solo en tu dispositivo: tu récord en cada juego y el idioma que elegiste. Están en el almacenamiento del propio navegador, nunca se nos envían y no podemos leerlas.',
          'Si borras los datos del navegador para hanveon.com, desaparecen. No hay copia en ningún otro sitio, así que no se pueden recuperar.',
        ],
      },
      {
        h: 'Lo que ve quien aloja el sitio',
        p: [
          'El sitio lo sirve Cloudflare Pages. Como con cualquier alojamiento web, Cloudflare recibe lo que tu navegador tiene que enviar para pedir una página: tu dirección IP, la página que pediste, tu navegador y su idioma, y la página desde la que llegaste.',
          `Cloudflare lo usa para servir el sitio y bloquear ataques, y lo conserva durante un tiempo limitado. Su ${CF('política de privacidad')} explica qué hacen con ello.`,
        ],
      },
      {
        h: 'Contar visitas',
        p: [
          'Usamos Cloudflare Web Analytics para ver cuánta gente abre cada página. No pone cookies y no te sigue a otros sitios. Cloudflare afirma que con esto no recoge ni usa datos personales de los visitantes.',
          'Lo miramos por un solo motivo: decidir qué juego hacer a continuación.',
        ],
      },
      {
        h: 'Sin anuncios, sin rastreo, nada vendido',
        p: [
          'Hoy no hay anuncios en Hanveon, ni ningún script de publicidad o rastreo. Nada sobre ti se vende ni se pasa a nadie.',
          'Puede que añadamos anuncios más adelante. Si pasa, esta página cambia primero y esta sección cambia con ella.',
        ],
      },
      {
        h: 'De dónde vienen los archivos',
        p: [
          'Todas las fuentes, imágenes y scripts de este sitio se sirven desde el propio hanveon.com. No se trae nada de Google Fonts ni de ninguna otra dirección externa.',
          'El recuento de visitas descrito arriba es la única petición que tu navegador hace a algún sitio que no sea nuestro alojamiento.',
        ],
      },
      {
        h: 'Menores',
        p: [
          'Los juegos son sencillos y valen para cualquier edad, pero Hanveon no está dirigido especialmente a menores. No recoge nada de nadie, menores incluidos.',
        ],
      },
      {
        h: 'Tus derechos',
        p: [
          'Como no hay cuenta ni datos personales guardados, no hay nada que entregar, corregir ni borrar.',
          `Si estás en la UE, el Reino Unido o Corea y aun así quieres preguntar, escribe a ${M}.`,
        ],
      },
      {
        h: 'Cambios',
        p: ['Si esta página cambia, la fecha de arriba cambia con ella.'],
      },
    ],
  },

  fr: {
    h1: 'Confidentialité',
    lede: 'Ce que ce site fait de tes données. La page est courte, parce qu’il en fait très peu.',
    metaTitle: 'Confidentialité | Hanveon',
    metaDesc:
      'Hanveon n’a ni compte ni serveur qui stocke tes données. Tes records restent dans ton propre navigateur. Voici exactement ce qui se passe quand tu ouvres une page.',
    blocks: [
      {
        h: 'Qui tient ce site',
        p: [
          `Hanveon est fait et tenu par une seule personne à Séoul, en Corée du Sud. Si quelque chose sur cette page n’est pas clair, écris à ${M} : c’est cette personne qui répond.`,
        ],
      },
      {
        h: 'Pas de compte, pas de serveur qui garde tes données',
        p: [
          'Hanveon n’a ni inscription ni connexion. Il n’y a nulle part sur le site un champ où écrire quoi que ce soit.',
          'Les jeux sont des fichiers que ton navigateur télécharge et fait tourner sur ton propre appareil. Ce que tu fais dans un jeu — comment tu bouges, ton score, le temps que tu joues — n’est envoyé nulle part. Cela se passe sur ton appareil et y reste.',
        ],
      },
      {
        h: 'Ce qui reste sur ton appareil',
        p: [
          'Ton navigateur enregistre deux choses, sur ton appareil seulement : ton record dans chaque jeu et la langue que tu as choisie. Elles sont dans le stockage du navigateur lui-même, ne nous sont jamais envoyées, et nous ne pouvons pas les lire.',
          'Si tu effaces les données de navigation pour hanveon.com, elles disparaissent. Il n’en existe aucune copie ailleurs, donc rien ne peut être récupéré.',
        ],
      },
      {
        h: 'Ce que voit notre hébergeur',
        p: [
          'Le site est servi par Cloudflare Pages. Comme chez n’importe quel hébergeur, Cloudflare reçoit ce que ton navigateur doit envoyer pour demander une page : ton adresse IP, la page demandée, ton navigateur et sa langue, et la page d’où tu viens.',
          `Cloudflare s’en sert pour servir le site et bloquer les attaques, et le conserve pendant une durée limitée. Leur ${CF('politique de confidentialité')} explique ce qu’ils en font.`,
        ],
      },
      {
        h: 'Compter les visites',
        p: [
          'Nous utilisons Cloudflare Web Analytics pour voir combien de personnes ouvrent chaque page. Cela ne pose aucun cookie et ne te suit pas sur d’autres sites. Cloudflare indique ne pas collecter ni utiliser de données personnelles des visiteurs pour cela.',
          'Nous le regardons pour une seule raison : décider quel jeu faire ensuite.',
        ],
      },
      {
        h: 'Pas de publicité, pas de pistage, rien de vendu',
        p: [
          'Il n’y a aujourd’hui aucune publicité sur Hanveon, ni aucun script publicitaire ou de pistage. Rien te concernant n’est vendu ni transmis à qui que ce soit.',
          'Nous ajouterons peut-être de la publicité plus tard. Si cela arrive, cette page changera d’abord, et cette partie changera avec elle.',
        ],
      },
      {
        h: 'D’où viennent les fichiers',
        p: [
          'Toutes les polices, images et scripts de ce site sont servis depuis hanveon.com. Rien n’est récupéré chez Google Fonts ni à aucune autre adresse extérieure.',
          'Le comptage de visites décrit plus haut est la seule requête que ton navigateur envoie ailleurs que chez notre hébergeur.',
        ],
      },
      {
        h: 'Enfants',
        p: [
          'Les jeux sont simples et conviennent à tout âge, mais Hanveon ne vise pas particulièrement les enfants. Le site ne collecte rien de personne, enfants compris.',
        ],
      },
      {
        h: 'Tes droits',
        p: [
          'Comme il n’y a ni compte ni donnée personnelle conservée, il n’y a rien à transmettre, corriger ou supprimer.',
          `Si tu es dans l’Union européenne, au Royaume-Uni ou en Corée et que tu veux quand même poser la question, écris à ${M}.`,
        ],
      },
      {
        h: 'Modifications',
        p: ['Si cette page change, la date en haut change avec elle.'],
      },
    ],
  },

  zh: {
    h1: '隐私',
    lede: '这个网站拿你的数据做什么。做得很少，所以这页很短。',
    metaTitle: '隐私 | Hanveon',
    metaDesc:
      'Hanveon 没有账号，也没有保存你数据的服务器。最高分只留在你自己的浏览器里。下面写清楚了你打开一个页面时到底发生了什么。',
    blocks: [
      {
        h: '谁在做这个网站',
        p: [
          `Hanveon 由住在韩国首尔的一个人制作和维护。这页上有看不明白的地方，写信到 ${M}，就是那个人回复你。`,
        ],
      },
      {
        h: '没有账号，也没有存放你数据的服务器',
        p: [
          'Hanveon 没有注册，也没有登录。整个网站没有任何一处让你填写内容的地方。',
          '游戏是浏览器下载后在你自己设备上运行的文件。你在游戏里做的事 — 怎么操作、得了多少分、玩了多久 — 不会发到任何地方。它发生在你的设备上，也就留在那里。',
        ],
      },
      {
        h: '只留在你设备上的东西',
        p: [
          '浏览器只在你的设备上保存两样东西：每个游戏的最高分，以及你选的语言。它们放在浏览器自己的存储里，不会发给我们，我们也读不到。',
          '如果你清除浏览器中 hanveon.com 的网站数据，它们就没了。别处没有副本，无法恢复。',
        ],
      },
      {
        h: '托管方能看到什么',
        p: [
          '这个网站由 Cloudflare Pages 提供。和任何网站托管一样，浏览器为了取到页面必须发送的内容会被 Cloudflare 收到：你的 IP 地址、你请求的页面、浏览器种类和语言，以及你是从哪个页面过来的。',
          `Cloudflare 用这些来提供网站和拦截攻击，并且只保留有限的时间。具体做法写在 ${CF('Cloudflare 隐私政策')}里。`,
        ],
      },
      {
        h: '统计访问次数',
        p: [
          '我们用 Cloudflare Web Analytics 看每个页面被打开了多少次。它不放 Cookie，也不会跟着你到别的网站。Cloudflare 声明这项服务不收集也不使用访客的个人数据。',
          '我们看它只有一个用途：决定接下来做哪个游戏。',
        ],
      },
      {
        h: '没有广告、没有追踪，也不出售',
        p: [
          '现在 Hanveon 上没有广告，也没有任何广告或追踪脚本。关于你的任何东西都不会被出售或转交给别人。',
          '以后我们可能会加广告。真到那时，会先改这一页，这一段也会跟着改。',
        ],
      },
      {
        h: '文件从哪里来',
        p: [
          '本站的字体、图片和脚本全部由 hanveon.com 自己提供。不从 Google Fonts 或任何其他外部地址取用。',
          '除了上面说的访问统计，浏览器不会向我们托管方以外的任何地方发出请求。',
        ],
      },
      {
        h: '儿童',
        p: [
          '游戏很简单，任何年龄都能玩，但 Hanveon 并不是专门面向儿童的。它不从任何人那里收集任何信息，包括儿童。',
        ],
      },
      {
        h: '你的权利',
        p: [
          '因为没有账号，也没有保存的个人数据，所以我们没有什么可以提供、更正或删除的。',
          `如果你在欧盟、英国或韩国，仍然想问，写信到 ${M}。`,
        ],
      },
      {
        h: '变更',
        p: ['这一页有变动时，上面的日期也会跟着改。'],
      },
    ],
  },
};
