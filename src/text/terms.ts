// 이용 약관 쪽. 여섯 나라말.
//
// 짧게 쓴다. 지키지 못할 약속을 적지 않는다 — 혼자 하는 프로젝트다.

import { CONTACT_EMAIL, type TextCopy } from './index';

const M = `<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`;

export const TERMS: TextCopy = {
  en: {
    h1: 'Terms',
    lede: 'The short rules for using Hanveon.',
    metaTitle: 'Terms | Hanveon',
    metaDesc:
      'The terms for using Hanveon: free to play, nothing to install, no account. What you may do, what you may not, and what is not promised.',
    blocks: [
      {
        h: 'What this is',
        p: [
          'Hanveon is a small collection of browser games. They are free, there is nothing to install, and there is no account. Using the site means you accept what is on this page.',
        ],
      },
      {
        h: 'What you may do',
        p: [
          'Play as much as you like, on any device, for free. Send the links to anyone. You do not need permission to link to a game or to the site.',
        ],
      },
      {
        h: 'What you may not do',
        p: [
          'Do not copy the games and put them on another site as your own. The games, the artwork and the writing on Hanveon belong to the person who made them.',
          'Do not try to break the site, overload it, or interfere with anyone else using it.',
        ],
      },
      {
        h: 'About scores',
        p: [
          'Best scores are kept by your own browser on your own device. They are not a record we hold and they are not verified by anyone.',
          'They disappear if you clear your browser data, and they do not follow you to another device or another browser. Nothing can be restored.',
        ],
      },
      {
        h: 'No promise that it keeps working',
        p: [
          'Hanveon is run by one person alongside other work. It is offered as it is. Games may be added or removed, pages may change, and the site may be unavailable at times — without notice.',
        ],
      },
      {
        h: 'Limits',
        p: [
          'As far as the law allows, the person who makes Hanveon is not liable for any loss arising from using the site.',
          'Some countries give you rights that cannot be signed away. Nothing on this page takes those away from you.',
        ],
      },
      {
        h: 'Which law applies',
        p: ['These terms follow the law of the Republic of Korea.'],
      },
      {
        h: 'Changes',
        p: ['If these terms change, the date at the top changes with them.'],
      },
      {
        h: 'Contact',
        p: [`Anything about this page: ${M}.`],
      },
    ],
  },

  ko: {
    h1: '이용 약관',
    lede: 'Hanveon 을 쓸 때의 짧은 규칙입니다.',
    metaTitle: '이용 약관 | Hanveon',
    metaDesc:
      'Hanveon 이용 약관 — 무료, 설치 없음, 가입 없음. 해도 되는 것, 하면 안 되는 것, 그리고 약속하지 않는 것.',
    blocks: [
      {
        h: '이게 무엇인가',
        p: [
          'Hanveon 은 브라우저에서 하는 작은 게임 모음입니다. 무료이고, 받을 것이 없고, 가입도 없습니다. 이 사이트를 쓰신다는 것은 이 쪽에 적힌 것에 동의하신다는 뜻입니다.',
        ],
      },
      {
        h: '해도 되는 것',
        p: [
          '어느 기기에서든 얼마든지 무료로 하셔도 됩니다. 링크를 누구에게든 보내셔도 됩니다. 게임이나 사이트로 링크를 거는 데 저희 허락은 필요 없습니다.',
        ],
      },
      {
        h: '하면 안 되는 것',
        p: [
          '게임을 복사해서 다른 사이트에 자기 것처럼 올리지 마세요. Hanveon 의 게임과 그림과 글은 만든 사람의 것입니다.',
          '사이트를 망가뜨리거나, 감당 못 할 만큼 몰아붙이거나, 다른 사람이 쓰는 것을 방해하지 마세요.',
        ],
      },
      {
        h: '최고 기록에 대해',
        p: [
          '최고 기록은 여러분 브라우저가 여러분 기기에 갖고 있습니다. 저희가 갖고 있는 기록이 아니고, 누가 확인해 준 것도 아닙니다.',
          '브라우저 자료를 지우면 사라지고, 다른 기기나 다른 브라우저로 따라오지 않습니다. 되살릴 수 없습니다.',
        ],
      },
      {
        h: '계속 돌아간다고 약속하지 않습니다',
        p: [
          'Hanveon 은 한 사람이 다른 일과 함께 하는 프로젝트입니다. 있는 그대로 내놓습니다. 게임이 늘거나 빠질 수 있고, 쪽이 바뀔 수 있고, 사이트가 안 열리는 때가 있을 수 있습니다 — 미리 알리지 않고요.',
        ],
      },
      {
        h: '책임의 한계',
        p: [
          '법이 허용하는 한, Hanveon 을 만든 사람은 이 사이트를 써서 생긴 손해에 책임을 지지 않습니다.',
          '나라에 따라 포기할 수 없는 권리가 있습니다. 이 쪽의 어떤 것도 그 권리를 빼앗지 않습니다.',
        ],
      },
      {
        h: '어느 나라 법을 따르나',
        p: ['이 약관은 대한민국 법을 따릅니다.'],
      },
      {
        h: '바뀌면',
        p: ['이 약관이 바뀌면 맨 위 날짜도 같이 바뀝니다.'],
      },
      {
        h: '연락',
        p: [`이 쪽에 대해 궁금한 것은 ${M} 으로 보내주세요.`],
      },
    ],
  },

  ja: {
    h1: '利用規約',
    lede: 'Hanveon を使うときの短い決まりです。',
    metaTitle: '利用規約 | Hanveon',
    metaDesc:
      'Hanveon の利用規約 — 無料、インストール不要、登録なし。していいこと、してはいけないこと、そして約束していないこと。',
    blocks: [
      {
        h: 'これは何か',
        p: [
          'Hanveon はブラウザで遊ぶ小さなゲームの集まりです。無料で、インストールするものがなく、アカウントもありません。このサイトを使うことは、このページに書かれていることに同意することを意味します。',
        ],
      },
      {
        h: 'していいこと',
        p: [
          'どの端末でも、好きなだけ、無料で遊んでください。リンクを誰に送ってもかまいません。ゲームやサイトへリンクを張るのに、こちらの許可はいりません。',
        ],
      },
      {
        h: 'してはいけないこと',
        p: [
          'ゲームをコピーして、ほかのサイトに自分のものとして置かないでください。Hanveon のゲーム、絵、文章は作った本人のものです。',
          'サイトを壊そうとしたり、耐えられないほど負荷をかけたり、ほかの人の利用を妨げたりしないでください。',
        ],
      },
      {
        h: 'ベスト記録について',
        p: [
          'ベスト記録はあなたのブラウザが、あなたの端末に持っています。こちらが持っている記録ではなく、誰かが確認したものでもありません。',
          'ブラウザのデータを消すと消え、ほかの端末やほかのブラウザにはついてきません。元に戻せません。',
        ],
      },
      {
        h: '動き続けることは約束しません',
        p: [
          'Hanveon は一人がほかの仕事と並行して運営しています。あるがままの形で提供します。ゲームが増えたり減ったり、ページが変わったり、サイトが開かない時間があったりします — 予告なしに。',
        ],
      },
      {
        h: '責任の範囲',
        p: [
          '法律が認める範囲で、Hanveon を作っている人は、このサイトを使ったことで生じた損害について責任を負いません。',
          '国によっては放棄できない権利があります。このページのどれも、その権利を奪うものではありません。',
        ],
      },
      {
        h: 'どの国の法律によるか',
        p: ['この規約は大韓民国の法律によります。'],
      },
      {
        h: '変更',
        p: ['この規約が変わったときは、上の日付も一緒に変わります。'],
      },
      {
        h: '連絡先',
        p: [`このページについては ${M} までどうぞ。`],
      },
    ],
  },

  es: {
    h1: 'Términos',
    lede: 'Las reglas cortas para usar Hanveon.',
    metaTitle: 'Términos | Hanveon',
    metaDesc:
      'Términos de uso de Hanveon: gratis, sin instalar nada, sin cuenta. Lo que puedes hacer, lo que no, y lo que no se promete.',
    blocks: [
      {
        h: 'Qué es esto',
        p: [
          'Hanveon es una pequeña colección de juegos para el navegador. Son gratis, no hay nada que instalar y no hay cuenta. Usar el sitio significa que aceptas lo que hay en esta página.',
        ],
      },
      {
        h: 'Lo que puedes hacer',
        p: [
          'Juega todo lo que quieras, en cualquier dispositivo, gratis. Manda los enlaces a quien quieras. No necesitas permiso para enlazar a un juego ni al sitio.',
        ],
      },
      {
        h: 'Lo que no puedes hacer',
        p: [
          'No copies los juegos ni los pongas en otro sitio como si fueran tuyos. Los juegos, los dibujos y los textos de Hanveon pertenecen a quien los hizo.',
          'No intentes romper el sitio, sobrecargarlo ni estorbar a quien lo esté usando.',
        ],
      },
      {
        h: 'Sobre los récords',
        p: [
          'Los récords los guarda tu propio navegador en tu propio dispositivo. No son un registro que tengamos nosotros ni están verificados por nadie.',
          'Desaparecen si borras los datos del navegador y no te siguen a otro dispositivo ni a otro navegador. No se puede recuperar nada.',
        ],
      },
      {
        h: 'No prometemos que siga funcionando',
        p: [
          'Hanveon lo lleva una sola persona junto a otro trabajo. Se ofrece tal cual. Puede que se añadan o quiten juegos, que las páginas cambien y que el sitio no esté disponible a ratos, sin aviso.',
        ],
      },
      {
        h: 'Límites',
        p: [
          'En la medida en que la ley lo permita, la persona que hace Hanveon no responde por ninguna pérdida derivada del uso del sitio.',
          'Algunos países te dan derechos a los que no se puede renunciar. Nada de esta página te los quita.',
        ],
      },
      {
        h: 'Qué ley se aplica',
        p: ['Estos términos se rigen por la ley de la República de Corea.'],
      },
      {
        h: 'Cambios',
        p: ['Si estos términos cambian, la fecha de arriba cambia con ellos.'],
      },
      {
        h: 'Contacto',
        p: [`Cualquier cosa sobre esta página: ${M}.`],
      },
    ],
  },

  fr: {
    h1: 'Conditions',
    lede: 'Les règles courtes pour utiliser Hanveon.',
    metaTitle: 'Conditions | Hanveon',
    metaDesc:
      'Conditions d’utilisation de Hanveon : gratuit, rien à installer, pas de compte. Ce que tu peux faire, ce que tu ne peux pas, et ce qui n’est pas promis.',
    blocks: [
      {
        h: 'De quoi il s’agit',
        p: [
          'Hanveon est une petite collection de jeux pour le navigateur. Ils sont gratuits, il n’y a rien à installer et pas de compte. Utiliser le site signifie que tu acceptes ce qui est écrit sur cette page.',
        ],
      },
      {
        h: 'Ce que tu peux faire',
        p: [
          'Joue autant que tu veux, sur n’importe quel appareil, gratuitement. Envoie les liens à qui tu veux. Aucune autorisation n’est nécessaire pour créer un lien vers un jeu ou vers le site.',
        ],
      },
      {
        h: 'Ce que tu ne peux pas faire',
        p: [
          'Ne copie pas les jeux pour les mettre sur un autre site comme s’ils étaient les tiens. Les jeux, les dessins et les textes de Hanveon appartiennent à la personne qui les a faits.',
          'N’essaie pas de casser le site, de le surcharger, ni de gêner ceux qui l’utilisent.',
        ],
      },
      {
        h: 'À propos des records',
        p: [
          'Les records sont conservés par ton propre navigateur, sur ton propre appareil. Ce n’est pas un registre que nous détenons et personne ne les vérifie.',
          'Ils disparaissent si tu effaces les données de ton navigateur, et ils ne te suivent pas sur un autre appareil ni un autre navigateur. Rien ne peut être récupéré.',
        ],
      },
      {
        h: 'Aucune promesse de continuité',
        p: [
          'Hanveon est tenu par une seule personne, à côté d’un autre travail. Le site est proposé tel quel. Des jeux peuvent être ajoutés ou retirés, des pages peuvent changer, et le site peut être indisponible par moments — sans préavis.',
        ],
      },
      {
        h: 'Limites',
        p: [
          'Dans la mesure permise par la loi, la personne qui fait Hanveon n’est pas responsable des pertes résultant de l’utilisation du site.',
          'Certains pays accordent des droits auxquels on ne peut pas renoncer. Rien sur cette page ne t’en prive.',
        ],
      },
      {
        h: 'Loi applicable',
        p: ['Ces conditions relèvent du droit de la République de Corée.'],
      },
      {
        h: 'Modifications',
        p: ['Si ces conditions changent, la date en haut change avec elles.'],
      },
      {
        h: 'Contact',
        p: [`Pour tout ce qui concerne cette page : ${M}.`],
      },
    ],
  },

  zh: {
    h1: '使用条款',
    lede: '使用 Hanveon 的简短规则。',
    metaTitle: '使用条款 | Hanveon',
    metaDesc: 'Hanveon 使用条款：免费、无需安装、无需账号。可以做什么、不可以做什么，以及不作出的承诺。',
    blocks: [
      {
        h: '这是什么',
        p: [
          'Hanveon 是一组在浏览器里玩的小游戏。免费，不用安装，也没有账号。使用本站即表示你接受这一页上的内容。',
        ],
      },
      {
        h: '可以做的',
        p: [
          '在任何设备上随便玩，免费。把链接发给任何人都可以。链接到某个游戏或本站，不需要我们许可。',
        ],
      },
      {
        h: '不可以做的',
        p: [
          '不要复制这些游戏，放到别的网站上当作自己的。Hanveon 的游戏、画面和文字属于制作它们的人。',
          '不要试图破坏本站、让它超载，或妨碍别人使用。',
        ],
      },
      {
        h: '关于最高分',
        p: [
          '最高分由你自己的浏览器保存在你自己的设备上。它不是我们持有的记录，也没有任何人核实过。',
          '清除浏览器数据它就没了，也不会跟着你到另一台设备或另一个浏览器。无法恢复。',
        ],
      },
      {
        h: '不保证一直能用',
        p: [
          'Hanveon 由一个人在其他工作之余维护，按现状提供。游戏可能增加或下架，页面可能改动，网站也可能有时打不开 — 恕不预先通知。',
        ],
      },
      {
        h: '责任范围',
        p: [
          '在法律允许的范围内，制作 Hanveon 的人不对因使用本站而产生的任何损失负责。',
          '有些国家赋予你不可放弃的权利。这一页上的任何内容都不会剥夺这些权利。',
        ],
      },
      {
        h: '适用法律',
        p: ['本条款适用大韩民国法律。'],
      },
      {
        h: '变更',
        p: ['本条款有变动时，上面的日期也会跟着改。'],
      },
      {
        h: '联系',
        p: [`关于这一页的任何事：${M}。`],
      },
    ],
  },
};
