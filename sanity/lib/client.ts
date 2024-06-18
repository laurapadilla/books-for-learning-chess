import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '../env';

export const client = createClient({
  apiVersion,
  dataset,
  perspective: 'published',
  projectId,
  stega: {
    enabled: false,
    studioUrl: '/studio',
  },
  useCdn,
});
