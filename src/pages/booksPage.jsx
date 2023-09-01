import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookForm from '../components/bookForm';
import { getBook, removeBook } from '../redux/books/booksSlice';
import Book from '../components/book';

function BooksPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);

  const { isLoading, isError, books } = useSelector((state) => state.books);
  const loading = isLoading && <p>Books loading, please wait!</p>;
  const error = isError && <p>Error loading books, please try again!</p>;

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  const bookList = books.map((book) => (
    <div key={book.item_id}>
      <Book
        bookTitle={book.title}
        author={book.author}
        bookId={book.item_id}
        onClick={() => handleRemoveBook(book.item_id)}
      />
    </div>
  ));

  return (
    <div>
      {loading}
      {error}
      {bookList}
      <BookForm />
    </div>
  );
}

export default BooksPage;
