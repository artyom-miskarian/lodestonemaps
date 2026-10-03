import { site } from '../site-data';
import { LogoMark } from './LogoMark';

export function Footer({ home = false }: { home?: boolean }) {
  return (
    <footer className="footer">
      <div className="footer-lines">
        <p className="small muted">{site.legalName}</p>
        <p className="small">
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <p className="small">
          <a href={site.phoneHref}>{site.phone}</a>
          <span className="muted"> · </span>
          <a href={site.whatsappHref} rel="noopener">
            WhatsApp
          </a>
        </p>
        <p className="small">
          <a href="/privacy">Privacy Policy</a>
          <span className="muted"> · </span>
          <a href="/terms">Terms and Conditions</a>
        </p>
        <p className="small muted">© 2026 {site.legalName}</p>
      </div>

      <a
        className="footer-mark"
        href={home ? '#top' : '/'}
        aria-label={home ? `${site.legalName}, back to top` : `${site.legalName}, home`}
      >
        <LogoMark mono />
      </a>
    </footer>
  );
}
