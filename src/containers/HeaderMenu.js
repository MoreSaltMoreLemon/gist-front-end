import React from 'react';
import { SignUp, SignIn, SignOut } from '../components/AuthButtons'

export function HeaderMenu (props) {
    return (
      <nav>
        <SignUp />
        <SignIn />
        <SignOut />
      </nav>
    );
}
