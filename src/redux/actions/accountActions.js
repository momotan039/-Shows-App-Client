import { setupAccount } from "../../api/account";
import { saveUserToStorage } from "../../utils/localStorage";
import { showError } from "./appAction";

export const editUserPreferences = async (prefs) => {
  try {
    const user = await setupAccount(prefs);
    saveUserToStorage(user);
    return {
      type: "Edit_User_Preferences",
      payload: user,
    };
  } catch (error) {
    return showError(error)
  }
};


export const setCurrentUser=(user)=>{
    return {
        type: "Set_Current_User",
        payload: user,
      };
}