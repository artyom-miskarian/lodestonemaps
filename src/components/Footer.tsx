import { site } from '../site-data';

export function Footer() {
  return (
    <footer className="footer">
      <p className="label">
        {site.name} · {site.wordmarkSuffix}
      </p>
      <p className="label">{site.domain}</p>
    </footer>
  );
}
