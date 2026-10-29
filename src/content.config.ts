import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
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

export const collections = { profile };
