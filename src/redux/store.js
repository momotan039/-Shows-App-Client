import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import loaderReducer from "./reducers/loaderReducer";
import  accountReducer  from "./reducers/accountReducer";
import appReducer from "./reducers/appReducer";


// const store=createStore(authReducer)
// const store=combineReducers({
// auth:authReducer
// })
const store = configureStore({
  reducer: {
    auth: authReducer,
    loader:loaderReducer,
    account:accountReducer,
    app:appReducer
  },
});

export default store;
