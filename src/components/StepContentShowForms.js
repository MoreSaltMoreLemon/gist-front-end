import React, { useState } from 'react';
import StepIngredientForm from './StepIngredientForm'
import StepSubRecipeForm from './StepSubRecipeForm'
import ButtonLabel from './ButtonLabel'

function StepContentShowForms({recipe_step}) {
  const [showStepIngredientForm, setShowStepIngredientForm] = useState(false)
  const [showStepSubRecipeForm, setShowStepSubRecipeForm] = useState(false)
  
  // show Add Ingredient/Recipe as Ingredient buttons only if neither form
  // is diplayed. Pass down setShow... toggle
  return (
    <div>
      { (showStepIngredientForm || showStepSubRecipeForm) === false ?
        <>
          <button
            className='button'
            onClick={() => setShowStepIngredientForm(true)}
          >
            <ButtonLabel label="Add Ingredient" type="add" />
          </button>
          <button
            className='button'
            onClick={() => setShowStepSubRecipeForm(true)}
          >
            <ButtonLabel label="Add Ingredient As Recipe" type="add" />
          </button>
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