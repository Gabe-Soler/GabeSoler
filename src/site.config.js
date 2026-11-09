// Single source of truth for identity, links, and the "now" list.
export const SITE = {
  name: 'Gabriel Soler',
  // Masthead: the name, then a one-line monospace tagline under it.
  wordmark: 'Gabe Soler',
  tagline: "Math and Engineering @ Queen's",
  email: 'Gabe.Soler@queensu.ca',
  github: 'https://github.com/Gabe-soler',
  linkedin: 'https://linkedin.com/in/gabriel-soler-gs',
};

// "what I'm up to" on the home page. Keep it current; three or four is plenty.
export const NOW = [
  'Portfolio Manager on the QUANTT long/short gamma desk',
  'Building ArcadiaOS, a Rust OS for robot crews on Mars',
  'Incoming Sales & Trading summer analyst @ RBC (May 2027)',
];

// Repos outside your own account (e.g. team repos) that "recently on github" always shows.
export const EXTRA_REPOS = ['quanttqueensu/LS_Gamma'];

// Secondary pages, linked from the footer.
export const MORE = [
  { label: 'photography', to: '/photography' },
  { label: 'design', to: '/design' },
];
