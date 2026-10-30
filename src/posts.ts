import { getCollection } from 'astro:content';
import { publishedNewestFirst } from './post-order';

// Every published Post, newest first, ready to render. Drafts are left out.
export async function getPosts() {
  const entries = await getCollection('posts');
  return publishedNewestFirst(entries.map((entry) => ({ ...entry.data, entry })));
}
