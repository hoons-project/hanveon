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
    h1: 'Nothing here',
    lede: 'The link may be old, or there may be a typo in the address. Head back to the games and pick one.',
    metaTitle: 'Page not found | Hanveon',
  },
  ko: {
    h1: '이 주소에는 아무것도 없어요',
    lede: '오래된 링크이거나 주소를 잘못 입력한 것 같아요. 게임 목록으로 돌아가서 하나 골라보세요.',
    metaTitle: '페이지를 찾을 수 없음 | Hanveon',
  },
  ja: {
    h1: 'ページが見つかりません',
    lede: '古いリンクか、アドレスの入力間違いかもしれません。ゲーム一覧に戻って、気になるものを選んでみてください。',
    metaTitle: 'ページが見つかりません | Hanveon',
  },
  es: {
    h1: 'Aquí no hay nada',
    lede: 'Puede que el enlace sea antiguo o que haya un error en la dirección. Vuelve a los juegos y elige uno.',
    metaTitle: 'Página no encontrada | Hanveon',
  },
  fr: {
    h1: 'Cette page n’existe pas',
    lede: 'Le lien est peut-être ancien ou l’adresse contient une erreur. Retourne à la liste des jeux et choisis-en un.',
    metaTitle: 'Page introuvable | Hanveon',
  },
  zh: {
    h1: '这个页面不存在',
    lede: '可能是旧链接，也可能是地址输错了。回到游戏列表，挑一个玩吧。',
    metaTitle: '页面不存在 | Hanveon',
  },
};
