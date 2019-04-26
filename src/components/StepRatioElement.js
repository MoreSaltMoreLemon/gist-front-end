import React from 'react'

const StepRatioElement = ({ratio, color, label}) => {
  return (
    <div 
      className='step-ratio-element' 
      style={
        {
          backgroundColor: color, 
          width: `${ratio * 100}%`
        }
      }
    ></div>
  )
}

export default StepRatioElement
