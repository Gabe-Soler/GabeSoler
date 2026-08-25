import { useEffect, useState } from 'react';

const format = () => {
  const now = new Date();
  const hours = now.getHours() % 12 || 12;
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes} ${now.getHours() >= 12 ? 'PM' : 'AM'}`;
};

/** Viewer-local wall clock, refreshed every 30s. */
export function useLiveClock() {
  const [time, setTime] = useState(format);

  useEffect(() => {
    const id = setInterval(() => setTime(format()), 30000);
    return () => clearInterval(id);
  }, []);

  return time;
}
