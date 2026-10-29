import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { socialNetworks } from './contact-links';

// The site profile is one object in one file, so it is loaded as a single
// entry with the id `profile`.
const profile = defineCollection({
  loader: file('src/content/profile.json', {
    parser: (text) => ({ profile: JSON.parse(text) }),
  }),
  schema: ({ image }) =>
    z.object({
      name: z.string().min(1),
      headline: z.string().min(1),
      bio: z.string().min(1),
      photo: image(),
      photoAlt: z.string().min(1),
      email: z.email(),
      // Any network may be left out, but a misspelt one fails the build
      // instead of silently dropping the link.
      social: z
        .partialRecord(z.enum(socialNetworks), z.url({ protocol: /^https$/ }))
        .default({}),
    }),
});

// One Markdown file per Experience. The frontmatter holds the facts; the body
// is what the owner did there (a short summary and/or bullets).
const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z
    .object({
      company: z.string().min(1),
      title: z.string().min(1),
      start: z.coerce.date(),
      // Absent means this is a current Experience.
      end: z.coerce.date().optional(),
      stack: z.array(z.string().min(1)).min(1),
    })
    .refine((entry) => !entry.end || entry.end >= entry.start, {
      message: 'end must not be before start',
      path: ['end'],
    }),
});

export const collections = { profile, experience };
