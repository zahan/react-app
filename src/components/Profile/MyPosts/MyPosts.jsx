import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updatePostCreator } from '../../../redux/postReducer';



const MyPosts = (props) => {

    let PostList = props.state.PostData.map(data => (<Post message={data.message} likecount={data.likecount} />))

    let newPostText = props.state.newPost
    
    let postTextUpdate = (e) => {
        let text = e.target.value
        props.dispatch(updatePostCreator(text))
        debugger
    }

    let textInput = React.createRef();
    let textInputMess = () => {
        props.dispatch(addPostActionCreator());
    }


    return (

        <div className={css.myPostsWrapper}>
            <h2>My posts</h2>
            <div className={css.inputblock}>
                <textarea ref={textInput} value={newPostText} onChange={postTextUpdate} placeholder="Remember, be nice!" cols="30" rows="1"></textarea>
                <button onClick={textInputMess}>Send message</button>
            </div>
            {PostList}
        </div>

    )
};

export default MyPosts;