import { Link, useLocation } from 'react-router-dom';
import { NAV, SITE } from '../site.config';
import { useActiveSection } from '../hooks/useActiveSection';

// Module-level so the observer effect isn't torn down on every render.
const SECTION_IDS = NAV.filter((item) => item.section).map((item) => item.section);

// On narrow screens the links share the row evenly and the text and padding
// scale with the viewport, so all four fit without scrolling (down to 320px).
// 44px tall on touch layouts; the desktop segment uses GSDesign's 7px/13px.
const segmentLink =
  'inline-flex min-h-11 flex-1 items-center justify-center rounded-full px-[clamp(4px,1.6vw,13px)] text-[clamp(12px,3.6vw,14px)] leading-none whitespace-nowrap transition-[background-color,color] duration-150 hover:bg-segment-on hover:text-ink sm:min-h-0 sm:flex-none sm:px-[13px] sm:py-[9px] sm:text-sm';

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

        {/* On phones the segment drops to its own full-width row. */}
        <nav
          aria-label="Primary"
          className="bg-segment order-last flex w-full gap-[2px] rounded-full p-[5px] sm:order-none sm:w-auto"
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
