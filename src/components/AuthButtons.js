import * as React from 'react';
import Button from './Button'

// Sign Up / Register
function SignUp (props) {
    return (<Button label="Sign Up" icon="register" />)
}

// Sign In / Login
function SignIn (props) {
    return (<Button label="Sign In" icon="register" />)
}

// Sign Out / Logout
function SignOut (props) {
    return (<Button label="Sign Out" icon="register" />)
}

export { 
  SignUp,
  SignIn,
  SignOut
};