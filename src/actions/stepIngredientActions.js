import { httpRequestJWT } from '../helpers/httpHelpers'
import { STEP_INGREDIENTS_URL } from '../routes'

async function addStepIngredientAction(recipe_step_id, step_ingredient, jwt='') {
  step_ingredient.recipe_step_id = recipe_step_id
  step_ingredient.ingredient = {name: step_ingredient.ingredientName}
  // debugger
  
  const response = await httpRequestJWT(STEP_INGREDIENTS_URL, 'post', {step_ingredient}, jwt)
  const requestedStepIngredient = await response.json()
  return {
    type: 'ADD_STEP_INGREDIENT',
    step_ingredient: requestedStepIngredient
  }
}

async function editStepIngredientAction(step_ingredient, jwt='') {
  step_ingredient.ingredient = {name: step_ingredient.ingredientName}
  const response = await httpRequestJWT(`${STEP_INGREDIENTS_URL}/${step_ingredient.id}`, 'put', {step_ingredient}, jwt)
  const editedStepIngredient = await response.json()
  return {
    type: 'EDIT_STEP_INGREDIENT',
    step_ingredient: editedStepIngredient
  }
}

async function removeStepIngredientAction(step_ingredient, jwt='') {
  // debugger
  const response = await httpRequestJWT(`${STEP_INGREDIENTS_URL}/${step_ingredient.id}`, 'delete', {step_ingredient: {id: step_ingredient.id}}, jwt)
  const updatedStepIngredient = await response.json()
  return {
    type: 'REMOVE_STEP_INGREDIENT',
    step_ingredient: updatedStepIngredient
  }
}

export {
  addStepIngredientAction,
  editStepIngredientAction,
  removeStepIngredientAction
}