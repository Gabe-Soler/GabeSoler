import { Link, useLocation } from 'react-router-dom';
import { SITE } from '../site.config';
import { TextLink } from './TextLink';

const name = 'mb-3 block text-2xl leading-tight font-bold';

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
      <div className="space-y-0.5 leading-snug">
        <p>
          <TextLink href={SITE.programUrl}>{SITE.program}</TextLink>, <span className="whitespace-nowrap">{SITE.school}</span>
        </p>
        <p>{SITE.email}</p>
      </div>
    </header>
  );
}
