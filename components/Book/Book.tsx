import { Book as BookType } from '@/types/book';

type BookProps = {
  book: BookType;
};

export function Book({ book }: BookProps) {
  return (
    <div key={book._id}>
      <h2>{book.bookTitle}</h2>
      {!book.publisher && book.authors
        ? book.authors.map((author) => <p key={author}>{author}</p>)
        : null}
      {book.publisher ? <p>{book.publisher}</p> : null}
      {book.color ? book.color.hex : null}
    </div>
  );
}
