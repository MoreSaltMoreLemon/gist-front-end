import React from "react";
import { connect } from "react-redux";
import RecipeStepCard from "../components/RecipeStepCard";
import Button from "../components/Button";
import { addRecipeStepAction } from "../reducers/actions/recipeStepActions";

const RecipeStepsContainer = ({ recipe, addRecipeStep }) => {
  const renderRecipeSteps = recipe_steps => {
    return recipe_steps
      .sort((a, b) => a.sequence_order - b.sequence_order)
      .map(recipe_step => {
        return (
          <RecipeStepCard key={recipe_step.uuid} recipe_step={recipe_step} />
        );
      });
  };

  return (
    <div className="recipe-form">
      {recipe.recipe_steps ? renderRecipeSteps(recipe.recipe_steps) : null}
      <footer>
        <Button
          type="submit"
          className="step-add-button"
          value="Add Step"
          onClick={() => addRecipeStep(recipe.id, {})}
          label="Create Sub-Recipe"
          icon="add"
        />
      </footer>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addRecipeStep: async (recipe_id, recipe_step) =>
      dispatch(await addRecipeStepAction(recipe_id, recipe_step))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(RecipeStepsContainer);
