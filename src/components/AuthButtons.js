import React from "react";
import { Link } from "react-router-dom";
import MenuButton from "./MenuButton";
import '../css/button.css'


// Sign Up / Register
function SignUp({className}) {
  return (
    <Link className={className} to="/sign-up">
      <MenuButton className={`${className}-button`}  label="Sign Up" icon="account_circle" />
    </Link>
  );
}

// Sign In / Login
function SignIn({className}) {
  return (
    <Link className={className} to="/sign-in">
      <MenuButton className={`${className}-button`}  label="Sign In" icon="face" />
    </Link>
  );
}

// Sign Out / Logout
function SignOut({ className, signOut }) {
  return (
    <Link className={className} to="/sign-out">
      <MenuButton className={`${className}-button`}  label="Sign Out" icon="exit_to_app" />
    </Link>
  );
}

// Link to Sign Up page for Homepage
function GetStarted({className}) {
  return (
    <Link className={className} to="/sign-up">
      <MenuButton className={`${className}-button`} label="Let's Get Started!" icon="person_add" />
    </Link>
  );
}

export { SignUp, SignIn, SignOut, GetStarted };
