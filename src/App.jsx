import { useEffect, useState } from 'react';
import Nav from './components/Nav.jsx';
import Page from './components/Page.jsx';
import Shutter from './components/Shutter.jsx';
import { PANELS, parseHash, themeFor, isPanel } from './sections.js';

const HOLD_MS = 900;

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function scrollToId(id, behavior) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior });
}

export default function App() {
  const initial = parseHash();
  const [activeId, setActiveId] = useState(initial);
  const [appTheme, setAppTheme] = useState(themeFor(initial));
  const [shutterOpen, setShutterOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [formNote, setFormNote] = useState(
    'This opens your e-mail app with the message ready to send.'
  );

  useEffect(() => {
    if (prefersReducedMotion()) {
      setShutterOpen(true);
      return undefined;
    }
    const t = window.setTimeout(() => setShutterOpen(true), HOLD_MS);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    const id = parseHash();
    if (id !== 'top') {
      requestAnimationFrame(() => scrollToId(id, 'auto'));
    }
  }, []);

  useEffect(() => {
    function onPop() {
      const id = parseHash();
      scrollToId(id, 'auto');
    }
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    const nodes = PANELS.map((p) => document.getElementById(p.id)).filter(Boolean);
    if (!nodes.length) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (!visible.length) return;
        const id = visible[0].target.id;
        setActiveId(id);
        setAppTheme(themeFor(id));
      },
      { rootMargin: `-${60}px 0px -45% 0px`, threshold: [0.15, 0.35, 0.55] }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const detect = document.getElementById('detect');
    if (!detect) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          detect.classList.add('go');
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(detect);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    function onScroll() {
      setShowTop(window.scrollY > window.innerHeight * 0.4);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function onClick(e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    if (!id || !isPanel(id)) return;
    e.preventDefault();
    history.pushState({ id }, '', '#' + id);
    scrollToId(id, 'auto');
  }

  function onSubmit(e) {
    const form = e.target.closest('#contact');
    if (!form) return;
    e.preventDefault();
    const d = new FormData(form);
    const body =
      'Name: ' +
      (d.get('name') || '') +
      '\nAffiliation: ' +
      (d.get('affiliation') || '') +
      '\nE-mail: ' +
      (d.get('email') || '') +
      '\n\n' +
      (d.get('message') || '');
    window.location.href =
      'mailto:info@socialeyes.ai' +
      '?subject=' +
      encodeURIComponent(
        'SocialEyes enquiry from ' + (d.get('name') || 'the website')
      ) +
      '&body=' +
      encodeURIComponent(body);
    setFormNote(
      'Opening your e-mail app. If nothing happens, write to info@socialeyes.ai.'
    );
  }

  useEffect(() => {
    const note = document.getElementById('formnote');
    if (note) note.textContent = formNote;
  }, [formNote]);

  function onTop() {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    history.pushState({ id: 'top' }, '', '#top');
  }

  return (
    <div
      className="app"
      data-theme={appTheme}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      <Shutter open={shutterOpen} theme={themeFor(initial)} />
      <Nav current={activeId} />
      <Page />
      <button
        className={'to-top' + (showTop ? ' show' : '')}
        id="toTop"
        aria-label="Back to top"
        title="Back to top"
        onClick={onTop}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 19V5"></path>
          <path d="m5 12 7-7 7 7"></path>
        </svg>
      </button>
    </div>
  );
}
