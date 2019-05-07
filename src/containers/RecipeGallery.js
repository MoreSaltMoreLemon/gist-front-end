import React, { useEffect } from "react";
import { connect } from "react-redux";

import { isEmpty } from "../helpers/miscHelpers";
import { getRecipesAction } from "../reducers/actions/recipesActions";

import RecipeCard from "../components/RecipeCard";
import "../css/recipeGallery.css";

const RecipeGallery = props => {
  useEffect(() => {
    if (isEmpty(props.recipes)) {
      props.getRecipes();
    }
  });

  let recipeCards = null;

  if (!isEmpty(props.recipes)) {
    recipeCards = props.recipes.map(recipe => {
      return <RecipeCard key={recipe.uuid} recipe={recipe} />;
    });
  }

  return <div className="recipe-gallery">{recipeCards}</div>;
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => {
  return {
    getRecipes: async () => dispatch(await getRecipesAction())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeGallery);
