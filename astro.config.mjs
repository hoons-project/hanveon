import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://hanveon.com';

export default defineConfig({
  // 절대 주소가 필요한 것들이 여기서 나온다 — canonical, Open Graph, sitemap
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  // 게임도 이제 Astro 페이지라 사이트맵이 알아서 다 찾는다.
  // (단계 3 전에는 게임이 public/ 에 있어서 customPages 로 직접 넣어 줘야 했다.)
  integrations: [sitemap()],
});
