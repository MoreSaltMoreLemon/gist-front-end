import React, { Fragment, useState } from 'react';
import StepIngredientForm from './StepIngredientForm'
import StepSubRecipeForm from './StepSubRecipeForm'

function StepContentShowForms() {
  const [showStepIngredientForm, setShowStepIngredientForm] = useState(false)
  const [showStepSubRecipeForm, setShowStepSubRecipeForm] = useState(false)
  
  // show Add Ingredient/Recipe as Ingredient buttons only if neither form
  // is diplayed. Pass down setShow... toggle
  return (
    <div>
      { (showStepIngredientForm || showStepSubRecipeForm) === false ?
        <>
          <button
            onClick={() => setShowStepIngredientForm(true)}
          >Add Ingredient</button>
          <button
            onClick={() => setShowStepSubRecipeForm(true)}
          >Add Recipe as Ingredient</button>
        </>
        : null
      }
      { showStepIngredientForm ? <StepIngredientForm isEditForm={false} setShowForm={setShowStepIngredientForm}/> : null }
      { showStepSubRecipeForm ? <StepSubRecipeForm isEditForm={false} setShowForm={setShowStepSubRecipeForm}/> : null }
    </div>
  )
}

export default StepContentShowForms