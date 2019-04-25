import React from 'react'

const RecipeHeader = ({recipe}) => {
  return (
    <div className='recipe-header'>
      <h1 className='recipe-title'>{recipe.name}</h1>
    </div>
  )
}

export default RecipeHeader