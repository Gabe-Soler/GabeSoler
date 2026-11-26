// Builds the site, then prerenders each route into real HTML so the content is
// in the page itself, not only added by JavaScript. Crawlers, AI tools and link
// previews that do not run JavaScript then see the full text.
//
// 1. Client build into dist/ (also writes the empty 404.html SPA fallback).
// 2. Server build of src/entry-server.jsx into a temporary folder.
// 3. Render each route and write dist/index.html, dist/design.html, dist/photography.html.
//    GitHub Pages serves /design from design.html.
import { readFileSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'vite';

const ROUTES = { '/': 'index.html', '/design': 'design.html', '/photography': 'photography.html' };
const root = resolve(import.meta.dirname, '..');
const dist = resolve(root, 'dist');
const ssrOut = resolve(root, 'dist-ssr');

// One timestamp for both builds, so the footer date matches when React hydrates.
process.env.BUILD_DATE = new Date().toISOString();

await build({ root, logLevel: 'warn' });
await build({ root, logLevel: 'warn', build: { ssr: 'src/entry-server.jsx', outDir: ssrOut } });

const { render, TITLES } = await import(pathToFileURL(resolve(ssrOut, 'entry-server.js')).href);
const template = readFileSync(resolve(dist, 'index.html'), 'utf8');

const escape = (text) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;');

for (const [route, file] of Object.entries(ROUTES)) {
  const html = template
    .replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`)
    .replace(/<title>.*?<\/title>/, `<title>${escape(TITLES[route])}</title>`);
  writeFileSync(resolve(dist, file), html);
  console.log(`prerendered ${route} -> dist/${file}`);
}

rmSync(ssrOut, { recursive: true, force: true });
