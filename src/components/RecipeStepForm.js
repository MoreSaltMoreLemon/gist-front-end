import React, { Component } from "react";
import { connect } from "react-redux";

import { GithubPicker } from "react-color";
import { defaultColors, randomColor } from "../helpers/colors";
import RecipeStepRatioBar from "./RecipeStepRatioBar";
import Button from "./Button";
import UnitSelector from "./UnitSelector";
import { convertToGrams } from "../helpers/units";

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

    let recipe_step = props.recipe_step || blankStep;
    if (!recipe_step.color) recipe_step.color = randomColor();

    // let yieldTotal;
    // // debugger
    // if (Number(recipe_step.yield) !== 0) {
    //   yieldTotal = recipe_step.yield;
    // } else {
    //   const contents = [
    //     ...recipe_step.step_ingredients,
    //     ...recipe_step.step_sub_recipes
    //   ];

    //   yieldTotal = contents.reduce((acc, content) => {
    //     return acc += convertToGrams(content.unit_id, Number(content.quantity));
    //   }, 0);

    // }

    this.state = { ...props.recipe_step, showColorPicker: false };
    // debugger
  }

  calcYieldTotal = () => {
    const contents = [
      ...this.props.recipe_step.step_ingredients,
      ...this.props.recipe_step.step_sub_recipes
    ];

    return contents.reduce((acc, content) => {
      return acc += convertToGrams(content.unit_id, Number(content.quantity));
    }, 0);
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleColorChange = e => {
    this.setState({ color: e.hex, showColorPicker: false });
  };

  showColorPickerDisplay = () => this.setState({ showColorPicker: true });
  hideColorPickerDisplay = () => this.setState({ showColorPicker: false });

  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    this.props.editRecipeStep(this.state);
  };

  handleDelete = e => {
    this.props.removeRecipeStep(this.state);
  };

  receipeStepContents = () => {
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
            className="step-color-swatch"
            style={{ backgroundColor: this.state.color }}
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
          step_contents={this.receipeStepContents()}
          total={this.props.total}
        />
        <div className="recipe-ingredients">{this.props.children}</div>
        <div className="step-yield-container">
          <label htmlFor="yield" className="step-yield-quantity-label">Yield: </label>
          <input
            name={Number(this.state.yield) !== 0 ? "yield" : "yieldTotal" }
            type="text"
            className="step-yield-quantity"
            placeholder="Yield"
            // onChange={this.handleChange}
            readOnly
            value={this.calcYieldTotal()}
          />
          <UnitSelector
            name="yield_unit_id"
            className="step-yield-unit"
            onChange={this.handleChange}
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
