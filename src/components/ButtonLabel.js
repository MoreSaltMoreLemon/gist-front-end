import React, { useState } from 'react'

function ButtonLabel({type, label}) {
  const [showTip, setShowTip] = useState(false)

  return (
    <div>
      <div className='button-container'>
        <div 
          className="button-block"
          onMouseOver={() => setShowTip(true)}
          onMouseLeave={() => setShowTip(false)}
        >
          <i className="material-icons button-icon">{type}</i>
        </div>
        <div>
          {/* <span 
            className={`button-tip ${showTip ? '' : 'button-tip-hide'}`}
            onMouseOver={() => setShowTip(true)}
            onMouseLeave={() => setShowTip(false)}
            style={{zIndex: 1000}}
          >{label}</span> */}
        </div>
      </div>
    </div>
  )
}

export default ButtonLabel