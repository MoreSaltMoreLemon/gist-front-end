import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Auth = (props) => {

  return (
     <div>
      <Link to='/sign_up' />
      <Link to='/sign_in' />
      <Link to='/sign_out' />
      {/* <Button label="Sign Up" icon="register" /> */}
      {/* <Button label="Sign In" icon="register" /> */}
      {/* <Button label="Sign Out" icon="register" /> */}
     </div>
  )
}

export default Auth