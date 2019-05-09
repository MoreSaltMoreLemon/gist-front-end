import {
  getAllRecipes,
  getUserRecipes,
  createRecipe,
  toggleShareRecipe,
  favoriteRecipe,
  removeRecipe
} from "./reducerHelpers/recipesHelpers";

const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL_RECIPES":
    return getAllRecipes(state, action);
    case "GET_USER_RECIPES":
      return getUserRecipes(state, action);
    case "CREATE_RECIPE":
      return createRecipe(state, action);
    case "TOGGLE_SHARE_RECIPE":
      return toggleShareRecipe(state, action);
    case "FAVORITE_RECIPE":
      return favoriteRecipe(state, action);
    case "REMOVE_RECIPE":
      return removeRecipe(state, action);
    default:
      return state;
  }
};

export default recipesReducer;
