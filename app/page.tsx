import { Book } from '@/components';
import { getBooks } from '@/sanity/cms';

export default async function Home() {
  const books = await getBooks();

  return (
    <div>
      {books.map((book) => {
        return <Book key={book._id} book={book} />;
      })}
    </div>
  );
}
