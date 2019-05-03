import React, { useState } from 'react'
import RecipeHeaderForm from './RecipeHeaderForm'

const RecipeHeader = ({recipe}) => {
  const [showEditForm, setShowEditForm] = useState(false)

  return (
    <div className='recipe-header'>
      { 
        showEditForm 
        ? 
        <RecipeHeaderForm recipe={recipe} setShowEditForm={setShowEditForm}/>
        :
        <div className='recipe-header-display'>
          <h1 className='recipe-title'>{recipe.name}</h1>
          <h3 className='recipe-title'>{recipe.description}</h3>
          <button 
            className='button'
            name='toggle-edit' 
            value='Edit' 
            onClick={() => setShowEditForm(true)}
          >Edit</button>
        </div>        
      }
    </div>
  )
}

export default RecipeHeader