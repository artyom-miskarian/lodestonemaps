import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { contact, site } from '../site-data';

const ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

type State = 'idle' | 'sending' | 'sent' | 'error';

const MAP_VALUES: readonly string[] = contact.mapOptions.map((o) => o.value);

export function Contact() {
  const [state, setState] = useState<State>('idle');
  const [error, setError] = useState('');
  const [map, setMap] = useState('');

  // A product page links here as /?map=<value>#contact, so the right map is already chosen.
  useEffect(() => {
    const wanted = new URLSearchParams(window.location.search).get('map') ?? '';
    if (MAP_VALUES.includes(wanted)) setMap(wanted);
  }, []);

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
          <dl className="contact-lines">
            <div>
              <dt className="label">E-mail</dt>
              <dd>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </dd>
            </div>
            <div>
              <dt className="label">Phone and WhatsApp</dt>
              <dd>
                <a href={site.phoneHref}>{site.phone}</a>
                <span className="muted"> · </span>
                <a href={site.whatsappHref} rel="noopener">
                  WhatsApp
                </a>
              </dd>
            </div>
          </dl>
          <p className="small muted">{contact.reply}</p>
        </div>
        {state === 'sent' ? (
          <div>
            <p className="lead">{contact.sent}</p>
          </div>
        ) : (
          <form className="form" onSubmit={onSubmit} noValidate={false}>
            <input type="hidden" name="access_key" value={ACCESS_KEY ?? ''} />
            <input type="hidden" name="subject" value="Overview request from lodestonemaps.com" />
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
                Work e-mail
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
              <label className="label" htmlFor="company">
                Company
              </label>
              <input
                className="input"
                id="company"
                name="company"
                type="text"
                required
                autoComplete="organization"
              />
            </div>
            <div className="field">
              <label className="label" htmlFor="map">
                Map of interest
              </label>
              <span className="select-wrap">
                <select
                  className="select"
                  id="map"
                  name="map"
                  required
                  value={map}
                  onChange={(event) => setMap(event.target.value)}
                >
                  <option value="" disabled>
                    Choose a map
                  </option>
                  {contact.mapOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </span>
            </div>
            <div className="field">
              <label className="label" htmlFor="message">
                What you sell, and to whom (optional)
              </label>
              <textarea
                className="textarea"
                id="message"
                name="message"
                rows={4}
                placeholder="For example: M&E equipment to contractors and consultants."
              />
            </div>
            <div className="field">
              <label className="label" htmlFor="phone">
                Phone or WhatsApp (optional)
              </label>
              <input
                className="input"
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
              />
            </div>
            <p className="small muted">
              By sending this form you agree to the <a href="/privacy">Privacy Policy</a>.
            </p>
            <div>
              <button className="btn btn--primary" type="submit" disabled={state === 'sending'}>
                {state === 'sending' ? 'Sending' : contact.button}
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
                VITE_WEB3FORMS_KEY is not set: copy .env.example to .env and add the key, or this
                form will fail on submit.
              </p>
            ) : null}
          </form>
        )}
      </div>
    </section>
  );
}
