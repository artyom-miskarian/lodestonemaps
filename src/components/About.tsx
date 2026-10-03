import { about } from '../site-data';

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <div className="split">
        <div className="split-head">
          <p className="label">About</p>
          <h2 id="about-heading">{about.heading}</h2>
        </div>
        <div className="prose">
          <p className="lead">{about.text}</p>
        </div>
      </div>
    </section>
  );
}
