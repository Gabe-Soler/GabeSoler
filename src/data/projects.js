// The Projects section's subheadings, in display order.
export const PROJECT_GROUPS = [
  { id: 'hackathons', title: 'Hackathons' },
  { id: 'independent', title: 'Independent Projects' },
  { id: 'research', title: 'School Research' },
];

// Newest first within each group. Rendered as "> title — summary" with the points
// as smaller sub-bullets. `href` links the title; `links` go on a last line of their own;
// `placement` shows as a highlighted badge after the title. `date` and `summary` are optional.
export const PROJECTS = [
  {
    title: 'GMUX',
    group: 'independent',
    date: 'Nov 2026 – Present',
    href: 'https://github.com/Gabe-Soler/GMUX',
    summary: 'A fork of the cmux terminal for watching AI coding agents work',
    points: [
      'Adds a VS Code-style file explorer that follows the focused terminal, colours files by git status, and marks files an agent recently edited',
      'Follow-agent mode opens each file an agent touches beside its terminal as a live diff, line by line',
      'Written in Swift, with a CLI so agents and scripts can drive the explorer',
    ],
  },
  {
    title: 'ArcadiaOS',
    group: 'independent',
    date: 'Oct 2026 – Present',
    href: 'https://gabe-soler.github.io/arcadiabench/viewer/',
    summary: 'An operating system for robot crews building on Mars',
    points: [
      'Decides which robot does what, when, and with how much power, while Earth supervises across a 4⁠–⁠24 minute delay and multi-week blackouts',
      'Built in Rust with ArcadiaBench, an open, seeded simulator of a landing-pad build site at Arcadia Planitia, and arcadia-protocol, a versioned JSON Schema interface for coordinators written in any language',
      'Open source, in progress',
    ],
    links: [
      { href: 'https://gabe-soler.github.io/arcadiabench/viewer/', label: 'simulator' },
      { href: 'https://github.com/Gabe-Soler/arcadiaos', label: 'github' },
      { href: 'https://pypi.org/project/arcadiabench/', label: 'pypi' },
    ],
  },
  {
    title: 'RITC x Smith 2026 Algorithmic Trading Competition',
    group: 'hackathons',
    date: 'Nov 2026',
    placement: '1st place',
    points: [],
  },
  {
    title: 'FIAM Asset Management Hackathon',
    group: 'hackathons',
    date: 'Sep – Oct 2026',
    placement: '2nd place',
    summary: 'A market-neutral U.S. equity strategy with an LLM risk manager',
    points: [
      '2026 finals with Team Plutus, advised by Professor Evan Jo (Smith School of Business)',
      'A Bayesian model learns which of 147 published stock characteristics still earn a premium; each stock trades as an agent through consensus ADMM only when expected gain beats cost',
      'A local LLM risk manager reads 8-K filings and can only shrink positions ahead of pending events',
      '11.78% CAGR, 0.80 Sharpe, 0.42 net IR, 11.3% max drawdown',
    ],
  },
  {
    title: 'RepoWorld',
    group: 'hackathons',
    date: 'Aug 2026',
    href: 'https://repo-world.vercel.app/',
    placement: '3rd place',
    summary: 'Explore your codebase as a city and fight bugs with Greptile',
    points: ['Y Combinator hackathon, San Francisco'],
  },
  {
    title: 'Consensus-Based Portfolio Optimization',
    group: 'research',
    date: '2025',
    summary: 'A distributed optimizer that treats each stock as an agent',
    points: [
      'Gradient descent across a fully connected graph of stock agents, converging to a consensus weight vector over 400 iterations',
      'Sharpe ratio above 2.0 throughout the backtest, with return skewness of +3.19',
    ],
  },
];
