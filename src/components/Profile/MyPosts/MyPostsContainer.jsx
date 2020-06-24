import React from 'react';
import { addPostActionCreator, updatePostCreator } from '../../../redux/postReducer';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {

    let postTextUpdate = (e) => {
        props.dispatch(updatePostCreator(e))
    }


    let textInputMess = () => {
        props.dispatch(addPostActionCreator());
    }


    return <MyPosts updatePostCreator = {postTextUpdate} addPostActionCreator = {textInputMess} state = {props.state}/>
};

export default MyPostsContainer;