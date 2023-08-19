import React, { useState } from 'react';
import BookForm from '../components/bookForm';
import BookList from '../components/bookList';

const BooksPage = () => {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    // Update the books state with the new book
    setBooks([...books, newBook]);
  };

  const deleteBook = (bookId) => {
    // Filter out the book with the given ID from the books state
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
  };

  return (
    <div className="books-page">
      <BookForm onAddBook={addBook} />
      <BookList books={books} onDelete={deleteBook} />
    </div>
  );
};

export default BooksPage;
