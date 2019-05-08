import React, { Fragment } from "react";
import { connect } from "react-redux"

import { SignUp, SignIn, SignOut } from "../components/AuthButtons";
import "../css/authButtons.css";

function HeaderMenu({loggedIn}) {
  // const loggedIn = localStorage.getItem("jwt") === null ? false : true;
  return (
    <nav className="header-menu">
      {loggedIn ? (
        <SignOut />
      ) : (
        <Fragment>
          <SignIn />
          <SignUp />
        </Fragment>
      )}
    </nav>
  );
}

const mapStateToProps = state => ({...state.user})

export default connect(mapStateToProps)(HeaderMenu)