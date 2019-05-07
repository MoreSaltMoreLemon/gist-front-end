function addStepIngredient(state, action) {
  const recipe_steps = state.recipe_steps.slice();
  const indexOfRecipeStep = recipe_steps.findIndex(rs => {
    return rs.id === action.step_ingredient.recipe_step_id;
  });
  if (indexOfRecipeStep >= 0) {
    const recipe_step = { ...recipe_steps[indexOfRecipeStep] };
    recipe_step.step_ingredients.push(action.step_ingredient);
    recipe_steps[indexOfRecipeStep] = recipe_step;
  }

  return { ...state, recipe_steps };
}

function editStepIngredient(state, action) {
  const recipeStepId = action.step_ingredient.recipe_step_id;
  const stepIngredientId = action.step_ingredient.id;

  const recipe_steps = state.recipe_steps.map(step => {
    if (step.id === recipeStepId) {
      step = { ...step };
      const stepIngredients = step.step_ingredients.map(stepIngredient => {
        if (stepIngredient.id === stepIngredientId) {
          return action.step_ingredient;
        } else {
          return stepIngredient;
        }
      });
      step.step_ingredients = stepIngredients;
      return step;
    } else {
      return step;
    }
  });

  return { ...state, recipe_steps };
}

function removeStepIngredient(state, action) {
  const recipeStepId = action.step_ingredient.recipe_step_id;
  const stepIngredientId = action.step_ingredient.id;

  const recipe_steps = state.recipe_steps.map(step => {
    if (step.id === recipeStepId) {
      step = { ...step };
      const stepIngredients = step.step_ingredients.filter(
        stepIngredient => stepIngredient.id !== stepIngredientId
      );
      step.step_ingredients = stepIngredients;
      return step;
    } else {
      return step;
    }
  });

  return { ...state, recipe_steps };
}

export { addStepIngredient, editStepIngredient, removeStepIngredient };
