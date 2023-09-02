import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <header>
    <nav>
      <div className="nav-container">
        <h2 className="logo">Bookstore CMS</h2>
        <div>
          <Link className="nav books" to="/">BOOKS</Link>
        </div>
        <div>
          <Link className="nav category" to="/category">CATEGORY</Link>
        </div>
      </div>
    </nav>
    <div>
      <FaUser className="user" size={14} />
    </div>

  </header>
);

export default Navigation;
