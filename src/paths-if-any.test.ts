import { describe, expect, it } from 'vitest';
import { pathsIfAny } from './paths-if-any';

describe('pathsIfAny', () => {
  it('builds no page when there are zero Posts', () => {
    expect(pathsIfAny([], { index: undefined })).toEqual([]);
  });

  it('builds the one page when there is at least one Post', () => {
    expect(pathsIfAny([{ title: 'Hello' }], { index: undefined })).toEqual([
      { params: { index: undefined } },
    ]);
  });
});
