import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// No initial state for books

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book) => {
    try {
      const response = await axios.post(
        'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xcqxp6ZyT2iIOCHysGbE/books',
        book,
      );
      return response.data;
    } catch (e) {
      throw new Error(e);
    }
  },
);

export const removeBook = createAsyncThunk(
  'books/deleteBook',
  async (bookID) => {
    try {
      await axios.delete(
        `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xcqxp6ZyT2iIOCHysGbE/books/${bookID}`,
      );
      return bookID;
    } catch (e) {
      throw new Error(e);
    }
  },
);

export const getBook = createAsyncThunk(
  'books/getBook',
  async () => {
    try {
      const response = await axios.get(
        'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xcqxp6ZyT2iIOCHysGbE/books',
      );
      return response.data;
    } catch (e) {
      throw new Error(e);
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState: [], // No initial state here
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addBook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const bookId = action.payload;
        return state.filter((book) => book.item_id !== bookId);
      });
  },
});

export default booksSlice.reducer;
