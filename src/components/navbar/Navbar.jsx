import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand nav-bg">
    <div className="navbar-nav">
      <span className="Bookstore-CMS">
        Bookstore CMS
      </span>
      <NavLink to="/" className="books" exact>
        BOOKS
      </NavLink>
      <NavLink to="/categories" className="categories" exact>
        CATEGORIES
      </NavLink>
      <div className="profile">
        <i className="bi bi-person-circle" />
      </div>
    </div>
  </nav>
);

export default Navbar;
