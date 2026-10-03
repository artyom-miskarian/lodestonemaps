import { legal, site } from '../site-data';
import { PageTop } from './PageTop';

export function LegalPage({ id }: { id: 'privacy' | 'terms' }) {
  const doc = legal[id];
  return (
    <>
      <PageTop title={doc.title} lead={`Last updated: ${site.legalUpdated}`} />
      <main className="frame" id="content">
        <section className="section legal">
          <p className="lead legal-intro">{doc.intro}</p>
          {doc.sections.map((section) => (
            <div className="legal-section" key={section.heading}>
              <h2 className="legal-heading">{section.heading}</h2>
              {(section.paragraphs ?? []).map((p) => (
                <p key={p} className="muted">
                  {p}
                </p>
              ))}
              {section.list ? (
                <ul className="legal-list">
                  {section.list.map((item) => (
                    <li key={item} className="muted">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
