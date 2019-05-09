import React, { useEffect } from "react";
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
  getUserRecipes,
  isPrivate
}) => {
  useEffect(() => {
    if (isEmpty(recipes)) {
      getRecipes();
    }
  });

  let recipeCards = null;

  if (!isEmpty(recipes)) {
    recipeCards = recipes
      .filter(recipe => {
        if (isPrivate && userId && recipe.user_id === Number(userId)) return true;
        else if (!isPrivate) return recipe.public;
        else return false;
      })
      .map(recipe => {
        return (
          <RecipeCard key={recipe.uuid} recipe={recipe} isPrivate={isPrivate} />
        );
      });
    // debugger
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
