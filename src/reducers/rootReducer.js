import { combineReducers } from "redux";

import errorReducer from "./errorReducer";
import userReducer from "./userReducer";
import recipeReducer from "./recipeReducer";
import recipesReducer from "./recipesReducer";

const rootReducer = combineReducers({
  error: errorReducer,
  user: userReducer,
  recipe: recipeReducer,
  recipes: recipesReducer
});

export default rootReducer;
