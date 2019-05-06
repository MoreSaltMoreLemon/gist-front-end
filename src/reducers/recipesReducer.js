import { 
  getAllRecipes,
  createRecipe,
  removeRecipe
} from './reducerHelpers/recipesHelpers'

const recipesReducer = (state = [], action) => {
  switch (action.type) {
    // payload: recipe: { id }
    case 'GET_ALL_RECIPES':
      return getAllRecipes(state, action)
    // payload: recipe: { id }
    case 'CREATE_RECIPE':
      return createRecipe(state, action)
    // payload: recipe: { id }
    case 'REMOVE_RECIPE': 
      return removeRecipe(state, action)
    default:
      return state
  }
}

export default recipesReducer