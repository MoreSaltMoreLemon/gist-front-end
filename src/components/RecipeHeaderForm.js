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
    e.stopPropagation();
    this.props.editRecipe({ ...this.state }, () =>
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
          // type='textarea'
          name="description"
          maxLength="280"
          wrap="soft"
          // rows='6'
          placeholder="A lovely description of your recipe."
          className="recipe-description"
          placeholder="Recipe Description"
          onChange={this.handleChange}
          value={this.state.description}
        />
        <input
          type="text"
          name="image_url"
          maxLength="280"
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
        {/* <button onClick={() => props.updateRecipe({id: props.recipe.id, name: "RenamedTestRecipe", user_id: 1})}><i class="material-icons button-icon">edit</i></button> */}
        {/* <Button 
          className='recipe-remove'
          label="Delete" 
          icon="remove"
          onClick={() => this.props.removeRecipe({id: this.props.recipe.id})}
        /> */}
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editRecipe: async (recipe, callbackFn) => {
      dispatch(await editRecipeAction(recipe));
      callbackFn();
    }
    // createRecipe: async (recipe, user, jwt = '') => dispatch(await createRecipeAction(recipe, user, jwt)),
    // updateRecipe: async (recipe, jwt = '') => dispatch(await editRecipeAction(recipe, jwt)),
    // removeRecipe: async (recipe, jwt = '') => dispatch(await deleteRecipeAction(recipe, jwt))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(RecipeHeaderForm);
