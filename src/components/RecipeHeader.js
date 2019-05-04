import React, { useState } from 'react'
import RecipeHeaderForm from './RecipeHeaderForm'
import ButtonLabel from './ButtonLabel'

const RecipeHeader = ({recipe}) => {
  const [showEditForm, setShowEditForm] = useState(false)

  return (
    <div className='recipe-header'>
      { 
        showEditForm 
        ? 
        <RecipeHeaderForm recipe={recipe} setShowEditForm={setShowEditForm}/>
        :
        <div 
          className='recipe-header-display'
          onClick={() => setShowEditForm(true)}
        >
          <h1 className='recipe-title'>{recipe.name}</h1>
          <p className='recipe-description'>{recipe.description}</p>
          <button 
            className='recipe-header-edit button'
            name='toggle-edit' 
            value='Edit' 
            onClick={() => setShowEditForm(true)}
          >
            <ButtonLabel label="Edit" type="edit" />
          </button>
        </div>        
      }
    </div>
  )
}

export default RecipeHeader