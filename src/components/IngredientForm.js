import React, { Component } from 'react';
import { connect } from 'react-redux'
import { GithubPicker } from 'react-color'
import { defaultColors, randomColor } from '../helpers/colors'

import { 
  addIngredientAction,
  addRecipeAsIngredientAction,
  editIngredientAction,
  removeIngredientAction
} from '../actions/ingredientActions'

const blankIngredient = {
  color: randomColor(), 
  name: '', 
  quantity: 0, 
  unit: '',
  action: ''
}

class IngredientForm extends Component {
  constructor(props) {
    super(props)
    
    let ingredient = props.ingredient || blankIngredient

    this.state = {
      showColorPicker: false,
      color: ingredient.color,
      name: ingredient.name,
      quantity: ingredient.quantity,
      unit: ingredient.unit,
      action: ingredient.action,

    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })
  
  handleColorChange = e => this.setState({ color: e.hex, showColorPicker: false })
  
  showColorPickerDisplay = () => this.setState({ showColorPicker: true })
  hideColorPickerDisplay = () => this.setState({ showColorPicker: false })

  handleSubmit = e => {
    e.preventDefault()
    console.log("SUBMIT INGREDIENT STATE", this.state)
  }

  render() {
    return (
      <form 
        className='ingredient-card ingredient-form'
        onSubmit={this.handleSubmit}>
        <div className='ingredient-ratio-container'>
          <div 
              className='ingredient-color-swatch'
              style={{backgroundColor: this.state.color}}
              onClick={this.showColorPickerDisplay}
              onMouseEnter={this.showColorPickerDisplay}
              onMouseLeave={this.hideColorPickerDisplay}
          >
            {this.state.showColorPicker ? 
              <GithubPicker 
                name='color'
                className='ingredient-color-picker'
                color={this.state.color}
                colors={defaultColors}
                onChange={this.handleColorChange} 
              /> 
              :
              null
            }
          </div>
        </div>
        <div className='ingredient-properties'>
          <input 
            name='name' 
            type="text" 
            className='ingredient-name'
            placeholder='Ingredient Name'
            onChange={this.handleChange}
            value={this.state.name}
          ></input>
          <input 
            name='quantity' 
            type="text" 
            className='ingredient-quantity'
            placeholder='Qty'
            onChange={this.handleChange}
            value={this.state.quantity}
          ></input>
          <input 
            name='unit' 
            type="text" 
            className='ingredient-unit'
            placeholder='Unit'
            onChange={this.handleChange}
            value={this.state.unit}
          ></input>
          <input 
            name='action' 
            type="text" 
            className='ingredient-action'
            placeholder='What to do'
            onChange={this.handleChange}
            value={this.state.action}
          ></input>
          {/* <input 
            type="submit"
            className='ingredient-submit' 
            value="Add"
          ></input> */}
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addIngredient:    (ingredient) => dispatch(addIngredientAction(ingredient)),
    editIngredient:   (ingredient) => dispatch(editIngredientAction(ingredient)),
    removeIngredient: (ingredient) => dispatch(removeIngredientAction(ingredient))
  }
}

export default connect(undefined, mapDispatchToProps)(IngredientForm)