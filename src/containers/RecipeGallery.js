import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { isEmpty } from "../helpers/miscHelpers";
import {
  getRecipesAction,
  getUserRecipesAction
} from "../reducers/actions/recipesActions";

import RecipeCard from "../components/RecipeCard";
import "../css/recipeGallery.css";

const RecipeGallery = ({
  recipes,
  getRecipes,
  userId,
  user,
  getUserRecipes
}) => {

  useEffect(() => {
    if (user.loggedIn && userId) {
      getUserRecipes(userId);
    } else if (isEmpty(recipes)) {
      getRecipes();
    }
  });

  let recipeCards = null;

  if (!isEmpty(recipes)) {
    recipeCards = recipes.map(recipe => {
      return <RecipeCard key={recipe.uuid} recipe={recipe} />;
    });
  }

  return <div className="recipe-gallery">{recipeCards}</div>;
};

const mapStateToProps = state => ({ recipes: state.recipes, user: state.user });

const mapDispatchToProps = dispatch => {
  return {
    getRecipes: async () => dispatch(await getRecipesAction()),
    getUserRecipes: async userId => dispatch(await getUserRecipesAction(userId))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeGallery);
