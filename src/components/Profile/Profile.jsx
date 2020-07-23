import React from 'react';
import css from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../Misc/preloader';
import userDefaultPhoto from '../../assets/user.png';
import ProfileStatus from './profileStatus';

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (

        <div className={css.content}>
            <div className={css.profileDataWrapper}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userDefaultPhoto} alt="Avatar"/>
                <div className={css.profileData}><h1>{props.profile.fullName}</h1>
                    <ProfileStatus status={props.status}/>
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