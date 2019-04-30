function addStepIngredientAction(recipe, step, ingredient) {
  return {
    type: 'ADD_STEP_INGREDIENT',
    recipe,
    step,
    ingredient
  }
}

function editStepIngredientAction(recipe, step, ingredient) {
  return {
    type: 'EDIT_STEP_INGREDIENT',
    recipe,
    step,
    ingredient
  }
}

function removeStepIngredientAction(recipe, step, ingredient) {
  return {
    type: 'REMOVE_STEP_INGREDIENT',
    recipe,
    step,
    ingredient
  }
}

export {
  addStepIngredientAction,
  editStepIngredientAction,
  removeStepIngredientAction
}