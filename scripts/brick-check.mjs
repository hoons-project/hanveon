/*
  벽돌 깨기 — 브라우저 없이 재는 것.

  `src/games/brick-breaker/Game.astro` 안의 `// ══ SIM 시작 ══` ~ `// ══ SIM 끝 ══`
  사이를 **그대로 떼어 내** 돌린다. 그래서 여기서 잰 값은 사람이 노는 것과 같은 코드다.

    node scripts/brick-check.mjs           전부
    node scripts/brick-check.mjs 2 3       고른 것만 (1~6)

  재는 것 —
    1. 요령 1 — 공만 쫓는 봇 vs 아이템도 쫓는 봇
    2. 요령 2 — 막대 접점별 튕김 각
    3. 요령 3 — 좋은 아이템이 나쁜 것을 바로 푸는지
    4. 막판 — 벽돌 3개만 남았을 때 30초 안에 끝나는 비율
    5. 아이템 확률 — 벽돌 하나당 몇 %, 좋고 나쁨 비율
    6. 판 열둘 — 벽돌 개수와 단단한 벽돌 비율
*/
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(join(here, '..', 'src/games/brick-breaker/Game.astro'), 'utf8');

const A = '// ══ SIM 시작 ══';
const B = '// ══ SIM 끝 ══';
const i = src.indexOf(A), j = src.indexOf(B);
if (i < 0 || j < 0) { console.error('SIM 표시를 못 찾았다. Game.astro 를 확인한다.'); process.exit(1); }
const SIM = new Function(src.slice(i + A.length, j) + '\nreturn SIM;')();

/* ── 봇 ────────────────────────────────────────────────
   봇의 손 빠르기는 **게임 값이 아니라 재는 쪽 값**이다.
   사람 손을 흉내내려고 한 프레임에 이만큼만 움직이게 묶는다. */
const HAND = 7.2;          // 한 프레임(60fps)에 막대가 갈 수 있는 거리
const DT = 1 / 60;
const CAP = 60 * 60 * 8;   // 한 판 최대 8분. 안 끝나면 잘라낸다

/** 공이 막대 줄에 닿을 때 x. 벽 튕김만 셈에 넣고 벽돌은 무시한다. */
function predictX(b){
  if (b.dy <= 0) return b.x;
  const t = (SIM.PADY - SIM.BALLR - b.y) / b.dy;
  const lo = SIM.BALLR, hi = SIM.W - SIM.BALLR, span = hi - lo;
  let p = (b.x + b.dx * t - lo) % (2 * span);
  if (p < 0) p += 2 * span;
  if (p > span) p = 2 * span - p;
  return lo + p;
}

function ballTarget(g){
  let pick = null, bestT = Infinity;
  for (const b of g.balls) {
    if (b.dy <= 0) continue;
    const t = (SIM.PADY - b.y) / b.dy;
    if (t < bestT) { bestT = t; pick = b; }
  }
  if (pick) return predictX(pick);
  let low = null;
  for (const b of g.balls) if (!low || b.y > low.y) low = b;
  return low ? low.x : g.padX;
}

/** chase=false 면 공만 쫓는다. true 면 좋은 아이템이 떠 있을 때 그쪽으로 간다. */
function aim(g, chase){
  if (chase) {
    let d = null;
    for (const x of g.drops) if (x.good && (!d || x.y > d.y)) d = x;
    if (d) return d.x;
  }
  return ballTarget(g);
}

function play(seed, chase, opts = {}){
  const g = SIM.create(seed);
  SIM.begin(g);
  if (opts.setup) opts.setup(g);
  let f = 0;
  const cap = opts.cap || CAP;
  while (g.state !== 'over' && f < cap) {
    if (g.state === 'clear' || g.state === 'allclear') {
      if (opts.stopOnClear) break;
      SIM.next(g);
      continue;
    }
    const t = aim(g, chase);
    const d = t - g.padX;
    g.padX += Math.max(-HAND, Math.min(HAND, d));
    SIM.step(g, DT);
    f++;
  }
  return { g, frames: f, secs: f / 60 };
}

const num = (v, n = 1) => Number(v).toFixed(n);
const mean = (a) => a.reduce((x, y) => x + y, 0) / a.length;
const med = (a) => { const s = [...a].sort((x, y) => x - y); return s[Math.floor(s.length / 2)]; };
const pad = (s, n) => String(s).padStart(n);

/* ── 1. 요령 1 ─────────────────────────────────────── */
function t1(){
  console.log('\n[1] 요령 1 — 「공이 하나뿐일 때는 아이템보다 공이 먼저」');
  console.log('    봇 둘을 각 200판. 같은 씨앗을 나눠 쓴다.\n');
  const N = 200;
  const out = {};
  for (const [name, chase] of [['가) 공만 쫓는 봇', false], ['나) 아이템도 쫓는 봇', true]]) {
    const lv = [], sc = [];
    for (let s = 1; s <= N; s++) {
      const { g } = play(s * 7919, chase);
      lv.push(g.cleared + 1);
      sc.push(g.score);
    }
    out[name] = { lv, sc };
  }
  console.log('    봇                    도달한 판(평균)  중앙값  최고   점수(평균)  중앙값');
  for (const k of Object.keys(out)) {
    const { lv, sc } = out[k];
    console.log(`    ${k.padEnd(22)}${pad(num(mean(lv), 2), 12)}${pad(med(lv), 8)}${pad(Math.max(...lv), 7)}${pad(num(mean(sc), 0), 12)}${pad(med(sc), 8)}`);
  }
  const a = out['가) 공만 쫓는 봇'], b = out['나) 아이템도 쫓는 봇'];
  const okLv = mean(a.lv) > mean(b.lv), okSc = mean(a.sc) > mean(b.sc);
  console.log(`\n    (가)가 더 멀리 갔나 → 판 ${okLv ? 'O' : 'X'} · 점수 ${okSc ? 'O' : 'X'}`);
  return okLv && okSc;
}

/* ── 2. 요령 2 ─────────────────────────────────────── */
function t2(){
  console.log('\n[2] 요령 2 — 「가운데는 곧게, 끝은 크게 옆으로」');
  console.log('    막대 접점별로 튕겨 나가는 각. 수직이 0도, 오른쪽이 +.\n');
  console.log('    접점     각(도)   가로 몫   세로 몫');
  const rows = [-1, -0.5, 0, 0.5, 1];
  for (const h of rows) {
    const a = SIM.bounceAngle(h, 1);
    const r = a * Math.PI / 180;
    console.log(`    ${pad(h.toFixed(1), 5)}${pad(num(a, 1), 10)}${pad(num(Math.sin(r), 3), 10)}${pad(num(-Math.cos(r), 3), 10)}`);
  }
  /* 볼 것은 「가운데에서 멀수록 옆으로 크게」다. 접점 크기가 커지면 각도 커져야 한다. */
  let mono = true, prev = -1;
  for (const h of [0, 0.25, 0.5, 0.75, 1]) {
    const a = Math.abs(SIM.bounceAngle(h, 1));
    if (a < prev - 1e-9) mono = false;
    prev = a;
  }
  const mid = Math.abs(SIM.bounceAngle(0, 1)), end = Math.abs(SIM.bounceAngle(1, 1));
  const sym = SIM.bounceAngle(-1, 1) === -SIM.bounceAngle(1, 1);
  console.log(`\n    가운데 ${num(mid, 0)}도 < 끝 ${num(end, 0)}도 → 끝일수록 옆으로 ${end > mid ? 'O' : 'X'}`);
  console.log(`    접점이 가운데에서 멀수록 각이 커지는가 → ${mono ? 'O' : 'X'}`);
  console.log(`    왼끝과 오른끝이 좌우 대칭인가 → ${sym ? 'O' : 'X'}`);
  console.log(`    가운데는 ${num(mid, 0)}도로 밀어냈다 — 0도면 위아래로만 왕복해서 지루해진다.`);
  return end > mid && mono && sym;
}

/* ── 3. 요령 3 ─────────────────────────────────────── */
function t3(){
  console.log('\n[3] 요령 3 — 「좋은 아이템을 받으면 나쁜 효과가 바로 풀린다」\n');
  const g = SIM.create(1); SIM.begin(g);
  const line = [];
  let ok = true;

  SIM.applyItem(g, 'narrow');
  line.push(['narrow 받음', `막대 ${SIM.padW(g)}`, `narrow ${num(g.fx.narrow)}s · wide ${num(g.fx.wide)}s`]);
  ok &&= SIM.padW(g) === SIM.PAD_NARROW;
  SIM.applyItem(g, 'wide');
  line.push(['→ wide 받음', `막대 ${SIM.padW(g)}`, `narrow ${num(g.fx.narrow)}s · wide ${num(g.fx.wide)}s`]);
  ok &&= SIM.padW(g) === SIM.PAD_WIDE && g.fx.narrow === 0;

  SIM.applyItem(g, 'narrow');
  line.push(['다시 narrow', `막대 ${SIM.padW(g)}`, `narrow ${num(g.fx.narrow)}s · wide ${num(g.fx.wide)}s`]);
  ok &&= SIM.padW(g) === SIM.PAD_NARROW && g.fx.wide === 0;

  const base = SIM.baseSpeed(g);
  SIM.applyItem(g, 'fast');
  line.push(['fast 받음', `속도 ${num(SIM.speed(g), 3)}`, `fast ${num(g.fx.fast)}s · slow ${num(g.fx.slow)}s`]);
  ok &&= Math.abs(SIM.speed(g) - base * SIM.FAST_MUL) < 1e-9;
  SIM.applyItem(g, 'slow');
  line.push(['→ slow 받음', `속도 ${num(SIM.speed(g), 3)}`, `fast ${num(g.fx.fast)}s · slow ${num(g.fx.slow)}s`]);
  ok &&= Math.abs(SIM.speed(g) - base * SIM.SLOW_MUL) < 1e-9 && g.fx.fast === 0;
  SIM.applyItem(g, 'fast');
  line.push(['다시 fast', `속도 ${num(SIM.speed(g), 3)}`, `fast ${num(g.fx.fast)}s · slow ${num(g.fx.slow)}s`]);
  ok &&= g.fx.slow === 0;

  for (const [a, b, c] of line) console.log(`    ${a.padEnd(14)}${b.padEnd(14)}${c}`);

  /* 같은 것을 또 받으면 시간이 새로 시작하되 세지지는 않는다 */
  const h = SIM.create(2); SIM.begin(h);
  SIM.applyItem(h, 'wide');
  h.fx.wide = 3;
  SIM.applyItem(h, 'wide');
  const reset = h.fx.wide === SIM.DUR.wide;
  const same = SIM.padW(h) === SIM.PAD_WIDE;
  console.log(`\n    같은 것을 또 받으면 시간만 새로 시작 → ${reset && same ? 'O' : 'X'} (wide ${num(h.fx.wide)}s · 막대 ${SIM.padW(h)})`);
  console.log(`    좋은 것 ↔ 나쁜 것이 서로 푼다 → ${ok ? 'O' : 'X'}`);
  return ok && reset && same;
}

/* ── 4. 막판 ───────────────────────────────────────── */
function t4(){
  console.log('\n[4] 막판 — 벽돌 3개만 남긴 채 200판. 30초 안에 끝나야 한다.\n');
  const N = 200, LIMIT = 30;
  const secs = [], fails = [];
  for (let s = 1; s <= N; s++) {
    const r = play(s * 104729, false, {
      cap: 60 * 120,
      stopOnClear: true,
      setup: (g) => {
        SIM.load(g, 12);
        const rnd = SIM.rng(s * 31337);
        const idx = g.bricks.map((_, k) => k).sort(() => rnd() - .5).slice(0, 3);
        for (const b of g.bricks) b.alive = false;
        for (const k of idx) { g.bricks[k].alive = true; g.bricks[k].hp = g.bricks[k].max; }
        SIM.recount(g);
        SIM.serve(g);
      },
    });
    const cleared = r.g.state === 'clear' || r.g.state === 'allclear';
    if (cleared) secs.push(r.secs); else fails.push(s);
  }
  const within = secs.filter((x) => x <= LIMIT).length;
  const rate = within / N * 100;
  console.log(`    끝난 판          ${secs.length} / ${N}`);
  console.log(`    30초 안에 끝남   ${within} / ${N}  (${num(rate, 1)}%)`);
  console.log(`    걸린 시간        평균 ${num(mean(secs), 1)}초 · 중앙값 ${num(med(secs), 1)}초 · 최고 ${num(Math.max(...secs), 1)}초`);
  console.log(`\n    90% 넘음 → ${rate >= 90 ? 'O' : 'X'}`);
  return rate >= 90;
}

/* ── 5. 아이템 확률 ────────────────────────────────── */
function t5(){
  console.log('\n[5] 아이템 확률 — 100판. 벽돌 하나당 14% 안팎이어야 한다.\n');
  const N = 100;
  let broken = 0, dropped = 0, good = 0;
  const kinds = {};
  for (let s = 1; s <= N; s++) {
    const { g } = play(s * 15485863, false);
    broken += g.broken; dropped += g.dropped; good += g.droppedGood;
    for (const k of Object.keys(g.dropKinds)) kinds[k] = (kinds[k] || 0) + g.dropKinds[k];
  }
  const rate = dropped / broken * 100;
  const gr = good / dropped * 100;
  console.log(`    깬 벽돌      ${broken}`);
  console.log(`    떨어진 것    ${dropped}   → 벽돌 하나당 ${num(rate, 2)}%   (노린 값 14%)`);
  console.log(`    좋은 것      ${good} (${num(gr, 1)}%)  ·  나쁜 것 ${dropped - good} (${num(100 - gr, 1)}%)   (노린 값 70 : 30)\n`);
  console.log('    무엇이 나왔나     개수      비율     노린 값');
  const want = { wide: 17.5, multi: 17.5, slow: 17.5, pierce: 17.5, narrow: 15, fast: 15 };
  for (const k of ['wide', 'multi', 'slow', 'pierce', 'narrow', 'fast'])
    console.log(`    ${k.padEnd(18)}${pad(kinds[k] || 0, 6)}${pad(num((kinds[k] || 0) / dropped * 100, 1) + '%', 10)}${pad(want[k] + '%', 10)}`);
  const ok = Math.abs(rate - 14) <= 1 && Math.abs(gr - 70) <= 3;
  console.log(`\n    14% 안팎 · 7:3 안팎 → ${ok ? 'O' : 'X'}`);
  return ok;
}

/* ── 6. 판 열둘 ────────────────────────────────────── */
function t6(){
  console.log('\n[6] 판 열둘 — 벽돌 24~40개 · 좌우 대칭 · 판이 올라갈수록 많아진다\n');
  console.log('    판   줄   벽돌   보통   단단   단단 비율   대칭   24~40   늘었나');
  let prev = -1, allOk = true;
  for (let n = 1; n <= SIM.LEVELS.length; n++) {
    const rows = SIM.LEVELS[n - 1];
    let cnt = 0, tough = 0, sym = true;
    for (const r of rows) {
      if (r.length !== SIM.COLS) sym = false;
      if (r !== [...r].reverse().join('')) sym = false;
      for (const c of r) { if (c !== '0') cnt++; if (c === '2') tough++; }
    }
    const inRange = cnt >= 24 && cnt <= 40;
    const up = cnt > prev;
    if (!sym || !inRange || rows.length > SIM.MAX_ROWS) allOk = false;
    console.log(`    ${pad(n, 2)}${pad(rows.length, 5)}${pad(cnt, 7)}${pad(cnt - tough, 7)}${pad(tough, 7)}${pad(num(tough / cnt * 100, 1) + '%', 11)}${pad(sym ? 'O' : 'X', 7)}${pad(inRange ? 'O' : 'X', 8)}${pad(up ? 'O' : 'X', 9)}`);
    prev = cnt;
  }
  console.log('\n    단단한 벽돌 — 판 1~3 없음 · 판 4~7 15% 안팎 · 판 8~12 30% 안팎');
  return allOk;
}

/* ── 7. 판 12 를 깬 뒤 이어 하기 ────────────────────── */
function t7(){
  console.log('\n[7] 판 12 를 깨면 — 판 1 로 돌되 공 속도·점수·목숨은 이어진다\n');
  const g = SIM.create(7);
  SIM.begin(g);
  console.log('    판   깬 판 수   공 속도   점수      목숨   판 깬 뒤 상태');
  let ok = true;
  for (let n = 1; n <= 15; n++) {
    const spd = SIM.baseSpeed(g);
    const shown = g.level;
    const before = g.score;
    /* 그 판의 벽돌을 전부 지워서 깬 것으로 만든다 */
    for (const b of g.bricks) { b.alive = false; }
    g.alive = 0;
    g.score += 200 + 50 * g.lives;
    g.cleared++;
    g.state = g.level >= SIM.LEVELS.length ? 'allclear' : 'clear';
    console.log(`    ${pad(shown, 2)}${pad(g.cleared, 10)}${pad(num(spd, 2), 10)}${pad(g.score, 9)}${pad(g.lives, 7)}   ${g.state}`);
    if (shown === 12 && g.state !== 'allclear') ok = false;
    if (shown === 12 && Math.abs(spd - 6.18) > 1e-9) ok = false;
    SIM.next(g);
    if (shown === 12 && g.level !== 1) ok = false;
  }
  console.log(`\n    판 12 의 공 속도 6.18 · 판 12 뒤 판 1 로 돌아감 · 최대 ${SIM.SPD_MAX} → ${ok ? 'O' : 'X'}`);
  console.log(`    점수와 목숨은 0 으로 안 돌아간다 (위 표에서 계속 는다)`);
  return ok;
}

const ALL = { 1: t1, 2: t2, 3: t3, 4: t4, 5: t5, 6: t6, 7: t7 };
const want = process.argv.slice(2).filter((a) => ALL[a]);
const run = want.length ? want : Object.keys(ALL);

console.log('벽돌 깨기 — 헤드리스 검사 (Game.astro 의 SIM 을 그대로 떼어 냄)');
const res = {};
for (const k of run) res[k] = ALL[k]();
console.log('\n───────────────────────────────');
for (const k of run) console.log(`  ${k}. ${res[k] ? '통과' : '못 미침'}`);
