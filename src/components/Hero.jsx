/** Opener for the secondary pages: a title, a line of text, and an optional row of links. */
export function Hero({ title, subtitle, actions }) {
  return (
    <section className="wrap pt-8">
      <h1 className="text-lg font-bold">{title}</h1>
      <p>{subtitle}</p>
      {actions && <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm">{actions}</div>}
    </section>
  );
}
