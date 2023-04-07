const initialState = {
    user: null,
    error:null
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
                user:action.payload
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