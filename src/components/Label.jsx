/** Section eyebrow — "Experience", "Featured Projects". */
export function Label({ children }) {
  return (
    <span className="text-ink text-[0.82rem] font-medium tracking-[0.06em] uppercase">
      {children}
    </span>
  );
}

/** Muted counterpart used beside a Label, e.g. a date range. */
export function LabelMuted({ children }) {
  return <span className="text-muted text-[0.78rem]">{children}</span>;
}

/** Uppercase field label in the About and Contact blocks. */
export function DetailLabel({ children }) {
  return (
    <span className="text-light text-[0.78rem] font-medium tracking-[0.06em] uppercase">
      {children}
    </span>
  );
}
