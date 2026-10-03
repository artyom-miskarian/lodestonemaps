import { builtToOrder } from '../site-data';

export function BuiltToOrder() {
  return (
    <section className="section" id="built-to-order" aria-labelledby="built-heading">
      <div className="split">
        <div className="split-head">
          <p className="label">Past work</p>
          <h2 id="built-heading">{builtToOrder.heading}</h2>
          <p className="muted">{builtToOrder.intro}</p>
        </div>

        <div>
          {builtToOrder.cases.map((c) => (
            <div className="case" key={c.title}>
              <p className="label">{c.label}</p>
              <h3 className="map-title">{c.title}</h3>
              <dl className="case-rows">
                {c.rows.map((row) => (
                  <div className="case-row" key={row.k}>
                    <dt className="small case-key">{row.k}</dt>
                    <dd className="muted">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
          <div className="case-close">
            <p className="lead">{builtToOrder.close.title}</p>
            <p className="muted">{builtToOrder.close.text}</p>
            <p>
              <a className="btn btn--outline" href={builtToOrder.close.link.href}>
                {builtToOrder.close.link.label}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
