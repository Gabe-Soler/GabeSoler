import { GalleryPage } from '../components/GalleryPage';
import { PHOTOS, PHOTOS_ALT, PHOTOS_FOLDER } from '../data/photos';

export function PhotographyPage() {
  return (
    <GalleryPage
      title="Photography"
      subtitle="A curated collection of personal work — landscapes, architecture, moments, and light."
      images={PHOTOS}
      folder={PHOTOS_FOLDER}
      alt={PHOTOS_ALT}
    />
  );
}
