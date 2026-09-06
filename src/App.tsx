import { Hero } from './components/Hero';
import { Position } from './components/Position';
import { RowAnatomy } from './components/RowAnatomy';
import { Sources } from './components/Sources';
import { Standard } from './components/Standard';
import { Maps } from './components/Maps';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { anchorAliases } from './site-data';

function AnchorAlias({ alias }: { alias: string }) {
  return <span className="anchor-alias" id={alias} aria-hidden="true" />;
}

export function App() {
  const aliasFor = (target: string) =>
    anchorAliases
      .filter((a) => a.target === target)
      .map((a) => <AnchorAlias key={a.alias} alias={a.alias} />);

  return (
    <>
      <a className="skip-link" href="#position">
        Skip to content
      </a>

      <Hero />

      <main className="frame">
        <Position />
        <RowAnatomy />
        {aliasFor('sources')}
        <Sources />
        <Standard />
        {aliasFor('maps')}
        <Maps />
        <Faq />
        <Contact />
      </main>

      <div className="frame">
        <Footer />
      </div>
    </>
  );
}
