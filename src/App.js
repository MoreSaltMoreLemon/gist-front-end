import React, { Component } from 'react'
import './App.css'

import AppHeader from './containers/AppHeader'
import AppBody from './containers/AppBody'
import AppFooter from './containers/AppFooter'



class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <AppHeader />
        <AppBody />
        <AppFooter />
      </div>
    )
  }
}


export default App
