/** A list with `>` markers: the site's main list style. */
export function List({ className = 'space-y-2', children }) {
  return <ul className={className}>{children}</ul>;
}

export function Item({ children }) {
  return (
    <li className="flex">
      <span aria-hidden="true" className="mr-2 shrink-0">
        &gt;
      </span>
      <div className="min-w-0 flex-1">{children}</div>
    </li>
  );
}

/** Smaller detail lines with `◦` markers, nested under an Item. */
export function SubList({ items }) {
  return (
    <ul className="mt-1 ml-4 space-y-0.5 text-sm">
      {items.map((item, i) => (
        <li key={i} className="flex">
          <span aria-hidden="true" className="mr-2 shrink-0">
            ◦
          </span>
          <span className="min-w-0">{item}</span>
        </li>
      ))}
    </ul>
  );
}
