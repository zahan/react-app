import React from 'react';
import css from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../Misc/preloader';



const Profile = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (

        <div className={css.content}>

            <div className={css.profileDataWrapper}>
                {/* <img alt="Avatar" src="https://i.pinimg.com/originals/7c/e2/a1/7ce2a139246e140c062f1acaf319f908.gif"></img> */}
                <img src={props.profile.photos.large} alt="Avatar"/>
                <div className={css.profileData}><h1>{props.profile.fullName}</h1>
                    <p>City: <span>Saint-Petersburg</span></p>
                    <p>Age: <span>23</span></p>
                    <p>Job: <span>Thunderdome</span></p>
                    <p>Proffession: <span>Top Fighter</span></p>
                </div>
            </div>

            <MyPostsContainer store={props.store} />

        </div>

    )
};

export default Profile;