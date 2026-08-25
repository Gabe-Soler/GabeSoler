import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';

/**
 * GitHub Pages serves static files with no rewrite rules, so a deep link or a
 * refresh on /design would 404. Publishing index.html a second time as 404.html
 * makes Pages hand the app to any unmatched path, and the router takes it from
 * there. (vercel.json / _redirects / .htaccess cover the same need on hosts
 * that do support rewrites.)
 */
function spaFallback() {
  let outDir;
  return {
    name: 'spa-fallback-404',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'));
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), spaFallback()],
});
