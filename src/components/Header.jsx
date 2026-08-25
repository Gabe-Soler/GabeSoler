import { Link, useLocation } from 'react-router-dom';
import { BrandMark, BRAND_HEADER } from './BrandMark';
import { NAV, SITE } from '../site.config';
import { useHideOnScroll } from '../hooks/useHideOnScroll';
import { useLiveClock } from '../hooks/useLiveClock';
import { useActiveSection } from '../hooks/useActiveSection';

// Module-level so the observer effect isn't torn down on every render.
const SECTION_IDS = NAV.filter((item) => item.section).map((item) => item.section);

const navLink = 'text-[0.82rem] leading-[1.5] transition-smooth hover:text-ink';

// Row of wrapped links on mobile, stacked column from the tablet breakpoint up.
const navColumn =
  'flex flex-row flex-wrap gap-x-5 gap-y-1 pt-[0.3rem] sm:flex-col sm:gap-[0.35rem]';

export function Header() {
  const { pathname } = useLocation();
  const hidden = useHideOnScroll();
  const clock = useLiveClock();
  const activeSection = useActiveSection(SECTION_IDS, pathname);

  const isActive = (item) =>
    item.to ? pathname === item.to : activeSection === item.section;

  return (
    <header
      className={`bg-bg sticky top-0 z-100 transition-transform duration-300 ease-[var(--ease-smooth)] ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="container-x grid grid-cols-1 items-start gap-5 py-5 sm:grid-cols-[auto_1fr_1fr] sm:gap-6 sm:py-6 md:grid-cols-[auto_1fr_1fr_1fr] md:gap-8">
        <BrandMark size={BRAND_HEADER} />

        <nav
          className={navColumn}
          aria-label="Primary"
        >
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to ?? `/#${item.section}`}
              className={`${navLink} ${isActive(item) ? 'text-ink' : 'text-muted'}`}
              aria-current={isActive(item) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={navColumn}>
          <a className={`${navLink} text-muted`} href={SITE.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className={`${navLink} text-muted`} href={SITE.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        <div className="text-muted hidden flex-col gap-[0.35rem] pt-[0.3rem] text-[0.82rem] leading-[1.5] md:flex">
          <span>{SITE.location}</span>
          <span>{clock}</span>
        </div>
      </div>
    </header>
  );
}
