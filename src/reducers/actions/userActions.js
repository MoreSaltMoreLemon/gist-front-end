import { handleRequestAction } from "../../helpers/httpHelpers";
import { USERS_URL, LOGIN_URL } from "../../routes";

async function createUserAction(user) {
  return await handleRequestAction(
    USERS_URL,
    "post",
    { user },
    "CREATE_USER",
    "user"
  );
}

async function signInUserAction(user) {
  return await handleRequestAction(
    LOGIN_URL,
    "post",
    { user },
    "SET_USER",
    "user"
  );
}

async function signOutUserAction() {
  return { type: "CLEAR_USER" };
}

export { createUserAction, signInUserAction, signOutUserAction };
