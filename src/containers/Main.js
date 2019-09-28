import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import { isUserType } from "../utils/roles";
import { getSessionCookie } from "../utils/cookie";
import Header from "../common/header/Header";
import HomePage from "../pages/homepage/HomePage";
import Account from "../pages/account/Account";
import Property from "../pages/view-property/Property";
import Properties from "../pages/properties/Properties";
import LoginSignup from "../pages/login-signup/Login-SignUp";

function PrivateRoute({ component: Component, hasValidAccess, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        hasValidAccess ? (
          <>
            <Component {...props}></Component>
          </>
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}

function PublicRoute({ component: Component, hasValidAccess, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        !hasValidAccess || Component.name === "HomePage" ? (
          <>
            <Component {...props}></Component>
          </>
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}

function AdminRoute({ component: Component, hasValidAccess, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        hasValidAccess && isUserType("admin") ? (
          <>
            <Header></Header>
            <Component {...props}></Component>
          </>
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}

function Main(props) {
  // const { auth } = store.getState()
  // render() {
    const { auth: authenticated } = props;
    return (
      <main>
        <Provider store={store}>
          <Router>
            <Header auth={authenticated}></Header>
            <Switch>
              <PublicRoute
                hasValidAccess={authenticated}
                exact
                path="/"
                component={HomePage}
              />
              <PublicRoute
                hasValidAccess={authenticated}
                exact
                path="/login-signup"
                component={LoginSignup}
              />
              <PrivateRoute
                hasValidAccess={authenticated}
                exact
                path="/user/:id/profile"
                component={Account}
              />
              <PrivateRoute
                hasValidAccess={authenticated}
                exact
                path="/property/:id"
                component={Property}
              />
              <PrivateRoute
                hasValidAccess={authenticated}
                exact
                path="/properties"
                component={Properties}
              />
            </Switch>
          </Router>
        </Provider>
      </main>
    );
  }
// }

export default Main;
