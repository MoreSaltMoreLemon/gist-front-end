import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  toggleShareRecipeAction,
  favoriteRecipeAction,
  deleteRecipeAction
} from "../reducers/actions/recipesActions";
import Button from "./Button";
import placeholderImage from "../images/placeholder.png";

import "../css/recipeGallery.css";

// Recipe display card for the gallery
// Shows the image, if any, title and description
// Clicking redirects to the edit form
// If the logged in user owns the recipe and the
// recipe is being displayed in their private gallery,
// toggle-share and delete buttons are visible.

// Note that nested recipes which are dependencies of other recipes
// are currently vulnerable when deleted.
const RecipeCard = ({
  recipe,
  toggleShareRecipe,
  favoriteRecipe,
  deleteRecipe,
  isPrivate
}) => {

  return (
    <div className="recipe-gallery-card-container">
      <div className="recipe-gallery-button-container">
        {isPrivate ? (
          <div className="recipe-gallery-button-relative-container">
            <Button
              onClick={() => {
                console.log("TOGGLE!")
                toggleShareRecipe(recipe)
                }
              }
              className="recipe-share icon-button"
              type="share"
              label="Share"
              icon={ recipe.public ? "lock" : "share"}
            />
            <Button
              onClick={() => deleteRecipe(recipe)}
              className="recipe-remove icon-button"
              type="remove"
              label="Delete"
              icon="delete"
            />
          </div>
        ) : (
          null
        )}
      </div>
      <Link
        to={`/recipes/${recipe.id}`}
        style={{ textDecoration: "none", color: "var(--font-color)" }}
        className="recipe-gallery-card-link"
      >
        <div className="recipe-gallery-card">
          <img
            className="recipe-image"
            src={recipe.image_url || placeholderImage}
            alt={recipe.name}
          />
          <div>
            <h3 className="recipe-title">{recipe.name}</h3>
          </div>
          <p className="recipe-description">{recipe.description}</p>
        </div>
      </Link>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    toggleShareRecipe: async recipe => {
      console.log(recipe)
      dispatch(await toggleShareRecipeAction(recipe))
    },
    favoriteRecipe: async recipe =>
      dispatch(await favoriteRecipeAction(recipe)),
    deleteRecipe: async recipe => dispatch(await deleteRecipeAction(recipe))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(RecipeCard);
