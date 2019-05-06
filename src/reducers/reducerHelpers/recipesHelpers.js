function getAllRecipes(state, action) {
  // debugger
  return [...action.recipes]
}

function createRecipe(state, action) {
  const newRecipes = state.slice()
  newRecipes.push(action.recipe)
  // debugger
  return [...newRecipes]
}

function removeRecipe(state, action) {
  // debugger
  const newRecipes = state.filter(recipe => {
    return action.recipe.id !== recipe.id
  })
  return [...newRecipes]
}

export { getAllRecipes, createRecipe, removeRecipe }