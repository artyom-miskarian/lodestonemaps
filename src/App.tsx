import { Hero } from './components/Hero';
import { RowAnatomy } from './components/RowAnatomy';
import { Method } from './components/Method';
import { Coverage } from './components/Coverage';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <a className="visually-hidden" href="#rows">
        Skip to content
      </a>
      <Hero />
      <main className="frame">
        <RowAnatomy />
        <Method />
        <Coverage />
        <Contact />
      </main>
      <div className="frame">
        <Footer />
      </div>
    </>
  );
}
