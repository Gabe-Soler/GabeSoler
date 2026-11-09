/**
 * Opener for the secondary pages, under the name in the header: a title, a
 * line of text, and an optional row of links and summary text.
 */
export function Hero({ title, subtitle, actions }) {
  return (
    <section className="section-y">
      <div className="wrap">
        <h1 className="text-ink mb-2 text-xl font-bold">{title}</h1>
        <p className="text-ink">{subtitle}</p>
        {actions && <div className="mt-3 flex flex-wrap items-baseline gap-x-5 gap-y-1">{actions}</div>}
      </div>
    </section>
  );
}
