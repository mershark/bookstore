import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';

function BookForm() {
  const [values, setValues] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();
  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }
  function handleSubmit() {
    const newBook = {
      item_id: nanoid(),
      title: values.title,
      author: values.author,
      category: 'fiction',
    };
    dispatch(addBook(newBook));
    setValues({
      title: '',
      author: '',
    });
  }
  return (
    <form>
      <h2 className="h2-add">ADD NEW BOOK</h2>
      <div className="form-input">
        <input
          className="title-input"
          name="title"
          type="text"
          placeholder="Book Title"
          value={values.title}
          onChange={handleChange}
        />
        <input
          className="author-input"
          type="text"
          name="author"
          placeholder="Book Author"
          value={values.author}
          onChange={handleChange}
        />
        <button type="button" className="input-button" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </form>
  );
}
export default BookForm;
