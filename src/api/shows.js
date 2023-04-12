import axios from "axios"
import { API } from "../utils/constance"

export const getAllGeneres=async ()=>{
const res=await axios.get(API+'/api/v1/genres',{
    withCredentials:true
})
return res.data
}


export const getFavortieShows=async ()=>{
    const res=await axios.get(API+'/api/v1/shows/favorite',{
        withCredentials:true
    })
    return res.data
}

export const getViewedShows=async ()=>{
    const res=await axios.get(API+'/api/v1/shows/viewd',{
        withCredentials:true
    })
    return res.data
}

export const getWatchLaterShows=async ()=>{
    const res=await axios.get(API+'/api/v1/shows/watch-later',{
        withCredentials:true
    })
    return res.data
}

export const removeShowFromUserShows=async(id,listName)=>{
    const res=await axios.delete(API+`/api/v1/shows/${listName}/${id}`,{
        withCredentials:true
    })
    return res.data
}
