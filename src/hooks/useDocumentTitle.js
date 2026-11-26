import { useEffect } from 'react';

/** Keeps <title> in sync with the active route. */
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
