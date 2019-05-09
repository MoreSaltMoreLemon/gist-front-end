import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import SignOut from "../components/SignOut";
import NewRecipe from "../components/NewRecipe";
import RecipeGallery from "./RecipeGallery";
import RecipeForm from "./RecipeForm";
import InvalidPath from "../components/InvalidPath";

const ContentContainer = ({ user, match }) => {
  return (
    <div className="content-container">
      <Switch>
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-out" component={SignOut} />
        <Route
          path="/recipes"
          exact
          render={props => {
            return <RecipeGallery userId={null} isPrivate={false}/>;
          }}
        />
        <Route
          path="/my-recipes"
          exact
          render={props => {
            return <RecipeGallery userId={user.user.id} isPrivate={true}/>;
          }}
        />
        <Route path="/recipes/new" exact component={NewRecipe} />
        <Route
          path="/recipes/:recipeId"
          render={props => {
            return <RecipeForm recipeId={props.match.params.recipeId} />;
          }}
        />
        <Route component={InvalidPath} />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps)(ContentContainer);
