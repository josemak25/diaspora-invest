import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import Main from './containers/Main';
import { setUser } from './redux/actions/refresh.action';
import { SET_AUTHENTICATED } from './redux/types';

import "./App.css";
import "./assets/css/Helper.css";
import "./assets/css/icofont.min.css";
import { getUser, logout } from "./redux/actions/login.action";
import { getPropertyCategories } from './redux/actions/add-properties.action';

const currentSession = setUser();

if (currentSession) {
  store.dispatch({ type: SET_AUTHENTICATED });
  store.dispatch(getUser());
  store.dispatch(getPropertyCategories());
} else {
  store.dispatch(logout());
}


function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
