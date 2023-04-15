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

export const addFavoriteShow=(show,user)=>{
  // const favorites=Array.from(user.favorite)
  // favorites.push(show)
  const temp=Object.assign({},user)
  temp.favorite.push(show)
  return {
    type: "ADD_FAVORITE_SHOW",
    payload: temp,
  };
}

export const removeFavoriteShow=(show,user)=>{
  const favorites=user.favorite.filter(f=>f.id!==show.id)
  return {
    type: "REMOVE_FAVORITE_SHOW",
    payload: favorites,
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


export const addShowLaterShow=(show)=>{
  return {
    type: "ADD_SHOW_LATER_SHOW",
    payload: show,
  };
}

export const removeShowLaterShow=(show)=>{
  return {
    type: "REMOVE_SHOW_LATER_SHOW",
    payload: show,
  };
}