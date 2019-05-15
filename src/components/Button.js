import React from "react";
import "../css/button.css";

// Small square button with material-ui icon
function Button({ className, id, onClick, type, icon }) {
  return (
    <button
      id={id || null}
      className={`button ${className}`}
      type={type}
      onClick={onClick}
    >
      <div className="button-container">
        <div className="button-block">
          <i className="material-icons button-icon">{icon}</i>
        </div>
      </div>
    </button>
  );
}

export default Button;
