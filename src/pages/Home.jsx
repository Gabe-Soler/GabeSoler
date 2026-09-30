import { Card } from '../components/Card';
import { Hero } from '../components/Hero';
import { Pill } from '../components/Pill';
import { Section } from '../components/Section';
import { EXPERIENCE } from '../data/experience';
import { PROJECTS } from '../data/projects';
import { SITE } from '../site.config';

const cardHeading = 'display text-ink text-[20px] leading-[1.25] font-medium';
const cardText = 'text-text text-[15px] leading-[1.5]';
const meta = 'text-grey text-sm tabular-nums';

export function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <Hero
        title={
          <>
            Hello, I'm <span className="text-signature">Gabe</span>.
          </>
        }
        subtitle="Queen's Math and Engineering student building AI tools and trading strategies. Joining RBC Capital Markets Sales and Trading in May 2027."
      />

      {/* ── EXPERIENCE ── */}
      <Section id="experience" title="Experience.">
        <div className="flex flex-col gap-4">
          {EXPERIENCE.map((job) => (
            <Card
              as="article"
              key={`${job.company}-${job.role}`}
              className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_1.5fr] md:gap-10"
            >
              <div>
                <h3 className={cardHeading}>{job.role}</h3>
                <p className="text-text mt-1 text-[15px]">{job.company}</p>
                <p className={`${meta} mt-1`}>{job.date}</p>
              </div>
              <p className={cardText}>{job.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── PROJECTS ── */}
      <Section id="projects" title="Selected projects.">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <Card as="article" key={project.title} className="flex flex-col">
              <p className={meta}>{project.tags.join(' · ')}</p>
              <h3 className={`${cardHeading} mt-4 mb-[6px]`}>{project.title}</h3>
              <p className={cardText}>{project.description}</p>

              {(project.footnote || project.link) && (
                // mt-auto pins the divider to the card bottom so paired cards line up.
                <div className="mt-auto pt-4">
                  <div className="border-line-soft flex flex-wrap items-center justify-between gap-3 border-t pt-4">
                    {project.footnote && (
                      <span className="text-grey text-[13px]">{project.footnote}</span>
                    )}
                    {project.link && <Pill href={project.link.href}>{project.link.label}</Pill>}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <Pill href={SITE.github}>All projects on GitHub</Pill>
        </div>
      </Section>

      {/* ── CONTACT ── */}
      <Section id="contact" title="Get in touch.">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <ContactCard label="Email" href={`mailto:${SITE.email}`} value={SITE.email} />
          <ContactCard label="GitHub" href={SITE.github} value="Gabe-soler" />
          <ContactCard label="LinkedIn" href={SITE.linkedin} value="gabriel-soler-gs" />
        </div>
      </Section>
    </>
  );
}

/** The whole card is the link, so the target is the full surface. */
function ContactCard({ label, href, value }) {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      {...(external && { target: '_blank', rel: 'noreferrer' })}
      className="bg-card rounded-card block p-6 transition-colors duration-150 hover:bg-card-hover max-[460px]:rounded-[20px] max-[460px]:p-[18px]"
    >
      <span className="text-grey block text-sm">{label}</span>
      <span className="display text-ink mt-4 block text-[20px] font-medium break-all">{value}</span>
    </a>
  );
}
