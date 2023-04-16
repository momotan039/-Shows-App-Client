import { setupAccount } from "../../api/account";
import { saveUserToStorage } from "../../utils/localStorage";
import { showError } from "./appAction";

export const editUserPreferences = async (prefs) => {
  try {
    const preferences = await setupAccount(prefs);
    return {
      type: "Edit_User_Preferences",
      payload: preferences,
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

export const addFavoriteShow=(show)=>{
  return {
    type: "ADD_FAVORITE_SHOW",
    payload: show,
  };
}

export const removeFavoriteShow=(show_id)=>{
  return {
    type: "REMOVE_FAVORITE_SHOW",
    payload: show_id,
  };
}

export const addViewedShow=(show)=>{
  return {
    type: "ADD_VIEWED_SHOW",
    payload: show,
  };
}

export const removeViewedShow=(show)=>{
  return {
    type: "REMOVE_VIEWED_SHOW",
    payload: show,
  };
}


export const addWatchLaterShow=(show)=>{
  return {
    type: "ADD_WATCH_LATER_SHOW",
    payload: show,
  };
}

export const removeWatchLaterShow=(show)=>{
  return {
    type: "REMOVE_WATCH_LATER_SHOW",
    payload: show,
  };
}