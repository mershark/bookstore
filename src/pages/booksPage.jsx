import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook, getBook } from '../redux/books/booksSlice';
import BookForm from '../components/bookForm';
import BookList from '../components/bookList';

const BooksPage = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch books from the API and update the Redux state
    dispatch(getBook()); // Dispatch the getBook action using createAsyncThunk
  }, [dispatch]);

  const handleAddBook = (newBook) => {
    dispatch(addBook(newBook));
  };

  const handleDeleteBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div className="books-page">
      <BookForm onAddBook={handleAddBook} />
      <BookList books={books} onDelete={handleDeleteBook} />
    </div>
  );
};

export default BooksPage;
