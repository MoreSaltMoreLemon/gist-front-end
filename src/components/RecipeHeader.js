import React from 'react'
import RecipeHeaderForm from './RecipeHeaderForm'

const RecipeHeader = ({recipe}) => {
  return (
    <div className='recipe-header'>
      { 
        false 
        ? 
        <h1 className='recipe-title'>{recipe.name}</h1>
        :
        <RecipeHeaderForm />
      }
    </div>
  )
}

export default RecipeHeader