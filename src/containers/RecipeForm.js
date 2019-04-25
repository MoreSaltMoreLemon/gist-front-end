import React from 'react';
import RecipeStepCard from '../components/RecipeStepCard'

const RecipeForm = (props) => {


  return (
    <div className='recipe-form'>
      <RecipeStepCard />
      <RecipeStepCard />
      <footer>
        <button type='submit' className='step-add-button' value='Add Step'>Add Step</button>
      </footer>
    </div>
  );
};

export default RecipeForm;