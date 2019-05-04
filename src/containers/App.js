import React, { Component } from 'react';

import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

import DrawerLeft from '../components/DrawerLeft';
import DrawerRight from '../components/DrawerRight';
import ContentContainer from './ContentContainer';




const App = (content) => {
  console.log("APP CONTENT", content)
  return (
    <div>
      <AppHeader />
      <div className='app-body'>
        <DrawerLeft />
          {content}
        <DrawerRight />
      </div>
      <AppFooter />
    </div>
  );
};

export default App;