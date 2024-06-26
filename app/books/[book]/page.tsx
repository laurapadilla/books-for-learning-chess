import { Book, Container, Header } from '@/components';
import { getBook, getBooks } from '@/sanity/cms';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { shuffle } from 'lodash';
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

  function randomizeBooks() {
    const shuffledBooks = shuffle(
      books.filter((b) => b._id !== book._id),
    ).slice(0, 4);

    return shuffledBooks.map((b) => (
      <div className={styles.otherBooksContainer} key={b._id}>
        <div
          className={styles.bookColorDot}
          style={{
            background: b.color.hex,
          }}
        />
        <Link className={styles.otherBooksLink} href={b.slug}>
          {b.bookTitle}
        </Link>
      </div>
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
          {randomizeBooks()}
        </div>
      </section>
    </Container>
  );
}
