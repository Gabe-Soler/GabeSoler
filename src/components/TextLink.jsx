import { Link } from 'react-router-dom';

/**
 * Inline text link with a thin underline. `to` renders a router Link, `href` a
 * plain anchor; external hrefs (starting with http) open in a new tab.
 */
export function TextLink({ to, href, className = '', children, ...rest }) {
  const classes = `link ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const external = href?.startsWith('http');
  return (
    <a href={href} className={classes} {...(external && { target: '_blank', rel: 'noreferrer' })} {...rest}>
      {children}
    </a>
  );
}
