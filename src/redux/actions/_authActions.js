import { createBrowserHistory } from "@remix-run/router";
import { signIn as _signIn, signUp as _signUp } from "../../api/auth";
import { getAllGeneres } from "../../api/shows";
import { saveUserToStorage } from "../../utils/localStorage";
import { setCurrentUser } from "./accountActions";
import { showError } from "./appAction";
import { hideLoader, showLoader } from "./loaderActions";

export const signIn = async (credentials, dispatch) => {
  const action = {
    type: "SIGN_IN",
    payload: null,
  };

  await _signIn(credentials)
    .then(async (data) => {
      saveUserToStorage(data.user);
      action.payload = data.user;
      //save the token to cookies
      // document.cookie=`token=${data.token}`
      dispatch(action);
      dispatch(setCurrentUser(data.user))
    })
    .catch((err) => {
      dispatch(showError(err));
    });
};

export const signUp = async (data, dispatch) => {
  try {
    const res = await _signUp(data);
    dispatch({
      type: "SIGN_UP",
      payload: res.message,
    });
  } catch (error) {
    dispatch(showError(error));
  }
};

export const logout = (dispatch) => {
  return new Promise((res,rej) => {
    localStorage.removeItem("user");
    dispatch(setCurrentUser(null))
    dispatch({
      type: "LOGOUT",
    });
    const history=createBrowserHistory()
      history.push('/')
    res()
  });
};
