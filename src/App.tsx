import { Hero } from './components/Hero';
import { Position } from './components/Position';
import { RowAnatomy } from './components/RowAnatomy';
import { Sources } from './components/Sources';
import { Standard } from './components/Standard';
import { Maps } from './components/Maps';
import { BuiltToOrder } from './components/BuiltToOrder';
import { OrderSteps } from './components/OrderSteps';
import { About } from './components/About';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProductPage } from './components/ProductPage';
import { LegalPage } from './components/LegalPage';
import { anchorAliases } from './site-data';
import type { PageId } from './site-data';

function AnchorAlias({ alias }: { alias: string }) {
  return <span className="anchor-alias" id={alias} aria-hidden="true" />;
}

function Home() {
  const aliasFor = (target: string) =>
    anchorAliases
      .filter((a) => a.target === target)
      .map((a) => <AnchorAlias key={a.alias} alias={a.alias} />);

  return (
    <>
      <Hero />

      <main className="frame">
        {aliasFor('maps')}
        <Maps />
        <RowAnatomy />
        <BuiltToOrder />
        <OrderSteps />
        <Position />
        {aliasFor('sources')}
        <Sources />
        <Standard />
        <About />
        <Faq />
        <Contact />
      </main>
    </>
  );
}

export function App({ page }: { page: PageId }) {
  const home = page === 'home';
  return (
    <>
      <a className="skip-link" href={home ? '#maps' : '#content'}>
        Skip to content
      </a>

      {home ? <Home /> : null}
      {page === 'bim' || page === 'cmm' ? <ProductPage id={page} /> : null}
      {page === 'privacy' || page === 'terms' ? <LegalPage id={page} /> : null}

      <div className="frame">
        <Footer home={home} />
      </div>
    </>
  );
}
