const initialState = {
    error:null,
    showScroller:true,
    popup:{
      isShow:false,
      message:null
    }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    
  case 'SHOW_ERROR':
    return { ...state, error:payload }
  case 'HIDE_ERROR':
    return { ...state, error:null}
  case 'SHOW_SCROLLER':
    return {...state,showScroller:true}
  case 'HIDE_SCROLLER':
    return {...state,showScroller:false}
  case 'SHOW_POPUP':
    return {...state,popup:{isShow:true,message:payload}}
    case 'HIDE_POPUP':
    return {...state,popup:{...state.popup,isShow:false}}
  default:
    return state
  }
}
