import React from "react";
import Reorder, { reorder, reorderImmutable, reorderFromTo, reorderFromToImmutable } from "react-reorder";
import StepIngredientDisplayToggle from "./StepIngredientDisplayToggle";
import StepContentShowForms from "./StepContentShowForms";
import RecipeStepForm from "./RecipeStepForm";

const RecipeStepCard = ({ recipe_step }) => {
  let contents = [];
  let total = 1; // total the quantity of all of the ingredients in grams || each

  if (recipe_step.step_ingredients && recipe_step.step_sub_recipes) {
    contents = [
      ...recipe_step.step_ingredients,
      ...recipe_step.step_sub_recipes
    ];

    total = contents.reduce((acc, el) => (acc += Number(el.quantity)), 0);
  }

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
          <Reorder 
            reorderId={`${recipe_step.id}`}
            reorderGroup="step-ingredients"
          >
            {contentCards}
          </Reorder>
        <StepContentShowForms recipe_step={recipe_step} />
      </RecipeStepForm>
    </div>
  );
};

export default RecipeStepCard;
