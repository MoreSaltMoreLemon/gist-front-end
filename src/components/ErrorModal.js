import React, { useState } from "react";
import { connect } from "react-redux";
import "../css/modal.css";

// Displayed Modal with click-anywhere-to-hide handler
// upon an error action being generated within redux.
// Formats and displays.
const ErrorModal = ({ error, clearError }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = e => {
    setShowModal(false);
    clearError();
  };

  // If no error, hide modal and return nothing.
  if (!error) {
    if (showModal) setShowModal(false);
    return null;
  // Otherwise, if error and modal is not visible, toggle
  // display on, prompting a re-render with modal shown.
  } else if (error && !showModal) {
    setShowModal(true);
  } else {
    return (
      <div className="window-modal" onClick={handleClick}>
        <div className="error-modal">
          <h1 className="error-modal-title">Error!</h1>
          <p className="error-modal-message">{error.message}</p>
          <p className="error-modal-close">(click anywhere to close)</p>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({ ...state.error });

const mapDispatchToProps = dispatch => ({
  clearError: () => dispatch({ type: "CLEAR_ERROR" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorModal);
