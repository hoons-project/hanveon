// 대표 그림 만드는 스크립트가 읽어갈 자료만 한 곳에 모아 둔다.
// scripts/make-og.mjs 가 esbuild 로 이 파일을 묶어서 읽는다.

export { GAMES, fullName, nameSep } from '../src/data/games';
export { LANGS } from '../src/i18n';
export { UI } from '../src/i18n/ui';
