import { Book } from '@/components';
import { getBooks } from '@/sanity/cms';
import * as styles from '../styles/globals.css';

export default async function Home() {
  const books = await getBooks();

  return (
    <div className={styles.booksContainer}>
      {books.map((book) => {
        return <Book book={book} key={book._id} />;
      })}
    </div>
  );
}
