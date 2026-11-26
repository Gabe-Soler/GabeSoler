import { Item, List, SubList } from '../components/List';
import { Section } from '../components/Section';
import { TextLink } from '../components/TextLink';
import CONTRIBUTIONS from '../data/contributions.json';
import { EXPERIENCE } from '../data/experience';
import { INTERESTS } from '../data/interests';
import { PROJECT_GROUPS, PROJECTS } from '../data/projects';
import { NOW, SITE } from '../site.config';

const muted = 'text-sm';
const date = 'font-mono text-xs';

export function Home() {
  const contributions = CONTRIBUTIONS.days.reduce((sum, day) => sum + day.count, 0);

  return (
    <>
      <Section id="now" title="Currently">
        <List>
          {NOW.map((item) =>
            typeof item === 'string' ? (
              <Item key={item}>{item}</Item>
            ) : (
              <Item key={item.text}>
                {item.text}{' '}
                {item.links.map((link, i) => (
                  <span key={link.href}>
                    {i > 0 && ', '}
                    <TextLink href={link.href}>{link.label}</TextLink>
                  </span>
                ))}
              </Item>
            )
          )}
        </List>
      </Section>

      <Section id="fun" title="On The Side">
        <List>
          <Item>
            <TextLink to="/photography">Photography</TextLink>
          </Item>
          <Item>
            <TextLink to="/design">Graphic Design</TextLink>
          </Item>
        </List>
      </Section>

      <Section id="experience" title="Experience">
        <List className="space-y-5">
          {EXPERIENCE.map((job) => (
            <Job key={`${job.company}-${job.role ?? 'roles'}`} job={job} />
          ))}
        </List>
      </Section>

      {PROJECT_GROUPS.map((group, i) => (
        <Section key={group.id} id={group.id} title={group.title}>
          <List className="space-y-5">
            {PROJECTS.filter((project) => project.group === group.id).map((project) => (
              <Project key={project.title} project={project} />
            ))}
          </List>
          {i === PROJECT_GROUPS.length - 1 && (
            <p className={`${muted} mt-6`}>
              more on <TextLink href={SITE.github}>github</TextLink>
              {contributions > 0 && `: ${contributions.toLocaleString('en-US')} contributions in the last year`}
            </p>
          )}
        </Section>
      ))}

      <Section id="interests" title="Interested In">
        <List>
          {INTERESTS.map((interest) => (
            <Item key={interest.title}>
              {interest.href ? <TextLink href={interest.href}>{interest.title}</TextLink> : interest.title}
            </Item>
          ))}
        </List>
      </Section>
    </>
  );
}

/** One entry's first line: bold title and badge, with the date on its own line under it. */
function Head({ title, badge, date: when }) {
  return (
    <>
      <p className="font-bold">
        {title}
        {badge && <span className="bg-ink text-bg ml-2 px-1 text-xs font-normal whitespace-nowrap">{badge}</span>}
      </p>
      {when && <p className={date}>{when}</p>}
    </>
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
      <div className="mt-2 space-y-3 border-l pl-3">
        {job.roles.map((role) => (
          <div key={role.role}>
            <Head title={role.role} date={role.date} />
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
