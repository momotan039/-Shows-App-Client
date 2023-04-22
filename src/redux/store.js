import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/_authReducer";
import loaderReducer from "./reducers/loaderReducer";
import  accountReducer  from "./reducers/accountReducer";
import appReducer from "./reducers/appReducer";
import showReducer from "./reducers/showReducer";


// const store=createStore(authReducer)
// const store=combineReducers({
// auth:authReducer
// })
const store = configureStore({
  reducer: {
    // auth: authReducer,
    loader:loaderReducer,
    account:accountReducer,
    app:appReducer,
    show:showReducer
  },
});

export default store;
