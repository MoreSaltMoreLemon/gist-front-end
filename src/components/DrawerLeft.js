import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { createRecipeAction } from '../reducers/actions/recipesActions'
import MenuButton from './MenuButton'


const DrawerLeft = (props) => {
  return (
    <div className='drawer-left'>
      <MenuButton onClick={() => props.createRecipe({user_id: 1})} />
      <Link to='/'>Home</Link>
      <Link to='/recipes'>Recipes</Link>
      <Link to='/sign-in'>Sign In</Link>
      <Link to='/sign-up'>Sign Up</Link>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    createRecipe: async (recipe, jwt = '') => dispatch(await createRecipeAction(recipe, jwt))
  }
}
export default connect(null, mapDispatchToProps)(DrawerLeft)