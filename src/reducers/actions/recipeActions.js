import { handleRequestAction } from "../../helpers/httpHelpers";
import { RECIPES_URL } from "../../routes";

async function getRecipeAction(recipe) {
  return await handleRequestAction(
    `${RECIPES_URL}/${recipe.id}`,
    "get",
    {},
    "GET_RECIPE",
    "recipe"
  );
}

async function editRecipeAction(recipe) {
  return await handleRequestAction(
    `${RECIPES_URL}/${recipe.id}`,
    "put",
    { recipe },
    "EDIT_RECIPE",
    "recipe"
  );
}

export { getRecipeAction, editRecipeAction };
