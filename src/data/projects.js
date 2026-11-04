// Newest first. `footnote` renders under the title; `links` render under the description as ghost pills.
export const PROJECTS = [
  {
    title: 'ArcadiaOS',
    tags: ['2026', 'Robotics'],
    description:
      'An operating system for robot crews building on Mars: it decides which robot does what, when, and with how much power, while Earth supervises across a 4\u2060–\u206024 minute delay and multi-week blackouts. Built in Rust alongside ArcadiaBench, an open, seeded discrete-event simulator of a landing-pad construction site at Arcadia Planitia, and arcadia-protocol, a versioned JSON Schema interface that lets any team plug in a coordinator written in any language.',
    footnote: 'Open Source · In Progress',
    links: [
      { href: 'https://gabe-soler.github.io/arcadiabench/viewer/', label: 'Open simulator' },
      { href: 'https://github.com/Gabe-Soler/arcadiaos', label: 'View on GitHub' },
    ],
  },
  {
    title: 'FIAM Asset Management Hackathon',
    tags: ['2026', 'Quantitative Research'],
    description:
      "Placed 2nd at the 2026 FIAM Asset Management Hackathon Finals with Team Plutus, advised by Professor Evan Jo (Smith School of Business). Built a market-neutral U.S. equity strategy: a Bayesian model learns which of 147 published stock characteristics still earn a premium, each stock trades as an agent through consensus ADMM only when expected gain beats cost, and a local LLM risk manager reading 8-K filings can only shrink positions ahead of pending events. 11.78% CAGR, 0.80 Sharpe, 0.42 net IR, and 11.3% max drawdown.",
    footnote: 'Team Plutus · 2nd Place',
  },
  {
    title: 'RepoWorld',
    tags: ['2026', 'Software Engineering'],
    description:
      'A gamified way to visualize and understand your codebase: explore your repository as a city and fight bugs with Greptile. Built at the Y Combinator hackathon in San Francisco in August 2026, placing 3rd.',
    footnote: 'Y Combinator Hackathon · 3rd Place',
    links: [{ href: 'https://repo-world.vercel.app/', label: 'Visit live site' }],
  },
  {
    title: 'Consensus-Based Portfolio Optimization',
    tags: ['2025', 'Quantitative Research'],
    description:
      'Designed a distributed gradient-descent optimizer modeling each stock as an independent agent on a fully connected graph network, converging over 400 iterations to a consensus weight vector. Maintained a Sharpe ratio above 2.0 throughout the backtesting window with positive return skewness of +3.19.',
    footnote: 'Research Project',
  },
];
