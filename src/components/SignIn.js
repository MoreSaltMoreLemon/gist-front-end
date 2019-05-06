import React, { useState } from "react";
import { connect } from "react-redux";
import { signInUserAction } from "../reducers/actions/userActions";
import MenuButton from "./MenuButton";
import "../css/auth.css";

const SignIn = props => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = e =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    props.signIn(user);
  };

  return (
    <section 
      className="auth sign-in-container"
      onSubmit={handleSubmit}
    >
      <header className="auth header">
        <h1>Sign In</h1>
      </header>
      <form className="auth sign-in">
        <input
          required
          className="auth username"
          type="text"
          placeholder="Username"
          value={user.username}
          name="username"
          onChange={handleChange}
        />
        <input
          required
          className="auth password"
          type="password"
          placehold="Password"
          value={user.password}
          name="password"
          onChange={handleChange}
        />
        <MenuButton
          type="submit"
          className="auth submit"
          label="Sign In"
          icon="verified_user"
        />
      </form>
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  signIn: async user => dispatch(await signInUserAction(user))
});

export default connect(null, mapDispatchToProps)(SignIn);
