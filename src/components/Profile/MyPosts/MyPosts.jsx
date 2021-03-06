import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLenghtCreator } from '../../../utilities/validators';
import { TextArea } from '../../Misc/formControls';

const maxLenghtCreator10 = maxLenghtCreator(10);

const MyPosts = (props) => {

    let PostList = props.WallPost.PostData.map(data => (<Post message={data.message} key={data.id} likecount={data.likecount} />))

    let newPostFromForm = (values) => {
        props.addPostActionCreator(values.newPostText)
    }

    return (
        <div className={css.myPostsWrapper}>
            <h2>My posts</h2>
            <AddPostFormRedux onSubmit={newPostFromForm}/>
            {PostList}
        </div>
    )
};

const addPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={css.inputblock}>
                <Field component={TextArea} name='newPostText' placeholder="Remember, be nice!" validate={[required, maxLenghtCreator10]} />
                <button>Send message</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm ({ form: 'addPostOnMyWall' }) (addPostForm)

export default MyPosts;