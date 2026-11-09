import { Hero } from '../components/Hero';
import { MasonryGallery } from '../components/MasonryGallery';
import { Section } from '../components/Section';
import { Tag } from '../components/Tag';
import { TextLink } from '../components/TextLink';
import { PHOTO_CATEGORIES, PHOTOS, PHOTOS_FOLDER } from '../data/photos';

/** One masonry section per category, with jump links in the hero. */
export function PhotographyPage() {
  return (
    <>
      <Hero
        title="photography"
        subtitle="Cars, landscapes, and cities. Personal work."
        actions={
          <>
            <Tag>{`${PHOTOS.length} photos:`}</Tag>
            {PHOTO_CATEGORIES.map((category) => (
              <TextLink key={category.id} to={`#${category.id}`}>
                {category.title.toLowerCase()}
              </TextLink>
            ))}
          </>
        }
      />

      {PHOTO_CATEGORIES.map((category) => (
        <Section
          key={category.id}
          id={category.id}
          title={category.title.toLowerCase()}
          aside={<Tag>{`${category.photos.length} photos`}</Tag>}
        >
          <MasonryGallery images={category.photos} folder={PHOTOS_FOLDER} alt={category.alt} />
        </Section>
      ))}
    </>
  );
}
