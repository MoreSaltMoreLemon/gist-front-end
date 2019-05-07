import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { signOutUserAction } from "../reducers/actions/userActions";
import "../css/auth.css";

const SignOut = ({ signOut }) => {
  signOut();

  return <Redirect to="/" />;
};

const mapDispatchToProps = dispatch => ({
  signOut: async () => dispatch(await signOutUserAction())
});

export default connect(
  null,
  mapDispatchToProps
)(SignOut);
