import { useEffect, useState } from 'react';
import { nav } from '../site-data';

const PANEL_ID = 'primary-nav';

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const previous = document.body.style.overflow;

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={open ? 'menu-btn is-open' : 'menu-btn'}
        aria-expanded={open}
        aria-controls={PANEL_ID}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="menu-icon" aria-hidden="true" />
        <span className="visually-hidden">{open ? 'Close menu' : 'Menu'}</span>
      </button>

      <nav
        id={PANEL_ID}
        className={open ? 'topnav is-open' : 'topnav'}
        aria-label="Primary"
      >
        {nav.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
}
