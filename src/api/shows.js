import axios from "axios"
import { API } from "../utils/constance"

export const getAllGeneres=async ()=>{
const res=await axios.get(API+'/api/v1/genres',{
    withCredentials:true
})
return res.data
}

export const getTrendingShows=async (mediaType)=>{
    const res=await axios.get(API+'/api/v1/shows/trending/'+mediaType,{
        withCredentials:true
    })
    return res.data
}

export const getRecommendedShows=async (type,page)=>{
    const res=await axios.get(API+`/api/v1/shows/${type}/recommended`,{
        withCredentials:true,
        params:{
            page:page
        }
    })
    return res.data
}

export const getSearchedShows=async(type,searchedFor,_page)=>{
    const res=await axios.get(API+`/api/v1/search/${type}/${searchedFor}`,{
        withCredentials:true,
        params:{
            page:_page
        }
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


export const appendShowToUserShows=async(show,listName)=>{
    const res=await axios.post(API+`/api/v1/shows/${listName}`,show,{
        withCredentials:true
    })
    return res.data
}


export const getCasts=async(mediaType,id)=>{
    const res=await axios.get(API+`/api/v1/casts/${mediaType}/${id}`,{
        withCredentials:true
    })
    return res.data
}