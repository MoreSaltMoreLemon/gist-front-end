import React from 'react';
import RecipeStepCard from '../components/RecipeStepCard'

const RecipeStepsContainer = ({steps}) => {
  const renderSteps = steps => steps.map(step => <RecipeStepCard key={step.name + step.id} ingredients={step.ingredients} />)

  return (
    <div className='recipe-form'>
      {steps ? renderSteps(steps) : null}
      <footer>
        <button type='submit' className='step-add-button' value='Add Step'>Add Step</button>
      </footer>
    </div>
  );
};

export default RecipeStepsContainer;