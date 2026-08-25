import { Container } from './Container';
import { MasonryGallery } from './MasonryGallery';

/** Shared shell for the Design and Photography routes. */
export function GalleryPage({ title, subtitle, images, folder, alt }) {
  return (
    <>
      <section className="pt-12 pb-8 sm:pt-20 sm:pb-12">
        <Container>
          <h1 className="text-ink text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.15] font-normal tracking-[-0.02em]">
            {title}
          </h1>
          <p className="text-muted mt-4 max-w-[40ch] text-base leading-[1.6]">{subtitle}</p>
        </Container>
      </section>

      <section className="pt-8 pb-16">
        <Container>
          <MasonryGallery images={images} folder={folder} alt={alt} />
        </Container>
      </section>
    </>
  );
}
