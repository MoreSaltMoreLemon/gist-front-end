import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import { isEmpty } from '../helpers/miscHelpers'

import Doughnut from '../components/Doughnut'
import RecipeHeader from '../components/RecipeHeader'
import SubRecipeContainer from './RecipeStepsContainer'

import {
  getRecipe,
  createRecipe,
  updateRecipe,
  removeRecipe
} from '../actions/asyncRecipeActionWrappers'

import {
  setRecipeAction,
  editRecipeAction,
  clearRecipeAction
} from '../actions/recipeActions'

const placeholderIngredients = [
  {
    color: '#008b02',
    name: 'Broccoli, yum',
    quantity: 3000,
    unit: 'g',
    action: 'dice'
  },
  {
    color: '#fab71f',
    name: 'Cheezie Sauce, yum',
    quantity: 5000,
    unit: 'g',
    action: ''
  },
  {
    color: '#f9d2f3',
    name: 'Heavy Cream',
    quantity: 7000,
    unit: 'g',
    action: ''
  },
  {
    color: '#e7e7e7',
    name: 'Salt, Kosher',
    quantity: 300,
    unit: 'g',
    action: ''
  }
]

const RecipeForm = (props) => {
  useEffect(() => {
    console.log("RECIPE FORM USE EFFECT", props)
    if (isEmpty(props.recipe)) {
      console.log("RECIPE EMPTY")
      props.getRecipe({id: 1})
    } else {
      console.log("NEW PROPS", props)
    }
  }) 

  return (
    <div className='content-container'>
      <div className='content-header' style={{'height': '300px', 'width': '300px'}}>
        <div className='recipe-graph-doughnut-container'>
          <Doughnut className='recipe-graph-doughnut' subRecipes={props.recipe}/>
        </div>
      <RecipeHeader recipe={props.recipe} />
    </div>
      <div className='content-body'>
        <SubRecipeContainer subRecipes={props.recipe} />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch => {
  return {
    getRecipe:    (recipe, jwt = '') => getRecipe(recipe, dispatch, jwt),
    createRecipe: (recipe, jwt = '') => createRecipe(recipe, dispatch, jwt),
    updateRecipe: (recipe, jwt = '') => updateRecipe(recipe, dispatch, jwt),
    removeRecipe: (recipe, jwt = '') => removeRecipe(recipe, dispatch, jwt),
    setRecipe:    (recipe) => dispatch(setRecipeAction(recipe)),
    editRecipe:   (recipe) => dispatch(editRecipeAction(recipe)),
    clearRecipe: (recipe) => dispatch(clearRecipeAction(recipe))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm)