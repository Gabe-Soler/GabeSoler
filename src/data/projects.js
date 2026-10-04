// Newest first. `footnote` renders under the title; `link` renders under the description as a ghost pill.
export const PROJECTS = [
  {
    title: 'FIAM Asset Management Hackathon',
    tags: ['2026', 'Quantitative Research'],
    description:
      "Selected by Professor Evan Jo (Smith School of Business) to represent Queen's University with a long/short equities strategy built around the Consensus-Based Optimizer.",
    footnote: 'Team Research & Hackathon',
  },
  {
    title: 'RepoWorld',
    tags: ['2026', 'Software Engineering'],
    description:
      'A gamified way to visualize and understand your codebase: explore your repository as a city and fight bugs with Greptile. Built at the Y Combinator hackathon in San Francisco in August 2026, placing 3rd.',
    footnote: 'Y Combinator Hackathon · 3rd Place',
    link: { href: 'https://repo-world.vercel.app/', label: 'Visit live site' },
  },
  {
    title: 'Consensus-Based Portfolio Optimization',
    tags: ['2025', 'Quantitative Research'],
    description:
      'Designed a distributed gradient-descent optimizer modeling each stock as an independent agent on a fully connected graph network, converging over 400 iterations to a consensus weight vector. Maintained a Sharpe ratio above 2.0 throughout the backtesting window with positive return skewness of +3.19.',
    footnote: 'Research Project',
  },
  {
    title: 'Bayesian Statistics Research',
    tags: ['2024', 'Data Science'],
    description:
      'Built an end-to-end statistical pipeline from data cleaning to model evaluation. Processed 2,000+ data points across 5 clubs, achieving R² = 0.87 with < 5% validation MSE and 22% prediction error reduction against linear baseline.',
    footnote: 'Academic Research',
  },
];
