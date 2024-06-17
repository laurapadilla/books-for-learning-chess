import { Book } from '@/components';
import { getBooks } from '@/sanity/cms';
import Link from 'next/link';
import * as styles from '../styles/globals.css';

export default async function Home() {
  const books = await getBooks();

  return (
    <main>
      <header>
        <h1>Books for learning chess</h1>
        <nav>
          <Link href="https://www.chess.com/learn">learn chess</Link>
          <Link href="https://www.chess.com">play chess</Link>
        </nav>
      </header>
      <div className={styles.booksContainer}>
        {books.map((book) => {
          return <Book book={book} key={book._id} />;
        })}
      </div>
    </main>
  );
}
