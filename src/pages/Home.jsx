import { Item, List, SubList } from '../components/List';
import { RecentRepos } from '../components/RecentRepos';
import { Section } from '../components/Section';
import { TextLink } from '../components/TextLink';
import CONTRIBUTIONS from '../data/contributions.json';
import { EXPERIENCE } from '../data/experience';
import { PROJECTS } from '../data/projects';
import REPOS from '../data/repos.json';
import { NOW, SITE } from '../site.config';

const muted = 'text-grey text-sm';

export function Home() {
  const contributions = CONTRIBUTIONS.days.reduce((sum, day) => sum + day.count, 0);

  return (
    <>
      <Section id="now" title="what I'm up to">
        <List>
          {NOW.map((item) => (
            <Item key={item}>{item}</Item>
          ))}
        </List>
      </Section>

      <Section id="experience" title="experience">
        <List className="space-y-4">
          {EXPERIENCE.map((job) => (
            <Item key={`${job.company}-${job.role}`}>
              <p>
                {job.role} @ {job.company} <span className={`${muted} whitespace-nowrap`}>— {job.date}</span>
              </p>
              <SubList items={job.points} />
            </Item>
          ))}
        </List>
      </Section>

      <Section id="projects" title="key projects">
        <List className="space-y-4">
          {PROJECTS.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </List>
        <p className={`${muted} mt-6 italic`}>
          more on <TextLink href={SITE.github}>github</TextLink>
          {contributions > 0 && `: ${contributions.toLocaleString('en-US')} contributions in the last year`}
        </p>
      </Section>

      {REPOS.repos.length > 0 && (
        <Section id="github" title="recently on github">
          <RecentRepos repos={REPOS.repos} />
        </Section>
      )}
    </>
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
