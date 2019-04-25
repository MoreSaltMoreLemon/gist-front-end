import React, { useState } from 'react';
import IngredientForm from './IngredientForm'

const IngredientCard = ({ingredient}) => {
  const [showEditForm, setShowEditForm] = useState(false)

  if (!ingredient || showEditForm) return (
    <IngredientForm 
      ingredient={ingredient}
      // editIngredient=
    />)
  else return (
      <div 
        className='ingredient-card'
        onClick={() => setShowEditForm(true)}>
        <div className='ingredient-ratio'>Recipe Ratio Drawer</div>
        <div className='ingredient-properties'>
          <span className='ingredient-name'>{ingredient.name}</span>
          <span className='ingredient-quantity'>{ingredient.quantity}</span>
          <span className='ingredient-unit'>{ingredient.unit}</span>
          <span className='ingredient-action'>{ingredient.action}</span>
        </div>
      </div>      
  )
}

export default IngredientCard;
