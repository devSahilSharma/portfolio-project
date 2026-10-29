import { describe, expect, it } from 'vitest';
import { newestFirst } from './experience-order';

const date = (iso: string) => new Date(iso);

describe('newestFirst', () => {
  it('puts a current Experience (no end date) above past ones', () => {
    const past = { company: 'Past', start: date('2023-01-01'), end: date('2025-06-01') };
    const current = { company: 'Current', start: date('2020-01-01') };

    expect(newestFirst([past, current]).map((e) => e.company)).toEqual(['Current', 'Past']);
  });

  it('orders past Experiences by most recent end date', () => {
    const oldest = { company: 'Oldest', start: date('2015-01-01'), end: date('2018-01-01') };
    const latest = { company: 'Latest', start: date('2019-01-01'), end: date('2024-03-01') };
    const middle = { company: 'Middle', start: date('2018-02-01'), end: date('2019-01-01') };

    expect(newestFirst([oldest, latest, middle]).map((e) => e.company)).toEqual([
      'Latest',
      'Middle',
      'Oldest',
    ]);
  });

  it('breaks a tie on end date by the more recent start', () => {
    const earlierStart = { company: 'Earlier', start: date('2018-01-01') };
    const laterStart = { company: 'Later', start: date('2022-01-01') };

    expect(newestFirst([earlierStart, laterStart]).map((e) => e.company)).toEqual([
      'Later',
      'Earlier',
    ]);
  });
});
