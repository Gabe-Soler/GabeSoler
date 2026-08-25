import { useEffect, useState } from 'react';

/**
 * Tracks which of `ids` is the section currently in view, for nav highlighting.
 * Returns the active id, or null when none qualifies (e.g. on a non-home route).
 *
 * `resetKey` re-runs the lookup — pass the current route, since the sections
 * only exist on some of them and are remounted on every navigation.
 */
export function useActiveSection(ids, resetKey) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) {
      setActive(null);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: '-10% 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids, resetKey]);

  return active;
}
