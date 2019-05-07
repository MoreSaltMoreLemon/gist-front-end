const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_USER":
      if (action.user.jwt) {
        localStorage.setItem("jwt", action.user.jwt);
      }
      return { ...action.user };
    case "SET_USER":
      if (action.user.jwt) {
        localStorage.setItem("jwt", action.user.jwt);
      }
      return { ...action.user };
    case "CLEAR_USER":
      if (action.user.jwt) {
        localStorage.removeItem("jwt");
      }
      return {};
    default:
      return state;
  }
};

export default userReducer;
