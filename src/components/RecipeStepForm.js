
import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactTooltip from 'react-tooltip'

import { GithubPicker } from 'react-color'
import { defaultColors, randomColor } from '../helpers/colors'
import RecipeStepRatioBar from './RecipeStepRatioBar'
import Button from './Button'

import { editRecipeStepAction, removeRecipeStepAction } from '../reducers/actions/recipeStepActions'

const blankStep = {
  color: randomColor(), 
  name: '',
}

class RecipeStepForm extends Component {
  constructor(props) {
    super(props)

    let recipe_step = props.recipe_step || blankStep
    if (!recipe_step.color) recipe_step.color = randomColor()

    this.state = {...props.recipe_step, showColorPicker: false }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })
  
  handleColorChange = e => {
    this.setState({ color: e.hex, showColorPicker: false })
  }
  
  showColorPickerDisplay = () => this.setState({ showColorPicker: true })
  hideColorPickerDisplay = () => this.setState({ showColorPicker: false })

  handleSubmit = e => {
    e.preventDefault()
    console.log("SUBMIT INGREDIENT STATE", this.state)
    this.props.editRecipeStep(this.state)
  }

  handleDelete = e => {
    this.props.removeRecipeStep(this.state)
  }

  receipeStepContents = () => {
    return [...this.props.recipe_step.step_ingredients, ...this.props.recipe_step.step_sub_recipes]
  }

  render() {
    // debugger
    return (
      <form 
        className='step-name-container form'
        onSubmit={this.handleSubmit}>
        <ReactTooltip id='global' place="top" type="light" effect="solid" aria-haspopup='true' role='global tooltip'/>
        <div className='step-properties'>
          <input 
            name='name' 
            type="text" 
            className='step-name'
            placeholder='Step Name'
            onChange={this.handleChange}
            value={this.state.name}
          ></input>
          <div 
              className='step-color-swatch'
              style={{backgroundColor: this.state.color}}
              onClick={this.showColorPickerDisplay}
              onMouseEnter={this.showColorPickerDisplay}
              onMouseLeave={this.hideColorPickerDisplay}
          >
            {this.state.showColorPicker ? 
              <GithubPicker 
                name='color'
                className='step-color-picker'
                color={this.state.color}
                colors={defaultColors}
                onChange={this.handleColorChange} 
              /> 
              :
              null
            }
          </div> 
        </div>
        <RecipeStepRatioBar step_contents={this.receipeStepContents()} total={this.props.total}/>
        <div className='recipe-ingredients'>
          {this.props.children}
        </div>
        <div className='step-yield-container'>
          <label htmlFor='yield' >Yield: </label>
          <input 
            name='yield' 
            type="text" 
            className='step-yield-quantity'
            placeholder='Yield'
            onChange={this.handleChange}
            value={this.state.yield}
          />
          <input 
            name='yield_unit_id' 
            type="text" 
            className='step-yield-unit'
            placeholder='Yield Unit'
            onChange={this.handleChange}
            value={this.state.yield_unit_id}
          ></input>
        </div> 
        <div className='step-edit-buttons'>
          <Button 
            type="submit"
            className='step-submit button' 
            label="Edit" 
            icon="edit"
            // value="Save"
          />
          <Button 
            type="button"
            className='step-delete' 
            label="Delete" 
            icon="remove"
            data-tip='global'
            data-for='Delete'
            onClick={this.handleDelete}
          />
        </div>
      </form>
    )
  }
};

const mapDispatchToProps = dispatch => {
  return {
    editRecipeStep:   async (recipe_step) => dispatch(await editRecipeStepAction(recipe_step)),
    removeRecipeStep: async (recipe_step) => dispatch(await removeRecipeStepAction(recipe_step))
  }
}

export default connect(undefined, mapDispatchToProps)(RecipeStepForm)