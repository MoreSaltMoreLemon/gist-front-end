
import React from 'react';
import IngredientCard from './IngredientCard'
import IngredientForm from './IngredientForm'
import StepRatioBar from './StepRatioBar'



const RecipeStepCard = (props) => {
  return (
    <div className='recipe-step-card'>
      <StepRatioBar />
      <div className='recipe-ingredients'>
        <IngredientCard />
        <IngredientCard />
        <IngredientCard />
        <IngredientForm />
      </div>
    </div>
  );
};

export default RecipeStepCard;