/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchRemoveBooks } from '../../../redux/books/books.actions';

const BooksDisplay = (props) => {
  const dispatch = useDispatch();

  const { bookList } = props;
  const removeElement = (id) => {
    dispatch(fetchRemoveBooks(id));
  };
  return (
    <div>
      {bookList.map((book) => (
        <div key={book.item_id} className="bookstore row">
          <div className="col-5">
            <div>
              <span className="genre">{book.category}</span>
              <h5 className="title">{book.title}</h5>
            </div>
            <div className="actions d-flex align-items-center">
              <span>Comments</span>
              <div className="Line-2" />
              <button type="button" className="remove-btn" onClick={() => removeElement(book.item_id)}>Remove</button>
              <div className="Line-2" />
              <span>Edit</span>
            </div>
          </div>

          <div className="col-3">
            <div className="d-flex progress-circle">
              <div className="Rectangle-3">
                <div className="Oval-2" />
              </div>
              <div>
                <p className="number">
                  0 %
                </p>
                <span className="status">Completed</span>
              </div>
            </div>
          </div>

          <div className="col-4 line-1">
            <span className="current-chapter">CURRENT CHAPTER</span>
            <p className="chapter">
              Chapter 1
              {' : '}
              Introduction
            </p>
            <button type="button" className="btn btn-primary chapter-btn">UPDATE PROGRESS</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default BooksDisplay;

BooksDisplay.propTypes = {
  bookList: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.string.isRequired,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
};
