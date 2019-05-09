const userReducer = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case "CREATE_USER":
      localStorage.setItem("jwt", action.user.jwt);
      localStorage.setItem("userId", action.user.user.id);

      return { ...state, loggedIn: true, ...action.user };
    case "SET_USER":
      localStorage.setItem("jwt", action.user.jwt);
      localStorage.setItem("userId", action.user.user.id);

      return { ...state, loggedIn: true, ...action.user };
    case "CLEAR_USER":
      localStorage.removeItem("jwt");
      localStorage.removeItem("userId");
      return { loggedIn: false };
    default:
      const jwt = localStorage.getItem("jwt");
      const id = localStorage.getItem("userId");

      if (jwt && !state.jwt) {
        if (id) {
          return { ...state, jwt, loggedIn: true, user: { id } };
        } else {
          return { ...state, jwt, loggedIn: true };
        }
      } else {
        return state;
      }
  }
};

export default userReducer;
