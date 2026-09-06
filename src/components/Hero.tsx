import { hero, nav, site } from '../site-data';
import { LogoMark } from './LogoMark';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-wash" aria-hidden="true" />
      <Rings />
      <div className="frame hero-inner">
        <div className="hero-top">
          <a className="wordmark" href="#top">
            <LogoMark />
            <span className="wordmark-text">{site.wordmark}</span>
          </a>
          <nav className="topnav" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="hero-copy">
          <p className="label">{hero.kicker}</p>
          <h1 className="display hero-heading">
            {hero.heading.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="lead">{hero.lead}</p>
          <div className="actions">
            <a className="btn btn--primary" href={hero.primary.href}>
              {hero.primary.label}
            </a>
            <a className="btn btn--outline" href={hero.secondary.href}>
              {hero.secondary.label}
            </a>
          </div>
        </div>
        <hr className="hero-rule" />
      </div>
    </section>
  );
}

function Rings() {
  return (
    <svg className="hero-rings" viewBox="0 0 340 340" aria-hidden="true" focusable="false">
      <circle cx="170" cy="170" r="169" fill="none" stroke="currentColor"
              strokeWidth="1" vectorEffect="non-scaling-stroke" opacity=".26" />
      <circle cx="170" cy="170" r="90" fill="none" stroke="currentColor"
              strokeWidth="1" vectorEffect="non-scaling-stroke" opacity=".40" />
      <rect x="167" y="167" width="6" height="6" fill="currentColor" opacity=".70" />
    </svg>
  );
}
