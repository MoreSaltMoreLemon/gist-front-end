import { combineReducers } from 'redux'

import errorReducer from './errorReducer'
import authReducer from './authReducer'
import userReducer from './userReducer'
import recipeReducer from './recipeReducer'


const rootReducer = combineReducers({
  error: errorReducer,
  user: userReducer,
  auth: authReducer,
  recipe: recipeReducer
})

export default rootReducer
