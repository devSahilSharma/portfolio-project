import { describe, expect, it } from 'vitest';
import { personJsonLd, toScriptJson } from './person-json-ld';

const site = new URL('https://ada.dev');

describe('personJsonLd', () => {
  it('describes the owner as a schema.org Person, linking every social profile', () => {
    const jsonLd = personJsonLd(
      {
        name: 'Ada Lovelace',
        jobTitle: 'Software Engineer',
        social: {
          x: 'https://x.com/ada',
          linkedin: 'https://www.linkedin.com/in/ada',
          github: 'https://github.com/ada',
        },
      },
      site,
    );

    expect(jsonLd).toEqual({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Ada Lovelace',
      jobTitle: 'Software Engineer',
      url: 'https://ada.dev/',
      sameAs: ['https://www.linkedin.com/in/ada', 'https://github.com/ada', 'https://x.com/ada'],
    });
  });

  it('lists only the social profiles that are present', () => {
    const jsonLd = personJsonLd(
      { name: 'Ada', jobTitle: 'Engineer', social: { github: 'https://github.com/ada' } },
      site,
    );

    expect(jsonLd.sameAs).toEqual(['https://github.com/ada']);
  });

  it('leaves out sameAs when there are no social profiles', () => {
    const jsonLd = personJsonLd({ name: 'Ada', jobTitle: 'Engineer', social: {} }, site);

    expect(jsonLd).not.toHaveProperty('sameAs');
  });
});

describe('toScriptJson', () => {
  it('escapes "<" so profile text cannot close the script element', () => {
    const json = toScriptJson({ name: 'Ada </script><script>alert(1)</script>' });

    expect(json).not.toContain('<');
    expect(JSON.parse(json)).toEqual({ name: 'Ada </script><script>alert(1)</script>' });
  });
});
