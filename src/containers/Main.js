import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import { connect } from 'react-redux';

import { isUserType } from "../utils/roles";
import Header from "../common/header/Header";
import HomePage from "../pages/homepage/HomePage";
import Account from "../pages/account/Account";
import Property from "../pages/view-property/Property";
import Properties from "../pages/properties/Properties";
import LoginSignup from "../pages/login-signup/Login-SignUp";
import AddProperties from "../pages/add-property/AddProperty";

function PrivateRoute({ component: Component, hasValidAccess, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        hasValidAccess ? (
          <>
            <Component {...props} />
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
            <Component {...props} />
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
            <Component {...props} />
          </>
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}

function Main({ authenticated }) {
  return (
    <main>
      <Router>
        <Header />
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
            path="/profile"
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
          <PrivateRoute
            hasValidAccess={authenticated}
            exact
            path="/add-properties"
            component={AddProperties}
          />
        </Switch>
      </Router>
    </main>
  );
}

const mapStateToProps = state => ({
  authenticated: state.auth.isAuthenticated
});
  
export default connect(mapStateToProps)(Main);
