import uuidv4 from "uuid/v4";
import { handleRequestAction } from "../../helpers/httpHelpers";
import { STEP_INGREDIENTS_URL } from "../../routes";

async function addStepIngredientAction(recipe_step_id, step_ingredient) {
  step_ingredient.uuid = uuidv4();
  step_ingredient.recipe_step_id = recipe_step_id;
  step_ingredient.ingredient = { name: step_ingredient.ingredientName };

  return await handleRequestAction(
    STEP_INGREDIENTS_URL,
    "post",
    { step_ingredient },
    "ADD_STEP_INGREDIENT",
    "step_ingredient"
  );
}

async function editStepIngredientAction(step_ingredient) {
  step_ingredient.ingredient = { name: step_ingredient.ingredientName };
  return await handleRequestAction(
    `${STEP_INGREDIENTS_URL}/${step_ingredient.id}`,
    "put",
    { step_ingredient },
    "EDIT_STEP_INGREDIENT",
    "step_ingredient"
  );
}

async function removeStepIngredientAction(step_ingredient) {
  const response = await handleRequestAction(
    `${STEP_INGREDIENTS_URL}/${step_ingredient.id}`,
    "delete",
    { step_ingredient: { id: step_ingredient.id } },
    "REMOVE_STEP_INGREDIENT",
    "step_ingredient"
  );

  // if the response returned an error, return the error action object
  // however if the error was successful, it will not return the information
  // needed to remove the record from client side rendering, so we pass the
  // already deleted record so that it can be found and filtered out
  if (response.errors) return response;
  else return { type: "REMOVE_STEP_INGREDIENT", step_ingredient };
}

export {
  addStepIngredientAction,
  editStepIngredientAction,
  removeStepIngredientAction
};
