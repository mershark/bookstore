import PropTypes from 'prop-types';

function Book({ bookTitle, author, onClick }) {
  return (
    <div>
      <div>
        <p>Action</p>
        <h2>{bookTitle}</h2>
        <p>{author}</p>
        <div>
          <button type="button" onClick={onClick}>
            remove
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
