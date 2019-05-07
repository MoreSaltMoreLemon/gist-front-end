import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { createRecipeAction } from '../reducers/actions/recipesActions'
import MenuButton from './MenuButton'
import '../css/drawerLeft.css'


const DrawerLeft = (props) => {
  return (
    <div className='drawer-left'>
      <Switch>
        <Route path='/sign-up' render={() => {
          return (
            <nav className='drawer-nav'>
              <Link className='button-nav' to='/'>
                <MenuButton label='Home Page' className='homepage' icon='home' />
              </Link>
              <Link className='button-nav' to='/sign-in'>
                <MenuButton label='Sign In' className='sign-in' icon='view_module' />
              </Link>
              <Link className='button-nav' to='/recipes'>
                <MenuButton label='Recipes' className='recipe-gallery' icon='view_module' />
              </Link>              
            </nav>
          )
        }} />
        <Route path='/sign-in' render={() => {
          return (
            <nav className='drawer-nav'>
              <Link className='button-nav' to='/'>
                <MenuButton label='Home Page' className='homepage' icon='home' />
              </Link>
              <Link className='button-nav' to='/sign-up'>
                <MenuButton label='Sign Up' className='sign-up' icon='view_module' />
              </Link>
              <Link className='button-nav' to='/recipes'>
                <MenuButton label='Recipes' className='recipe-gallery' icon='view_module' />
              </Link>
            </nav>
          )
        }} />
        <Route path='/recipes/:recipe_id' render={() => {
          return (
            <nav className='drawer-nav'>
              <Link className='button-nav' to='/'>
                <MenuButton label='Home Page' className='homepage' icon='home' />
              </Link>
              <Link className='button-nav' to='/recipes'>
                <MenuButton label='Recipes' className='recipe-gallery' icon='view_module' />
              </Link>
              <Link className='button-nav' to={null}>              
                <MenuButton label='Create Recipe' className='recipe-create' icon='create' onClick={() => props.createRecipe({user_id: 1})} />
              </Link>
            </nav>
          )
        }} />
        <Route path='/recipes' render={() => {
          return (
            <nav className='drawer-nav'>
              <Link className='button-nav' to='/'>
                <MenuButton label='Home Page' className='homepage' icon='home' />
              </Link>
              <Link className='button-nav' to='/sign-in'>
                <MenuButton label='Sign In' className='sign-in' icon='view_module' />
              </Link>
              <Link className='button-nav' to='/sign-up'>
                <MenuButton label='Sign Up' className='sign-up' icon='view_module' />
              </Link>
              <Link className='button-nav' to='/recipes'>
                <MenuButton label='Recipes' className='recipe-gallery' icon='view_module' />
              </Link>
              <Link className='button-nav' to={null}>              
                <MenuButton label='Create Recipe' className='recipe-create' icon='create' onClick={() => props.createRecipe({user_id: 1})} />
              </Link>
            </nav>
          )
        }} />
        
      </Switch>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    createRecipe: async (recipe, jwt = '') => dispatch(await createRecipeAction(recipe, jwt))
  }
}
export default connect(null, mapDispatchToProps)(DrawerLeft)