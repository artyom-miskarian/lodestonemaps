import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './styles/fonts.css';
import './styles/tokens.css';
import './styles/base.css';
import './styles/app.css';
import { App } from './App';
import { pageFromPath } from './site-data';
import type { RenderId } from './site-data';

const root = document.getElementById('root')!;
// prerender writes data-page on every built page; in `npm run dev` the path decides.
const page = (root.dataset.page as RenderId | undefined) ?? pageFromPath(window.location.pathname);
const tree = (
  <StrictMode>
    <App page={page} />
  </StrictMode>
);

if (root.hasChildNodes()) {
  hydrateRoot(root, tree);
} else {
  createRoot(root).render(tree);
}
