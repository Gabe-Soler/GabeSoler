import { useState } from 'react';
import { Lightbox } from './Lightbox';
import { imageAlt } from './imageAlt';

/**
 * CSS-column masonry grid backed by a full-screen viewer.
 * Each cell ships a webp with a jpg fallback and its intrinsic size, so the
 * columns settle into their final layout before the images finish loading.
 */
export function MasonryGallery({ images, folder, alt }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <div className="columns-1 gap-x-3 sm:columns-2">
        {images.map((image, i) => (
          <figure key={image.name} className="mb-3 break-inside-avoid">
            <button
              type="button"
              className="block w-full cursor-pointer"
              onClick={() => setOpenIndex(i)}
            >
              <picture>
                <source srcSet={`/${folder}/${image.name}.webp`} type="image/webp" />
                <img
                  src={`/${folder}/${image.name}.jpg`}
                  alt={imageAlt(images, i, alt)}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  decoding="async"
                  className="block w-full"
                />
              </picture>
            </button>
          </figure>
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
