import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { isEmpty } from "../helpers/miscHelpers";

import Doughnut from "../components/Doughnut";
import RecipeHeader from "../components/RecipeHeader";
import RecipeStepsContainer from "./RecipeStepsContainer";

import { getRecipeAction } from "../reducers/actions/recipeActions";

const RecipeForm = props => {

  // Determine if a new recipe needs to be fetched and stored in redux
  // Is the user logged in? If not, do nothing. If so,
  // Is there a recipe in the redux store? If no, get one.
  // If so, is that recipe the requested recipe? If no, get a new one
  // If so, render page.
  useEffect(() => {
    if (props.user.jwt) {
      if (isEmpty(props.recipe)) {
        props.getRecipe({ id: props.recipeId });
      } else if (props.recipe.id !== Number(props.recipeId)) {
        props.getRecipe({ id: props.recipeId });
      }
    }
  });

  // If user is not logged in, redirect to login page.
  // Not happy with this pattern, however it was cleaner than
  // wrapping the component in both redux connect and
  // a react-router history object
  if (!props.user.jwt) {
    return <Redirect to="/sign-in" />;
  // If no recipes have been pulled from backend, or
  // if the recipe in redux does not match the requested
  // recipeId, return null and try again.
  } else if (
    isEmpty(props.recipe) ||
    props.recipe.id !== Number(props.recipeId)
  ) {
    return (
      <div
        className="heroku-loading"
      >
        <span>Waiting on Heroku to spool up! Takes about 10-20 seconds.</span>
      </div>);
  // Otherwise, render RecipeForm
  } else {
    return (
      <Fragment>
        <div className="content-header">
          <div className="recipe-graph-doughnut-container">
            <Doughnut className="recipe-graph-doughnut" recipe={props.recipe} />
          </div>
          <RecipeHeader recipe={props.recipe} />
        </div>
        <div className="content-body">
          <RecipeStepsContainer recipe={props.recipe} />
        </div>
      </Fragment>
    );
  }
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => {
  return {
    getRecipe: async recipe => dispatch(await getRecipeAction(recipe))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeForm);
