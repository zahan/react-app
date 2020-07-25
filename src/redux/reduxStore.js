import postReducer from "./postReducer";
import messageReducer from "./messageReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducersPack = combineReducers({
    WallPosts: postReducer,
    MessagesDia: messageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})
 
let store = createStore(reducersPack, applyMiddleware(thunkMiddleware))

window.store = store

export default store