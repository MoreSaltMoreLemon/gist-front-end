const errorReducer = (state = {}, action) => {
  let message = "";
  // alert(action.error)
  switch (action.type) {
    case "REQUEST_ERROR":
      message = "The request was denied. Please try again."
      return { ...state, error: action.error, message };
    case "NETWORK_ERROR":
      message = "Network error. Please try again. If the problem persists, please let me know at EzraSchwepker@gmail.com"
      return { ...state, error: action.error, message };
    case "REQUEST_TIMEOUT":
      message = "The server was too slow in responding. Note that this may be due to Heroku shutting down the server. Please try again in 20 seconds."
      return { ...state, error: action.error, message };
    case "TOO_MANY_REQUESTS":
      message = "An error was detected. Please refresh the page and try again."
      return { ...state, error: action.error, message };
    case "SERVICE_UNAVAILABLE":
      message = "Service is currently unavailable. Please try again later."
      return { ...state, error: action.error, message };
    case "NETWORK_AUTHENTICATION_REQUIRED":
      message = "Login authentication error. Please log in again."
      return { ...state, error: action.error, message };
    case "CLEAR_ERROR":
      return {};
    default:
      if (action.error) return { ...state, error: action.error };
      else return { ...state };
  }
};

export default errorReducer;
