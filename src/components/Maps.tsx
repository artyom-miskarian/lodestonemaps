import { maps } from '../site-data';

export function Maps() {
  return (
    <section className="section" id="maps" aria-labelledby="maps-heading">
      <div className="split">
        <div className="split-head">
          <p className="label">Singapore</p>
          <h2 id="maps-heading">{maps.heading}</h2>
          <p className="muted">{maps.intro}</p>
        </div>

        <div>
          {maps.cards.map((card) => (
            <div className="map-entry" key={card.title}>
              <p className="label">{card.label}</p>
              <h3 className="map-title">{card.title}</h3>
              {card.forWho ? <p className="map-for">{card.forWho}</p> : null}
              <p className="muted">{card.body}</p>
              {card.link ? (
                <p>
                  <a className="text-link" href={card.link.href}>
                    {card.link.label}
                  </a>
                </p>
              ) : null}
            </div>
          ))}
          <p className="muted map-other">{maps.other}</p>
        </div>
      </div>
    </section>
  );
}
