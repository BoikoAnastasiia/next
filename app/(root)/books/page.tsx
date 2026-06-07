import React from 'react';

const Books = async () => {
  const response = await fetch('http://localhost:3000/api/books');
  if (!response.ok) throw new Error('Failed to fetch data');
  const books = await response.json();
  return (
    <ul className="grid grid-cols-3 gap-4">
      {books.map((book: any) => (
        <li className="bg-gray-100 p-4 rounded-md" key={book.id}>
          {book.title}
        </li>
      ))}
    </ul>
  );
};

export default Books;
