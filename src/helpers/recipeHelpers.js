function setRecipe(state, action) {
  return {...action.recipe}
}

function editRecipe(state, action) {
  return {...state, ...action.recipe}
}

function removeRecipe(state, action) {
  return {} 
}

export {
  setRecipe,
  editRecipe, 
  removeRecipe
}