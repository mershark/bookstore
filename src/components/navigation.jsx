import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="headernav">
    <h2 className="logo">Bookstore CMS</h2>
    <ul>
      <li>
        <Link className="nav books" to="/">Books</Link>
      </li>
      <li>
        <Link className="nav category" to="/authors">Authors</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
