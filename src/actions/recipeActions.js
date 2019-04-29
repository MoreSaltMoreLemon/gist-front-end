function setRecipeAction(recipe) {
  console.log("SET RECIPE", recipe)
  return { 
    type: 'SET_RECIPE',
    recipe
  }
}

function editRecipeAction(recipe) {
  return { 
    type: 'EDIT_RECIPE',
    recipe
  }
}

function clearRecipeAction(recipe) {
  return { 
    type: 'CLEAR_RECIPE',
    recipe
  }
}

export {
  setRecipeAction,
  editRecipeAction,
  clearRecipeAction
}