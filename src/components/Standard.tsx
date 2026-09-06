import { standard } from '../site-data';

export function Standard() {
  return (
    <section className="section" id="standard" aria-labelledby="standard-heading">
      <div className="split">
        <div className="split-head">
          <p className="label">Standard</p>
          <h2 id="standard-heading">{standard.heading}</h2>
        </div>

        <ul className="rule-list">
          {standard.rules.map((rule) => (
            <li className="rule-item" key={rule}>
              {rule}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
