/** A page section: a heading, then its content. `aside` is small text after the heading. */
export function Section({ id, title, aside, children }) {
  return (
    <section id={id} className="wrap pt-8">
      <h2 className="mb-3 border-b pb-1 text-lg font-bold">
        {title}
        {aside && <span className="ml-2 text-sm font-normal">{aside}</span>}
      </h2>
      {children}
    </section>
  );
}
