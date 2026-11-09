import { Hero } from '../components/Hero';
import { TextLink } from '../components/TextLink';

export function NotFound() {
  return (
    <Hero
      title="Page not found."
      subtitle="It may have moved or been renamed. Everything is still one click from home."
      actions={
        <TextLink to="/" variant="primary">
          Back to home
        </TextLink>
      }
    />
  );
}
