import { useEffect } from 'react';

/** Freezes page scroll behind an overlay while `locked` is true. */
export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [locked]);
}
