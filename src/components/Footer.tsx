import { site } from '../site-data';
import { LogoMark } from './LogoMark';

export function Footer() {
  return (
    <footer className="footer">
      <p className="label">
        {site.name} · {site.wordmarkSuffix}
      </p>
      <a className="footer-mark" href="#top" aria-label={`${site.name} ${site.wordmarkSuffix}, back to top`}>
        <LogoMark mono />
      </a>
    </footer>
  );
}
