import React, { Fragment, useState } from 'react'
import RecipeHeaderForm from './RecipeHeaderForm'
import Button from './Button'
import '../css/recipeHeader.css'

const RecipeHeader = ({recipe}) => {
  const [showEditForm, setShowEditForm] = useState(false)

  const recipeHeaderForm = <RecipeHeaderForm recipe={recipe} setShowEditForm={setShowEditForm}/>

  const recipeHeaderCard = (
    <div 
      className='recipe-header-display'
      onClick={() => setShowEditForm(true)}
      style={{backgroundImage: `url(${recipe.image_url})`}}
    >
      <div className='recipe-title-container' >
        <h1 className='recipe-title opaque'>{recipe.name}</h1>
      </div>
      <p className='recipe-description opaque'>{recipe.description}</p>
      <Button 
        className='recipe-header-edit'
        name='toggle-edit' 
        value='Edit'
        icon='edit'
        // onClick={() => setShowEditForm(true)}
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