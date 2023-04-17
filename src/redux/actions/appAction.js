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


export const showScrollerApp=()=>{
    document.body.style.overflow=''
    return {
        type:'SHOW_SCROLLER'
    }
}


export const hideScrollerApp=()=>{
    document.body.style.overflow='hidden'
    return {
        type:'HIDE_SCROLLER'
    }
}