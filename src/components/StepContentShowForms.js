import React, { useState } from 'react';
import StepIngredientForm from './StepIngredientForm'
import StepSubRecipeForm from './StepSubRecipeForm'
import MenuButton from './MenuButton'

function StepContentShowForms({recipe_step}) {
  const [showStepIngredientForm, setShowStepIngredientForm] = useState(false)
  const [showStepSubRecipeForm, setShowStepSubRecipeForm] = useState(false)
  
  // show Add Ingredient/Sub-Recipe buttons only if neither form
  // is diplayed. Pass down setShow... toggle to sub forms
  // so that they can close themselves upon form submission.
  return (
    <div>
      { (showStepIngredientForm || showStepSubRecipeForm) === false ?
        <>
          <MenuButton
            className='button'
            onClick={() => setShowStepIngredientForm(true)}
            label="Add Ingredient" 
            icon="add"
          />
          <MenuButton
            className='button'
            onClick={() => setShowStepSubRecipeForm(true)}
            label="Add Sub-Recipe" 
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