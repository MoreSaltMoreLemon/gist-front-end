function addStepSubRecipe(state, action) {
  const recipe_steps = state.recipe_steps.slice()
  const indexOfRecipeStep = recipe_steps.findIndex(rs => {
    return rs.id === action.step_sub_recipe.recipe_step_id
  })
  if (indexOfRecipeStep >= 0) {
    const recipe_step = {...recipe_steps[indexOfRecipeStep]}
    recipe_step.step_sub_recipes.push(action.step_sub_recipe)
    recipe_steps[indexOfRecipeStep] = recipe_step
  }
  
  return {...state, recipe_steps}
}

function editStepSubRecipe(state, action) {
  
  const recipe_steps = state.recipe_steps.slice()
  const indexOfRecipeStep = recipe_steps.findIndex(rs => {
    return rs.id === action.step_sub_recipe.recipe_step_id
  })
  if (indexOfRecipeStep >= 0) {
    const recipe_step = {...recipe_steps[indexOfRecipeStep]}
    const stepSubRecipeIndex = recipe_step.step_sub_recipes.findIndex(step_sub_recipe => {
      return action.step_sub_recipe.id === step_sub_recipe.id
    })
    recipe_step.step_sub_recipes[stepSubRecipeIndex] = action.step_sub_recipe
    recipe_steps[indexOfRecipeStep] = recipe_step 
  }
   
  return {...state, recipe_steps}
}

function removeStepSubRecipe(state, action) {
  const recipe_steps = state.recipe_steps.slice()
  const indexOfRecipeStep = recipe_steps.findIndex(rs => {
    return rs.id === action.step_sub_recipe.recipe_step_id
  })
  if (indexOfRecipeStep >= 0) {
    const recipe_step = {...recipe_steps[indexOfRecipeStep]}
    const stepSubRecipeIndex = recipe_step.step_sub_recipes.findIndex(step_sub_recipe => {
      return action.step_sub_recipe.id === step_sub_recipe.id
    })
    recipe_step.step_sub_recipes.splice(stepSubRecipeIndex, 1)
    recipe_steps[indexOfRecipeStep] = recipe_step 
  }
   
  return {...state, recipe_steps}
}

export {
  addStepSubRecipe, 
  editStepSubRecipe, 
  removeStepSubRecipe,
}