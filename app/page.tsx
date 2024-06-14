import { getBooks } from "@/sanity/cms";
import Link from "next/link";

export default async function Home() {
  const books = await getBooks();

  return (
    <div>
      {books.map((book) => {
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
      })}
    </div>
  );
}
