/** Quiet summary text beside a title or in a hero ("Last 12 months", "89 photographs"). */
export function Tag({ className = '', children }) {
  return <span className={`text-grey text-sm whitespace-nowrap tabular-nums ${className}`}>{children}</span>;
}
