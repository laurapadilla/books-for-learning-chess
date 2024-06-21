import { Book, Container, Header } from '@/components';
import { getBook } from '@/sanity/cms';

type Props = {
  params: {
    book: string;
  };
};

export default async function BookPage({ params }: Props) {
  const slug = params.book;
  const book = await getBook(slug);

  return (
    <Container>
      <Header />
      <Book book={book} />
    </Container>
  );
}
