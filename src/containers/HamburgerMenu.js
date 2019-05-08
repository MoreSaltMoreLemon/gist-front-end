import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Button from "../components/Button";
import MenuButton from "../components/MenuButton";
import Hamburger from "../components/Hamburger"

import { SignUp, SignIn, SignOut } from "../components/AuthButtons";
import "../css/appHeader.css";

function HamburgerMenu({ loggedIn }) {
  const [showBurger, setShowBurger] = useState(false);

  if (showBurger) {
    return (
      <div className="hamburger-container" onClick={() => setShowBurger(false)}>
        <nav className="header-menu-burger">
          <Link className="button-nav" to="/">
            <MenuButton label="Home" className="homepage" icon="home" />
          </Link>
          <Link className="button-nav" to="/recipes">
            <MenuButton
              label="Recipes"
              className="recipe-gallery"
              icon="view_module"
            />
          </Link>
          {loggedIn ? (
            <Link className="button-nav" to="/my-recipes">
              <MenuButton
                label="My Recipes"
                className="recipe-gallery"
                icon="view_module"
              />
            </Link>
          ) : null}
          <Route
            exact
            path="/(recipes|my-recipes)/"
            render={() => (
              <Link className="button-nav" to="/recipes/new">
                <MenuButton
                  label="Create Recipe"
                  className="recipe-create"
                  icon="create"
                />
              </Link>
            )}
          />
          {loggedIn ? (
            <SignOut />
          ) : (
            <Fragment>
              <SignIn />
              <SignUp />
            </Fragment>
          )}
        </nav>
      </div>
    );
  } else {
    return (
      <Hamburger className="burger" onClick={() => setShowBurger(true)} />
      // <Button
      //   className="burger"
      //   icon="burger"
      //   onClick={() => setShowBurger(true)}
      // />
    );
  }
}

const mapStateToProps = state => ({ ...state.user });

export default connect(mapStateToProps)(HamburgerMenu);
