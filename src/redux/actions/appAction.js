export const showError=(error)=>{
    return {
        type:'SHOW_ERROR',
        payload:error.response.data.message
    }
}

export const hideError=()=>{
    return {
        type:'HIDE_ERROR'
    }
}