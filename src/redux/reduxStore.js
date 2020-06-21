import postReducer from "./postReducer";
import messageReducer from "./messageReducer";
import { createStore, combineReducers } from "redux";
/* const { createStore, combineReducers } = require("redux"); */

let reducersPack = combineReducers({
    WallPosts: postReducer,
    MessagesDia: messageReducer
})
 
let store = createStore(reducersPack)

export default store