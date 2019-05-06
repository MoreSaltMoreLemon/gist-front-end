import React, { useState } from 'react';
import StepIngredientForm from './StepIngredientForm'
import StepSubRecipeForm from './StepSubRecipeForm'
import Button from './Button'

function StepContentShowForms({recipe_step}) {
  const [showStepIngredientForm, setShowStepIngredientForm] = useState(true)
  const [showStepSubRecipeForm, setShowStepSubRecipeForm] = useState(false)
  
  // show Add Ingredient/Recipe as Ingredient buttons only if neither form
  // is diplayed. Pass down setShow... toggle
  return (
    <div>
      { (showStepIngredientForm || showStepSubRecipeForm) === false ?
        <>
          <Button
            className='button'
            onClick={() => setShowStepIngredientForm(true)}
            label="Add Ingredient" 
            icon="add"
          />
          <Button
            className='button'
            onClick={() => setShowStepSubRecipeForm(true)}
            label="Add Ingredient As Recipe" 
            icon="add"
          />
        </>
        : null
      }
      { showStepIngredientForm ? 
          <StepIngredientForm 
            isEditForm={false} 
            recipe_step={recipe_step} 
            setShowForm={setShowStepIngredientForm}/> 
        : 
        null 
      }
      { showStepSubRecipeForm ? 
          <StepSubRecipeForm 
            isEditForm={false} 
            recipe_step={recipe_step} 
            setShowForm={setShowStepSubRecipeForm}/> 
        : 
        null 
      }
    </div>
  )
}

export default StepContentShowForms