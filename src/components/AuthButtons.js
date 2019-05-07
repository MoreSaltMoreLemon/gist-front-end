import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import MenuButton from "./MenuButton";
import '../css/button.css'


// Sign Up / Register
function SignUp(props) {
  return (
    <Link to="/sign-up">
      <MenuButton label="Sign Up" icon="account_circle" />
    </Link>
  );
}

// Sign In / Login
function SignIn(props) {
  return (
    <Link to="/sign-in">
      <MenuButton label="Sign In" icon="face" />
    </Link>
  );
}

// Sign Out / Logout
function SignOut({ signOut }) {
  return (
    <Link to="/sign-out">
      <MenuButton label="Sign Out" icon="remove" />
    </Link>
  );
}

export { SignUp, SignIn, SignOut };
