import { socialNetworks, type SocialNetwork } from './contact-links';

// schema.org `Person` structured data for the home page, built from the site profile.
export function personJsonLd(
  profile: { name: string; jobTitle: string; social: Partial<Record<SocialNetwork, string>> },
  site: URL,
) {
  const sameAs = socialNetworks.flatMap((network) => profile.social[network] ?? []);
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.jobTitle,
    url: new URL('/', site).href,
    ...(sameAs.length > 0 && { sameAs }),
  };
}

// JSON for inline <script type="application/ld+json">. "<" becomes <, which parses back to
// the same value, so no string in the data can close the script element early.
export function toScriptJson(value: unknown): string {
  return JSON.stringify(value).replaceAll('<', '\\u003c');
}
