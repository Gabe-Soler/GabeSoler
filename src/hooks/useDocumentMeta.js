import { useEffect } from 'react';

/** Keeps <title> and the meta description in sync with the active route. */
export function useDocumentMeta(title, description) {
  useEffect(() => {
    document.title = title;

    const tag = document.querySelector('meta[name="description"]');
    if (tag) tag.setAttribute('content', description);
  }, [title, description]);
}
