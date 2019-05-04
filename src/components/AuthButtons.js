import * as React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Button from './Button'

// Sign Up / Register
function SignUp (props) {
    return (
      <Link to='/sign-up'>
        <Button label="Sign Up" icon="register" />
      </Link>
    )
}

// Sign In / Login
function SignIn (props) {
    return (
      <Link to='/sign-in'>
        <Button label="Sign In" icon="register" />
      </Link>
    )
}

// Sign Out / Logout
function SignOut (props) {
    return (
      <Link to='/sign-out'>
        <Button label="Sign Out" icon="register" />
      </Link>
    )
}

export { 
  SignUp,
  SignIn,
  SignOut
}