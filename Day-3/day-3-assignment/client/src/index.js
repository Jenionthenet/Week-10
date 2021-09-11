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

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
         <Route exact path = "/" component = {HomePage}/>
          <Route path="/books" component = {BookListPage} />
          <Route  path="/add-book" component = {AddBookPage} />
          <Route path = '/login' component = {LoginPage}/>
          <Route path = '/register' component = {RegistrationPage}/>
        </Switch>
     
      </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
