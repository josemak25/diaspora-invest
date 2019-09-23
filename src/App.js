import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import LoginSignUp from './pages/login-signup/Login-SignUp';
import Properties from './pages/properties/Properties';
import Account from './pages/account/Account';
import HomePage from './pages/homepage/HomePage';
import Property from './pages/view-property/Property';

import './App.css';
import './assets/css/Helper.css';
import './assets/css/icofont.min.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login-signup' component={LoginSignUp} />
        <Route exact path='/properties' component={Properties} />
        <Route exact path='/user/:id/profile' component={Account} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login-signup" component={LoginSignUp} />
        <Route exact path="/properties" component={Properties} />
        <Route exact path="/property/:id" component={Property}/>
      </Router>
    </Provider>
  );
}

export default App;
