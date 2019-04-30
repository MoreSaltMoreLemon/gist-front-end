import React, { useState } from 'react';
import StepIngredientForm from './StepIngredientForm'

// sub_recipe
// color: {id: 1, hex: "#a6cee3"}
// color_id: 1
// id: 1
// instruction: null
// is_sub_recipe: true
// recipe_step: {id: 1, recipe_id: 1, yield: null, yeild_in_grams: null, yield_unit_id: 1, …}
// recipe_step_id: 1
// sequence_order: 0
// sub_recipe:
// color_id: 1
// id: 2
// name: "apple butter"

// sub_recipe_id: 2
// unit: {id: 1, name: "g", gram_conversion_factor: "1.0"}
// unit_id: 1

const StepIngredientCard = ({step_ingredient, is_sub_recipe, total, sequenceEndIndex}) => {
  const [showEditForm, setShowEditForm] = useState(false)
  // debugger
  if (!step_ingredient || showEditForm) return (
    <StepIngredientForm 
      step_ingredient={step_ingredient}
      setShowForm={setShowEditForm}
      isEditForm={!!step_ingredient}
      sequenceEndIndex={sequenceEndIndex}
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
                backgroundColor: step_ingredient.color, 
                width: `${(step_ingredient.quantity / total) * 100}%`}
            }
          ></div>
        </div>
        <div className='ingredient-properties'>
          <span className='ingredient-name'>{
            is_sub_recipe ? 
            step_ingredient.sub_recipe.name
            :
            step_ingredient.ingredient.name
            }</span>
          <span className='ingredient-quantity'>{step_ingredient.quantity}</span>
          <span className='ingredient-unit'>{step_ingredient.unit_id}</span>
          <span className='ingredient-action'>{step_ingredient.description}</span>
        </div>
      </div>      
  )
}

export default StepIngredientCard;
