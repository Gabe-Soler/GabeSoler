import { GalleryPage } from '../components/GalleryPage';
import { PHOTOS, PHOTOS_ALT, PHOTOS_FOLDER } from '../data/photos';

export function PhotographyPage() {
  return (
    <GalleryPage
      title="Photography."
      subtitle="Cars, detail, and light. Personal work."
      unit="photographs"
      images={PHOTOS}
      folder={PHOTOS_FOLDER}
      alt={PHOTOS_ALT}
    />
  );
}
