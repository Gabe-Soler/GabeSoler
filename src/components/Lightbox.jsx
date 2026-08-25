import { useCallback, useEffect } from 'react';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';

const control =
  'absolute z-1001 cursor-pointer border-none bg-transparent leading-none text-white transition-opacity duration-200';

/**
 * Full-screen image viewer. `index` is the open image, or null when closed.
 * Wraps around at both ends, and answers Esc / arrow keys.
 */
export function Lightbox({ images, folder, alt, index, onChange, onClose }) {
  const open = index !== null;
  useLockBodyScroll(open);

  const step = useCallback(
    (delta) => onChange((index + delta + images.length) % images.length),
    [index, images.length, onChange]
  );

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') step(-1);
      if (event.key === 'ArrowRight') step(1);
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, step, onClose]);

  if (!open) return null;

  const image = images[index];

  return (
    <div
      className="fixed inset-0 z-1000 flex items-center justify-center bg-black/92 backdrop-blur-[8px]"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button
        className={`${control} top-6 right-6 p-2 text-[2rem] opacity-70 hover:opacity-100`}
        onClick={onClose}
        aria-label="Close"
      >
        &times;
      </button>
      <button
        className={`${control} top-1/2 left-4 -translate-y-1/2 p-4 text-[3rem] opacity-50 hover:opacity-100`}
        onClick={() => step(-1)}
        aria-label="Previous"
      >
        &lsaquo;
      </button>

      <picture>
        <source srcSet={`/${folder}/${image.name}.webp`} type="image/webp" />
        <img
          className="animate-lightbox-in max-h-[90vh] max-w-[90vw] rounded-[2px] object-contain"
          src={`/${folder}/${image.name}.jpg`}
          alt={alt}
        />
      </picture>

      <button
        className={`${control} top-1/2 right-4 -translate-y-1/2 p-4 text-[3rem] opacity-50 hover:opacity-100`}
        onClick={() => step(1)}
        aria-label="Next"
      >
        &rsaquo;
      </button>
    </div>
  );
}
