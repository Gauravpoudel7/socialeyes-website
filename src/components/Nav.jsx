import { useState } from 'react';
import { NAV_LINKS } from '../sections.js';

export default function Nav({ current, busy }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={'nav' + (busy ? ' is-busy' : '')}>
      <a className="mark" href="#top" aria-current={current === 'top' ? 'page' : undefined}>
        SOCIALEYES<span className="dot">&#9679;</span>
        <span className="ai">AI</span>
      </a>
      <button
        className="burger"
        aria-expanded={open ? 'true' : 'false'}
        aria-controls="navlinks"
        aria-label="Menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div
        className={'navlinks' + (open ? ' open' : '')}
        id="navlinks"
        onClick={() => setOpen(false)}
      >
        {NAV_LINKS.map((l) => {
          const id = l.href.slice(1);
          return (
            <a
              key={l.href}
              href={l.href}
              data-label={l.label}
              className={current === id ? 'on' : undefined}
              aria-current={current === id ? 'page' : undefined}
            >
              {l.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
