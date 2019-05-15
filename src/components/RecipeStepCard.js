import React from "react";
import StepIngredientDisplayToggle from "./StepIngredientDisplayToggle";
import StepContentShowForms from "./StepContentShowForms";
import RecipeStepForm from "./RecipeStepForm";
import { convertToGrams } from "../helpers/units";

const RecipeStepCard = ({ recipe_step }) => {
  let contents = [];
  let total = 1; // total the quantity of all of the ingredients in grams || each

  if (recipe_step.step_ingredients && recipe_step.step_sub_recipes) {
    contents = [
      ...recipe_step.step_ingredients,
      ...recipe_step.step_sub_recipes
    ];

    // Calculate the total grams of the ingredients in the recipe step
    // which can include other recipes, in order to use for the bar graphs.
    total = contents.reduce((acc, content) => {
      return acc += convertToGrams(content.unit_id, Number(content.quantity));
    }, 0);
  }

  // If there are any ingredients, sort them by their sequence order.
  // The sequence_order field is intended for later use by a drag/drop
  // re-ordering mechanism.
  if (contents.length > 0) {
    contents.sort((a, b) => a.sequence_order - b.sequence_order);
  }

  const contentCards = contents.map(content => (
    <StepIngredientDisplayToggle
      key={content.uuid}
      is_sub_recipe={content.is_sub_recipe}
      stepComponentContent={content}
      total={total}
    />
  ));

  return (
    <div className="recipe-step-card">
      <RecipeStepForm recipe_step={recipe_step} total={total}>
        {contentCards}
        <StepContentShowForms recipe_step={recipe_step} />
      </RecipeStepForm>
    </div>
  );
};

export default RecipeStepCard;
