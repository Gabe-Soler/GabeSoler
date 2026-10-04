import { Hero } from '../components/Hero';
import { MasonryGallery } from '../components/MasonryGallery';
import { Pill } from '../components/Pill';
import { Section } from '../components/Section';
import { Tag } from '../components/Tag';
import { PHOTO_CATEGORIES, PHOTOS, PHOTOS_FOLDER } from '../data/photos';

/** One masonry section per category, with jump links in the hero. */
export function PhotographyPage() {
  return (
    <>
      <Hero
        title="Photography."
        subtitle="Cars, landscapes, and cities. Personal work."
        actions={
          <>
            <Tag>{`${PHOTOS.length} photographs`}</Tag>
            {PHOTO_CATEGORIES.map((category) => (
              <Pill key={category.id} to={`#${category.id}`}>
                {category.title}
              </Pill>
            ))}
          </>
        }
      />

      {PHOTO_CATEGORIES.map((category) => (
        <Section
          key={category.id}
          id={category.id}
          title={`${category.title}.`}
          aside={<Tag>{`${category.photos.length} photographs`}</Tag>}
        >
          <MasonryGallery images={category.photos} folder={PHOTOS_FOLDER} alt={category.alt} />
        </Section>
      ))}
    </>
  );
}
