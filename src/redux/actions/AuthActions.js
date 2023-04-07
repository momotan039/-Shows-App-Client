export const signIn=(credentials)=>{
    return {
        type:'SIGN_IN',
        payload:credentials
    }
}

export const signUp=(data)=>{
return{
    type:'SIGN_UP',
    payload:data
}
}
