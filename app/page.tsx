import { Book } from '@/components';
import { getBooks } from '@/sanity/cms';
import * as styles from '@/styles/globals.css';
import Link from 'next/link';

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
      <h2>
        Best books for learning chess is a collection of materials that have
        been instrumental in my journey as an amateur club chess player. These
        books were recommended by peers and chess teachers. Don’t see your
        favorite books? Submit them and we’ll add them to the list! This site
        was built with NextJS and Sanity CMS and inspired by Theo van Beurden’s
        Books on graphic design.
      </h2>
      <div className={styles.booksContainer}>
        {books.map((book) => {
          return <Book book={book} key={book._id} />;
        })}
      </div>
    </main>
  );
}
