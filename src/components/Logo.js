import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import '../css/logo.css'

const Logo = (props) => {

  return (
    <Link to='/'>
      <h1 className='app-logo'>Roughly</h1>
    </Link>
  )
}

export default Logo