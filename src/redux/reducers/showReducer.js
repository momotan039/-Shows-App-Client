const initialState = {
   show:null,
   genres:null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case 'SELECT_SHOW':
    return { ...state, show:payload }
  case 'SET_GENRES_SHOWS':
    return {...state,genres:payload}
  default:
    return state
  }
}
