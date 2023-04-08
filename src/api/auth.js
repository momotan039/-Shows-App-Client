import axios from "axios";
import { API } from "../utils/constance";

export const signIn=async(user)=>{
    const res=await axios.post(API+'/login',user,{
        withCredentials:true
    })
    return res.data
}

export const signUp=async(data)=>{
    const res=await axios.post(API+'/register',data)
    return res.data
}
