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
      <section className="auth sign-in-container" onSubmit={handleSubmit}>
        <header className="auth header">
          <h1>Create Your Recipe!</h1>
        </header>
        <form className="auth sign-in">
          <input
            required
            className="auth recipe-name"
            type="text"
            placeholder="Recipe Name"
            value={newRecipe.name}
            name="name"
            onChange={handleChange}
          />
          <input
            required
            className="auth recipe-description"
            type="text"
            placehold="Description"
            value={newRecipe.description}
            name="description"
            onChange={handleChange}
          />
          <MenuButton
            type="submit"
            className="auth submit"
            label="Create"
            icon="create"
          />
        </form>
      </section>
    );
  }
};

const mapStateToProps = state => {
  // debugger;
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
