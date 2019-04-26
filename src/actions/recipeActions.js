function setRecipeAction(recipe) {
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

function removeRecipeAction(recipe) {
  return { 
    type: 'REMOVE_RECIPE',
    recipe
  }
}

export {
  setRecipeAction,
  editRecipeAction,
  removeRecipeAction
}