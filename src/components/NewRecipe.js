import React, { useState } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { createRecipeAction } from "../reducers/actions/recipesActions";

import MenuButton from "./MenuButton";
import "../css/auth.css";

const NewRecipe = ({ createRecipe, recipe }) => {
  const [newRecipe, setNewRecipe] = useState({ name: "", description: "" });
  const [recipeCreated, setRecipeCreated] = useState(false);

  const handleChange = e =>
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    createRecipe(newRecipe, setRecipeCreated);
  };

  if (recipeCreated) {
    return <Redirect to={`/recipes/${recipe.id}`} />;
  } else {
    return (
      <section className="auth sign-in auth-container" onSubmit={handleSubmit}>
        <header className="auth header">
          <h1>Create Your Recipe!</h1>
        </header>
        <form className="auth sign-in">
          <div className="label-input-container">
            <label>Recipe Name: </label>
            <input
              required
              className="auth username"
              type="text"
              placeholder="Recipe Name"
              value={newRecipe.name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="label-input-container">
            <label>Description: </label>
            <input
              required
              className="auth password"
              type="text"
              placehold="Description"
              value={newRecipe.description}
              name="description"
              onChange={handleChange}
            />
          </div>
          <div className="auth buttons">
            <MenuButton
              type="submit"
              className="auth submit"
              label="Create"
              icon="create"
            />
          </div>
        </form>
      </section>
    );
  }
};

const mapStateToProps = state => {
  return { recipe: state.recipe };
};

const mapDispatchToProps = dispatch => ({
  createRecipe: async (recipe, callbackFn) => {
    dispatch(await createRecipeAction(recipe));
    callbackFn(true);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRecipe);
