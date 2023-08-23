import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';

const BookActions = () => {
  const dispatch = useDispatch();

  const handleAddBook = () => {
    const newBook = {
      item_id: 'item4', // Generate a unique ID
      title: 'New Book',
      author: 'New Author',
      category: 'Fiction',
    };
    dispatch(addBook(newBook)); // Dispatch the addBook action
  };

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId)); // Dispatch the removeBook action with the book ID
  };

  return (
    <div className="book-actions">
      <button type="button" onClick={handleAddBook}>Add Book</button>
      <button type="button" onClick={() => handleRemoveBook('item2')}>Remove Book</button>
    </div>
  );
};

export default BookActions;
