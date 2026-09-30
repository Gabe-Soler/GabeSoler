import { Hero } from './Hero';
import { MasonryGallery } from './MasonryGallery';
import { Tag } from './Tag';

/** Shared shell for the Design and Photography routes. */
export function GalleryPage({ title, subtitle, unit, images, folder, alt }) {
  return (
    <>
      <Hero title={title} subtitle={subtitle} actions={<Tag>{`${images.length} ${unit}`}</Tag>} />

      <section className="pt-[clamp(26px,5vw,58px)]">
        <div className="wrap">
          <MasonryGallery images={images} folder={folder} alt={alt} />
        </div>
      </section>
    </>
  );
}
