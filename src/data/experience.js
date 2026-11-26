// Newest first. Rendered as "> role @ company — date" with the points as smaller sub-bullets.
// An entry with `roles` instead is one company block, like LinkedIn, with each role
// under it, newest first.
export const EXPERIENCE = [
  {
    company: 'RBC Capital Markets',
    roles: [
      {
        role: 'Incoming Global Markets Program Summer Analyst',
        date: 'May 2027',
        points: [],
      },
      {
        role: 'AI Innovation Intern',
        date: 'May 2026 – Aug 2026',
        points: [
          'Co-created and led Bridge AI, a forward-deployed engineering initiative bridging AI talent and SMEs; presented results and vision to 120 employees',
          'Built the Operational Risk Prompt Library, a central database for AI prompts, agents, and products, later adopted at the line of business level',
          'Developed Seshat, an AI chatbot that routes employees to the right AI solution for their problem',
        ],
      },
    ],
  },
  {
    company: 'QUANTT',
    date: 'Sep 2025 – Present',
    roles: [
      {
        role: 'Portfolio Manager, Long/Short Gamma Desk',
        date: 'Apr 2026 – Present',
        points: [
          'Lead a 5-person desk trading regime-dependent gamma on SPY options: a GARCH forecast of realized vol against implied vol picks long or short gamma across 10 option structures',
          'Built the desk\'s trading infrastructure: a daily data pipeline, automated IBKR paper trading with delta hedging, and a walk-forward backtester with a spread model fit on live quotes',
          'Launched lsgamma.quantt.ca, the desk\'s public hub for research and paper-trading results, and wrote a 10-lesson options curriculum for new analysts',
        ],
      },
      {
        role: 'Quantitative Analyst',
        date: 'Sep 2025 – Apr 2026',
        points: [
          'Co-authored a paper on the desk\'s market-neutral long/short equity strategy: five-factor scoring, the Consensus-Based Optimizer, and Black-Litterman sector allocation',
        ],
        links: [{ href: '/papers/long-short-equities.pdf', label: 'paper' }],
      },
    ],
  },
  {
    role: 'Director of Finance',
    company: "Queen's Global Energy Conference",
    date: 'Apr 2026 – Present',
    points: [
      'Managing a $30,000+ budget, allocation, and vendor negotiations',
    ],
  },
];
