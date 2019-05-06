import React, { useState } from "react";
import { connect } from "react-redux";
import MenuButton from "./MenuButton";
import { createUserAction } from "../reducers/actions/userActions";
import "../css/auth.css";

const SignUp = props => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  });

  // const [validation, setValidation] = useState({passwordMatches: true, password})

  const handleChange = e =>
    setUser({ ...user, [e.target.name]: e.target.value });

  // const handlePasswordConfirmation = e => {
  //   handleChange
  // }

  const handleSubmit = async e => {
    e.preventDefault();
    props.signUp(user);
  };

  return (
    <section className="auth sign-in-container">
      <header className="auth header">
        <h1>Sign Up</h1>
      </header>
      <form className="auth sign-up" onSubmit={handleSubmit}>
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
          className="auth email"
          type="text"
          placeholder="Email"
          value={user.email}
          name="email"
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
        <input
          required
          className="auth password"
          type="password"
          placehold="Confirm Password"
          value={user.passwordConfirmation}
          name="passwordConfirmation"
          onChange={handleChange}
        />
        <MenuButton
          type="submit"
          className="auth submit"
          label="Sign Up"
          icon="verified_user"
        />
      </form>
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  signUp: async user => dispatch(await createUserAction(user))
});

export default connect(null, mapDispatchToProps)(SignUp);
