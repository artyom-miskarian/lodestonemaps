import { coverage } from '../site-data';

export function Coverage() {
  const { extract } = coverage;
  return (
    <section className="section" id="coverage" aria-labelledby="coverage-heading">
      <div className="split">
        <div className="split-head">
          <h2 id="coverage-heading">{coverage.heading}</h2>
          <ul className="markets">
            {coverage.markets.map((m) => (
              <li className="market" key={m.name}>
                <span className="market-name">{m.name}</span>
                <span className={m.inBuild ? 'tag tag--status' : 'tag'}>{m.status}</span>
              </li>
            ))}
          </ul>
          <p className="muted small">{coverage.note}</p>
        </div>
        <div>
          <p className="label">Singapore · AEC — release {coverage.release}</p>
          <ul className="figures" style={{ marginTop: 'var(--space-4)' }}>
            {coverage.figures.map((f) => (
              <li className="figure" key={f.label}>
                <span>{f.label}</span>
                <span className="mono figure-value">{f.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="table-wrap">
        <p className="label">Extract</p>
        <div className="scroll-x" style={{ marginTop: 'var(--space-4)' }}>
          <table className="table">
            <thead>
              <tr>
                {extract.columns.map((c) => (
                  <th className="label" key={c} scope="col">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {extract.rows.map((row) => (
                <tr key={row[0]}>
                  <td>{row[0]}</td>
                  <td className="mono col-id">{row[1]}</td>
                  <td>{row[2]}</td>
                  <td className="mono col-id">{row[3]}</td>
                  <td className="mono col-evidence">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="small muted" style={{ marginTop: 'var(--space-3)' }}>
          {extract.caption}
        </p>
      </div>
    </section>
  );
}
