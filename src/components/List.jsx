import { TextLink } from './TextLink';

/** A plain list. */
export function List({ className = 'space-y-2', children }) {
  return <ul className={className}>{children}</ul>;
}

export function Item({ children }) {
  return <li>{children}</li>;
}

/** Smaller detail lines, nested under an Item. */
export function SubList({ items }) {
  return (
    <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm">
      {items.map((item, i) => (
        <li key={i}>{typeof item === 'string' ? linkify(item) : item}</li>
      ))}
    </ul>
  );
}

/** Turns bare domains in a bullet ("lsgamma.quantt.ca") into links. */
const DOMAIN = /\b([a-z0-9-]+(?:\.[a-z0-9-]+)*\.(?:ca|com|io|org|dev|ai))\b/g;

function linkify(text) {
  const parts = text.split(DOMAIN);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <TextLink key={i} href={`https://${part}`}>
        {part}
      </TextLink>
    ) : (
      part
    )
  );
}
