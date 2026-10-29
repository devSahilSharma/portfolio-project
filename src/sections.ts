// A section of the site whose entries come from a content collection.
export type Section = { id: string; label: string; href: string; entries: readonly unknown[] };

// A section appears only when it has content: no bare heading, no nav link to nothing,
// no "coming soon" placeholder. The nav and the page both render only what this returns.
export function sectionsWithContent<S extends Section>(sections: readonly S[]): S[] {
  return sections.filter((section) => section.entries.length > 0);
}
