// 쿠키 쪽. 여섯 나라말.
//
// 지금 사이트는 쿠키를 안 심는다. 광고를 붙이면 그때 이 쪽을 먼저 고친다.

import { CONTACT_EMAIL, type TextCopy } from './index';

const M = `<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`;

export const COOKIES: TextCopy = {
  en: {
    h1: 'Cookies',
    lede: 'Hanveon does not set its own cookies. That is why there is no cookie banner here.',
    metaTitle: 'Cookies | Hanveon',
    metaDesc:
      'Hanveon does not set its own sign-in, advertising or analytics cookies. Here is what the site stores instead, and what Cloudflare may do.',
    blocks: [
      {
        h: 'Hanveon does not set cookies',
        p: [
          'Hanveon itself does not set any cookies. There is no sign-in cookie because there is no account system, and there is no advertising cookie because there are no ads. The analytics tool used to count visits does not set cookies either.',
          'That is why you are not shown a cookie consent banner when you arrive.',
        ],
      },
      {
        h: 'What the site stores instead',
        p: [
          'Your browser stores two small pieces of information on your device. They are not cookies: they are not attached to web requests and they are not sent to a server.',
        ],
        list: [
          'The language you selected, so Hanveon can open in that language next time.',
          'Your best score in each game — one small value per game.',
        ],
      },
      {
        h: 'How to remove them',
        p: [
          'Clearing the site data for hanveon.com in your browser removes both. Your best scores are removed at the same time and cannot be restored because no copy exists anywhere else.',
        ],
      },
      {
        h: 'Cloudflare',
        p: [
          'Hanveon is served through Cloudflare. To protect sites from automated abuse, Cloudflare may set one of its own technical cookies on some requests. That cookie is not used for advertising.',
          'Cloudflare Web Analytics, which Hanveon uses to count visits, does not set cookies.',
        ],
      },
      {
        h: 'If advertising is added later',
        p: [
          'Hanveon may add advertising in the future. Advertising services often use cookies. If that happens, this page will be updated before the ads go live, and consent will be requested where the law requires it.',
          `Questions about cookies or local storage: ${M}.`,
        ],
      },
    ],
  },

  ko: {
    h1: '쿠키',
    lede: 'Hanveon은 자체 쿠키를 사용하지 않습니다. 그래서 쿠키 동의 창도 띄우지 않습니다.',
    metaTitle: '쿠키 | Hanveon',
    metaDesc:
      'Hanveon은 로그인·광고·분석을 위한 자체 쿠키를 사용하지 않습니다. 대신 기기에 무엇을 저장하는지, Cloudflare에서는 무엇을 할 수 있는지 안내합니다.',
    blocks: [
      {
        h: 'Hanveon은 자체 쿠키를 사용하지 않습니다',
        p: [
          'Hanveon 자체에서는 쿠키를 만들지 않습니다. 계정 기능이 없으니 로그인 쿠키도 없고, 광고가 없으니 광고 쿠키도 없습니다. 방문 수를 확인하는 분석 도구도 쿠키를 사용하지 않습니다.',
          '그래서 사이트에 들어왔을 때 쿠키 동의 창이 나타나지 않습니다.',
        ],
      },
      {
        h: '대신 기기에 저장하는 것',
        p: [
          '브라우저가 기기에 작은 정보 두 가지를 저장합니다. 쿠키가 아니며, 웹 요청에 붙어서 전송되지도 않고 서버로 보내지지도 않습니다.',
        ],
        list: [
          '선택한 언어 — 다음에 Hanveon을 열 때 같은 언어로 보여주기 위해 저장합니다.',
          '게임별 최고 기록 — 게임 하나당 작은 값 하나가 저장됩니다.',
        ],
      },
      {
        h: '지우는 방법',
        p: [
          '브라우저에서 hanveon.com의 사이트 데이터를 지우면 두 정보 모두 삭제됩니다. 최고 기록도 함께 사라지며, 다른 곳에 사본이 없기 때문에 복구할 수 없습니다.',
        ],
      },
      {
        h: 'Cloudflare',
        p: [
          'Hanveon은 Cloudflare를 통해 제공됩니다. 자동화된 공격이나 악용으로부터 사이트를 보호하기 위해, Cloudflare가 일부 요청에서 자체 기술 쿠키를 사용할 수 있습니다. 이 쿠키는 광고 목적으로 사용되지 않습니다.',
          '방문 수를 확인하는 Cloudflare Web Analytics는 쿠키를 사용하지 않습니다.',
        ],
      },
      {
        h: '나중에 광고가 추가된다면',
        p: [
          '앞으로 Hanveon에 광고가 들어갈 수도 있습니다. 광고 서비스는 쿠키를 사용하는 경우가 많습니다. 광고를 추가하게 되면 실제 광고가 나오기 전에 이 페이지부터 수정하고, 법에서 요구하는 지역에서는 동의를 받겠습니다.',
          `쿠키나 기기 저장 방식에 관한 질문은 ${M}으로 보내주세요.`,
        ],
      },
    ],
  },

  ja: {
    h1: 'クッキー',
    lede: 'Hanveon は独自のクッキーを使用していません。そのため、クッキー同意バナーも表示しません。',
    metaTitle: 'クッキー | Hanveon',
    metaDesc:
      'Hanveon はログイン・広告・アクセス解析のための独自クッキーを使用していません。代わりに端末へ保存する情報と、Cloudflare が利用する可能性のあるクッキーについて説明します。',
    blocks: [
      {
        h: 'Hanveon は独自のクッキーを使用しません',
        p: [
          'Hanveon 自体はクッキーを設定しません。アカウント機能がないためログイン用クッキーはなく、広告がないため広告用クッキーもありません。訪問数を確認するアクセス解析ツールもクッキーを使用しません。',
          'そのため、サイトを開いたときにクッキーへの同意を求めるバナーは表示されません。',
        ],
      },
      {
        h: '代わりに端末へ保存するもの',
        p: [
          'ブラウザが端末内に小さな情報を二つ保存します。どちらもクッキーではなく、ウェブ通信に添付されたりサーバーへ送信されたりすることはありません。',
        ],
        list: [
          '選択した言語 — 次回も同じ言語で Hanveon を開くために使います。',
          'ゲームごとのベスト記録 — 1ゲームにつき小さな値を一つ保存します。',
        ],
      },
      {
        h: '削除するには',
        p: [
          'ブラウザで hanveon.com のサイトデータを削除すると、どちらの情報も消えます。ベスト記録も同時に削除され、ほかにコピーがないため復元できません。',
        ],
      },
      {
        h: 'Cloudflare',
        p: [
          'Hanveon は Cloudflare を通じて配信されています。自動化された攻撃や不正利用からサイトを守るため、Cloudflare が一部の通信で独自の技術用クッキーを使用することがあります。このクッキーは広告目的では使われません。',
          '訪問数を確認する Cloudflare Web Analytics はクッキーを使用しません。',
        ],
      },
      {
        h: '将来広告を追加する場合',
        p: [
          '今後 Hanveon に広告を追加する可能性があります。広告サービスではクッキーを使うことがあります。その場合は広告を表示する前にこのページを更新し、法律で必要な地域では同意を求めます。',
          `クッキーや端末内の保存についての質問は ${M} までどうぞ。`,
        ],
      },
    ],
  },

  es: {
    h1: 'Cookies',
    lede: 'Hanveon no utiliza cookies propias. Por eso no aparece ningún aviso de cookies al entrar.',
    metaTitle: 'Cookies | Hanveon',
    metaDesc:
      'Hanveon no utiliza cookies propias para iniciar sesión, mostrar publicidad o medir visitas. Aquí explicamos qué se guarda en tu dispositivo y qué puede hacer Cloudflare.',
    blocks: [
      {
        h: 'Hanveon no utiliza cookies propias',
        p: [
          'Hanveon no configura cookies propias. Como no hay cuentas, no hacen falta cookies de inicio de sesión; y como no hay anuncios, tampoco hay cookies publicitarias. La herramienta que usamos para contar visitas tampoco utiliza cookies.',
          'Por eso no ves un aviso pidiéndote que aceptes cookies al entrar.',
        ],
      },
      {
        h: 'Qué se guarda en su lugar',
        p: [
          'El navegador guarda dos datos pequeños en tu dispositivo. No son cookies: no se adjuntan a las solicitudes web ni se envían a ningún servidor.',
        ],
        list: [
          'El idioma que elegiste, para que Hanveon vuelva a abrirse en ese idioma la próxima vez.',
          'Tu mejor puntuación en cada juego — un valor pequeño por juego.',
        ],
      },
      {
        h: 'Cómo borrarlos',
        p: [
          'Si borras los datos del sitio hanveon.com desde el navegador, se eliminan ambos. Tus récords también desaparecen y no se pueden recuperar porque no existe ninguna copia en otro sitio.',
        ],
      },
      {
        h: 'Cloudflare',
        p: [
          'Hanveon se sirve a través de Cloudflare. Para proteger los sitios frente a abusos automatizados, Cloudflare puede utilizar una cookie técnica propia en algunas solicitudes. Esa cookie no se utiliza con fines publicitarios.',
          'Cloudflare Web Analytics, que usamos para contar visitas, no utiliza cookies.',
        ],
      },
      {
        h: 'Si añadimos publicidad más adelante',
        p: [
          'Es posible que Hanveon incluya publicidad en el futuro. Los servicios publicitarios suelen utilizar cookies. Si eso ocurre, actualizaremos esta página antes de activar los anuncios y pediremos consentimiento donde la ley lo exija.',
          `Si tienes alguna pregunta sobre cookies o almacenamiento local, escribe a ${M}.`,
        ],
      },
    ],
  },

  fr: {
    h1: 'Cookies',
    lede: 'Hanveon n’utilise pas ses propres cookies. C’est pourquoi aucun bandeau de consentement ne s’affiche ici.',
    metaTitle: 'Cookies | Hanveon',
    metaDesc:
      'Hanveon n’utilise pas de cookies propres pour la connexion, la publicité ou la mesure d’audience. Voici ce qui est enregistré sur ton appareil et ce que Cloudflare peut faire.',
    blocks: [
      {
        h: 'Hanveon n’utilise pas ses propres cookies',
        p: [
          'Hanveon ne dépose aucun cookie qui lui soit propre. Il n’y a pas de compte, donc pas de cookie de connexion ; il n’y a pas de publicité, donc pas de cookie publicitaire. L’outil utilisé pour compter les visites n’utilise pas de cookies non plus.',
          'C’est pourquoi aucun bandeau ne te demande d’accepter des cookies quand tu arrives sur le site.',
        ],
      },
      {
        h: 'Ce qui est enregistré à la place',
        p: [
          'Le navigateur enregistre deux petites informations sur ton appareil. Ce ne sont pas des cookies : elles ne sont pas jointes aux requêtes web et ne sont envoyées à aucun serveur.',
        ],
        list: [
          'La langue choisie, afin que Hanveon s’ouvre dans la même langue la prochaine fois.',
          'Ton meilleur score dans chaque jeu — une petite valeur par jeu.',
        ],
      },
      {
        h: 'Comment les supprimer',
        p: [
          'Si tu effaces les données du site hanveon.com dans ton navigateur, les deux sont supprimées. Tes records disparaissent également et ne peuvent pas être restaurés, car aucune copie n’existe ailleurs.',
        ],
      },
      {
        h: 'Cloudflare',
        p: [
          'Hanveon est distribué par Cloudflare. Pour protéger les sites contre les abus automatisés, Cloudflare peut utiliser l’un de ses propres cookies techniques sur certaines requêtes. Ce cookie n’est pas utilisé à des fins publicitaires.',
          'Cloudflare Web Analytics, que nous utilisons pour compter les visites, n’utilise pas de cookies.',
        ],
      },
      {
        h: 'Si de la publicité est ajoutée plus tard',
        p: [
          'Hanveon pourra éventuellement afficher de la publicité à l’avenir. Les services publicitaires utilisent souvent des cookies. Si cela arrive, cette page sera mise à jour avant la mise en ligne des annonces et ton consentement sera demandé lorsque la loi l’exige.',
          `Pour toute question sur les cookies ou le stockage local : ${M}.`,
        ],
      },
    ],
  },

  zh: {
    h1: 'Cookie',
    lede: 'Hanveon 不使用自己的 Cookie，所以进入网站时不会弹出 Cookie 同意横幅。',
    metaTitle: 'Cookie | Hanveon',
    metaDesc:
      'Hanveon 不使用自己的登录、广告或访问统计 Cookie。这里说明浏览器会在你的设备上保存什么，以及 Cloudflare 可能使用什么。',
    blocks: [
      {
        h: 'Hanveon 不使用自己的 Cookie',
        p: [
          'Hanveon 本身不会设置 Cookie。网站没有账号系统，所以不需要登录 Cookie；目前没有广告，所以也没有广告 Cookie。用于统计访问次数的工具同样不使用 Cookie。',
          '因此进入网站时不会看到要求你接受 Cookie 的提示。',
        ],
      },
      {
        h: '浏览器会保存什么',
        p: [
          '浏览器会在你的设备上保存两项很小的信息。它们不是 Cookie，不会附在网页请求中发送，也不会传到服务器。',
        ],
        list: [
          '你选择的语言 — 下次打开 Hanveon 时继续使用同一种语言。',
          '每个游戏的最高分 — 每个游戏保存一个很小的数值。',
        ],
      },
      {
        h: '如何删除',
        p: [
          '在浏览器中清除 hanveon.com 的网站数据后，这两项信息都会被删除。最高分也会一起消失，而且因为其他地方没有副本，所以无法恢复。',
        ],
      },
      {
        h: 'Cloudflare',
        p: [
          'Hanveon 通过 Cloudflare 提供服务。为了保护网站免受自动化攻击或滥用，Cloudflare 可能会在部分请求中使用自己的技术性 Cookie。该 Cookie 不用于广告。',
          '我们用于统计访问次数的 Cloudflare Web Analytics 不使用 Cookie。',
        ],
      },
      {
        h: '如果以后加入广告',
        p: [
          '未来 Hanveon 可能会加入广告。广告服务通常会使用 Cookie。如果真的加入广告，我们会在广告上线前先更新本页，并在法律要求的地区征求你的同意。',
          `如果对 Cookie 或本地存储有疑问，请写信到 ${M}。`,
        ],
      },
    ],
  },
};
