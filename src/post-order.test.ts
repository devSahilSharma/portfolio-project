import { describe, expect, it } from 'vitest';
import { publishedNewestFirst } from './post-order';

const post = (title: string, pubDate: string, draft = false) => ({
  title,
  pubDate: new Date(pubDate),
  draft,
});

describe('publishedNewestFirst', () => {
  it('orders Posts by most recent publish date', () => {
    const posts = [post('Old', '2024-01-01'), post('New', '2026-05-01'), post('Middle', '2025-03-01')];

    expect(publishedNewestFirst(posts).map((p) => p.title)).toEqual(['New', 'Middle', 'Old']);
  });

  it('leaves out draft Posts', () => {
    const posts = [post('Published', '2025-01-01'), post('Draft', '2026-01-01', true)];

    expect(publishedNewestFirst(posts).map((p) => p.title)).toEqual(['Published']);
  });

  it('gives nothing when every Post is a draft', () => {
    expect(publishedNewestFirst([post('Draft', '2026-01-01', true)])).toEqual([]);
  });
});
