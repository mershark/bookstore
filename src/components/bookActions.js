import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

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

  return (
    <div className="book-actions">
      <button type="button" onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default BookActions;
