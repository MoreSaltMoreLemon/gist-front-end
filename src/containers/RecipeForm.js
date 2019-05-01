import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import { isEmpty } from '../helpers/miscHelpers'

import Doughnut from '../components/Doughnut'
import RecipeHeader from '../components/RecipeHeader'
import RecipeStepsContainer from './RecipeStepsContainer'

import {
  getRecipeAction,
  createRecipeAction,
  editRecipeAction,
  deleteRecipeAction
} from '../actions/recipeActions'

const RecipeForm = (props) => {

  useEffect(() => {
    // console.log("RECIPE FORM USE EFFECT", props)
    if (isEmpty(props.recipe)) {
      // console.log("RECIPE EMPTY")
      props.getRecipe({id: 1})
    } else {
      console.log("NEW PROPS", props)
    }
  }) 

  return (
    <div className='content-container'>
      <div className='content-header' style={{'height': '300px', 'width': '300px'}}>
        <div className='recipe-graph-doughnut-container'>
          <Doughnut className='recipe-graph-doughnut' recipe={props.recipe}/>
        </div>
      <RecipeHeader recipe={props.recipe} />
    </div>
      <div className='content-body'>
        <RecipeStepsContainer recipe={props.recipe} />
      </div>
      <button onClick={() => props.createRecipe({name: "TestRecipe", user_id: 1})}>CREATERECIPE</button>
      <div>SPACE</div>
      <button onClick={() => props.updateRecipe({id: props.recipe.id, name: "RenamedTestRecipe", user_id: 1})}>Save Recipe</button>
      <div>SPACE</div>
      <button onClick={() => props.removeRecipe({id: props.recipe.id})}>Delete Recipe</button>
    </div>
  )
}

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch => {
  return {
    getRecipe:    async (recipe, jwt = '') => dispatch(await getRecipeAction(recipe, jwt)),
    createRecipe: async (recipe, user, jwt = '') => dispatch(await createRecipeAction(recipe, user, jwt)),
    updateRecipe: async (recipe, jwt = '') => dispatch(await editRecipeAction(recipe, jwt)),
    removeRecipe: async (recipe, jwt = '') => dispatch(await deleteRecipeAction(recipe, jwt)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm)