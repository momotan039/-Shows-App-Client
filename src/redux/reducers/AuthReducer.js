const initialState = {
    user: null,
    error:null,
    success:null
  };

const authReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case 'SIGN_IN':
            return{
                ...state,
                user:action.payload,
            }
        case 'SIGN_UP':
            return{
                ...state,
                success:action.payload
            }
            case 'LOGOUT':
            return{
                ...state,
                user:null
            }
            case 'ERORR':
                return{
                    ...state,
                    error:action.payload
                }
        default:
            return state
    }
}


export default authReducer