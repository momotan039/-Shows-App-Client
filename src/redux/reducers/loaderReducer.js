const initialState = {
  isPlaying: false,
  isFirstTime:true
};
 const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_LOADER":
      return {
        ...state,
        isPlaying: true
      };
      case "FIRST_TIME":
        return {
          isPlaying: true,
          isFirstTime: true,
        };
    case "HIDE_LOADER":
      return {
        isPlaying: false,
        isFirstTime: false,
      };
    default:
      return state;
  }
};

export default loaderReducer
