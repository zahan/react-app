import postReducer from "./postReducer";
import messageReducer from "./messageReducer";
import { createStore, combineReducers } from "redux";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
/* const { createStore, combineReducers } = require("redux"); */

let reducersPack = combineReducers({
    WallPosts: postReducer,
    MessagesDia: messageReducer,
    usersPage: usersReducer,
    auth: authReducer
})
 
let store = createStore(reducersPack)

window.store = store

export default store