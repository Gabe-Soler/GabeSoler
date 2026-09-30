import { Hero } from '../components/Hero';
import { Pill } from '../components/Pill';

export function NotFound() {
  return (
    <Hero
      title="Page not found."
      subtitle="It may have moved or been renamed. Everything is still one click from home."
      actions={
        <Pill to="/" variant="primary">
          Back to home
        </Pill>
      }
    />
  );
}
