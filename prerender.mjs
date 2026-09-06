import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { render } from './dist-ssr/entry-server.js';

const file = 'dist/index.html';
const marker = '<div id="root"></div>';
const html = readFileSync(file, 'utf8');

if (!html.includes(marker)) {
  throw new Error(`prerender: could not find ${marker} in ${file}`);
}

writeFileSync(file, html.replace(marker, `<div id="root">${render()}</div>`));
rmSync('dist-ssr', { recursive: true, force: true });

const bytes = readFileSync(file, 'utf8').length;
console.log(`prerendered ${file} (${(bytes / 1024).toFixed(1)} kB)`);
