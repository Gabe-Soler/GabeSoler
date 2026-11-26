// Single source of truth for identity, links, and the "now" list.
export const SITE = {
  name: 'Gabriel Soler',
  wordmark: 'Gabe Soler',
  // The tagline under the name: `program` is linked to `programUrl`.
  program: 'Mathematics and Engineering',
  programUrl: 'https://www.queensu.ca/mathstat/undergraduate/prospective-undergraduate/mthe',
  school: "Queen's University",
  email: 'Gabe.Soler@queensu.ca',
  github: 'https://github.com/Gabe-soler',
  linkedin: 'https://linkedin.com/in/gabriel-soler-gs',
};

// "Currently" on the home page. Keep it current; three or four is plenty.
// An item is a string, or { text, links } to follow the text with a list of links.
export const NOW = [
  'Portfolio Manager, QUANTT Long/Short Gamma Desk',
  {
    text: 'Building and exploring:',
    links: [
      { label: 'ArcadiaOS', href: 'https://gabe-soler.github.io/arcadiabench/viewer/' },
      { label: 'GMUX', href: 'https://gabe-soler.github.io/GMUX/' },
      { label: 'StraddleX', href: '#research' },
    ],
  },
  'Incoming Global Markets Program Summer Analyst, RBC (May 2027)',
];
