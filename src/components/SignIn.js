import React, { useState } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { signInUserAction } from "../reducers/actions/userActions";
import { SignUp } from './AuthButtons'

import MenuButton from "./MenuButton";
import "../css/auth.css";

const SignIn = ({ signIn, jwt }) => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = e =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    signIn(user);
  };

  if (jwt) return <Redirect to="/recipes" />;

  return (
    <section className="auth sign-in auth-container" onSubmit={handleSubmit}>
      <header className="auth header">
        <h1>Sign In</h1>
      </header>
      <form className="auth sign-in">
        <div className="label-input-container">
        <label>Username: </label>
          <input
            required
            className="auth username"
            type="text"
            placeholder="Username"
            value={user.username}
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="label-input-container">
        <label>Password: </label>
          <input
            required
            className="auth password"
            type="password"
            placehold="Password"
            value={user.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="auth buttons">
          <MenuButton
            type="submit"
            className="auth submit"
            label="Sign In"
            icon="verified_user"
          />
          <SignUp className="auth alternate" />
        </div>
      </form>
    </section>
  );
};

const mapStateToProps = state => ({ ...state.user });

const mapDispatchToProps = dispatch => ({
  signIn: async user => dispatch(await signInUserAction(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
