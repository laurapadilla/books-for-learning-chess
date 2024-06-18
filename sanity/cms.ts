import { Book } from '@/types/book';
import { createClient, groq } from 'next-sanity';

export async function getBooks(): Promise<Book[]> {
  const sanityClient = createClient({
    apiVersion: '2024-06-14',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  });

  return sanityClient.fetch(groq`*[_type == "book"]{
    _id, 
    _createdAt,
    bookTitle,
    "slug": slug.current,
    authors,
    publisher,
    color,
    "cover": cover.asset->url,
    whereToBuy, 
    }`);
}
