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
      // Used in structured data, where the headline is too long to be a job title.
      jobTitle: z.string().min(1),
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

// Projects are one JSON object keyed by id; the order in the file is the order on the page.
const projects = defineCollection({
  loader: file('src/content/projects.json'),
  schema: z
    .object({
      name: z.string().min(1),
      description: z.string().min(1),
      stack: z.array(z.string().min(1)).min(1),
      // A path such as "/" is a demo on this site, so it follows the site URL set in astro.config.mjs.
      demo: z
        .union([z.url({ protocol: /^https$/ }), z.string().regex(/^\/(?!\/)/, 'must start with a single "/"')])
        .optional(),
      source: z.url({ protocol: /^https$/ }).optional(),
    })
    // A Project is something a visitor can open themselves.
    .refine((entry) => entry.demo || entry.source, {
      message: 'a Project needs a demo link, a source link, or both',
      path: ['demo'],
    }),
});

// One Markdown file per Post; the file name is its slug, so it lives at /blog/<file name>.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // A draft is never built: not in the index, the RSS feed or the sitemap.
    draft: z.boolean().default(false),
  }),
});

export const collections = { profile, experience, projects, posts };
