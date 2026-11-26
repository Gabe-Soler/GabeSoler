// Project sections on the home page, in display order.
export const PROJECT_GROUPS = [
  { id: 'competitions', title: 'Competitions' },
  { id: 'research', title: 'Research' },
  { id: 'independent', title: 'Passion/Side Projects' },
];

// Newest first within each group. Rendered as "> title — summary" with the points
// as smaller sub-bullets. `href` links the title; `links` go on a last line of their own;
// `placement` shows as a highlighted badge after the title. `date` and `summary` are optional.
export const PROJECTS = [
  {
    title: 'GMUX',
    group: 'independent',
    date: 'Nov 2026 – Present',
    href: 'https://gabe-soler.github.io/GMUX/',
    summary: 'A fork of the cmux terminal for watching AI coding agents work',
    points: [
      'Adds a VS Code-style file explorer that follows the focused terminal, colours files by git status, and marks files an agent recently edited',
      'Follow-agent mode opens each file an agent touches beside its terminal as a live diff, line by line',
    ],
    links: [
      { href: 'https://gabe-soler.github.io/GMUX/', label: 'site' },
      { href: 'https://github.com/Gabe-Soler/GMUX', label: 'github' },
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
      'Built in Rust alongside ArcadiaBench, an open, seeded simulator of a Mars build site, and a JSON Schema protocol so coordinators can be written in any language',
    ],
    links: [
      { href: 'https://gabe-soler.github.io/arcadiabench/viewer/', label: 'simulator' },
      { href: 'https://github.com/Gabe-Soler/arcadiaos', label: 'github' },
      { href: 'https://pypi.org/project/arcadiabench/', label: 'pypi' },
    ],
  },
  {
    title: 'RITC x Smith 2026 Algorithmic Trading Competition',
    group: 'competitions',
    date: 'Nov 2026',
    placement: '1st place',
    points: [
      'ETF arbitrage bot that prices each tender by its full unwind cost and exits through a smart order router',
      'Volatility bot trading delta-hedged straddles on the gap between implied and forecast vol',
    ],
  },
  {
    title: 'FIAM Asset Management Hackathon',
    group: 'competitions',
    date: 'Sep – Oct 2026',
    placement: '2nd place',
    summary: 'A market-neutral U.S. equity strategy with an LLM risk manager',
    points: [
      'Bayesian model picks which of 147 stock characteristics still earn a premium; stocks trade as agents via consensus ADMM',
      '11.78% CAGR, 0.80 Sharpe, 0.42 net IR, 11.3% max drawdown',
    ],
    links: [{ href: '/papers/fiam-2026-plutus.pdf', label: 'paper' }],
  },
  {
    title: 'RepoWorld',
    group: 'competitions',
    date: 'Aug 2026',
    href: 'https://repo-world.vercel.app/',
    placement: '3rd place',
    summary: 'Explore your codebase as a city and fight bugs with Greptile (Y Combinator hackathon, San Francisco)',
    points: [],
  },
  {
    title: 'National Bank of Canada x QUANTT Algorithmic Trading Competition',
    group: 'competitions',
    date: 'Mar 2026',
    placement: '2nd place',
    summary: '2nd of 17 teams',
    points: [],
  },
  {
    title: 'StraddleX',
    group: 'research',
    date: 'Nov 2026 – Present',
    summary: 'A bounded, adversarial LLM research harness for quantitative finance',
    points: [
      'LLMs propose typed hypotheses and argue bull and bear cases, but only deterministic, versioned code decides whether one passes',
      'Every trial is recorded in a hash-chained ledger and a provenance graph; the usual output is a well-documented rejection',
    ],
  },
];
