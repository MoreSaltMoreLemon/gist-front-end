import React, { Component } from 'react'

const blankRecipe = {
  name: '',
  createdBy: []
}

class RecipeHeaderForm extends Component {
  constructor(props) {
    super(props)

    let recipe = props.recipe || blankRecipe

    this.state = {
      name: recipe.name,
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
      </form>
    )
  }
}

export default RecipeHeaderForm