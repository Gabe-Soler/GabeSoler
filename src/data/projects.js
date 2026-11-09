// Newest first. Rendered as "> title — summary" with the points as smaller
// sub-bullets. `href` links the title; `links` go on a last line of their own.
export const PROJECTS = [
  {
    title: 'ArcadiaOS',
    href: 'https://gabe-soler.github.io/arcadiabench/viewer/',
    summary: 'an operating system for robot crews building on Mars',
    points: [
      'Decides which robot does what, when, and with how much power, while Earth supervises across a 4⁠–⁠24 minute delay and multi-week blackouts',
      'Built in Rust with ArcadiaBench, an open, seeded simulator of a landing-pad build site at Arcadia Planitia, and arcadia-protocol, a versioned JSON Schema interface for coordinators written in any language',
      'Open source, in progress',
    ],
    links: [
      { href: 'https://gabe-soler.github.io/arcadiabench/viewer/', label: 'simulator' },
      { href: 'https://github.com/Gabe-Soler/arcadiaos', label: 'github' },
    ],
  },
  {
    title: 'FIAM Asset Management Hackathon',
    summary: 'a market-neutral U.S. equity strategy with an LLM risk manager',
    points: [
      '2nd place at the 2026 finals with Team Plutus, advised by Professor Evan Jo (Smith School of Business)',
      'A Bayesian model learns which of 147 published stock characteristics still earn a premium; each stock trades as an agent through consensus ADMM only when expected gain beats cost',
      'A local LLM risk manager reads 8-K filings and can only shrink positions ahead of pending events',
      '11.78% CAGR, 0.80 Sharpe, 0.42 net IR, 11.3% max drawdown',
    ],
  },
  {
    title: 'RepoWorld',
    href: 'https://repo-world.vercel.app/',
    summary: 'explore your codebase as a city and fight bugs with Greptile',
    points: ['3rd place at the Y Combinator hackathon, San Francisco, August 2026'],
  },
  {
    title: 'Consensus-Based Portfolio Optimization',
    summary: 'a distributed optimizer that treats each stock as an agent',
    points: [
      'Gradient descent across a fully connected graph of stock agents, converging to a consensus weight vector over 400 iterations',
      'Sharpe ratio above 2.0 throughout the backtest, with return skewness of +3.19',
    ],
  },
];
