function addStep(state, action) {
  const modifiedRecipe = Object.assign(action.recipe)
  const recipeSteps = modifiedRecipe.steps.slice()
  recipeSteps.
  return {...state, recipe: modifiedRecipe }
}

function editStep(state, action) {

}

function removeStep(state, action) {

}


export {
  addStep, 
  editStep, 
  removeStep
}