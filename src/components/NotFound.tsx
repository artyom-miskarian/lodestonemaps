import { notFound } from '../site-data';
import { PageTop } from './PageTop';

export function NotFound() {
  return (
    <>
      <PageTop title={notFound.heading} lead={notFound.lead} />
      <main className="frame" id="content">
        <section className="section">
          <p className="lead">
            {notFound.links.map((link, i) => (
              <span key={link.href}>
                {i > 0 ? <span className="muted"> · </span> : null}
                <a href={link.href}>{link.label}</a>
              </span>
            ))}
          </p>
        </section>
      </main>
    </>
  );
}
