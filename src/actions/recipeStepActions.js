function addRecipeStepAction(recipe_step) {
  return {
    type: 'ADD_RECIPE_STEP',
    recipe_step
  }
}

function editRecipeStepAction(recipe_step) {
  return {
    type: 'EDIT_RECIPE_STEP',
    recipe_step
  }
}

function removeRecipeStepAction(recipe_step) {
  return {
    type: 'REMOVE_RECIPE_STEP',
    recipe_step
  }
}

export {
  addRecipeStepAction,
  editRecipeStepAction,
  removeRecipeStepAction
}