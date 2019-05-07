import React, { useState } from "react";
import { connect } from "react-redux";
import "../css/errorModal.css";
import { isEmpty } from "../helpers/miscHelpers";

const ErrorModal = ({ error, clearError }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = e => {
    setShowModal(false);
    clearError();
  };

  console.log("ERROR MODA", error);
  // debugger
  if (!error) {
    if (showModal) setShowModal(false);
    return null;
  } else if (error && !showModal) {
    console.log("yes error, no show modal, set show modal");
    setShowModal(true);
  } else {
    console.log("SHOW MODAL!!!")
    return (
      <div className="window-modal" onClick={handleClick}>
        <div
          className="error-modal"
          // onClick={() => setShowModal(false)}
        >
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
export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal);
