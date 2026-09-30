/**
 * Page opener, left-aligned on the same edge as the section content below.
 * `actions` is a row of pills (one primary at most); `children` follow it.
 */
export function Hero({ title, subtitle, actions, children }) {
  return (
    <section className="pt-[clamp(44px,7vw,92px)] pb-[clamp(26px,5vw,58px)]">
      <div className="wrap">
        <h1 className="display text-ink mb-[22px] max-w-[660px] text-[clamp(34px,6.6vw,64px)] leading-none font-normal tracking-[-0.04em]">
          {title}
        </h1>
        <p className="text-grey max-w-[620px] text-[clamp(16px,2.2vw,18px)]">{subtitle}</p>
        {actions && (
          <div className="mt-[clamp(24px,3.4vw,34px)] flex flex-wrap items-center gap-[10px]">
            {actions}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
