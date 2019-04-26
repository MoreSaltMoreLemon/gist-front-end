import React, { useState } from 'react';
import IngredientForm from './IngredientForm'

const IngredientCard = ({ingredient, total}) => {
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
        <div className='ingredient-ratio-container'>
          <div 
            className='ingredient-ratio' 
            style={
              {
                backgroundColor: ingredient.color, 
                width: `${(ingredient.quantity / total) * 100}%`}
            }
          ></div>
        </div>
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
