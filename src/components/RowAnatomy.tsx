import { rowAnatomy } from '../site-data';

export function RowAnatomy() {
  return (
    <section className="section" id="rows" aria-labelledby="rows-heading">
      <div className="split">
        <div className="split-head">
          <h2 id="rows-heading">{rowAnatomy.heading}</h2>
          <p className="muted">{rowAnatomy.body}</p>
        </div>
        <div className="anatomy">
          {rowAnatomy.cells.map((cell) => (
            <div className="anatomy-cell" key={cell.label}>
              <p className="label">{cell.label}</p>
              <p className="small">{cell.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
