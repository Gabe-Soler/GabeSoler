/** Soft grey surface: no border, no shadow; tone does the separating. */
export function Card({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag
      className={`bg-card rounded-card p-6 max-[460px]:rounded-[20px] max-[460px]:p-[18px] ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
