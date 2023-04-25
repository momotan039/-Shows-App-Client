import { showPopUp } from "../redux/actions/appAction"
import { logout } from "../redux/actions/_authActions"
import store from "../redux/store"
import { saveUserToStorage } from "./localStorage"

export const showExpiredSessionDialog=(error)=>{
const message=error.response.data.message
store.dispatch(showPopUp(message,'sgin in again..','/'))
logout(store.dispatch)
saveUserToStorage(null)
}