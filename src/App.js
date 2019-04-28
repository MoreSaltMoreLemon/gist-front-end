import React, { Component } from 'react'
import './App.css'

import AppHeader from './containers/AppHeader'
import AppBody from './containers/AppBody'
import AppFooter from './containers/AppFooter'

const App = () => {

  return (
    <div className='app-container'>
      <AppHeader />
      <AppBody />
      <AppFooter />
    </div>
  )
}

export default App;
