import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import store from './store';
import LoginSignUp from './pages/login-signup/Login-SignUp';
import Properties from './pages/properties/Properties';
import HomePage from './pages/homepage/HomePage';

import './App.css';
import './assets/css/Helper.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login-signup" component={LoginSignUp} />
        <Route exact path="/properties" component={Properties} />
      </Router>
    </Provider>
  );
}

export default App;
