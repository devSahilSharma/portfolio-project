import { getCollection } from 'astro:content';
import { publishedNewestFirst } from './post-order';

// Every published Post, newest first, ready to render. Drafts are left out.
export async function getPosts() {
  const entries = await getCollection('posts');
  return publishedNewestFirst(entries.map((entry) => ({ ...entry.data, entry })));
}

type Post = Awaited<ReturnType<typeof getPosts>>[number];

// Where a Post lives. The index, the feed and the Post page route all agree on this.
export const postSlug = (post: Post) => post.entry.id;
export const postHref = (post: Post) => `/blog/${postSlug(post)}/`;

export const formatPostDate = (date: Date) =>
  date.toLocaleDateString('en-US', { dateStyle: 'long', timeZone: 'UTC' });

// The Writing feed's name and blurb, shared by the feed itself and the pages that link to it.
export const feedTitle = (ownerName: string) => `${ownerName}: Writing`;
export const feedDescription = (ownerName: string) => `Posts by ${ownerName}.`;
