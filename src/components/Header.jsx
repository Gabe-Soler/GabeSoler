import { Link, useLocation } from 'react-router-dom';
import { SITE } from '../site.config';

const name = 'text-ink text-3xl font-medium tracking-[-0.01em] md:text-4xl';

/**
 * The name and a monospace tagline, on every page. It is the h1 at home and a
 * link back home everywhere else. The portrait sits beside it at home only.
 */
export function Header() {
  const isHome = useLocation().pathname === '/';

  return (
    <header className="wrap pt-12">
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          {isHome ? (
            <h1 className={name}>{SITE.wordmark}</h1>
          ) : (
            <Link to="/" className={name}>
              {SITE.wordmark}
            </Link>
          )}
          <p className="text-grey mt-4 font-mono text-base md:text-lg">{SITE.tagline}</p>
        </div>

        {isHome && (
          <picture className="shrink-0">
            <source srcSet="/headshot.webp" type="image/webp" />
            {/* Multiply turns the photo's white background into the page's tan. */}
            <img
              src="/headshot.jpg"
              alt="Portrait of Gabriel Soler"
              width={560}
              height={560}
              fetchPriority="high"
              className="block size-[clamp(84px,16vw,128px)] mix-blend-multiply [mask-image:linear-gradient(to_bottom,black_72%,transparent)]"
            />
          </picture>
        )}
      </div>
    </header>
  );
}
