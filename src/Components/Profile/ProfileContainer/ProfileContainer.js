import React,{useEffect, useState} from 'react';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import ProfileItem from '../ProfileItem/ProfileItem';
function ProfileContainer(props) {
    return (
        <div class="profile-container">
            <ProfileInfo userData={props.userData} follower={props.follower} following={props.following}/>
            <ProfileItem userData={props.userData}/>
        </div>
    );
}

export default ProfileContainer;