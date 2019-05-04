import React, { useState } from 'react'
import RecipeHeaderForm from './RecipeHeaderForm'
import Button from './Button'

const RecipeHeader = ({recipe}) => {
  const [showEditForm, setShowEditForm] = useState(false)

  const recipeHeaderForm = <RecipeHeaderForm recipe={recipe} setShowEditForm={setShowEditForm}/>

  const recipeHeaderCard = (
    <div 
      className='recipe-header-display'
      onClick={() => setShowEditForm(true)}
    >
      <h1 className='recipe-title'>{recipe.name}</h1>
      <p className='recipe-description'>{recipe.description}</p>
      <Button 
        className='recipe-header-edit'
        name='toggle-edit' 
        value='Edit'
        icon='edit'
        onClick={() => setShowEditForm(true)}
      />    
    </div> 
  )

  return (
    <div className='recipe-header'>
      { showEditForm ? recipeHeaderForm : recipeHeaderCard }
    </div>
  )
}

export default RecipeHeader