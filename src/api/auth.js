import axios from "axios";
import { API } from "../utils/constance";
// export const signIn=async(user)=>{
//     const res=await axios.post(API+'/login',user)
//     return res.data
// }

export const signIn=async(user)=>{
   new Promise((res,rej)=>{
        setTimeout(() => {
            res({
                    "_id": "642f14e62f7de1b54b083c05",
                    "email": "momotaha039@gmail.com",
                    "name": "mohammed taha",
                    "preferences": {
                        "lang": "en",
                        "show_lang": "fr",
                        "genres": [
                            {
                                "id": 35,
                                "name": "Comedy"
                            },
                            {
                                "id": 80,
                                "name": "Crime"
                            }
                        ]
                    }
            })
        }, 2000);
   })
}