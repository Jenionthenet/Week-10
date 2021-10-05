import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import BookListPage from './components/BookListPage';
import HomePage from './components/HomePage';
import AddBookPage from './components/AddBookPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage'
import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './store/reducer'
import CartList from './components/CartList';
import { Provider } from 'react-redux'
import FavoritesList from './components/FavoritesList';
import thunk from 'redux-thunk'
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          
         <Route exact path = "/" component = {App}/>
          <Route path="/books" component = {BookListPage} />
          <Route path="/add-book" component = {AddBookPage} />
          <Route path="/cart" component = {CartList}/>
          <Route path="/favorites" component = {FavoritesList}/>
          <Route path = '/login' component = {LoginPage}/>
          <Route path = '/register' component = {RegistrationPage}/>
        </Switch>
     
      </BaseLayout>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
