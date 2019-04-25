
import React from 'react';
import IngredientCard from './IngredientCard'
import IngredientForm from './IngredientForm'
import StepRatioBar from './StepRatioBar'

const placeHolderIngredient = {
  color: '#008b02',
  name: 'Broccoli, yum',
  quantity: 3000,
  unit: 'g',
  action: 'dice'
}

const RecipeStepCard = (props) => {
  const editIngredient = ''
  return (
    <div className='recipe-step-card'>
      <StepRatioBar />
      <div className='recipe-ingredients'>
        <IngredientCard ingredient={placeHolderIngredient} />
        <IngredientCard ingredient={placeHolderIngredient} />
        <IngredientCard />
      </div>
    </div>
  );
};

export default RecipeStepCard;