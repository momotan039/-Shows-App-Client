import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/AuthReducer";


// const store=createStore(authReducer)
// const store=combineReducers({
// auth:authReducer
// })
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
