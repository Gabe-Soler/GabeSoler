import { Card } from './Card';

// GitHub's five levels in ink, so the graph stays monochrome in both appearances.
const LEVELS = ['bg-line', 'bg-ink/20', 'bg-ink/40', 'bg-ink/70', 'bg-ink'];

// Phones show the most recent half-year so the cells stay legible.
const PHONE_WEEKS = 26;

const dayLabel = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
const monthLabel = new Intl.DateTimeFormat('en-US', { month: 'short', timeZone: 'UTC' });
const utc = (date) => new Date(`${date}T00:00:00Z`);

/** Sunday-first columns of seven days, padded at the front like GitHub's graph. */
function toWeeks(days) {
  const padded = [...Array(utc(days[0].date).getUTCDay()).fill(null), ...days];
  const weeks = [];
  for (let i = 0; i < padded.length; i += 7) weeks.push(padded.slice(i, i + 7));
  return weeks;
}

function streaks(days) {
  let longest = 0;
  let run = 0;
  for (const day of days) {
    run = day.count > 0 ? run + 1 : 0;
    longest = Math.max(longest, run);
  }
  // Today still counts as "in progress", so a quiet today doesn't break the streak.
  let current = 0;
  for (let i = days.at(-1).count > 0 ? days.length - 1 : days.length - 2; i >= 0 && days[i].count > 0; i--) {
    current++;
  }
  return { longest, current };
}

/** GitHub contribution calendar for the last year, from build-time data. */
export function ContributionGraph({ days }) {
  const weeks = toWeeks(days);
  const total = days.reduce((sum, day) => sum + day.count, 0);
  const { longest, current } = streaks(days);

  const stats = [
    { value: total.toLocaleString('en-US'), label: 'Contributions' },
    { value: days.filter((day) => day.count > 0).length, label: 'Active days' },
    { value: longest, label: 'Longest streak (days)' },
    { value: current, label: 'Current streak (days)' },
  ];

  return (
    <Card>
      <div
        role="img"
        aria-label={`${total} GitHub contributions in the last year`}
        className="flex gap-[3px] pt-6"
      >
        {weeks.map((week, w) => {
          const firstOfMonth = week.find((day) => day && utc(day.date).getUTCDate() === 1);
          return (
            <div
              key={w}
              className={`relative flex min-w-0 flex-1 flex-col gap-[3px] ${w < weeks.length - PHONE_WEEKS ? 'max-sm:hidden' : ''}`}
            >
              {firstOfMonth && (
                <span aria-hidden="true" className="text-grey absolute -top-6 left-0 text-[12px] leading-none whitespace-nowrap">
                  {monthLabel.format(utc(firstOfMonth.date))}
                </span>
              )}
              {week.map((day, d) =>
                day ? (
                  <span
                    key={d}
                    title={`${day.count === 0 ? 'No' : day.count} contribution${day.count === 1 ? '' : 's'} on ${dayLabel.format(utc(day.date))}`}
                    className={`block aspect-square rounded-[3px] ${LEVELS[day.level]}`}
                  />
                ) : (
                  <span key={d} className="block aspect-square" />
                )
              )}
            </div>
          );
        })}
      </div>

      <div className="text-grey mt-4 flex items-center justify-end gap-[6px] text-[13px]" aria-hidden="true">
        Less
        {LEVELS.map((level) => (
          <span key={level} className={`size-[11px] rounded-[3px] ${level}`} />
        ))}
        More
      </div>

      <dl className="border-line-soft mt-6 grid grid-cols-2 gap-[18px] border-t pt-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse gap-2">
            <dt className="text-grey text-sm">{stat.label}</dt>
            <dd className="display text-ink text-[clamp(30px,4.6vw,44px)] leading-none font-light tracking-[-0.03em] tabular-nums">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}
