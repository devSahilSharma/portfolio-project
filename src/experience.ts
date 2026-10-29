import { getCollection } from 'astro:content';
import { newestFirst } from './experience-order';

// Every Experience, newest first, ready to render.
export async function getExperiences() {
  const entries = await getCollection('experience');
  for (const entry of entries) {
    // The schema only sees frontmatter, so check the body here to fail the build instead.
    if (!entry.body?.trim()) {
      throw new Error(`Experience "${entry.id}" says nothing about what you did: add a Markdown body`);
    }
  }
  return newestFirst(entries.map((entry) => ({ ...entry.data, entry })));
}
