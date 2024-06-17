import { Book } from '@/components';
import { getBooks } from '@/sanity/cms';

export default async function Home() {
  const books = await getBooks();

  return (
    <div>
      {books.map((book) => {
        return <Book book={book} key={book._id} />;
      })}
    </div>
  );
}
