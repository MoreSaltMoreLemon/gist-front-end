import React from "react";
import { Link } from "react-router-dom";
import "../css/logo.css";

// Shows the Logo. I could just incorporate this
// into the JSX for the header, but I like having it
// be broken out.
const Logo = props => {
  return (
    <Link to="/recipes">
      <h1 className="app-logo">Roughly</h1>
    </Link>
  );
};

export default Logo;
