import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {
    let PostList = props.state.WallPosts.PostData.map(data => (<Post message={data.message} likecount={data.likecount} />))

    let postTextUpdate = (e) => {
        let text = e.target.value
        props.updatePostCreator(text)
    }

    let textInput = React.createRef();
    let textInputMess = () => {
        props.addPostActionCreator();
    }


    return (

        <div className={css.myPostsWrapper}>
            <h2>My posts</h2>
            <div className={css.inputblock}>
                <textarea ref={textInput} value={props.newPostText} onChange={postTextUpdate} placeholder="Remember, be nice!" cols="30" rows="1"></textarea>
                <button onClick={textInputMess}>Send message</button>
            </div>
            {PostList}
        </div>

    )
};

export default MyPosts;