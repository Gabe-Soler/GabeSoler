import { useEffect, useRef, useState } from 'react';

/**
 * Hides the sticky header while scrolling down, reveals it on scroll up.
 * Stays visible until the reader is past `revealAbove` px so the header
 * never flickers away at the top of the page.
 */
export function useHideOnScroll(revealAbove = 80) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > revealAbove);
      lastY.current = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [revealAbove]);

  return hidden;
}
