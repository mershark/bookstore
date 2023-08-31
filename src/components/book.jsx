import React from 'react';
import PropTypes from 'prop-types'; // Import the prop-types library
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(book.item_id)); // Dispatch the removeBook action with the book's item_id
  };

  return (
    <div className="book">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <button type="button" onClick={handleRemoveBook}>Remove</button>
    </div>
  );
};

// Add prop type validation for the 'book' object
Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
