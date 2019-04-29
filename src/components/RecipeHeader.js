import React from 'react'
import RecipeHeaderForm from './RecipeHeaderForm'

const RecipeHeader = ({recipe}) => {
  return (
    <div className='recipe-header'>
      { 
        false 
        ? 
        <div className='recipe-header-display'>
          <h1 className='recipe-title'>{recipe.name}</h1>
          <h3 className='recipe-title'>{recipe.description}</h3>
        </div>
        :
        <RecipeHeaderForm recipe={recipe}/>
      }
    </div>
  )
}

export default RecipeHeader