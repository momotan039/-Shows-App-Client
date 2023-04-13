const initialState = {
   show:null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case 'SELECT_SHOW':
    return { ...state, show:payload }

  default:
    return state
  }
}
