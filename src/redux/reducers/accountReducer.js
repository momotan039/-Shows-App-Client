const initialState = {
  user: null,
};

export const accountReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "Edit_User_Preferences":
      return {
        ...state,
        user: {
            ...state.user,
            ...payload
        },
      };
    case "Set_Current_User":
      return {
        ...state,
        user: payload,
      };
    case "ADD_FAVORITE_SHOW":
  return {
    ...state,
    user: {
      ...state.user,
      favorite: [...state.user.favorite, payload],
    },
  };
  case "REMOVE_FAVORITE_SHOW":
    return {
      ...state,
      user: {
          ...state.user,
          favorite:state.user.favorite.filter(s=>s.id!==payload)
      },
    };

    case "ADD_VIEWED_SHOW":
  return {
    ...state,
    user: {
      ...state.user,
      viewed: [...state.user.viewed, payload],
    },
  };
  case "REMOVE_VIEWED_SHOW":
    return {
      ...state,
      user: {
          ...state.user,
          viewed:state.user.viewed.filter(s=>s.id!==payload)
      },
    };
    case "ADD_WATCH_LATER_SHOW":
  return {
    ...state,
    user: {
      ...state.user,
      watchLater: [...state.user.watchLater, payload],
    },
  };
    case "REMOVE_WATCH_LATER_SHOW":
      return {
        ...state,
        user: {
            ...state.user,
            watchLater:state.user.watchLater.filter(s=>s.id!==payload)
        },
      };
    default:
      return state;
  }
};

export default accountReducer;
