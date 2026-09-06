import { method } from '../site-data';

export function Method() {
  return (
    <section className="section" id="method" aria-labelledby="method-heading">
      <div className="split">
        <div className="split-head">
          <h2 id="method-heading">{method.heading}</h2>
          <p className="muted">{method.body}</p>
        </div>
        <ol className="method-list">
          {method.steps.map((step, i) => (
            <li className="method-item" key={step}>
              <span className="mono method-num">{String(i + 1).padStart(2, '0')}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
