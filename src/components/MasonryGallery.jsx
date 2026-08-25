import { useState } from 'react';
import { Reveal } from './Reveal';
import { Lightbox } from './Lightbox';

/**
 * CSS-column masonry grid backed by a full-screen viewer.
 * Each cell ships a webp with a jpg fallback and its intrinsic size, so the
 * columns settle into their final layout before the images finish loading.
 */
export function MasonryGallery({ images, folder, alt }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <div className="columns-1 gap-x-4 sm:columns-2 md:columns-3">
        {images.map((image, i) => (
          <Reveal
            as="figure"
            key={image.name}
            className="group relative mb-4 block cursor-pointer overflow-hidden break-inside-avoid"
          >
            <button
              type="button"
              className="block w-full cursor-pointer"
              onClick={() => setOpenIndex(i)}
              aria-label={`Open image ${i + 1} of ${images.length}`}
            >
              <picture>
                <source srcSet={`/${folder}/${image.name}.webp`} type="image/webp" />
                <img
                  src={`/${folder}/${image.name}.jpg`}
                  alt={alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  decoding="async"
                  className="block w-full transition-[transform,filter] duration-500 ease-[var(--ease-smooth)] group-hover:scale-[1.02] group-hover:brightness-[0.92]"
                />
              </picture>
            </button>
          </Reveal>
        ))}
      </div>

      <Lightbox
        images={images}
        folder={folder}
        alt={alt}
        index={openIndex}
        onChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
      />
    </>
  );
}
