import axios from "axios"
import { API } from "../utils/constance"

export const getAllGeneres=async ()=>{
const res=await axios.get(API+'/api/v1/genres',{
    withCredentials:true
})
return res.data
}