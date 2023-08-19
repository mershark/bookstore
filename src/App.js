import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import BooksPage from './pages/booksPage';
import AuthorsPage from './pages/authorsPage';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/Authors" element={<AuthorsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
