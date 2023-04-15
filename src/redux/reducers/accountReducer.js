const initialState = {
    user: null,
  };

export const accountReducer=(state=initialState,action)=>{
switch (action.type) {
    case 'Edit_User_Preferences':
        return {
            ...state,
            user:action.payload
        }
    case 'Set_Current_User':
        return {
            ...state,
            user:action.payload
        }
    case 'ADD_FAVORITE_SHOW':
        return {
            ...state,
            user:action.payload
        }
        case 'REMOVE_FAVORITE_SHOW':
            return {
                ...state,
                user:action.payload
            }
        default:
            return state
}
}

export default accountReducer