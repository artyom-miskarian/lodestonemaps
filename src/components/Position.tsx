import { position } from '../site-data';

export function Position() {
  return (
    <section className="section" id="position" aria-labelledby="position-heading">
      <div className="split">
        <div className="split-head">
          <p className="label">Position</p>
          <h2 id="position-heading">{position.heading}</h2>
        </div>
        <div className="prose">
          {position.paragraphs.map((p, i) => (
            <p key={p} className={i === 0 ? 'lead' : 'muted'}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
