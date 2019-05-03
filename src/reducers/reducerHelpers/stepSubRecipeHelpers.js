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
  
  const recipeStepId = action.step_sub_recipe.recipe_step_id
  const stepSubRecipeId = action.step_sub_recipe.id

  const recipe_steps = state.recipe_steps.map(step => {
    if (step.id === recipeStepId) {
      step = {...step}
      const stepSubRecipes = step.step_sub_recipes.map(stepSubRecipe => {
        if (stepSubRecipe.id === stepSubRecipeId) {
          return action.step_sub_recipe
        } else {
          return stepSubRecipe
        }
      })
      step.step_sub_recipes = stepSubRecipes
      return step
    } else {
      return step
    }
  })
   
  return {...state, recipe_steps}
}

function removeStepSubRecipe(state, action) {
  debugger
  const recipeStepId = action.step_sub_recipe.recipe_step_id
  const stepSubRecipeId = action.step_sub_recipe.id

  const recipe_steps = state.recipe_steps.map(step => {
    if (step.id === recipeStepId) {
      step = {...step}
      const stepSubRecipes = step.step_sub_recipes.filter(stepSubRecipe => stepSubRecipe.id !== stepSubRecipeId)
      step.step_sub_recipes = stepSubRecipes
      return step
    } else {
      return step
    }
  })
   
  return {...state, recipe_steps}
}

export {
  addStepSubRecipe, 
  editStepSubRecipe, 
  removeStepSubRecipe,
}