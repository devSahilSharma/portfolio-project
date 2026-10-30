// Each Stack item is drawn as an interchange bullet in one of a fixed set of line colours.
// The colour comes from the item's name, so the same tech gets the same colour everywhere
// (every Experience and Project) without the owner having to assign one.
export const trackColours = ['blue', 'green', 'yellow', 'purple'] as const;

export type TrackColour = (typeof trackColours)[number];

// "React", " react " and "REACT" are the same track.
export function trackKey(label: string): string {
  return label.trim().replace(/\s+/g, ' ').toLowerCase();
}

export function trackColour(label: string): TrackColour {
  // FNV-1a: tiny, stable across builds and machines, and spreads short names well.
  let hash = 0x811c9dc5;
  for (const char of trackKey(label)) {
    hash ^= char.codePointAt(0)!;
    hash = Math.imul(hash, 0x01000193);
  }
  // Finish with a mix (MurmurHash3's fmix32) so the low bits used by the modulo are well spread.
  hash ^= hash >>> 16;
  hash = Math.imul(hash, 0x85ebca6b);
  hash ^= hash >>> 13;
  hash = Math.imul(hash, 0xc2b2ae35);
  hash ^= hash >>> 16;
  return trackColours[(hash >>> 0) % trackColours.length];
}
