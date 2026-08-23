// 이용 약관 쪽. 여섯 나라말.
//
// 짧게 쓴다. 지키지 못할 약속을 적지 않는다 — 혼자 하는 프로젝트다.

import { CONTACT_EMAIL, type TextCopy } from './index';

const M = `<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`;

export const TERMS: TextCopy = {
  en: {
    h1: 'Terms',
    lede: 'The short version of the rules for using Hanveon.',
    metaTitle: 'Terms | Hanveon',
    metaDesc:
      'Hanveon terms of use: free to play, nothing to install, no account. What you may do, what you may not do, and what the site does not promise.',
    blocks: [
      {
        h: 'What Hanveon is',
        p: [
          'Hanveon is a small collection of browser games. They are free, there is nothing to install, and there is no account. By using the site, you agree to the terms on this page.',
        ],
      },
      {
        h: 'What you may do',
        p: [
          'Play as much as you like, on any device, for free. Share the links with anyone. You do not need permission to link to a game or to the site.',
        ],
      },
      {
        h: 'What you may not do',
        p: [
          'Do not copy the games and republish them on another site as your own. The games, artwork and writing on Hanveon belong to the person who made them.',
          'Do not try to break the site, overload it, or interfere with anyone else using it.',
        ],
      },
      {
        h: 'About scores',
        p: [
          'Your best scores are stored by your browser on your own device. They are not records held by Hanveon and they are not verified by anyone.',
          'They disappear if you clear your browser data, and they do not follow you to another device or browser. There is no backup, so they cannot be restored.',
        ],
      },
      {
        h: 'No guarantee that the site will always be available',
        p: [
          'Hanveon is run by one person alongside other work and is provided as is. Games may be added or removed, pages may change, and the site may sometimes be unavailable without notice.',
        ],
      },
      {
        h: 'Limits of liability',
        p: [
          'To the extent allowed by law, the person who makes Hanveon is not liable for losses arising from use of the site.',
          'Some countries give you rights that cannot be waived. Nothing on this page takes those rights away.',
        ],
      },
      {
        h: 'Which law applies',
        p: ['These terms are governed by the laws of the Republic of Korea.'],
      },
      {
        h: 'Changes',
        p: ['If these terms change, the date at the top of the page changes with them.'],
      },
      {
        h: 'Contact',
        p: [`Questions about these terms: ${M}.`],
      },
    ],
  },

  ko: {
    h1: '이용 약관',
    lede: 'Hanveon을 이용할 때 알아두실 짧은 규칙입니다.',
    metaTitle: '이용 약관 | Hanveon',
    metaDesc:
      'Hanveon 이용 약관입니다. 무료로 이용할 수 있고 설치나 가입은 필요하지 않습니다. 할 수 있는 것, 하면 안 되는 것, 그리고 사이트가 보장하지 않는 내용을 안내합니다.',
    blocks: [
      {
        h: 'Hanveon은 어떤 서비스인가',
        p: [
          'Hanveon은 브라우저에서 바로 즐기는 작은 게임 모음입니다. 무료이고, 설치할 것도 가입할 것도 없습니다. 사이트를 이용하면 이 페이지의 약관에 동의한 것으로 봅니다.',
        ],
      },
      {
        h: '해도 되는 것',
        p: [
          '어떤 기기에서든 원하는 만큼 무료로 이용하셔도 됩니다. 링크도 자유롭게 공유하셔도 됩니다. 게임이나 Hanveon으로 연결되는 링크를 만드는 데 별도 허락은 필요하지 않습니다.',
        ],
      },
      {
        h: '하면 안 되는 것',
        p: [
          '게임을 복사해 다른 사이트에 자기 콘텐츠처럼 다시 올리면 안 됩니다. Hanveon의 게임, 그림, 글은 이를 만든 사람에게 권리가 있습니다.',
          '사이트를 고의로 망가뜨리거나 과도한 부하를 주거나, 다른 사람의 이용을 방해하면 안 됩니다.',
        ],
      },
      {
        h: '최고 기록에 대해',
        p: [
          '최고 기록은 사용 중인 브라우저가 해당 기기에 저장합니다. Hanveon 서버가 보관하는 기록이 아니며, 누군가가 공식적으로 확인한 기록도 아닙니다.',
          '브라우저 데이터를 지우면 기록도 사라지고, 다른 기기나 브라우저로 자동으로 옮겨지지 않습니다. 별도 사본이 없기 때문에 복구할 수 없습니다.',
        ],
      },
      {
        h: '항상 이용할 수 있다고 보장하지 않습니다',
        p: [
          'Hanveon은 한 사람이 다른 일과 함께 운영하는 프로젝트이며 현재 상태 그대로 제공됩니다. 게임이 추가되거나 없어질 수 있고, 페이지 내용이 바뀔 수 있으며, 별도 안내 없이 사이트를 이용할 수 없는 시간이 생길 수도 있습니다.',
        ],
      },
      {
        h: '책임의 한계',
        p: [
          '법이 허용하는 범위에서, Hanveon을 만든 사람은 이 사이트 이용으로 발생한 손해에 대해 책임을 지지 않습니다.',
          '국가나 지역에 따라 포기할 수 없는 법적 권리가 있을 수 있습니다. 이 약관의 어떤 내용도 그런 권리를 제한하지 않습니다.',
        ],
      },
      {
        h: '적용 법률',
        p: ['이 약관에는 대한민국 법률이 적용됩니다.'],
      },
      {
        h: '약관이 바뀌면',
        p: ['약관 내용이 바뀌면 페이지 맨 위의 수정일도 함께 바뀝니다.'],
      },
      {
        h: '연락',
        p: [`이 약관에 관한 질문은 ${M}으로 보내주세요.`],
      },
    ],
  },

  ja: {
    h1: '利用規約',
    lede: 'Hanveon を利用するための、短くまとめたルールです。',
    metaTitle: '利用規約 | Hanveon',
    metaDesc:
      'Hanveon の利用規約です。無料で遊べて、インストールやアカウント登録は不要です。できること、してはいけないこと、保証していないことを説明します。',
    blocks: [
      {
        h: 'Hanveon について',
        p: [
          'Hanveon はブラウザですぐ遊べる小さなゲーム集です。無料で、インストールもアカウント登録も必要ありません。サイトを利用すると、このページの規約に同意したものとみなされます。',
        ],
      },
      {
        h: 'できること',
        p: [
          'どの端末でも、好きなだけ無料で遊べます。リンクも自由に共有できます。ゲームや Hanveon へのリンクを張るために、事前の許可は必要ありません。',
        ],
      },
      {
        h: 'してはいけないこと',
        p: [
          'ゲームをコピーし、別のサイトで自分のものとして公開しないでください。Hanveon のゲーム、イラスト、文章の権利は、それらを作った人にあります。',
          'サイトを故意に壊そうとしたり、過度な負荷をかけたり、ほかの人の利用を妨げたりしないでください。',
        ],
      },
      {
        h: 'ベスト記録について',
        p: [
          'ベスト記録は、利用しているブラウザがその端末内に保存します。Hanveon がサーバーで保管している記録ではなく、誰かが公式に確認した記録でもありません。',
          'ブラウザのデータを削除すると記録も消えます。別の端末やブラウザへ自動で引き継がれることもありません。バックアップがないため復元できません。',
        ],
      },
      {
        h: 'いつでも利用できることは保証しません',
        p: [
          'Hanveon は、一人がほかの仕事と並行して運営しているプロジェクトで、現状のまま提供されています。ゲームが追加・削除されたり、ページの内容が変わったり、予告なく一時的に利用できなくなったりすることがあります。',
        ],
      },
      {
        h: '責任の範囲',
        p: [
          '法律で認められる範囲において、Hanveon を作っている人は、このサイトの利用によって生じた損失について責任を負いません。',
          '国や地域によっては、放棄できない権利が認められています。このページの内容によって、その権利が失われることはありません。',
        ],
      },
      {
        h: '準拠法',
        p: ['この利用規約には大韓民国の法律が適用されます。'],
      },
      {
        h: '変更',
        p: ['利用規約を変更した場合は、ページ上部の更新日も変更します。'],
      },
      {
        h: 'お問い合わせ',
        p: [`この利用規約についての質問は ${M} までどうぞ。`],
      },
    ],
  },

  es: {
    h1: 'Términos de uso',
    lede: 'Las reglas básicas para usar Hanveon, explicadas de forma breve.',
    metaTitle: 'Términos de uso | Hanveon',
    metaDesc:
      'Términos de uso de Hanveon: juegos gratis, sin instalación y sin cuenta. Qué puedes hacer, qué no puedes hacer y qué no garantiza el sitio.',
    blocks: [
      {
        h: 'Qué es Hanveon',
        p: [
          'Hanveon es una pequeña colección de juegos para navegador. Son gratuitos, no tienes que instalar nada y no necesitas una cuenta. Al usar el sitio, aceptas los términos de esta página.',
        ],
      },
      {
        h: 'Lo que puedes hacer',
        p: [
          'Puedes jugar todo lo que quieras, gratis y desde cualquier dispositivo. También puedes compartir los enlaces con quien quieras. No necesitas permiso para enlazar a un juego o a Hanveon.',
        ],
      },
      {
        h: 'Lo que no puedes hacer',
        p: [
          'No copies los juegos ni los publiques en otro sitio como si fueran tuyos. Los juegos, las ilustraciones y los textos de Hanveon pertenecen a la persona que los creó.',
          'No intentes dañar el sitio, sobrecargarlo ni impedir que otras personas lo utilicen.',
        ],
      },
      {
        h: 'Sobre los récords',
        p: [
          'Tus mejores puntuaciones se guardan en tu propio dispositivo mediante el navegador. Hanveon no conserva esos registros en un servidor y nadie los verifica oficialmente.',
          'Si borras los datos del navegador, también desaparecen los récords. No se trasladan automáticamente a otro dispositivo o navegador y, como no existe una copia de seguridad, no se pueden recuperar.',
        ],
      },
      {
        h: 'No garantizamos que el sitio esté siempre disponible',
        p: [
          'Hanveon es un proyecto llevado por una sola persona junto con otros trabajos y se ofrece tal cual. Se pueden añadir o retirar juegos, cambiar páginas o producirse interrupciones temporales sin previo aviso.',
        ],
      },
      {
        h: 'Límites de responsabilidad',
        p: [
          'En la medida en que lo permita la ley, la persona que hace Hanveon no será responsable de las pérdidas derivadas del uso del sitio.',
          'En algunos países o regiones existen derechos a los que no se puede renunciar. Nada de esta página elimina ni limita esos derechos.',
        ],
      },
      {
        h: 'Ley aplicable',
        p: ['Estos términos se rigen por las leyes de la República de Corea.'],
      },
      {
        h: 'Cambios',
        p: ['Si estos términos cambian, también se actualizará la fecha que aparece en la parte superior de la página.'],
      },
      {
        h: 'Contacto',
        p: [`Si tienes alguna pregunta sobre estos términos, escribe a ${M}.`],
      },
    ],
  },

  fr: {
    h1: 'Conditions d’utilisation',
    lede: 'Les règles essentielles pour utiliser Hanveon, en version courte.',
    metaTitle: 'Conditions d’utilisation | Hanveon',
    metaDesc:
      'Conditions d’utilisation de Hanveon : jeux gratuits, sans installation ni compte. Ce que tu peux faire, ce qui est interdit et ce que le site ne garantit pas.',
    blocks: [
      {
        h: 'Ce qu’est Hanveon',
        p: [
          'Hanveon est une petite collection de jeux à lancer dans le navigateur. Ils sont gratuits, ne demandent aucune installation et ne nécessitent aucun compte. En utilisant le site, tu acceptes les conditions de cette page.',
        ],
      },
      {
        h: 'Ce que tu peux faire',
        p: [
          'Tu peux jouer autant que tu veux, gratuitement et sur n’importe quel appareil. Tu peux aussi partager les liens librement. Aucune autorisation n’est nécessaire pour créer un lien vers un jeu ou vers Hanveon.',
        ],
      },
      {
        h: 'Ce que tu ne peux pas faire',
        p: [
          'Ne copie pas les jeux pour les publier sur un autre site comme s’ils étaient les tiens. Les jeux, les illustrations et les textes de Hanveon appartiennent à la personne qui les a créés.',
          'N’essaie pas d’endommager le site, de le surcharger ou d’empêcher d’autres personnes de l’utiliser.',
        ],
      },
      {
        h: 'À propos des records',
        p: [
          'Tes meilleurs scores sont enregistrés par ton navigateur sur ton propre appareil. Hanveon ne les conserve pas sur un serveur et personne ne les vérifie officiellement.',
          'Ils disparaissent si tu effaces les données du navigateur. Ils ne sont pas transférés automatiquement vers un autre appareil ou navigateur et, puisqu’il n’existe aucune sauvegarde, ils ne peuvent pas être restaurés.',
        ],
      },
      {
        h: 'Aucune garantie de disponibilité permanente',
        p: [
          'Hanveon est un projet géré par une seule personne en parallèle d’autres activités et il est fourni tel quel. Des jeux peuvent être ajoutés ou retirés, des pages peuvent changer et le site peut parfois être indisponible sans préavis.',
        ],
      },
      {
        h: 'Limites de responsabilité',
        p: [
          'Dans la mesure permise par la loi, la personne qui fait Hanveon n’est pas responsable des pertes liées à l’utilisation du site.',
          'Dans certains pays ou régions, certains droits ne peuvent pas être abandonnés. Rien sur cette page ne supprime ni ne limite ces droits.',
        ],
      },
      {
        h: 'Droit applicable',
        p: ['Ces conditions sont régies par les lois de la République de Corée.'],
      },
      {
        h: 'Modifications',
        p: ['Si ces conditions changent, la date affichée en haut de la page sera mise à jour elle aussi.'],
      },
      {
        h: 'Contact',
        p: [`Pour toute question sur ces conditions, écris à ${M}.`],
      },
    ],
  },

  zh: {
    h1: '使用条款',
    lede: '使用 Hanveon 时需要了解的基本规则。',
    metaTitle: '使用条款 | Hanveon',
    metaDesc:
      'Hanveon 使用条款：游戏免费，无需安装，也无需账号。这里说明你可以做什么、不可以做什么，以及本站不作哪些保证。',
    blocks: [
      {
        h: 'Hanveon 是什么',
        p: [
          'Hanveon 是一组直接在浏览器里玩的小游戏。游戏免费，不用安装，也不用注册账号。使用本站即表示你接受本页列出的条款。',
        ],
      },
      {
        h: '你可以做什么',
        p: [
          '你可以在任何设备上免费游玩，次数不限，也可以把链接分享给任何人。链接到某个游戏或 Hanveon 本身，不需要事先获得许可。',
        ],
      },
      {
        h: '你不可以做什么',
        p: [
          '请不要复制这些游戏，再放到其他网站上当作自己的内容发布。Hanveon 的游戏、插图和文字属于制作它们的人。',
          '请不要故意破坏网站、让网站过载，或妨碍其他人正常使用。',
        ],
      },
      {
        h: '关于最高分',
        p: [
          '最高分由你的浏览器保存在你自己的设备上。Hanveon 不会把这些记录保存在服务器上，也没有任何人对这些成绩进行官方验证。',
          '如果你清除浏览器数据，最高分也会消失。它们不会自动转移到其他设备或浏览器，而且没有备份，因此无法恢复。',
        ],
      },
      {
        h: '不保证网站始终可用',
        p: [
          'Hanveon 是由一个人在其他工作之余维护的项目，按现状提供。游戏可能增加或下架，页面内容可能调整，网站也可能在没有提前通知的情况下暂时无法访问。',
        ],
      },
      {
        h: '责任限制',
        p: [
          '在法律允许的范围内，制作 Hanveon 的人不对因使用本站而产生的损失承担责任。',
          '某些国家或地区会赋予你不能放弃的法定权利。本页任何内容都不会取消或限制这些权利。',
        ],
      },
      {
        h: '适用法律',
        p: ['本条款适用大韩民国法律。'],
      },
      {
        h: '条款变更',
        p: ['如果条款内容发生变化，页面顶部的更新日期也会同步修改。'],
      },
      {
        h: '联系',
        p: [`如果对这些条款有疑问，请写信到 ${M}。`],
      },
    ],
  },
};
