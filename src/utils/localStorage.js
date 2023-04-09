export const saveUserToStorage=(user)=>{
    localStorage.setItem('user',JSON.stringify(user))
}

export const getUserfromStorage=(dispatch)=>{
    const user= JSON.parse( localStorage.getItem('user'))
    if(user)
    dispatch({
        type: "SIGN_IN",
        payload: user,
      });
}