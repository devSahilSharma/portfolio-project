import { getEntry } from 'astro:content';

// The single source for the Intro, Contact links, page metadata and structured data.
export async function getProfile() {
  const entry = await getEntry('profile', 'profile');
  // The file loader only logs when src/content/profile.json is missing; fail the build instead.
  if (!entry) throw new Error('Site profile not found: add src/content/profile.json');
  return entry.data;
}
