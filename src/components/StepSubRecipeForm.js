import React, { Component } from 'react';
import { connect } from 'react-redux'
import { GithubPicker } from 'react-color'
import { defaultColors } from '../helpers/colors'

import { 
  addStepSubRecipeAction,
  editStepSubRecipeAction,
  removeStepSubRecipeAction
} from '../actions/stepSubRecipeActions'

class StepSubRecipeForm extends Component {
  constructor(props) {
    super(props)

    this.state = { ...props.step_sub_recipe, showColorPicker: false }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })
  
  handleColorChange = e => this.setState({ color: e.hex, showColorPicker: false })
  
  showColorPickerDisplay = () => this.setState({ showColorPicker: true })
  hideColorPickerDisplay = () => this.setState({ showColorPicker: false })

  handleSubmit = e => {
    e.preventDefault()
    console.log("SUBMIT SUB RECIPE STATE", this.state)
    if (this.props.isEditForm) {
      this.props.editStepSubRecipe(this.state)
    } else {
      this.props.addStepSubRecipe(this.state)
    }
    this.props.setShowForm(false)
  }

  handleDelete = e => {
    this.props.removeStepSubRecipe()
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
          ></input>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addStepSubRecipe:    (subRecipe) => dispatch(addStepSubRecipeAction(subRecipe)),
    editStepSubRecipe:   (subRecipe) => dispatch(editStepSubRecipeAction(subRecipe)),
    removeStepSubRecipe: (subRecipe) => dispatch(removeStepSubRecipeAction(subRecipe))
  }
}

export default connect(undefined, mapDispatchToProps)(StepSubRecipeForm)