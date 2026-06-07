import books from '../../dp';

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const { title, author } = await request.json();
  const book = books.find((book) => book.id === parseInt(id));
  if (!book) return Response.json({ error: 'Book not found' }, { status: 404 });
  book.title = title;
  book.author = author;
  return Response.json(book);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const book = books.find((book) => book.id === parseInt(id));
  if (!book) return Response.json({ error: 'Book not found' }, { status: 404 });
  books.splice(books.indexOf(book), 1);
  return Response.json({ message: 'Book deleted' });
}
