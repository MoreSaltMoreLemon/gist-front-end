import uuidv4 from "uuid/v4";
import { handleRequestAction } from "../../helpers/httpHelpers";
import { STEP_SUB_RECIPES_URL } from "../../routes";

async function addStepSubRecipeAction(
  recipe_step_id,
  step_sub_recipe,
  user_id
) {
  step_sub_recipe.uuid = uuidv4();
  step_sub_recipe.recipe_step_id = recipe_step_id;
  step_sub_recipe.sub_recipe = { user_id, name: step_sub_recipe.subRecipeName };
  return await handleRequestAction(
    STEP_SUB_RECIPES_URL,
    "post",
    { step_sub_recipe },
    "ADD_STEP_SUB_RECIPE",
    "step_sub_recipe"
  );
}

async function editStepSubRecipeAction(step_sub_recipe, user_id) {
  step_sub_recipe.sub_recipe = { user_id, name: step_sub_recipe.subRecipeName };
  return await handleRequestAction(
    `${STEP_SUB_RECIPES_URL}/${step_sub_recipe.id}`,
    "put",
    { step_sub_recipe },
    "EDIT_STEP_SUB_RECIPE",
    "step_sub_recipe"
  );
}

async function removeStepSubRecipeAction(step_sub_recipe) {
  const response = await handleRequestAction(
    `${STEP_SUB_RECIPES_URL}/${step_sub_recipe.id}`,
    "delete",
    { step_sub_recipe: { id: step_sub_recipe.id } },
    "REMOVE_STEP_SUB_RECIPE",
    "step_sub_recipe"
  );

  // if the response returned an error, return the error action object
  // however if the error was successful, it will not return the information
  // needed to remove the record from client side rendering, so we pass the
  // already deleted record so that it can be found and filtered out
  if (response.errors) return response;
  else return { type: "REMOVE_STEP_SUB_RECIPE", step_sub_recipe };
}

export {
  addStepSubRecipeAction,
  editStepSubRecipeAction,
  removeStepSubRecipeAction
};
