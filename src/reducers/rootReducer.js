import { combineReducers } from 'redux'

import authReducer from './authReducer'
import userReducer from './userReducer'
import recipeReducer from './recipeReducer'

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  recipe: recipeReducer
})

export default rootReducer
