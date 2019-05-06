import React from 'react'
import '../css/button.css'


function MenuButton({className, id, onClick, type, label, icon}) {
  return (
    <button 
      id={id || null}
      className={`menu button ${className}`} 
      type={type}
      onClick={onClick}
    >
      
      <div 
        className='menu button-container'
      >
        <div 
          className="menu button-block"
        >
          <i className="menu material-icons button-icon">{icon}</i>
          <span>{label}</span>
        </div>
      </div>
      
    </button>
  )
}

export default MenuButton