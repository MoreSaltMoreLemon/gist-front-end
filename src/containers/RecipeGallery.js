import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { isEmpty } from '../helpers/miscHelpers'
import { getRecipesAction } from '../reducers/actions/recipesActions'

import RecipeCard from '../components/RecipeCard'
import '../css/recipeGallery.css'

const RecipeGallery = (props) => {

  useEffect(() => {
    if (isEmpty(props.recipes)) {
      console.log('get recipes!!!')
      console.log('async!', props.getRecipes())
    }
  })

  let recipeCards = null
  
  if (!isEmpty(props.recipes)) {
    // debugger
    recipeCards = props.recipes.map(recipe => {
      return <RecipeCard recipe={recipe} />
    })
  } 

  return (
    <div className='recipe-gallery'>
      {recipeCards}
    </div>
  )
}

const mapStateToProps = (state) => ({...state})

const mapDispatchToProps = dispatch => {
  return {
    getRecipes: async () => dispatch(await getRecipesAction())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RecipeGallery)