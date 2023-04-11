const initialState = {
    error:null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    
  case 'SHOW_ERROR':
    return { ...state, error:payload }
  case 'HIDE_ERROR':
    return { ...state, error:null}
  default:
    return state
  }
}
