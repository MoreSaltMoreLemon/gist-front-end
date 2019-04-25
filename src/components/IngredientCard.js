import React from 'react';

const IngredientCard = (props) => {
  return (
    <div className='ingredient-card'>
      <div className='ingredient-ratio'>Recipe Ratio Drawer</div>
      <div className='ingredient-properties'>
        <span className='ingredient-name'>Ingredient Name</span>
        <span className='ingredient-quantity'>Qty</span>
        <span className='ingredient-unit'>Unit</span>
        <span className='ingredient-action'>Action</span>
      </div>
    </div>
  );
};

export default IngredientCard;
