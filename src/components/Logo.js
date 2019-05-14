import React from 'react'
import { Link } from 'react-router-dom'
import '../css/logo.css'

const Logo = (props) => {

  return (
    <Link to='/recipes'>
      <h1 className='app-logo'>Roughly</h1>
    </Link>
  )
}

export default Logo