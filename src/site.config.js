// Single source of truth for identity, nav, and contact details.
export const SITE = {
  name: 'Gabriel Soler',
  wordmark: 'Gabe Soler',
  email: 'Gabe.Soler@queensu.ca',
  github: 'https://github.com/Gabe-soler',
  linkedin: 'https://linkedin.com/in/gabriel-soler-gs',
};

// `section` links resolve to /#<id> so they work from any route.
export const NAV = [
  { label: 'Experience', section: 'experience' },
  { label: 'Projects', section: 'projects' },
  { label: 'Design', to: '/design' },
  { label: 'Photography', to: '/photography' },
];

