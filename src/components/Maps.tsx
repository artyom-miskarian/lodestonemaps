import { maps } from '../site-data';

export function Maps() {
  return (
    <section className="section" id="maps" aria-labelledby="maps-heading">
      <div className="split">
        <div className="split-head">
          <p className="label">Maps</p>
          <h2 id="maps-heading">{maps.heading}</h2>
        </div>

        <div>
          <div className="map-entry">
            <p className="label">{maps.active.label}</p>
            <h3 className="map-title">{maps.active.title}</h3>
            <p className="muted">{maps.active.body}</p>
            <p className="small">{maps.active.detail}</p>
          </div>
          <p className="muted map-other">{maps.other}</p>
        </div>
      </div>
    </section>
  );
}
