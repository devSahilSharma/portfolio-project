import { describe, expect, it } from 'vitest';
import { trackColour, trackColours, trackKey } from './stack-tracks';

describe('trackKey', () => {
  it('treats case and stray whitespace as the same Stack item', () => {
    expect(trackKey('  Node.js ')).toBe(trackKey('node.js'));
    expect(trackKey('Next  JS')).toBe('next js');
  });

  it('keeps items apart that differ only in symbols', () => {
    expect(trackKey('C#')).not.toBe(trackKey('C++'));
  });
});

describe('trackColour', () => {
  it('gives the same Stack item the same colour wherever it appears', () => {
    expect(trackColour('TypeScript')).toBe(trackColour(' typescript'));
  });

  it('always picks one of the line colours', () => {
    for (const label of ['Astro', 'React', 'PostgreSQL', 'Go', 'Rust', 'Docker', 'AWS']) {
      expect(trackColours).toContain(trackColour(label));
    }
  });

  it('spreads common Stack items over all four colours', () => {
    const common = ['Astro', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Go', 'Python', 'Docker', 'AWS'];
    expect(new Set(common.map(trackColour)).size).toBe(trackColours.length);
  });
});
