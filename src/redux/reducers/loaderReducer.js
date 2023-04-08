const initialState = {
  isPlaying: false,
};
 const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_LOADER":
      return {
        ...state,
        isPlaying: true,
      };
    case "HIDE_LOADER":
      return {
        ...state,
        isPlaying: false,
      };
    default:
      return state;
  }
};

export default loaderReducer
