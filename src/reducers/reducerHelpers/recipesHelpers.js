function getAllRecipes(state, action) {
  return [...action.recipes];
}

function createRecipe(state, action) {
  const newRecipes = state.slice();
  newRecipes.push(action.recipe);
  return [...newRecipes];
}

function removeRecipe(state, action) {
  const newRecipes = state.filter(recipe => {
    return action.recipe.id !== recipe.id;
  });
  return [...newRecipes];
}

export { getAllRecipes, createRecipe, removeRecipe };
