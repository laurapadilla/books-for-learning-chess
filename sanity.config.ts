'use client';

import { colorInput } from '@sanity/color-input';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { apiVersion, dataset, projectId, useCdn } from './sanity/env';
import { schema } from './sanity/schema';

export default defineConfig({
  basePath: '/studio',
  dataset: dataset,
  plugins: [
    colorInput(),
    structureTool(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  projectId,
  schema,
  useCdn: useCdn,
});
