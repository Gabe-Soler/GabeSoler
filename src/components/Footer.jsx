import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { MORE, SITE } from '../site.config';

/* global __BUILD__ */
const BUILD = typeof __BUILD__ === 'undefined' ? {} : __BUILD__;
const buildDate = BUILD.date
  ? new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(new Date(BUILD.date)).toLowerCase()
  : null;

const LINKS = [
  { label: 'github', href: SITE.github },
  { label: 'linkedin', href: SITE.linkedin },
  { label: 'email', href: `mailto:${SITE.email}` },
  ...MORE,
];

export function Footer() {
  return (
    <footer className="wrap text-grey mt-12 pb-[max(48px,env(safe-area-inset-bottom))] text-sm">
      <p className="flex flex-wrap gap-y-1">
        {LINKS.map((item, i) => (
          <Fragment key={item.label}>
            {i > 0 && (
              <span aria-hidden="true" className="px-3">
                /
              </span>
            )}
            {item.to ? (
              <Link className="link" to={item.to}>
                {item.label}
              </Link>
            ) : (
              <a
                className="link"
                href={item.href}
                {...(item.href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
              >
                {item.label}
              </a>
            )}
          </Fragment>
        ))}
      </p>

      {buildDate && <p className="mt-4">last updated: {buildDate}</p>}
    </footer>
  );
}
