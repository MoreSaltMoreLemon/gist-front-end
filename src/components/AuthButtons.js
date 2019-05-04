import * as React from 'react';
import ButtonLabel from './ButtonLabel'

// Sign Up / Register
function SignUp (props) {
    return (
      <div className="button">
        <ButtonLabel label="Sign Up" type="register" />
      </div>
    );
}

// Sign In / Login
function SignIn (props) {
    return (
      <div className="button">
        <ButtonLabel label="Sign Out" type="register" />
      </div>
    );
}

// Sign Out / Logout
function SignOut (props) {
    return (
      <div className="button">
        <ButtonLabel label="Sign Out" type="register" />
      </div>
    );
}

export { 
  SignUp,
  SignIn,
  SignOut
};