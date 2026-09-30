// `footnote` renders in the card's divider row; `link` renders there as a ghost pill.
export const PROJECTS = [
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
  {
    title: "Queen's Engineering Competition Website",
    tags: ['2025', 'Web Development'],
    description:
      'Architected and shipped the competition website with React.js and Tailwind CSS. Scaled registration to support 200+ competitors and 3+ sponsors.',
    link: { href: 'https://quengcomp.com', label: 'Visit live site' },
  },
  {
    title: 'FIAM Asset Management Hackathon',
    tags: ['2026', 'Quantitative Research'],
    description:
      "Selected by Professor Evan Jo (Smith School of Business) to represent Queen's University with a long/short equities strategy built around the Consensus-Based Optimizer. Extending the strategy with reinforcement learning and WRDS data to enable hourly dynamic hedging.",
    footnote: 'Team Research & Hackathon',
  },
];
