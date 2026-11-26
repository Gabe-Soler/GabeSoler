import { Link, useLocation } from 'react-router-dom';
import { SITE } from '../site.config';
import { TextLink } from './TextLink';

const name = 'text-2xl font-bold';

/** Name and tagline. The h1 at home, a link back home everywhere else. */
export function Header() {
  const isHome = useLocation().pathname === '/';

  return (
    <header className="wrap pt-8">
      {isHome ? (
        <h1 className={name}>{SITE.wordmark}</h1>
      ) : (
        <Link to="/" className={name}>
          {SITE.wordmark}
        </Link>
      )}
      <p>
        <TextLink href={SITE.programUrl}>{SITE.program}</TextLink>, {SITE.school}
      </p>
      <a
        href={`mailto:${SITE.email}`}
        className="mt-3 inline-block border px-3 py-1 text-sm hover:bg-ink hover:text-bg"
      >
        Contact
      </a>
    </header>
  );
}
