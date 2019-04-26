import React, { Component } from 'react'
import Avatar from './Avatar'

const blankRecipe = {
  name: '',
  description: '',
  createdBy: []
}

const placeholderUser = {
  username: 'Sally',
  avatarImageUrl: ''
}

class RecipeHeaderForm extends Component {
  constructor(props) {
    super(props)

    let recipe = props.recipe || blankRecipe

    this.state = {
      name: recipe.name,
      description: recipe.description,
      createdBy: recipe.createdBy
    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <form className='recipe-header form'>
        <input 
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
          value={this.state.name}
        ></input>
        <Avatar user={placeholderUser} />
      </form>
    )
  }
}

export default RecipeHeaderForm