/** Non-interactive pill that summarises a section or item ("2024 · 2026"). */
export function Tag({ className = '', children }) {
  return (
    <span
      className={`bg-bg border-line text-muted inline-flex items-center rounded-full border px-[17px] py-[10px] text-sm leading-none whitespace-nowrap tabular-nums ${className}`}
    >
      {children}
    </span>
  );
}
