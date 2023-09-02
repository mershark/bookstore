import PropTypes from 'prop-types';
import { FaCircleNotch } from 'react-icons/fa';

function Book({ bookTitle, author, onClick }) {
  return (
    <div className="book-container">
      <div className="book-info">
        <p className="action">Action</p>
        <h2 className="book-title">{bookTitle}</h2>
        <p className="author">{author}</p>
        <div>
          <button type="button" className="button comment">
            comments
          </button>
          <button type="button" className="button" onClick={onClick}>
            remove
          </button>
          <button type="button" className="button">
            edit
          </button>
        </div>
      </div>
      <div className="book-state">
        <div className="percentage">
          <FaCircleNotch className="fa" size="4em" />
          <div>
            <p>
              89%
              <br />
              completed
            </p>
          </div>
        </div>
        <div className="chapter-div">
          <p className="chapter current">CURRENT CHAPTER</p>
          <p className="chapter number">Chapter 17</p>
          <button type="button" className="update">
            update progress
          </button>
        </div>
      </div>
    </div>
  );
}
Book.propTypes = {
  author: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Book;
