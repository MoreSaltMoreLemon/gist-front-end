import uuidv4 from 'uuid/v4'
import { handleRequestAction } from '../../helpers/httpHelpers'
import { RECIPES_URL } from '../../routes'

async function getRecipesAction(jwt='') {
  return await handleRequestAction(
    RECIPES_URL, 
    'get', 
    {}, 
    jwt, 
    'GET_ALL_RECIPES', 
    'recipes'
  )
}

async function createRecipeAction(recipe, jwt='') {
  recipe.uuid = uuidv4()
  return await handleRequestAction(
    RECIPES_URL, 
    'post', 
    {recipe}, 
    jwt, 
    'CREATE_RECIPE', 
    'recipe'
  )
}

async function deleteRecipeAction(recipe, jwt='') {
  const response = await handleRequestAction(
    `${RECIPES_URL}/${recipe.id}`, 
    'delete', 
    {recipe: {id: recipe.id}}, 
    jwt, 
    'REMOVE_RECIPE', 
    'recipe'
  )

  if (response.errors) return response
  else return {type: 'REMOVE_RECIPE', recipe}
}


export { getRecipesAction, createRecipeAction, deleteRecipeAction }
