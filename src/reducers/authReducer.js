const AuthReducer = (state = {}, action) => {
  // console.log("Auth REDUCER", state, action)
  switch (action.type) {
    case "SET_AUTH":
      return { ...state, auth: action.auth };
    case "CLEAR_AUTH":
      return { ...state, auth: {} };
    default:
      return state;
  }
};

export default AuthReducer;
