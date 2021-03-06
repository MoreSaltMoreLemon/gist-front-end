import uuidv4 from "uuid/v4";
import { handleRequestAction } from "../../helpers/httpHelpers";
import { RECIPE_STEPS_URL } from "../../routes";

async function addRecipeStepAction(recipe_id, recipe_step) {
  recipe_step.uuid = uuidv4();
  recipe_step.recipe_id = recipe_id;
  return await handleRequestAction(
    `${RECIPE_STEPS_URL}`,
    "post",
    { recipe_step },
    "ADD_RECIPE_STEP",
    "recipe_step"
  );
}

async function editRecipeStepAction(recipe_step) {
  return await handleRequestAction(
    `${RECIPE_STEPS_URL}/${recipe_step.id}`,
    "put",
    { recipe_step },
    "EDIT_RECIPE_STEP",
    "recipe_step"
  );
}

async function removeRecipeStepAction(recipe_step) {
  const response = await handleRequestAction(
    `${RECIPE_STEPS_URL}/${recipe_step.id}`,
    "delete",
    { recipe_step: { id: recipe_step.id } },
    "REMOVE_RECIPE_STEP",
    "recipe_step"
  );

  if (response.errors) return response;
  else return { type: "REMOVE_RECIPE_STEP", recipe_step };
}

export { addRecipeStepAction, editRecipeStepAction, removeRecipeStepAction };
