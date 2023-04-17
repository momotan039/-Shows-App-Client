const initialState = {
    error:null,
    showScroller:true
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
  default:
    return state
  }
}
