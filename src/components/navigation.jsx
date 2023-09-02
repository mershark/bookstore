import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <header>
    <nav>
      <div className="nav-container">
        <h2 className="logo">Bookstore CMS</h2>
        <div>
          <Link className="nav books" to="/">Books</Link>
        </div>
        <div>
          <Link className="nav category" to="/category">Category</Link>
        </div>
      </div>
    </nav>
    <div>
      <FaUser className="user" size={14} />
    </div>

  </header>
);

export default Navigation;
