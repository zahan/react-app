import React from 'react';
import css from './Post.module.css';

const Post = (props) => {
    return (

        <div className={css.item}>
            <div className={css.postAvatar}></div>
            <div className={css.postMessage}>
                {props.message} <br />
            </div>
            <span>{props.likecount} likes</span>

        </div>

    )
};

export default Post;