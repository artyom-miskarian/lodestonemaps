import { readFileSync } from 'node:fs';

// Usage: `npm run check` checks every built page in dist/.
//        `npm run check -- https://lodestonemaps.com` checks the same pages on a live site.
const base = process.argv[2];
const PAGES = [
  { id: 'home', file: 'index.html', path: '/' },
  { id: 'bim', file: 'bim-buyers-map.html', path: '/bim-buyers-map' },
  { id: 'cmm', file: 'construction-market-map.html', path: '/construction-market-map' },
  { id: 'privacy', file: 'privacy.html', path: '/privacy' },
  { id: 'terms', file: 'terms.html', path: '/terms' },
];

async function load(page) {
  if (base && base.startsWith('http')) {
    const url = base.replace(/\/$/, '') + page.path;
    return { where: url, raw: await (await fetch(url)).text() };
  }
  const file = `dist/${page.file}`;
  return { where: file, raw: readFileSync(file, 'utf8') };
}

const visible = (raw) =>
  raw
    .slice(raw.indexOf('<body>'))
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/&#x27;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();

let failed = 0;
let total = 0;
const titles = new Set();

for (const page of PAGES) {
  const { where, raw } = await load(page);
  const body = raw.slice(raw.indexOf('<body>'));
  const text = visible(raw);
  const ids = new Set([...body.matchAll(/id="([a-zA-Z0-9-]+)"/g)].map((m) => m[1]));
  const ld = [...raw.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  const title = (raw.match(/<title>([^<]*)<\/title>/) ?? [])[1] ?? '';
  const legal = page.id === 'privacy' || page.id === 'terms';

  const checks = [
    ['title present and unique', title.length > 10 && !titles.has(title)],
    ['canonical present', /<link rel="canonical" href="https:\/\/lodestonemaps\.com[^"]*"/.test(raw)],
    ['no em dash', !raw.includes('—')],
    ['no en dash', !raw.includes('–')],
    ['no exclamation mark', !text.includes('!')],
    ['no "demonstration"', !/demonstration/i.test(text)],
    ['no "Request a sample"', !text.includes('Request a sample')],
    ['no "AEC"', !/\bAEC\b/.test(text)],
    ['no price figure', !/\$\s?\d|\b(USD|SGD)\b/.test(text)],
    ['phone in page', text.includes('+65 8974 6947')],
    ['WhatsApp link in page', body.includes('https://wa.me/6589746947')],
    ['contact email in page', text.includes('info@lodestonemaps.com')],
    ['links to Privacy and Terms', body.includes('href="/privacy"') && body.includes('href="/terms"')],
    ['JSON-LD parses', ld.length > 0 && ld.every((b) => { try { JSON.parse(b); return true; } catch { return false; } })],
    ['content prerendered', text.length > 1500],
  ];
  if (!legal) checks.push(['no first person "we"', !/\bwe\b/i.test(text)]);
  if (page.id === 'home') {
    checks.push(
      ['hero H1 present', text.includes('Lists tell you who exists.')],
      ['no UEN on the home page', !text.includes('UEN')],
      ...['maps', 'row', 'built-to-order', 'how-an-order-works', 'position', 'sources', 'standard', 'about', 'faq', 'contact'].map(
        (a) => [`anchor #${a}`, ids.has(a)],
      ),
      ['legacy #method alias', ids.has('method')],
      ['legacy #coverage alias', ids.has('coverage')],
      ['three map cards', ['BIM Buyers Map', 'Construction Market Map', 'Built Environment Map'].every((t) => text.includes(t))],
      ['links to both product pages', body.includes('href="/bim-buyers-map"') && body.includes('href="/construction-market-map"')],
      ['form: company and map fields', ids.has('company') && ids.has('map')],
      ['FAQPage present', ld.some((b) => b.includes('"FAQPage"'))],
    );
  }
  if (page.id === 'privacy' || page.id === 'terms') {
    checks.push(['company registration in page', text.includes('01102394') && text.includes('999.110.1608692') && text.includes('Republic of Armenia')]);
  }
  if (page.id === 'terms') {
    checks.push(['governing law: Armenia for the general terms', text.includes('laws of the Republic of Armenia')]);
    checks.push(['each order has its own contract', text.includes('own written contract')]);
  }

  titles.add(title);
  console.log(`\n${where}`);
  for (const [name, ok] of checks) {
    total++;
    if (!ok) failed++;
    console.log(`  ${ok ? 'pass' : 'FAIL'}  ${name}`);
  }
}

console.log(`\n${total - failed}/${total} passed`);
process.exit(failed ? 1 : 0);
