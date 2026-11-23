import { Item, List, SubList } from '../components/List';
import { Section } from '../components/Section';
import { TextLink } from '../components/TextLink';
import CONTRIBUTIONS from '../data/contributions.json';
import { EXPERIENCE } from '../data/experience';
import { PAPERS } from '../data/papers';
import { PROJECT_GROUPS, PROJECTS } from '../data/projects';
import { NOW, SITE } from '../site.config';

const muted = 'text-grey text-sm';
const date = 'text-grey shrink-0 font-mono text-xs whitespace-nowrap';

export function Home() {
  const contributions = CONTRIBUTIONS.days.reduce((sum, day) => sum + day.count, 0);

  return (
    <>
      <Section id="now" title="What I'm Up To">
        <List>
          {NOW.map((item) => (
            <Item key={item}>{item}</Item>
          ))}
        </List>
      </Section>

      <Section id="fun" title="On The Side">
        <List>
          <Item>
            <TextLink to="/photography">Photography</TextLink> <span className={muted}>· cars, landscapes, and cities</span>
          </Item>
          <Item>
            <TextLink to="/design">Graphic Design</TextLink> <span className={muted}>· posters, branding, and type</span>
          </Item>
        </List>
      </Section>

      <Section id="experience" title="Experience">
        <List className="space-y-6">
          {EXPERIENCE.map((job) => (
            <Job key={`${job.company}-${job.role ?? 'roles'}`} job={job} />
          ))}
        </List>
      </Section>

      <Section id="projects" title="Projects">
        <div className="space-y-8">
          {PROJECT_GROUPS.map((group) => (
            <div key={group.id}>
              <h3 className="text-grey mb-3 text-sm font-medium">{group.title}</h3>
              <List className="ml-4 space-y-6">
                {PROJECTS.filter((project) => project.group === group.id).map((project) => (
                  <Project key={project.title} project={project} />
                ))}
              </List>
            </div>
          ))}
        </div>
        <p className={`${muted} mt-8`}>
          more on <TextLink href={SITE.github}>github</TextLink>
          {contributions > 0 && `: ${contributions.toLocaleString('en-US')} contributions in the last year`}
        </p>
      </Section>

      <Section id="reading" title="Currently Reading">
        <List className="space-y-3">
          {PAPERS.map((paper) => (
            <Item key={paper.href}>
              <Head title={<TextLink href={paper.href}>{paper.title}</TextLink>} date={paper.year} />
              <p className={muted}>{paper.authors}</p>
            </Item>
          ))}
        </List>
      </Section>
    </>
  );
}

/** One entry's first line: title (and badge) on the left, date on the right. On phones the date sits under it. */
function Head({ title, badge, date: when, className = '' }) {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-x-4 ${className}`}>
      <p className="min-w-0">
        {title}
        {badge && (
          <span className="bg-ink text-bg ml-2 inline-block rounded-[3px] px-1.5 py-px align-[1px] text-xs leading-[1.4] font-medium whitespace-nowrap">
            {badge}
          </span>
        )}
      </p>
      {when && <span className={date}>{when}</span>}
    </div>
  );
}

/** A single role (role, then company) or a company block with each role under it, LinkedIn style. */
function Job({ job }) {
  if (!job.roles) {
    return (
      <Item>
        <Head title={job.role} date={job.date} />
        <p className={muted}>{job.company}</p>
        <SubList items={job.points} />
      </Item>
    );
  }

  return (
    <Item>
      <Head title={job.company} date={job.date} />
      <div className="border-line mt-2 space-y-4 border-l pl-4">
        {job.roles.map((role) => (
          <div key={role.role}>
            <Head title={<span className="text-[15px]">{role.role}</span>} date={role.date} />
            <SubList items={role.points} />
          </div>
        ))}
      </div>
    </Item>
  );
}

/** Title, placement and date, then the one-line summary, the points, and any links. */
function Project({ project }) {
  const links = project.links?.map((link, i) => (
    <span key={link.href}>
      {i > 0 && ' · '}
      <TextLink href={link.href}>{link.label}</TextLink>
    </span>
  ));

  return (
    <Item>
      <Head
        title={project.href ? <TextLink href={project.href}>{project.title}</TextLink> : project.title}
        badge={project.placement}
        date={project.date}
      />
      {project.summary && <p className={muted}>{project.summary}</p>}
      {(project.points.length > 0 || links) && (
        <SubList items={links ? [...project.points, links] : project.points} />
      )}
    </Item>
  );
}
