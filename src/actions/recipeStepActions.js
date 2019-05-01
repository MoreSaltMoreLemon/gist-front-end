import { httpRequestJWT } from '../helpers/httpHelpers'
import { RECIPE_STEPS_URL } from '../routes'

async function addRecipeStepAction(recipe_id, recipe_step, jwt='') {
  recipe_step.recipe_id = recipe_id
  const response = await httpRequestJWT(`${RECIPE_STEPS_URL}`, 'post', {recipe_step}, jwt)
  const requestedRecipeStep = await response.json()
  return {
    type: 'ADD_RECIPE_STEP',
    recipe_step: requestedRecipeStep
  }
}

async function editRecipeStepAction(recipe_step, jwt='') {
  const response = await httpRequestJWT(`${RECIPE_STEPS_URL}/${recipe_step.id}`, 'put', {recipe_step}, jwt)
  const editedRecipeStep = await response.json()
  return {
    type: 'EDIT_RECIPE_STEP',
    recipe_step: editedRecipeStep
  }
}

async function removeRecipeStepAction(recipe_step, jwt='') {
  const response = await httpRequestJWT(`${RECIPE_STEPS_URL}/${recipe_step.id}`, 'delete', {recipe_step: {id: recipe_step.id}}, jwt)
  const updatedRecipeStep = await response.json()
  return {
    type: 'REMOVE_RECIPE_STEP',
    recipe_step: updatedRecipeStep
  }
}

export {
  addRecipeStepAction,
  editRecipeStepAction,
  removeRecipeStepAction
}