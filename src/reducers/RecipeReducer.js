import { 
  setRecipe,
  editRecipe, 
  removeRecipe 
} from '../helpers/recipeHelpers'

import { 
  addSubRecipe, 
  editSubRecipe, 
  removeSubRecipe,
  reOrderSubRecipes
} from '../helpers/subRecipeHelpers'

import { 
  addIngredient, 
  editIngredient, 
  removeIngredient 
} from '../helpers/ingredientHelpers'

const recipeReducer = (state = {}, action) => {
  // console.log("RECIPE REDUCER", state, action)
  switch (action.type) {
    // payload: recipe: { id }
    case 'SET_RECIPE':
      return setRecipe(state, action)
    // payload: recipe: { id, properties }
    case 'EDIT_RECIPE': 
      return editRecipe(state, action)
    // payload: recipe: { id }
    case 'CLEAR_RECIPE': 
      return removeRecipe(state, action)
    // payload: recipe: { id }, sub_recipe: { properties }
    case 'ADD_SUB_RECIPE':  
      return addSubRecipe(state, action)
    // payload: recipe: { id }, recipe_sub_recipe: { id }, sub_recipe: { id, properties }
    case 'EDIT_SUB_RECIPE': 
      return editSubRecipe(state, action)
    // payload: recipe: { id }, sub_recipe: { id }
    case 'REMOVE_SUB_RECIPE': 
      return removeSubRecipe(state, action)
    // payload: recipe: { id }, sub_recipe: { id, sequence }
    case 'REORDER_SUB_RECIPES':
      return reOrderSubRecipes(state, action)
    // payload: recipe: { id }, sub_recipe: { id }, ingredient: { properties }
    case 'ADD_INGREDIENT': 
      return addIngredient(state, action)
    // payload: recipe: { id }, sub_recipe: { id }, ingredient: { id, properties }
    case 'EDIT_INGREDIENT': 
      return editIngredient(state, action)
    // payload: recipe: { id }, sub_recipe: { id }, ingredient: { id }
    case 'REMOVE_INGREDIENT': 
      return removeIngredient(state, action)
    default:
      return state
  }
}

export default recipeReducer