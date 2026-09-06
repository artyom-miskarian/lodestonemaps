import { useState } from 'react';
import type { FormEvent } from 'react';
import { contact } from '../site-data';

const ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

type State = 'idle' | 'sending' | 'sent' | 'error';

export function Contact() {
  const [state, setState] = useState<State>('idle');
  const [error, setError] = useState('');
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === 'sending') return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setState('sending');
    setError('');
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      const result: { success?: boolean; message?: string } = await response.json();
      if (response.ok && result.success) {
        form.reset();
        setState('sent');
      } else {
        setState('error');
        setError(result.message ?? 'The request did not send.');
      }
    } catch {
      setState('error');
      setError('The request did not send. Check the connection and try again.');
    }
  }

  return (
    <section className="section" id="contact" aria-labelledby="contact-heading">
      <div className="split">
        <div className="split-head">
          <h2 id="contact-heading">{contact.heading}</h2>
          <p className="muted">{contact.lead}</p>

        </div>
        {state === 'sent' ? (
          <div>
            <p className="lead">Request received.</p>
            <p className="muted" style={{ marginTop: 'var(--space-3)' }}>
              A sample extract will follow by email, with identifiers masked and the
              source URL against each field.
            </p>
          </div>
        ) : (
          <form className="form" onSubmit={onSubmit} noValidate={false}>
            <input type="hidden" name="access_key" value={ACCESS_KEY ?? ''} />
            <input
              type="hidden"
              name="subject"
              value="Sample request from lodestonemaps.com"
            />
            <input type="hidden" name="from_name" value="Lodestone Maps" />
            <input
              type="checkbox"
              name="botcheck"
              className="visually-hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <div className="field">
              <label className="label" htmlFor="email">
                Work email
              </label>
              <input
                className="input"
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="name@company.com"
              />
            </div>
            <div className="field">
              <label className="label" htmlFor="market">
                Market you are working on
              </label>
              <input
                className="input"
                id="market"
                name="market"
                type="text"
                autoComplete="off"
                placeholder="Singapore built-environment"
              />
            </div>
            <div className="field">
              <label className="label" htmlFor="message">
                What you are looking for
              </label>
              <textarea
                className="textarea"
                id="message"
                name="message"
                rows={4}
                placeholder="Segment, company size, the fields that matter."
              />
            </div>
            <div>
              <button className="btn btn--primary" type="submit" disabled={state === 'sending'}>
                {state === 'sending' ? 'Sending' : 'Request a sample'}
              </button>
            </div>
            <p
              className="small form-status"
              role="status"
              aria-live="polite"
              data-tone={state === 'error' ? 'error' : undefined}
            >
              {state === 'error' ? error : ''}
            </p>
            {!ACCESS_KEY && import.meta.env.DEV ? (
              <p className="small" style={{ color: 'var(--band-text)' }}>
                VITE_WEB3FORMS_KEY is not set — copy .env.example to .env and add the
                key, or this form will fail on submit.
              </p>
            ) : null}
          </form>
        )}
      </div>
    </section>
  );
}
