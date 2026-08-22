// ─────────────────────────────────────────────────────────────
//  게임 부품 명부.
//
//  `src/games/<slug>/Game.astro` 를 만들어 두면 여기 저절로 올라온다.
//  주소를 만드는 쪽(`src/pages/play/[slug].astro`)이 이걸 본다.
//
//  왜 따로 파일인가 — Astro 의 `getStaticPaths()` 는 페이지 앞머리(frontmatter)에
//  적어 둔 값을 못 본다. 그래서 밖에 둔다.
// ─────────────────────────────────────────────────────────────

const mods = import.meta.glob('./*/Game.astro', { eager: true });

export const GAME_COMPONENTS: Record<string, any> = Object.fromEntries(
  Object.entries(mods).map(([path, mod]) => [path.split('/')[1]!, (mod as any).default]),
);

/** 게임 페이지가 실제로 있는 주소 조각들. */
export const GAME_SLUGS: string[] = Object.keys(GAME_COMPONENTS);
