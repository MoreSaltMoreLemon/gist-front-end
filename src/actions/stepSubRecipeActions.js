function addStepSubRecipeAction(recipe, step, ingredient) {
  return {
    type: 'ADD_STEP_SUB_RECIPE',
    recipe,
    step,
    ingredient
  }
}

function editStepSubRecipeAction(recipe, step, ingredient) {
  return {
    type: 'EDIT_STEP_SUB_RECIPE',
    recipe,
    step,
    ingredient
  }
}

function removeStepSubRecipeAction(recipe, step, ingredient) {
  return {
    type: 'REMOVE_STEP_SUB_RECIPE',
    recipe,
    step,
    ingredient
  }
}

export {
  addStepSubRecipeAction,
  editStepSubRecipeAction,
  removeStepSubRecipeAction
}