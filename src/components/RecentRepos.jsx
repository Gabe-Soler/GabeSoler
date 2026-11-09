import { Item, List } from './List';
import { TextLink } from './TextLink';

const relative = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
const UNITS = [
  ['year', 365 * 24 * 3600],
  ['month', 30 * 24 * 3600],
  ['week', 7 * 24 * 3600],
  ['day', 24 * 3600],
  ['hour', 3600],
];

/** "3 days ago", from an ISO timestamp. */
function ago(iso) {
  const seconds = (new Date(iso).getTime() - Date.now()) / 1000;
  for (const [unit, size] of UNITS) {
    if (Math.abs(seconds) >= size) return relative.format(Math.round(seconds / size), unit);
  }
  return 'just now';
}

/** The most recently pushed public repos (build-time data): name, description, then language and last push. */
export function RecentRepos({ repos }) {
  return (
    <List className="space-y-3">
      {repos.map((repo) => (
        <Item key={repo.name}>
          <p>
            <TextLink href={repo.url} className="font-mono text-[15px]">
              {repo.name}
            </TextLink>{' '}
            <span className="text-grey text-sm">— {repo.description}</span>
          </p>
          <p className="text-grey mt-0.5 font-mono text-xs">
            {[repo.language?.toLowerCase(), repo.stars > 0 && `★ ${repo.stars}`, `pushed ${ago(repo.pushedAt)}`]
              .filter(Boolean)
              .join(' · ')}
          </p>
        </Item>
      ))}
    </List>
  );
}
