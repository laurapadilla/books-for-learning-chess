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
        <Link className={styles.otherBooksLink} href={b.slug} key={b._id}>
          {b.bookTitle}
        </Link>
      ));
  }

  console.log(styles.description);

  return (
    <Container>
      <Header />
      <Link href="/">{'<'} Back</Link>
      <section className={styles.section}>
        <div className={styles.bookInfoContainer}>
          <div className={styles.bookAndLinksContainer}>
            <Book book={book} />
            <article className={styles.whereToBuyList}>
              {book.whereToBuy
                ? book.whereToBuy.map((link, idx) => (
                    <Link
                      className={styles.whereToBuyLink}
                      href={link.url}
                      key={`${link.label}-${idx}`}
                    >
                      {link.label}
                    </Link>
                  ))
                : null}
            </article>
          </div>
          <div className={styles.portableText}>
            <PortableText
              components={descriptionComponents}
              value={book.description}
            />
          </div>
        </div>
        <div className={styles.otherBooksList}>
          <h2 className={styles.otherBooksHeading}>Other Books</h2>
          {generateBooks()}
        </div>
      </section>
    </Container>
  );
}
