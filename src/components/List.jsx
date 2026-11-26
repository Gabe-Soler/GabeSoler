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
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
