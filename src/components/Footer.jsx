import { SITE } from '../site.config';

/* global __BUILD__ */
const BUILD = typeof __BUILD__ === 'undefined' ? {} : __BUILD__;
const buildDate = BUILD.date
  ? new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(new Date(BUILD.date)).toLowerCase()
  : null;

const LINKS = [
  { label: 'github', href: SITE.github },
  { label: 'linkedin', href: SITE.linkedin },
  { label: 'email', href: `mailto:${SITE.email}` },
];

export function Footer() {
  return (
    <footer className="wrap mt-10 border-t pt-4 pb-[max(32px,env(safe-area-inset-bottom))] text-sm">
      <p className="flex flex-wrap gap-x-4 gap-y-1">
        {LINKS.map((item) => (
          <a
            key={item.label}
            className="link"
            href={item.href}
            {...(item.href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
          >
            {item.label}
          </a>
        ))}
      </p>
      {buildDate && <p className="mt-2">last updated: {buildDate}</p>}
    </footer>
  );
}
