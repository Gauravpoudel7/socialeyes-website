export const PANELS = [
  { id: 'top', theme: 'warm' },
  { id: 'challenges', theme: 'cool' },
  { id: 'solutions', theme: 'sage' },
  { id: 'platform', theme: 'deep' },
  { id: 'technology', theme: 'warm' },
  { id: 'benefits', theme: 'cool' },
  { id: 'experience', theme: 'sage' },
  { id: 'connect', theme: 'deep' },
];

export const NAV_LINKS = [
  { href: '#challenges', label: 'Challenges' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#platform', label: 'Platform' },
  { href: '#technology', label: 'Technology' },
  { href: '#benefits', label: 'Social benefits' },
  { href: '#experience', label: 'Experience' },
  { href: '#connect', label: 'Connect' },
];

export function themeFor(id) {
  return PANELS.find((p) => p.id === id)?.theme || 'warm';
}

export function isPanel(id) {
  return PANELS.some((p) => p.id === id);
}

export function parseHash() {
  const id = (window.location.hash || '#top').replace(/^#/, '') || 'top';
  return isPanel(id) ? id : 'top';
}
