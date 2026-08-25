import { Link } from 'react-router-dom';
import { Container } from '../components/Container';

export function NotFound() {
  return (
    <section className="pt-24 pb-16">
      <Container>
        <h1 className="text-ink text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.15] font-normal tracking-[-0.02em]">
          Page not found
        </h1>
        <p className="text-muted mt-4 max-w-[40ch] text-base leading-[1.6]">
          That page doesn&rsquo;t exist — it may have moved or been renamed.
        </p>
        <Link
          to="/"
          className="text-ink transition-smooth relative mt-6 inline-block text-[0.82rem] font-medium after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-300 after:ease-[var(--ease-smooth)] after:content-[''] hover:after:w-full"
        >
          Back home →
        </Link>
      </Container>
    </section>
  );
}
