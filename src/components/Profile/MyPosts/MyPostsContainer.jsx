import React from 'react';
import { addPostActionCreator, updatePostCreator } from '../../../redux/postReducer';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {

    let dispatch = props.store.dispatch.bind(props.store)
    let state = props.store.getState()

    let postTextUpdate = (e) => {
        dispatch(updatePostCreator(e))
    }

    let textInputMess = () => {
        dispatch(addPostActionCreator());
    }


    return <MyPosts updatePostCreator = {postTextUpdate} addPostActionCreator = {textInputMess} state = {state}/>
};

export default MyPostsContainer;