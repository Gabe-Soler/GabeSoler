import { SITE } from '../site.config';

const footLink = 'transition-colors duration-150 hover:text-ink';

export function Footer() {
  return (
    <footer className="section-y">
      <div className="wrap">
        <div className="border-line text-grey flex flex-wrap justify-between gap-x-6 gap-y-2 border-t pt-[26px] pb-[max(34px,env(safe-area-inset-bottom))] text-[13px]">
          <p>&copy; {new Date().getFullYear()} {SITE.name}</p>
          <p className="flex flex-wrap gap-x-4">
            <a className={footLink} href={SITE.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className={footLink} href={SITE.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
