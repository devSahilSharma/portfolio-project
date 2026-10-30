import { getExperiences } from './experience';
import { getPosts } from './posts';
import { getProjects } from './projects';
import { sectionsWithContent } from './sections';

// The sections of the site that have content, in nav order. The page and the nav both come from here.
// Writing is its own page at /blog rather than a section of `/`.
export async function getSiteSections() {
  return sectionsWithContent([
    { id: 'experience' as const, label: 'Experience', href: '/#experience', entries: await getExperiences() },
    { id: 'projects' as const, label: 'Projects', href: '/#projects', entries: await getProjects() },
    { id: 'writing' as const, label: 'Writing', href: '/blog/', entries: await getPosts() },
  ]);
}
