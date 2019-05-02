
import React from 'react';
import StepRatioElement from './StepRatioElement'

const StepRatioBar = ({step_contents, total}) => {
  const ratioBars = (step_contents) => {
    return step_contents.map((step_ingredient, index) => {
     return <StepRatioElement 
        key={"StepRatioElement" + step_ingredient.id + index} 
        color={step_ingredient.color} 
        ratio={(step_ingredient.quantity / total) * 100} 
        label='placeholder label'       
      />
    })
  }

  return (
    <div 
      className='step-ratio-bar'>
      {step_contents? ratioBars(step_contents) : null}
    </div>
  );
};

export default StepRatioBar;
