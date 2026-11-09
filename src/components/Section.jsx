/** A page section: a short lowercase heading, then its content. `aside` is quiet text after the heading. */
export function Section({ id, title, aside, children }) {
  return (
    <section id={id} className="section-y">
      <div className="wrap">
        <div className="mb-4 flex flex-wrap items-baseline gap-x-3">
          <h2 className="text-ink text-xl font-bold">{title}</h2>
          {aside}
        </div>
        {children}
      </div>
    </section>
  );
}
