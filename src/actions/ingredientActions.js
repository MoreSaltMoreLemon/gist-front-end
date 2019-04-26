function addIngredientAction(recipe, step, ingredient) {
  return {
    type: 'ADD_INGREDIENT',
    recipe,
    step,
    ingredient
  }
}

function addRecipeAsIngredientAction(recipe, step, recipeIngredient) {
  return {
    type: 'ADD_RECIPE_AS_INGREDIENT',
    recipe,
    step,
    recipeIngredient
  }
}

function editIngredientAction(recipe, step, ingredient) {
  return {
    type: 'EDIT_INGREDIENT',
    recipe,
    step,
    ingredient
  }
}

function removeIngredientAction(recipe, step, ingredient) {
  return {
    type: 'REMOVE_INGREDIENT',
    recipe,
    step,
    ingredient
  }
}

export {
  addIngredientAction,
  addRecipeAsIngredientAction,
  editIngredientAction,
  removeIngredientAction
}