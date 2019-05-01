function getRecipe(state, action) {
  return {...action.recipe}
}

function createRecipe(state, action) {
  // debugger
  return {...action.recipe}
}

function editRecipe(state, action) {
  // debugger
  return {...state, ...action.recipe}
}

function removeRecipe(state, action) {
  return {} 
}

export {
  getRecipe,
  createRecipe,
  editRecipe, 
  removeRecipe
}