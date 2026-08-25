import { Link } from 'react-router-dom';
import { SITE } from '../site.config';

/**
 * The two-line wordmark, used in the header and the contact block.
 * Both collapse to 1.6rem on mobile; only the desktop size differs.
 */
export function BrandMark({ size }) {
  return (
    <Link
      to="/"
      className={`text-ink transition-smooth text-[1.6rem] leading-[1.05] font-normal tracking-[-0.02em] hover:opacity-60 ${size}`}
    >
      {SITE.wordmark[0]}
      <br />
      {SITE.wordmark[1]}
    </Link>
  );
}

export const BRAND_HEADER = 'sm:text-[clamp(1.8rem,3vw,2.4rem)]';
export const BRAND_FOOTER = 'sm:text-[clamp(1.5rem,2.5vw,2rem)]';
