// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  base: '/astro-site/',
  site: 'https://student-alex-bond.github.io/astro-site/',
  output: 'static',
});