import { signIn as _signIn,signUp as _signUp } from "../../api/auth";
import { saveUserToStorage } from "../../utils/localStorage";

export const signIn = async (credentials, dispatch) => {
  const action = {
    type: "SIGN_IN",
    payload: null,
  };

  dispatch({
    type: "SIGN_IN",
    payload: null,
  })

  await _signIn(credentials)
    .then((data) => {
      saveUserToStorage(data.user)
      action.payload = data.user;
      dispatch(action);
    })
    .catch((err) => {
      action.payload = err.response.data.message;
      action.type = "ERORR";
      dispatch(action);
    });
};

export const signUp = async (data,dispatch) => {
  try {
    const res= await _signUp(data)
    dispatch({
      type: "SIGN_UP",
      payload: res.message,
    })
  } catch (error) {
    dispatch({
      type: "ERORR",
      payload: error.response.data.message,
    })
  }
};

export const logout=(dispatch)=>{
  localStorage.removeItem('user')
  dispatch({
    type: "LOGOUT"
  })
}