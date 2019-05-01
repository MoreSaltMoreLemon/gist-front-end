import React, { Component } from 'react';
import { connect } from 'react-redux'
import { GithubPicker } from 'react-color'
import { defaultColors, randomColor } from '../helpers/colors'

import { 
  addStepIngredientAction,
  editStepIngredientAction,
  removeStepIngredientAction
} from '../actions/stepIngredientActions'

const blankIngredient = {
  color: randomColor(), 
  ingredient: {name: ''}, 
  quantity: 0, 
  unit: '',
  instruction: ''
}

class StepIngredientForm extends Component {
  constructor(props) {
    super(props)

    let step_ingredient = props.step_ingredient || blankIngredient
    if (!step_ingredient.color) step_ingredient.color = randomColor()

    const ingredientName = step_ingredient.ingredient.name

    this.state = { ...step_ingredient, showColorPicker: false, ingredientName }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })
  
  handleColorChange = e => this.setState({ color: e.hex, showColorPicker: false })
  
  showColorPickerDisplay = () => this.setState({ showColorPicker: true })
  hideColorPickerDisplay = () => this.setState({ showColorPicker: false })

  handleSubmit = e => {
    e.preventDefault()
    // debugger
    console.log("SUBMIT INGREDIENT STATE", this.state)
    if (this.props.isEditForm) {
      this.props.editStepIngredient(this.state, () => this.props.setShowForm(false))
    } else {
      // debugger
      this.props.addStepIngredient(this.props.recipe_step.id, this.state, () => this.props.setShowForm(false))
    }
  }

  handleDelete = e => {
    this.props.removeStepIngredient(this.state)
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
            name='ingredientName' 
            type="text" 
            className='ingredient-name'
            placeholder='Ingredient Name'
            onChange={this.handleChange}
            value={this.state.ingredientName}
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
            value={this.state.unit_id}
          ></input>
          <input 
            name='instruction' 
            type="text" 
            className='ingredient-instruction'
            placeholder='Instructions'
            onChange={this.handleChange}
            value={this.state.instruction}
          ></input>
          <input 
            type="submit"
            className='ingredient-submit' 
            value="Save"
          ></input>
          <input 
            type="button"
            className='ingredient-delete' 
            value="Delete"
            onClick={this.handleDelete}
          ></input>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addStepIngredient:    async (recipe_step_id, step_ingredient, callbackFn) => {
      dispatch(await addStepIngredientAction(recipe_step_id, step_ingredient))
      callbackFn()
    },
    editStepIngredient:   async (step_ingredient, callbackFn) => {
      dispatch(await editStepIngredientAction(step_ingredient))
      callbackFn()
    },
    removeStepIngredient: async (step_ingredient) => dispatch(await removeStepIngredientAction(step_ingredient))
  }
}

export default connect(undefined, mapDispatchToProps)(StepIngredientForm)