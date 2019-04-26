function setRecipe(state, action) {
  return {...state, recipe: action.recipe}
}

function editRecipe(state, action) {
  return {...state, recipe: action.recipe}
}

function removeRecipe(state, action) {
  const newState = {...state}
  delete newState.recipe
  return newState 
}

export {
  setRecipe,
  editRecipe, 
  removeRecipe
}