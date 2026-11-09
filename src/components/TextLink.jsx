import { Link } from 'react-router-dom';

// Text, no box. Stays 44px tall for touch. Only the label is underlined, so the
// external-link arrow doesn't get its own stray underline segment.
const base =
  'group inline-flex min-h-11 items-center gap-1 text-[15px] font-medium transition-colors duration-150 max-[460px]:text-sm';
const label = 'underline decoration-1 underline-offset-4';

const variants = {
  default: { link: 'text-ink', label: 'decoration-line-hover group-hover:decoration-current' },
  primary: { link: 'text-accent hover:text-accent-hover', label: 'decoration-current' },
};

/**
 * Plain text link. `to` renders a router Link, `href` a plain anchor; external
 * hrefs (starting with http) open in a new tab and get a trailing arrow.
 */
export function TextLink({ to, href, variant = 'default', className = '', children, ...rest }) {
  const style = variants[variant];
  const classes = `${base} ${style.link} ${className}`;
  const text = <span className={`${label} ${style.label}`}>{children}</span>;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {text}
      </Link>
    );
  }

  const external = href?.startsWith('http');
  return (
    <a
      href={href}
      className={classes}
      {...(external && { target: '_blank', rel: 'noreferrer' })}
      {...rest}
    >
      {text}
      {external && <span aria-hidden="true">↗</span>}
    </a>
  );
}
