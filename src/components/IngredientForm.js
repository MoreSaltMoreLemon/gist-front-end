import React, { Component } from "react";
import { connect } from "react-redux";
import { GithubPicker } from "react-color";
import Button from "./Button";
import { defaultColors, randomColor } from "../helpers/colors";
import UnitSelector from "./UnitSelector";

const blankIngredient = {
  color: randomColor(),
  ingredient: { name: "" },
  quantity: 0,
  unit: "",
  instruction: ""
};

class StepIngredientForm extends Component {
  constructor(props) {
    super(props);

    let step_ingredient = props.step_ingredient || blankIngredient;
    if (!step_ingredient.color) step_ingredient.color = randomColor();

    const ingredientName = step_ingredient.ingredient.name;

    this.state = { ...step_ingredient, showColorPicker: false, ingredientName };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleColorChange = e =>
    this.setState({ color: e.hex, showColorPicker: false });

  showColorPickerDisplay = () => this.setState({ showColorPicker: true });
  hideColorPickerDisplay = () => this.setState({ showColorPicker: false });

  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    if (this.props.isEditForm) {
      this.props.editStepIngredient(this.state, () =>
        this.props.setShowForm(false)
      );
    } else {
      this.props.addStepIngredient(this.props.recipe_step.id, this.state, () =>
        this.props.setShowForm(false)
      );
    }
  };

  handleDelete = e => {
    this.props.removeStepIngredient(this.state, () =>
      this.props.setShowForm(false)
    );
  };

  render() {
    return (
      <form
        className="ingredient-card ingredient-form"
        // noValidate
        onSubmit={this.handleSubmit}
      >
        <div className="ingredient-ratio-container">
          <div
            tabIndex={0}
            className="ingredient-color-swatch"
            style={{ backgroundColor: this.state.color }}
            onFocus={this.showColorPickerDisplay}
            onBlur={this.hideColorPickerDisplay}
            onClick={this.showColorPickerDisplay}
            onMouseEnter={this.showColorPickerDisplay}
            onMouseLeave={this.hideColorPickerDisplay}        
          >
            {this.state.showColorPicker ? (
              <GithubPicker
                name="color"
                className="ingredient-color-picker"
                color={this.state.color}
                colors={defaultColors}
                onChange={this.handleColorChange}
              />
            ) : null}
          </div>
        </div>
        <div className="ingredient-properties">
          <input
            name="ingredientName"
            type="text"
            className="ingredient-name"
            placeholder="Ingredient Name"
            onChange={this.handleChange}
            value={this.state.ingredientName}
          />
          <input
            name="quantity"
            type="text"
            className="ingredient-quantity"
            placeholder="Qty"
            onChange={this.handleChange}
            value={this.state.quantity}
          />
          <UnitSelector
            name="unit_id"
            className="ingredient-unit"
            onChange={this.handleChange}
            value={this.state.unit_id}
          />
          <input
            name="instruction"
            type="text"
            className="ingredient-instruction"
            placeholder="Instructions"
            onChange={this.handleChange}
            value={this.state.instruction}
          />
          <Button
            type="submit"
            className="ingredient-submit"
            label="Save Ingredient"
            icon="save"
            value="Save"
          />
          <Button
            type="button"
            className="ingredient-delete"
            value="Delete"
            label="Delete Ingredient"
            icon="delete"
            onClick={this.handleDelete}
          />
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addStepIngredient: async (recipe_step_id, step_ingredient, callbackFn) => {
      dispatch(await addStepIngredientAction(recipe_step_id, step_ingredient));
      callbackFn();
    },
    editStepIngredient: async (step_ingredient, callbackFn) => {
      dispatch(await editStepIngredientAction(step_ingredient));
      callbackFn();
    },
    removeStepIngredient: async (step_ingredient, callbackFn) => {
      dispatch(await removeStepIngredientAction(step_ingredient));
      callbackFn();
    }
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(StepIngredientForm);
