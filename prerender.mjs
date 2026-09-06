import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { render } from './dist-ssr/entry-server.js';

const file = 'dist/index.html';
const marker = '<div id="root"></div>';
const html = readFileSync(file, 'utf8');

if (!html.includes(marker)) {
  throw new Error(`prerender: could not find ${marker} in ${file}`);
}

writeFileSync(file, html.replace(marker, `<div id="root">${render()}</div>`));
rmSync('dist-ssr', { recursive: true, force: true });

function lastModified() {
  try {
    const date = execSync('git log -1 --format=%cs', {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(date)) return date;
  } catch {
    // No git in the build image, or a bare export. Fall through to build date.
  }
  return new Date().toISOString().slice(0, 10);
}

const lastmod = lastModified();

writeFileSync(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://lodestonemaps.com/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
);

const bytes = readFileSync(file, 'utf8').length;
console.log(`prerendered ${file} (${(bytes / 1024).toFixed(1)} kB), sitemap lastmod ${lastmod}`);
