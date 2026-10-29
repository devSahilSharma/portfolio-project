export const socialNetworks = ['linkedin', 'github', 'x'] as const;

export type SocialNetwork = (typeof socialNetworks)[number];

export type ContactLink = { label: string; href: string };

const socialLabels: Record<SocialNetwork, string> = {
  linkedin: 'LinkedIn',
  github: 'GitHub',
  x: 'X',
};

export function contactLinks(profile: {
  email: string;
  social: Partial<Record<SocialNetwork, string>>;
}): ContactLink[] {
  const links: ContactLink[] = [{ label: 'Email', href: `mailto:${profile.email}` }];
  for (const network of socialNetworks) {
    const url = profile.social[network];
    if (url) links.push({ label: socialLabels[network], href: url });
  }
  return links;
}
