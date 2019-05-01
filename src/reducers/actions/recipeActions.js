import uuidv4 from 'uuid/v4';
import { httpRequestJWT } from '../../helpers/httpHelpers'
import { RECIPES_URL } from '../../routes'


async function getRecipeAction(recipe, jwt='') {
  const response = await httpRequestJWT(`${RECIPES_URL}/${recipe.id}`, 'get', {}, jwt)
  const requestedRecipe = await response.json()
  return { 
    type: 'GET_RECIPE',
    recipe: requestedRecipe
  }
}

async function createRecipeAction(recipe, jwt='') {
  recipe.uuid = uuidv4()
  const response = await httpRequestJWT(RECIPES_URL, 'post', recipe, jwt)
  const createdRecipe = await response.json()
  return { 
    type: 'CREATE_RECIPE',
    recipe: createdRecipe
  }
}

async function editRecipeAction(recipe, jwt='') {
  // debugger
  const response = await httpRequestJWT(`${RECIPES_URL}/${recipe.id}`, 'put', {recipe}, jwt)
  const updatedRecipe = await response.json()
  return { 
    type: 'EDIT_RECIPE',
    recipe: updatedRecipe
  }
}

async function deleteRecipeAction(recipe, jwt='') {
  console.log("DELETE RECIPE")
  const response = await httpRequestJWT(`${RECIPES_URL}/${recipe.id}`, 'delete', {recipe: {id: recipe.id}}, jwt)
  const updatedRecipe = await response.json()
  return { 
    type: 'CLEAR_RECIPE',
    recipe: updatedRecipe
  }
}

export {
  getRecipeAction,
  createRecipeAction,
  editRecipeAction,
  deleteRecipeAction
}