import React from 'react';
import Header from '../Components/Header/Header';
import ProfileContainer from '../Components/Profile/ProfileContainer/ProfileContainer';

function Home() {
    return(
        <>
            <Header/>
            <div class="body">
                <ProfileContainer/>
            </div>
        </>
    )
};

export default Home;