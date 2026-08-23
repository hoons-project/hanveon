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
    lede: 'What Hanveon does with your data. This page is short because the site collects very little.',
    metaTitle: 'Privacy | Hanveon',
    metaDesc:
      'Hanveon has no accounts and no server storing your gameplay data. Your best scores stay in your browser. Here is what happens when you open and use the site.',
    blocks: [
      {
        h: 'Who runs Hanveon',
        p: [
          `Hanveon is made and run by one person in Seoul, South Korea. If anything on this page is unclear, write to ${M}. The person who runs the site will read it.`,
        ],
      },
      {
        h: 'No account and no server storing your gameplay',
        p: [
          'Hanveon has no sign-up or login. There is no form on the site asking you to enter personal information.',
          'The games are files that your browser downloads and runs on your device. What you do inside a game — how you move, what you score, and how long you play — is not sent to Hanveon. It happens on your device and stays there.',
        ],
      },
      {
        h: 'What stays on your device',
        p: [
          "Your browser saves two things on your device: your best score in each game and the language you selected. They are stored in the browser's local storage, are not sent to us, and cannot be read by us remotely.",
          'If you clear the site data for hanveon.com in your browser, they are deleted. No copy is kept elsewhere, so they cannot be restored.',
        ],
      },
      {
        h: 'What our host receives',
        p: [
          'Hanveon is served by Cloudflare Pages. Like any web host, Cloudflare receives the information your browser must send to request a page, such as your IP address, the page requested, browser information and language, and the referring page when available.',
          `Cloudflare uses this information to deliver the site and protect it from attacks, and keeps it for a limited period. See Cloudflare's ${CF('privacy policy')} for details.`,
        ],
      },
      {
        h: 'Counting visits',
        p: [
          'Hanveon uses Cloudflare Web Analytics to see how many people open each page. It does not set cookies and does not follow you across other sites. Cloudflare states that it does not collect or use visitors’ personal data for this service.',
          'We use those counts for one main reason: to understand which games people open and help decide what to make next.',
        ],
      },
      {
        h: 'No ads or tracking scripts',
        p: [
          'Hanveon currently has no ads and no advertising or tracking scripts. We do not sell information about you or pass it to advertisers.',
          'Advertising may be added in the future. If that happens, this privacy page will be updated before the change goes live.',
        ],
      },
      {
        h: 'Where site files come from',
        p: [
          'Fonts, images and scripts used by Hanveon are served from hanveon.com itself. The site does not load them from Google Fonts or other outside addresses.',
          'Apart from the visit counting described above, your browser does not make requests to services outside the hosting used for Hanveon.',
        ],
      },
      {
        h: 'Children',
        p: [
          'The games are simple and can be played by people of different ages, but Hanveon is not specifically directed at children. The site does not intentionally collect personal information from anyone, including children.',
        ],
      },
      {
        h: 'Your rights',
        p: [
          'Because Hanveon has no account system and does not store your gameplay data or profile, there is normally no personal account data for us to provide, correct or delete.',
          `If you are in the EU, the UK or Korea and still have a privacy question or request, write to ${M}.`,
        ],
      },
      {
        h: 'Changes',
        p: ['If this page changes, the date at the top of the page changes with it.'],
      },
    ],
  },

  ko: {
    h1: '개인정보',
    lede: 'Hanveon이 여러분의 데이터를 어떻게 다루는지 설명합니다. 수집하는 것이 거의 없어 내용도 짧습니다.',
    metaTitle: '개인정보 | Hanveon',
    metaDesc:
      'Hanveon에는 계정이 없고 게임 이용 데이터를 저장하는 서버도 없습니다. 최고 기록은 브라우저에만 남습니다. 사이트를 열고 이용할 때 어떤 정보가 처리되는지 안내합니다.',
    blocks: [
      {
        h: '누가 운영하나요',
        p: [
          `Hanveon은 한국 서울에서 한 사람이 만들고 운영합니다. 이 페이지에서 이해하기 어려운 부분이 있으면 ${M}으로 보내주세요. 사이트를 운영하는 사람이 직접 확인합니다.`,
        ],
      },
      {
        h: '계정도 없고 게임 이용 데이터를 저장하는 서버도 없습니다',
        p: [
          'Hanveon에는 회원가입이나 로그인이 없습니다. 사이트에서 개인정보를 입력하도록 요구하는 양식도 없습니다.',
          '게임은 브라우저가 내려받아 여러분의 기기에서 실행하는 파일입니다. 게임 안에서 어떻게 움직였는지, 몇 점을 냈는지, 얼마나 오래 플레이했는지 같은 정보는 Hanveon으로 전송되지 않습니다. 기기에서 처리되고 그 안에 머뭅니다.',
        ],
      },
      {
        h: '기기에 저장되는 것',
        p: [
          '브라우저는 기기에 두 가지 정보를 저장합니다. 게임별 최고 기록과 선택한 언어입니다. 브라우저의 로컬 저장 공간에만 보관되고 Hanveon으로 전송되지 않으며, 저희가 원격으로 읽을 수도 없습니다.',
          '브라우저에서 hanveon.com의 사이트 데이터를 지우면 이 정보도 함께 삭제됩니다. 다른 곳에 사본을 보관하지 않기 때문에 복구할 수 없습니다.',
        ],
      },
      {
        h: '호스팅 업체가 받는 정보',
        p: [
          'Hanveon은 Cloudflare Pages를 통해 제공됩니다. 다른 웹 호스팅 서비스와 마찬가지로, 페이지를 요청하려면 브라우저가 보내야 하는 정보가 Cloudflare에 전달됩니다. 예를 들면 IP 주소, 요청한 페이지, 브라우저 정보와 언어, 가능한 경우 이전 페이지 정보 등이 있습니다.',
          `Cloudflare는 사이트를 제공하고 공격을 막기 위해 이 정보를 사용하며 일정 기간 보관합니다. 자세한 내용은 ${CF('Cloudflare 개인정보처리방침')}을 확인해 주세요.`,
        ],
      },
      {
        h: '방문 수 확인',
        p: [
          'Hanveon은 각 페이지가 얼마나 열리는지 보기 위해 Cloudflare Web Analytics를 사용합니다. 이 도구는 쿠키를 사용하지 않고 다른 사이트까지 따라가며 추적하지 않습니다. Cloudflare는 이 서비스에서 방문자의 개인 데이터를 수집하거나 사용하지 않는다고 밝히고 있습니다.',
          '이 수치는 어떤 게임을 사람들이 많이 찾는지 살펴보고 다음에 무엇을 만들지 정하는 데 참고합니다.',
        ],
      },
      {
        h: '광고·추적 스크립트가 없습니다',
        p: [
          '현재 Hanveon에는 광고가 없고 광고용 또는 추적용 스크립트도 없습니다. 여러분에 관한 정보를 판매하거나 광고주에게 넘기지 않습니다.',
          '앞으로 광고가 추가될 수는 있습니다. 그렇게 되면 실제 적용 전에 이 개인정보 페이지부터 수정합니다.',
        ],
      },
      {
        h: '사이트 파일은 어디서 오나요',
        p: [
          'Hanveon에서 사용하는 글꼴, 이미지, 스크립트는 hanveon.com 자체에서 제공합니다. Google Fonts 같은 외부 주소에서 불러오지 않습니다.',
          '위에서 설명한 방문 수 확인을 제외하면, 브라우저가 Hanveon의 호스팅 외 다른 서비스로 요청을 보내지 않습니다.',
        ],
      },
      {
        h: '어린이',
        p: [
          '게임은 단순해서 여러 연령대가 이용할 수 있지만 Hanveon은 특별히 어린이를 대상으로 만든 서비스는 아닙니다. 어린이를 포함해 누구에게서도 개인정보를 의도적으로 수집하지 않습니다.',
        ],
      },
      {
        h: '여러분의 권리',
        p: [
          'Hanveon에는 계정 기능이 없고 개인 프로필이나 게임 이용 데이터를 서버에 저장하지 않기 때문에, 일반적으로 저희가 제공·수정·삭제할 개인 계정 데이터가 없습니다.',
          `유럽연합, 영국 또는 한국에서 개인정보와 관련해 확인하거나 요청할 사항이 있다면 ${M}으로 보내주세요.`,
        ],
      },
      {
        h: '변경',
        p: ['이 페이지의 내용이 바뀌면 맨 위의 수정일도 함께 바뀝니다.'],
      },
    ],
  },

  ja: {
    h1: 'プライバシー',
    lede: 'Hanveon があなたのデータをどのように扱うかを説明します。収集するものがほとんどないため、内容もシンプルです。',
    metaTitle: 'プライバシー | Hanveon',
    metaDesc:
      'Hanveon にはアカウントがなく、ゲームの利用データを保存するサーバーもありません。ベスト記録はブラウザ内にだけ残ります。サイトを開いて利用するときに何が処理されるかを説明します。',
    blocks: [
      {
        h: '運営者について',
        p: [
          `Hanveon は韓国・ソウルで一人が作り、運営しています。このページでわかりにくい点があれば ${M} までご連絡ください。サイトを運営している本人が確認します。`,
        ],
      },
      {
        h: 'アカウントも、ゲーム利用データを保存するサーバーもありません',
        p: [
          'Hanveon には会員登録やログインがありません。個人情報の入力を求めるフォームもありません。',
          'ゲームはブラウザがダウンロードし、あなたの端末上で実行するファイルです。ゲーム内での動き、スコア、プレイ時間などは Hanveon へ送信されません。端末上で処理され、そのまま端末に残ります。',
        ],
      },
      {
        h: '端末に保存されるもの',
        p: [
          'ブラウザは端末内に二つの情報を保存します。ゲームごとのベスト記録と、選択した言語です。ブラウザのローカル保存領域だけに保管され、Hanveon へ送信されず、こちらから遠隔で読み取ることもできません。',
          'ブラウザで hanveon.com のサイトデータを削除すると、これらも一緒に削除されます。ほかにコピーを保存していないため復元できません。',
        ],
      },
      {
        h: 'ホスティング事業者が受け取る情報',
        p: [
          'Hanveon は Cloudflare Pages を通じて配信されています。ほかのウェブホスティングと同様に、ページを取得するためブラウザが送る必要のある情報が Cloudflare に届きます。たとえば IP アドレス、要求したページ、ブラウザ情報と言語、取得できる場合は参照元ページなどです。',
          `Cloudflare はサイトの配信と攻撃対策のためにこれらを使用し、一定期間保持します。詳しくは ${CF('Cloudflare のプライバシーポリシー')}をご確認ください。`,
        ],
      },
      {
        h: '訪問数の確認',
        p: [
          'Hanveon は各ページがどれくらい開かれているかを見るために Cloudflare Web Analytics を利用しています。このツールはクッキーを使用せず、ほかのサイトをまたいで追跡しません。Cloudflare は、このサービスで訪問者の個人データを収集・利用しないと説明しています。',
          'この数字は、どのゲームがよく遊ばれているかを見て、次に何を作るか考えるために使います。',
        ],
      },
      {
        h: '広告・追跡スクリプトはありません',
        p: [
          '現在の Hanveon には広告がなく、広告用・追跡用のスクリプトもありません。あなたに関する情報を販売したり広告主へ渡したりすることもありません。',
          '将来広告を追加する可能性はあります。その場合は、実際に変更する前にこのプライバシーページを更新します。',
        ],
      },
      {
        h: 'サイトのファイルはどこから読み込まれるか',
        p: [
          'Hanveon で使うフォント、画像、スクリプトは hanveon.com 自体から配信されます。Google Fonts などの外部アドレスから読み込むことはありません。',
          '上で説明した訪問数の確認を除き、ブラウザが Hanveon のホスティング以外のサービスへリクエストを送ることはありません。',
        ],
      },
      {
        h: '子どもの利用について',
        p: [
          'ゲームはシンプルでさまざまな年齢の方が遊べますが、Hanveon は特に子どもを対象として作られたサービスではありません。子どもを含め、誰からも個人情報を意図的に収集しません。',
        ],
      },
      {
        h: 'あなたの権利',
        p: [
          'Hanveon にはアカウント機能がなく、個人プロフィールやゲーム利用データをサーバーに保存していないため、通常こちらから提供・訂正・削除できる個人アカウントデータはありません。',
          `EU、英国、韓国にお住まいで、プライバシーについて確認・依頼したいことがある場合は ${M} までご連絡ください。`,
        ],
      },
      {
        h: '変更',
        p: ['このページの内容を変更した場合は、ページ上部の更新日も変更します。'],
      },
    ],
  },

  es: {
    h1: 'Privacidad',
    lede: 'Qué hace Hanveon con tus datos. La página es breve porque el sitio recoge muy poca información.',
    metaTitle: 'Privacidad | Hanveon',
    metaDesc:
      'Hanveon no tiene cuentas ni un servidor que guarde tus datos de juego. Tus mejores puntuaciones se quedan en el navegador. Aquí explicamos qué ocurre al abrir y usar el sitio.',
    blocks: [
      {
        h: 'Quién gestiona Hanveon',
        p: [
          `Hanveon lo crea y mantiene una sola persona en Seúl, Corea del Sur. Si algo de esta página no queda claro, escribe a ${M}. Lo leerá la persona que gestiona el sitio.`,
        ],
      },
      {
        h: 'Sin cuentas ni servidor que guarde tu actividad de juego',
        p: [
          'Hanveon no tiene registro ni inicio de sesión. Tampoco hay formularios que te pidan introducir información personal.',
          'Los juegos son archivos que el navegador descarga y ejecuta en tu dispositivo. Lo que haces dentro de un juego — cómo te mueves, qué puntuación consigues o cuánto tiempo juegas — no se envía a Hanveon. Se procesa en tu dispositivo y se queda ahí.',
        ],
      },
      {
        h: 'Qué se queda en tu dispositivo',
        p: [
          'El navegador guarda dos cosas en tu dispositivo: tu mejor puntuación en cada juego y el idioma que elegiste. Se almacenan de forma local en el navegador, no se nos envían y no podemos consultarlas de forma remota.',
          'Si borras los datos del sitio hanveon.com en el navegador, también se eliminan. No conservamos ninguna copia en otro lugar, así que no se pueden recuperar.',
        ],
      },
      {
        h: 'Qué recibe nuestro proveedor de alojamiento',
        p: [
          'Hanveon se sirve mediante Cloudflare Pages. Como cualquier proveedor de alojamiento web, Cloudflare recibe la información que el navegador necesita enviar para solicitar una página, como tu dirección IP, la página solicitada, datos del navegador y su idioma y, cuando está disponible, la página de procedencia.',
          `Cloudflare utiliza esa información para entregar el sitio y protegerlo frente a ataques, y la conserva durante un periodo limitado. Consulta su ${CF('política de privacidad')} para más información.`,
        ],
      },
      {
        h: 'Contar visitas',
        p: [
          'Hanveon utiliza Cloudflare Web Analytics para saber cuántas personas abren cada página. No utiliza cookies ni te sigue por otros sitios. Cloudflare afirma que este servicio no recopila ni utiliza datos personales de los visitantes.',
          'Usamos esos datos principalmente para entender qué juegos se abren más y decidir qué crear después.',
        ],
      },
      {
        h: 'Sin anuncios ni scripts de seguimiento',
        p: [
          'Actualmente Hanveon no tiene anuncios ni scripts publicitarios o de seguimiento. No vendemos información sobre ti ni se la entregamos a anunciantes.',
          'Es posible que añadamos publicidad en el futuro. Si ocurre, actualizaremos esta página antes de aplicar el cambio.',
        ],
      },
      {
        h: 'De dónde se cargan los archivos del sitio',
        p: [
          'Las fuentes, imágenes y scripts utilizados por Hanveon se sirven desde hanveon.com. No se cargan desde Google Fonts ni desde otras direcciones externas.',
          'Aparte del recuento de visitas explicado arriba, el navegador no realiza solicitudes a servicios externos al alojamiento utilizado por Hanveon.',
        ],
      },
      {
        h: 'Menores',
        p: [
          'Los juegos son sencillos y pueden jugar personas de distintas edades, pero Hanveon no está dirigido específicamente a menores. El sitio no recopila de forma intencionada información personal de nadie, incluidos los menores.',
        ],
      },
      {
        h: 'Tus derechos',
        p: [
          'Como Hanveon no tiene cuentas y no guarda perfiles personales ni datos de juego en un servidor, normalmente no tenemos datos de una cuenta personal que podamos entregar, corregir o eliminar.',
          `Si estás en la Unión Europea, el Reino Unido o Corea y tienes alguna pregunta o solicitud sobre privacidad, escribe a ${M}.`,
        ],
      },
      {
        h: 'Cambios',
        p: ['Si esta página cambia, también se actualizará la fecha que aparece en la parte superior.'],
      },
    ],
  },

  fr: {
    h1: 'Confidentialité',
    lede: 'Ce que Hanveon fait de tes données. La page est courte, car le site collecte très peu d’informations.',
    metaTitle: 'Confidentialité | Hanveon',
    metaDesc:
      'Hanveon n’a pas de compte et aucun serveur ne stocke tes données de jeu. Tes meilleurs scores restent dans ton navigateur. Voici ce qui se passe lorsque tu ouvres et utilises le site.',
    blocks: [
      {
        h: 'Qui gère Hanveon',
        p: [
          `Hanveon est créé et géré par une seule personne à Séoul, en Corée du Sud. Si quelque chose n’est pas clair sur cette page, écris à ${M}. C’est la personne qui gère le site qui lira ton message.`,
        ],
      },
      {
        h: 'Pas de compte ni de serveur qui stocke ton activité de jeu',
        p: [
          'Hanveon ne propose ni inscription ni connexion. Il n’y a pas non plus de formulaire te demandant de saisir des informations personnelles.',
          'Les jeux sont des fichiers que ton navigateur télécharge et exécute sur ton appareil. Ce que tu fais dans un jeu — tes déplacements, ton score ou la durée de ta partie — n’est pas envoyé à Hanveon. Tout est traité sur ton appareil et y reste.',
        ],
      },
      {
        h: 'Ce qui reste sur ton appareil',
        p: [
          'Ton navigateur enregistre deux informations sur ton appareil : ton meilleur score dans chaque jeu et la langue choisie. Elles sont stockées localement dans le navigateur, ne nous sont pas envoyées et nous ne pouvons pas les consulter à distance.',
          'Si tu effaces les données du site hanveon.com dans ton navigateur, elles sont supprimées. Aucune copie n’est conservée ailleurs, elles ne peuvent donc pas être restaurées.',
        ],
      },
      {
        h: 'Ce que reçoit notre hébergeur',
        p: [
          'Hanveon est distribué via Cloudflare Pages. Comme tout hébergeur web, Cloudflare reçoit les informations que ton navigateur doit envoyer pour demander une page, par exemple ton adresse IP, la page demandée, des informations sur le navigateur et sa langue et, lorsqu’elle est disponible, la page d’origine.',
          `Cloudflare utilise ces informations pour distribuer le site et le protéger contre les attaques, et les conserve pendant une durée limitée. Consulte sa ${CF('politique de confidentialité')} pour en savoir plus.`,
        ],
      },
      {
        h: 'Mesure des visites',
        p: [
          'Hanveon utilise Cloudflare Web Analytics pour savoir combien de personnes ouvrent chaque page. Cet outil n’utilise pas de cookies et ne te suit pas d’un site à l’autre. Cloudflare indique que ce service ne collecte ni n’utilise les données personnelles des visiteurs.',
          'Ces statistiques servent principalement à comprendre quels jeux sont le plus ouverts et à décider quoi créer ensuite.',
        ],
      },
      {
        h: 'Pas de publicité ni de scripts de suivi',
        p: [
          'Hanveon n’affiche actuellement aucune publicité et n’utilise aucun script publicitaire ou de suivi. Nous ne vendons pas d’informations te concernant et ne les transmettons pas à des annonceurs.',
          'De la publicité pourra éventuellement être ajoutée plus tard. Si cela arrive, cette page sera mise à jour avant la mise en place du changement.',
        ],
      },
      {
        h: 'D’où viennent les fichiers du site',
        p: [
          'Les polices, images et scripts utilisés par Hanveon sont servis depuis hanveon.com. Ils ne sont pas chargés depuis Google Fonts ou d’autres adresses extérieures.',
          'En dehors de la mesure des visites décrite plus haut, ton navigateur n’envoie pas de requêtes à des services extérieurs à l’hébergement utilisé par Hanveon.',
        ],
      },
      {
        h: 'Enfants',
        p: [
          'Les jeux sont simples et peuvent être utilisés par des personnes de différents âges, mais Hanveon ne s’adresse pas spécifiquement aux enfants. Le site ne collecte volontairement aucune information personnelle, y compris auprès des enfants.',
        ],
      },
      {
        h: 'Tes droits',
        p: [
          'Comme Hanveon ne propose pas de compte et ne stocke ni profil personnel ni données de jeu sur un serveur, nous n’avons normalement pas de données de compte personnel à fournir, corriger ou supprimer.',
          `Si tu te trouves dans l’Union européenne, au Royaume-Uni ou en Corée et que tu as une question ou une demande concernant la confidentialité, écris à ${M}.`,
        ],
      },
      {
        h: 'Modifications',
        p: ['Si cette page change, la date affichée en haut sera mise à jour elle aussi.'],
      },
    ],
  },

  zh: {
    h1: '隐私',
    lede: '这里说明 Hanveon 如何处理你的数据。因为网站收集的信息很少，所以内容也比较简单。',
    metaTitle: '隐私 | Hanveon',
    metaDesc:
      'Hanveon 没有账号系统，也没有服务器保存你的游戏数据。最高分只留在浏览器里。这里说明你打开和使用网站时会处理哪些信息。',
    blocks: [
      {
        h: '谁在运营 Hanveon',
        p: [
          `Hanveon 由一位住在韩国首尔的人制作和维护。如果这页有任何地方不清楚，可以写信到 ${M}，网站运营者会亲自查看。`,
        ],
      },
      {
        h: '没有账号，也没有服务器保存你的游戏数据',
        p: [
          'Hanveon 没有注册和登录功能，也没有要求你填写个人信息的表单。',
          '游戏是由浏览器下载并在你的设备上运行的文件。你在游戏中的操作、分数和游玩时间不会发送给 Hanveon，而是在你的设备上处理并留在那里。',
        ],
      },
      {
        h: '只保存在你设备上的信息',
        p: [
          '浏览器会在你的设备上保存两项信息：每个游戏的最高分，以及你选择的语言。它们只保存在浏览器的本地存储中，不会发送给我们，我们也无法远程读取。',
          '如果你在浏览器中清除 hanveon.com 的网站数据，这些信息也会被删除。其他地方没有保存副本，因此无法恢复。',
        ],
      },
      {
        h: '托管服务会收到什么',
        p: [
          'Hanveon 通过 Cloudflare Pages 提供服务。和其他网站托管服务一样，Cloudflare 会收到浏览器为了请求页面而必须发送的信息，例如 IP 地址、请求的页面、浏览器信息和语言，以及在能够获取时的来源页面。',
          `Cloudflare 会利用这些信息提供网站并抵御攻击，并在有限时间内保存。详情请查看 ${CF('Cloudflare 隐私政策')}。`,
        ],
      },
      {
        h: '访问统计',
        p: [
          'Hanveon 使用 Cloudflare Web Analytics 查看各页面被打开的次数。它不使用 Cookie，也不会跨网站跟踪你。Cloudflare 表示，这项服务不会收集或使用访客的个人数据。',
          '这些统计主要用于了解哪些游戏更常被打开，并帮助决定接下来做什么。',
        ],
      },
      {
        h: '没有广告，也没有追踪脚本',
        p: [
          '目前 Hanveon 没有广告，也没有广告或追踪脚本。我们不会出售关于你的信息，也不会把这些信息交给广告商。',
          '未来可能会加入广告。如果真的这样做，会在上线前先更新本隐私页面。',
        ],
      },
      {
        h: '网站文件从哪里加载',
        p: [
          'Hanveon 使用的字体、图片和脚本都由 hanveon.com 自己提供，不会从 Google Fonts 或其他外部地址加载。',
          '除上面说明的访问统计外，浏览器不会向 Hanveon 所用托管服务之外的其他服务发送请求。',
        ],
      },
      {
        h: '儿童',
        p: [
          '游戏比较简单，不同年龄的人都可以玩，但 Hanveon 并不是专门面向儿童的服务。网站不会主动收集任何人的个人信息，包括儿童。',
        ],
      },
      {
        h: '你的权利',
        p: [
          '由于 Hanveon 没有账号系统，也不在服务器上保存个人资料或游戏数据，因此通常没有可由我们提供、更正或删除的个人账号数据。',
          `如果你位于欧盟、英国或韩国，并对隐私有任何问题或请求，可以写信到 ${M}。`,
        ],
      },
      {
        h: '变更',
        p: ['如果本页内容发生变化，页面顶部的更新日期也会同步修改。'],
      },
    ],
  },
};
