import { Link, useLocation } from 'react-router-dom';
import { NAV, SITE } from '../site.config';
import { useActiveSection } from '../hooks/useActiveSection';

// Module-level so the observer effect isn't torn down on every render.
const SECTION_IDS = NAV.filter((item) => item.section).map((item) => item.section);

// Plain text links. On narrow screens they spread across their own row and the
// text scales with the viewport, so all four fit without scrolling (down to 320px).
// 44px tall for touch. The current page is ink and underlined.
const navLink =
  'inline-flex min-h-11 items-center text-[clamp(13px,3.6vw,14px)] leading-none whitespace-nowrap underline-offset-[6px] transition-colors duration-150 hover:text-ink sm:text-sm';

export function Header() {
  const { pathname } = useLocation();
  const activeSection = useActiveSection(SECTION_IDS, pathname);

  const isActive = (item) =>
    item.to ? pathname === item.to : activeSection === item.section;

  return (
    <header className="bg-bg sticky top-0 z-100">
      <div className="wrap flex flex-wrap items-center justify-between gap-3 py-[14px]">
        <Link
          to="/"
          className="display text-ink inline-flex min-h-11 items-center rounded-full text-[20px] font-medium max-[460px]:text-[18px]"
        >
          {SITE.wordmark}
        </Link>

        {/* On phones the links drop to their own full-width row. */}
        <nav
          aria-label="Primary"
          className="order-last flex w-full justify-between gap-x-5 sm:order-none sm:w-auto sm:justify-end sm:gap-x-7"
        >
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to ?? `/#${item.section}`}
              className={`${navLink} ${
                isActive(item) ? 'text-ink underline decoration-1' : 'text-muted'
              }`}
              aria-current={isActive(item) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
