import { GalleryPage } from '../components/GalleryPage';
import { DESIGNS, DESIGNS_ALT, DESIGNS_FOLDER } from '../data/designs';

export function DesignPage() {
  return (
    <GalleryPage
      title="Graphic Design"
      subtitle="Selected work in branding, typography, and digital art."
      images={DESIGNS}
      folder={DESIGNS_FOLDER}
      alt={DESIGNS_ALT}
    />
  );
}
