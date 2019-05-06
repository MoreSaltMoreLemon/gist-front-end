import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import { isEmpty } from '../helpers/miscHelpers'

import Doughnut from '../components/Doughnut'
import RecipeHeader from '../components/RecipeHeader'
import RecipeStepsContainer from './RecipeStepsContainer'


import {
  getRecipeAction
} from '../reducers/actions/recipeActions'

const RecipeForm = (props) => {
  useEffect(() => {
    if (isEmpty(props.recipe)) {
      props.getRecipe({id: props.recipeId})
    } else if (props.recipe.id !== Number(props.recipeId)) {
      // debugger
      console.log("no match!", props.recipe.id, props.recipeId)
      props.getRecipe({id: props.recipeId})
    }
  })

  if (isEmpty(props.recipe) || props.recipe.id !== Number(props.recipeId)) {
    return null
  }

  return (
    <div className='content-container'>
       <div className='content-header' > 
        <div className='recipe-graph-doughnut-container'>
          <Doughnut className='recipe-graph-doughnut' recipe={props.recipe}/>
        </div>
        <RecipeHeader recipe={props.recipe} />
      </div>
      <div className='content-body'>
        <RecipeStepsContainer recipe={props.recipe} />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  console.log('RECIPE FORM UPDATE', state.recipe)
  // debugger
  return { ...state }
}

const mapDispatchToProps = dispatch => {
  return {
    getRecipe:    async (recipe, jwt = '') => dispatch(await getRecipeAction(recipe, jwt))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm)