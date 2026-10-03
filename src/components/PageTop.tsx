import { site } from '../site-data';
import { LogoMark } from './LogoMark';
import { Nav } from './Nav';

export function PageTop({ label, title, lead }: { label?: string; title: string; lead?: string }) {
  return (
    <section className="page-top" id="top">
      <div className="frame page-top-inner">
        <div className="hero-top">
          <a className="wordmark" href="/">
            <LogoMark mono />
            <span className="wordmark-text">{site.wordmark}</span>
          </a>
          <Nav />
        </div>
        <div className="page-title">
          {label ? <p className="label">{label}</p> : null}
          <h1 className="display page-heading">{title}</h1>
          {lead ? <p className="lead">{lead}</p> : null}
        </div>
      </div>
    </section>
  );
}
