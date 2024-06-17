import { Book as BookType } from '@/types/book';
import * as styles from './Book.css';

type BookProps = {
  book: BookType;
};

export function Book({ book }: BookProps) {
  function getTextColor(hex: string) {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness >= 128 ? 'black' : 'white';
  }
  return (
    <div
      className={styles.book}
      style={{
        background: book.color.hex,
        color: getTextColor(book.color.hex),
      }}
    >
      <h2>{book.bookTitle}</h2>
      <div>
        {book.authors
          ? book.authors.map((author) => <p key={author}>{author}</p>)
          : null}
      </div>
      {/* {book.publisher ? <p>{book.publisher}</p> : null} */}
    </div>
  );
}
