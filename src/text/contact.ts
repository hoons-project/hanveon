// 연락 쪽. 여섯 나라말.
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
      'Write to Hanveon about a game that broke, an idea for a new one, or anything about privacy and the terms. One address, read by the person who makes the site.',
    blocks: [
      {
        h: 'Email',
        p: [
          M,
          'Write in English, Korean, Japanese, Spanish, French or Chinese — whichever is easiest for you.',
        ],
      },
      {
        h: 'What is worth writing about',
        p: ['Anything on this list gets a proper look:'],
        list: [
          'A game that broke or behaves oddly — say which game, which browser and phone or computer, and what happened.',
          'A game you wish existed.',
          'Anything about privacy, cookies or the terms.',
          'Anything about the artwork or the writing on the site.',
        ],
      },
      {
        h: 'How long it takes',
        p: [
          'This is a one-person project run alongside other work, so a reply may take a few days. Every message is read.',
        ],
      },
    ],
  },

  ko: {
    h1: '연락',
    lede: '주소는 하나. 사람이 읽습니다.',
    metaTitle: '연락 | Hanveon',
    metaDesc:
      '게임이 이상하거나, 하고 싶은 게임이 있거나, 개인정보·약관에 대해 물어볼 것이 있으면 보내주세요. 주소는 하나고 사이트를 만드는 사람이 읽습니다.',
    blocks: [
      {
        h: '메일',
        p: [M, '한국어·영어·일본어·스페인어·프랑스어·중국어 중에 편한 말로 쓰시면 됩니다.'],
      },
      {
        h: '이런 걸 보내주시면 좋아요',
        p: ['아래 것들은 꼭 들여다봅니다.'],
        list: [
          '게임이 깨지거나 이상하게 도는 것 — 어느 게임인지, 어느 브라우저와 어느 폰·컴퓨터인지, 무슨 일이 있었는지 적어주세요.',
          '있었으면 하는 게임.',
          '개인정보·쿠키·약관에 대한 것.',
          '사이트의 그림이나 글에 대한 것.',
        ],
      },
      {
        h: '답이 오는 데 걸리는 시간',
        p: [
          '한 사람이 다른 일과 같이 하는 프로젝트라 답이 며칠 걸릴 수 있습니다. 오는 것은 다 읽습니다.',
        ],
      },
    ],
  },

  ja: {
    h1: 'お問い合わせ',
    lede: 'アドレスは一つ。人が読みます。',
    metaTitle: 'お問い合わせ | Hanveon',
    metaDesc:
      'ゲームの不具合、遊んでみたいゲームのアイデア、プライバシーや規約について。アドレスは一つで、サイトを作っている本人が読みます。',
    blocks: [
      {
        h: 'メール',
        p: [M, '日本語・英語・韓国語・スペイン語・フランス語・中国語のうち、書きやすい言葉でどうぞ。'],
      },
      {
        h: 'こんなことを書いてください',
        p: ['次のようなことは、きちんと目を通します。'],
        list: [
          'ゲームが壊れている、動きがおかしい — どのゲームか、どのブラウザとどの端末か、何が起きたかを書いてください。',
          'あったらいいと思うゲーム。',
          'プライバシー・クッキー・規約について。',
          'サイトの絵や文章について。',
        ],
      },
      {
        h: '返事までの時間',
        p: [
          '一人がほかの仕事と並行してやっているので、返事に数日かかることがあります。届いたものはすべて読みます。',
        ],
      },
    ],
  },

  es: {
    h1: 'Contacto',
    lede: 'Una dirección, leída por una persona de verdad.',
    metaTitle: 'Contacto | Hanveon',
    metaDesc:
      'Escribe a Hanveon si un juego falla, si se te ocurre uno nuevo, o por cualquier cosa sobre privacidad y términos. Una dirección, leída por quien hace el sitio.',
    blocks: [
      {
        h: 'Correo',
        p: [M, 'Escribe en español, inglés, coreano, japonés, francés o chino, el que te resulte más fácil.'],
      },
      {
        h: 'Sobre qué merece la pena escribir',
        p: ['Todo lo de esta lista se mira con calma:'],
        list: [
          'Un juego que se ha roto o se comporta de forma rara: di qué juego, qué navegador y qué móvil u ordenador, y qué pasó.',
          'Un juego que te gustaría que existiera.',
          'Cualquier cosa sobre privacidad, cookies o los términos.',
          'Cualquier cosa sobre los dibujos o los textos del sitio.',
        ],
      },
      {
        h: 'Cuánto tarda',
        p: [
          'Es un proyecto de una sola persona que va junto a otro trabajo, así que la respuesta puede tardar unos días. Se leen todos los mensajes.',
        ],
      },
    ],
  },

  fr: {
    h1: 'Contact',
    lede: 'Une seule adresse, lue par une vraie personne.',
    metaTitle: 'Contact | Hanveon',
    metaDesc:
      'Écris à Hanveon pour un jeu qui bugue, une idée de nouveau jeu, ou tout ce qui touche à la confidentialité et aux conditions. Une adresse, lue par la personne qui fait le site.',
    blocks: [
      {
        h: 'E-mail',
        p: [M, 'Écris en français, anglais, coréen, japonais, espagnol ou chinois — celui qui te vient le plus facilement.'],
      },
      {
        h: 'Ce qui vaut la peine d’être écrit',
        p: ['Tout ce qui suit est regardé sérieusement :'],
        list: [
          'Un jeu cassé ou qui se comporte bizarrement — dis lequel, avec quel navigateur et quel téléphone ou ordinateur, et ce qui s’est passé.',
          'Un jeu que tu aimerais voir exister.',
          'Tout ce qui touche à la confidentialité, aux cookies ou aux conditions.',
          'Tout ce qui touche aux dessins ou aux textes du site.',
        ],
      },
      {
        h: 'Le temps de réponse',
        p: [
          'C’est un projet mené par une seule personne à côté d’un autre travail, la réponse peut donc prendre quelques jours. Tous les messages sont lus.',
        ],
      },
    ],
  },

  zh: {
    h1: '联系',
    lede: '只有一个地址，由真人阅读。',
    metaTitle: '联系 | Hanveon',
    metaDesc:
      '游戏出问题、想到新游戏的点子，或者关于隐私和条款的任何事，都可以写信过来。只有一个地址，由做这个网站的人阅读。',
    blocks: [
      {
        h: '邮件',
        p: [M, '用中文、英语、韩语、日语、西班牙语或法语都行，挑你写起来最顺手的。'],
      },
      {
        h: '值得写来的事',
        p: ['下面这些都会认真看：'],
        list: [
          '游戏坏了或者表现奇怪 — 请说明是哪个游戏、什么浏览器、什么手机或电脑，以及发生了什么。',
          '你希望存在的游戏。',
          '关于隐私、Cookie 或使用条款的任何事。',
          '关于网站上的画面或文字的任何事。',
        ],
      },
      {
        h: '多久回复',
        p: ['这是一个人在其他工作之余做的项目，回复可能要几天。每一封都会看。'],
      },
    ],
  },
};
