import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { deleteRecipeAction } from '../reducers/actions/recipesActions'
import Button from './Button'
import placeholderImage from '../images/placeholder.png'

const RecipeCard = ({recipe, deleteRecipe}) => {
  // debugger
  return (
    <div className='recipe-gallery-card-container'>
      <Button onClick={() => deleteRecipe(recipe)} className='recipe-remove' type='remove' label='Delete' icon='delete' />
      <Link 
        to={`/recipes/${recipe.id}`}
        style={{ textDecoration: 'none', color: 'var(--font-color)' }}
        className='recipe-gallery-card-link'
      >      
        <div className='recipe-gallery-card'>
          <img 
            className='recipe-image'
            src={recipe.image_url || placeholderImage} 
            alt={recipe.name}
          ></img>
          <div>
            <h3
              className='recipe-title'
            >{recipe.name}</h3>
          </div>
          <p
            className='recipe-description'
          >{recipe.description}</p>
        </div>
      </Link>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    deleteRecipe: async (recipe, jwt = '') => dispatch(await deleteRecipeAction(recipe, jwt))
  }
}
export default connect(null, mapDispatchToProps)(RecipeCard)