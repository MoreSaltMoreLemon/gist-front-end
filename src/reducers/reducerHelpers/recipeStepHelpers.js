function addRecipeStep(state, action) {
  const sequence_order = state.recipe_steps.length;
  const recipe_step = action.recipe_step;
  recipe_step.sequence_order = sequence_order;
  const recipe_steps = state.recipe_steps.concat(action.recipe_step);

  return { ...state, recipe_steps };
}

function editRecipeStep(state, action) {
  const recipe_steps = state.recipe_steps.slice();

  const step_index = recipe_steps.findIndex(step => {
    if (action.recipe_step.hasOwnProperty("id") && action.recipe_step.id > 0) {
      return action.recipe_step.id === step.id;
    } else {
      return step.sequence_order === action.recipe_step.sequence_order;
    }
  });
  if (step_index >= 0) recipe_steps[step_index] = action.recipe_step;

  return { ...state, recipe_steps };
}

function removeRecipeStep(state, action) {
  const recipe_steps = state.recipe_steps.filter(step => {
    return action.recipe_step.id !== step.id;
  });

  return { ...state, recipe_steps };
}

function reorderRecipeSteps(state, action) {
  return state;
}

function reorderRecipeStepContents(state, action) {
  return state;
}

export {
  addRecipeStep,
  editRecipeStep,
  removeRecipeStep,
  reorderRecipeSteps,
  reorderRecipeStepContents
};
