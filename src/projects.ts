import { getCollection } from 'astro:content';

// Every Project, in the order of src/content/projects.json, ready to render.
export async function getProjects() {
  const entries = await getCollection('projects');
  return entries.map((entry) => entry.data);
}
