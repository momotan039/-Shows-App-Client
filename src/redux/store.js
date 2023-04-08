import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import loaderReducer from "./reducers/loaderReducer";


// const store=createStore(authReducer)
// const store=combineReducers({
// auth:authReducer
// })
const store = configureStore({
  reducer: {
    auth: authReducer,
    loader:loaderReducer
  },
});

export default store;
