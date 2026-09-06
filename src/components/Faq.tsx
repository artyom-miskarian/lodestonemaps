import { faq } from '../site-data';

export function Faq() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-heading">
      <div className="split">
        <div className="split-head">
          <p className="label">FAQ</p>
          <h2 id="faq-heading">{faq.heading}</h2>
        </div>

        <div className="faq-list">
          {faq.items.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary className="faq-q">
                <span>{item.q}</span>
                <span className="faq-sign" aria-hidden="true" />
              </summary>
              <p className="muted faq-a">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
