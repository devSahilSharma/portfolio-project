import { describe, expect, it } from 'vitest';
import { sectionsWithContent } from './sections';

const experience = { id: 'experience', label: 'Experience', href: '/#experience' };
const projects = { id: 'projects', label: 'Projects', href: '/#projects' };
const writing = { id: 'writing', label: 'Writing', href: '/blog/' };

describe('sectionsWithContent', () => {
  it('leaves out Projects when there are zero Projects', () => {
    const shown = sectionsWithContent([
      { ...experience, entries: [{}] },
      { ...projects, entries: [] },
    ]);

    expect(shown.map((s) => s.id)).toEqual(['experience']);
  });

  it('keeps every section that has content, in page order', () => {
    const shown = sectionsWithContent([
      { ...experience, entries: [{}] },
      { ...projects, entries: [{}, {}] },
    ]);

    expect(shown.map((s) => s.id)).toEqual(['experience', 'projects']);
  });

  it('leaves out Writing (and so its nav link) when there are zero published Posts', () => {
    const shown = sectionsWithContent([
      { ...experience, entries: [{}] },
      { ...writing, entries: [] },
    ]);

    expect(shown.map((s) => s.id)).toEqual(['experience']);
  });

  it('shows nothing when no section has content', () => {
    expect(sectionsWithContent([{ ...experience, entries: [] }, { ...projects, entries: [] }])).toEqual(
      [],
    );
  });
});
