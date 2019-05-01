import uuidv4 from 'uuid/v4';
import { httpRequestJWT } from '../../helpers/httpHelpers'
import { STEP_SUB_RECIPES_URL } from '../../routes'

async function addStepSubRecipeAction(recipe_step_id, step_sub_recipe, user_id, jwt='') {
  step_sub_recipe.uuid = uuidv4()
  step_sub_recipe.recipe_step_id = recipe_step_id
  step_sub_recipe.sub_recipe = {user_id, name: step_sub_recipe.subRecipeName}
  const response = await httpRequestJWT(STEP_SUB_RECIPES_URL, 'post', {step_sub_recipe}, jwt)
  const stepSubRecipe = await response.json()
  // debugger
  return {
    type: 'ADD_STEP_SUB_RECIPE',
    step_sub_recipe: stepSubRecipe
  }
}

async function editStepSubRecipeAction(step_sub_recipe, user_id, jwt='') {
  step_sub_recipe.sub_recipe = {user_id, name: step_sub_recipe.subRecipeName}
  // debugger
  const response = await httpRequestJWT(`${STEP_SUB_RECIPES_URL}/${step_sub_recipe.id}`, 'put', {step_sub_recipe}, jwt)
  const stepSubRecipe = await response.json()
  return {
    type: 'EDIT_STEP_SUB_RECIPE',
    step_sub_recipe: stepSubRecipe
  }
}

async function removeStepSubRecipeAction(step_sub_recipe, jwt='') {
  const response = await httpRequestJWT(`${STEP_SUB_RECIPES_URL}/${step_sub_recipe.id}`, 'delete', {step_sub_recipe: {id: step_sub_recipe.id}}, jwt)
  const stepSubRecipe = await response.json()
  // debugger
  return {
    type: 'REMOVE_STEP_SUB_RECIPE',
    step_sub_recipe: step_sub_recipe
  }
}

export {
  addStepSubRecipeAction,
  editStepSubRecipeAction,
  removeStepSubRecipeAction
}