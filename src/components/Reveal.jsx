import { useReveal } from '../hooks/useReveal';

/**
 * Fades and lifts its children into place the first time they scroll into view.
 * `as` lets callers keep semantic tags (section, article, figure).
 */
export function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, visible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
