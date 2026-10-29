import { describe, expect, it } from 'vitest';
import { contactLinks } from './contact-links';

describe('contactLinks', () => {
  it('links the email as a mailto: link', () => {
    const links = contactLinks({ email: 'ada@example.com', social: {} });

    expect(links).toEqual([{ label: 'Email', href: 'mailto:ada@example.com' }]);
  });

  it('follows the email with each social profile, in a fixed order', () => {
    const links = contactLinks({
      email: 'ada@example.com',
      social: {
        x: 'https://x.com/ada',
        github: 'https://github.com/ada',
        linkedin: 'https://www.linkedin.com/in/ada',
      },
    });

    expect(links).toEqual([
      { label: 'Email', href: 'mailto:ada@example.com' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ada' },
      { label: 'GitHub', href: 'https://github.com/ada' },
      { label: 'X', href: 'https://x.com/ada' },
    ]);
  });

  it('leaves out a social profile that is not in the data', () => {
    const links = contactLinks({
      email: 'ada@example.com',
      social: { github: 'https://github.com/ada' },
    });

    expect(links).toEqual([
      { label: 'Email', href: 'mailto:ada@example.com' },
      { label: 'GitHub', href: 'https://github.com/ada' },
    ]);
  });
});
