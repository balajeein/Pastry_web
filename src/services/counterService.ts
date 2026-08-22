import { CONFIG } from '../config';

const LOCAL_STORAGE_KEY = 'pastry_download_count';

export async function fetchDownloadCount(): Promise<number> {
  try {
    const res = await fetch('/api/download', { method: 'GET' });
    if (res.ok) {
      const data = await res.json();
      if (typeof data.count === 'number') {
        localStorage.setItem(LOCAL_STORAGE_KEY, data.count.toString());
        return data.count;
      }
    }
  } catch (err) {
    console.warn('API fetch unavailable, using client storage fallback:', err);
  }

  // Fallback to localStorage or config seed
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (stored) {
    return parseInt(stored, 10);
  }

  localStorage.setItem(LOCAL_STORAGE_KEY, CONFIG.initialDownloadSeed.toString());
  return CONFIG.initialDownloadSeed;
}

export async function incrementDownloadCount(): Promise<number> {
  try {
    const res = await fetch('/api/download', { method: 'POST' });
    if (res.ok) {
      const data = await res.json();
      if (typeof data.count === 'number') {
        localStorage.setItem(LOCAL_STORAGE_KEY, data.count.toString());
        return data.count;
      }
    }
  } catch (err) {
    console.warn('API increment unavailable, using client storage fallback:', err);
  }

  // Fallback to local storage increment
  const current = await fetchDownloadCount();
  const next = current + 1;
  localStorage.setItem(LOCAL_STORAGE_KEY, next.toString());
  return next;
}
