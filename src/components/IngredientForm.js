
import React, { useState } from 'react';


const blankIngredient = {
  recipe: {
  color: '', 
  name: '', 
  quantity: 0, 
  unit: ''
  }
}

const IngredientForm = (props) => {

  const [color, setColor] = useState('')
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [unit, setUnit] = useState('')

  return (
    <form className='ingredient-card ingredient-form'>
      { color ?
        <div className='ingredient-ratio'>Recipe Ratio Drawer</div> :
        <div className='ingredient-ratio ingredient-color-picker'>Ingredient Color Picker</div>
      }
      <div className='ingredient-properties'>
        <input name='ingredient-name' type="text" className='ingredient-name'></input>
        <input name='ingredient-quantity' type="text" className='ingredient-quantity'></input>
        <input name='ingredient-unit' type="text" className='ingredient-unit'></input>
        <input name='ingredient-action' type="text" className='ingredient-action'></input>
        <input type="button" className='ingredient-submit' value="Add"></input>
      </div>
    </form>
  );
};

export default IngredientForm;
