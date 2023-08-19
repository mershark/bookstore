import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <h2>Bookstore CMS</h2>
    <ul>
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/authors">Authors</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
