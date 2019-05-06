import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import SignOut from '../components/SignOut'
import RecipeGallery from './RecipeGallery'
import RecipeForm from './RecipeForm'
import InvalidPath from '../components/InvalidPath'



const ContentContainer = (props) => {
  return (
    <div> 
      <Switch>
        <Route path='/sign-up' component={SignUp} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/sign-out' component={SignOut} />
        <Route path='/recipes/' exact component={RecipeGallery} />
        <Route 
          path='/recipes/:recipeId' 
          render={(props) => {
            console.log("ROUTE PROPS", props)
            return <RecipeForm recipeId={props.match.params.recipeId} />
          }}
        />
        <Route component={InvalidPath} />
      </Switch>   
    </div>
  )
}

export default ContentContainer