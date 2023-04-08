import { signIn as _signIn,signUp as _signUp } from "../../api/auth";

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
      action.payload = data;
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
    debugger
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
