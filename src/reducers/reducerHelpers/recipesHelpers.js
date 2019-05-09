function getAllRecipes(state, action) {
  return [...action.recipes];
}

function getUserRecipes(state, action) {
  return [...action.user.recipes];
}

function createRecipe(state, action) {
  const newRecipes = state.slice();
  newRecipes.push(action.recipe);
  return [...newRecipes];
}

function toggleShareRecipe(state, action) {
  const newRecipes = state.map(recipe => {
    // debugger
    return recipe.id === action.recipe.id ? action.recipe : recipe
  });

  return [...newRecipes];
}

function favoriteRecipe(state, action) {
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

export {
  getAllRecipes,
  getUserRecipes,
  createRecipe,
  toggleShareRecipe,
  favoriteRecipe,
  removeRecipe
};
