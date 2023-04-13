import { getAllGeneres } from "../api/shows"
import { setCurrentUser } from "../redux/actions/accountActions"
import { setGenresShows } from "../redux/actions/showActions"

export const saveUserToStorage=(user)=>{
    localStorage.setItem('user',JSON.stringify(user))
}

export const getUserfromStorage=(dispatch)=>{
    const user= JSON.parse( localStorage.getItem('user'))
    if(user)
    {
        dispatch(setCurrentUser(user))
        getAllGeneres().then(gns=>{
            dispatch(setGenresShows(gns))
        })
    }
}