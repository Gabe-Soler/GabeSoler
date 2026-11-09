import { ContributionGraph } from '../components/ContributionGraph';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { Tag } from '../components/Tag';
import { TextLink } from '../components/TextLink';
import CONTRIBUTIONS from '../data/contributions.json';
import { EXPERIENCE } from '../data/experience';
import { PROJECTS } from '../data/projects';
import { SITE } from '../site.config';

const entryList = 'flex flex-col gap-10 md:gap-14';
const entry = 'grid grid-cols-1 gap-3 md:grid-cols-[1fr_1.5fr] md:gap-10';
const entryHeading = 'display text-ink text-[20px] leading-[1.25] font-medium';
const entryText = 'text-text text-[15px] leading-[1.5]';
const meta = 'text-grey text-sm tabular-nums';

export function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <Hero
        title="Hey, I'm Gabe."
        subtitle="Queen's Mathematics and Engineering Student."
        media={
          <picture className="shrink-0">
            <source srcSet="/headshot.webp" type="image/webp" />
            <img
              src="/headshot.jpg"
              alt="Portrait of Gabriel Soler"
              width={560}
              height={560}
              fetchPriority="high"
              className="block size-[clamp(96px,22vw,240px)] [mask-image:linear-gradient(to_bottom,black_72%,transparent)]"
            />
          </picture>
        }
      />

      {/* ── EXPERIENCE ── */}
      <Section id="experience" title="Experience.">
        <div className={entryList}>
          {EXPERIENCE.map((job) => (
            <article key={`${job.company}-${job.role}`} className={entry}>
              <div>
                <h3 className={entryHeading}>{job.role}</h3>
                <p className="text-text mt-1 text-[15px]">{job.company}</p>
                <p className={`${meta} mt-1`}>{job.date}</p>
              </div>
              <p className={entryText}>{job.description}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* ── PROJECTS ── */}
      <Section id="projects" title="Selected projects.">
        <div className={entryList}>
          {PROJECTS.map((project) => (
            <article key={project.title} className={entry}>
              <div>
                <h3 className={entryHeading}>{project.title}</h3>
                {project.footnote && (
                  <p className="text-text mt-1 text-[15px]">{project.footnote}</p>
                )}
                <p className={`${meta} mt-1`}>{project.tags.join(' · ')}</p>
              </div>
              <div>
                <p className={entryText}>{project.description}</p>
                {project.links && (
                  <div className="mt-2 flex flex-wrap gap-x-6">
                    {project.links.map((link) => (
                      <TextLink key={link.href} href={link.href}>
                        {link.label}
                      </TextLink>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <TextLink href={SITE.github}>All projects on GitHub</TextLink>
        </div>
      </Section>

      {/* ── GITHUB ── */}
      {CONTRIBUTIONS.days.length > 0 && (
        <Section id="github" title="On GitHub." aside={<Tag>Last 12 months</Tag>}>
          <ContributionGraph days={CONTRIBUTIONS.days} />
        </Section>
      )}

      {/* ── CONTACT ── */}
      <Section id="contact" title="Get in touch.">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <ContactItem label="Email" href={`mailto:${SITE.email}`} value={SITE.email} />
          <ContactItem label="GitHub" href={SITE.github} value="Gabe-soler" />
          <ContactItem label="LinkedIn" href={SITE.linkedin} value="gabriel-soler-gs" />
        </div>
      </Section>
    </>
  );
}

/** A label over a link, as plain text. */
function ContactItem({ label, href, value }) {
  const external = href.startsWith('http');
  return (
    <div>
      <span className="text-grey block text-sm">{label}</span>
      <a
        href={href}
        {...(external && { target: '_blank', rel: 'noreferrer' })}
        className="display text-ink decoration-line-hover mt-2 inline-block text-[20px] font-medium break-all underline decoration-1 underline-offset-4 transition-colors duration-150 hover:decoration-current"
      >
        {value}
      </a>
    </div>
  );
}
