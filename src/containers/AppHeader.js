import React from 'react';
import { HamburgerMenu } from './HamburgerMenu';
import { HeaderMenu } from './HeaderMenu';


const AppHeader = (props) => {
  const isHamburger = false;
  
  return (
    <header className='app-header'>
      { isHamburger ?
        <HamburgerMenu /> :
        <HeaderMenu />
      }
    </header>
  );
};

export default AppHeader;