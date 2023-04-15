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
  case 'ADD_TO_FAVORITE':
    return {...state,show:payload}
  case 'ADD_TO_WATCH_LATER':
    return {...state,show:payload}
  case 'ADD_TO_VIEWED':
    return {...state,show:payload}
  default:
    return state
  }
}
