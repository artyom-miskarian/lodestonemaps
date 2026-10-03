import { orderSteps } from '../site-data';

export function OrderSteps() {
  return (
    <section className="section" id="how-an-order-works" aria-labelledby="order-heading">
      <div className="split">
        <div className="split-head">
          <p className="label">How it works</p>
          <h2 id="order-heading">{orderSteps.heading}</h2>
        </div>

        <ol className="method-list method-list--flush">
          {orderSteps.steps.map((step, i) => (
            <li className="method-item" key={step.title}>
              <span className="mono method-num">{String(i + 1).padStart(2, '0')}</span>
              <span>
                <strong className="step-title">{step.title}</strong> <span className="muted">{step.text}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
