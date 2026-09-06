import { site } from '../site-data';
import { LogoMark } from './LogoMark';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-lines">
        <p className="small muted">{site.legalName}</p>
        <p className="small">
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </div>

      <a className="footer-mark" href="#top" aria-label={`${site.legalName}, back to top`}>
        <LogoMark mono />
      </a>
    </footer>
  );
}
