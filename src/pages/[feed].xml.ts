import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { pathsIfAny } from '../paths-if-any';
import { getPosts } from '../posts';
import { getProfile } from '../profile';

// Builds /rss.xml only when there is at least one published Post (see paths-if-any.ts).
export async function getStaticPaths() {
  return pathsIfAny(await getPosts(), { feed: 'rss' });
}

export const GET: APIRoute = async (context) => {
  const profile = await getProfile();
  const posts = await getPosts();
  return rss({
    title: `${profile.name}: Writing`,
    description: `Posts by ${profile.name}.`,
    // `site` is always set in astro.config.mjs.
    site: context.site!,
    items: posts.map((post) => ({
      title: post.title,
      description: post.description,
      pubDate: post.pubDate,
      link: `/blog/${post.entry.id}/`,
    })),
  });
};
