import { useCallback, useEffect, useRef, useState } from 'react';
import Nav from './components/Nav.jsx';
import Page from './components/Page.jsx';
import Shutter from './components/Shutter.jsx';
import { neighbor, parseHash, themeFor, isPanel } from './sections.js';

const CLOSE_MS = 900;
const HOLD_MS = 800;
const OPEN_MS = 1000;

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

export default function App() {
  const initial = parseHash();
  const [activeId, setActiveId] = useState(initial);
  const [appTheme, setAppTheme] = useState(themeFor(initial));
  const [lidTheme, setLidTheme] = useState(themeFor(initial));
  const [shutterOpen, setShutterOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [formNote, setFormNote] = useState(
    'This opens your e-mail app with the message ready to send.'
  );

  const activeRef = useRef(initial);
  const busyRef = useRef(false);
  const goToRef = useRef(null);

  const applyPanel = useCallback((id, fromHistory) => {
    setActiveId(id);
    activeRef.current = id;
    setAppTheme(themeFor(id));
    if (!fromHistory) {
      history.pushState({ id }, '', '#' + id);
    }
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollTop = 0;
      if (id === 'solutions') {
        document.getElementById('detect')?.classList.add('go');
      }
    });
  }, []);

  const goTo = useCallback(
    async (id, { fromHistory = false } = {}) => {
      if (!id || !isPanel(id)) return;
      if (id === activeRef.current) return;
      if (busyRef.current) return;

      const nextTheme = themeFor(id);

      if (prefersReducedMotion()) {
        setLidTheme(nextTheme);
        applyPanel(id, fromHistory);
        setShutterOpen(true);
        return;
      }

      busyRef.current = true;
      setBusy(true);
      setLidTheme(nextTheme);
      setShutterOpen(false);
      await wait(CLOSE_MS);
      applyPanel(id, fromHistory);
      await wait(HOLD_MS);
      setShutterOpen(true);
      await wait(OPEN_MS);
      busyRef.current = false;
      setBusy(false);
    },
    [applyPanel]
  );

  goToRef.current = goTo;

  useEffect(() => {
    history.replaceState({ id: initial }, '', '#' + initial);
    if (initial === 'solutions') {
      document.getElementById('detect')?.classList.add('go');
    }
    if (prefersReducedMotion()) {
      setShutterOpen(true);
      return undefined;
    }
    const t = window.setTimeout(() => setShutterOpen(true), HOLD_MS);
    return () => window.clearTimeout(t);
    // first paint only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function onPop(e) {
      const id = (e.state && e.state.id) || parseHash();
      goToRef.current(id, { fromHistory: true });
    }
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    const panel = document.getElementById(activeId);
    if (!panel) return undefined;
    function onScroll() {
      setShowTop(panel.scrollTop > panel.clientHeight * 0.4);
    }
    panel.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => panel.removeEventListener('scroll', onScroll);
  }, [activeId]);

  useEffect(() => {
    let startX = 0;
    let startY = 0;
    function onStart(e) {
      startX = e.changedTouches[0].clientX;
      startY = e.changedTouches[0].clientY;
    }
    function onEnd(e) {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) < 70 || Math.abs(dx) < Math.abs(dy)) return;
      const next = neighbor(activeRef.current, dx < 0 ? 1 : -1);
      if (next) goToRef.current(next.id);
    }
    window.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchend', onEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', onStart);
      window.removeEventListener('touchend', onEnd);
    };
  }, []);

  function onClick(e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    e.preventDefault();
    goTo(id);
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
    const panel = document.getElementById(activeId);
    if (panel) panel.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  }

  return (
    <div
      className={'app' + (busy ? ' is-busy' : '')}
      data-theme={appTheme}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      <Shutter open={shutterOpen} theme={lidTheme} />
      <Nav current={activeId} busy={busy} />
      <Page activeId={activeId} />
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
