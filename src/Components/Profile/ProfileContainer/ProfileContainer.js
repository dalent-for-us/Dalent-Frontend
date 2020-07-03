import React from 'react';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import ProfileItem from '../ProfileItem/ProfileItem';
function ProfileContainer() {
    return (
        <div class="profile-container">
            <ProfileInfo/>
            <ProfileItem/>
        </div>
    );
}

export default ProfileContainer;