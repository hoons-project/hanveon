import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { GAMES } from './src/data/games.ts';

const SITE = 'https://hanveon.com';

export default defineConfig({
  // 절대 주소가 필요한 것들이 여기서 나온다 — canonical, Open Graph, sitemap
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // 게임은 아직 public/ 에 있는 그냥 HTML 이라 Astro 가 모른다.
      // 그래서 games.ts 를 보고 사이트맵에 직접 넣는다.
      // 단계 3에서 게임을 Astro 페이지로 옮기면 이 줄은 지워도 된다.
      customPages: GAMES.map((g) => `${SITE}/play/${g.slug}/`),
    }),
  ],
});
