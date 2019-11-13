import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "./../actions";

const Login = props => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = event => {
    console.log(event);
    event.preventDefault();
    props.login(user);
  };

  return (
    <div>
      <h2 className="title is-3">Login</h2>
      <form className="login" onSubmit={handleSubmit}>
        <label htmlFor="username">
          <input
            className="input"
            type="text"
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <button className="button">Log In</button>
      </form>
    </div>
  );
};

export default connect(null, { login })(Login);
