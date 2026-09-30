import { Link, useLocation } from 'react-router-dom';
import { NAV, SITE } from '../site.config';
import { useActiveSection } from '../hooks/useActiveSection';

// Module-level so the observer effect isn't torn down on every render.
const SECTION_IDS = NAV.filter((item) => item.section).map((item) => item.section);

// 44px tall on touch layouts; the desktop segment uses GSDesign's 7px/13px.
const segmentLink =
  'inline-flex min-h-11 shrink-0 items-center rounded-full px-[13px] text-sm leading-none transition-[background-color,color] duration-150 hover:bg-segment-on hover:text-ink lg:min-h-0 lg:py-[9px]';

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

        {/* Below 900px the segment drops to its own full-width row and scrolls
            sideways, so every destination stays one tap away. */}
        <nav
          aria-label="Primary"
          className="bg-segment order-last flex w-full gap-[2px] overflow-x-auto rounded-full p-[5px] [scrollbar-width:none] lg:order-none lg:w-auto"
        >
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to ?? `/#${item.section}`}
              className={`${segmentLink} ${
                isActive(item) ? 'bg-segment-on text-ink' : 'text-muted'
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
