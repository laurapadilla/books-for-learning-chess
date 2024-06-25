import { Book } from '@/types/book';
import { SiteSettings } from '@/types/siteSettings';
import { createClient, groq } from 'next-sanity';

const sanityClient = createClient({
  apiVersion: '2024-06-14',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
});

export async function getBooks(): Promise<Book[]> {
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

export async function getBook(slug: string): Promise<Book> {
  return sanityClient.fetch(
    groq`*[_type == "book" && slug.current == $slug][0]{
    _id, 
    _createdAt,
    bookTitle,
    "slug": slug.current,
    authors,
    description,
    publisher,
    color,
    "cover": cover.asset->url,
    whereToBuy, 
    }`,
    { slug },
  );
}

export async function getSiteSettings(): Promise<SiteSettings> {
  return sanityClient.fetch(
    groq`*[_type == "siteSettings"][0]{_id, _createdAt, title, navLinks}`,
  );
}
