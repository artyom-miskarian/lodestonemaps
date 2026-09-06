import { readFileSync } from 'node:fs';

const target = process.argv[2] ?? 'dist/index.html';
const raw = target.startsWith('http')
  ? await (await fetch(target)).text()
  : readFileSync(target, 'utf8');

const body = raw.slice(raw.indexOf('<body>'));
const text = body
  .replace(/<script[\s\S]*?<\/script>/g, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&[a-z]+;/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const ids = new Set([...body.matchAll(/id="([a-zA-Z0-9-]+)"/g)].map((m) => m[1]));
const ld = [...raw.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);

const checks = [
  ['hero H1 present', text.includes('Lists tell you who exists.')],
  ['no 19,042', !text.includes('19,042')],
  ['no Malaysia', !text.includes('Malaysia')],
  ['no release 2026.03', !text.includes('2026.03')],
  ['no extract table', !text.includes('Redacted') && !text.includes('partially masked')],
  ['no UEN outside Maps', !text.includes('UEN')],
  ['no em dash', !raw.includes('—')],
  ['no en dash', !raw.includes('–')],
  ['no exclamation mark', !text.includes('!')],
  ['no first person "we"', !/\bwe\b/i.test(text)],
  ...['position', 'row', 'sources', 'standard', 'maps', 'faq', 'contact'].map((a) => [
    `anchor #${a}`, ids.has(a),
  ]),
  ['legacy #method alias', ids.has('method')],
  ['legacy #coverage alias', ids.has('coverage')],
  ['market field is free text', /id="market"[^>]*type="text"|type="text"[^>]*id="market"/.test(body)],
  ['contact email in page', text.includes('info@lodestonemaps.com')],
  ['3 JSON-LD blocks', ld.length === 3],
  ['JSON-LD parses', ld.every((b) => { try { JSON.parse(b); return true; } catch { return false; } })],
  ['FAQPage present', ld.some((b) => b.includes('"FAQPage"'))],
  ['content prerendered', text.length > 3000],
];

let failed = 0;
for (const [name, ok] of checks) {
  if (!ok) failed++;
  console.log(`  ${ok ? 'pass' : 'FAIL'}  ${name}`);
}
console.log(`\n${checks.length - failed}/${checks.length} passed  (${target})`);
process.exit(failed ? 1 : 0);
