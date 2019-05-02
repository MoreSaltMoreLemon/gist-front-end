import uuidv4 from 'uuid/v4';
import { handleRequestAction } from '../../helpers/httpHelpers'
import { STEP_INGREDIENTS_URL } from '../../routes'

async function addStepIngredientAction(recipe_step_id, step_ingredient, jwt='') {
  step_ingredient.uuid = uuidv4()
  step_ingredient.recipe_step_id = recipe_step_id
  step_ingredient.ingredient = {name: step_ingredient.ingredientName}
  
  return await handleRequestAction(
    STEP_INGREDIENTS_URL, 
    'post', 
    {step_ingredient}, 
    jwt, 
    'ADD_STEP_INGREDIENT', 
    'step_ingredient'
  )
  
}

async function editStepIngredientAction(step_ingredient, jwt='') {
  step_ingredient.ingredient = {name: step_ingredient.ingredientName}
  return await handleRequestAction(
    `${STEP_INGREDIENTS_URL}/${step_ingredient.id}`, 
    'put', 
    {step_ingredient}, 
    jwt, 
    'EDIT_STEP_INGREDIENT', 
    'step_ingredient'
  )
}

async function removeStepIngredientAction(step_ingredient, jwt='') {
  return await handleRequestAction(
    `${STEP_INGREDIENTS_URL}/${step_ingredient.id}`, 
    'delete', 
    {step_ingredient: {id: step_ingredient.id}}, 
    jwt, 
    'REMOVE_STEP_INGREDIENT', 
    'step_ingredient'
  )
}

export {
  addStepIngredientAction,
  editStepIngredientAction,
  removeStepIngredientAction
}