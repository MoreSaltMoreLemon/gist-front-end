function getRecipe(state, action) {
  return { ...action.recipe };
}

function createRecipe(state, action) {
  return { ...action.recipe };
}

function editRecipe(state, action) {
  return { ...state, ...action.recipe };
}

export { getRecipe, createRecipe, editRecipe };
