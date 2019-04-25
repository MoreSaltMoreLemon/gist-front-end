import React from 'react';
import { SignUp, SignIn, SignOut } from '../components/AuthButtons'

export function HamburgerMenu (props) {
    return (
      <nav>
        <SignUp />
        <SignIn />
        <SignOut />
      </nav>
    );
}
