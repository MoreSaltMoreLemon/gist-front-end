import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MenuButton from "./MenuButton";
import "../css/drawerLeft.css";

const DrawerLeft = ({ createRecipe }) => {
  return (
    <div className="drawer-left">
      <nav className="drawer-nav">
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
        <Route
          exact
          path="/recipes"
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

export default DrawerLeft;
