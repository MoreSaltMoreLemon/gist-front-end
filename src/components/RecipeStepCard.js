
import React from 'react';
import IngredientCard from './IngredientCard'
import StepRatioBar from './StepRatioBar'
import StepNameForm from './StepNameForm'

const totalIngredientQuantities = (ingredients) => {
  return ingredients.reduce((acc, ingredient) => {
    return acc + ingredient.quantity
  }, 0)
}


const RecipeStepCard = ({ingredients}) => {
  // ingredients = ingredients || [{ quantity: 0, unit: '', name: '', action: ''}]
  console.log("RECIPE STEP CARD", ingredients)
  const total = ingredients ? totalIngredientQuantities(ingredients) : 1

  const ingredientCards = (ingredients) => ingredients.map(ingredient => {
    return <IngredientCard key={ingredient.quantity} ingredient={ingredient} total={total}/>
  })
  
  return (
    <div className='recipe-step-card'>
      <StepNameForm />
      <StepRatioBar ingredients={ingredients} total={total}/>
      <div className='recipe-ingredients'>
        {ingredients && ingredients.length !== 0 ? ingredientCards(ingredients) : null}
        <IngredientCard />
      </div>
    </div>
  );
};

export default RecipeStepCard;