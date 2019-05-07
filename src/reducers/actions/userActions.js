import uuidv4 from "uuid/v4";
import { handleRequestAction } from "../../helpers/httpHelpers";
import { USERS_URL, LOGIN_URL, LOGOUT_URL } from "../../routes";

async function createUserAction(user, jwt = "") {
  return await handleRequestAction(
    USERS_URL,
    "post",
    { user },
    jwt,
    "CREATE_USER",
    "user"
  );
}

async function signInUserAction(user, jwt = "") {
  return await handleRequestAction(
    LOGIN_URL,
    "post",
    { user },
    jwt,
    "SET_USER",
    "user"
  );
}

async function signOutUserAction(user, jwt = "") {
  return { type: 'CLEAR_USER' }
}

export { createUserAction, signInUserAction, signOutUserAction };
