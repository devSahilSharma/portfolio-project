type Dated = { start: Date; end?: Date };

// A current Experience (no end date) has not ended, so it sorts as the newest.
const endTime = (entry: Dated) => entry.end?.getTime() ?? Infinity;

const compareDesc = (a: number, b: number) => (a === b ? 0 : a > b ? -1 : 1);

export function newestFirst<T extends Dated>(entries: readonly T[]): T[] {
  return [...entries].sort(
    (a, b) =>
      // Comparing rather than subtracting: two current Experiences would give Infinity - Infinity = NaN.
      compareDesc(endTime(a), endTime(b)) || compareDesc(a.start.getTime(), b.start.getTime()),
  );
}
