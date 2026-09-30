import { Link } from 'react-router-dom';

const base =
  'inline-flex min-h-11 items-center justify-center rounded-full border px-[19px] text-sm leading-none font-medium whitespace-nowrap transition-[background-color,border-color] duration-150 max-[460px]:px-[14px] max-[460px]:text-[13px]';

const variants = {
  primary: 'bg-accent border-accent text-on-accent hover:bg-accent-hover hover:border-accent-hover',
  ghost: 'bg-bg border-line text-ink hover:border-line-hover',
};

/**
 * The GSDesign pill button. Use one primary and at most one ghost per group.
 * `to` renders a router Link, `href` a plain anchor (external when it starts with http).
 */
export function Pill({ to, href, variant = 'ghost', className = '', children, ...rest }) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
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
      {children}
    </a>
  );
}
