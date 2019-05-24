import React from 'react'
import { Redirect } from "react-router-dom";

const InvalidPath = (props) => {

  return (
    <Redirect to="/recipes" />
  )
}

export default InvalidPath