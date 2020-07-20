import postReducer from "./postReducer";
import messageReducer from "./messageReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'

let reducersPack = combineReducers({
    WallPosts: postReducer,
    MessagesDia: messageReducer,
    usersPage: usersReducer,
    auth: authReducer
})
 
let store = createStore(reducersPack, applyMiddleware(thunkMiddleware))

window.store = store

export default store