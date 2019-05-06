import { 
  getRecipe,
  createRecipe,
  editRecipe 
  // removeRecipe 
} from './reducerHelpers/recipeHelpers'

import {
  addRecipeStep,
  editRecipeStep,
  removeRecipeStep,
  reorderRecipeSteps,
  reorderRecipeStepContents
} from './reducerHelpers/recipeStepHelpers'

import { 
  addStepSubRecipe, 
  editStepSubRecipe, 
  removeStepSubRecipe
} from './reducerHelpers/stepSubRecipeHelpers'

import { 
  addStepIngredient, 
  editStepIngredient, 
  removeStepIngredient  
} from './reducerHelpers/stepIngredientHelpers'

const recipeReducer = (state = {}, action) => {
  switch (action.type) {
    // payload: recipe: { id }
    case 'GET_RECIPE':
      return getRecipe(state, action)
    // payload: recipe: { id }
    case 'CREATE_RECIPE':
      return createRecipe(state, action)
    // payload: recipe: { id, properties }
    case 'EDIT_RECIPE': 
      return editRecipe(state, action)
    // payload: recipe: { id }, sub_recipe: { properties }
    case 'ADD_RECIPE_STEP':
      return addRecipeStep(state, action)
    case 'EDIT_RECIPE_STEP':
      return editRecipeStep(state, action)
    case 'REMOVE_RECIPE_STEP':
      return removeRecipeStep(state, action)
    case 'REORDER_RECIPE_STEPS':
      return reorderRecipeSteps(state, action)
    case 'REORDER_RECIPE_STEP_CONTENTS':
      return reorderRecipeStepContents(state, action)
    case 'ADD_STEP_SUB_RECIPE':  
      return addStepSubRecipe(state, action)
    case 'EDIT_STEP_SUB_RECIPE': 
      return editStepSubRecipe(state, action)
    // payload: recipe: { id }, sub_recipe: { id }
    case 'REMOVE_STEP_SUB_RECIPE': 
      return removeStepSubRecipe(state, action)
    // payload: recipe: { id }, sub_recipe: { id }, ingredient: { properties }
    case 'ADD_STEP_INGREDIENT': 
      return addStepIngredient(state, action)
    // payload: recipe: { id }, sub_recipe: { id }, ingredient: { id, properties }
    case 'EDIT_STEP_INGREDIENT': 
      const newState = editStepIngredient(state, action)
      // debugger
      return newState
    // payload: recipe: { id }, sub_recipe: { id }, ingredient: { id }
    case 'REMOVE_STEP_INGREDIENT': 
      return removeStepIngredient(state, action)
    default:
      return state
  }
}

export default recipeReducer