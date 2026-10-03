import { products } from '../site-data';
import { PageTop } from './PageTop';

export function ProductPage({ id }: { id: 'bim' | 'cmm' }) {
  const product = products[id];
  return (
    <>
      <PageTop label={product.label} title={product.title} lead={product.lead} />
      <main className="frame" id="content">
        {product.blocks.map((block, i) => (
          <section className="section" key={block.heading} aria-labelledby={`block-${i}`}>
            <div className="split">
              <div className="split-head">
                <h2 id={`block-${i}`}>{block.heading}</h2>
              </div>
              <div className="prose">
                {(block.paragraphs ?? []).map((p) => (
                  <p key={p} className="muted">
                    {p}
                  </p>
                ))}
                {block.list ? (
                  <ul className="rule-list">
                    {block.list.map((item) => (
                      <li className="rule-item" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {(block.after ?? []).map((p) => (
                  <p key={p} className="muted">
                    {p}
                  </p>
                ))}
                {block.source ? (
                  <p className="small">
                    <a className="text-link" href={block.source.href} rel="noopener">
                      {block.source.label}
                    </a>
                  </p>
                ) : null}
              </div>
            </div>
          </section>
        ))}
        <section className="section">
          <div className="actions">
            <a className="btn btn--primary" href={product.cta.href}>
              {product.cta.label}
            </a>
            <a className="btn btn--outline" href="/#maps">
              All maps
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
