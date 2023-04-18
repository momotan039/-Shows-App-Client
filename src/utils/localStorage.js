import { getAllGeneres } from "../api/shows"
import { setCurrentUser } from "../redux/actions/accountActions"

export const saveUserToStorage=(user)=>{
    localStorage.setItem('user',JSON.stringify(user))
}

export const getUserfromStorage=(dispatch)=>{
    const user= JSON.parse( localStorage.getItem('user'))
    if(user)
        dispatch(setCurrentUser(user))
}