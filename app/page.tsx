import { Book, Container, Header } from '@/components';
import { getBooks } from '@/sanity/cms';
import * as styles from '@/styles/globals.css';
import Link from 'next/link';

export default async function Home() {
  const books = await getBooks();

  return (
    <Container>
      <Header />
      <section className={styles.blurbContainer}>
        <h2 className={styles.blurb}>
          <strong>Books for learning chess</strong> is a collection of materials
          that have been instrumental in my journey as an amateur club chess
          player. These books were recommended by peers and chess teachers.
        </h2>
        <h2 className={styles.blurb}>
          This site was built with NextJS and Sanity CMS. Site concept was
          inspired by Theo van Beurden’s{' '}
          <Link href="https://booksongraphicdesign.com/">
            Books on graphic design.
          </Link>
        </h2>
        <h2 className={styles.blurb}>
          All book descriptions were provided by Amazon and their respective
          authors and publishers.
        </h2>
      </section>
      <div className={styles.booksContainer}>
        {books.map((book) => {
          return <Book book={book} key={book._id} />;
        })}
      </div>
    </Container>
  );
}
