import { 
  setRecipe,
  editRecipe, 
  removeRecipe 
} from '../helpers/recipeHelpers'

import { 
  addStep, 
  editStep, 
  removeStep 
} from '../helpers/stepHelpers'

import { 
  addIngredient, 
  addRecipeAsIngredient,
  editIngredient, 
  removeIngredient 
} from '../helpers/ingredientHelpers'

const recipeReducer = (state, action) => {
  console.log("RECIPE REDUCER", state, action)
  switch (action.type) {
    // payload: recipe: { id }
    case 'SET_RECIPE':
      return setRecipe(state, action)
    // payload: recipe: { id, properties }
    case 'EDIT_RECIPE': 
      return editRecipe(state, action)
    // payload: recipe: { id }
    case 'REMOVE_RECIPE': 
      return removeRecipe(state, action)
    // payload: recipe: { id }, step: { properties }
    case 'ADD_STEP':  
      return addStep(state, action)
    // payload: recipe: { id }, step: { id, properties }
    case 'EDIT_STEP': 
      return editStep(state, action)
    // payload: recipe: { id }, step: { id }
    case 'REMOVE_STEP': 
      return removeStep(state, action)
    // payload: recipe: { id }, step: { id }, ingredient: { properties }
    case 'ADD_INGREDIENT': 
      return addIngredient(state, action)
    // payload: recipe: { id }, step: { id }, recipeIngredient: { recipe }
    case 'ADD_RECIPE_AS_INGREDIENT': 
      return addRecipeAsIngredient(state, action)
    // payload: recipe: { id }, step: { id }, ingredient: { id, properties }
    case 'EDIT_INGREDIENT': 
      return editIngredient(state, action)
    // payload: recipe: { id }, step: { id }, ingredient: { id }
    case 'REMOVE_INGREDIENT': 
      return removeIngredient(state, action)
    default:
      return state
  }
}

export default recipeReducer