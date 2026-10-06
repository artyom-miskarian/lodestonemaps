import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { render, head, headNotFound, notFound, pages } from './dist-ssr/entry-server.js';

// The client build gives one template (dist/index.html). Every page is that template with its own
// <head> block and its own prerendered body, written to the file named in `pages` (site-data.ts).
const template = readFileSync('dist/index.html', 'utf8');
const rootMarker = '<div id="root"></div>';
const headRe = /<!--head:start-->[\s\S]*?<!--head:end-->/;

if (!template.includes(rootMarker)) throw new Error(`prerender: could not find ${rootMarker}`);
if (!headRe.test(template)) throw new Error('prerender: could not find the head markers');

for (const [id, page] of Object.entries(pages)) {
  const html = template
    .replace(headRe, head(id))
    .replace(rootMarker, `<div id="root" data-page="${id}">${render(id)}</div>`);
  writeFileSync(`dist/${page.file}`, html);
  console.log(`prerendered dist/${page.file} (${(html.length / 1024).toFixed(1)} kB)`);
}

// The 404 page: written next to the pages but left out of the sitemap below.
const missing = template
  .replace(headRe, headNotFound())
  .replace(rootMarker, `<div id="root" data-page="notfound">${render('notfound')}</div>`);
writeFileSync(`dist/${notFound.file}`, missing);
console.log(`prerendered dist/${notFound.file} (${(missing.length / 1024).toFixed(1)} kB)`);
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
const urls = Object.values(pages)
  .map(
    (page) => `  <url>
    <loc>https://lodestonemaps.com${page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page.path === '/' ? '1.0' : '0.8'}</priority>
  </url>`,
  )
  .join('\n');

writeFileSync(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
);
console.log(`sitemap: ${Object.keys(pages).length} pages, lastmod ${lastmod}`);
