import React, { useReducer } from 'react';
import ContentHeader from './ContentHeader'
import ContentBody from './ContentBody'
import {
  getRecipe,
  createRecipe,
  updateRecipe,
  removeRecipe
} from '../actions/asyncRecipeActionWrappers'
import RecipeReducer from '../reducers/recipeReducer'
import {
  setRecipeAction,
  editRecipeAction,
  removeRecipeAction
} from '../actions/recipeActions'

const initialRecipeState = {
  recipe: {
  "id": undefined,
  "userId": undefined,
  "name": undefined,
  "scale_factor": undefined,
  "yield_in_grams": undefined,
  "yield": undefined,
  "yield_unit_id": undefined,
  "yield_unit": {},
  "public": false,
  "steps": []
  }
}


const RecipeForm = (props) => {
  const [state, dispatch] = useReducer(RecipeReducer, initialRecipeState)
  console.log("RECIPE STATE", state)
  return (
    <div className='content-container'>
      <ContentHeader />
      <ContentBody />
      <button 
        className="test" 
        onClick={() => getRecipe({id: 1}, dispatch)}
      >getRecipe</button>
    </div>
  );
};

export default RecipeForm;