import { sources } from '../site-data';

export function Sources() {
  return (
    <section className="section" id="sources" aria-labelledby="sources-heading">
      <div className="split">
        <div className="split-head">
          <p className="label">Sources</p>
          <h2 id="sources-heading">{sources.heading}</h2>
          <p className="muted">{sources.lead}</p>
        </div>

        <div>
          <ol className="method-list">
            {sources.tiers.map((tier, i) => (
              <li className="method-item" key={tier}>
                <span className="mono method-num">{String(i + 1).padStart(2, '0')}</span>
                <span>{tier}</span>
              </li>
            ))}
          </ol>
          <p className="small muted source-note">{sources.note}</p>
        </div>
      </div>
    </section>
  );
}
