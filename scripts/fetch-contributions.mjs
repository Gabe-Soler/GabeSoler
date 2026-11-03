// Fetches the public GitHub contribution calendar (the graph on the profile
// page) and writes it to src/data/contributions.json for the Home page.
// Runs before `dev` and `build`. It never fails the build: if GitHub is
// unreachable it keeps the last good file, or writes an empty one so the
// section simply doesn't render.

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { SITE } from '../src/site.config.js';

const OUT = new URL('../src/data/contributions.json', import.meta.url);
const user = new URL(SITE.github).pathname.split('/')[1];

function parse(html) {
  const counts = new Map();
  for (const [, id, text] of html.matchAll(/<tool-tip[^>]*\bfor="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g)) {
    const n = text.match(/^(\d[\d,]*) contributions?/);
    counts.set(id, n ? Number(n[1].replace(/,/g, '')) : 0);
  }

  const days = [];
  for (const [td] of html.matchAll(/<td\b[^>]*\bContributionCalendar-day\b[^>]*>/g)) {
    const date = td.match(/data-date="([\d-]+)"/)?.[1];
    const level = Number(td.match(/data-level="(\d)"/)?.[1] ?? 0);
    const id = td.match(/\bid="([^"]+)"/)?.[1];
    if (date) days.push({ date, count: counts.get(id) ?? 0, level });
  }
  return days.sort((a, b) => a.date.localeCompare(b.date));
}

try {
  const res = await fetch(`https://github.com/users/${user}/contributions`, {
    headers: { 'User-Agent': 'gabesoler.com build' },
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const days = parse(await res.text());
  if (days.length < 300) throw new Error(`expected a year of days, got ${days.length}`);
  writeFileSync(OUT, JSON.stringify({ user, fetchedAt: new Date().toISOString(), days }) + '\n');
  console.log(`contributions: ${days.length} days for ${user}`);
} catch (error) {
  const kept = existsSync(OUT) && JSON.parse(readFileSync(OUT, 'utf8')).days?.length;
  if (!kept) writeFileSync(OUT, JSON.stringify({ user, fetchedAt: null, days: [] }) + '\n');
  console.warn(`contributions: fetch failed (${error.message}); ${kept ? 'keeping last data' : 'section hidden'}`);
}
