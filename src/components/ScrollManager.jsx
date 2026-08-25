import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * React Router does not restore scroll on its own. Land on the hash target
 * when there is one, otherwise start a new route at the top.
 */
export function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash, key]);

  return null;
}
