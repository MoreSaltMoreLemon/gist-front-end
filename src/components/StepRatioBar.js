
import React from 'react';
import StepRatioElement from './StepRatioElement'

const StepRatioBar = ({ingredients, total}) => {
  const ratioBars = ingredients.map(ingredient =>
      <StepRatioElement 
        key={ingredient.quantity} 
        color={ingredient.color} 
        ratio={(ingredient.quantity / total) * 100} 
        label='placeholder label'       
      />
  )

  return (
    <div 
      className='step-ratio-bar'>
      {ratioBars}
    </div>
  );
};

export default StepRatioBar;
