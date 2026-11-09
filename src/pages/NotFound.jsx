import { Hero } from '../components/Hero';
import { TextLink } from '../components/TextLink';

export function NotFound() {
  return (
    <Hero
      title="page not found"
      subtitle="It may have moved or been renamed. Everything is still one click from home."
      actions={
        <TextLink to="/">back to home</TextLink>
      }
    />
  );
}
