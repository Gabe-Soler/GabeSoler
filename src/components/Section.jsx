/**
 * A page section: 1040px wrap, GSDesign top rhythm, and a head row with the
 * title on the left and an optional summary tag on the right.
 */
export function Section({ id, title, aside, children }) {
  return (
    <section id={id} className="section-y">
      <div className="wrap">
        <div className="mb-[clamp(22px,3.2vw,36px)] flex flex-wrap items-center justify-between gap-[14px]">
          <h2 className="display text-ink text-[clamp(28px,4.8vw,40px)] leading-[1.08] font-light">
            {title}
          </h2>
          {aside}
        </div>
        {children}
      </div>
    </section>
  );
}
