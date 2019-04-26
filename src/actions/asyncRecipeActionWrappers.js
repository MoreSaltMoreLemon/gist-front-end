import httpRequestJWT from './httpHelpers'
import { 
  setRecipeAction, 
  editRecipeAction, 
  removeRecipeAction 
} from './recipeActions'
import { RECIPES_URL } from '../routes'

async function getRecipe(recipe, dispatch, jwt='') {
  const requestedRecipe = await httpRequestJWT(`${RECIPES_URL}/${recipe.id}`, 'get', {}, jwt)
  dispatch(setRecipeAction(requestedRecipe))
}

async function createRecipe(user, dispatch, jwt='') {
  const createdRecipe = await httpRequestJWT(RECIPES_URL, 'post', user, jwt)
  dispatch(setRecipeAction(createdRecipe))
}

async function updateRecipe(recipe, dispatch, jwt='') {
  const updatedRecipe = await httpRequestJWT(`${RECIPES_URL}/${recipe.id}`, 'put', recipe, jwt)
  dispatch(editRecipeAction(updatedRecipe))
}

async function removeRecipe(recipe, dispatch, jwt='') {
  const updatedRecipe = await httpRequestJWT(`${RECIPES_URL}/${recipe.id}`, 'delete', {recipe: {id: recipe.id}}, jwt)
  dispatch(removeRecipeAction(updatedRecipe))
}

export {
  getRecipe,
  createRecipe,
  updateRecipe,
  removeRecipe
}