import React from 'react';
import PropTypes from 'prop-types'; // Import the prop-types library
import { useDispatch } from 'react-redux';
import { removeBook, fetchBooks } from '../redux/books/booksSlice';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook({ itemId: id }));
    dispatch(fetchBooks());
  };

  return (
    <div className="book">
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{category}</p>
      <button type="submit" onClick={handleRemoveBook}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
