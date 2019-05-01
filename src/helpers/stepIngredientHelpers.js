function addStepIngredient(state, action) {
  const recipe_steps = state.recipe_steps.slice()
  const indexOfRecipeStep = recipe_steps.findIndex(rs => {
    return rs.id === action.step_ingredient.recipe_step_id
  })
  if (indexOfRecipeStep >= 0) {
    const recipe_step = {...recipe_steps[indexOfRecipeStep]}
    recipe_step.step_ingredients.push(action.step_ingredient)
    recipe_steps[indexOfRecipeStep] = recipe_step
  }
  
  return {...state, recipe_steps}
}

function editStepIngredient(state, action) {
  const recipe_steps = state.recipe_steps.slice()
  const indexOfRecipeStep = recipe_steps.findIndex(rs => {
    return rs.id === action.step_ingredient.recipe_step_id
  })
  if (indexOfRecipeStep >= 0) {
    const recipe_step = {...recipe_steps[indexOfRecipeStep]}
    const stepIngredientIndex = recipe_step.step_ingredients.findIndex(step_ingredient => {
      return action.step_ingredient.id === step_ingredient.id
    })
    recipe_step.step_ingredients[stepIngredientIndex] = action.step_ingredient
    recipe_steps[indexOfRecipeStep] = recipe_step 
  }
  return {...state, recipe_steps}
}

function removeStepIngredient(state, action) {
  return state
}


export {
  addStepIngredient, 
  editStepIngredient, 
  removeStepIngredient
}