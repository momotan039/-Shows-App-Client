import axios from "axios"
import { API } from "../utils/constance"

export const setupAccount=async(prefes)=>{
    const res=await axios.post(API+'/api/v1/setup-account',prefes,{
        withCredentials:true
    })
    return res.data
  
}