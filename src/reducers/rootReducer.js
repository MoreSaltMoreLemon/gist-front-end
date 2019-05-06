import { combineReducers } from 'redux'

import errorReducer from './errorReducer'
import authReducer from './authReducer'
import userReducer from './userReducer'
import recipeReducer from './recipeReducer'
import recipesReducer from './recipesReducer'


const rootReducer = combineReducers({
  error: errorReducer,
  user: userReducer,
  auth: authReducer,
  recipe: recipeReducer,
  recipes: recipesReducer
})

export default rootReducer
