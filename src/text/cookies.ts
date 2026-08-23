// 쿠키 쪽. 여섯 나라말.
//
// 지금 사이트는 쿠키를 안 심는다. 광고를 붙이면 그때 이 쪽을 먼저 고친다.

import { CONTACT_EMAIL, type TextCopy } from './index';

const M = `<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`;

export const COOKIES: TextCopy = {
  en: {
    h1: 'Cookies',
    lede: 'Hanveon sets no cookies. That is why there is no cookie banner here.',
    metaTitle: 'Cookies | Hanveon',
    metaDesc:
      'Hanveon sets no cookies of its own — no sign-in cookie, no advertising cookie, no analytics cookie. Here is what it does use instead.',
    blocks: [
      {
        h: 'We set none',
        p: [
          'Hanveon itself does not set a single cookie. There is no sign-in cookie, because there is nothing to sign in to. There is no advertising cookie, because there are no ads. The tool we use to count visits sets none either.',
          'That is why you were not asked to accept anything when you arrived.',
        ],
      },
      {
        h: 'What we use instead',
        p: [
          'Two small things are saved by your browser on your device. They are not cookies: they are never attached to a request and never reach any server.',
        ],
        list: [
          'The language you picked, so the site opens in it next time.',
          'Your best score in each game — one small number per game.',
        ],
      },
      {
        h: 'Getting rid of them',
        p: [
          'Clearing your browser data for hanveon.com removes both, immediately and for good. Your best scores go with them and cannot be brought back, because no copy exists anywhere else.',
        ],
      },
      {
        h: 'Cloudflare',
        p: [
          'The site is served by Cloudflare. To keep sites working under automated abuse, Cloudflare may set a technical cookie of its own on some requests. It says nothing about you as a person and is not used for advertising.',
          'Cloudflare Web Analytics, which we use to count visits, sets no cookie at all.',
        ],
      },
      {
        h: 'If ads arrive',
        p: [
          'We may put advertising on Hanveon later. Ads usually do use cookies. If that day comes, this page will say so before the ads go live, and you will be asked for consent where the law requires it.',
          `Questions about any of this: ${M}.`,
        ],
      },
    ],
  },

  ko: {
    h1: '쿠키',
    lede: 'Hanveon 은 쿠키를 심지 않습니다. 그래서 쿠키 동의 창이 안 뜹니다.',
    metaTitle: '쿠키 | Hanveon',
    metaDesc:
      'Hanveon 은 자체 쿠키를 하나도 심지 않습니다 — 로그인 쿠키도, 광고 쿠키도, 분석 쿠키도 없습니다. 대신 무엇을 쓰는지 적었습니다.',
    blocks: [
      {
        h: '하나도 안 심습니다',
        p: [
          'Hanveon 은 쿠키를 하나도 심지 않습니다. 로그인할 것이 없으니 로그인 쿠키가 없고, 광고가 없으니 광고 쿠키가 없습니다. 방문 수를 세는 데 쓰는 것도 쿠키를 안 심습니다.',
          '그래서 들어오실 때 무언가에 동의하라는 창이 안 떴습니다.',
        ],
      },
      {
        h: '대신 쓰는 것',
        p: [
          '브라우저가 여러분 기기에 저장하는 작은 것이 둘 있습니다. 쿠키가 아닙니다 — 요청에 붙어 나가지 않고, 어느 서버에도 닿지 않습니다.',
        ],
        list: [
          '고른 언어. 다음에 올 때 그 말로 열리라고요.',
          '게임마다의 최고 기록 — 게임 하나에 작은 숫자 하나.',
        ],
      },
      {
        h: '지우려면',
        p: [
          '브라우저에서 hanveon.com 의 사이트 자료를 지우면 둘 다 바로, 완전히 사라집니다. 최고 기록도 같이 사라지고 되살릴 수 없습니다. 다른 곳에 사본이 없기 때문입니다.',
        ],
      },
      {
        h: 'Cloudflare',
        p: [
          '이 사이트는 Cloudflare 가 보내줍니다. 기계가 자동으로 몰려드는 것을 막으려고, Cloudflare 가 일부 요청에 자기 쪽 기술 쿠키를 심을 수 있습니다. 그 쿠키는 여러분이 누구인지에 관해 아무것도 담지 않고 광고에 쓰이지 않습니다.',
          '방문 수를 세는 데 쓰는 Cloudflare 웹 애널리틱스는 쿠키를 아예 안 심습니다.',
        ],
      },
      {
        h: '광고가 붙으면',
        p: [
          '나중에 Hanveon 에 광고를 붙일 수도 있습니다. 광고는 보통 쿠키를 씁니다. 그렇게 되면 광고가 나가기 전에 이 쪽에 먼저 적고, 법이 요구하는 곳에서는 동의를 여쭙습니다.',
          `이 쪽에 대해 궁금한 것은 ${M} 으로 보내주세요.`,
        ],
      },
    ],
  },

  ja: {
    h1: 'クッキー',
    lede: 'Hanveon はクッキーを置きません。だからクッキーの同意バナーが出ません。',
    metaTitle: 'クッキー | Hanveon',
    metaDesc:
      'Hanveon は自前のクッキーを一つも置きません — ログイン用も、広告用も、解析用もありません。代わりに何を使っているかを書いています。',
    blocks: [
      {
        h: '一つも置きません',
        p: [
          'Hanveon はクッキーを一つも置きません。ログインするものがないのでログイン用のクッキーはなく、広告がないので広告用のクッキーもありません。訪問数を数えるのに使っているものもクッキーを置きません。',
          'だから、来たときに何かに同意を求める画面が出なかったのです。',
        ],
      },
      {
        h: '代わりに使っているもの',
        p: [
          'ブラウザがあなたの端末に保存する小さなものが二つあります。クッキーではありません — 通信にくっついて出ていくことがなく、どのサーバーにも届きません。',
        ],
        list: [
          '選んだ言語。次に来たときその言葉で開くためです。',
          'ゲームごとのベスト記録 — ゲーム一つにつき小さな数字が一つ。',
        ],
      },
      {
        h: '消したいとき',
        p: [
          'ブラウザで hanveon.com のサイトデータを消すと、二つとも即座に、完全になくなります。ベスト記録も一緒に消え、元に戻せません。ほかにコピーがないからです。',
        ],
      },
      {
        h: 'Cloudflare',
        p: [
          'このサイトは Cloudflare が配信しています。自動化された悪用からサイトを守るため、Cloudflare が一部の通信で自社の技術的なクッキーを置くことがあります。それはあなたが誰かについて何も含まず、広告にも使われません。',
          '訪問数を数えるのに使っている Cloudflare Web Analytics は、クッキーをまったく置きません。',
        ],
      },
      {
        h: '広告が入ったら',
        p: [
          'あとから Hanveon に広告を入れることはあるかもしれません。広告はたいていクッキーを使います。そのときは広告が出る前にこのページに書き、法律が求める地域では同意をおうかがいします。',
          `ここについて聞きたいことがあれば ${M} までどうぞ。`,
        ],
      },
    ],
  },

  es: {
    h1: 'Cookies',
    lede: 'Hanveon no pone cookies. Por eso aquí no hay ningún aviso de cookies.',
    metaTitle: 'Cookies | Hanveon',
    metaDesc:
      'Hanveon no pone ninguna cookie propia: ni de sesión, ni de publicidad, ni de analítica. Aquí está lo que usa en su lugar.',
    blocks: [
      {
        h: 'No ponemos ninguna',
        p: [
          'Hanveon no pone ni una sola cookie. No hay cookie de sesión, porque no hay nada donde iniciar sesión. No hay cookie de publicidad, porque no hay anuncios. La herramienta con la que contamos visitas tampoco pone ninguna.',
          'Por eso no se te pidió aceptar nada al llegar.',
        ],
      },
      {
        h: 'Lo que usamos en su lugar',
        p: [
          'Tu navegador guarda dos cosas pequeñas en tu dispositivo. No son cookies: nunca se adjuntan a una petición ni llegan a ningún servidor.',
        ],
        list: [
          'El idioma que elegiste, para que el sitio se abra en él la próxima vez.',
          'Tu récord en cada juego: un número pequeño por juego.',
        ],
      },
      {
        h: 'Cómo quitarlas',
        p: [
          'Al borrar los datos del navegador para hanveon.com desaparecen las dos, al momento y para siempre. Tus récords se van con ellas y no se pueden recuperar, porque no existe ninguna copia en otro sitio.',
        ],
      },
      {
        h: 'Cloudflare',
        p: [
          'El sitio lo sirve Cloudflare. Para que los sitios sigan funcionando frente al abuso automatizado, Cloudflare puede poner una cookie técnica propia en algunas peticiones. No dice nada sobre ti como persona y no se usa para publicidad.',
          'Cloudflare Web Analytics, que usamos para contar visitas, no pone ninguna cookie.',
        ],
      },
      {
        h: 'Si llegan los anuncios',
        p: [
          'Puede que más adelante pongamos publicidad en Hanveon. Los anuncios sí suelen usar cookies. Si llega ese día, esta página lo dirá antes de que los anuncios se activen, y se te pedirá consentimiento donde la ley lo exija.',
          `Cualquier duda sobre esto: ${M}.`,
        ],
      },
    ],
  },

  fr: {
    h1: 'Cookies',
    lede: 'Hanveon ne pose aucun cookie. C’est pour cela qu’il n’y a pas de bandeau ici.',
    metaTitle: 'Cookies | Hanveon',
    metaDesc:
      'Hanveon ne pose aucun cookie qui lui soit propre : ni de connexion, ni de publicité, ni de mesure d’audience. Voici ce qu’il utilise à la place.',
    blocks: [
      {
        h: 'Nous n’en posons aucun',
        p: [
          'Hanveon ne pose pas un seul cookie. Pas de cookie de connexion, puisqu’il n’y a rien où se connecter. Pas de cookie publicitaire, puisqu’il n’y a pas de publicité. L’outil qui compte les visites n’en pose pas non plus.',
          'C’est pour cela qu’on ne t’a rien demandé d’accepter en arrivant.',
        ],
      },
      {
        h: 'Ce que nous utilisons à la place',
        p: [
          'Ton navigateur enregistre deux petites choses sur ton appareil. Ce ne sont pas des cookies : elles ne sont jamais jointes à une requête et n’atteignent aucun serveur.',
        ],
        list: [
          'La langue que tu as choisie, pour que le site s’ouvre dedans la prochaine fois.',
          'Ton record dans chaque jeu — un petit nombre par jeu.',
        ],
      },
      {
        h: 'Pour les effacer',
        p: [
          'Effacer les données de navigation pour hanveon.com supprime les deux, tout de suite et définitivement. Tes records partent avec, et rien ne peut être récupéré, car il n’en existe aucune copie ailleurs.',
        ],
      },
      {
        h: 'Cloudflare',
        p: [
          'Le site est servi par Cloudflare. Pour que les sites tiennent face aux abus automatisés, Cloudflare peut poser un cookie technique qui lui est propre sur certaines requêtes. Il ne dit rien de toi en tant que personne et ne sert pas à la publicité.',
          'Cloudflare Web Analytics, qui nous sert à compter les visites, ne pose aucun cookie.',
        ],
      },
      {
        h: 'Si la publicité arrive',
        p: [
          'Nous mettrons peut-être de la publicité sur Hanveon plus tard. La publicité utilise généralement des cookies. Si ce jour vient, cette page le dira avant que les annonces ne soient en ligne, et ton consentement sera demandé là où la loi l’exige.',
          `Une question là-dessus : ${M}.`,
        ],
      },
    ],
  },

  zh: {
    h1: 'Cookie',
    lede: 'Hanveon 不放 Cookie。所以这里没有 Cookie 同意横幅。',
    metaTitle: 'Cookie | Hanveon',
    metaDesc:
      'Hanveon 不放任何自己的 Cookie — 没有登录用的，没有广告用的，也没有统计用的。下面写了它改用什么。',
    blocks: [
      {
        h: '一个也不放',
        p: [
          'Hanveon 不放任何一个 Cookie。没有可登录的东西，所以没有登录 Cookie；没有广告，所以没有广告 Cookie。我们用来统计访问次数的工具也不放。',
          '所以你进来的时候没有被要求同意什么。',
        ],
      },
      {
        h: '改用什么',
        p: [
          '浏览器在你的设备上保存两样很小的东西。它们不是 Cookie：不会附在请求上发出去，也到不了任何服务器。',
        ],
        list: ['你选的语言，下次打开时就用这个语言。', '每个游戏的最高分 — 一个游戏一个小数字。'],
      },
      {
        h: '想清掉的话',
        p: [
          '在浏览器里清除 hanveon.com 的网站数据，这两样会立刻、彻底消失。最高分也一起没了，而且无法恢复，因为别处没有副本。',
        ],
      },
      {
        h: 'Cloudflare',
        p: [
          '这个网站由 Cloudflare 提供。为了让网站在自动化滥用下还能正常运行，Cloudflare 可能会在部分请求上放一个它自己的技术性 Cookie。它不包含关于你这个人的任何信息，也不用于广告。',
          '我们用来统计访问次数的 Cloudflare Web Analytics 完全不放 Cookie。',
        ],
      },
      {
        h: '如果以后有广告',
        p: [
          '以后我们可能会在 Hanveon 上放广告。广告通常会使用 Cookie。真到那一天，会在广告上线之前先写在这一页，并在法律要求的地区征求你的同意。',
          `关于这些有疑问，写信到 ${M}。`,
        ],
      },
    ],
  },
};
