import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';
import BookForm from '../components/bookForm';
import BookList from '../components/bookList';

const BooksPage = () => {
  const books = useSelector((state) => state.books); // Get books from Redux store
  const dispatch = useDispatch();

  const handleAddBook = (newBook) => {
    dispatch(addBook(newBook)); // Dispatch the addBook action
  };

  const handleDeleteBook = (bookId) => {
    dispatch(removeBook(bookId)); // Dispatch the removeBook action with the book ID
  };

  return (
    <div className="books-page">
      <BookForm onAddBook={handleAddBook} />
      <BookList books={books} onDelete={handleDeleteBook} />
    </div>
  );
};

export default BooksPage;
