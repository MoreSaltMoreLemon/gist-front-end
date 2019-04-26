import React from 'react';
import RecipeStepCard from '../components/RecipeStepCard'


const placeholderIngredients = [
  {
    color: '#008b02',
    name: 'Broccoli, yum',
    quantity: 3000,
    unit: 'g',
    action: 'dice'
  },
  {
    color: '#fab71f',
    name: 'Cheezie Sauce, yum',
    quantity: 5000,
    unit: 'g',
    action: ''
  },
  {
    color: '#f9d2f3',
    name: 'Heavy Cream',
    quantity: 7000,
    unit: 'g',
    action: ''
  },
  {
    color: '#e7e7e7',
    name: 'Salt, Kosher',
    quantity: 300,
    unit: 'g',
    action: ''
  }
]

const RecipeForm = (props) => {
  
  return (
    <div className='recipe-form'>
      <RecipeStepCard ingredients={placeholderIngredients} />
      <RecipeStepCard ingredients={placeholderIngredients} />
      <footer>
        <button type='submit' className='step-add-button' value='Add Step'>Add Step</button>
      </footer>
    </div>
  );
};

export default RecipeForm;