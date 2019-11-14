import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./components/Login";
import Logout from "./components/Logout";
import FriendList from "./components/FriendList";
import PrivateRoute from "./components/PrivateRoute";

function App(props) {
  return (
    <div className="App">
      <header className="hero is-primary">
        <div className="hero-content">
          <h1 className="title is-1">Auth with Redux</h1>
          <nav className="nav">
            <Link to="/" className="nav-item">
              Home
            </Link>
            {!props.isLoggedIn && (
              <Link to="/login" className="nav-item">
                Login
              </Link>
            )}
            {props.isLoggedIn && (
              <Link to="/friendslist" className="nav-item">
                Friends
              </Link>
            )}
            {props.isLoggedIn && (
              <Link to="/logout" className="nav-item">
                Logout
              </Link>
            )}
          </nav>
        </div>
      </header>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/friendslist" component={FriendList} />
        <PrivateRoute path="/logout" component={Logout} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

export default connect(mapStateToProps, {})(App);
