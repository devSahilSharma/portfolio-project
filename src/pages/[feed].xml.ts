import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { pathsIfAny } from '../paths-if-any';
import { feedDescription, feedTitle, getPosts, postHref } from '../posts';
import { getProfile } from '../profile';

// Builds /rss.xml only when there is at least one published Post (see paths-if-any.ts).
export async function getStaticPaths() {
  return pathsIfAny(await getPosts(), { feed: 'rss' });
}

export const GET: APIRoute = async (context) => {
  if (!context.site) throw new Error('Set `site` in astro.config.mjs: the RSS feed needs absolute URLs');
  const profile = await getProfile();
  const posts = await getPosts();
  return rss({
    title: feedTitle(profile.name),
    description: feedDescription(profile.name),
    site: context.site,
    items: posts.map((post) => ({
      title: post.title,
      description: post.description,
      pubDate: post.pubDate,
      link: postHref(post),
    })),
  });
};
