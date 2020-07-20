import React,{useEffect, useState} from 'react';
import ProfileContainer from '../Components/Profile/ProfileContainer/ProfileContainer';
import axios from 'axios';

function Home({match}) {
    const [following, setFollowing] = useState(0);
    const [follower, setFollower] = useState(0);
    const [user, setUser] = useState({});
    useEffect(() => {
        axios.get(`http://3.34.0.219:8080/users/${match.params.name}`)
        .then(response => setUser(response.data))
        .catch(err => console.log(err))
        axios.get(`http://3.34.0.219:8080/followings?nickname=${match.params.name}`)
        .then(response => setFollowing(response.data))
        .catch(err => console.log(err))
        axios.get(`http://3.34.0.219:8080/followers?nickname=${match.params.name}`)
        .then(response => setFollower(response.data))
        .catch(err => console.log(err))
    }, [])
    return(
        <>
            <div class="body">
                <ProfileContainer userData={user} follower={follower} following={following}/>
            </div>
        </>
    )
};

export default Home;