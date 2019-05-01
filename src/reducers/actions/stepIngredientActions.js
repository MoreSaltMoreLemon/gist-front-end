import uuidv4 from 'uuid/v4';
import { httpRequestJWT } from '../../helpers/httpHelpers'
import { STEP_INGREDIENTS_URL } from '../../routes'

async function addStepIngredientAction(recipe_step_id, step_ingredient, jwt='') {
  step_ingredient.uuid = uuidv4()
  step_ingredient.recipe_step_id = recipe_step_id
  step_ingredient.ingredient = {name: step_ingredient.ingredientName}
  // debugger
  
  const response = await httpRequestJWT(STEP_INGREDIENTS_URL, 'post', {step_ingredient}, jwt)
  const stepIngredient = await response.json()
  return {
    type: 'ADD_STEP_INGREDIENT',
    step_ingredient: stepIngredient
  }
}

async function editStepIngredientAction(step_ingredient, jwt='') {
  step_ingredient.ingredient = {name: step_ingredient.ingredientName}
  const response = await httpRequestJWT(`${STEP_INGREDIENTS_URL}/${step_ingredient.id}`, 'put', {step_ingredient}, jwt)
  const stepIngredient = await response.json()
  return {
    type: 'EDIT_STEP_INGREDIENT',
    step_ingredient: stepIngredient
  }
}

async function removeStepIngredientAction(step_ingredient, jwt='') {
  // debugger
  const response = await httpRequestJWT(`${STEP_INGREDIENTS_URL}/${step_ingredient.id}`, 'delete', {step_ingredient: {id: step_ingredient.id}}, jwt)
  const stepIngredient = await response.json()
  return {
    type: 'REMOVE_STEP_INGREDIENT',
    step_ingredient: step_ingredient
  }
}

export {
  addStepIngredientAction,
  editStepIngredientAction,
  removeStepIngredientAction
}