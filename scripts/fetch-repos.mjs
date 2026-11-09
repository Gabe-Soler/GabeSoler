// Fetches the most recently pushed public repos, plus any EXTRA_REPOS from
// other accounts, and writes them to src/data/repos.json for the Home page's
// GitHub section. Extra repos always make the list; your own fill the rest.
// Runs before `dev` and `build`. It never fails the build: if GitHub is
// unreachable it keeps the last good file, or writes an empty one so the
// list simply doesn't render. Uses GITHUB_TOKEN when present (CI) to avoid
// the shared unauthenticated rate limit.

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { EXTRA_REPOS, SITE } from '../src/site.config.js';

const OUT = new URL('../src/data/repos.json', import.meta.url);
const user = new URL(SITE.github).pathname.split('/')[1];
const LIMIT = 4;

async function github(path) {
  const res = await fetch(`https://api.github.com/${path}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'portfolio-build',
      ...(process.env.GITHUB_TOKEN && { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }),
    },
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${path}`);
  return res.json();
}

// Repos from other accounts are named with their owner ("org/repo").
const toEntry = (r) => ({
  name: r.owner.login.toLowerCase() === user.toLowerCase() ? r.name : r.full_name,
  url: r.html_url,
  description: r.description,
  language: r.language,
  stars: r.stargazers_count,
  pushedAt: r.pushed_at,
});

try {
  const extras = await Promise.all(EXTRA_REPOS.map((name) => github(`repos/${name}`)));
  const own = (await github(`users/${user}/repos?sort=pushed&per_page=30&type=owner`))
    // Skip forks, archived repos, the profile README repo, and anything without a description.
    .filter((r) => !r.fork && !r.archived && r.name.toLowerCase() !== user.toLowerCase() && r.description);

  const repos = [...extras, ...own.slice(0, Math.max(0, LIMIT - extras.length))]
    .map(toEntry)
    .sort((a, b) => b.pushedAt.localeCompare(a.pushedAt));

  writeFileSync(OUT, JSON.stringify({ user, fetchedAt: new Date().toISOString(), repos }, null, 2) + '\n');
  console.log(`repos: ${repos.length} recent repos for ${user}`);
} catch (error) {
  const kept = existsSync(OUT) && JSON.parse(readFileSync(OUT, 'utf8')).repos?.length;
  if (!kept) writeFileSync(OUT, JSON.stringify({ user, fetchedAt: null, repos: [] }) + '\n');
  console.warn(`repos: fetch failed (${error.message}); ${kept ? 'keeping last data' : 'list hidden'}`);
}
