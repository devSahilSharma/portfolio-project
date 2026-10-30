// A fixed page (such as /blog or /rss.xml) is always built in Astro, so a page that should
// exist only when it has content is written as a dynamic route that returns this from
// getStaticPaths: one page when there are entries, none when there are zero.
export function pathsIfAny<P extends Record<string, string | undefined>>(
  entries: readonly unknown[],
  params: P,
): { params: P }[] {
  return entries.length > 0 ? [{ params }] : [];
}
