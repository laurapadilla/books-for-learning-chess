'use client';
/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */
import { colorInput } from '@sanity/color-input';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId, useCdn } from './sanity/env';
import { schema } from './sanity/schema';

export default defineConfig({
  basePath: '/studio',
  dataset,
  plugins: [
    colorInput(),
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  projectId,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  useCdn,
});
