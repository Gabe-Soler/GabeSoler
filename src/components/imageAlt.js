/** Per-image alt text, falling back to the gallery's alt plus the image's position. */
export function imageAlt(images, index, fallback) {
  return images[index].alt ?? `${fallback}, ${index + 1} of ${images.length}`;
}
