/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    include: ['src/**/*.test.ts'],
    // Logic tests arrive with later issues; until then an empty suite is a pass.
    passWithNoTests: true,
  },
});
