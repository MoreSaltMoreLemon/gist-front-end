const DEV_URL = "http://localhost:3000";
const DEPLOY_URL = "https://gist-recipes.herokuapp.com/";
const BASE_URL = DEPLOY_URL;
const API_URL = `${BASE_URL}/api/v1`;

const USERS_URL = `${API_URL}/users`;
const LOGIN_URL = `${API_URL}/login`;
const LOGOUT_URL = `${API_URL}/logout`;

const RECIPES_URL = `${API_URL}/recipes`;
const RECIPE_STEPS_URL = `${API_URL}/recipe_steps`;
const STEP_INGREDIENTS_URL = `${API_URL}/step_ingredients`;
const STEP_SUB_RECIPES_URL = `${API_URL}/step_sub_recipes`;

export {
  BASE_URL,
  API_URL,
  RECIPES_URL,
  USERS_URL,
  LOGIN_URL,
  LOGOUT_URL,
  RECIPE_STEPS_URL,
  STEP_INGREDIENTS_URL,
  STEP_SUB_RECIPES_URL
};
