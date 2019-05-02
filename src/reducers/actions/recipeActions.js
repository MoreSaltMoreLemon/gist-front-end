import uuidv4 from 'uuid/v4';
import { handleRequestAction } from '../../helpers/httpHelpers'
import { RECIPES_URL } from '../../routes'

async function getRecipeAction(recipe, jwt='') {
  return await handleRequestAction(
    `${RECIPES_URL}/${recipe.id}`, 
    'get', {}, 
    jwt, 
    'GET_RECIPE', 
    'recipe'
  )
}

async function createRecipeAction(recipe, jwt='') {
  recipe.uuid = uuidv4()
  return await handleRequestAction(
    RECIPES_URL, 
    'post', 
    recipe, 
    jwt, 
    'CREATE_RECIPE', 
    'recipe'
  )
}

async function editRecipeAction(recipe, jwt='') {
  return await handleRequestAction(
    `${RECIPES_URL}/${recipe.id}`, 
    'put', 
    {recipe}, 
    jwt, 
    'EDIT_RECIPE', 
    'recipe'
  )
}

async function deleteRecipeAction(recipe, jwt='') {
  return await handleRequestAction(
    `${RECIPES_URL}/${recipe.id}`, 
    'delete', 
    {recipe: {id: recipe.id}}, 
    jwt, 
    'CLEAR_RECIPE', 
    'recipe'
  )
}

export {
  getRecipeAction,
  createRecipeAction,
  editRecipeAction,
  deleteRecipeAction
}