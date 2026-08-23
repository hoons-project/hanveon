// 고객센터/문의 쪽. 여섯 나라말.
//
// 주소는 하나뿐이다 (`CONTACT_EMAIL`). 지킬 수 없는 답변 시간을 적지 않는다.

import { CONTACT_EMAIL, type TextCopy } from './index';

const M = `<a class="bigmail" href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`;

export const CONTACT: TextCopy = {
  en: {
    h1: 'Contact',
    lede: 'One address, read by an actual person.',
    metaTitle: 'Contact | Hanveon',
    metaDesc:
      'Contact Hanveon about a broken game, an idea for a new one, or anything related to privacy and the terms. One address, read by the person who makes the site.',
    blocks: [
      {
        h: 'Email',
        p: [
          M,
          'Write in English, Korean, Japanese, Spanish, French or Chinese — whichever is easiest for you.',
        ],
      },
      {
        h: 'What to write about',
        p: ['These are especially helpful:'],
        list: [
          'A game that is broken or behaving oddly — tell us which game, which browser and device you are using, and what happened.',
          'A game you wish existed.',
          'Anything about privacy, cookies or the terms.',
          'Anything about the artwork or writing on the site.',
        ],
      },
      {
        h: 'Replies',
        p: [
          'This is a one-person project run alongside other work, so a reply may take a few days. Every message is read.',
        ],
      },
    ],
  },

  ko: {
    h1: '문의하기',
    lede: 'Hanveon에 문의할 내용이 있다면 이메일로 보내주세요. 사이트를 만드는 사람이 직접 읽습니다.',
    metaTitle: '문의하기 | Hanveon',
    metaDesc:
      '게임 오류, 새 게임 아이디어, 개인정보·쿠키·이용 약관에 관한 질문이 있으면 Hanveon에 알려주세요. 사이트를 만드는 사람이 직접 읽습니다.',
    blocks: [
      {
        h: '이메일',
        p: [M, '한국어·영어·일본어·스페인어·프랑스어·중국어 중 편한 언어로 보내주시면 됩니다.'],
      },
      {
        h: '이런 내용을 보내주세요',
        p: ['특히 아래 내용이 있으면 확인하는 데 도움이 됩니다.'],
        list: [
          '게임이 깨지거나 이상하게 움직이는 경우 — 어느 게임인지, 사용한 브라우저와 기기, 어떤 일이 있었는지 적어주세요.',
          '있었으면 하는 게임 아이디어.',
          '개인정보·쿠키·이용 약관에 관한 질문.',
          '사이트의 그림이나 문구에 관한 의견.',
        ],
      },
      {
        h: '답변',
        p: [
          '한 사람이 다른 일과 함께 운영하는 프로젝트라 답변까지 며칠 걸릴 수 있습니다. 보내주신 메일은 모두 읽습니다.',
        ],
      },
    ],
  },

  ja: {
    h1: 'お問い合わせ',
    lede: '連絡先は一つ。サイトを作っている本人が読みます。',
    metaTitle: 'お問い合わせ | Hanveon',
    metaDesc:
      'ゲームの不具合、新しいゲームのアイデア、プライバシー・クッキー・利用規約についての質問などは、こちらからご連絡ください。サイトを作っている本人が読みます。',
    blocks: [
      {
        h: 'メール',
        p: [M, '日本語・英語・韓国語・スペイン語・フランス語・中国語のうち、書きやすい言語でどうぞ。'],
      },
      {
        h: 'こんな内容を送ってください',
        p: ['とくに次の情報があると確認しやすくなります。'],
        list: [
          'ゲームが動かない、または挙動がおかしい場合 — ゲーム名、ブラウザ、使っている端末、何が起きたかを書いてください。',
          'こんなゲームがあったらいい、というアイデア。',
          'プライバシー・クッキー・利用規約についての質問。',
          'サイトの絵や文章についての意見。',
        ],
      },
      {
        h: '返信について',
        p: [
          '一人でほかの仕事と並行して運営しているため、返信まで数日かかることがあります。届いたメールにはすべて目を通します。',
        ],
      },
    ],
  },

  es: {
    h1: 'Contacto',
    lede: 'Una sola dirección, leída por la persona que hace el sitio.',
    metaTitle: 'Contacto | Hanveon',
    metaDesc:
      'Escribe a Hanveon si un juego falla, si tienes una idea para uno nuevo o si quieres preguntar algo sobre privacidad, cookies o los términos de uso.',
    blocks: [
      {
        h: 'Correo',
        p: [M, 'Puedes escribir en español, inglés, coreano, japonés, francés o chino: usa el idioma que te resulte más cómodo.'],
      },
      {
        h: 'Qué puedes enviarnos',
        p: ['Estas cosas nos ayudan especialmente:'],
        list: [
          'Un juego que no funciona o se comporta de forma extraña: indica cuál es, qué navegador y dispositivo usas y qué ocurrió.',
          'Una idea para un juego que te gustaría encontrar aquí.',
          'Cualquier pregunta sobre privacidad, cookies o los términos de uso.',
          'Comentarios sobre los dibujos o los textos del sitio.',
        ],
      },
      {
        h: 'Respuestas',
        p: [
          'Es un proyecto llevado por una sola persona junto con otros trabajos, así que la respuesta puede tardar unos días. Todos los mensajes se leen.',
        ],
      },
    ],
  },

  fr: {
    h1: 'Contact',
    lede: 'Une seule adresse, lue par la personne qui fait le site.',
    metaTitle: 'Contact | Hanveon',
    metaDesc:
      'Écris à Hanveon si un jeu ne fonctionne pas, si tu as une idée pour un nouveau jeu, ou pour toute question sur la confidentialité, les cookies ou les conditions d’utilisation.',
    blocks: [
      {
        h: 'E-mail',
        p: [M, 'Tu peux écrire en français, anglais, coréen, japonais, espagnol ou chinois — choisis la langue dans laquelle tu es le plus à l’aise.'],
      },
      {
        h: 'Ce que tu peux nous envoyer',
        p: ['Les informations suivantes sont particulièrement utiles :'],
        list: [
          'Un jeu qui ne fonctionne pas ou se comporte bizarrement — indique lequel, le navigateur et l’appareil utilisés, puis ce qui s’est passé.',
          'Une idée de jeu que tu aimerais trouver ici.',
          'Une question sur la confidentialité, les cookies ou les conditions d’utilisation.',
          'Un commentaire sur les illustrations ou les textes du site.',
        ],
      },
      {
        h: 'Réponses',
        p: [
          'Le projet est géré par une seule personne en parallèle d’autres activités, donc une réponse peut prendre quelques jours. Tous les messages sont lus.',
        ],
      },
    ],
  },

  zh: {
    h1: '联系',
    lede: '只有一个邮箱，由做这个网站的人亲自阅读。',
    metaTitle: '联系 | Hanveon',
    metaDesc:
      '如果游戏出了问题、你有新游戏的点子，或想询问隐私、Cookie、使用条款等内容，都可以联系 Hanveon。',
    blocks: [
      {
        h: '邮箱',
        p: [M, '可以使用中文、英语、韩语、日语、西班牙语或法语，选你最方便的语言就好。'],
      },
      {
        h: '可以写些什么',
        p: ['下面这些信息尤其有帮助：'],
        list: [
          '游戏无法正常运行或表现异常 — 请写明游戏名称、使用的浏览器和设备，以及具体发生了什么。',
          '你希望本站以后出现的游戏点子。',
          '关于隐私、Cookie 或使用条款的问题。',
          '对网站插图或文字的意见。',
        ],
      },
      {
        h: '回复',
        p: ['这是一个人在其他工作之余维护的项目，所以回复可能需要几天。每封邮件都会看。'],
      },
    ],
  },
};
