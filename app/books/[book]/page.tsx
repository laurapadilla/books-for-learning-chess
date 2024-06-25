import { Book, Container, Header } from '@/components';
import { getBook, getBooks } from '@/sanity/cms';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import Link from 'next/link';
import * as styles from './bookPage.css';

type Props = {
  params: {
    book: string;
  };
};

const descriptionComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className={styles.description}>{children}</p>,
  },
  hardBreak: () => <br />,
};
export default async function BookPage({ params }: Props) {
  const slug = params.book;
  const book = await getBook(slug);
  const books = await getBooks();

  function generateBooks() {
    return books
      .filter((b) => b._id !== book._id)
      .slice(0, 4)
      .map((b) => (
        <ul key={b._id}>
          <li>{b.bookTitle}</li>
        </ul>
      ));
  }

  console.log(styles.description);

  return (
    <Container>
      <Header />
      <Link href="/">Back</Link>
      <section className={styles.section}>
        <Book book={book} />
        <div>
          <PortableText
            components={descriptionComponents}
            value={book.description}
          />
        </div>
        <div>
          <h2>Other Books</h2>
          {/* display a list of 4 books from sanity */}
          {generateBooks()}
        </div>
      </section>
    </Container>
  );
}
