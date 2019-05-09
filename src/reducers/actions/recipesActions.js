import uuidv4 from "uuid/v4";
import { handleRequestAction } from "../../helpers/httpHelpers";
import { RECIPES_URL, USERS_URL } from "../../routes";

async function getRecipesAction() {
  return await handleRequestAction(
    RECIPES_URL,
    "get",
    {},
    "GET_ALL_RECIPES",
    "recipes"
  );
}

async function getUserRecipesAction(userId) {
  return await handleRequestAction(
    `${USERS_URL}/${userId}`,
    "get",
    {},
    "GET_USER_RECIPES",
    "user"
  );
}

async function createRecipeAction(recipe) {
  recipe.uuid = uuidv4();
  return await handleRequestAction(
    RECIPES_URL,
    "post",
    { recipe },
    "CREATE_RECIPE",
    "recipe"
  );
}
async function toggleShareRecipeAction(recipe) {
  const sharedRecipe = {...recipe}
  sharedRecipe.public = !recipe.public
  return await handleRequestAction(
    `${RECIPES_URL}/${recipe.id}`,
    "put",
    { recipe: sharedRecipe },
    "TOGGLE_SHARE_RECIPE",
    "recipe"
  );
}

async function favoriteRecipeAction(recipe) {
  const favoritedRecipe = {...recipe}
  favoritedRecipe.public = true
  return await handleRequestAction(
    `${RECIPES_URL}/${recipe.id}`,
    "put",
    { recipe: favoritedRecipe },
    "FAVORITE_RECIPE",
    "recipe"
  );
}

async function deleteRecipeAction(recipe) {
  const response = await handleRequestAction(
    `${RECIPES_URL}/${recipe.id}`,
    "delete",
    { recipe: { id: recipe.id } },
    "REMOVE_RECIPE",
    "recipe"
  );

  if (response.errors) return response;
  else return { type: "REMOVE_RECIPE", recipe };
}

export {
  getRecipesAction,
  getUserRecipesAction,
  createRecipeAction,
  toggleShareRecipeAction,
  favoriteRecipeAction,
  deleteRecipeAction
};
