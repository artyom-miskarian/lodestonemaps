import { renderToString } from 'react-dom/server';
import { App } from './App';
import { jsonLd, pages, site } from './site-data';
import type { PageId } from './site-data';

export { pages };

export function render(page: PageId) {
  return renderToString(<App page={page} />);
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* The page-specific part of <head>: title, description, canonical, social cards, JSON-LD. */
export function head(page: PageId) {
  const p = pages[page];
  const url = `${site.url.replace(/\/$/, '')}${p.path === '/' ? '/' : p.path}`;
  const ld = jsonLd(page)
    .map((block) => `<script type="application/ld+json">\n${JSON.stringify(block)}\n    </script>`)
    .join('\n    ');
  return `<title>${esc(p.title)}</title>
    <meta name="description" content="${esc(p.description)}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Lodestone Maps" />
    <meta property="og:title" content="${esc(p.ogTitle)}" />
    <meta property="og:description" content="${esc(p.description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="https://lodestonemaps.com/og.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Lodestone Maps: lists tell you who exists, maps tell you who buys. Dark title card with a compass rose." />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(p.ogTitle)}" />
    <meta name="twitter:description" content="${esc(p.description)}" />
    <meta name="twitter:image" content="https://lodestonemaps.com/og.png" />
    <meta name="twitter:image:alt" content="Lodestone Maps: lists tell you who exists, maps tell you who buys. Dark title card with a compass rose." />
    ${ld}`;
}
