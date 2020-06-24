import React from 'react';
import css from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';



const Profile = (props) => {
    return (

        <div className={css.content}>

            <div className={css.profileDataWrapper}>
                <img alt="Avatar" src="https://i.pinimg.com/originals/7c/e2/a1/7ce2a139246e140c062f1acaf319f908.gif"></img>
                <div className={css.profileData}><h1>Master Blaster</h1>
                    <p>City: <span>Saint-Petersburg</span></p>
                    <p>Age: <span>23</span></p>
                    <p>Job: <span>Thunderdome</span></p>
                    <p>Proffession: <span>Top Fighter</span></p>
                </div>
            </div>

            <MyPostsContainer state={props.state} dispatch={props.dispatch} />

        </div>

    )
};

export default Profile;