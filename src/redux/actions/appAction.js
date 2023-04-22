export const showError=(error)=>{
    return {
        type:'SHOW_ERROR',
        payload:error.response?.data.message
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

export const scrollToTop=(classElem)=>{
    let elem;
    if(classElem)
   {
       elem=document.querySelector(classElem)
       if(elem)
    elem.scrollIntoView({ behavior: 'smooth' })
   }
    else
    {
        elem=window
        elem.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    }
      return {
        type:'SCROLLING_TO_TOP'
      }
}

export const ShowPopUp=(message)=>{
    return {
        type:'SHOW_POPUP',
        payload:message
    }
}

export const HidePopUp=()=>{
    return {
        type:'HIDE_POPUP'
    }
}