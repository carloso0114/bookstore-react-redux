/* eslint-disable linebreak-style */
import { useState } from 'react';
import uuid from 'react-uuid';
import { useDispatch } from 'react-redux';
import { fetchAddNewBook } from '../../../redux/books/books.actions';
import './addBookForm.css';

const options = [
  { id: 1, name: 'tech' },
  { id: 2, name: 'business' },
  { id: 3, name: 'science' },
  { id: 4, name: 'health' },
  { id: 5, name: 'entertainment' },
  { id: 6, name: 'sports' },
  { id: 7, name: 'travel' },
  { id: 8, name: 'food' },
];

const AddBook = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    item_id: uuid(),
    title: '',
    category: '',
  });
  const handdleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAddNewBook(book));
    setBook({
      item_id: uuid(),
      title: '',
      category: '',
    });
  };
  const onInputChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="formDiv">
      <form onSubmit={handdleSubmit}>
        <h5 className="form-title">ADD NEW BOOK</h5>
        <div className="d-flex mt-3">
          <input type="text" value={book.title} name="title" className="form-control input-title" onChange={(e) => onInputChange(e)} placeholder="Book title" />
          <select className="select-form" name="category" defaultValue="" onChange={(e) => onInputChange(e)}>
            <option value="category">Category</option>
            {options.map((option) => (
              <option
                key={option.id}
                value={option.name}
              >
                {option.name}
              </option>
            ))}
          </select>
          <button type="submit" className="btn btn-primary add-book">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
