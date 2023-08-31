import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './book';
import { removeBook } from '../redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div className="book-list">
      {books.map((book) => (
        <Book key={book.item_id} book={book} onDelete={handleRemoveBook} />
      ))}
    </div>
  );
};

export default BookList;
