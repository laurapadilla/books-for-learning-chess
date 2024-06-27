import { draftMode } from 'next/headers';
import type { ClientPerspective, QueryParams } from 'next-sanity';
import { client } from './client';
import { token } from './token';

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  perspective = draftMode().isEnabled ? 'previewDrafts' : 'published',

  stega = perspective === 'previewDrafts' ||
    process.env.VERCEL_ENV === 'preview',
}: {
  query: string;
  params?: QueryParams;
  perspective?: Omit<ClientPerspective, 'raw'>;
  stega?: boolean;
}) {
  if (perspective === 'previewDrafts') {
    return client.fetch<QueryResponse>(query, params, {
      next: { revalidate: 0 },
      perspective: 'previewDrafts',
      stega,
      token,
      useCdn: false,
    });
  }
  return client.fetch<QueryResponse>(query, params, {
    next: { revalidate: 60 },
    perspective: 'published',
    stega,
    useCdn: true,
  });
}
