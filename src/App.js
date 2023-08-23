import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import BooksPage from './pages/booksPage';
import AuthorsPage from './pages/authorsPage';
import BookActions from './components/bookActions';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/Authors" element={<AuthorsPage />} />
      </Routes>
      <BookActions />
    </Router>
  );
}

export default App;
