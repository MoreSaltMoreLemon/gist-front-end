import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MenuButton from "./MenuButton";
import "../css/drawerLeft.css";

const DrawerLeft = ({ user }) => {
  return (
    <div className="drawer-left">
      <nav className="drawer-nav">
        <Link className="button-nav" to="/">
          <MenuButton label="Home" className="homepage" icon="home" />
        </Link>
        <Link className="button-nav" to="/recipes">
          <MenuButton
            label="Recipes"
            className="recipe-gallery-all"
            icon="view_module"
          />
        </Link>
        {user.loggedIn ? (
          <Link className="button-nav" to="/my-recipes">
            <MenuButton
              label="My Recipes"
              className="recipe-gallery-user"
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
      </nav>
    </div>
  );
};

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps)(DrawerLeft);
