import { getExperiences } from './experience';
import { getProjects } from './projects';
import { sectionsWithContent } from './sections';

// The sections of `/` that have content, in page order. The page and the nav both come from here.
export async function getSiteSections() {
  return sectionsWithContent([
    { id: 'experience' as const, label: 'Experience', href: '/#experience', entries: await getExperiences() },
    { id: 'projects' as const, label: 'Projects', href: '/#projects', entries: await getProjects() },
  ]);
}
