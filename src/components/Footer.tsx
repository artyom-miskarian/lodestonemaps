import { site } from '../site-data';
import { LogoMark } from './LogoMark';

export function Footer() {
  const parts = [site.legalName, site.jurisdiction, site.email, site.domain].filter(Boolean);

  return (
    <footer className="footer">
      <p className="small muted footer-line">
        {parts.map((part, i) => (
          <span key={part}>
            {i > 0 ? <span className="footer-sep" aria-hidden="true"> · </span> : null}
            {part === site.email ? <a href={`mailto:${site.email}`}>{site.email}</a> : part}
          </span>
        ))}
      </p>
      <a className="footer-mark" href="#top" aria-label={`${site.legalName}, back to top`}>
        <LogoMark mono />
      </a>
    </footer>
  );
}
