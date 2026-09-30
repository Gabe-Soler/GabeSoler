import { useCallback, useEffect, useRef } from 'react';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';
import { imageAlt } from './imageAlt';

// White pills on the dark scrim. The viewer stays dark in both appearances so
// the work, not the chrome, carries the colour.
const control =
  'absolute z-1001 inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full border border-white bg-white text-sm leading-none font-medium text-[#12110d] transition-[background-color,border-color] duration-150 hover:border-[#c4c4c4] hover:bg-[#f2f2f2]';

// Horizontal travel, in px, before a pointer drag counts as a swipe.
const SWIPE_THRESHOLD = 50;

/**
 * Full-screen image viewer. `index` is the open image, or null when closed.
 * Wraps around at both ends, answers Esc / arrow keys and horizontal swipes,
 * keeps Tab focus inside while open, and hands focus back on close.
 */
export function Lightbox({ images, folder, alt, index, onChange, onClose }) {
  const open = index !== null;
  useLockBodyScroll(open);

  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const swipeStartX = useRef(null);
  // A swipe that ends on the backdrop also fires a click; don't let it close the viewer.
  const justSwiped = useRef(false);

  const step = useCallback(
    (delta) => onChange((index + delta + images.length) % images.length),
    [index, images.length, onChange]
  );

  // Move focus in on open; restore it to whatever opened the viewer on close.
  useEffect(() => {
    if (!open) return;
    const opener = document.activeElement;
    closeRef.current?.focus();
    return () => opener?.focus?.();
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') step(-1);
      if (event.key === 'ArrowRight') step(1);

      if (event.key === 'Tab') {
        const buttons = [...dialogRef.current.querySelectorAll('button')];
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, step, onClose]);

  if (!open) return null;

  const image = images[index];

  return (
    <div
      ref={dialogRef}
      className="animate-fade-in fixed inset-0 z-1000 flex touch-pan-y items-center justify-center bg-[rgb(18_17_13/0.94)]"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onClick={(event) => {
        if (justSwiped.current) {
          justSwiped.current = false;
          return;
        }
        if (event.target === event.currentTarget) onClose();
      }}
      onPointerDown={(event) => {
        swipeStartX.current = event.clientX;
      }}
      onPointerUp={(event) => {
        if (swipeStartX.current === null) return;
        const dx = event.clientX - swipeStartX.current;
        swipeStartX.current = null;
        if (Math.abs(dx) <= SWIPE_THRESHOLD) return;
        justSwiped.current = true;
        step(dx < 0 ? 1 : -1);
      }}
    >
      <button
        ref={closeRef}
        type="button"
        className={`${control} top-5 right-5 px-[19px]`}
        onClick={onClose}
      >
        Close
      </button>
      <span className="absolute top-5 left-5 inline-flex min-h-11 items-center text-[13px] text-white/70 tabular-nums">
        {index + 1} / {images.length}
      </span>
      <button
        type="button"
        className={`${control} bottom-5 left-1/2 -translate-x-[calc(100%+5px)] text-[1.4rem] sm:top-1/2 sm:bottom-auto sm:left-5 sm:translate-x-0 sm:-translate-y-1/2`}
        onClick={() => step(-1)}
        aria-label="Previous image"
      >
        &lsaquo;
      </button>

      <picture>
        <source srcSet={`/${folder}/${image.name}.webp`} type="image/webp" />
        <img
          key={image.name}
          className="animate-fade-in rounded-media max-h-[80vh] max-w-[90vw] object-contain select-none sm:max-h-[86vh] sm:max-w-[80vw]"
          src={`/${folder}/${image.name}.jpg`}
          alt={imageAlt(images, index, alt)}
          draggable={false}
        />
      </picture>

      <button
        type="button"
        className={`${control} bottom-5 left-1/2 translate-x-[5px] text-[1.4rem] sm:top-1/2 sm:right-5 sm:bottom-auto sm:left-auto sm:translate-x-0 sm:-translate-y-1/2`}
        onClick={() => step(1)}
        aria-label="Next image"
      >
        &rsaquo;
      </button>
    </div>
  );
}
