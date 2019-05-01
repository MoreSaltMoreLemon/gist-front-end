import React, { useState } from 'react';
import StepIngredientForm from './StepIngredientForm'
import StepSubRecipeForm from './StepSubRecipeForm'

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

const StepIngredientCard = ({stepComponentContent, is_sub_recipe, total, sequenceEndIndex}) => {
  const [showEditForm, setShowEditForm] = useState(false)
  // debugger
  if (!stepComponentContent || showEditForm) {
    if (is_sub_recipe) {
      return (<StepSubRecipeForm 
        step_sub_recipe={stepComponentContent}
        setShowForm={setShowEditForm}
        isEditForm={true}
        sequenceEndIndex={sequenceEndIndex}
      />)
    } else {
      return (<StepIngredientForm 
        step_ingredient={stepComponentContent}
        setShowForm={setShowEditForm}
        isEditForm={true}
        sequenceEndIndex={sequenceEndIndex}
      />)
    }
  } else {
    return (
      <div 
        className='ingredient-card'
        onClick={() => setShowEditForm(true)}>
        <div className='ingredient-ratio-container'>
          <div 
            className='ingredient-ratio' 
            style={
              {
                backgroundColor: stepComponentContent.color, 
                width: `${(stepComponentContent.quantity / total) * 100}%`}
            }
          ></div>
        </div>
        <div className='ingredient-properties'>
          <span className='ingredient-name'>{
            is_sub_recipe ? 
            stepComponentContent.sub_recipe.name
            :
            stepComponentContent.ingredient.name
            }</span>
          <span className='ingredient-quantity'>{stepComponentContent.quantity}</span>
          <span className='ingredient-unit'>{stepComponentContent.unit_id}</span>
          <span className='ingredient-action'>{stepComponentContent.instruction}</span>
        </div>
      </div>      
    )
  }
}

export default StepIngredientCard;
