const errorReducer = (state = {}, action) => {
  // alert(action.error)
  switch (action.type) {
    case "REQUEST_ERROR":
      return { ...state, error: action.error };
    case "NETWORK_ERROR":
      return { ...state, error: action.error };
    case "REQUEST_TIMEOUT":
      return { ...state, error: action.error };
    case "TOO_MANY_REQUESTS":
      return { ...state, error: action.error };
    case "SERVICE_UNAVAILABLE":
      return { ...state, error: action.error };
    case "NETWORK_AUTHENTICATION_REQUIRED":
      return { ...state, error: action.error };
    case "CLEAR_ERROR":
      return {};
    default:
      if (action.error) return { ...state, error: action.error };
      else return { ...state };
  }
};

export default errorReducer;
