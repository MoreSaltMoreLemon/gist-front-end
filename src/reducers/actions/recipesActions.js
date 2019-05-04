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


export { getRecipesAction }
