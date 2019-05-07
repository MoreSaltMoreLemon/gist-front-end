import React, { Fragment } from "react";
import { SignUp, SignIn, SignOut } from "../components/AuthButtons";
import "../css/authButtons.css";

export function HeaderMenu() {
  const loggedIn = localStorage.getItem("jwt") === null ? false : true;
  return (
    <nav>
      {loggedIn ? (
        <SignOut />
      ) : (
        <Fragment>
          <SignUp />
          <SignIn />
        </Fragment>
      )}
    </nav>
  );
}
