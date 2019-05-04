import React, { useState } from 'react'


function Button({onClick, type, label, icon}) {
  // const [showTip, setShowTip] = useState(false)

  return (
    <button 
      className='button' 
      type={type}
      onClick={onClick}
    >
      {/* <ReactTooltip place="top" type="light" effect="solid" >{label}</ReactTooltip> */}
      <div 
        className='button-container'
      >
        <div 
          className="button-block"
          // onMouseOver={() => setShowTip(true)}
          // onMouseLeave={() => setShowTip(false)}
        >
          <i className="material-icons button-icon">{icon}</i>
        </div>
      </div>
      
    </button>
  )
}

export default Button