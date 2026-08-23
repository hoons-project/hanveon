// 없는 주소로 갔을 때 나오는 쪽. 여섯 나라말.
//
// Cloudflare Pages 는 요청한 주소에서 위로 올라가며 제일 가까운 `404.html` 을 찾는다.
// 그래서 `/ko/404.html` 이 있으면 `/ko/…` 아래의 없는 주소는 한국말 404 가 나온다.
// 맨 위 `/404.html` 은 영어다.
//
// 이 쪽은 **검색에 안 걸리게** 한다 (`noindex`). 짜임은 `TextLayout` 을 안 쓴다 —
// 덩어리가 없고 단추 하나만 있으면 되기 때문이다.

import type { Lang } from '../i18n';

export type NotFound = {
  h1: string;
  lede: string;
  metaTitle: string;
};

export const NOTFOUND: Record<Lang, NotFound> = {
  en: {
    h1: 'Nothing at this address',
    lede: 'The link may be old, or there may be a typo in it. Every game is one tap away.',
    metaTitle: 'Page not found | Hanveon',
  },
  ko: {
    h1: '이 주소에는 아무것도 없어요',
    lede: '오래된 링크이거나, 주소에 오타가 있는 것 같아요. 게임은 한 번만 누르면 됩니다.',
    metaTitle: '없는 쪽 | Hanveon',
  },
  ja: {
    h1: 'このアドレスには何もありません',
    lede: '古いリンクか、アドレスの打ち間違いのようです。ゲームはワンタップで開きます。',
    metaTitle: 'ページが見つかりません | Hanveon',
  },
  es: {
    h1: 'Aquí no hay nada',
    lede: 'El enlace puede ser viejo, o puede haber una errata en la dirección. Los juegos están a un toque.',
    metaTitle: 'Página no encontrada | Hanveon',
  },
  fr: {
    h1: 'Il n’y a rien à cette adresse',
    lede: 'Le lien est peut-être ancien, ou l’adresse contient une faute de frappe. Les jeux sont à un doigt.',
    metaTitle: 'Page introuvable | Hanveon',
  },
  zh: {
    h1: '这个地址上什么都没有',
    lede: '可能是旧链接，也可能是地址打错了。游戏点一下就能打开。',
    metaTitle: '页面不存在 | Hanveon',
  },
};
