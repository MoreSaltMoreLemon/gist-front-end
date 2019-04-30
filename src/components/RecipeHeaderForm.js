import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createRecipe } from '../actions/asyncRecipeActionWrappers'
import { editRecipeAction } from '../actions/recipeActions'



const placeholderUser = {
  username: 'Sally',
  avatarImageUrl: ''
}

class RecipeHeaderForm extends Component {
  constructor(props) {
    super(props)
    // debugger
    this.state = {
      name: props.recipe.name || '',
      description: props.recipe.description || ''
    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })
  
  handleSubmit = e => {
    e.preventDefault()
    this.props.editRecipe({...this.state})
    this.props.setShowEditForm(false)
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
    createRecipe: (recipe, jwt = '') => createRecipe(recipe, dispatch, jwt),
    editRecipe:   (recipe) => dispatch(editRecipeAction(recipe))
  }
}


export default connect(null, mapDispatchToProps)(RecipeHeaderForm)