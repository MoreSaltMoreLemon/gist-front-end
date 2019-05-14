import React, { Component } from "react";
import { connect } from "react-redux";

import { GithubPicker } from "react-color";
import { defaultColors, randomColor } from "../helpers/colors";
import RecipeStepRatioBar from "./RecipeStepRatioBar";
import Button from "./Button";
import UnitSelector from "./UnitSelector";
import { convertToGrams, convertGramsToUnitById } from "../helpers/units";

import {
  editRecipeStepAction,
  removeRecipeStepAction
} from "../reducers/actions/recipeStepActions";

const blankStep = {
  color: randomColor(),
  name: ""
};

class RecipeStepForm extends Component {
  constructor(props) {
    super(props);

    // Copy recipe step from props to allow for mutation, then set
    // to state.
    // If brand new step, seed with dummy data
    // otherwise, fill with current data
    let recipe_step = props.recipe_step || blankStep;
    if (recipe_step.color === "") recipe_step.color = randomColor();

    this.state = { ...props.recipe_step, showColorPicker: false };
  }

  // Calculate the total grams of the ingredients in the recipe step
  // which can include other recipes, in order to use for the bar graphs.
  calcYieldTotal = (yield_unit_id) => {
    const contents = [
      ...this.props.recipe_step.step_ingredients,
      ...this.props.recipe_step.step_sub_recipes
    ];

    const total = contents.reduce((acc, content) => {
      return (acc += convertToGrams(Number(content.unit_id), Number(content.quantity)));
    }, 0);

    const convertedTotal = convertGramsToUnitById(
      Number(yield_unit_id),
      total
    );

    return convertedTotal;
  };

  // generic update state on input change
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  
  // generic update state on yield unit change
  handleUnitChange = e => {
    const yield_unit_id = e.target.value
    // use of 'yield' is restricted
    const yieldQuantity = this.calcYieldTotal(yield_unit_id)

    this.setState({ yield_unit_id, yield: yieldQuantity });
  }

  // if the color has changed, set new color and hide color picker
  handleColorChange = e =>
    this.setState({ color: e.hex, showColorPicker: false });

  showColorPickerDisplay = () => this.setState({ showColorPicker: true });
  hideColorPickerDisplay = () => this.setState({ showColorPicker: false });

  // shove all attributes into db and redux. If the attributes aren't a part
  // of the actual backend schema, they'll be filtered out by rails params.
  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    this.props.editRecipeStep(this.state);
  };

  handleDelete = e => {
    this.props.removeRecipeStep(this.state);
  };

  recipeStepContents = () => {
    return [
      ...this.props.recipe_step.step_ingredients,
      ...this.props.recipe_step.step_sub_recipes
    ];
  };

  render() {
    return (
      <form className="step-name-container form" onSubmit={this.handleSubmit}>
        <div className="step-properties">
          <input
            name="name"
            type="text"
            className="step-name"
            placeholder="Step Name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <div
            tabIndex={0}
            className="step-color-swatch"
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
                className="step-color-picker"
                color={this.state.color}
                colors={defaultColors}
                onChange={this.handleColorChange}
              />
            ) : null}
          </div>
        </div>
        <RecipeStepRatioBar
          step_contents={this.recipeStepContents()}
          total={this.props.total}
        />
        <div className="recipe-ingredients">{this.props.children}</div>
        <div className="step-yield-container">
          <label htmlFor="yield" className="step-yield-quantity-label">
            Yield:{" "}
          </label>
          <input
            tabIndex={-1}
            name="yield"
            type="text"
            className="step-yield-quantity"
            placeholder="Yield"
            readOnly
            value={this.state.yield}
          />
          <UnitSelector
            name="yield_unit_id"
            className="step-yield-unit"
            onChange={this.handleUnitChange}
            readOnly
            value={this.state.yield_unit_id}
          />
          <Button
            type="submit"
            className="step-submit button"
            label="Save"
            icon="save"
            // value="Save"
          />
          <Button
            tabIndex={5}
            type="button"
            className="step-delete"
            label="Delete"
            icon="delete"
            data-tip="global"
            data-for="Delete"
            onClick={this.handleDelete}
          />
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editRecipeStep: async recipe_step =>
      dispatch(await editRecipeStepAction(recipe_step)),
    removeRecipeStep: async recipe_step =>
      dispatch(await removeRecipeStepAction(recipe_step))
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(RecipeStepForm);
