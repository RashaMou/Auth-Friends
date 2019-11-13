import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./components/Login";
import Logout from "./components/Logout";
import FriendList from "./components/FriendList";

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
            <Link to="/login" className="nav-item">
              Login
            </Link>
            <Link to="/logout" className="nav-item">
              Logout
            </Link>
          </nav>
        </div>
      </header>
      <Route path="/login" component={Login} />
      <Route path="/friendslist" component={FriendList} />
      <Route path="/logout" component={Logout} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

export default connect(mapStateToProps, {})(withRouter(App));
