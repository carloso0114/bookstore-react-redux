/* eslint-disable linebreak-style */
import react from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './navbar/Navbar';
import MainBooks from './books/MainBooks';
import Categories from './categories/Categories';
import './App.css';

class App extends react.PureComponent {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <MainBooks />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
