import { signIn as _signIn } from "../../api/auth";

export const signIn = async (credentials) => {
  try {
    const data = await _signIn();
    return {
      type: "SIGN_IN",
      payload: data.user,
    };
  } catch (error) {
    return {
        type: "ERORR",
        payload: error,
      };
  }
};

export const signUp = (data) => {
  return {
    type: "SIGN_UP",
    payload: data,
  };
};
