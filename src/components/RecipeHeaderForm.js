import React, { Component } from 'react'
import { connect } from 'react-redux'
import ButtonLabel from './ButtonLabel'

import { editRecipeAction, deleteRecipeAction } from '../reducers/actions/recipeActions'


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
          maxLength='280'
          className='recipe-description'
          placeholder='Recipe Description'
          onChange={this.handleChange}
          value={this.state.description}
        ></input>
        <button
          type='submit'
          name='submit'
          className='recipe-submit button'
          value='Submit'
        >
          <ButtonLabel label="Save" type="save" />
        </button>
        {/* <button onClick={() => props.updateRecipe({id: props.recipe.id, name: "RenamedTestRecipe", user_id: 1})}><i class="material-icons button-icon">edit</i></button> */}
        <button 
          className='recipe-remove button'
          onClick={() => this.props.removeRecipe({id: this.props.recipe.id})}
        >
          <ButtonLabel label="Delete" type="remove" />
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editRecipe: async (recipe, callbackFn) => {
      dispatch(await editRecipeAction(recipe))
      callbackFn()
    },
    // createRecipe: async (recipe, user, jwt = '') => dispatch(await createRecipeAction(recipe, user, jwt)),
    // updateRecipe: async (recipe, jwt = '') => dispatch(await editRecipeAction(recipe, jwt)),
    removeRecipe: async (recipe, jwt = '') => dispatch(await deleteRecipeAction(recipe, jwt))
    
  }
}


export default connect(null, mapDispatchToProps)(RecipeHeaderForm)