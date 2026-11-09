/** Quiet summary text beside a title or in a hero ("89 photos"). */
export function Tag({ className = '', children }) {
  return <span className={`text-grey text-sm whitespace-nowrap tabular-nums ${className}`}>{children}</span>;
}
