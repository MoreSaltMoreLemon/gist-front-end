import React from 'react'


function Button({className, id, onClick, type, label, icon}) {
  return (
    <button 
      id={id || null}
      className={`button ${className}`} 
      type={type}
      onClick={onClick}
    >
      
      <div 
        className='button-container'
      >
        <div 
          className="button-block"
        >
          <i className="material-icons button-icon">{icon}</i>
        </div>
      </div>
      
    </button>
  )
}

export default Button