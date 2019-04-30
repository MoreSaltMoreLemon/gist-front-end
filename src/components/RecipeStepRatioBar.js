
import React from 'react';
import StepRatioElement from './StepRatioElement'

const StepRatioBar = ({step_ingredients, total}) => {
  const ratioBars = (step_ingredients) => {
    return step_ingredients.map(step_ingredient => {
      console.log(step_ingredient)
     return <StepRatioElement 
        key={"ratio" + step_ingredient.id + step_ingredient.quantity} 
        color={step_ingredient.color} 
        ratio={(step_ingredient.quantity / total) * 100} 
        label='placeholder label'       
      />
    })
  }

  return (
    <div 
      className='step-ratio-bar'>
      {step_ingredients? ratioBars(step_ingredients) : null}
    </div>
  );
};

export default StepRatioBar;
