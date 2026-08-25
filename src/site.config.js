// Single source of truth for identity, nav, and contact details.
export const SITE = {
  name: 'Gabriel Soler',
  // Two-line wordmark shown in the header and the contact block.
  wordmark: ['Gabe', 'Soler'],
  location: 'Kingston, ON',
  email: 'Gabe.Soler@queensu.ca',
  github: 'https://github.com/Gabe-soler',
  linkedin: 'https://linkedin.com/in/gabriel-soler-gs',
};

export const EDUCATION =
  "Queen's University, Smith Engineering — BASc Mathematics & Engineering, Computing and Communications · Class of 2028";

export const SKILLS = [
  'Python',
  'Java',
  'SQL',
  'React.js',
  'NumPy',
  'Pandas',
  'Matplotlib',
  'SciPy',
  'scikit-learn',
  'PyTorch',
  'yfinance',
  'Tailwind CSS',
  'Excel/VBA',
  'Git',
];

// `section` links resolve to /#<id> so they work from any route.
export const NAV = [
  { label: 'Projects', section: 'projects' },
  { label: 'Design', to: '/design' },
  { label: 'Photography', to: '/photography' },
  { label: 'About', section: 'about' },
  { label: 'Contact', section: 'contact' },
];
