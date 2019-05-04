import React, { Component } from 'react';
import { connect } from 'react-redux'
import { GithubPicker } from 'react-color'
import ButtonLabel from './ButtonLabel'
import { defaultColors, randomColor } from '../helpers/colors'

import { 
  addStepSubRecipeAction,
  editStepSubRecipeAction,
  removeStepSubRecipeAction
} from '../reducers/actions/stepSubRecipeActions'

const blankSubRecipe = {
  color: randomColor(), 
  sub_recipe: {name: ''}, 
  quantity: 0, 
  unit: '',
  instruction: ''
}

class StepSubRecipeForm extends Component {
  constructor(props) {
    super(props)
    
    let step_sub_recipe = props.step_sub_recipe || blankSubRecipe
    if (!step_sub_recipe.color) step_sub_recipe.color = randomColor()

    const subRecipeName = step_sub_recipe.sub_recipe.name

    this.state = { ...props.step_sub_recipe, showColorPicker: false, subRecipeName }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })
  
  handleColorChange = e => this.setState({ color: e.hex, showColorPicker: false })
  
  showColorPickerDisplay = () => this.setState({ showColorPicker: true })
  hideColorPickerDisplay = () => this.setState({ showColorPicker: false })

  handleSubmit = e => {
    e.preventDefault()
    
    if (this.props.isEditForm) {
      this.props.editStepSubRecipe(this.state, 1, 
        () => this.props.setShowForm(false))
    } else {
      // recipe_step_id, step_sub_recipe, user_id
      this.props.addStepSubRecipe(this.props.recipe_step.id, this.state, 1, 
        () => this.props.setShowForm(false))
    }
    
  }

  handleDelete = e => {
    this.props.removeStepSubRecipe(
      this.state,
      () => this.props.setShowForm(false)
    )
  }

  render() {
    return (
      <form 
        className='ingredient-card ingredient-form'
        // noValidate
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
            name='subRecipeName' 
            type="text" 
            required
            className='ingredient-name'
            placeholder='Sub Recipe Name'
            onChange={this.handleChange}
            value={this.state.subRecipeName}
          ></input>
          <input 
            name='quantity' 
            type="text" 
            required
            className='ingredient-quantity'
            placeholder='Qty'
            onChange={this.handleChange}
            value={this.state.quantity}
          ></input>
          <input 
            name='unit' 
            type="text" 
            required
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
          <button 
            type="submit"
            className='ingredient-submit' 
            value="Save"
          >
            <ButtonLabel label="Save Sub-Recipe" type="save" />
          </button>
          <button 
            type="button"
            className='ingredient-delete' 
            value="Delete"
            onClick={this.handleDelete}
          >
            <ButtonLabel label="Delete Sub-Recipe" type="remove" />
          </button>
        </div>
      </form>
    )
  }
}

// const mapStateToProps = state => { user }

const mapDispatchToProps = dispatch => {
  return {
    addStepSubRecipe:    async (recipe_step_uuid, step_sub_recipe, user_id, callbackFn) => {
      dispatch( await addStepSubRecipeAction(recipe_step_uuid, step_sub_recipe, user_id))
      callbackFn()
    },
    editStepSubRecipe:   async (step_sub_recipe, user_id, callbackFn) => {
      dispatch( await editStepSubRecipeAction(step_sub_recipe, user_id))
      callbackFn()
    },
    removeStepSubRecipe: async (step_sub_recipe, callbackFn) => {
      dispatch( await removeStepSubRecipeAction(step_sub_recipe))
      callbackFn()
    }
  }
}

export default connect(undefined, mapDispatchToProps)(StepSubRecipeForm)