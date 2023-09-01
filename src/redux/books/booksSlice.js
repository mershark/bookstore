import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: false,
  isError: '',
};

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book) => {
    try {
      await axios.post(
        'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/FVZlJvMt6nVeDc72v9Yr/books',
        book,
      );
      return book;
    } catch (e) {
      throw new Error(e);
    }
  },
);
export const getBook = createAsyncThunk(
  'books/getBook',
  async (book) => {
    try {
      const response = await axios.get(
        'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/FVZlJvMt6nVeDc72v9Yr/books',
        book,
      );
      const { data } = response;
      return data;
    } catch (e) {
      return e;
    }
  },
);
export const removeBook = createAsyncThunk(
  'books/deleteBook',
  async (bookID) => {
    try {
      await axios.delete(
        `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/FVZlJvMt6nVeDc72v9Yr/books/${bookID}`,
      );
      return bookID;
    } catch (e) {
      throw new Error(e);
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = '';
        if (action.payload !== '') {
          const books = [];
          const keys = Object.keys(action.payload);
          keys.forEach((x) => {
            books.push({ item_id: x, ...action.payload[x][0] });
          });
          state.books = books;
        }
      })
      .addCase(getBook.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(addBook.rejected, (state, action) => {
        state.isError = action.error.message;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const bookId = action.payload;
        state.books = state.books.filter((book) => book.item_id !== bookId);
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.isError = action.error.message;
      });
  },
});
export default booksSlice.reducer;
