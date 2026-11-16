import { Item, List, SubList } from '../components/List';
import { Section } from '../components/Section';
import { TextLink } from '../components/TextLink';
import CONTRIBUTIONS from '../data/contributions.json';
import { EXPERIENCE } from '../data/experience';
import { PROJECT_GROUPS, PROJECTS } from '../data/projects';
import { NOW, SITE } from '../site.config';

const muted = 'text-grey text-sm';

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
            <TextLink to="/photography">Photography</TextLink> <span className={muted}>— cars, landscapes, and cities</span>
          </Item>
          <Item>
            <TextLink to="/design">Graphic Design</TextLink> <span className={muted}>— posters, branding, and type</span>
          </Item>
        </List>
      </Section>

      <Section id="experience" title="Experience">
        <List className="space-y-4">
          {EXPERIENCE.map((job) => (
            <Job key={`${job.company}-${job.role ?? 'roles'}`} job={job} />
          ))}
        </List>
      </Section>

      <Section id="projects" title="Projects">
        <div className="space-y-6">
          {PROJECT_GROUPS.map((group) => (
            <div key={group.id}>
              <h3 className="text-ink mb-3 font-medium">{group.title}</h3>
              <List className="ml-4 space-y-4">
                {PROJECTS.filter((project) => project.group === group.id).map((project) => (
                  <Project key={project.title} project={project} />
                ))}
              </List>
            </div>
          ))}
        </div>
        <p className={`${muted} mt-6 italic`}>
          more on <TextLink href={SITE.github}>github</TextLink>
          {contributions > 0 && `: ${contributions.toLocaleString('en-US')} contributions in the last year`}
        </p>
      </Section>
    </>
  );
}

/** "> role @ company — date" and its points, or one company block with each role under it. */
function Job({ job }) {
  if (!job.roles) {
    return (
      <Item>
        <p>
          {job.role} @ {job.company} <span className={`${muted} whitespace-nowrap`}>— {job.date}</span>
        </p>
        <SubList items={job.points} />
      </Item>
    );
  }

  return (
    <Item>
      <p>
        {job.company} <span className={`${muted} whitespace-nowrap`}>— {job.date}</span>
      </p>
      <div className="mt-2 ml-4 space-y-3 border-l border-line pl-4">
        {job.roles.map((role) => (
          <div key={role.role}>
            <p className="text-[15px]">
              {role.role} <span className={`${muted} whitespace-nowrap`}>— {role.date}</span>
            </p>
            <SubList items={role.points} />
          </div>
        ))}
      </div>
    </Item>
  );
}

/** "> title — summary", then the points, then any links on a line of their own. */
function Project({ project }) {
  const links = project.links?.map((link, i) => (
    <span key={link.href}>
      {i > 0 && ' · '}
      <TextLink href={link.href}>{link.label}</TextLink>
    </span>
  ));

  return (
    <Item>
      <p>
        {project.href ? <TextLink href={project.href}>{project.title}</TextLink> : project.title}{' '}
        <span className={muted}>— {project.summary}</span>
      </p>
      <SubList items={links ? [...project.points, links] : project.points} />
    </Item>
  );
}
