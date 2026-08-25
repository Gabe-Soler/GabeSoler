import { Link } from 'react-router-dom';
import { BrandMark, BRAND_FOOTER } from '../components/BrandMark';
import { Container } from '../components/Container';
import { Reveal } from '../components/Reveal';
import { Tag, SkillTag } from '../components/Tag';
import { Label, LabelMuted, DetailLabel } from '../components/Label';
import { EXPERIENCE } from '../data/experience';
import { PROJECTS } from '../data/projects';
import { EDUCATION, SITE, SKILLS } from '../site.config';

const arrowLink = 'text-muted transition-smooth hover:text-ink text-[0.82rem] whitespace-nowrap';

export function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <Reveal as="section" className="pt-14 pb-12 sm:pt-24 sm:pb-20">
        <Container>
          <p className="text-muted max-w-[52rem] text-[clamp(1.6rem,3.2vw,2.8rem)] leading-[1.35] font-normal tracking-[-0.01em]">
            <strong className="text-ink font-normal">
              Queen's Math and Engineering student focused on AI and Trading.
            </strong>
          </p>
        </Container>
      </Reveal>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-16">
        <Container>
          <div className="pb-8">
            <Label>Experience</Label>
          </div>

          {EXPERIENCE.map((job) => (
            <Reveal
              as="article"
              key={`${job.company}-${job.role}`}
              className="grid grid-cols-1 gap-4 py-8 md:grid-cols-[1fr_1.5fr] md:gap-12"
            >
              <div>
                <h3 className="text-ink text-base leading-[1.4] font-medium">{job.role}</h3>
                <span className="text-muted mt-1 block text-[0.85rem]">{job.company}</span>
                <span className="text-light mt-2 block text-[0.78rem] tracking-[0.05em] uppercase">
                  {job.date}
                </span>
              </div>
              <p className="text-muted text-[0.9rem] leading-[1.7]">{job.description}</p>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section id="projects" className="pt-12">
        <Container>
          <div className="flex flex-col items-start gap-4 pb-8 sm:flex-row sm:items-end sm:justify-between sm:gap-0">
            <div className="flex flex-col gap-1">
              <Label>Featured Projects</Label>
              <LabelMuted>2024 – 2026</LabelMuted>
            </div>
            <div className="flex gap-10">
              <Link to="/#projects" className={arrowLink}>
                Check all projects →
              </Link>
              <Link to="/#contact" className={arrowLink}>
                Contact Me →
              </Link>
            </div>
          </div>

          {PROJECTS.map((project) => (
            <Reveal
              as="article"
              key={project.title}
              className="hover:bg-bg-white transition-smooth py-8"
            >
              <div className="mb-4 flex flex-col items-start gap-2 sm:flex-row sm:justify-between sm:gap-4">
                <h2 className="text-ink text-[clamp(1.3rem,2.5vw,1.8rem)] leading-[1.2] font-normal tracking-[-0.01em]">
                  {project.title}
                </h2>
                <div className="flex shrink-0 gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>

              <p className="text-muted max-w-[60ch] text-[0.9rem] leading-[1.7]">
                {project.description}
              </p>

              {project.footnote && (
                <span className="text-light mt-3 block text-[0.78rem] tracking-[0.05em] uppercase">
                  {project.footnote}
                </span>
              )}

              {project.link && (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink transition-smooth relative mt-3 inline-block text-[0.82rem] font-medium after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-current after:transition-[width] after:duration-300 after:ease-[var(--ease-smooth)] after:content-[''] hover:after:w-full"
                >
                  {project.link.label}
                </a>
              )}
            </Reveal>
          ))}
        </Container>
      </section>

      {/* ── ABOUT ── */}
      <Reveal as="section" id="about" className="pt-24 pb-16">
        <Container>
          <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col gap-3">
              <DetailLabel>Education</DetailLabel>
              <span className="text-muted text-[0.9rem] leading-[1.6]">{EDUCATION}</span>
            </div>
            <div className="flex flex-col gap-3">
              <DetailLabel>Skills</DetailLabel>
              <div className="flex flex-wrap gap-[0.4rem]">
                {SKILLS.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Reveal>

      {/* ── CONTACT ── */}
      <Reveal as="section" id="contact" className="py-16">
        <Container>
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[auto_1fr] md:gap-16">
            {/* The wrapper keeps the link inline, so its line boxes pick up the
                parent's line-height strut exactly as the original markup did. */}
            <div>
              <BrandMark size={BRAND_FOOTER} />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
              <div className="flex flex-col gap-2">
                <DetailLabel>Email</DetailLabel>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-muted transition-smooth text-[0.85rem] hover:text-ink"
                >
                  {SITE.email}
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <DetailLabel>Social</DetailLabel>
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted transition-smooth text-[0.85rem] hover:text-ink"
                >
                  GitHub →
                </a>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted transition-smooth text-[0.85rem] hover:text-ink"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Reveal>
    </>
  );
}
