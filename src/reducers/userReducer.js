const userReducer = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case "CREATE_USER":
      if (action.user.jwt) {
        localStorage.setItem("jwt", action.user.jwt);
      }
      return { ...state, loggedIn: true, ...action.user };
    case "SET_USER":
      if (action.user.jwt) {
        localStorage.setItem("jwt", action.user.jwt);
      }
      return { ...state, loggedIn: true, ...action.user };
    case "CLEAR_USER":
      localStorage.removeItem("jwt");
      return { loggedIn: false };
    default:
      const jwt = localStorage.getItem("jwt");

      if (jwt && !state.jwt) {
        return { ...state, jwt, loggedIn: true };
      } else {
        return state;
      }
  }
};

export default userReducer;
