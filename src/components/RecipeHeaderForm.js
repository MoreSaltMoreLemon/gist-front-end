import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "./Button";

import { editRecipeAction } from "../reducers/actions/recipeActions";

class RecipeHeaderForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.recipe };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation(); // to address potential issues with multiple forms on same page
    this.props.editRecipe({ ...this.state }, () =>
      // close form after saving edits.
      this.props.setShowEditForm(false)
    );
  };

  render() {
    return (
      <form className="recipe-header-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          className="recipe-title"
          placeholder="Recipe Name"
          required
          onChange={this.handleChange}
          value={this.state.name}
        />
        <textarea
          name="description"
          maxLength="280"
          wrap="soft"
          className="recipe-description"
          placeholder="Recipe Description"
          onChange={this.handleChange}
          value={this.state.description}
        />
        <input
          type="text"
          name="image_url"
          maxLength={280}
          className="recipe-image-url"
          placeholder="Recipe Image URL"
          onChange={this.handleChange}
          value={this.state.image_url}
        />
        <Button
          type="submit"
          name="submit"
          className="recipe-submit"
          label="Save"
          icon="save"
          value="Submit"
        />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editRecipe: async (recipe, callbackFn) => {
      dispatch(await editRecipeAction(recipe));
      callbackFn(); // closes edit form after saving
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(RecipeHeaderForm);
