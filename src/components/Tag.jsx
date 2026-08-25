const chip =
  'bg-bg-white text-muted rounded-[2px] px-[0.6rem] py-[0.2rem] whitespace-nowrap uppercase';

/** Project year / category chip. */
export function Tag({ children }) {
  return <span className={`${chip} text-[0.7rem] tracking-[0.06em]`}>{children}</span>;
}

/**
 * Skill chip — larger than a project Tag, and inverts on hover.
 *
 * 0.9rem/1.6 is what the original stylesheet actually rendered: its
 * `.skill-tags span` rule asked for 0.75rem but lost to the more specific
 * `.detail-group span:not(.detail-label)`. Kept here so the chips match.
 */
export function SkillTag({ children }) {
  return (
    <span
      className={`${chip} text-[0.9rem] leading-[1.6] tracking-[0.04em] transition-smooth hover:bg-ink hover:text-bg-white`}
    >
      {children}
    </span>
  );
}
