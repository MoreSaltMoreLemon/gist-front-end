import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

import App from './containers/App'
import { BrowserRouter as Route } from 'react-router-dom'
import LandingPage from './containers/LandingPage'
import SignUp from './containers/SignUp'
import SignIn from './containers/SignIn'
import SignOut from './containers/SignOut'
import RecipesGallery from './containers/RecipesGallery'
import RecipeForm from './containers/RecipeForm'



class AppRoutes extends Component {
  render() {
    return (
      <div className='app-container'>
        <Router>
          <Route path='/' exact render={() => <App content={<LandingPage />} />} />
          <Route path='/sign_up' render={() => <App content={<SignUp />} />} />
          <Route path='/sign_in' render={() => <App content={<SignIn />} />} />
          <Route path='/sign_out' render={() => <App content={<SignOut />} />} />
          <Route path='/recipes/:recipe_id' render={() => <App content={<RecipesGallery />} />} />
          <Route path='/recipes/' exact render={() => <App content={<RecipeForm />} />} />
        </Router>
      </div>      
    )
  }
}


export default AppRoutes
