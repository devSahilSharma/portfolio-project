type Publishable = { pubDate: Date; draft: boolean };

// Drafts are never shown anywhere, so they are dropped here, before any page, feed or nav sees them.
export function publishedNewestFirst<T extends Publishable>(posts: readonly T[]): T[] {
  return posts.filter((post) => !post.draft).sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());
}
