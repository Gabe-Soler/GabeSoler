import { GalleryPage } from '../components/GalleryPage';
import { DESIGNS, DESIGNS_ALT, DESIGNS_FOLDER } from '../data/designs';

export function DesignPage() {
  return (
    <GalleryPage
      title="Graphic design."
      subtitle="Posters, branding, and type. The FusionFrame and CTRL X series."
      unit="pieces"
      images={DESIGNS}
      folder={DESIGNS_FOLDER}
      alt={DESIGNS_ALT}
    />
  );
}
