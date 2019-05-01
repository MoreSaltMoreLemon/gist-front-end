import React, { Component } from 'react'
import { connect } from 'react-redux'

import { editRecipeAction } from '../actions/recipeActions'


class RecipeHeaderForm extends Component {
  constructor(props) {
    super(props)
    // debugger
    this.state = { ...this.props.recipe }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })
  
  handleSubmit = e => {
    e.preventDefault()
    this.props.editRecipe({...this.state}, 
      () => this.props.setShowEditForm(false))
  }

  render() {
    return (
      <form 
        className='recipe-header-form'
        onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="name"
          className='recipe-title'
          placeholder='Recipe Name'
          required
          onChange={this.handleChange}
          value={this.state.name}
        ></input>
        <input
          type='textarea'
          name='description'
          className='recipe-description'
          placeholder='Recipe Description'
          onChange={this.handleChange}
          value={this.state.description}
        ></input>
        <input
          type='submit'
          name='submit'
          className='recipe-submit button'
          value='Submit'
        ></input>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editRecipe: async (recipe, callbackFn) => {
      dispatch(await editRecipeAction(recipe))
      callbackFn()
    }
  }
}


export default connect(null, mapDispatchToProps)(RecipeHeaderForm)