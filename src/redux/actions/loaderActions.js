export const showLoader=()=>{
   return{
        type:'SHOW_LOADER',
        payload:true
   } 
}

export const hideLoader=()=>{
    return{
         type:'HIDE_LOADER',
         payload:false
    } 
 }

 export const firstTimeLoader=()=>{
     return{
          type:'FIRST_TIME',
          payload:true
     } 
  }