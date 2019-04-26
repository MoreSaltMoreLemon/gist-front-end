
import React, { useReducer } from 'react';
import IngredientCard from './IngredientCard'
import IngredientForm from './IngredientForm'
import StepRatioBar from './StepRatioBar'
import StepNameForm from './StepNameForm'

const stepReducer = (state, action) => {
  let ingredients
  switch (action.type) {
    case 'ADD_INGREDIENT':
       ingredients = state.ingredients.concat(action.ingredient)
      return {...state, ingredients}
    case 'REMOVE_INGREDIENT':
      ingredients = state.ingredients.filter(ing => {
        return ing.name !== action.ingredient.name
      })
      return {...state, ingredients}
    default:
      return state
  }
}

const totalIngredientQuantities = (ingredients) => {
  return ingredients.reduce((acc, ingredient) => {
    return acc + ingredient.quantity
  }, 0)
}


const RecipeStepCard = ({ingredients}) => {
  // const [state, dispatch] = useReducer(stepReducer, ingredients)
  const total = totalIngredientQuantities(ingredients)

  const ingredientCards = ingredients.map(ingredient => {
    return <IngredientCard key={ingredient.quantity} ingredient={ingredient} total={total}/>
  })
  
  return (
    <div className='recipe-step-card'>
      <StepNameForm />
      <StepRatioBar ingredients={ingredients} total={total}/>
      <div className='recipe-ingredients'>
        {ingredientCards}
        <IngredientCard />
        <button 
          className='ingredient-add button' 
          value="Add"
        ></button>
      </div>
    </div>
  );
};

export default RecipeStepCard;